"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwallowStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class SwallowStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        if (pokemon.hp < pokemon.maxHP * 0.25 && pokemon.count.ult > 0) {
            const heal = (((_a = [0, 20, 40, 60][pokemon.count.ult]) !== null && _a !== void 0 ? _a : 60) * pokemon.maxHP) / 100;
            pokemon.handleHeal(heal, pokemon, 1, crit);
            pokemon.count.ult = 0;
            pokemon.broadcastAbility({ skill: Ability_1.Ability.RECOVER });
        }
        else if (pokemon.count.ult >= 3) {
            const damage = (_b = [40, 80, 150, 300][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 300;
            const cells = board.getCellsInFront(pokemon, target, 1);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
            pokemon.broadcastAbility({ skill: Ability_1.Ability.SWALLOW });
            pokemon.count.ult = 0;
        }
        else {
            pokemon.addDefense(3, pokemon, 0, false);
            pokemon.addSpecialDefense(3, pokemon, 0, false);
        }
    }
}
exports.SwallowStrategy = SwallowStrategy;
//# sourceMappingURL=swallow.js.map