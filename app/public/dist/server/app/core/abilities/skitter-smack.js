"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkitterSmackStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const orientation_1 = require("../../utils/orientation");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class SkitterSmackStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        pokemon.orientation = board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, target);
        const [dx, dy] = orientation_1.OrientationVector[pokemon.orientation];
        const nextX = target.positionX + dx;
        const nextY = target.positionY + dy;
        const behindCell = board.getClosestAvailablePlace(nextX, nextY);
        if (behindCell) {
            pokemon.moveTo(behindCell.x, behindCell.y, board, true);
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            if (target.hp > 0) {
                target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                target.addAbilityPower(-20, pokemon, 0, false);
            }
        }, 300));
    }
}
exports.SkitterSmackStrategy = SkitterSmackStrategy;
//# sourceMappingURL=skitter-smack.js.map