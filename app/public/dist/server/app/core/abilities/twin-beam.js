"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwinBeamStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class TwinBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [30, 60, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const farthestTarget = pokemon.state.getFarthestTarget(pokemon, board);
        if (farthestTarget) {
            (0, board_1.effectInLine)(board, pokemon, farthestTarget, (cell) => {
                if (cell.value != null && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.broadcastAbility({
                skill: Ability_1.Ability.TWIN_BEAM,
                targetX: farthestTarget.positionX,
                targetY: farthestTarget.positionY
            });
            const oppositeFarthestTarget = pokemon.state.getFarthestTarget(farthestTarget, board, pokemon);
            if (oppositeFarthestTarget) {
                (0, board_1.effectInLine)(board, pokemon, oppositeFarthestTarget, (cell) => {
                    if (cell.value != null && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
                pokemon.broadcastAbility({
                    skill: Ability_1.Ability.TWIN_BEAM,
                    targetX: oppositeFarthestTarget.positionX,
                    targetY: oppositeFarthestTarget.positionY
                });
            }
        }
    }
}
exports.TwinBeamStrategy = TwinBeamStrategy;
//# sourceMappingURL=twin-beam.js.map