"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchoStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class EchoStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [3, 6, 9, 12][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 12;
        const range = 2 + pokemon.count.ult;
        board
            .getCellsInRadius(pokemon.positionX, pokemon.positionY, range, false)
            .forEach((cell) => {
            if (cell.value && pokemon.team != cell.value.team) {
                cell.value.handleSpecialDamage(pokemon.count.ult * damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.EchoStrategy = EchoStrategy;
//# sourceMappingURL=echo.js.map