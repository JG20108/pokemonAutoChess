"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongOfDesireStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SongOfDesireStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
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
        const count = (_a = [1, 1, 2, 3][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 3;
        for (let i = 0; i < count; i++) {
            const targetCharmed = rank[i];
            if (targetCharmed) {
                targetCharmed.status.triggerCharm(duration, targetCharmed, pokemon, false);
                targetCharmed.addAttack(-3, pokemon, 1, crit);
            }
        }
    }
}
exports.SongOfDesireStrategy = SongOfDesireStrategy;
//# sourceMappingURL=song-of-desire.js.map