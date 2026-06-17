"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonClawStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class DragonClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, false);
        let lowestHp = 9999;
        let lowestHpTarget;
        for (const cell of cells) {
            if (cell.value && cell.value.team !== pokemon.team) {
                if (cell.value.maxHP < lowestHp) {
                    lowestHp = cell.value.maxHP;
                    lowestHpTarget = cell.value;
                }
            }
        }
        if (!lowestHpTarget) {
            lowestHpTarget = target;
        }
        lowestHpTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        lowestHpTarget.status.triggerWound(4000, lowestHpTarget, pokemon);
        pokemon.setTarget(lowestHpTarget);
    }
}
exports.DragonClawStrategy = DragonClawStrategy;
//# sourceMappingURL=dragon-claw.js.map