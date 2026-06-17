"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WildboltStormStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class WildboltStormStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [45, 60, 75, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 150;
        (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.status.triggerParalysis(4000, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.WildboltStormStrategy = WildboltStormStrategy;
//# sourceMappingURL=wildbolt-storm.js.map