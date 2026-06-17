"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticShockStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Synergy_1 = require("../../types/enum/Synergy");
const ability_strategy_1 = require("./ability-strategy");
class StaticShockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 50, 70, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const heal = (_b = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 60;
        const shield = (_c = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 60;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const adjacentCells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        const fairyCount = adjacentCells.filter((cell) => cell.value && cell.value.types.has(Synergy_1.Synergy.FAIRY)).length;
        if (fairyCount > 0) {
            pokemon.handleHeal(heal * fairyCount, pokemon, 1, crit);
        }
        const electricCount = adjacentCells.filter((cell) => cell.value && cell.value.types.has(Synergy_1.Synergy.ELECTRIC)).length;
        if (electricCount > 0) {
            pokemon.addShield(shield * electricCount, pokemon, 1, crit);
        }
    }
}
exports.StaticShockStrategy = StaticShockStrategy;
//# sourceMappingURL=static-shock.js.map