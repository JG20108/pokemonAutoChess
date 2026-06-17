"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellTrapStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const effect_1 = require("../effects/effect");
const ability_strategy_1 = require("./ability-strategy");
class ShellTrapStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        if (pokemon.shield > 0) {
            const damage = ((_a = [50, 50, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100) + pokemon.shield;
            board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY, true)
                .forEach((cell) => {
                if (cell.value && pokemon.team != cell.value.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.shield = 0;
            pokemon.getEffects(effect_1.OnShieldDepletedEffect).forEach((effect) => {
                effect.apply({
                    pokemon,
                    board: pokemon.simulation.board,
                    attacker: pokemon,
                    damage
                });
            });
        }
        else {
            const shield = (_b = [25, 50, 75, 150][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 150;
            pokemon.addShield(shield, pokemon, 1, crit);
        }
    }
}
exports.ShellTrapStrategy = ShellTrapStrategy;
//# sourceMappingURL=shell-trap.js.map