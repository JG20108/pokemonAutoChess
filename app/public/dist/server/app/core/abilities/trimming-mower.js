"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrimmingMowerStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class TrimmingMowerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [20, 30, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const healAmount = (_b = [30, 45, 60, 120][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 120;
        const dashDestinations = board
            .getCellsInRange(pokemon.positionX, pokemon.positionY, 2, false)
            .filter((cell) => !cell.value);
        let bestDestination = { x: pokemon.positionX, y: pokemon.positionY };
        let maxEnemiesHit = 0;
        for (const cell of dashDestinations) {
            const enemiesHit = board
                .getAdjacentCells(cell.x, cell.y)
                .filter((c) => c.value && c.value.team !== pokemon.team).length;
            if (enemiesHit > maxEnemiesHit) {
                maxEnemiesHit = enemiesHit;
                bestDestination = { x: cell.x, y: cell.y };
            }
        }
        if (pokemon.positionX !== bestDestination.x ||
            pokemon.positionY !== bestDestination.y) {
            pokemon.moveTo(bestDestination.x, bestDestination.y, board, false);
        }
        const healingResult = pokemon.handleHeal(healAmount, pokemon, 1, crit) || {
            overheal: 0
        };
        if (healingResult.overheal) {
            pokemon.addShield(healingResult.overheal, pokemon, 0, false);
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            pokemon.broadcastAbility({
                positionX: pokemon.positionX,
                positionY: pokemon.positionY
            });
            const adjacentEnemies = board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY)
                .filter((c) => c.value && c.value.team !== pokemon.team)
                .map((c) => c.value);
            for (const enemy of adjacentEnemies) {
                enemy === null || enemy === void 0 ? void 0 : enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }, 300));
    }
}
exports.TrimmingMowerStrategy = TrimmingMowerStrategy;
//# sourceMappingURL=trimming-mower.js.map