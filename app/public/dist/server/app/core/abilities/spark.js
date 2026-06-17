"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class SparkStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 90, 180][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 180;
        const enemiesHit = new Set();
        const propagate = (currentTarget, nbBounce = 1) => {
            var _a;
            const newTarget = (_a = board
                .getAdjacentCells(currentTarget.positionX, currentTarget.positionY)
                .find((cell) => cell.value &&
                cell.value.team === target.team &&
                !enemiesHit.has(cell.value.id))) === null || _a === void 0 ? void 0 : _a.value;
            if (newTarget) {
                enemiesHit.add(newTarget.id);
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                    pokemon.broadcastAbility({
                        targetX: newTarget.positionX,
                        targetY: newTarget.positionY,
                        positionX: currentTarget.positionX,
                        positionY: currentTarget.positionY,
                        ap: (0, number_1.min)(-100)(pokemon.ap - nbBounce * 20)
                    });
                    const reducedDamage = Math.ceil(damage / Math.pow(2, nbBounce));
                    newTarget.handleSpecialDamage(reducedDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                    if (nbBounce < 10) {
                        propagate(newTarget, nbBounce + 1);
                    }
                }, 250));
            }
        };
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        propagate(target);
    }
}
exports.SparkStrategy = SparkStrategy;
//# sourceMappingURL=spark.js.map