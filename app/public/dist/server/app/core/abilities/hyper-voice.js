"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperVoiceStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class HyperVoiceStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const confusionDuration = (_b = [1000, 2000, 3000, 6000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 6000;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team && target.positionY == y) {
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(0.3, pokemon)) {
                    tg.status.triggerConfusion(confusionDuration, tg, pokemon);
                }
            }
        });
    }
}
exports.HyperVoiceStrategy = HyperVoiceStrategy;
//# sourceMappingURL=hyper-voice.js.map