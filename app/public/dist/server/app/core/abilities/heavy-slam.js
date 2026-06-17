"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeavySlamStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class HeavySlamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        if (pokemon.maxHP > target.maxHP) {
            damage = Math.round(damage * (1 + (0.5 * (pokemon.maxHP - target.maxHP)) / target.maxHP));
        }
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
            .forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.HeavySlamStrategy = HeavySlamStrategy;
//# sourceMappingURL=heavy-slam.js.map