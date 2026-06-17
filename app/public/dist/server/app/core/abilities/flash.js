"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class FlashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const duration = ((_a = [2000, 4000, 6000, 12000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 12000) *
            (1 + pokemon.ap / 100) *
            (crit ? pokemon.critPower : 1);
        board
            .getCellsInRadius(pokemon.positionX, pokemon.positionY, 3, false)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerBlinded(duration, cell.value);
            }
        });
    }
}
exports.FlashStrategy = FlashStrategy;
//# sourceMappingURL=flash.js.map