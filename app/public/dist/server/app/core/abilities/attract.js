"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttractStrategy = void 0;
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class AttractStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const nbTargets = (_a = [1, 2, 3, 5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5;
        const targets = (0, random_1.pickNRandomIn)(board.cells.filter((v) => v && v.team !== pokemon.team), nbTargets);
        const charmDuration = 1000;
        targets === null || targets === void 0 ? void 0 : targets.forEach((t) => {
            if (t) {
                pokemon.broadcastAbility({
                    targetX: t.positionX,
                    targetY: t.positionY
                });
                t === null || t === void 0 ? void 0 : t.status.triggerCharm(charmDuration, t, pokemon, true);
            }
        });
    }
}
exports.AttractStrategy = AttractStrategy;
//# sourceMappingURL=attract.js.map