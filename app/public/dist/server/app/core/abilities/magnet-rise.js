"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagnetRiseStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class MagnetRiseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const nbAlliesBuffed = (_a = [2, 4, 6, 8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8;
        const alliesBuffed = board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .map((cell) => cell.value)
            .filter((mon) => mon && mon.team === pokemon.team)
            .sort((a, b) => a.hp - b.hp)
            .slice(0, nbAlliesBuffed);
        alliesBuffed.push(pokemon);
        alliesBuffed.forEach((ally) => {
            var _a;
            ally.status.triggerProtect(2000);
            ally.addDodgeChance((_a = [0.1, 0.1, 0.1, 0.2][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 0.2, pokemon, 1, crit);
            pokemon.broadcastAbility({
                positionX: ally.positionX,
                positionY: ally.positionY
            });
        });
    }
}
exports.MagnetRiseStrategy = MagnetRiseStrategy;
//# sourceMappingURL=magnet-rise.js.map