"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IronDefenseStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class IronDefenseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const shield = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team && y === pokemon.positionY) {
                ally.addShield(shield, pokemon, 1, crit);
            }
        });
    }
}
exports.IronDefenseStrategy = IronDefenseStrategy;
//# sourceMappingURL=iron-defense.js.map