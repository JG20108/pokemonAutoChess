"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShockwaveStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const distance_1 = require("../../utils/distance");
const ability_strategy_1 = require("./ability-strategy");
class ShockwaveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        const range = 2 + (pokemon.status.electricField ? 1 : 0);
        board
            .getCellsInRadius(pokemon.positionX, pokemon.positionY, range, false)
            .forEach((cell) => {
            if (cell.value && cell.value.team != pokemon.team) {
                const distance = (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, cell.x, cell.y);
                const damageMultiplier = 1 - 0.2 * distance;
                cell.value.handleSpecialDamage(Math.round(damage * damageMultiplier), board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.ShockwaveStrategy = ShockwaveStrategy;
//# sourceMappingURL=shockwave.js.map