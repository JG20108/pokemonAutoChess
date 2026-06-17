"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsychoCutStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class PsychoCutStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.canCritByDefault = true;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        (0, board_1.effectInOrientation)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                for (let i = 0; i < 3; i++) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }
        });
    }
}
exports.PsychoCutStrategy = PsychoCutStrategy;
//# sourceMappingURL=psycho-cut.js.map