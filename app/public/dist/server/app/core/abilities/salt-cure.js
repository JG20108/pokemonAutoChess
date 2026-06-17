"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaltCureStrategy = void 0;
const Synergy_1 = require("../../types/enum/Synergy");
const ability_strategy_1 = require("./ability-strategy");
class SaltCureStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const shield = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const cells = board.getCellsInRadius(pokemon.positionX, pokemon.positionY, 2, false);
        cells.forEach((cell) => {
            if (cell.value) {
                if (cell.value.team === pokemon.team) {
                    cell.value.addShield(shield, pokemon, 1, crit);
                    cell.value.status.clearNegativeStatus(cell.value, pokemon);
                }
                else {
                    if (cell.value.types.has(Synergy_1.Synergy.WATER) ||
                        cell.value.types.has(Synergy_1.Synergy.STEEL) ||
                        cell.value.types.has(Synergy_1.Synergy.GHOST)) {
                        cell.value.status.triggerBurn(5000, cell.value, pokemon);
                    }
                }
            }
        });
    }
}
exports.SaltCureStrategy = SaltCureStrategy;
//# sourceMappingURL=salt-cure.js.map