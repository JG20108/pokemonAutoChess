"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiteStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const ability_strategy_1 = require("./ability-strategy");
class SpiteStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const ppDrain = (_a = [20, 40, 60, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        pokemon.broadcastAbility({
            targetX: target.positionX,
            targetY: target.positionY,
            skill: Ability_1.Ability.PSYCHIC_FANGS
        });
        target.addPP(-ppDrain, pokemon, 1, crit);
        const adjacentAllies = board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY)
            .filter((cell) => cell.value && cell.value.team === pokemon.team)
            .map((cell) => cell.value);
        if (adjacentAllies.length > 0) {
            for (const ally of adjacentAllies) {
                if (ally) {
                    pokemon.broadcastAbility({
                        targetX: ally.positionX,
                        targetY: ally.positionY
                    });
                    ally.addPP(ppDrain / adjacentAllies.length, pokemon, 1, crit);
                }
            }
        }
    }
}
exports.SpiteStrategy = SpiteStrategy;
//# sourceMappingURL=spite.js.map