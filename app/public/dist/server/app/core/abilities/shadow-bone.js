"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowBoneStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class ShadowBoneStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        const hit = () => (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(0.5, pokemon)) {
                    cell.value.addDefense(-6, pokemon, 1, crit);
                }
            }
        });
        hit();
    }
}
exports.ShadowBoneStrategy = ShadowBoneStrategy;
//# sourceMappingURL=shadow-bone.js.map