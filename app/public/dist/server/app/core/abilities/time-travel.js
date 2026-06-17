"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTravelStrategy = void 0;
const Passive_1 = require("../../types/enum/Passive");
const ability_strategy_1 = require("./ability-strategy");
class TimeTravelStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const heal = (_a = [25, 25, 25, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
        board.forEach((x, y, ally) => {
            if (ally && pokemon.team == ally.team) {
                ally.handleHeal(heal, pokemon, 1, crit);
                ally.status.clearNegativeStatus(ally, pokemon);
            }
        });
        if (pokemon.player &&
            !pokemon.isGhostOpponent &&
            pokemon.player.life < 100 &&
            pokemon.passive === Passive_1.Passive.CELEBI) {
            pokemon.player.life += 1;
            pokemon.addStack();
        }
    }
}
exports.TimeTravelStrategy = TimeTravelStrategy;
//# sourceMappingURL=time-travel.js.map