"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisarmingVoiceStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class DisarmingVoiceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const radius = (_a = [1, 2, 3, 4][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4;
        const cells = board.getCellsInRadius(pokemon.positionX, pokemon.positionY, radius, false);
        const charmDuration = (_b = [1000, 1000, 1000, 2000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 2000;
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.status.triggerCharm(charmDuration, target, pokemon, true);
            }
        });
    }
}
exports.DisarmingVoiceStrategy = DisarmingVoiceStrategy;
//# sourceMappingURL=disarming-voice.js.map