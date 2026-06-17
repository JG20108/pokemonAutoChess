"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadSmashStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const ability_strategy_1 = require("./ability-strategy");
class HeadSmashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [40, 80, 150, 300][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 300;
        const recoil = (_b = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        if (target.status.sleep || target.status.freeze) {
            target.handleSpecialDamage(9999, board, Game_1.AttackType.TRUE, pokemon, crit);
        }
        else {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        if (pokemon.items.has(Item_1.Item.PROTECTIVE_PADS) === false) {
            pokemon.handleSpecialDamage(recoil, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        }
    }
}
exports.HeadSmashStrategy = HeadSmashStrategy;
//# sourceMappingURL=head-smash.js.map