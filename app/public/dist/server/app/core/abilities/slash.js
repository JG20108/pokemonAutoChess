"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlashStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class SlashStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.canCritByDefault = true;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const increasedCrit = (_b = [30, 60, 90, 100][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 100;
        crit = (0, random_1.chance)((pokemon.critChance + increasedCrit) / 100, pokemon);
        super.process(pokemon, board, target, crit);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.SlashStrategy = SlashStrategy;
//# sourceMappingURL=slash.js.map