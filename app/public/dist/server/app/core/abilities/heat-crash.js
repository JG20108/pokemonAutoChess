"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeatCrashStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class HeatCrashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let damage = (_a = [40, 60, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const attackDifference = pokemon.atk - target.atk;
        damage += attackDifference * 2;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        pokemon.orientation = board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, target);
        const knockbackCell = board.getKnockBackPlace(target.positionX, target.positionY, pokemon.orientation);
        if (knockbackCell) {
            target.moveTo(knockbackCell.x, knockbackCell.y, board, true);
            target.cooldown = 500;
        }
    }
}
exports.HeatCrashStrategy = HeatCrashStrategy;
//# sourceMappingURL=heat-crash.js.map