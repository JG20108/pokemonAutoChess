"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreezingGlareStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class FreezingGlareStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            var _a;
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(0.5, pokemon)) {
                    const freezeDuration = (_a = [3000, 3000, 3000, 6000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6000;
                    cell.value.status.triggerFreeze(freezeDuration, cell.value, pokemon);
                }
            }
        });
    }
}
exports.FreezingGlareStrategy = FreezingGlareStrategy;
//# sourceMappingURL=freezing-glare.js.map