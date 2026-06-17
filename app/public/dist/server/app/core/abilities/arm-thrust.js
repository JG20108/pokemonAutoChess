"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmThrustStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class ArmThrustStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damageFactor = (_a = [1, 1, 2, 4][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4;
        const damage = pokemon.atk * damageFactor;
        const nbHits = (0, number_1.clamp)(Math.floor(2 + Math.random() * 4 * (1 + pokemon.luck / 100)), 2, 5);
        pokemon.broadcastAbility({
            skill: Ability_1.Ability.ARM_THRUST,
            delay: nbHits
        });
        for (let i = 0; i < nbHits; i++) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.PHYSICAL, pokemon, (0, random_1.chance)(pokemon.critChance / 100, pokemon));
        }
    }
}
exports.ArmThrustStrategy = ArmThrustStrategy;
//# sourceMappingURL=arm-thrust.js.map