"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaticLaserStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PrismaticLaserStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const flip = pokemon.team === Game_1.Team.RED_TEAM;
        for (let dx = -1; dx <= 1; dx++) {
            const x = target.positionX + dx;
            if (x < 0 || x >= board.columns)
                continue;
            for (let y = flip ? 0 : board.rows - 1; flip ? y < board.rows : y >= 0; y += flip ? 1 : -1) {
                const entityOnCell = board.getEntityOnCell(x, y);
                if (entityOnCell && entityOnCell.team !== pokemon.team) {
                    entityOnCell.handleSpecialDamage((_a = [30, 40, 50, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    const newY = y + (flip ? -1 : 1);
                    if (newY >= 0 &&
                        newY < board.rows &&
                        board.getEntityOnCell(x, newY) == null) {
                        entityOnCell.moveTo(x, newY, board, true);
                    }
                }
            }
        }
    }
}
exports.PrismaticLaserStrategy = PrismaticLaserStrategy;
//# sourceMappingURL=prismatic-laser.js.map