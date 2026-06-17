"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolarBeamStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Weather_1 = require("../../types/enum/Weather");
const board_1 = require("../board");
const ability_strategy_1 = require("./ability-strategy");
class SolarBeamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        let damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        if (pokemon.simulation.weather === Weather_1.Weather.ZENITH || pokemon.status.light) {
            damage = damage * 1.3;
            pokemon.addPP(20, pokemon, 0, false);
        }
        (0, board_1.effectInLine)(board, pokemon, target, (cell) => {
            if (cell.value != null && cell.value.team !== pokemon.team) {
                cell.value.status.triggerBurn(3000, cell.value, pokemon);
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }
        });
    }
}
exports.SolarBeamStrategy = SolarBeamStrategy;
//# sourceMappingURL=solar-beam.js.map