"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparklingAriaStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class SparklingAriaStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [15, 25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const cells = board.getAdjacentCells(target.positionX, target.positionY);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        cells.forEach((cell) => {
            const entity = cell.value;
            if (entity && entity.team !== pokemon.team) {
                entity.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
            else if (entity && entity.team === pokemon.team && entity.status.burn) {
                entity.status.healBurn(entity);
                entity.effects.add(Effect_1.EffectEnum.IMMUNITY_BURN);
                entity.commands.push(new simulation_command_1.DelayedCommand(() => {
                    entity.effects.delete(Effect_1.EffectEnum.IMMUNITY_BURN);
                }, 3000));
            }
        });
    }
}
exports.SparklingAriaStrategy = SparklingAriaStrategy;
//# sourceMappingURL=sparkling-aria.js.map