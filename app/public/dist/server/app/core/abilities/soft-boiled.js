"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftBoiledStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class SoftBoiledStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const shield = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team == tg.team) {
                pokemon.broadcastAbility({ positionX: x, positionY: y });
                tg.addShield(shield, pokemon, 1, crit);
                tg.status.clearNegativeStatus(tg, pokemon);
            }
        });
    }
}
exports.SoftBoiledStrategy = SoftBoiledStrategy;
//# sourceMappingURL=soft-boiled.js.map