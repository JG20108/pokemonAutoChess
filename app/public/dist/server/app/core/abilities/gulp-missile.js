"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GulpMissileStrategy = void 0;
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const Game_1 = require("../../types/enum/Game");
const Pokemon_1 = require("../../types/enum/Pokemon");
const distance_1 = require("../../utils/distance");
const random_1 = require("../../utils/random");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class GulpMissileStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let missilePkm = Pokemon_1.Pkm.ARROKUDA;
        let missilePkmString = "arrokuda";
        const damage = (_a = [25, 40, 55, 110][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 110;
        if ((0, random_1.chance)(0.2, pokemon)) {
            missilePkm = Pokemon_1.Pkm.PIKACHU;
            missilePkmString = "pikachu";
        }
        pokemon.broadcastAbility({
            skill: `GULP_MISSILE/${missilePkmString}`
        });
        const missile = pokemon_factory_1.default.createPokemonFromName(missilePkm, pokemon.player);
        if (pokemon.player)
            pokemon.player.pokemonsPlayed.add(missilePkm);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            const coord = pokemon.state.getNearestAvailablePlaceCoordinates(target, board);
            if (coord) {
                const entity = pokemon.simulation.addPokemon(missile, coord.x, coord.y, pokemon.team, true);
                entity.pp = entity.maxPP;
                target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }, (0, distance_1.distanceM)(target.positionX, target.positionY, pokemon.positionX, pokemon.positionY) *
            150 -
            30));
    }
}
exports.GulpMissileStrategy = GulpMissileStrategy;
//# sourceMappingURL=gulp-missile.js.map