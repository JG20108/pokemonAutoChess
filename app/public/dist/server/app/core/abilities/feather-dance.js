"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatherDanceStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class FeatherDanceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const feathers = [
            "HEALTH_FEATHER",
            "MUSCLE_FEATHER",
            "RESIST_FEATHER",
            "GENIUS_FEATHER",
            "CLEVER_FEATHER",
            "SWIFT_FEATHER",
            "PRETTY_FEATHER"
        ];
        const featherCount = (_a = [8, 10, 12, 24][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 24;
        const landingPlace = board.getFarthestTargetCoordinateAvailablePlace(pokemon, true) ||
            board.getSafePlaceAwayFrom(pokemon.positionX, pokemon.positionY, pokemon.team);
        if (landingPlace) {
            const pathCells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, landingPlace.x, landingPlace.y);
            pokemon.moveTo(landingPlace.x, landingPlace.y, board, false);
            for (let i = 0; i < featherCount; i++) {
                const feather = (0, random_1.pickRandomIn)(feathers);
                const cell = (0, random_1.pickRandomIn)(pathCells);
                const featherTarget = cell.value;
                if (featherTarget) {
                    pokemon.broadcastAbility({
                        positionX: cell.x,
                        positionY: cell.y,
                        skill: feather
                    });
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        const sign = featherTarget.team === pokemon.team ? 1 : -1;
                        if (feather === "HEALTH_FEATHER") {
                            if (sign === 1) {
                                featherTarget.handleHeal(sign * 20, featherTarget, 1, crit);
                            }
                            else {
                                featherTarget.handleSpecialDamage(20, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                            }
                        }
                        else if (feather === "MUSCLE_FEATHER") {
                            featherTarget.addAttack(sign * 4, featherTarget, 1, crit);
                        }
                        else if (feather === "RESIST_FEATHER") {
                            featherTarget.addDefense(sign * 4, featherTarget, 1, crit);
                        }
                        else if (feather === "GENIUS_FEATHER") {
                            featherTarget.addAbilityPower(sign * 10, featherTarget, 1, crit);
                        }
                        else if (feather === "CLEVER_FEATHER") {
                            featherTarget.addSpecialDefense(sign * 4, featherTarget, 1, crit);
                        }
                        else if (feather === "SWIFT_FEATHER") {
                            featherTarget.addSpeed(sign * 10, featherTarget, 1, crit);
                        }
                        else if (feather === "PRETTY_FEATHER") {
                            featherTarget.addLuck(sign * 10, featherTarget, 1, crit);
                        }
                    }, 1000));
                }
                else {
                    pokemon.broadcastAbility({
                        positionX: cell.x,
                        positionY: cell.y,
                        skill: feather
                    });
                }
            }
        }
    }
}
exports.FeatherDanceStrategy = FeatherDanceStrategy;
//# sourceMappingURL=feather-dance.js.map