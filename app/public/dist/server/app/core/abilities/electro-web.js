"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectroWebStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const ability_strategy_1 = require("./ability-strategy");
class ElectroWebStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const steal = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const damage = (_b = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 120;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if (cell.value.items.has(Item_1.Item.TWIST_BAND) === false) {
                    cell.value.addSpeed(-steal, pokemon, 1, crit);
                    pokemon.addSpeed(steal, pokemon, 1, crit);
                }
            }
        });
    }
}
exports.ElectroWebStrategy = ElectroWebStrategy;
//# sourceMappingURL=electro-web.js.map