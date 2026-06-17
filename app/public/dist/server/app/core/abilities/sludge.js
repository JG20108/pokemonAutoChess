"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SludgeStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class SludgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const nbStacks = (_a = [2, 3, 4, 8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8;
        const duration = Math.round(((_b = [3000, 3000, 3000, 10000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 10000) * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        const cells = board.getCellsInFront(pokemon, target);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                for (let i = 0; i < nbStacks; i++) {
                    cell.value.status.triggerPoison(duration, cell.value, pokemon);
                }
            }
        });
    }
}
exports.SludgeStrategy = SludgeStrategy;
//# sourceMappingURL=sludge.js.map