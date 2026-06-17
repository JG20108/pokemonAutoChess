"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EggBombStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const eggs_1 = require("../eggs");
const hatch_time_1 = require("../evolution-logic/hatch-time");
const ability_strategy_1 = require("./ability-strategy");
class EggBombStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        board
            .getAdjacentCells(target.positionX, target.positionY, true)
            .map((v) => v.value)
            .filter((v) => (v === null || v === void 0 ? void 0 : v.team) === target.team)
            .forEach((v) => {
            if (v) {
                const kill = v.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if (kill.death &&
                    !pokemon.isGhostOpponent &&
                    pokemon.player &&
                    (0, random_1.chance)(0.25, pokemon)) {
                    const egg = (0, eggs_1.giveRandomEgg)(pokemon.player, false);
                    if (egg) {
                        egg.stacks = (0, hatch_time_1.getHatchTime)(egg, pokemon.player) - 1;
                    }
                }
                v.status.triggerArmorReduction(4000, v);
            }
        });
    }
}
exports.EggBombStrategy = EggBombStrategy;
//# sourceMappingURL=egg-bomb.js.map