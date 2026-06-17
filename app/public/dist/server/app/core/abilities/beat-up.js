"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeatUpStrategy = void 0;
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const Pokemon_1 = require("../../types/enum/Pokemon");
const number_1 = require("../../utils/number");
const ability_strategy_1 = require("./ability-strategy");
class BeatUpStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const nbSpawns = (_a = [1, 2, 3, 5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5;
        for (let i = 0; i < nbSpawns; i++) {
            const houndour = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.HOUNDOUR, pokemon.player);
            const coord = pokemon.simulation.getClosestFreeCellToPokemonEntity(pokemon);
            if (coord) {
                const entity = pokemon.simulation.addPokemon(houndour, coord.x, coord.y, pokemon.team, true);
                const scale = (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1);
                entity.maxHP = (0, number_1.min)(1)(Math.round(entity.maxHP * scale));
                entity.hp = entity.maxHP;
            }
        }
    }
}
exports.BeatUpStrategy = BeatUpStrategy;
//# sourceMappingURL=beat-up.js.map