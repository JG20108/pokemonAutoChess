"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopsyTurvyStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class TopsyTurvyStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [40, 80, 160, 320][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 320;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            if (target.atk !== target.baseAtk) {
                const d = target.atk - target.baseAtk;
                target.addAttack(-2 * d, pokemon, 0, false);
            }
            if (target.ap !== 0) {
                target.addAbilityPower(-2 * target.ap, pokemon, 0, false);
            }
            if (target.def !== target.baseDef) {
                const d = target.def - target.baseDef;
                target.addDefense(-2 * d, pokemon, 0, false);
            }
            if (target.speDef !== target.baseSpeDef) {
                const d = target.speDef - target.baseSpeDef;
                target.addSpecialDefense(-2 * d, pokemon, 0, false);
            }
        }, 500));
    }
}
exports.TopsyTurvyStrategy = TopsyTurvyStrategy;
//# sourceMappingURL=topsy-turvy.js.map