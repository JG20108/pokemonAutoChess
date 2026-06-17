"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UltraThrustersStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class UltraThrustersStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBurn(2000, cell.value, pokemon);
            }
        });
        const corner = board.getTeleportationCell(pokemon.positionX, pokemon.positionY, pokemon.team);
        pokemon.broadcastAbility({
            skill: Ability_1.Ability.ULTRA_THRUSTERS,
            positionX: pokemon.positionX,
            positionY: pokemon.positionY,
            targetX: (_b = corner === null || corner === void 0 ? void 0 : corner.x) !== null && _b !== void 0 ? _b : pokemon.targetX,
            targetY: (_c = corner === null || corner === void 0 ? void 0 : corner.y) !== null && _c !== void 0 ? _c : pokemon.targetY,
            orientation: pokemon.orientation
        });
        if (corner) {
            pokemon.orientation = board.orientation(corner.x, corner.y, pokemon.positionX, pokemon.positionY, pokemon, target);
            pokemon.moveTo(corner.x, corner.y, board, false);
            pokemon.resetCooldown(600);
        }
    }
}
exports.UltraThrustersStrategy = UltraThrustersStrategy;
//# sourceMappingURL=ultra-thrusters.js.map