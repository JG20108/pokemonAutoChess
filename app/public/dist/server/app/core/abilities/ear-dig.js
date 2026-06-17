"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarDigStrategy = void 0;
const config_1 = require("../../config");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class EarDigStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit, true);
        const boardPlayer = target.simulation.bluePlayer;
        const index = target.positionY * config_1.BOARD_WIDTH + target.positionX;
        let holeLevel = (_a = boardPlayer === null || boardPlayer === void 0 ? void 0 : boardPlayer.groundHoles[index]) !== null && _a !== void 0 ? _a : 0;
        const damage = ((_b = [30, 60, 120, 240][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 240) +
            holeLevel * ((_c = [5, 10, 20, 40][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 40);
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (boardPlayer && holeLevel === 0) {
            boardPlayer.groundHoles[index] = 1;
            holeLevel = 1;
        }
        pokemon.broadcastAbility({
            targetX: target.positionX,
            targetY: target.positionY,
            delay: holeLevel
        });
    }
}
exports.EarDigStrategy = EarDigStrategy;
//# sourceMappingURL=ear-dig.js.map