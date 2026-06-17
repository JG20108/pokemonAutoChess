"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SilkTrapStrategy = void 0;
const distance_1 = require("../../utils/distance");
const effect_1 = require("../effects/effect");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class SilkTrapStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const speedNerf = (_a = [5, 10, 15, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        const trapEffect = new effect_1.OnAttackReceivedEffect(({ attacker, pokemon }) => {
            if ((0, distance_1.distanceC)(attacker.positionX, attacker.positionY, pokemon.positionX, pokemon.positionY) === 1) {
                attacker.addSpeed(-speedNerf, pokemon, 1, crit);
                attacker.status.triggerParalysis(1500, attacker, pokemon);
            }
        });
        pokemon.status.triggerProtect(1500);
        pokemon.effectsSet.add(trapEffect);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            pokemon.effectsSet.delete(trapEffect);
        }, 1500));
    }
}
exports.SilkTrapStrategy = SilkTrapStrategy;
//# sourceMappingURL=silk-trap.js.map