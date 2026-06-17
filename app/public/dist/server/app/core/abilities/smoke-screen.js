"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmokeScreenStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SmokeScreenStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const opponentTeam = pokemon.team === Game_1.Team.BLUE_TEAM ? Game_1.Team.RED_TEAM : Game_1.Team.BLUE_TEAM;
        const mostSurroundedCoordinate = pokemon.state.getMostSurroundedCoordinateAvailablePlace(opponentTeam, board);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board, false);
            const backRow = mostSurroundedCoordinate.y <= 2 ? 0 : 5;
            const midRow = mostSurroundedCoordinate.y <= 2 ? 1 : 4;
            const frontRow = mostSurroundedCoordinate.y <= 2 ? 2 : 3;
            let chosenRowForSmoke = frontRow;
            const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    pokemon.broadcastAbility({
                        targetX: cell.x,
                        targetY: cell.y
                    });
                    if (cell.y === backRow)
                        chosenRowForSmoke = backRow;
                    if (cell.y === midRow && chosenRowForSmoke !== backRow)
                        chosenRowForSmoke = midRow;
                }
            });
            const smokeCells = [
                [pokemon.positionX - 1, chosenRowForSmoke],
                [pokemon.positionX, chosenRowForSmoke],
                [pokemon.positionX + 1, chosenRowForSmoke]
            ].filter(([x, y]) => y >= 0 &&
                y < board.rows &&
                x >= 0 &&
                x < board.columns &&
                !(x === pokemon.positionX && y === pokemon.positionY));
            smokeCells.forEach(([x, y]) => {
                board.addBoardEffect(x, y, Effect_1.EffectEnum.SMOKE, pokemon.simulation);
            });
        }
    }
}
exports.SmokeScreenStrategy = SmokeScreenStrategy;
//# sourceMappingURL=smoke-screen.js.map