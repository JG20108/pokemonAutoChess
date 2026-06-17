"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VineWhipStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class VineWhipStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        board
            .getAdjacentCells(target.positionX, target.positionY)
            .map((cell) => cell.value)
            .filter((entity) => (entity === null || entity === void 0 ? void 0 : entity.team) === target.team)
            .concat(target)
            .forEach((enemy) => {
            if (enemy) {
                enemy.status.triggerParalysis(3000, enemy, pokemon);
            }
        });
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.VineWhipStrategy = VineWhipStrategy;
//# sourceMappingURL=vine-whip.js.map