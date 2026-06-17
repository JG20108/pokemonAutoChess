"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartSwapStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const number_1 = require("../../utils/number");
const ability_strategy_1 = require("./ability-strategy");
class HeartSwapStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const boostSpeDef = (0, number_1.min)(0)(target.speDef - target.baseSpeDef);
        const boostAP = target.ap;
        const speDefLost = target.speDef - target.baseSpeDef;
        const apLost = target.ap;
        const damage = (_a = [60, 80, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (target.items.has(Item_1.Item.TWIST_BAND) === false) {
            target.addSpecialDefense(-speDefLost, pokemon, 0, false);
            target.addAbilityPower(-apLost, pokemon, 0, false);
            pokemon.addSpecialDefense(boostSpeDef, pokemon, 0, false);
            pokemon.addAbilityPower(boostAP, pokemon, 0, false);
        }
        pokemon.status.transferNegativeStatus(pokemon, target);
        pokemon.status.clearNegativeStatus(pokemon, pokemon);
    }
}
exports.HeartSwapStrategy = HeartSwapStrategy;
//# sourceMappingURL=heart-swap.js.map