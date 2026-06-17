"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighHorsepowerStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class HighHorsepowerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const orientation = board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, undefined);
        const destination = board.getKnockBackPlace(target.positionX, target.positionY, orientation);
        if (destination) {
            pokemon.moveTo(destination.x, destination.y, board, false);
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            var _a, _b, _c;
            pokemon.broadcastAbility({
                positionX: pokemon.positionX,
                positionY: pokemon.positionY
            });
            const adjacentEnemies = board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
                .filter((cell) => cell.value && cell.value.team !== pokemon.team);
            if (adjacentEnemies.length === 1) {
                (_b = (_a = adjacentEnemies[0]) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.handleSpecialDamage(damage * 2, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
            else if (adjacentEnemies.length > 1) {
                for (const cell of adjacentEnemies) {
                    (_c = cell.value) === null || _c === void 0 ? void 0 : _c.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }
        }, 300));
    }
}
exports.HighHorsepowerStrategy = HighHorsepowerStrategy;
//# sourceMappingURL=high-horsepower.js.map