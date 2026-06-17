"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectroShotStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const Weather_1 = require("../../types/enum/Weather");
const board_1 = require("../board");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class ElectroShotStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        if (pokemon.simulation.weather !== Weather_1.Weather.STORM) {
            pokemon.cooldown = 2000;
            pokemon.broadcastAbility({
                skill: "ELECTRO_SHOT_CHARGE",
                positionX: pokemon.positionX,
                positionY: pokemon.positionY
            });
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            var _a;
            const damage = (_a = [80, 100, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
            const apBoost = 40;
            pokemon.addAbilityPower(apBoost, pokemon, 0, false);
            pokemon.broadcastAbility({
                skill: Ability_1.Ability.ELECTRO_SHOT,
                targetX: target.positionX,
                targetY: target.positionY
            });
            (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
                if (cell.value != null && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        }, pokemon.simulation.weather === Weather_1.Weather.STORM ? 0 : 2000));
    }
}
exports.ElectroShotStrategy = ElectroShotStrategy;
//# sourceMappingURL=electro-shot.js.map