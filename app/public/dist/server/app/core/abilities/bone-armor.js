"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoneArmorStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class BoneArmorStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const lowestHealthEnemy = board.cells.filter((cell) => cell && cell.team !== pokemon.team).sort((a, b) => a.hp / a.maxHP - b.hp / b.maxHP)[0];
        if (lowestHealthEnemy) {
            const coord = pokemon.simulation.getClosestFreeCellToPokemonEntity(lowestHealthEnemy, (lowestHealthEnemy.team + 1) % 2);
            if (coord) {
                pokemon.moveTo(coord.x, coord.y, board, false);
            }
            const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
            const defBuff = (_b = [4, 8, 12, 24][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 24;
            const attack = lowestHealthEnemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            if (attack.takenDamage > 0) {
                pokemon.handleHeal(attack.takenDamage, pokemon, 0, false);
            }
            if (attack.death) {
                pokemon.addDefense(defBuff, pokemon, 0, false);
                pokemon.addSpecialDefense(defBuff, pokemon, 0, false);
            }
        }
    }
}
exports.BoneArmorStrategy = BoneArmorStrategy;
//# sourceMappingURL=bone-armor.js.map