"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwineedleStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class TwineedleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [25, 50, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, (0, random_1.chance)(pokemon.critChance / 100, pokemon));
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            if ((0, random_1.chance)(0.5, pokemon)) {
                target.status.triggerPoison(4000, target, pokemon);
            }
        }, 500));
    }
}
exports.TwineedleStrategy = TwineedleStrategy;
//# sourceMappingURL=twineedle.js.map