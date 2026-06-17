"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperDrillStrategy = void 0;
const config_1 = require("../../config");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class HyperDrillStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [10, 30, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const boardPlayer = target.simulation.bluePlayer;
        let doubleDamage = false;
        if (boardPlayer) {
            const index = target.positionY * config_1.BOARD_WIDTH + target.positionX;
            if (boardPlayer.groundHoles[index] === 5) {
                doubleDamage = true;
            }
            else {
                boardPlayer.groundHoles[index] =
                    ((_b = boardPlayer.groundHoles[index]) !== null && _b !== void 0 ? _b : 0) + 1;
            }
            pokemon.broadcastAbility({
                targetX: target.positionX,
                targetY: target.positionY,
                delay: boardPlayer.groundHoles[index]
            });
        }
        if (target.status.protect) {
            target.status.protect = false;
            target.status.protectCooldown = 0;
        }
        target.handleSpecialDamage(damage * (doubleDamage ? 2 : 1), board, Game_1.AttackType.TRUE, pokemon, crit);
    }
}
exports.HyperDrillStrategy = HyperDrillStrategy;
//# sourceMappingURL=hyper-drill.js.map