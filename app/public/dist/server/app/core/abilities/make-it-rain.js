"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeItRainStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class MakeItRainStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c, _d;
        super.process(pokemon, board, target, crit, true);
        const goldDamage = ((_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.money) ? (_b = pokemon.player) === null || _b === void 0 ? void 0 : _b.money : 0;
        const base = (_c = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 200;
        const goldMultiplier = (_d = [100, 100, 100, 300][pokemon.stars - 1]) !== null && _d !== void 0 ? _d : 300;
        const damage = base + Math.floor(goldDamage * goldMultiplier / 100);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.MakeItRainStrategy = MakeItRainStrategy;
//# sourceMappingURL=make-it-rain.js.map