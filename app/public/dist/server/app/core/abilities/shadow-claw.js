"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowClawStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class ShadowClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const baseDamage = (_a = [20, 40, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const singleTargetDamage = (_b = [60, 100, 140, 280][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 280;
        const enemies = board
            .getCellsInFront(pokemon, target)
            .filter((cell) => cell.value && cell.value.team !== pokemon.team)
            .map((cell) => cell.value);
        const orientation = board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, target);
        pokemon.broadcastAbility({
            positionX: pokemon.positionX,
            positionY: pokemon.positionY,
            orientation: orientation
        });
        const damage = enemies.length === 1 ? singleTargetDamage : baseDamage;
        let damageDone = 0;
        for (const enemy of enemies) {
            const report = enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            damageDone += report.takenDamage;
        }
        pokemon.handleHeal(damageDone * 0.25, pokemon, 0, false);
    }
}
exports.ShadowClawStrategy = ShadowClawStrategy;
//# sourceMappingURL=shadow-claw.js.map