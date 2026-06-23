"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurgingStrikesStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class SurgingStrikesStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.canCritByDefault = true;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, true);
        const damage = pokemon.atk * ((_a = [1, 1, 1, 2][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 2);
        const nbHits = 3;
        for (let i = 0; i < nbHits; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, true);
            }, i * 200));
        }
        pokemon.cooldown += 200 * nbHits;
    }
}
exports.SurgingStrikesStrategy = SurgingStrikesStrategy;
//# sourceMappingURL=surging-strikes.js.map