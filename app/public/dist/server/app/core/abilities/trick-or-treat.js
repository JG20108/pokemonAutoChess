"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrickOrTreatStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Pokemon_1 = require("../../types/enum/Pokemon");
const schemas_1 = require("../../utils/schemas");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class TrickOrTreatStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        if (target.items.size > 0) {
            const item = (0, schemas_1.schemaValues)(target.items)[0];
            target.removeItem(item);
            pokemon.addItem(item);
        }
        else {
            const originalAbility = target.skill;
            const originalAttack = target.atk;
            const originalDefense = target.def;
            const originalSpecialDefense = target.speDef;
            const originalIndex = target.index;
            const baseDuration = (_a = [3000, 3000, 10000, 30000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30000;
            const duration = Math.round(baseDuration * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
            target.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.MAGIKARP];
            target.skill = Ability_1.Ability.SPLASH;
            target.atk = 1;
            target.def = 1;
            target.speDef = 1;
            target.commands.push(new simulation_command_1.DelayedCommand(() => {
                target.skill = originalAbility;
                target.atk = originalAttack;
                target.def = originalDefense;
                target.speDef = originalSpecialDefense;
                target.index = originalIndex;
            }, duration));
        }
    }
}
exports.TrickOrTreatStrategy = TrickOrTreatStrategy;
//# sourceMappingURL=trick-or-treat.js.map