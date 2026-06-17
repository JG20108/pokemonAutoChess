"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RageStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class RageStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const rageDuration = 3000;
        pokemon.status.triggerRage(rageDuration, pokemon);
        const missingHp = pokemon.maxHP - pokemon.hp;
        const atkBoost = pokemon.baseAtk * ((_a = [10, 10, 10, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20) / 100 * Math.floor(missingHp / (pokemon.maxHP / 10));
        pokemon.addAttack(atkBoost, pokemon, 1, crit);
        pokemon.resetCooldown(1000);
    }
}
exports.RageStrategy = RageStrategy;
//# sourceMappingURL=rage.js.map