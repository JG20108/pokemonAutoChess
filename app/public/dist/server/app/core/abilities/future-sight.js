"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutureSightStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class FutureSightStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [20, 30, 50, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const count = (_b = [3, 4, 5, 6][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 6;
        const enemies = board.cells.filter((p) => p !== undefined && p.team !== pokemon.team);
        const targets = (0, random_1.pickNRandomIn)(enemies, count);
        for (const tg of targets) {
            pokemon.broadcastAbility({
                skill: "FUTURE_SIGHT",
                targetX: tg.positionX,
                targetY: tg.positionY
            });
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            for (const tg of targets) {
                pokemon.broadcastAbility({
                    targetX: tg.positionX,
                    targetY: tg.positionY,
                    skill: "FUTURE_SIGHT_HIT"
                });
                if (tg.hp > 0) {
                    tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                board.getAdjacentCells(tg.positionX, tg.positionY).forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(Math.round(damage * 0.2), board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
            }
        }, 2000));
    }
}
exports.FutureSightStrategy = FutureSightStrategy;
//# sourceMappingURL=future-sight.js.map