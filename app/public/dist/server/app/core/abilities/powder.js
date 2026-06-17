"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowderStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class PowderStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit, true);
        const speedFactor = (_a = [10, 20, 30, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
        const damage = (_b = [10, 20, 30, 50][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 50;
        const enemies = board
            .getCellsInRange(pokemon.positionX, pokemon.positionY, pokemon.range, false)
            .filter((cell) => cell.value && cell.value.team !== pokemon.team)
            .map((cell) => cell.value)
            .sort((a, b) => b.speed - a.speed);
        const enemyWithHighestSpeed = (_c = enemies[0]) !== null && _c !== void 0 ? _c : target;
        if (enemyWithHighestSpeed) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, enemyWithHighestSpeed.positionX, enemyWithHighestSpeed.positionY);
            for (const cell of cells) {
                pokemon.broadcastAbility({
                    positionX: cell.x,
                    positionY: cell.y
                });
                if (cell.value) {
                    if (cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        const speedNerf = (0, number_1.max)(cell.value.speed)(speedFactor *
                            (1 + pokemon.ap / 100) *
                            (crit ? pokemon.critPower : 1));
                        cell.value.addSpeed(-speedNerf, pokemon, 0, false);
                        cell.value.commands.push(new simulation_command_1.DelayedCommand(() => {
                            var _a;
                            (_a = cell.value) === null || _a === void 0 ? void 0 : _a.addSpeed(speedNerf, pokemon, 0, false);
                        }, 5000));
                    }
                }
            }
        }
    }
}
exports.PowderStrategy = PowderStrategy;
//# sourceMappingURL=powder.js.map