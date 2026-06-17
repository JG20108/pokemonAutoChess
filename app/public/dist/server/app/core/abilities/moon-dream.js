"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoonDreamStrategy = void 0;
const distance_1 = require("../../utils/distance");
const ability_strategy_1 = require("./ability-strategy");
class MoonDreamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const duration = ((_a = [3000, 6000, 9000, 18000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 18000);
        const shield = (_b = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 60;
        const count = 3;
        const allies = board.cells.filter((p) => p && p.team === pokemon.team && p.id !== pokemon.id);
        const alliesHit = allies
            .sort((a, b) => (0, distance_1.distanceM)(a.positionX, a.positionY, pokemon.targetX, pokemon.targetY) -
            (0, distance_1.distanceM)(b.positionX, b.positionY, pokemon.targetX, pokemon.targetY))
            .slice(0, count);
        alliesHit.forEach((ally) => {
            ally.addShield(shield, pokemon, 1, crit);
            pokemon.broadcastAbility({
                positionX: ally.positionX,
                positionY: ally.positionY
            });
        });
        target.status.triggerSleep(duration, target);
    }
}
exports.MoonDreamStrategy = MoonDreamStrategy;
//# sourceMappingURL=moon-dream.js.map