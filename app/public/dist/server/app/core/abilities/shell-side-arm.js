"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellSideArmStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class ShellSideArmStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const poisonDuration = ((_a = [2000, 3000, 4000, 6000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6000) *
            (1 + pokemon.ap / 100) *
            (crit ? pokemon.critPower : 1);
        const apBoost = (_b = [10, 20, 30, 50][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 50;
        const visited = new Set();
        let currentTarget = target;
        let lastTarget = pokemon;
        for (let i = 0; i < 4; i++) {
            if (currentTarget) {
                visited.add(currentTarget.id);
                pokemon.broadcastAbility({
                    positionX: lastTarget.positionX,
                    positionY: lastTarget.positionY,
                    targetX: currentTarget.positionX,
                    targetY: currentTarget.positionY,
                    delay: 300 * i,
                    orientation: lastTarget.orientation
                });
                lastTarget = currentTarget;
                if (currentTarget.team === pokemon.team) {
                    currentTarget.addAbilityPower(apBoost, pokemon, 0, false);
                }
                else {
                    currentTarget.status.triggerPoison(poisonDuration, currentTarget, pokemon);
                }
            }
            currentTarget = board.cells
                .filter((c) => c != null && !visited.has(c.id))
                .sort((a, b) => b.hp - a.hp)[0];
        }
    }
}
exports.ShellSideArmStrategy = ShellSideArmStrategy;
//# sourceMappingURL=shell-side-arm.js.map