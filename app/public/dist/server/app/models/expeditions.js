"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlayerExpeditionsAfterGame = updatePlayerExpeditionsAfterGame;
exports.checkExpeditionCompletion = checkExpeditionCompletion;
const config_1 = require("../config");
const expeditions_1 = require("../config/game/expeditions");
const expeditions_2 = require("../core/expeditions");
const notifications_1 = require("../services/notifications");
const types_1 = require("../types");
const Expedition_1 = require("../types/enum/Expedition");
const schemas_1 = require("../utils/schemas");
const user_metadata_1 = require("./mongo-models/user-metadata");
function updatePlayerExpeditionsAfterGame(player, usr) {
    const expeditions = (0, expeditions_2.getPlayerExpeditions)(usr);
    let hasCompletedExpeditions = false;
    expeditions.forEach((expedition) => {
        if (checkExpeditionCompletion(player, expedition)) {
            usr.eventPoints++;
            usr.maxEventPoints = Math.max(usr.maxEventPoints, usr.eventPoints);
            hasCompletedExpeditions = true;
            const points = expeditions_1.ExpPerExpeditionRank[expedition.rank];
            notifications_1.notificationsService.addNotification(player.id, "expedition_completed", `${expedition.type}|${expedition.rank}|${points}`);
            (0, user_metadata_1.giveUserExp)(usr, points);
            switch (expedition.type) {
                case Expedition_1.ExpeditionType.RESCUE:
                    player.titles.add(types_1.Title.RESCUE_TEAM_MEMBER);
                    break;
                case Expedition_1.ExpeditionType.EXPLORATION:
                    player.titles.add(types_1.Title.EXPLORER);
                    break;
                case Expedition_1.ExpeditionType.BATTLE:
                    player.titles.add(types_1.Title.SURVEY_CORPS);
                    break;
                case Expedition_1.ExpeditionType.DELIVERY:
                    player.titles.add(types_1.Title.POSTMAN);
                    break;
            }
            if (expedition.rank === Expedition_1.ExpeditionRank.S) {
                player.titles.add(types_1.Title.GUILDMASTER);
            }
        }
    });
    return hasCompletedExpeditions;
}
function checkExpeditionCompletion(player, expedition) {
    var _a, _b;
    switch (expedition.type) {
        case Expedition_1.ExpeditionType.RESCUE: {
            const expeditionData = (0, expeditions_2.getExpeditionData)(expedition);
            const pokemonToRescue = (0, config_1.getBaseAltForm)(expeditionData.pokemon);
            return (0, schemas_1.values)(player.board).some((p) => (0, config_1.getBaseAltForm)(p.name) === pokemonToRescue);
        }
        case Expedition_1.ExpeditionType.EXPLORATION: {
            const expeditionData = (0, expeditions_2.getExpeditionData)(expedition);
            return (player.regions.includes(expeditionData.region) &&
                ((_a = player.synergies.get(expeditionData.synergy)) !== null && _a !== void 0 ? _a : 0) >=
                    expeditionData.level);
        }
        case Expedition_1.ExpeditionType.BATTLE: {
            const expeditionData = (0, expeditions_2.getExpeditionData)(expedition);
            return (((_b = player.gameStats[expeditionData.stat]) !== null && _b !== void 0 ? _b : 0) >= expeditionData.amount);
        }
        case Expedition_1.ExpeditionType.DELIVERY: {
            const expeditionData = (0, expeditions_2.getExpeditionData)(expedition);
            const items = [
                ...player.items,
                ...(0, schemas_1.values)(player.board).flatMap((p) => (0, schemas_1.values)(p.items))
            ];
            return (items.filter((item) => item === expeditionData.item).length >=
                expeditionData.quantity);
        }
        default:
            return false;
    }
}
//# sourceMappingURL=expeditions.js.map