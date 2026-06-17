"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UTurnStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class UTurnStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const shield = (_a = [15, 30, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        pokemon.moveTo(target.positionX, target.positionY, board, true);
        pokemon.addShield(shield, pokemon, 1, crit);
        target.status.triggerCharm(1000, target, pokemon, false);
    }
}
exports.UTurnStrategy = UTurnStrategy;
//# sourceMappingURL=u-turn.js.map