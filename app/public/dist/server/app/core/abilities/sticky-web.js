"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StickyWebStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class StickyWebStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 35, 70, 140][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 140;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        const cells = board.getCellsInFront(pokemon, target, 1);
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.EffectEnum.STICKY_WEB, pokemon.simulation);
            pokemon.broadcastAbility({ positionX: cell.x, positionY: cell.y });
        });
    }
}
exports.StickyWebStrategy = StickyWebStrategy;
//# sourceMappingURL=sticky-web.js.map