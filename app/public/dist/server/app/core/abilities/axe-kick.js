"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxeKickStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class AxeKickStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const highestPPEnemies = board.cells
            .filter((e) => e !== undefined && e.team !== pokemon.team)
            .sort((a, b) => b.pp - a.pp);
        let highestPPEnemy = null;
        let freeSpot = null;
        do {
            highestPPEnemy = (_a = highestPPEnemies.shift()) !== null && _a !== void 0 ? _a : null;
            freeSpot = highestPPEnemy
                ? board.getClosestAvailablePlace(highestPPEnemy.positionX, highestPPEnemy.positionY)
                : null;
        } while (highestPPEnemies.length > 0 && (!highestPPEnemy || !freeSpot));
        if (highestPPEnemy && freeSpot) {
            pokemon.moveTo(freeSpot.x, freeSpot.y, board, false);
            const damage = (_b = [25, 50, 100][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 100;
            highestPPEnemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            highestPPEnemy.addPP(-15, pokemon, 1, crit);
            if ((0, random_1.chance)(0.3, pokemon)) {
                highestPPEnemy.status.triggerConfusion(3000, highestPPEnemy, pokemon);
            }
        }
    }
}
exports.AxeKickStrategy = AxeKickStrategy;
//# sourceMappingURL=axe-kick.js.map