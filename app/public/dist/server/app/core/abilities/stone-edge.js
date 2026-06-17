"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoneEdgeStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const number_1 = require("../../utils/number");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class StoneEdgeStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const duration = ((_a = [5, 8, 10, 10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10) * 1000;
        if (pokemon.effects.has(Effect_1.EffectEnum.STONE_EDGE))
            return;
        pokemon.status.triggerSilence(duration, pokemon, pokemon);
        pokemon.effects.add(Effect_1.EffectEnum.STONE_EDGE);
        pokemon.addCritChance(20, pokemon, 1, false);
        pokemon.range += 2;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            pokemon.addCritChance(-20, pokemon, 1, false);
            pokemon.range = (0, number_1.min)(pokemon.baseRange)(pokemon.range - 2);
            pokemon.effects.delete(Effect_1.EffectEnum.STONE_EDGE);
        }, duration));
    }
}
exports.StoneEdgeStrategy = StoneEdgeStrategy;
//# sourceMappingURL=stone-edge.js.map