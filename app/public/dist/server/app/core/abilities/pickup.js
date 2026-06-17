"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickupStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
const ability_strategy_1 = require("./ability-strategy");
class PickupStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        if (target.items.size > 0 && pokemon.items.size < 3) {
            const item = target.items.values().next().value;
            if (item) {
                target.removeItem(item);
                pokemon.addItem(item);
            }
        }
        else {
            if (target.player) {
                const moneyStolen = (0, number_1.max)(target.player.money)(pokemon.stars);
                target.player.addMoney(-moneyStolen, false, target);
                if (pokemon.player) {
                    pokemon.player.addMoney(moneyStolen, true, pokemon);
                    pokemon.count.moneyCount += moneyStolen;
                }
            }
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PickupStrategy = PickupStrategy;
//# sourceMappingURL=pickup.js.map