"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LavaPlumeStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class LavaPlumeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const cells = board.getCellsInFront(pokemon, target);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.EffectEnum.EMBER, pokemon.simulation);
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                pokemon.broadcastAbility({ targetX: cell.x, targetY: cell.y });
            }
        });
    }
}
exports.LavaPlumeStrategy = LavaPlumeStrategy;
//# sourceMappingURL=lava-plume.js.map