"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagmaStormStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class MagmaStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const targetsHit = new Set();
        const baseDamage = (_a = [50, 75, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        let power = 1;
        const propagate = (currentTarget, depth = 0) => {
            if (depth >= 20)
                return;
            targetsHit.add(currentTarget.id);
            pokemon.broadcastAbility({
                skill: Ability_1.Ability.MAGMA_STORM,
                targetX: currentTarget.positionX,
                targetY: currentTarget.positionY,
                ap: Math.round(pokemon.ap * power)
            });
            currentTarget.handleSpecialDamage(baseDamage * power, board, Game_1.AttackType.SPECIAL, pokemon, false);
            power -= 0.2;
            if (power <= 0)
                return;
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                const board = pokemon.simulation.board;
                const nextEnemies = board
                    .getAdjacentCells(currentTarget.positionX, currentTarget.positionY)
                    .filter((cell) => cell.value &&
                    cell.value.team === currentTarget.team &&
                    !targetsHit.has(cell.value.id));
                nextEnemies.forEach((enemy) => {
                    if (enemy &&
                        enemy.value &&
                        enemy.value.hp > 0 &&
                        !pokemon.simulation.finished) {
                        propagate(enemy.value, depth + 1);
                    }
                });
            }, 250));
        };
        propagate(target);
    }
}
exports.MagmaStormStrategy = MagmaStormStrategy;
//# sourceMappingURL=magma-storm.js.map