"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedFlareStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SeedFlareStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 25, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const spDefDebuff = (_b = [-3, -3, -3, -6][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : -6;
        board
            .getCellsInRadius(pokemon.positionX, pokemon.positionY, 5, false)
            .forEach((cell) => {
            if (cell.value && pokemon.team !== cell.value.team) {
                cell.value.addSpecialDefense(spDefDebuff, pokemon, 0, false);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.SeedFlareStrategy = SeedFlareStrategy;
//# sourceMappingURL=seed-flare.js.map