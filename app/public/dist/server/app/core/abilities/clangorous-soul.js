"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClangorousSoulStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class ClangorousSoulStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const buff = (_a = [2, 4, 8, 16][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 16;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team == cell.value.team) {
                cell.value.addAttack(buff, pokemon, 1, crit);
                cell.value.addDefense(buff, pokemon, 1, crit);
                cell.value.addSpecialDefense(buff, pokemon, 1, crit);
            }
        });
    }
}
exports.ClangorousSoulStrategy = ClangorousSoulStrategy;
//# sourceMappingURL=clangorous-soul.js.map