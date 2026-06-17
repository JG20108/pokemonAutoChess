"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SunsteelStrikeStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class SunsteelStrikeStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        const opponentTeam = pokemon.team === Game_1.Team.BLUE_TEAM ? Game_1.Team.RED_TEAM : Game_1.Team.BLUE_TEAM;
        const mostSurroundedCoordinate = pokemon.state.getMostSurroundedCoordinateAvailablePlace(opponentTeam, board);
        if (mostSurroundedCoordinate) {
            pokemon.skydiveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.broadcastAbility({
                    positionX: mostSurroundedCoordinate.x,
                    positionY: mostSurroundedCoordinate.y,
                    targetX: mostSurroundedCoordinate.x,
                    targetY: mostSurroundedCoordinate.y
                });
            }, 500));
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                const cells = board.getAdjacentCells(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y);
                pokemon.broadcastAbility({
                    skill: Ability_1.Ability.SEARING_SHOT,
                    positionX: mostSurroundedCoordinate.x,
                    positionY: mostSurroundedCoordinate.y,
                    targetX: mostSurroundedCoordinate.x,
                    targetY: mostSurroundedCoordinate.y
                });
                cells.forEach((cell) => {
                    var _a;
                    if (cell.value && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage((_a = [40, 60, 80, 150][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 150, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
            }, 1000));
        }
    }
}
exports.SunsteelStrikeStrategy = SunsteelStrikeStrategy;
//# sourceMappingURL=sunsteel-strike.js.map