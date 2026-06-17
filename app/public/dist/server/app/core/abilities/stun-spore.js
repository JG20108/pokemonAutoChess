"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StunSporeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class StunSporeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerParalysis(5000, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.StunSporeStrategy = StunSporeStrategy;
//# sourceMappingURL=stun-spore.js.map