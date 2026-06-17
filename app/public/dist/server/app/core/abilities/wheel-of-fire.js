"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WheelOfFireStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class WheelOfFireStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const farthestTarget = (_b = pokemon.state.getFarthestTarget(pokemon, board)) !== null && _b !== void 0 ? _b : target;
        super.process(pokemon, board, farthestTarget, crit);
        const targetsHit = new Set();
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                pokemon.broadcastAbility({
                    skill: "FLAME_HIT",
                    positionX: cell.x,
                    positionY: cell.y
                });
                targetsHit.add(cell.value);
            }
        });
        if (targetsHit.size === 0)
            targetsHit.add(target);
        targetsHit.forEach((enemy) => {
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            enemy.commands.push(new simulation_command_1.DelayedCommand(() => {
                enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }, 500));
        });
    }
}
exports.WheelOfFireStrategy = WheelOfFireStrategy;
//# sourceMappingURL=wheel-of-fire.js.map