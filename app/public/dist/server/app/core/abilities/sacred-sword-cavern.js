"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SacredSwordCavernStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SacredSwordCavernStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const numberOfEnemiesInOurSide = board.cells.filter((cell) => cell &&
            cell.team !== pokemon.team &&
            (pokemon.team === Game_1.Team.BLUE_TEAM
                ? cell.positionY < 3
                : cell.positionY > 2)).length;
        const baseDmg = (_a = [40, 60, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const perEnemyDmg = (_b = [20, 20, 20, 40][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 40;
        const damage = baseDmg + perEnemyDmg * numberOfEnemiesInOurSide;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.SacredSwordCavernStrategy = SacredSwordCavernStrategy;
//# sourceMappingURL=sacred-sword-cavern.js.map