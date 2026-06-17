"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplashStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class SplashStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
    }
}
exports.SplashStrategy = SplashStrategy;
//# sourceMappingURL=splash.js.map