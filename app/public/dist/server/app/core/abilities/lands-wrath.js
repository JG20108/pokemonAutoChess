"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandsWrathStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class LandsWrathStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const atkDamage = Math.round(pokemon.atk * ((_a = [100, 100, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200) / 100 * (1 + pokemon.ap / 100));
        const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
        cells.forEach((cell) => {
            var _a, _b, _c;
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(((_a = [20, 30, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80) + atkDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
                cell.value.addDefense(-((_b = [5, 5, 5, 10][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 10), pokemon, 1, crit);
                cell.value.addSpecialDefense(-((_c = [5, 5, 5, 10][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 10), pokemon, 1, crit);
                pokemon.broadcastAbility({
                    skill: "LANDS_WRATH/hit",
                    positionX: cell.x,
                    positionY: cell.y
                });
            }
        });
    }
}
exports.LandsWrathStrategy = LandsWrathStrategy;
//# sourceMappingURL=lands-wrath.js.map