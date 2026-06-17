"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperspaceFuryStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class HyperspaceFuryStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const nbHits = Math.round(((_a = [1, 2, 3, 4, 8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8) *
            (1 + pokemon.ap / 100) *
            (crit ? pokemon.critPower : 1));
        for (let i = 0; i < nbHits; i++) {
            target.addDefense(-1, pokemon, 0, false);
            target.addSpecialDefense(-1, pokemon, 0, false);
            target.handleSpecialDamage(15, board, Game_1.AttackType.SPECIAL, pokemon, false, false);
        }
        pokemon.broadcastAbility({
            targetX: target.positionX,
            targetY: target.positionY,
            orientation: nbHits
        });
    }
}
exports.HyperspaceFuryStrategy = HyperspaceFuryStrategy;
//# sourceMappingURL=hyperspace-fury.js.map