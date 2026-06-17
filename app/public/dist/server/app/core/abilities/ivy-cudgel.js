"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IvyCudgelStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Passive_1 = require("../../types/enum/Passive");
const ability_strategy_1 = require("./ability-strategy");
class IvyCudgelStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [50, 75, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (pokemon.passive === Passive_1.Passive.OGERPON_TEAL) {
            const nbAdjacentEnemies = board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY, true)
                .filter((cell) => cell.value && cell.value.team !== pokemon.team).length;
            pokemon.addAttack(6 * nbAdjacentEnemies, pokemon, 1, crit);
        }
        else if (pokemon.passive === Passive_1.Passive.OGERPON_WELLSPRING) {
            board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
                .forEach((cell) => {
                if (cell.value && cell.value.team === pokemon.team) {
                    cell.value.addPP(25, pokemon, 1, crit);
                    cell.value.handleHeal(50, pokemon, 1, crit);
                }
            });
        }
        else if (pokemon.passive === Passive_1.Passive.OGERPON_HEARTHFLAME) {
            board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
                .forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(30, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    cell.value.status.triggerBurn(5000, pokemon, cell.value);
                }
            });
        }
        else if (pokemon.passive === Passive_1.Passive.OGERPON_CORNERSTONE) {
            board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
                .forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.status.triggerFlinch(5000, pokemon, cell.value);
                }
            });
            const factor = 0.5;
            const protectDuration = Math.round(2000 *
                (1 + (pokemon.ap / 100) * factor) *
                (crit ? 1 + (pokemon.critPower - 1) * factor : 1));
            pokemon.status.triggerProtect(protectDuration);
        }
    }
}
exports.IvyCudgelStrategy = IvyCudgelStrategy;
//# sourceMappingURL=ivy-cudgel.js.map