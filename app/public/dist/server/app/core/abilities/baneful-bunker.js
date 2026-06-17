"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanefulBunkerStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const distance_1 = require("../../utils/distance");
const effect_1 = require("../effects/effect");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class BanefulBunkerStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        const duration = 2000;
        pokemon.status.triggerProtect(duration);
        const bunkerEffect = new effect_1.OnAttackReceivedEffect(({ attacker }) => {
            var _a;
            if ((0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, attacker.positionX, attacker.positionY) === 1) {
                const damage = (_a = [10, 20, 30, 50][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 50;
                attacker.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, false);
                pokemon.status.triggerPoison(3000, attacker, pokemon);
            }
        });
        pokemon.effectsSet.add(bunkerEffect);
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => pokemon.effectsSet.delete(bunkerEffect), duration));
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.setTarget(pokemon);
                pokemon.broadcastAbility({
                    skill: "TAUNT_HIT",
                    targetX: cell.value.positionX,
                    targetY: cell.value.positionY
                });
            }
        });
    }
}
exports.BanefulBunkerStrategy = BanefulBunkerStrategy;
//# sourceMappingURL=baneful-bunker.js.map