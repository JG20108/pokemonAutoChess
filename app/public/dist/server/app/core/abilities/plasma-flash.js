"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlasmaFlashStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class PlasmaFlashStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [5, 10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
        const flashCount = 4 + pokemon.count.ult;
        for (let i = 0; i < flashCount; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.broadcastAbility({
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY,
                    targetX: target.positionX,
                    targetY: target.positionY
                });
                target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            }, 100 * i));
        }
    }
}
exports.PlasmaFlashStrategy = PlasmaFlashStrategy;
//# sourceMappingURL=plasma-flash.js.map