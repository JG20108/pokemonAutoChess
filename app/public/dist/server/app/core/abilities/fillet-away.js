"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilletAwayStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class FilletAwayStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const lostMaxHP = Math.floor(pokemon.maxHP * 0.3);
        pokemon.addMaxHP(-lostMaxHP, pokemon, 0, false);
        const atkBuff = (_a = [5, 8, 10, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
        const speedBuff = (_b = [10, 15, 20, 40][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 40;
        pokemon.addAttack(atkBuff, pokemon, 1, crit);
        pokemon.addSpeed(speedBuff, pokemon, 1, crit);
        pokemon.status.triggerProtect(1000);
        const corner = board.getTeleportationCell(pokemon.positionX, pokemon.positionY, pokemon.team);
        if (corner) {
            pokemon.moveTo(corner.x, corner.y, board, false);
        }
    }
}
exports.FilletAwayStrategy = FilletAwayStrategy;
//# sourceMappingURL=fillet-away.js.map