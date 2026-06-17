"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowerTrickStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class FlowerTrickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [15, 40, 85, 170][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 170;
        const startingCritCount = target.count.crit;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            const currentCritCount = target.count.crit;
            const numberOfCrits = currentCritCount - startingCritCount;
            const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
            for (const cell of cells) {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.broadcastAbility({
                        skill: "FLOWER_TRICK_EXPLOSION",
                        positionX: cell.value.positionX,
                        positionY: cell.value.positionY
                    });
                    cell.value.handleSpecialDamage(damage + 15 * numberOfCrits, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }
        }, 3000));
    }
}
exports.FlowerTrickStrategy = FlowerTrickStrategy;
//# sourceMappingURL=flower-trick.js.map