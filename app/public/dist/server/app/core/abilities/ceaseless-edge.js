"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeaselessEdgeStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class CeaselessEdgeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const cells = board.getCellsInFront(pokemon, target, 1);
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.EffectEnum.SPIKES, pokemon.simulation);
            pokemon.broadcastAbility({ positionX: cell.x, positionY: cell.y });
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.CeaselessEdgeStrategy = CeaselessEdgeStrategy;
//# sourceMappingURL=ceaseless-edge.js.map