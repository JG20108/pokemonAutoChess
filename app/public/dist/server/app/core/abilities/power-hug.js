"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerHugStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class PowerHugStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [40, 80, 160, 320][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 320;
        target.status.triggerLocked((_b = [3000, 3000, 6000, 10000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 10000, target);
        target.status.triggerParalysis((_c = [3000, 3000, 6000, 10000][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 10000, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.PowerHugStrategy = PowerHugStrategy;
//# sourceMappingURL=power-hug.js.map