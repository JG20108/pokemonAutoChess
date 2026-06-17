"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoneAxeStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class StoneAxeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const cells = board.getAdjacentCells(target.positionX, target.positionY);
        const damage = (_a = [30, 40, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.TRUE, pokemon, crit);
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.EffectEnum.STEALTH_ROCKS, pokemon.simulation);
            pokemon.broadcastAbility({
                skill: Ability_1.Ability.STEALTH_ROCKS,
                positionX: cell.x,
                positionY: cell.y
            });
        });
    }
}
exports.StoneAxeStrategy = StoneAxeStrategy;
//# sourceMappingURL=stone-axe.js.map