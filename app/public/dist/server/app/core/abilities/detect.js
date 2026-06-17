"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetectStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class DetectStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const adjacentAllies = board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .filter((cell) => cell.value != null && cell.value.team === pokemon.team)
            .map((cell) => cell.value);
        const nbEnemiesDetected = board
            .getCellsInRange(pokemon.positionX, pokemon.positionY, 2, false)
            .filter((cell) => cell.value && cell.value.team !== pokemon.team).length;
        const protectDuration = Math.round(((_a = [500, 600, 800, 1000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 1000) *
            nbEnemiesDetected *
            (1 + pokemon.ap / 100) *
            (crit ? pokemon.critPower : 1));
        adjacentAllies.forEach((ally) => {
            ally.status.triggerProtect(protectDuration);
        });
    }
}
exports.DetectStrategy = DetectStrategy;
//# sourceMappingURL=detect.js.map