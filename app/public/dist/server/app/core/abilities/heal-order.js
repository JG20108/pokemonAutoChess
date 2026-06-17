"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealOrderStrategy = void 0;
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const Pokemon_1 = require("../../types/enum/Pokemon");
const ability_strategy_1 = require("./ability-strategy");
class HealOrderStrategy extends ability_strategy_1.AbilityStrategy {
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
        const heal = (_a = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        board.forEach((x, y, p) => {
            if (p &&
                (p.name === Pokemon_1.Pkm.COMBEE || p.id === pokemon.id) &&
                p.team === pokemon.team) {
                const cells = board.getAdjacentCells(p.positionX, p.positionY);
                cells.forEach((cell) => {
                    if (cell.value && cell.value.team === pokemon.team) {
                        cell.value.handleHeal(heal, pokemon, 1, crit);
                        cell.value.status.clearNegativeStatus(cell.value, pokemon);
                    }
                });
                pokemon.broadcastAbility({
                    skill: "HEAL_ORDER",
                    positionX: x,
                    positionY: y
                });
            }
        });
    }
}
exports.HealOrderStrategy = HealOrderStrategy;
//# sourceMappingURL=heal-order.js.map