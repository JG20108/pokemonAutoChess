"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkVoidStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class DarkVoidStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        board
            .getCellsInRadius(target.positionX, target.positionY, 4, true)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                const enemy = cell.value;
                enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(0.8, pokemon)) {
                    enemy.status.triggerSleep(2000, enemy);
                }
            }
        });
    }
}
exports.DarkVoidStrategy = DarkVoidStrategy;
//# sourceMappingURL=dark-void.js.map