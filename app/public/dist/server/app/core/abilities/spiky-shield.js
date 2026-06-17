"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpikyShieldStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const orientation_1 = require("../../utils/orientation");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class SpikyShieldStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        const shouldTriggerSpikeAnimation = pokemon.status.spikeArmor;
        super.process(pokemon, board, target, crit, !shouldTriggerSpikeAnimation);
        const defMultiplier = (_a = [0.6, 0.8, 1, 2][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 2;
        const defDamage = Math.round(defMultiplier * pokemon.def);
        target.handleSpecialDamage(defDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (pokemon.status.spikeArmor) {
            const damage = (_b = [30, 30, 30, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 60;
            orientation_1.OrientationArray.forEach((orientation) => {
                (0, board_1.effectInOrientation)(board, pokemon, orientation, (cell) => {
                    if (cell.value != null && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
            });
        }
        const duration = (_c = [3000, 5000, 10000, 10000][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 10000;
        pokemon.status.triggerSpikeArmor(duration);
    }
}
exports.SpikyShieldStrategy = SpikyShieldStrategy;
//# sourceMappingURL=spiky-shield.js.map