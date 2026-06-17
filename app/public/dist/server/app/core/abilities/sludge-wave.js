"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SludgeWaveStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SludgeWaveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const duration = Math.round(((_a = [2000, 3000, 4000, 8000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8000) *
            (1 + pokemon.ap / 100) *
            (crit ? pokemon.critPower : 1));
        const damage = (_b = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                cell.value.status.triggerPoison(duration, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.SludgeWaveStrategy = SludgeWaveStrategy;
//# sourceMappingURL=sludge-wave.js.map