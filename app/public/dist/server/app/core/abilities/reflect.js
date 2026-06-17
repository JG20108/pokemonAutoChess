"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class ReflectStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        pokemon.status.triggerReflect((_a = [2000, 2000, 3000, 5000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5000);
    }
}
exports.ReflectStrategy = ReflectStrategy;
//# sourceMappingURL=reflect.js.map