"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperBeamStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class HyperBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        pokemon.cooldown = 1000;
        pokemon.broadcastAbility({
            skill: "HYPER_BEAM_CHARGE",
            positionX: pokemon.positionX,
            positionY: pokemon.positionY
        });
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            var _a;
            const damage = (_a = [50, 100, 150, 300][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 300;
            pokemon.broadcastAbility({
                skill: Ability_1.Ability.HYPER_BEAM,
                targetX: target.positionX,
                targetY: target.positionY
            });
            (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
                if (cell.value != null && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.status.triggerFatigue(5000, pokemon);
        }, 1000));
    }
}
exports.HyperBeamStrategy = HyperBeamStrategy;
//# sourceMappingURL=hyper-beam.js.map