"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpingHandStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const distance_1 = require("../../utils/distance");
const ability_strategy_1 = require("./ability-strategy");
class HelpingHandStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const nbAlliesBuffed = 2;
        const shield = (_a = [30, 60, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const allies = new Array();
        board.forEach((x, y, cell) => {
            if (cell && cell.team === pokemon.team && pokemon.id !== cell.id) {
                allies.push({
                    pkm: cell,
                    distance: (0, distance_1.distanceM)(pokemon.positionX, pokemon.positionY, cell.positionX, cell.positionY)
                });
            }
        });
        allies.sort((a, b) => a.distance - b.distance);
        for (let i = 0; i < nbAlliesBuffed; i++) {
            const ally = (_b = allies[i]) === null || _b === void 0 ? void 0 : _b.pkm;
            if (ally) {
                ally.effects.add(Effect_1.EffectEnum.DOUBLE_DAMAGE);
                ally.addShield(shield, pokemon, 1, crit);
                pokemon.broadcastAbility({
                    positionX: ally.positionX,
                    positionY: ally.positionY
                });
            }
        }
    }
}
exports.HelpingHandStrategy = HelpingHandStrategy;
//# sourceMappingURL=helping-hand.js.map