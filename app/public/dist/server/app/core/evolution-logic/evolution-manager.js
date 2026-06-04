"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionManager = void 0;
const EvolutionRules_1 = require("../../types/EvolutionRules");
const Game_1 = require("../../types/enum/Game");
const Passive_1 = require("../../types/enum/Passive");
const Pokemon_1 = require("../../types/enum/Pokemon");
const effect_1 = require("../effects/effect");
const passives_1 = require("../effects/passives");
const count_evolution_handler_1 = require("./count-evolution-handler");
const hatch_evolution_handler_1 = require("./hatch-evolution-handler");
const hatch_time_1 = require("./hatch-time");
const item_evolution_handler_1 = require("./item-evolution-handler");
const money_evolution_handler_1 = require("./money-evolution-handler");
const placement_evolution_handler_1 = require("./placement-evolution-handler");
const stack_evolution_handler_1 = require("./stack-evolution-handler");
const state_evolution_handler_1 = require("./state-evolution-handler");
exports.EvolutionManager = {
    getHandler(evolutionRule) {
        switch (evolutionRule.type) {
            case EvolutionRules_1.EvolutionRuleType.ITEM:
                return new item_evolution_handler_1.ItemEvolutionHandler(evolutionRule);
            case EvolutionRules_1.EvolutionRuleType.STATE:
                return new state_evolution_handler_1.StateEvolutionHandler(evolutionRule);
            case EvolutionRules_1.EvolutionRuleType.MONEY:
                return new money_evolution_handler_1.MoneyEvolutionHandler(evolutionRule);
            case EvolutionRules_1.EvolutionRuleType.PLACEMENT:
                return new placement_evolution_handler_1.PlacementEvolutionHandler(evolutionRule);
            case EvolutionRules_1.EvolutionRuleType.HATCH:
                return new hatch_evolution_handler_1.HatchEvolutionHandler(evolutionRule);
            case EvolutionRules_1.EvolutionRuleType.STACK:
                return new stack_evolution_handler_1.StackEvolutionHandler(evolutionRule);
            case EvolutionRules_1.EvolutionRuleType.COUNT:
            default:
                return new count_evolution_handler_1.CountEvolutionHandler(evolutionRule);
        }
    },
    tryEvolve(pokemon, player, ...additionalArgs) {
        const handler = this.getHandler(pokemon.evolutionRule);
        if (handler.canEvolve(pokemon, player, ...additionalArgs)) {
            const pokemonEvolved = handler.evolve(pokemon, player, ...additionalArgs);
            return pokemonEvolved;
        }
    },
    evolve(pokemon, player, ...additionalArgs) {
        const handler = this.getHandler(pokemon.evolutionRule);
        const pokemonEvolved = handler.evolve(pokemon, player, ...additionalArgs);
        this.afterEvolve(pokemonEvolved, pokemon, player, ...additionalArgs);
        return pokemonEvolved;
    },
    afterEvolve(pokemonEvolved, pokemonBeforeEvolution, player, ...additionalArgs) {
        player.updateSynergies();
        if (pokemonBeforeEvolution.supercharged)
            pokemonEvolved.supercharged = true;
        if (pokemonEvolved.passive in passives_1.PassiveEffects) {
            passives_1.PassiveEffects[pokemonEvolved.passive].forEach((effect) => {
                if (effect instanceof effect_1.OnEvolutionEffect) {
                    effect.apply({ pokemonEvolved, player });
                }
            });
        }
        player.board.forEach((pokemon) => {
            if ((pokemon.passive === Passive_1.Passive.COSMOG ||
                pokemon.passive === Passive_1.Passive.COSMOEM) &&
                pokemonEvolved.passive !== Passive_1.Passive.COSMOG &&
                pokemonEvolved.passive !== Passive_1.Passive.COSMOEM) {
                pokemon.addMaxHP(15);
                pokemon.stacks++;
                this.tryEvolve(pokemon, player, ...additionalArgs);
            }
        });
        this.tryEvolve(pokemonEvolved, player, ...additionalArgs);
    },
    getEvolution(pokemon, player, ...additionalArgs) {
        const handler = this.getHandler(pokemon.evolutionRule);
        return handler.getEvolution(pokemon, player, ...additionalArgs);
    },
    canEvolve(pokemon, player, ...additionalArgs) {
        const handler = this.getHandler(pokemon.evolutionRule);
        return handler.canEvolve(pokemon, player, ...additionalArgs);
    },
    canEvolveIfGettingOne(pokemon, player) {
        if (pokemon.evolutionRule.type !== EvolutionRules_1.EvolutionRuleType.COUNT)
            return false;
        const handler = this.getHandler(pokemon.evolutionRule);
        return handler.canEvolveIfGettingOne(pokemon, player);
    },
    updateHatch(pokemon, player) {
        if (pokemon.evolutionRule.type !== EvolutionRules_1.EvolutionRuleType.HATCH)
            return;
        pokemon.stacks++;
        const willHatch = this.canEvolve(pokemon, player);
        if (willHatch) {
            pokemon.action = Game_1.PokemonActionState.HOP;
            setTimeout(() => {
                this.tryEvolve(pokemon, player);
            }, 2000);
        }
        else if (pokemon.name === Pokemon_1.Pkm.EGG) {
            const hatchTime = (0, hatch_time_1.getHatchTime)(pokemon, player);
            if (pokemon.stacks >= hatchTime) {
                pokemon.action = Game_1.PokemonActionState.HOP;
            }
            else if (pokemon.stacks >= hatchTime - 1) {
                pokemon.action = Game_1.PokemonActionState.EMOTE;
            }
            else {
                pokemon.action = Game_1.PokemonActionState.IDLE;
            }
        }
    }
};
//# sourceMappingURL=evolution-manager.js.map