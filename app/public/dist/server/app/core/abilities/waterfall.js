"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterfallStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class WaterfallStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const shield = (_a = [50, 100, 150, 300][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 300;
        pokemon.addShield(shield, pokemon, 1, crit);
        pokemon.status.clearNegativeStatus(pokemon, pokemon);
        board.clearBoardEffect(pokemon.positionX, pokemon.positionY, pokemon.simulation);
    }
}
exports.WaterfallStrategy = WaterfallStrategy;
//# sourceMappingURL=waterfall.js.map