"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccelerockStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
const ability_strategy_1 = require("./ability-strategy");
class AccelerockStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        target = (_a = destination === null || destination === void 0 ? void 0 : destination.target) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, board, target, crit);
        if (destination) {
            pokemon.moveTo(destination.x, destination.y, board, false);
            pokemon.setTarget(destination.target);
        }
        const damageFactor = (_b = [1, 1.25, 2.5][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 2.5;
        target.handleSpecialDamage(pokemon.atk * damageFactor, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
        const nbEffects = (0, number_1.max)(Math.floor(pokemon.def / 2))(Math.round(5 * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1)));
        pokemon.addDefense(-2 * nbEffects, pokemon, 0, false);
        pokemon.addSpeed(nbEffects * 5, pokemon, 0, false);
    }
}
exports.AccelerockStrategy = AccelerockStrategy;
//# sourceMappingURL=accelerock.js.map