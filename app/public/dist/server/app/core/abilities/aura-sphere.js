"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuraSphereStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class AuraSphereStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerSilence(3000, cell.value, pokemon);
            }
        });
    }
}
exports.AuraSphereStrategy = AuraSphereStrategy;
//# sourceMappingURL=aura-sphere.js.map