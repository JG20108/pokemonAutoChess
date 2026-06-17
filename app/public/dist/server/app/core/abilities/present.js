"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresentStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PresentStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit);
        const chance = Math.pow(Math.random(), 1 - pokemon.luck / 100);
        const dmg80 = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const dmg150 = (_b = [50, 100, 150, 300][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 300;
        const dmg300 = (_c = [100, 200, 300, 600][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 600;
        if (chance < 0.1) {
            target.handleHeal(50, pokemon, 0, false);
        }
        else if (chance < 0.5) {
            target.handleSpecialDamage(dmg80, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        else if (chance < 0.8) {
            target.handleSpecialDamage(dmg150, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        else {
            target.handleSpecialDamage(dmg300, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.PresentStrategy = PresentStrategy;
//# sourceMappingURL=present.js.map