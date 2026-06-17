"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MindBlownStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class MindBlownStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const FIREWORK_COLORS = ["pink", "blue", "yellow", "white"];
        const nbFireworks = Math.floor((_a = [3, 4, 5, 8][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 8 * (1 + pokemon.ap / 100));
        for (let i = 0; i < nbFireworks; i++) {
            const color = (0, random_1.pickRandomIn)(FIREWORK_COLORS);
            const randomTarget = (_b = (0, random_1.pickRandomIn)(board.cells.filter((e) => e && e.team !== pokemon.team))) !== null && _b !== void 0 ? _b : target;
            const x = i === 0 ? target.positionX : randomTarget === null || randomTarget === void 0 ? void 0 : randomTarget.positionX;
            const y = i === 0 ? target.positionY : randomTarget === null || randomTarget === void 0 ? void 0 : randomTarget.positionY;
            pokemon.simulation.room.clock.setTimeout(() => {
                if (!pokemon.simulation ||
                    !pokemon.simulation.room ||
                    pokemon.simulation.finished) {
                    return;
                }
                const cellsHit = board.getCellsInRadius(x, y, 2, true);
                cellsHit.forEach((cell) => {
                    switch (color) {
                        case "pink":
                            if (cell.value && cell.value.team !== pokemon.team) {
                                cell.value.handleSpecialDamage(20, board, Game_1.AttackType.PHYSICAL, pokemon, crit, false);
                                cell.value.status.triggerBurn(5000, cell.value, pokemon);
                            }
                            break;
                        case "blue":
                            if (cell.value && cell.value.team !== pokemon.team) {
                                cell.value.handleSpecialDamage(20, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
                                cell.value.status.triggerFatigue(5000, cell.value);
                            }
                            break;
                        case "yellow":
                            if (cell.value && cell.value.team !== pokemon.team) {
                                cell.value.handleSpecialDamage(20, board, Game_1.AttackType.TRUE, pokemon, crit, false);
                            }
                            break;
                        case "white":
                            if (cell.value && cell.value.team === pokemon.team) {
                                cell.value.addShield(20, pokemon, 0, crit);
                                cell.value.status.clearNegativeStatus(cell.value, pokemon);
                            }
                            break;
                    }
                });
                pokemon.broadcastAbility({
                    targetX: x,
                    targetY: y,
                    skill: "MIND_BLOWN_FIREWORK",
                    delay: FIREWORK_COLORS.indexOf(color)
                });
            }, 1000 + 250 * i);
        }
        pokemon.handleSpecialDamage(pokemon.maxHP / 2, board, Game_1.AttackType.TRUE, pokemon, false, false);
    }
}
exports.MindBlownStrategy = MindBlownStrategy;
//# sourceMappingURL=mind-blown.js.map