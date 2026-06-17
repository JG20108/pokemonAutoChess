"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpikesStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class SpikesStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const nbSpikes = Math.round(6 * (1 + pokemon.ap / 100));
        const cells = (0, random_1.pickNRandomIn)(board.getCellsInFront(pokemon, target, 3), nbSpikes);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.EffectEnum.SPIKES, pokemon.simulation);
            pokemon.broadcastAbility({ positionX: cell.x, positionY: cell.y });
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.SpikesStrategy = SpikesStrategy;
//# sourceMappingURL=spikes.js.map