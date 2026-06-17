"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighJumpKickStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const number_1 = require("../../utils/number");
const ability_strategy_1 = require("./ability-strategy");
class HighJumpKickStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        const ppStolen = (0, number_1.max)(40)(target.pp);
        if (target.items.has(Item_1.Item.TWIST_BAND) === false) {
            pokemon.addPP(ppStolen, pokemon, 0, false);
            target.addPP(-ppStolen, pokemon, 0, false);
            target.count.manaBurnCount++;
        }
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
    }
}
exports.HighJumpKickStrategy = HighJumpKickStrategy;
//# sourceMappingURL=high-jump-kick.js.map