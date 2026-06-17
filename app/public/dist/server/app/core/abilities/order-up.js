"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpStrategy = void 0;
const config_1 = require("../../config");
const Game_1 = require("../../types/enum/Game");
const Pokemon_1 = require("../../types/enum/Pokemon");
const schemas_1 = require("../../utils/schemas");
const ability_strategy_1 = require("./ability-strategy");
class OrderUpStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [30, 60, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (pokemon.player) {
            const tatsugiriOnBoard = (0, schemas_1.schemaValues)(pokemon.player.board).find((e) => e && (0, config_1.getBaseAltForm)(e.name) === Pokemon_1.Pkm.TATSUGIRI_CURLY);
            if (!tatsugiriOnBoard) {
                const form = [
                    Pokemon_1.Pkm.TATSUGIRI_CURLY,
                    Pokemon_1.Pkm.TATSUGIRI_DROOPY,
                    Pokemon_1.Pkm.TATSUGIRI_STRETCHY
                ][pokemon.simulation.stageLevel % 3];
                pokemon.simulation.room.spawnOnBench(pokemon.player, form, "fishing");
            }
            else if (tatsugiriOnBoard.name === Pokemon_1.Pkm.TATSUGIRI_CURLY) {
                pokemon.addAttack(8, pokemon, 1, crit);
            }
            else if (tatsugiriOnBoard.name === Pokemon_1.Pkm.TATSUGIRI_DROOPY) {
                pokemon.addDefense(8, pokemon, 1, crit);
            }
            else if (tatsugiriOnBoard.name === Pokemon_1.Pkm.TATSUGIRI_STRETCHY) {
                pokemon.addSpeed(25, pokemon, 1, crit);
            }
        }
    }
}
exports.OrderUpStrategy = OrderUpStrategy;
//# sourceMappingURL=order-up.js.map