"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChloroblastStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const ability_strategy_1 = require("./ability-strategy");
class ChloroblastStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [50, 100, 200, 400][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 400;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        if (!pokemon.items.has(Item_1.Item.PROTECTIVE_PADS)) {
            pokemon.handleSpecialDamage(0.5 * pokemon.maxHP, board, Game_1.AttackType.TRUE, pokemon, crit);
        }
    }
}
exports.ChloroblastStrategy = ChloroblastStrategy;
//# sourceMappingURL=chloroblast.js.map