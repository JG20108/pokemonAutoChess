"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrumBeatingStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class DrumBeatingStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit);
        switch (pokemon.count.ult % 3) {
            case 0: {
                const speed = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
                board.forEach((x, y, entity) => {
                    if (entity && entity.team === pokemon.team) {
                        entity.addSpeed(speed, pokemon, 1, crit);
                    }
                });
                break;
            }
            case 1: {
                const shield = (_b = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 80;
                board.forEach((x, y, entity) => {
                    if (entity && entity.team === pokemon.team) {
                        entity.addShield(shield, pokemon, 1, crit);
                    }
                });
                break;
            }
            case 2:
            default: {
                const damage = (_c = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 80;
                board.forEach((x, y, entity) => {
                    if (entity && entity.team !== pokemon.team) {
                        entity.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
                break;
            }
        }
    }
}
exports.DrumBeatingStrategy = DrumBeatingStrategy;
//# sourceMappingURL=drum-beating.js.map