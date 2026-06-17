"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperHeatStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class SuperHeatStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [4, 7, 10, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
        const duration = 1000;
        for (let i = 0; i < 9; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                if (pokemon.status.resurrecting ||
                    pokemon.status.freeze ||
                    pokemon.status.sleep) {
                    return;
                }
                pokemon.broadcastAbility({
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: target.positionX,
                    targetY: target.positionY
                });
                const coneCells = board
                    .getCellsInFront(pokemon, target, 2)
                    .filter((cell) => cell.value && cell.value.team !== pokemon.team)
                    .map((cell) => cell.value);
                for (const enemy of coneCells) {
                    if (enemy) {
                        enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        enemy.status.triggerArmorReduction(duration, enemy);
                    }
                }
            }, 333 * i));
        }
    }
}
exports.SuperHeatStrategy = SuperHeatStrategy;
//# sourceMappingURL=super-heat.js.map