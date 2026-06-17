"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UproarStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class UproarStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        board
            .getCellsInRange(pokemon.positionX, pokemon.positionY, pokemon.range, true)
            .forEach((cell) => {
            if (cell.value &&
                pokemon.team === cell.value.team &&
                !cell.value.effects.has(Effect_1.EffectEnum.IMMUNITY_SLEEP)) {
                cell.value.effects.add(Effect_1.EffectEnum.IMMUNITY_SLEEP);
                cell.value.commands.push(new simulation_command_1.DelayedCommand(() => {
                    var _a;
                    (_a = cell.value) === null || _a === void 0 ? void 0 : _a.effects.delete(Effect_1.EffectEnum.IMMUNITY_SLEEP);
                }, 3000));
            }
        });
        for (let i = 1; i <= 3; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                var _a;
                const damage = (_a = [5, 10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
                pokemon.broadcastAbility();
                board
                    .getCellsInRange(pokemon.positionX, pokemon.positionY, pokemon.range, false)
                    .forEach((cell) => {
                    if (cell.value && pokemon.team != cell.value.team) {
                        cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
            }, i * 1000));
        }
    }
}
exports.UproarStrategy = UproarStrategy;
//# sourceMappingURL=uproar.js.map