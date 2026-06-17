"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpandingForceStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const distance_1 = require("../../utils/distance");
const ability_strategy_1 = require("./ability-strategy");
class ExpandingForceStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        if (!pokemon.status.psychicField) {
            pokemon.status.addPsychicField(pokemon);
        }
        else {
            const nearbyAllies = board.cells
                .filter((ally) => !!ally && ally.team === pokemon.team && !ally.status.psychicField)
                .sort((a, b) => (0, distance_1.distanceM)(a.positionX, a.positionY, pokemon.positionX, pokemon.positionY) -
                (0, distance_1.distanceM)(b.positionX, b.positionY, pokemon.positionX, pokemon.positionY));
            if (nearbyAllies.length > 0) {
                const chosen = nearbyAllies[0];
                chosen.status.addPsychicField(chosen);
            }
        }
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        board.cells
            .filter((ally) => !!ally && ally.team === pokemon.team && ally.status.psychicField)
            .forEach((ally) => {
            ally.broadcastAbility({ skill: Ability_1.Ability.EXPANDING_FORCE });
            board
                .getAdjacentCells(ally.positionX, ally.positionY)
                .forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        });
    }
}
exports.ExpandingForceStrategy = ExpandingForceStrategy;
//# sourceMappingURL=expanding-force.js.map