"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectroBallStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const distance_1 = require("../../utils/distance");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class ElectroBallStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        let projectileSpeedRemaining = pokemon.speed;
        const delay = Math.round(200 * (50 / pokemon.speed));
        const targetsHit = new Set();
        const bounce = (currentTarget, prevTarget) => {
            var _a;
            const distance = (0, distance_1.distanceM)(prevTarget.positionX, prevTarget.positionY, currentTarget.positionX, currentTarget.positionY);
            pokemon.broadcastAbility({
                positionX: prevTarget.positionX,
                positionY: prevTarget.positionY,
                targetX: currentTarget.positionX,
                targetY: currentTarget.positionY,
                delay: delay * distance
            });
            const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
            currentTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            targetsHit.add(currentTarget);
            const possibleTargets = board.cells.filter((cell) => cell !== undefined &&
                cell.team !== pokemon.team &&
                !targetsHit.has(cell));
            if (possibleTargets.length === 0)
                return;
            const distances = possibleTargets.map((cell) => (0, distance_1.distanceM)(cell.positionX, cell.positionY, currentTarget.positionX, currentTarget.positionY));
            const minDistance = Math.min(...distances);
            const closestTarget = possibleTargets[distances.indexOf(minDistance)];
            if (closestTarget && projectileSpeedRemaining > 0) {
                const nextTarget = possibleTargets[0];
                projectileSpeedRemaining -= 30;
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => bounce(nextTarget, currentTarget), delay * minDistance));
            }
        };
        bounce(target, pokemon);
    }
}
exports.ElectroBallStrategy = ElectroBallStrategy;
//# sourceMappingURL=electro-ball.js.map