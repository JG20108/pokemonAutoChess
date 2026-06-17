"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowPunchStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const ability_strategy_1 = require("./ability-strategy");
class ShadowPunchStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        const lowestHealthEnemy = board.cells.filter((cell) => cell && cell.team !== pokemon.team).sort((a, b) => a.hp / a.maxHP - b.hp / b.maxHP)[0];
        if (lowestHealthEnemy) {
            const coord = pokemon.simulation.getClosestFreeCellToPokemonEntity(lowestHealthEnemy, (lowestHealthEnemy.team + 1) % 2);
            if (coord) {
                pokemon.orientation = board.orientation(coord.x, coord.y, pokemon.positionX, pokemon.positionY, pokemon, lowestHealthEnemy);
                pokemon.moveTo(coord.x, coord.y, board, false);
            }
            pokemon.effects.add(Effect_1.EffectEnum.SHADOW_PUNCH_NEXT_ATTACK);
        }
    }
}
exports.ShadowPunchStrategy = ShadowPunchStrategy;
//# sourceMappingURL=shadow-punch.js.map