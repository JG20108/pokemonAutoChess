"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfestationStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Synergy_1 = require("../../types/enum/Synergy");
const board_1 = require("../../utils/board");
const distance_1 = require("../../utils/distance");
const schemas_1 = require("../../utils/schemas");
const simulation_command_1 = require("../simulation-command");
const unit_score_1 = require("../unit-score");
const ability_strategy_1 = require("./ability-strategy");
class InfestationStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const numberOfBugAllies = board.cells.filter((entity) => entity && entity.team === pokemon.team && entity.types.has(Synergy_1.Synergy.BUG)).length;
        const damage = numberOfBugAllies * ((_a = [10, 10, 10, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (pokemon.player && pokemon.count.ult === 1) {
            const bugsOnBench = (0, schemas_1.schemaValues)((_b = pokemon.player) === null || _b === void 0 ? void 0 : _b.board).filter((p) => p && p.types.has(Synergy_1.Synergy.BUG) && (0, board_1.isOnBench)(p));
            const mostPowerfulBug = (0, unit_score_1.getStrongestUnit)(bugsOnBench);
            if (mostPowerfulBug) {
                pokemon.broadcastAbility({
                    positionX: mostPowerfulBug.positionX,
                    positionY: pokemon.team === Game_1.Team.RED_TEAM ? 8 : 0,
                    targetX: pokemon.positionX,
                    targetY: pokemon.positionY
                });
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                    const coord = pokemon.state.getNearestAvailablePlaceCoordinates(pokemon, board);
                    if (coord) {
                        pokemon.simulation.addPokemon(mostPowerfulBug, coord.x, coord.y, pokemon.team, true);
                    }
                }, (0, distance_1.distanceM)(pokemon.positionX, pokemon.positionY, mostPowerfulBug.positionX, mostPowerfulBug.positionY) *
                    150 -
                    30));
            }
        }
    }
}
exports.InfestationStrategy = InfestationStrategy;
//# sourceMappingURL=infestation.js.map