"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DireClawStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class DireClawStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const status = (0, random_1.pickRandomIn)(["poison", "sleep", "paralysis"]);
        switch (status) {
            case "poison":
                target.status.triggerPoison(3000, target, pokemon);
                break;
            case "sleep":
                target.status.triggerSleep(3000, target);
                break;
            case "paralysis":
                target.status.triggerParalysis(3000, target, pokemon);
                break;
        }
        const damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.DireClawStrategy = DireClawStrategy;
//# sourceMappingURL=dire-claw.js.map