"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsychoShiftStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PsychoShiftStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const farthestEnemy = pokemon.state.getFarthestTarget(pokemon, board);
        pokemon.broadcastAbility({
            positionX: target.positionX,
            positionY: target.positionY,
            targetX: farthestEnemy === null || farthestEnemy === void 0 ? void 0 : farthestEnemy.positionX,
            targetY: farthestEnemy === null || farthestEnemy === void 0 ? void 0 : farthestEnemy.positionY
        });
        const damage = (_a = [20, 40, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        if (farthestEnemy && farthestEnemy.id !== target.id) {
            farthestEnemy.moveTo(target.positionX, target.positionY, board, true);
            farthestEnemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PsychoShiftStrategy = PsychoShiftStrategy;
//# sourceMappingURL=psycho-shift.js.map