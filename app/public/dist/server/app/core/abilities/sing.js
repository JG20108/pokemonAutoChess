"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SingStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const timer = Math.round(((_a = [2000, 2000, 2000, 4000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4000) * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        const count = (_b = [1, 2, 3, 5][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 5;
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
        for (let i = 0; i < count; i++) {
            const tg = rank[i];
            if (tg) {
                tg.status.triggerSleep(timer, tg);
            }
        }
    }
}
exports.SingStrategy = SingStrategy;
//# sourceMappingURL=sing.js.map