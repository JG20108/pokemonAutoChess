"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IcyWindStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class IcyWindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const speedDebuff = (_b = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.addSpeed(-speedDebuff, pokemon, 0, false);
            }
        });
    }
}
exports.IcyWindStrategy = IcyWindStrategy;
//# sourceMappingURL=icy-wind.js.map