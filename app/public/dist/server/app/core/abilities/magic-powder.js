"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicPowderStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class MagicPowderStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const shield = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const silenceDuration = (_b = [2000, 3000, 4000, 8000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 8000;
        pokemon.addShield(shield, pokemon, 1, crit);
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerSilence(silenceDuration, cell.value, pokemon);
            }
        });
    }
}
exports.MagicPowderStrategy = MagicPowderStrategy;
//# sourceMappingURL=magic-powder.js.map