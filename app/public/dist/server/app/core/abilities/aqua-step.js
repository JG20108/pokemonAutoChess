"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AquaStepStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class AquaStepStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const speedGain = (_b = [10, 15, 20, 25][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 25;
        const dx = target.positionX - pokemon.positionX;
        const dy = target.positionY - pokemon.positionY;
        const stepCell = board.getClosestAvailablePlace(pokemon.positionX + Math.sign(dx), pokemon.positionY + Math.sign(dy));
        if (stepCell) {
            pokemon.moveTo(stepCell.x, stepCell.y, board, false);
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            pokemon.broadcastAbility({
                targetX: target.positionX,
                targetY: target.positionY
            });
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            pokemon.addSpeed(speedGain, pokemon, 1, crit);
        }, 300));
    }
}
exports.AquaStepStrategy = AquaStepStrategy;
//# sourceMappingURL=aqua-step.js.map