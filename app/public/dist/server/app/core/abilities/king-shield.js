"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KingShieldStrategy = void 0;
const Pokemon_1 = require("../../types/enum/Pokemon");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class KingShieldStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const duration = 1500;
        const shield = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        pokemon.status.triggerProtect(duration);
        pokemon.addShield(shield, pokemon, 1, crit);
        const farthestTarget = pokemon.state.getFarthestTarget(pokemon, board);
        if (farthestTarget) {
            pokemon.moveTo(farthestTarget.positionX, farthestTarget.positionY, board, true);
        }
        if (pokemon.name === Pokemon_1.Pkm.AEGISLASH) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.addAttack(10, pokemon, 1, crit);
                pokemon.addDefense(-5, pokemon, 1, crit);
                pokemon.addSpecialDefense(-5, pokemon, 1, crit);
                pokemon.name = Pokemon_1.Pkm.AEGISLASH_BLADE;
                pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.AEGISLASH_BLADE];
                if (pokemon.player) {
                    pokemon.player.pokemonsPlayed.add(Pokemon_1.Pkm.AEGISLASH_BLADE);
                }
            }, 1500));
        }
        else if (pokemon.name === Pokemon_1.Pkm.AEGISLASH_BLADE) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.addAttack(-10, pokemon, 1, crit);
                pokemon.addDefense(5, pokemon, 1, crit);
                pokemon.addSpecialDefense(5, pokemon, 1, crit);
                pokemon.name = Pokemon_1.Pkm.AEGISLASH;
                pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.AEGISLASH];
            }, 1500));
        }
    }
}
exports.KingShieldStrategy = KingShieldStrategy;
//# sourceMappingURL=king-shield.js.map