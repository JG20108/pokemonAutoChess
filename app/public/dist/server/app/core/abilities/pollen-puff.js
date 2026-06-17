"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollenPuffStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class PollenPuffStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const lowestHealthAlly = board.cells.filter((cell) => cell && cell.team === pokemon.team).sort((a, b) => a.hp - b.hp)[0];
        if (lowestHealthAlly) {
            const heal = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
            lowestHealthAlly.handleHeal(heal, pokemon, 1, crit);
            pokemon.broadcastAbility({
                targetX: lowestHealthAlly.positionX,
                targetY: lowestHealthAlly.positionY
            });
        }
    }
}
exports.PollenPuffStrategy = PollenPuffStrategy;
//# sourceMappingURL=pollen-puff.js.map