"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrudgeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class GrudgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const duration = 3000;
        const damage = (_a = [18, 36, 52, 104][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 104;
        target.status.triggerSilence(duration, target, pokemon);
        board.cells
            .filter((enemy) => !!enemy && enemy.team !== pokemon.team && enemy.status.silence)
            .forEach((enemy) => {
            pokemon.broadcastAbility({
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: enemy.positionX,
                targetY: enemy.positionY
            });
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        });
    }
}
exports.GrudgeStrategy = GrudgeStrategy;
//# sourceMappingURL=grudge.js.map