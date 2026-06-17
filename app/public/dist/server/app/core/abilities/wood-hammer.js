"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WoodHammerStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class WoodHammerStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const atkMult = (_a = [4, 4, 8, 16][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 16;
        const damage = atkMult * pokemon.atk;
        const recoil = pokemon.atk;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            if (pokemon.items.has(Item_1.Item.PROTECTIVE_PADS) === false) {
                pokemon.handleSpecialDamage(recoil, board, Game_1.AttackType.PHYSICAL, pokemon, false, false);
            }
        }, 500));
    }
}
exports.WoodHammerStrategy = WoodHammerStrategy;
//# sourceMappingURL=wood-hammer.js.map