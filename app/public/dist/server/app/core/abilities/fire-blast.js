"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireBlastStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class FireBlastStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 110, 220][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 220;
        const cellsHit = [
            { x: target.positionX, y: target.positionY },
            { x: target.positionX - 1, y: target.positionY },
            { x: target.positionX + 1, y: target.positionY },
            { x: target.positionX, y: target.positionY + 1 },
            { x: target.positionX - 1, y: target.positionY - 1 },
            { x: target.positionX + 1, y: target.positionY - 1 }
        ];
        for (const cell of cellsHit) {
            const entityOnCell = board.getEntityOnCell(cell.x, cell.y);
            if (entityOnCell && entityOnCell.team !== pokemon.team) {
                entityOnCell.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        }
    }
}
exports.FireBlastStrategy = FireBlastStrategy;
//# sourceMappingURL=fire-blast.js.map