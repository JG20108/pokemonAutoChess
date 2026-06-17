"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolarBladeStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class SolarBladeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        if (!pokemon.status.light) {
            pokemon.cooldown = 2000;
            pokemon.broadcastAbility({
                skill: "SOLAR_BLADE_CHARGE",
                positionX: pokemon.positionX,
                positionY: pokemon.positionY
            });
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            var _a;
            const damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
            pokemon.broadcastAbility({
                skill: Ability_1.Ability.SOLAR_BLADE,
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                orientation: pokemon.orientation
            });
            const cells = board.getCellsInFront(pokemon, target, 1);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
                }
            });
        }, pokemon.status.light ? 0 : 2000));
    }
}
exports.SolarBladeStrategy = SolarBladeStrategy;
//# sourceMappingURL=solar-blade.js.map