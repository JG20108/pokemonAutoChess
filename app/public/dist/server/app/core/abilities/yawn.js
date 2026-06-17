"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YawnStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class YawnStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const opponentsTargetingMe = board.cells.filter((entity) => entity != null &&
            entity.team !== pokemon.team &&
            entity.targetEntityId === pokemon.id);
        opponentsTargetingMe.forEach((opponent) => {
            opponent.status.triggerFatigue(3000, pokemon);
            opponent.addAbilityPower(-20, pokemon, 0, false);
        });
        const shield = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        pokemon.addShield(shield, pokemon, 1, crit);
        pokemon.resetCooldown(1000);
    }
}
exports.YawnStrategy = YawnStrategy;
//# sourceMappingURL=yawn.js.map