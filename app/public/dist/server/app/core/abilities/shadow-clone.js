"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowCloneStrategy = void 0;
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const ability_strategy_1 = require("./ability-strategy");
class ShadowCloneStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const spawnPosition = board.getClosestAvailablePlace(pokemon.positionX, pokemon.positionY);
        if (spawnPosition) {
            const p = pokemon_factory_1.default.createPokemonFromName(pokemon.name, {
                emotion: pokemon.emotion,
                shiny: pokemon.shiny
            });
            let itemStolen = null;
            if (target.items.size > 0) {
                itemStolen = (0, random_1.pickRandomIn)((0, schemas_1.schemaValues)(target.items));
                target.removeItem(itemStolen);
            }
            const clone = pokemon.simulation.addPokemon(p, spawnPosition.x, spawnPosition.y, pokemon.team, true);
            const hpPct = (_a = [0.5, 0.5, 0.9, 1.0][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 1.0;
            clone.maxHP = (0, number_1.min)(1)(Math.ceil(hpPct *
                pokemon.maxHP *
                (1 + pokemon.ap / 100) *
                (crit ? pokemon.critPower : 1)));
            clone.hp = clone.maxHP;
            if (itemStolen)
                clone.addItem(itemStolen);
        }
    }
}
exports.ShadowCloneStrategy = ShadowCloneStrategy;
//# sourceMappingURL=shadow-clone.js.map