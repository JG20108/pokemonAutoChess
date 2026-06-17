"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionHandler = void 0;
exports.carryOverPermanentStats = carryOverPermanentStats;
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const array_1 = require("../../utils/array");
const random_1 = require("../../utils/random");
class EvolutionHandler {
    constructor(evolutionRule) {
        if (evolutionRule.divergentEvolution)
            this.divergentEvolution = evolutionRule.divergentEvolution;
    }
    getEvolution(pokemon, player, ...additionalArgs) {
        if (this.divergentEvolution) {
            return this.divergentEvolution(pokemon, player, ...additionalArgs);
        }
        return pokemon.evolution;
    }
}
exports.EvolutionHandler = EvolutionHandler;
function carryOverPermanentStats(pokemonEvolved, pokemonsBeforeEvolution) {
    var _a, _b;
    const permanentBuffStats = [
        "maxHP",
        "atk",
        "def",
        "speDef",
        "speed",
        "ap",
        "luck"
    ];
    const pkm = pokemonsBeforeEvolution[0].name;
    const baseData = pokemon_factory_1.default.createPokemonFromName(pkm);
    for (const stat of permanentBuffStats) {
        const sumOfPermaStatsModifier = (0, array_1.sum)(pokemonsBeforeEvolution.map((p) => p[stat] - baseData[stat]));
        const statMapping = {
            maxHP: Game_1.Stat.HP,
            atk: Game_1.Stat.ATK,
            def: Game_1.Stat.DEF,
            speDef: Game_1.Stat.SPE_DEF,
            speed: Game_1.Stat.SPEED,
            ap: Game_1.Stat.AP,
            luck: Game_1.Stat.LUCK
        };
        pokemonEvolved.applyStat(statMapping[stat], sumOfPermaStatsModifier);
    }
    const existingTms = pokemonsBeforeEvolution
        .map((p) => p.tm)
        .filter((tm) => tm !== Ability_1.Ability.DEFAULT);
    if (existingTms.length > 0) {
        pokemonEvolved.tm = (0, random_1.pickRandomIn)(existingTms);
        if (pokemonEvolved.tm === Ability_1.Ability.SKILL_SWAP) {
            pokemonEvolved.skill =
                (_b = (_a = pokemonsBeforeEvolution.find((p) => p.tm === Ability_1.Ability.SKILL_SWAP)) === null || _a === void 0 ? void 0 : _a.skill) !== null && _b !== void 0 ? _b : Ability_1.Ability.SKILL_SWAP;
        }
        else {
            pokemonEvolved.skill = pokemonEvolved.tm;
        }
        pokemonEvolved.maxPP = 100;
    }
}
//# sourceMappingURL=evolution-handler.js.map