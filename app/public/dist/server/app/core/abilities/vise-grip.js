"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViseGripStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class ViseGripStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [30, 60, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        target.status.triggerLocked(4000, target);
        pokemon.status.triggerLocked(4000, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const defGain = target.def * 1;
        const spedefGain = target.speDef * 1;
        pokemon.addDefense(defGain, pokemon, 1, crit);
        pokemon.addSpecialDefense(spedefGain, pokemon, 1, crit);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            pokemon.addDefense(-defGain, pokemon, 1, crit);
            pokemon.addSpecialDefense(-spedefGain, pokemon, 1, crit);
        }, 4000));
    }
}
exports.ViseGripStrategy = ViseGripStrategy;
//# sourceMappingURL=vise-grip.js.map