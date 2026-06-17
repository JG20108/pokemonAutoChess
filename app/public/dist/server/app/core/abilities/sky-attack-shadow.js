"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyAttackShadowStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class SkyAttackShadowStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
        this.canCritByDefault = true;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (destination) {
            pokemon.skydiveTo(destination.x, destination.y, board);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.broadcastAbility({
                    skill: Ability_1.Ability.SKY_ATTACK,
                    positionX: destination.x,
                    positionY: destination.y,
                    targetX: destination.target.positionX,
                    targetY: destination.target.positionY
                });
            }, 500));
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                var _a, _b;
                if (((_a = destination.target) === null || _a === void 0 ? void 0 : _a.hp) > 0) {
                    const damage = (_b = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 240;
                    destination.target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }, 1000));
        }
    }
}
exports.SkyAttackShadowStrategy = SkyAttackShadowStrategy;
//# sourceMappingURL=sky-attack-shadow.js.map