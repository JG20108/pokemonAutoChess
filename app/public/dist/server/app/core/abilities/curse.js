"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurseStrategy = void 0;
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class CurseStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const enemies = board.cells.filter((p) => p && p.team !== pokemon.team);
        const highestHp = Math.max(...enemies.map((p) => p.maxHP));
        const enemiesWithHighestHP = enemies.filter((p) => p.maxHP === highestHp);
        const cursedEnemy = (0, random_1.pickRandomIn)(enemiesWithHighestHP);
        if (cursedEnemy) {
            const factor = 0.2;
            const curseDelay = (0, number_1.min)(0)(((_a = [8000, 5000, 3000, 1000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 1000) *
                (1 - (factor * pokemon.ap) / 100) *
                (crit ? 1 - (pokemon.critPower - 1) * factor : 1));
            cursedEnemy.status.triggerCurse(curseDelay, cursedEnemy);
        }
    }
}
exports.CurseStrategy = CurseStrategy;
//# sourceMappingURL=curse.js.map