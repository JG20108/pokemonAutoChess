"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoredPowerStrategy = void 0;
const config_1 = require("../../config");
const pokemon_1 = require("../../models/colyseus-models/pokemon");
const Game_1 = require("../../types/enum/Game");
const Pokemon_1 = require("../../types/enum/Pokemon");
const number_1 = require("../../utils/number");
const ability_strategy_1 = require("./ability-strategy");
class StoredPowerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const PkmClass = pokemon_1.PokemonClasses[Pokemon_1.PkmByIndex[target.index]];
        const baseSpeed = PkmClass ? new PkmClass(target.name).speed : config_1.DEFAULT_SPEED;
        const boostSpeed = (0, number_1.min)(0)(pokemon.speed / baseSpeed - 1);
        const boostAtk = (0, number_1.min)(0)(pokemon.atk / pokemon.baseAtk - 1);
        const boostDef = (0, number_1.min)(0)(pokemon.def / pokemon.baseDef - 1);
        const boostSpeDef = (0, number_1.min)(0)(pokemon.speDef / pokemon.baseSpeDef - 1);
        const boostAP = (0, number_1.min)(0)(pokemon.ap / 100 - 1);
        const damage = Math.round(((_a = [10, 15, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40) * (1 + boostAtk + boostDef + boostSpeDef + boostSpeed + boostAP));
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.StoredPowerStrategy = StoredPowerStrategy;
//# sourceMappingURL=stored-power.js.map