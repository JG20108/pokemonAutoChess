"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RockArtilleryStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class RockArtilleryStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const numberOfRocks = (_a = [10, 15, 25, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
        const damage = (_b = [20, 30, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        const enemies = board.cells.filter((cell) => cell && cell.team !== pokemon.team);
        for (let i = 0; i < numberOfRocks; i++) {
            const randomEnemy = (0, random_1.pickRandomIn)(enemies);
            if (randomEnemy) {
                const adjacentCells = board.getAdjacentCells(randomEnemy.positionX, randomEnemy.positionY, true);
                const targetCell = (0, random_1.pickRandomIn)(adjacentCells);
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                    pokemon.broadcastAbility({
                        targetX: targetCell.x,
                        targetY: targetCell.y
                    });
                    if (targetCell.value && targetCell.value.team !== pokemon.team) {
                        targetCell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                }, i * 100));
            }
        }
    }
}
exports.RockArtilleryStrategy = RockArtilleryStrategy;
//# sourceMappingURL=rock-artillery.js.map