"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchorShotStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class AnchorShotStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const farthestTarget = pokemon.state.getFarthestTarget(pokemon, board);
        if (!farthestTarget)
            return;
        super.process(pokemon, board, farthestTarget, crit, true);
        const adjacentCells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        const emptyCellsAround = (0, random_1.shuffleArray)(adjacentCells
            .filter((v) => v.value === undefined)
            .map((v) => ({ x: v.x, y: v.y })));
        if (emptyCellsAround.length > 0) {
            const destination = emptyCellsAround[0];
            pokemon.broadcastAbility({
                targetX: farthestTarget.positionX,
                targetY: farthestTarget.positionY
            });
            farthestTarget.moveTo(destination.x, destination.y, board, true);
            farthestTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            farthestTarget.cooldown = (0, number_1.min)(750)(farthestTarget.cooldown);
        }
    }
}
exports.AnchorShotStrategy = AnchorShotStrategy;
//# sourceMappingURL=anchor-shot.js.map