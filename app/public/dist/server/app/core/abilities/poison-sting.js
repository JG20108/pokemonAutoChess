"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoisonStingStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PoisonStingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        let maxStacks = 3;
        if (pokemon.effects.has(Effect_1.EffectEnum.VENOMOUS)) {
            maxStacks = 4;
        }
        if (pokemon.effects.has(Effect_1.EffectEnum.TOXIC)) {
            maxStacks = 5;
        }
        const nbStacksToApply = (_a = [2, 3, 4, 5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5;
        const currentStacks = target.status.poisonStacks;
        const extraDamage = currentStacks + nbStacksToApply > maxStacks
            ? (currentStacks + nbStacksToApply - maxStacks) *
                ((_b = [25, 50, 100, 150][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 150)
            : 0;
        for (let i = 0; i < nbStacksToApply; i++) {
            target.status.triggerPoison(4000, target, pokemon);
        }
        if (extraDamage > 0) {
            target.handleSpecialDamage(extraDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.PoisonStingStrategy = PoisonStingStrategy;
//# sourceMappingURL=poison-sting.js.map