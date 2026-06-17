"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DracoMeteorStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class DracoMeteorStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 120, 150, 300][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 300;
        const x = target.positionX;
        const y = target.positionY;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            board.getAdjacentCells(x, y, true).forEach((cell) => {
                if (cell.value && pokemon.team !== cell.value.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.addAbilityPower(-20, pokemon, 0, false);
        }, 1000));
    }
}
exports.DracoMeteorStrategy = DracoMeteorStrategy;
//# sourceMappingURL=draco-meteor.js.map