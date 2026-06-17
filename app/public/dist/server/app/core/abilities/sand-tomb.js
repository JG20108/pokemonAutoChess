"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandTombStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SandTombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const statusDuration = (_a = [3000, 5000, 8000, 16000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 16000;
        const damage = (_b = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        target.status.triggerParalysis(statusDuration, target, pokemon);
        target.status.triggerSilence(statusDuration, target, pokemon);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.SandTombStrategy = SandTombStrategy;
//# sourceMappingURL=sand-tomb.js.map