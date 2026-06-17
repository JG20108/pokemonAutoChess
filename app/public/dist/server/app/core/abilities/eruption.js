"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EruptionStrategy = void 0;
const config_1 = require("../../config");
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class EruptionStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 50, 70, 90][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 90;
        const numberOfProjectiles = (_b = [20, 30, 45, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 60;
        for (let i = 0; i < numberOfProjectiles; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                const x = (0, random_1.randomBetween)(0, config_1.BOARD_WIDTH - 1);
                const y = (0, random_1.randomBetween)(0, config_1.BOARD_HEIGHT - 1);
                const value = board.getEntityOnCell(x, y);
                if (value && value.team !== pokemon.team) {
                    value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    value.status.triggerBurn(5000, value, pokemon);
                }
                pokemon.broadcastAbility({ targetX: x, targetY: y });
            }, i * 100));
        }
    }
}
exports.EruptionStrategy = EruptionStrategy;
//# sourceMappingURL=eruption.js.map