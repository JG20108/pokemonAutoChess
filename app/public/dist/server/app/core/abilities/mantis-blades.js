"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MantisBladesStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class MantisBladesStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        for (const damageType of [
            Game_1.AttackType.PHYSICAL,
            Game_1.AttackType.SPECIAL,
            Game_1.AttackType.TRUE
        ]) {
            target.handleSpecialDamage(damage, board, damageType, pokemon, crit, true);
        }
    }
}
exports.MantisBladesStrategy = MantisBladesStrategy;
//# sourceMappingURL=mantis-blades.js.map