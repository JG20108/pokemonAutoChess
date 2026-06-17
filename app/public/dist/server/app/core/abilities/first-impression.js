"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstImpressionStrategy = void 0;
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const precomputed_pokemon_data_1 = require("../../models/precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("../../models/precomputed/precomputed-rarity");
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const Synergy_1 = require("../../types/enum/Synergy");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class FirstImpressionStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [45, 90, 180, 360][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 360;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerFlinch(5000, target, pokemon);
        if (pokemon.count.ult === 1) {
            const newCell = board.getSafePlaceAwayFrom(pokemon.positionX, pokemon.positionY, pokemon.team);
            const x = pokemon.positionX;
            const y = pokemon.positionY;
            if (newCell) {
                pokemon.moveTo(newCell.x, newCell.y, board, false);
                if (board.getEntityOnCell(x, y) === undefined) {
                    const possibleBugsPkm = ((_b = [
                        precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.COMMON,
                        precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.UNCOMMON,
                        precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.RARE
                    ][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.RARE).filter((pkm) => {
                        const data = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
                        return (data.stars === 1 &&
                            data.skill !== Ability_1.Ability.DEFAULT &&
                            data.types.includes(Synergy_1.Synergy.BUG));
                    });
                    const randomBugPkm = (0, random_1.pickRandomIn)(possibleBugsPkm);
                    const randomBug = pokemon_factory_1.default.createPokemonFromName(randomBugPkm, pokemon.player);
                    pokemon.simulation.addPokemon(randomBug, x, y, pokemon.team, true);
                }
            }
        }
    }
}
exports.FirstImpressionStrategy = FirstImpressionStrategy;
//# sourceMappingURL=first-impression.js.map