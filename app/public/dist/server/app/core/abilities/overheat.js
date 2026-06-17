"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverheatStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class OverheatStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        board
            .getCellsInRadius(target.positionX, target.positionY, 4, true)
            .forEach((cell) => {
            var _a;
            const unit = cell.value;
            if (unit && pokemon.team !== unit.team) {
                let damage = (_a = [12, 25, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
                if (unit.status.burn) {
                    damage = Math.round(damage * 1.3);
                }
                unit.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
            if (unit && unit.status.freeze) {
                unit.status.freezeCooldown = 0;
            }
        });
    }
}
exports.OverheatStrategy = OverheatStrategy;
//# sourceMappingURL=overheat.js.map