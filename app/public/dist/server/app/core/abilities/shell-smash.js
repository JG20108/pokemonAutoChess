"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellSmashStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class ShellSmashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell && cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
        pokemon.addAbilityPower(20, pokemon, 0, false);
        pokemon.addAttack(2, pokemon, 0, false);
        pokemon.addSpeed(20, pokemon, 0, false);
        pokemon.addDefense(-2, pokemon, 0, false);
        pokemon.addSpecialDefense(-2, pokemon, 0, false);
    }
}
exports.ShellSmashStrategy = ShellSmashStrategy;
//# sourceMappingURL=shell-smash.js.map