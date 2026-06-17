"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObstructStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class ObstructStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const scalingFactor = 0.5;
        const duration = Math.round(((_a = [1000, 1500, 2000, 4000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4000) *
            (1 + (pokemon.ap / 100) * scalingFactor) *
            (crit ? 1 + (pokemon.critPower - 1) * scalingFactor : 1));
        pokemon.status.triggerProtect(duration);
        pokemon.effects.add(Effect_1.EffectEnum.OBSTRUCT);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => pokemon.effects.delete(Effect_1.EffectEnum.OBSTRUCT), duration));
    }
}
exports.ObstructStrategy = ObstructStrategy;
//# sourceMappingURL=obstruct.js.map