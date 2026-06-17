"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelicSongStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class RelicSongStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        if (pokemon.count.ult % 3 === 0) {
            const factor = 0.5;
            const sleepDuration = Math.round(((_a = [2000, 2000, 2000, 5000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5000) *
                (1 + (pokemon.ap / 100) * factor) *
                (crit ? 1 + (pokemon.critPower - 1) * factor : 1));
            board.forEach((x, y, tg) => {
                if (tg && pokemon.team != tg.team) {
                    tg.status.triggerSleep(sleepDuration, tg);
                }
            });
        }
        else {
            board.forEach((x, y, tg) => {
                var _a;
                if (tg && pokemon.team === tg.team) {
                    tg.addShield((_a = [10, 10, 10, 25][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 25, pokemon, 1, crit);
                }
            });
        }
    }
}
exports.RelicSongStrategy = RelicSongStrategy;
//# sourceMappingURL=relic-song.js.map