"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeBeamStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class ChargeBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, false);
        const chain = [target];
        const NB_MAX_TARGETS = 3;
        for (let n = 1, x = target.positionX, y = target.positionY; n < NB_MAX_TARGETS; n++) {
            const nextCell = board
                .getAdjacentCells(x, y)
                .find((cell) => cell.value &&
                cell.value.team === target.team &&
                !chain.includes(cell.value));
            if (nextCell) {
                chain.push(nextCell.value);
                x = nextCell.x;
                y = nextCell.y;
            }
        }
        for (let i = 0; i < chain.length; i++) {
            const damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
            chain[i].handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            const previous = i === 0 ? pokemon : chain[i - 1];
            pokemon.broadcastAbility({
                skill: "LINK_CABLE_link",
                positionX: previous.positionX,
                positionY: previous.positionY,
                targetX: chain[i].positionX,
                targetY: chain[i].positionY
            });
        }
    }
}
exports.ChargeBeamStrategy = ChargeBeamStrategy;
//# sourceMappingURL=charge-beam.js.map