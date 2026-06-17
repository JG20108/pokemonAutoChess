"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MudBubbleStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class MudBubbleStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const heal = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        pokemon.handleHeal(heal, pokemon, 1, crit);
        pokemon.resetCooldown(250, pokemon.speed);
    }
}
exports.MudBubbleStrategy = MudBubbleStrategy;
//# sourceMappingURL=mud-bubble.js.map