"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripleDiveStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class TripleDiveStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const enemies = board.cells
            .filter((entity) => entity != null && entity.team !== pokemon.team)
            .sort((a, b) => a.hp - b.hp)
            .slice(0, 3);
        enemies.forEach((enemy, i) => {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                if (enemy) {
                    const availableAdjacentPlace = board.getClosestAvailablePlace(enemy.positionX, enemy.positionY);
                    if (availableAdjacentPlace) {
                        pokemon.moveTo(availableAdjacentPlace.x, availableAdjacentPlace.y, board, false);
                    }
                    pokemon.broadcastAbility({
                        positionX: pokemon.positionX,
                        positionY: pokemon.positionY,
                        targetX: enemy.positionX,
                        targetY: enemy.positionY
                    });
                    enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }, 400 * i));
        });
    }
}
exports.TripleDiveStrategy = TripleDiveStrategy;
//# sourceMappingURL=triple-dive.js.map