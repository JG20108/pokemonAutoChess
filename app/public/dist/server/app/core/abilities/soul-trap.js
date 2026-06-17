"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoulTrapStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class SoulTrapStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit);
        const shieldAmount = (_a = [25, 50, 108, 108][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 108;
        const ppLoss = (_b = [10, 10, 10, 50][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 50;
        const fatigueDuration = Math.round(((_c = [2000, 2000, 2000, 5000][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 5000) * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        pokemon.addShield(shieldAmount, pokemon, 0, false);
        const enemies = board
            .getCellsInRadius(pokemon.positionX, pokemon.positionY, 2, false)
            .filter((cell) => cell.value && cell.value.team !== pokemon.team);
        enemies.forEach((cell) => {
            const enemy = cell.value;
            enemy.addPP(-ppLoss, pokemon, 1, crit);
            enemy.status.triggerFatigue(fatigueDuration, enemy);
        });
    }
}
exports.SoulTrapStrategy = SoulTrapStrategy;
//# sourceMappingURL=soul-trap.js.map