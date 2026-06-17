"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LingeringAromaStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const distance_1 = require("../../utils/distance");
const effect_1 = require("../effects/effect");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class LingeringAromaStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const duration = 5000;
        const damage = (_a = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const lingeringAromaEffect = new effect_1.OnAttackReceivedEffect(({ attacker, pokemon }) => {
            if ((0, distance_1.distanceC)(attacker.positionX, attacker.positionY, pokemon.positionX, pokemon.positionY) === 1) {
                attacker.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                attacker.addPP(-5, pokemon, 0, false);
            }
        });
        pokemon.effectsSet.add(lingeringAromaEffect);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            pokemon.effectsSet.delete(lingeringAromaEffect);
        }, duration));
    }
}
exports.LingeringAromaStrategy = LingeringAromaStrategy;
//# sourceMappingURL=lingering-aroma.js.map