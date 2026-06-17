"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeleportStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class TeleportStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, false);
        const potentialCells = [
            [0, 0],
            [0, board.rows - 1],
            [board.columns - 1, board.rows - 1],
            [board.columns - 1, 0]
        ];
        (0, random_1.shuffleArray)(potentialCells);
        for (let i = 0; i < potentialCells.length; i++) {
            const entity = board.getEntityOnCell(potentialCells[i][0], potentialCells[i][1]);
            if (entity === undefined) {
                pokemon.moveTo(potentialCells[i][0], potentialCells[i][1], board, false);
                pokemon.effects.add(Effect_1.EffectEnum.TELEPORT_NEXT_ATTACK);
                break;
            }
        }
    }
}
exports.TeleportStrategy = TeleportStrategy;
//# sourceMappingURL=teleport.js.map