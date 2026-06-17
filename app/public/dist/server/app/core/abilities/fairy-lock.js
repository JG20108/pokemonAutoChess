"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FairyLockStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class FairyLockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        target.status.triggerLocked(5000, target);
        const cells = board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .filter((cell) => cell && cell.value && cell.value.team !== pokemon.team);
        const damage = (_a = [50, 70, 90, 180][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 180;
        cells.forEach((cell) => {
            var _a;
            pokemon.broadcastAbility({ targetX: cell.x, targetY: cell.y });
            (_a = cell.value) === null || _a === void 0 ? void 0 : _a.handleSpecialDamage(Math.round(damage / cells.length), board, Game_1.AttackType.SPECIAL, pokemon, crit);
        });
    }
}
exports.FairyLockStrategy = FairyLockStrategy;
//# sourceMappingURL=fairy-lock.js.map