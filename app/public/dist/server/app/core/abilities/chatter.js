"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatterStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class ChatterStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const confusionChance = 0.5;
        board
            .getCellsInRadius(pokemon.positionX, pokemon.positionY, 3, false)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(confusionChance, pokemon)) {
                    cell.value.status.triggerConfusion(1000, cell.value, pokemon);
                }
            }
        });
    }
}
exports.ChatterStrategy = ChatterStrategy;
//# sourceMappingURL=chatter.js.map