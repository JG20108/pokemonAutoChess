"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThunderStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class ThunderStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [25, 50, 100, 200][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 200;
        const enemies = board.cells.filter((cell) => cell && cell.team !== pokemon.team);
        const targets = (0, random_1.pickNRandomIn)(enemies, 3);
        targets.forEach((tg, index) => {
            tg.commands.push(new simulation_command_1.DelayedCommand(() => {
                if ((0, random_1.chance)(0.3, pokemon)) {
                    tg.status.triggerParalysis(3000, tg, pokemon);
                }
                tg.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                tg.broadcastAbility({
                    skill: Ability_1.Ability.THUNDER_SHOCK,
                    targetX: tg.positionX,
                    targetY: tg.positionY
                });
            }, index * 500));
        });
    }
}
exports.ThunderStrategy = ThunderStrategy;
//# sourceMappingURL=thunder.js.map