"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutrientsStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class NutrientsStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit, true);
        const heal = (_a = [20, 30, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const lowestHealthAlly = board.cells.filter((cell) => cell && cell.team === pokemon.team).sort((a, b) => a.hp / a.maxHP - b.hp / b.maxHP)[0];
        if (lowestHealthAlly) {
            lowestHealthAlly.handleHeal(heal, pokemon, 1, crit);
            lowestHealthAlly.addDefense((_b = [1, 2, 3, 6][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 6, pokemon, 1, crit);
            lowestHealthAlly.addSpecialDefense((_c = [1, 2, 3, 6][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 6, pokemon, 1, crit);
            pokemon.broadcastAbility({
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: lowestHealthAlly.positionX,
                targetY: lowestHealthAlly.positionY
            });
        }
    }
}
exports.NutrientsStrategy = NutrientsStrategy;
//# sourceMappingURL=nutrients.js.map