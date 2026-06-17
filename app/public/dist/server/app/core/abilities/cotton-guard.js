"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CottonGuardStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const ability_strategy_1 = require("./ability-strategy");
class CottonGuardStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const cells = board.getCellsInFront(pokemon, target);
        const shield = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        pokemon.addShield(shield, pokemon, 1, crit);
        pokemon.addDefense(3, pokemon, 1, crit);
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.EffectEnum.COTTON_BALL, pokemon.simulation);
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerSleep(1000, cell.value);
            }
        });
    }
}
exports.CottonGuardStrategy = CottonGuardStrategy;
//# sourceMappingURL=cotton-guard.js.map