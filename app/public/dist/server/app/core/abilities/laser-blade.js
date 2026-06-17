"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaserBladeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class LaserBladeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit);
        if (pokemon.count.ult % 2 === 1) {
            const damage = (_a = [25, 25, 25, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
            const shield = (_b = [25, 25, 25, 50][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 50;
            const enemiesHit = new Set();
            board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
                .concat(board.getAdjacentCells(target.positionX, target.positionY, false))
                .map((cell) => cell.value)
                .filter((entity) => entity != null && entity.team !== pokemon.team)
                .forEach((enemy) => enemiesHit.add(enemy));
            pokemon.moveTo(target.positionX, target.positionY, board, true);
            pokemon.addShield(shield, pokemon, 1, crit);
            enemiesHit.forEach((enemy) => {
                enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            });
        }
        else {
            const damage = ((_c = [25, 25, 25, 50][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 50) + pokemon.atk;
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }, 300));
        }
    }
}
exports.LaserBladeStrategy = LaserBladeStrategy;
//# sourceMappingURL=laser-blade.js.map