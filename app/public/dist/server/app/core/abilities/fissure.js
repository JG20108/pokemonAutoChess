"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FissureStrategy = void 0;
const config_1 = require("../../config");
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class FissureStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const numberOfRifts = (_a = [2, 3, 4, 6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6;
        const damage = (_b = [25, 50, 75, 100][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 100;
        for (let i = 0; i < numberOfRifts; i++) {
            const x = (0, random_1.randomBetween)(0, config_1.BOARD_WIDTH - 1);
            const y = (0, random_1.randomBetween)(0, config_1.BOARD_HEIGHT - 1);
            const cells = board.getAdjacentCells(x, y);
            cells.push({ x, y, value: board.getEntityOnCell(x, y) });
            cells.forEach((cell) => {
                if (cell && cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                pokemon.broadcastAbility({ targetX: cell.x, targetY: cell.y });
            });
        }
    }
}
exports.FissureStrategy = FissureStrategy;
//# sourceMappingURL=fissure.js.map