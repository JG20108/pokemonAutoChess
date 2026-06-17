"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearingShotStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SearingShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 40, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const burnDuration = (_b = [3000, 3000, 3000, 6000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 6000;
        const cells = board.getCellsInRadius(pokemon.positionX, pokemon.positionY, 2, false);
        cells.forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBurn(burnDuration, target, pokemon);
            }
        });
    }
}
exports.SearingShotStrategy = SearingShotStrategy;
//# sourceMappingURL=searing-shot.js.map