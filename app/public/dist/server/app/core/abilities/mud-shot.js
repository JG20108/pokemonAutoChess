"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MudShotStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class MudShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const speedDebuff = (_b = [10, 20, 30, 40][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 40;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.addSpeed(-speedDebuff, pokemon, 1, crit);
    }
}
exports.MudShotStrategy = MudShotStrategy;
//# sourceMappingURL=mud-shot.js.map