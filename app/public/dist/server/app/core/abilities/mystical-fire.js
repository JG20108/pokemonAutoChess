"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysticalFireStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class MysticalFireStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.addAbilityPower(-((_b = [15, 20, 25, 50][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 50), pokemon, 1, crit);
    }
}
exports.MysticalFireStrategy = MysticalFireStrategy;
//# sourceMappingURL=mystical-fire.js.map