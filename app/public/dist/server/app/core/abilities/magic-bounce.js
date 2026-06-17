"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagicBounceStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class MagicBounceStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        pokemon.status.triggerMagicBounce(5000);
    }
}
exports.MagicBounceStrategy = MagicBounceStrategy;
//# sourceMappingURL=magic-bounce.js.map