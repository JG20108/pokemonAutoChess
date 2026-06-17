"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuroraVeilStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class AuroraVeilStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const runeProtectDuration = 1000;
        const shield = (_a = [5, 10, 20, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team == tg.team) {
                tg.addShield(shield, pokemon, 1, crit);
                tg.status.triggerRuneProtect(runeProtectDuration, tg, pokemon);
            }
        });
    }
}
exports.AuroraVeilStrategy = AuroraVeilStrategy;
//# sourceMappingURL=aurora-veil.js.map