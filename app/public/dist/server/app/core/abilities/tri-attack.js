"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriAttackStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class TriAttackStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const effect = (0, random_1.randomBetween)(1, 3);
        switch (effect) {
            case 1:
                target.status.triggerFreeze(3000, target, pokemon);
                break;
            case 2:
                target.status.triggerBurn(5000, target, pokemon);
                break;
            case 3:
                target.status.triggerParalysis(7000, target, pokemon);
                break;
        }
        const damage = (_a = [60, 120, 250, 500][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 500;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.TriAttackStrategy = TriAttackStrategy;
//# sourceMappingURL=tri-attack.js.map