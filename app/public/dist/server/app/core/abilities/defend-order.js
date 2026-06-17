"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefendOrderStrategy = void 0;
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const Pokemon_1 = require("../../types/enum/Pokemon");
const ability_strategy_1 = require("./ability-strategy");
class DefendOrderStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const combee = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.COMBEE, pokemon.player);
        const coord = pokemon.state.getNearestAvailablePlaceCoordinates(pokemon, board);
        if (coord) {
            if (pokemon.player)
                pokemon.player.pokemonsPlayed.add(Pokemon_1.Pkm.COMBEE);
            pokemon.simulation.addPokemon(combee, coord.x, coord.y, pokemon.team, true);
        }
        const shield = (_a = [10, 20, 30, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
        let nbCombeeAllies = 0;
        board.forEach((x, y, p) => {
            if (p && p.team === pokemon.team && p.name === Pokemon_1.Pkm.COMBEE) {
                p.addShield(shield, pokemon, 1, crit);
                nbCombeeAllies++;
                pokemon.broadcastAbility({
                    skill: "DEFEND_ORDER",
                    positionX: x,
                    positionY: y
                });
            }
        });
        pokemon.addShield(shield + nbCombeeAllies * shield, pokemon, 1, crit);
    }
}
exports.DefendOrderStrategy = DefendOrderStrategy;
//# sourceMappingURL=defend-order.js.map