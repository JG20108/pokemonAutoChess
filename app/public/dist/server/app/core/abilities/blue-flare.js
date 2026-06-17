"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueFlareStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Synergy_1 = require("../../types/enum/Synergy");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class BlueFlareStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit);
        const fireLevel = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.synergies.get(Synergy_1.Synergy.FIRE);
        const damage = ((_b = [12, 25, 50, 100][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 50) +
            (fireLevel !== null && fireLevel !== void 0 ? fireLevel : 0) * ((_c = [10, 10, 10, 20][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 10);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            const cells = board.getAdjacentCells(target.positionX, target.positionY, true);
            cells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
            });
        }, 250));
    }
}
exports.BlueFlareStrategy = BlueFlareStrategy;
//# sourceMappingURL=blue-flare.js.map