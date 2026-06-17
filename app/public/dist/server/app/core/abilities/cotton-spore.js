"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CottonSporeStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const distance_1 = require("../../utils/distance");
const ability_strategy_1 = require("./ability-strategy");
class CottonSporeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const NB_MAX_TARGETS = 3;
        const speedDebuff = (_a = [10, 20, 30, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
        const enemies = board.cells
            .filter((v) => v != null && v.team !== pokemon.team)
            .sort((a, b) => {
            const distanceA = (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, a.positionX, a.positionY);
            const distanceB = (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, b.positionX, b.positionY);
            return distanceA - distanceB;
        });
        const nearestEnemies = enemies.slice(0, NB_MAX_TARGETS);
        nearestEnemies.forEach((enemy) => {
            enemy.addSpeed(-speedDebuff, pokemon, 1, crit);
            board.addBoardEffect(enemy.positionX, enemy.positionY, Effect_1.EffectEnum.COTTON_BALL, pokemon.simulation);
            pokemon.broadcastAbility({
                targetX: enemy.positionX,
                targetY: enemy.positionY
            });
        });
    }
}
exports.CottonSporeStrategy = CottonSporeStrategy;
//# sourceMappingURL=cotton-spore.js.map