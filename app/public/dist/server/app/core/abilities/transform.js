"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class TransformStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        if (target && target.canBeCopied) {
            pokemon.index = target.index;
            pokemon.rarity = target.rarity;
            pokemon.stars = target.stars;
            pokemon.skill = target.skill;
            pokemon.changePassive(target.passive);
            pokemon.baseAtk = target.atk;
            pokemon.baseDef = target.def;
            pokemon.baseSpeDef = target.speDef;
            pokemon.baseRange = target.baseRange;
            pokemon.atk = target.atk;
            pokemon.speed = target.speed;
            pokemon.def = target.def;
            pokemon.speDef = target.speDef;
            pokemon.ap = target.ap;
            pokemon.maxPP = target.maxPP;
            pokemon.speed = target.speed;
            pokemon.critChance = target.critChance;
            pokemon.critPower = target.critPower;
            pokemon.range = target.range;
            pokemon.shiny = target.shiny;
            pokemon.emotion = target.emotion;
            pokemon.dodge = target.dodge;
        }
    }
}
exports.TransformStrategy = TransformStrategy;
//# sourceMappingURL=transform.js.map