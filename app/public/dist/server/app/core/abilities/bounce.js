"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BounceStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class BounceStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const nbBounces = (_a = [1, 2, 3, 4][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 4;
        for (let i = 0; i < nbBounces; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                const destination = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
                if (destination && pokemon.maxHP > 0) {
                    pokemon.broadcastAbility({});
                    pokemon.moveTo(destination.x, destination.y, board, false);
                    const adjacentCells = board.getAdjacentCells(destination.x, destination.y);
                    adjacentCells.forEach((cell) => {
                        var _a;
                        if (cell.value && cell.value.team !== pokemon.team) {
                            const damage = (_a = [15, 20, 25, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
                            cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        }
                    });
                }
            }, i * 500));
        }
    }
}
exports.BounceStrategy = BounceStrategy;
//# sourceMappingURL=bounce.js.map