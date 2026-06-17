"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurySwipesStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class FurySwipesStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const scale = 1 + pokemon.ap / 100;
        const nbAttacks = Math.round(((_a = [5, 5, 5, 10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10) * scale);
        const hitPerSecond = Math.round(1000 / nbAttacks);
        for (let n = 0; n < nbAttacks; n++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                if (target && target.hp > 0) {
                    target.handleSpecialDamage(Math.ceil(pokemon.atk), board, Game_1.AttackType.PHYSICAL, pokemon, crit, false);
                }
                else {
                    pokemon.addPP(20, pokemon, 0, false);
                }
            }, n * hitPerSecond));
        }
        pokemon.cooldown += 1000;
    }
}
exports.FurySwipesStrategy = FurySwipesStrategy;
//# sourceMappingURL=fury-swipes.js.map