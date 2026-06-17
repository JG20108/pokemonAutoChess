"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowMeStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class FollowMeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const cellToJump = board.getSafePlaceAwayFrom(pokemon.positionX, pokemon.positionY, pokemon.team);
        if (cellToJump) {
            const enemiesTargetingPokemon = board.cells.filter((entity) => entity != null &&
                entity.targetEntityId === pokemon.id &&
                entity.team !== pokemon.team);
            const charmDuration = (_a = [1000, 2000, 3000, 5000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5000;
            enemiesTargetingPokemon.forEach((enemy) => {
                enemy.status.triggerCharm(charmDuration, enemy, pokemon, false);
            });
            pokemon.moveTo(cellToJump.x, cellToJump.y, board, false);
            const shield = (_b = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
            pokemon.addShield(shield, pokemon, 1, crit);
        }
    }
}
exports.FollowMeStrategy = FollowMeStrategy;
//# sourceMappingURL=follow-me.js.map