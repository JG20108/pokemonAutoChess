"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreEnforcerStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class CoreEnforcerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const cellsHit = board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .filter((cell) => cell.y !== target.positionY || cell.x === target.positionX);
        const damage = (_a = [40, 60, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        cellsHit.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerSilence(3000, cell.value);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            }
        });
    }
}
exports.CoreEnforcerStrategy = CoreEnforcerStrategy;
//# sourceMappingURL=core-enforcer.js.map