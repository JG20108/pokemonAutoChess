"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppleAcidStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class AppleAcidStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const cells = board.getCellsInFront(pokemon, target);
        const damage = (_a = [15, 30, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(cell.value.speDef === 0 ? damage * 2 : damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                pokemon.broadcastAbility({
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: cell.value.positionX,
                    targetY: cell.value.positionY
                });
            }
        });
    }
}
exports.AppleAcidStrategy = AppleAcidStrategy;
//# sourceMappingURL=apple-acid.js.map