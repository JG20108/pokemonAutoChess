"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EerieSpellStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class EerieSpellStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const healAmount = (_b = [15, 30, 45, 90][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 90;
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
                    delay: 300 * i
                });
                lastTarget = currentTarget;
                if (currentTarget.team === pokemon.team) {
                    currentTarget.handleHeal(healAmount, pokemon, 1, crit);
                }
                else {
                    currentTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            }
            currentTarget = board.cells
                .filter((c) => c != null && !visited.has(c.id))
                .sort((a, b) => a.hp - b.hp)[0];
        }
    }
}
exports.EerieSpellStrategy = EerieSpellStrategy;
//# sourceMappingURL=eerie-spell.js.map