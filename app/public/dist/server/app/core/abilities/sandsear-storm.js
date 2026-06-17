"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandsearStormStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class SandsearStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [45, 60, 75, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 150;
        const burnDuration = (_b = [2000, 2000, 2000, 5000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 5000;
        (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBurn(burnDuration, cell.value, pokemon);
            }
        });
    }
}
exports.SandsearStormStrategy = SandsearStormStrategy;
//# sourceMappingURL=sandsear-storm.js.map