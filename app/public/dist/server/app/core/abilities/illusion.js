"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IllusionStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class IllusionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const heal = (_a = [30, 50, 70, 140][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 140;
        pokemon.handleHeal(heal, pokemon, 0.5, crit);
        if (target && target.canBeCopied) {
            pokemon.index = target.index;
            pokemon.atk = Math.max(pokemon.atk, target.atk);
            pokemon.def = Math.max(pokemon.def, target.def);
            pokemon.speDef = Math.max(pokemon.speDef, target.speDef);
            if (pokemon.range > target.range) {
                pokemon.toMovingState();
            }
            pokemon.range = target.range;
        }
    }
}
exports.IllusionStrategy = IllusionStrategy;
//# sourceMappingURL=illusion.js.map