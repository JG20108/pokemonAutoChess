"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThousandArrowsStrategy = void 0;
const config_1 = require("../../config");
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class ThousandArrowsStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [40, 50, 60, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const numberOfProjectiles = 33;
        for (let i = 0; i < numberOfProjectiles; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                const x = (0, random_1.randomBetween)(0, config_1.BOARD_WIDTH - 1);
                const y = (0, random_1.randomBetween)(0, config_1.BOARD_HEIGHT - 1);
                const value = board.getEntityOnCell(x, y);
                if (value && value.team !== pokemon.team) {
                    value.status.triggerLocked(1000, value);
                    value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                pokemon.broadcastAbility({
                    skill: Ability_1.Ability.THOUSAND_ARROWS,
                    positionX: x,
                    positionY: config_1.BOARD_HEIGHT - 1,
                    targetX: x,
                    targetY: y
                });
            }, i * 100));
        }
    }
}
exports.ThousandArrowsStrategy = ThousandArrowsStrategy;
//# sourceMappingURL=thousand-arrows.js.map