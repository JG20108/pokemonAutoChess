"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackOrderStrategy = void 0;
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const Effect_1 = require("../../types/enum/Effect");
const Pokemon_1 = require("../../types/enum/Pokemon");
const ability_strategy_1 = require("./ability-strategy");
class AttackOrderStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        const combee = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.COMBEE, pokemon.player);
        const coord = pokemon.state.getNearestAvailablePlaceCoordinates(pokemon, board);
        if (coord) {
            if (pokemon.player)
                pokemon.player.pokemonsPlayed.add(Pokemon_1.Pkm.COMBEE);
            pokemon.simulation.addPokemon(combee, coord.x, coord.y, pokemon.team, true);
        }
        pokemon.effects.add(Effect_1.EffectEnum.ATTACK_ORDER_NEXT_ATTACK);
        board.forEach((x, y, p) => {
            if (p && p.name === Pokemon_1.Pkm.COMBEE && p.team === pokemon.team) {
                p.status.triggerRage(3000, p);
                pokemon.broadcastAbility({
                    skill: "ATTACK_ORDER",
                    positionX: x,
                    positionY: y
                });
            }
        });
    }
}
exports.AttackOrderStrategy = AttackOrderStrategy;
//# sourceMappingURL=attack-order.js.map