"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NaturalGiftStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class NaturalGiftStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const lowestHealthAlly = board.cells.filter((cell) => cell && cell.team === pokemon.team).sort((a, b) => a.hp / a.maxHP - b.hp / b.maxHP)[0];
        const heal = (_a = [30, 60, 90, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 150;
        if (lowestHealthAlly) {
            lowestHealthAlly.handleHeal(heal, pokemon, 1, crit);
            const runeProtectDuration = (_b = [1000, 2000, 3000, 6000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 6000;
            lowestHealthAlly.status.triggerRuneProtect(runeProtectDuration, lowestHealthAlly, pokemon);
            pokemon.broadcastAbility({
                targetX: lowestHealthAlly.positionX,
                targetY: lowestHealthAlly.positionY
            });
        }
    }
}
exports.NaturalGiftStrategy = NaturalGiftStrategy;
//# sourceMappingURL=natural-gift.js.map