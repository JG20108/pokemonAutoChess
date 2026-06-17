"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfernalParadeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class InfernalParadeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        const farthestTarget = (_a = pokemon.state.getFarthestTarget(pokemon, board)) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, board, farthestTarget, crit);
        const targetsHit = new Set();
        const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestTarget.positionX, farthestTarget.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                targetsHit.add(cell.value);
            }
            pokemon.broadcastAbility({
                skill: "FLAME_HIT",
                positionX: cell.x,
                positionY: cell.y
            });
        });
        if (targetsHit.size === 0)
            targetsHit.add(target);
        targetsHit.forEach((enemy) => {
            var _a;
            if ((0, random_1.chance)(0.5, pokemon)) {
                enemy.status.triggerBurn(3000, enemy, pokemon);
            }
            enemy.handleSpecialDamage((_a = [30, 30, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            enemy.commands.push(new simulation_command_1.DelayedCommand(() => {
                var _a;
                enemy.handleSpecialDamage((_a = [30, 30, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }, 500));
        });
    }
}
exports.InfernalParadeStrategy = InfernalParadeStrategy;
//# sourceMappingURL=infernal-parade.js.map