"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoldRushStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class GoldRushStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c, _d;
        super.process(pokemon, board, target, crit, true);
        const goldDamage = ((_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.money) ? (_b = pokemon.player) === null || _b === void 0 ? void 0 : _b.money : 0;
        const damage = ((_c = [20, 20, 20, 50][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 50) + goldDamage * ((_d = [1, 1, 1, 3][pokemon.stars - 1]) !== null && _d !== void 0 ? _d : 3);
        if (pokemon.player) {
            pokemon.player.addMoney(2, true, pokemon);
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.GoldRushStrategy = GoldRushStrategy;
//# sourceMappingURL=gold-rush.js.map