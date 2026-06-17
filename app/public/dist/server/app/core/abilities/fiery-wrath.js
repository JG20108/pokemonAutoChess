"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieryWrathStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class FieryWrathStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        const damage = [30, 40, 50, 80][pokemon.stars - 1];
        board
            .getCellsInRadius(pokemon.positionX, pokemon.positionY, 4, false)
            .forEach((cell) => {
            const unit = cell.value;
            if (unit && pokemon.team !== unit.team) {
                if ((0, random_1.chance)(0.5, pokemon)) {
                    unit.status.triggerFlinch(4000, unit, pokemon);
                }
                unit.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.FieryWrathStrategy = FieryWrathStrategy;
//# sourceMappingURL=fiery-wrath.js.map