"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoomDesireStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class DoomDesireStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            var _a;
            if (target && target.hp > 0) {
                pokemon.broadcastAbility({
                    skill: "DOOM_DESIRE_HIT",
                    targetX: target.positionX,
                    targetY: target.positionY
                });
                const damage = (_a = [100, 125, 150, 300][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 300;
                target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            }
            else {
                pokemon.pp = pokemon.maxPP;
            }
        }, 2000));
        pokemon.resetCooldown(200);
    }
}
exports.DoomDesireStrategy = DoomDesireStrategy;
//# sourceMappingURL=doom-desire.js.map