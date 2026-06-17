"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WiseYawnStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class WiseYawnStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const lowestHealthAlly = board.cells.filter((cell) => cell && cell.team === pokemon.team).sort((a, b) => a.hp - b.hp)[0];
        if (lowestHealthAlly) {
            const opponentsTargetingLowestHealthAlly = board.cells.filter((entity) => entity != null &&
                entity.team !== lowestHealthAlly.team &&
                entity.targetEntityId === lowestHealthAlly.id);
            opponentsTargetingLowestHealthAlly.forEach((opponent) => {
                opponent.status.triggerFatigue(3000, pokemon);
                opponent.addAbilityPower(-20, pokemon, 0, false);
            });
            const shield = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
            lowestHealthAlly.addShield(shield, pokemon, 1, crit);
            pokemon.broadcastAbility({
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: lowestHealthAlly.positionX,
                targetY: lowestHealthAlly.positionY
            });
        }
    }
}
exports.WiseYawnStrategy = WiseYawnStrategy;
//# sourceMappingURL=wise-yawn.js.map