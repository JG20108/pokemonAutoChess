"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrabHammerStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class CrabHammerStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.canCritByDefault = true;
    }
    process(pokemon, board, target, crit) {
        var _a;
        let damage = (_a = [40, 80, 160, 320][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 320;
        crit = (0, random_1.chance)((pokemon.critChance + 30) / 100, pokemon);
        super.process(pokemon, board, target, crit);
        let attackType = Game_1.AttackType.SPECIAL;
        if (target.hp / target.maxHP < 0.3) {
            damage = 9999;
            attackType = Game_1.AttackType.TRUE;
        }
        target.handleSpecialDamage(damage, board, attackType, pokemon, crit);
    }
}
exports.CrabHammerStrategy = CrabHammerStrategy;
//# sourceMappingURL=crab-hammer.js.map