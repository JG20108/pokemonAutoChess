"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetalDanceStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const distance_1 = require("../../utils/distance");
const ability_strategy_1 = require("./ability-strategy");
class PetalDanceStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [20, 30, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const count = (_b = [3, 4, 5, 6][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 6;
        const enemies = board.cells.filter((p) => p && p.team !== pokemon.team);
        const enemiesHit = enemies
            .sort((a, b) => (0, distance_1.distanceM)(a.positionX, a.positionY, pokemon.positionX, pokemon.positionY) -
            (0, distance_1.distanceM)(b.positionX, b.positionY, pokemon.positionX, pokemon.positionY))
            .slice(0, count);
        enemiesHit.forEach((enemy) => {
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            pokemon.broadcastAbility({
                positionX: enemy.positionX,
                positionY: enemy.positionY
            });
        });
    }
}
exports.PetalDanceStrategy = PetalDanceStrategy;
//# sourceMappingURL=petal-dance.js.map