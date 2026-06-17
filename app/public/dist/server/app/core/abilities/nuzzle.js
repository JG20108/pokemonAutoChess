"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NuzzleStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class NuzzleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        target = (_a = destination === null || destination === void 0 ? void 0 : destination.target) !== null && _a !== void 0 ? _a : target;
        super.process(pokemon, board, target, crit);
        const damage = (_b = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 200;
        const duration = (_c = [3000, 3000, 3000, 6000][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 6000;
        if (destination) {
            pokemon.setTarget(destination.target);
            pokemon.moveTo(destination.x, destination.y, board, false);
        }
        target.status.triggerParalysis(duration, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
    }
}
exports.NuzzleStrategy = NuzzleStrategy;
//# sourceMappingURL=nuzzle.js.map