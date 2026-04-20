"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
class AbilityStrategy {
    constructor() {
        this.copyable = true;
        this.requiresTarget = true;
        this.canCritByDefault = false;
    }
    process(pokemon, board, target, crit, preventDefaultAnim) {
        pokemon.pp = (0, number_1.min)(0)(pokemon.pp - pokemon.maxPP);
        pokemon.count.ult += 1;
        if (!preventDefaultAnim) {
            pokemon.broadcastAbility({
                targetX: target ? target.positionX : -1,
                targetY: target ? target.positionY : -1,
                ap: Math.round(pokemon.ap * (crit ? pokemon.critPower : 1))
            });
        }
        if (pokemon.team === Game_1.Team.BLUE_TEAM) {
            pokemon.simulation.blueAbilitiesCast.push(pokemon.skill);
        }
        else if (pokemon.team === Game_1.Team.RED_TEAM) {
            pokemon.simulation.redAbilitiesCast.push(pokemon.skill);
        }
    }
}
exports.AbilityStrategy = AbilityStrategy;
//# sourceMappingURL=ability-strategy.js.map