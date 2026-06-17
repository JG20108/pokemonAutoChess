"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyrupBombStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SyrupBombStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [30, 40, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const highestSpeedEnemy = board.cells.filter((cell) => cell && cell.team !== pokemon.team).sort((a, b) => b.speed - a.speed)[0];
        if (highestSpeedEnemy) {
            const speedDebuff = 30;
            highestSpeedEnemy.addSpeed(-speedDebuff, pokemon, 1, crit);
            highestSpeedEnemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            pokemon.broadcastAbility({
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: highestSpeedEnemy.positionX,
                targetY: highestSpeedEnemy.positionY
            });
        }
    }
}
exports.SyrupBombStrategy = SyrupBombStrategy;
//# sourceMappingURL=syrup-bomb.js.map