"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretSwordStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SecretSwordStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [50, 100, 150, 300][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 300;
        const damageType = pokemon.count.fightingBlockCount >= 20
            ? Game_1.AttackType.TRUE
            : Game_1.AttackType.SPECIAL;
        target.handleSpecialDamage(damage, board, damageType, pokemon, crit);
    }
}
exports.SecretSwordStrategy = SecretSwordStrategy;
//# sourceMappingURL=secret-sword.js.map