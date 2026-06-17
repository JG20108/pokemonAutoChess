"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FickleBeamStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class FickleBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [20, 30, 40, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const highestSpeedEnemies = board.cells.filter((cell) => cell && cell.team !== pokemon.team).sort((a, b) => b.speed - a.speed);
        let numberOfBeam = 0;
        for (let i = 0; i < 5; i++) {
            (0, random_1.chance)(0.5, pokemon) && numberOfBeam++;
        }
        for (let i = 0; i < numberOfBeam; i++) {
            const enemy = highestSpeedEnemies[i % highestSpeedEnemies.length];
            if (enemy) {
                enemy.status.triggerParalysis(2000, enemy, pokemon, false);
                enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                pokemon.broadcastAbility({
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: enemy.positionX,
                    targetY: enemy.positionY
                });
            }
        }
    }
}
exports.FickleBeamStrategy = FickleBeamStrategy;
//# sourceMappingURL=fickle-beam.js.map