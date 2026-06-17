"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarbBarrageStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BarbBarrageStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [15, 30, 45, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const opponentTeam = pokemon.team === Game_1.Team.BLUE_TEAM ? Game_1.Team.RED_TEAM : Game_1.Team.BLUE_TEAM;
        const mostSurroundedCoordinate = pokemon.state.getMostSurroundedCoordinateAvailablePlace(opponentTeam, board);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board, false);
            board
                .getAdjacentCells(target.positionX, target.positionY)
                .map((v) => v.value)
                .filter((v) => (v === null || v === void 0 ? void 0 : v.team) === target.team)
                .concat(target)
                .forEach((v) => {
                if (v) {
                    v.status.triggerPoison(3000, v, pokemon);
                    v.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    pokemon.broadcastAbility({
                        targetX: v.positionX,
                        targetY: v.positionY,
                        orientation: v.orientation
                    });
                }
            });
        }
        else {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.BarbBarrageStrategy = BarbBarrageStrategy;
//# sourceMappingURL=barb-barrage.js.map