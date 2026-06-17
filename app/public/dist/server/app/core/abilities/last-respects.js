"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastRespectsStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class LastRespectsStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const factor = 0.2;
        const damage = (_a = [30, 60, 90, 180][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 180;
        const curseDelay = (0, number_1.min)(0)(((_b = [10000, 8000, 6000, 4000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 4000) *
            (1 - (factor * pokemon.ap) / 100) *
            (crit ? 1 - (pokemon.critPower - 1) * factor : 1));
        const cells = board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .filter((c) => { var _a, _b; return ((_a = c.value) === null || _a === void 0 ? void 0 : _a.team) === target.team && !((_b = c.value) === null || _b === void 0 ? void 0 : _b.status.curse); })
            .map((c) => c.value);
        const curseTarget = (0, random_1.pickRandomIn)(cells);
        const damageTarget = curseTarget || target;
        pokemon.broadcastAbility({
            targetX: damageTarget.positionX,
            targetY: damageTarget.positionY,
            positionX: pokemon.positionX,
            positionY: pokemon.positionY
        });
        damageTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        curseTarget === null || curseTarget === void 0 ? void 0 : curseTarget.status.triggerCurse(curseDelay, curseTarget);
    }
}
exports.LastRespectsStrategy = LastRespectsStrategy;
//# sourceMappingURL=last-respects.js.map