"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IceBallStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class IceBallStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const baseDamage = (_a = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const multiplier = (_b = [0.5, 1, 1.5, 3][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 3;
        const speDefBoost = 10;
        pokemon.addSpecialDefense(speDefBoost, pokemon, 0, false);
        target.handleSpecialDamage(baseDamage + multiplier * pokemon.speDef, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.IceBallStrategy = IceBallStrategy;
//# sourceMappingURL=ice-ball.js.map