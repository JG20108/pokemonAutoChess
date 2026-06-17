"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NightmareStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class NightmareStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const duration = (_a = [2000, 4000, 6000, 10000][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10000;
        const damage = (_b = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 200;
        board.forEach((x, y, enemy) => {
            if (enemy && pokemon.team != enemy.team) {
                if (enemy.status.curseFate ||
                    enemy.status.curseTorment ||
                    enemy.status.curseVulnerability ||
                    enemy.status.curseWeakness) {
                    enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                }
                enemy.status.triggerFatigue(duration, enemy);
            }
        });
    }
}
exports.NightmareStrategy = NightmareStrategy;
//# sourceMappingURL=nightmare.js.map