"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcidSprayStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class AcidSprayStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        let tg = target;
        const affectedTargetsIds = new Array();
        const damage = (_a = [11, 22, 33, 66][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 66;
        for (let i = 0; i < 5; i++) {
            if (tg) {
                pokemon.broadcastAbility({
                    targetX: tg.positionX,
                    targetY: tg.positionY
                });
                tg.addSpecialDefense(-5, pokemon, 0, false);
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                affectedTargetsIds.push(tg.id);
                const cells = board.getAdjacentCells(tg.positionX, tg.positionY);
                tg = cells
                    .filter((v) => v.value &&
                    v.value.team !== pokemon.team &&
                    !affectedTargetsIds.includes(v.value.id))
                    .map((v) => v.value)[0];
            }
            else {
                break;
            }
        }
    }
}
exports.AcidSprayStrategy = AcidSprayStrategy;
//# sourceMappingURL=acid-spray.js.map