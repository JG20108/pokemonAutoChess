"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrangeSteamStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class StrangeSteamStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        board
            .getCellsInRadius(pokemon.positionX, pokemon.positionY, pokemon.count.ult, true)
            .forEach((cell) => {
            var _a;
            board.addBoardEffect(cell.x, cell.y, Effect_1.EffectEnum.STRANGE_STEAM_BOARD_EFFECT, pokemon.simulation);
            if (cell.value && cell.value.team !== pokemon.team) {
                if ((0, random_1.chance)((_a = [0.3, 0.3, 1.0, 1.0][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 1.0, pokemon)) {
                    cell.value.status.triggerConfusion(3000, cell.value, pokemon, true);
                }
            }
            else if (cell.value && cell.value.team === pokemon.team) {
                cell.value.status.addFairyField(cell.value);
            }
        });
    }
}
exports.StrangeSteamStrategy = StrangeSteamStrategy;
//# sourceMappingURL=strange-steam.js.map