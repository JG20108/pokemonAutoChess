"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonDartsStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class DragonDartsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        for (let n = 0; n < 3; n++) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
        if (target.hp <= 0) {
            const ppRegained = (_b = [40, 40, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
            pokemon.addPP(ppRegained, pokemon, 0, false);
        }
    }
}
exports.DragonDartsStrategy = DragonDartsStrategy;
//# sourceMappingURL=dragon-darts.js.map