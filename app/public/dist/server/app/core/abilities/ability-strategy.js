"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityStrategy = void 0;
const types_1 = require("../../types");
const Ability_1 = require("../../types/enum/Ability");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const abilities_1 = require("./abilities");
const number_1 = require("../../utils/number");
const effect_1 = require("../effect");
const simulation_command_1 = require("../simulation-command");
class AbilityStrategy {
    constructor() {
        this.copyable = true;
    }
    process(pokemon, state, board, target, crit, preventDefaultAnim) {
        pokemon.pp = (0, number_1.min)(0)(pokemon.pp - pokemon.maxPP);
        pokemon.count.ult += 1;
        if (!preventDefaultAnim) {
            pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                id: pokemon.simulation.id,
                skill: pokemon.skill,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: target.positionX,
                targetY: target.positionY,
                orientation: pokemon.orientation
            });
        }
        pokemon.effectsSet.forEach((effect) => {
            if (effect instanceof effect_1.OnAbilityCastEffect) {
                effect.apply(pokemon, state, board, target, crit);
            }
        });
        if (pokemon.items.has(Item_1.Item.AQUA_EGG)) {
            pokemon.addPP(20, pokemon, 0, false);
        }
        if (pokemon.items.has(Item_1.Item.STAR_DUST)) {
            pokemon.addShield(Math.round(0.5 * pokemon.maxPP), pokemon, 0, false);
            pokemon.count.starDustCount++;
        }
        if (pokemon.items.has(Item_1.Item.LEPPA_BERRY)) {
            pokemon.eatBerry(Item_1.Item.LEPPA_BERRY);
        }
        if (pokemon.items.has(Item_1.Item.MAX_ELIXIR) && pokemon.count.ult === 1) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.addPP(pokemon.maxPP, pokemon, 0, false);
                pokemon.removeItem(Item_1.Item.MAX_ELIXIR, false);
            }, 1000));
        }
        if (pokemon.items.has(Item_1.Item.COMFEY)) {
            abilities_1.AbilityStrategies[Ability_1.Ability.FLORAL_HEALING].process(pokemon, state, board, target, crit, true);
        }
        if (pokemon.passive === Passive_1.Passive.SLOW_START && pokemon.count.ult === 1) {
            pokemon.addSpeed(30, pokemon, 0, false);
            pokemon.addAttack(10, pokemon, 0, false);
        }
    }
}
exports.AbilityStrategy = AbilityStrategy;
//# sourceMappingURL=ability-strategy.js.map