"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlizzardStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BlizzardStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const freezeDuration = 2000;
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        board
            .getCellsInRadius(pokemon.positionX, pokemon.positionY, 4, false)
            .forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                const enemy = cell.value;
                enemy.handleSpecialDamage(enemy.status.freeze ? Math.round(damage * 1.3) : damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                enemy.status.triggerFreeze(freezeDuration, enemy, pokemon);
            }
        });
    }
}
exports.BlizzardStrategy = BlizzardStrategy;
//# sourceMappingURL=blizzard.js.map