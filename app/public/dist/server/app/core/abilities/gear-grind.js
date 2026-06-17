"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GearGrindStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class GearGrindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const speedFactor = (_a = [0.25, 0.5, 1, 2][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 2;
        const damage = Math.round(pokemon.speed * speedFactor);
        for (let i = 0; i < 2; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }, i * 250));
        }
    }
}
exports.GearGrindStrategy = GearGrindStrategy;
//# sourceMappingURL=gear-grind.js.map