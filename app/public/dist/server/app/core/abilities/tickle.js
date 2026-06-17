"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickleStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class TickleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const attackLost = 3;
        const defLost = 3;
        const nbMaxEnemiesHit = (_a = [1, 2, 3, 5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5;
        let nbEnemiesHit = 0;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value &&
                cell.value.team !== pokemon.team &&
                nbEnemiesHit < nbMaxEnemiesHit) {
                nbEnemiesHit++;
                cell.value.addAttack(-attackLost, pokemon, 1, crit);
                cell.value.addDefense(-defLost, pokemon, 1, crit);
            }
        });
    }
}
exports.TickleStrategy = TickleStrategy;
//# sourceMappingURL=tickle.js.map