"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpicyExtractStrategy = void 0;
const distance_1 = require("../../utils/distance");
const ability_strategy_1 = require("./ability-strategy");
class SpicyExtractStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const nbAllies = (_a = [1, 2, 3, 6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6;
        const rageDuration = 2000 * (1 + pokemon.ap / 100) * (crit ? 1 + (pokemon.critPower - 1) : 1);
        const allies = board.cells
            .filter((cell) => cell !== undefined &&
            cell !== pokemon &&
            cell.team === pokemon.team &&
            cell.hp > 0)
            .sort((a, b) => (0, distance_1.distanceE)(a.positionX, a.positionY, pokemon.positionX, pokemon.positionY) -
            (0, distance_1.distanceE)(b.positionX, b.positionY, pokemon.positionX, pokemon.positionY))
            .slice(0, nbAllies);
        allies.forEach((ally) => {
            ally.status.triggerRage(rageDuration, ally);
        });
    }
}
exports.SpicyExtractStrategy = SpicyExtractStrategy;
//# sourceMappingURL=spicy-extract.js.map