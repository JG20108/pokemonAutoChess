"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrillPeckStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const orientation_1 = require("../../utils/orientation");
const ability_strategy_1 = require("./ability-strategy");
class DrillPeckStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        pokemon.orientation = board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, target);
        const [dx, dy] = orientation_1.OrientationVector[pokemon.orientation];
        const nextX = target.positionX + dx;
        const nextY = target.positionY + dy;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.moveTo(target.positionX, target.positionY, board, false);
        if (board.isOnBoard(nextX, nextY)) {
            const nextEntity = board.getEntityOnCell(nextX, nextY);
            if ((nextEntity === null || nextEntity === void 0 ? void 0 : nextEntity.team) === target.team) {
                pokemon.targetX = nextX;
                pokemon.targetY = nextY;
                pokemon.targetEntityId = nextEntity.id;
                pokemon.pp = pokemon.maxPP;
            }
        }
    }
}
exports.DrillPeckStrategy = DrillPeckStrategy;
//# sourceMappingURL=drill-peck.js.map