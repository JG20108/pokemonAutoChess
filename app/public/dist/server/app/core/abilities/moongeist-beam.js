"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoongeistBeamStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class MoongeistBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            var _a, _b;
            if (cell.value != null) {
                if (cell.value.team !== pokemon.team) {
                    cell.value.status.triggerParalysis(3000, cell.value, pokemon);
                    cell.value.handleSpecialDamage((_a = [60, 80, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                else if (cell.value.id !== pokemon.id) {
                    cell.value.addShield((_b = [60, 80, 100, 200][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 200, pokemon, 1, crit);
                }
            }
        });
    }
}
exports.MoongeistBeamStrategy = MoongeistBeamStrategy;
//# sourceMappingURL=moongeist-beam.js.map