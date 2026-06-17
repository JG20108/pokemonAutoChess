"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrassWhistleStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class GrassWhistleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let n = (_a = [1, 2, 4, 8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team && n > 0) {
                tg.status.triggerSleep(2000, tg);
                n--;
            }
        });
    }
}
exports.GrassWhistleStrategy = GrassWhistleStrategy;
//# sourceMappingURL=grass-whistle.js.map