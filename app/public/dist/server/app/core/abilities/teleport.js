"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeleportStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const ability_strategy_1 = require("./ability-strategy");
class TeleportStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, false);
        const safeCell = board.getFlyAwayCell(pokemon);
        if (safeCell) {
            pokemon.moveTo(safeCell.x, safeCell.y, board, false);
            pokemon.effects.add(Effect_1.EffectEnum.TELEPORT_NEXT_ATTACK);
        }
    }
}
exports.TeleportStrategy = TeleportStrategy;
//# sourceMappingURL=teleport.js.map