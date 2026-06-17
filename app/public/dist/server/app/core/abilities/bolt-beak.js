"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoltBeakStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class BoltBeakStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            if (target && target.hp > 0) {
                target.handleSpecialDamage(target.pp > 40 ? damage * 2 : damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }, 250));
    }
}
exports.BoltBeakStrategy = BoltBeakStrategy;
//# sourceMappingURL=bolt-beak.js.map