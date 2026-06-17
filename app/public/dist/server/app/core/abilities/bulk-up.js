"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkUpStrategy = void 0;
const ability_strategy_1 = require("./ability-strategy");
class BulkUpStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const boostPercent = (_a = [0.5, 0.5, 0.5, 1][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 1;
        const atkBoost = Math.ceil(boostPercent * pokemon.baseAtk);
        const defBoost = Math.ceil(boostPercent * pokemon.baseDef);
        pokemon.addAttack(atkBoost, pokemon, 1, crit);
        pokemon.addDefense(defBoost, pokemon, 1, crit);
        pokemon.resetCooldown(300);
    }
}
exports.BulkUpStrategy = BulkUpStrategy;
//# sourceMappingURL=bulk-up.js.map