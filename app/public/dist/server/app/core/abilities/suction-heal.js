"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuctionHealStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SuctionHealStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const cells = board.getCellsInFront(pokemon, target, 2);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                const attack = cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                pokemon.broadcastAbility({
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: cell.value.positionX,
                    targetY: cell.value.positionY
                });
                pokemon.handleHeal(attack.takenDamage * 0.5, pokemon, 0, false);
            }
        });
    }
}
exports.SuctionHealStrategy = SuctionHealStrategy;
//# sourceMappingURL=suction-heal.js.map