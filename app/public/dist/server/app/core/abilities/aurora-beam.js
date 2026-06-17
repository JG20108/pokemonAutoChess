"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuroraBeamStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class AuroraBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                const freezeChance = 0.5;
                if ((0, random_1.chance)(freezeChance, pokemon)) {
                    cell.value.status.triggerFreeze(2000, target, pokemon);
                }
            }
        });
    }
}
exports.AuroraBeamStrategy = AuroraBeamStrategy;
//# sourceMappingURL=aurora-beam.js.map