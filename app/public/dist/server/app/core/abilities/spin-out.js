"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinOutStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const acceleration_1 = require("../effects/passives/acceleration");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class SpinOutStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        const damage = Math.round([0.25, 0.5, 1, 2][pokemon.stars - 1] * pokemon.speed);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        target.status.triggerBlinded(1000, target);
        const corner = board.getTeleportationCell(pokemon.positionX, pokemon.positionY, pokemon.team);
        if (corner) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.moveTo(corner.x, corner.y, board, false);
            }, 100));
        }
        const accelerationEffect = [...pokemon.effectsSet.values()].find((effect) => effect instanceof acceleration_1.AccelerationEffect);
        if (accelerationEffect) {
            pokemon.addSpeed(-accelerationEffect.accelerationStacks * 15, pokemon, 0, false);
            accelerationEffect.accelerationStacks = 0;
        }
    }
}
exports.SpinOutStrategy = SpinOutStrategy;
//# sourceMappingURL=spin-out.js.map