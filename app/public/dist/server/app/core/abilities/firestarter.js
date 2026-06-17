"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestarterStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class FirestarterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const speedBuff = (_b = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
        const flyAwayCell = pokemon.flyAway(board, false);
        const targetsHit = new Set();
        if (flyAwayCell) {
            const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, flyAwayCell.x, flyAwayCell.y);
            cells.forEach((cell, i) => {
                if (cell.x === flyAwayCell.x && cell.y === flyAwayCell.y) {
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        pokemon.addSpeed(speedBuff, pokemon, 1, crit);
                    }, 500));
                }
                else {
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        board.addBoardEffect(cell.x, cell.y, Effect_1.EffectEnum.EMBER, pokemon.simulation);
                        pokemon.broadcastAbility({ targetX: cell.x, targetY: cell.y });
                        if (cell.value && cell.value.team != pokemon.team) {
                            targetsHit.add(cell.value);
                            cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        }
                    }, i * 50));
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        board.addBoardEffect(cell.x, cell.y, Effect_1.EffectEnum.EMBER, pokemon.simulation);
                    }, 400 + i * 50));
                }
            });
        }
        if (targetsHit.size === 0) {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.FirestarterStrategy = FirestarterStrategy;
//# sourceMappingURL=firestarter.js.map