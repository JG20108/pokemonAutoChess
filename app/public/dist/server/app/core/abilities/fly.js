"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class FlyStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (destination) {
            pokemon.status.triggerProtect(2000);
            pokemon.broadcastAbility({
                skill: "FLYING_TAKEOFF",
                targetX: destination.target.positionX,
                targetY: destination.target.positionY
            });
            pokemon.skydiveTo(destination.x, destination.y, board);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.broadcastAbility({
                    skill: "FLYING_SKYDIVE",
                    positionX: destination.x,
                    positionY: destination.y,
                    targetX: destination.target.positionX,
                    targetY: destination.target.positionY
                });
            }, 500));
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                var _a;
                if (destination.target && destination.target.hp > 0) {
                    const damageMultiplier = (_a = [4, 4, 4, 8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8;
                    const damage = damageMultiplier * pokemon.atk;
                    destination.target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }, 1000));
        }
    }
}
exports.FlyStrategy = FlyStrategy;
//# sourceMappingURL=fly.js.map