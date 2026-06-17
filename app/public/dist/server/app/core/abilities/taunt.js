"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TauntStrategy = void 0;
const distance_1 = require("../../utils/distance");
const ability_strategy_1 = require("./ability-strategy");
class TauntStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const shield = ((_a = [25, 25, 25, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50) / 100 * pokemon.maxHP;
        pokemon.addShield(shield, pokemon, 0.5, crit);
        const enemiesTaunted = board.cells.filter((enemy) => enemy != null &&
            enemy.team !== pokemon.team &&
            (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY) <= enemy.range);
        enemiesTaunted.forEach((enemy) => {
            enemy.setTarget(pokemon);
            pokemon.broadcastAbility({
                skill: "TAUNT_HIT",
                targetX: enemy.positionX,
                targetY: enemy.positionY
            });
        });
    }
}
exports.TauntStrategy = TauntStrategy;
//# sourceMappingURL=taunt.js.map