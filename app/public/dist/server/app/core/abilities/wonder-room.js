"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WonderRoomStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class WonderRoomStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .forEach((cell) => {
            const enemy = cell.value;
            if (enemy && enemy.team !== pokemon.team) {
                enemy.effects.add(Effect_1.EffectEnum.WONDER_ROOM);
                enemy.commands.push(new simulation_command_1.DelayedCommand(() => {
                    enemy.effects.delete(Effect_1.EffectEnum.WONDER_ROOM);
                }, 5000));
            }
        });
    }
}
exports.WonderRoomStrategy = WonderRoomStrategy;
//# sourceMappingURL=wonder-room.js.map