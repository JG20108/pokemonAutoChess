"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoRetreatStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const falinks_formation_1 = require("../effects/passives/falinks-formation");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class NoRetreatStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit);
        const nbFalinks = (_b = (_a = [...pokemon.effectsSet.values()].find((e) => e instanceof falinks_formation_1.FalinksFormationEffect)) === null || _a === void 0 ? void 0 : _a.stacks) !== null && _b !== void 0 ? _b : 0;
        if (nbFalinks > 0) {
            pokemon.addDefense(nbFalinks, pokemon, 0, false);
            pokemon.addSpecialDefense(nbFalinks, pokemon, 0, false);
            const damage = (_c = [20, 20, 20, 40][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 40;
            for (let i = 0; i < nbFalinks; i++) {
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                    target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }, i * 100));
            }
        }
    }
}
exports.NoRetreatStrategy = NoRetreatStrategy;
//# sourceMappingURL=no-retreat.js.map