"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulletPunchStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class BulletPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [20, 30, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
        const speedBuff = ((_b = [20, 30, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80) *
            (1 + pokemon.ap / 100) *
            (crit ? pokemon.critPower : 1);
        pokemon.addSpeed(speedBuff, pokemon, 0, false);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            pokemon.addSpeed(-speedBuff, pokemon, 0, false);
        }, 2000));
        pokemon.resetCooldown(250);
    }
}
exports.BulletPunchStrategy = BulletPunchStrategy;
//# sourceMappingURL=bullet-punch.js.map