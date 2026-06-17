"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class WishStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const lowestHealthAlly = board.cells.filter((cell) => cell && cell.team === pokemon.team).sort((a, b) => a.hp / a.maxHP - b.hp / b.maxHP)[0];
        const shield = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        lowestHealthAlly.addShield(shield, pokemon, 1, crit);
        lowestHealthAlly.status.triggerProtect(1500);
    }
}
exports.WishStrategy = WishStrategy;
//# sourceMappingURL=wish.js.map