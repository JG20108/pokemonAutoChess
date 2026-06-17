"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowderSnowStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class PowderSnowStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const freezeChance = (_b = [0.15, 0.3, 0.5, 1.0][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 1.0;
        (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(freezeChance, pokemon)) {
                    cell.value.status.triggerFreeze(2000, cell.value, pokemon);
                }
            }
        });
    }
}
exports.PowderSnowStrategy = PowderSnowStrategy;
//# sourceMappingURL=powder-snow.js.map