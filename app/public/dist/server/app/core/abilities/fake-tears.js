"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeTearsStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class FakeTearsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [5, 10, 15, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        board.forEach((x, y, value) => {
            var _a;
            if (value && pokemon.team != value.team) {
                const duration = (_a = [3000, 3000, 3000, 6000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6000;
                value.status.triggerArmorReduction(duration, value);
                pokemon.broadcastAbility({ positionX: x, positionY: y });
                value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.FakeTearsStrategy = FakeTearsStrategy;
//# sourceMappingURL=fake-tears.js.map