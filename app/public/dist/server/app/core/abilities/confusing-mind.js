"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfusingMindStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class ConfusingMindStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const rank = new Array();
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                rank.push(tg);
            }
        });
        rank.sort((a, b) => {
            if (a.team === Game_1.Team.BLUE_TEAM) {
                return a.positionY - b.positionY;
            }
            else {
                return b.positionY - a.positionY;
            }
        });
        const duration = 3000;
        const count = (_a = [1, 2, 3, 5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5;
        for (let i = 0; i < count; i++) {
            const targetConfused = rank[i];
            if (targetConfused) {
                targetConfused.status.triggerConfusion(duration, targetConfused, pokemon, true);
            }
        }
    }
}
exports.ConfusingMindStrategy = ConfusingMindStrategy;
//# sourceMappingURL=confusing-mind.js.map