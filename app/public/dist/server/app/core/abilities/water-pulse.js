"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterPulseStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class WaterPulseStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [70, 140, 280, 500][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 500;
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .map((cell) => cell.value)
            .filter((value) => (value === null || value === void 0 ? void 0 : value.team) === target.team)
            .forEach((v) => {
            if ((0, random_1.chance)(0.3, pokemon)) {
                v.status.triggerConfusion(2000, v, pokemon);
            }
            v.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        });
    }
}
exports.WaterPulseStrategy = WaterPulseStrategy;
//# sourceMappingURL=water-pulse.js.map