"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoonblastStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class MoonblastStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [10, 14, 18, 26][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 26;
        let currentTarget = target;
        let moonsRemaining = 6;
        let moonIndex = 0;
        function sendMoon() {
            if (!currentTarget)
                return;
            pokemon.broadcastAbility({
                positionX: pokemon.positionX,
                positionY: pokemon.positionY,
                targetX: currentTarget.positionX,
                targetY: currentTarget.positionY
            });
            moonIndex++;
            const { death } = currentTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            moonsRemaining--;
            if (death) {
                const closestEnemy = board.getClosestEnemy(currentTarget.positionX, currentTarget.positionY, currentTarget.team);
                if (closestEnemy) {
                    currentTarget = closestEnemy;
                    moonsRemaining++;
                }
                else {
                    currentTarget = undefined;
                }
            }
            if (moonsRemaining > 0 &&
                currentTarget &&
                currentTarget.hp > 0 &&
                moonIndex < 20) {
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                    sendMoon();
                }, 200));
            }
        }
        sendMoon();
    }
}
exports.MoonblastStrategy = MoonblastStrategy;
//# sourceMappingURL=moonblast.js.map