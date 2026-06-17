"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShedTailStrategy = void 0;
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const Pokemon_1 = require("../../types/enum/Pokemon");
const ability_strategy_1 = require("./ability-strategy");
class ShedTailStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const x = pokemon.positionX;
        const y = pokemon.positionY;
        const lowestHealthAlly = board.cells.filter((cell) => cell && cell.team === pokemon.team).sort((a, b) => a.hp / a.maxHP - b.hp / b.maxHP)[0];
        if (lowestHealthAlly) {
            lowestHealthAlly.addShield((_a = [40, 60, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160, pokemon, 1, crit);
            const coord = pokemon.simulation.getClosestFreeCellToPokemonEntity(lowestHealthAlly);
            if (coord) {
                const substitute = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.SUBSTITUTE, pokemon.player);
                pokemon.moveTo(coord.x, coord.y, board, false);
                pokemon.simulation.addPokemon(substitute, x, y, pokemon.team, true);
                for (const pokemonTargetingCaster of board.cells.filter((p) => (p === null || p === void 0 ? void 0 : p.targetEntityId) === pokemon.id)) {
                    pokemonTargetingCaster.targetEntityId = substitute.id;
                }
            }
        }
    }
}
exports.ShedTailStrategy = ShedTailStrategy;
//# sourceMappingURL=shed-tail.js.map