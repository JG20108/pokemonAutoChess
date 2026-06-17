"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepFreezeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class DeepFreezeStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = 10;
        const armorReduction = -1;
        const totalBolts = (_a = [5, 7, 9, 20][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 20;
        const boltDelay = 333;
        let currentTarget = target;
        let startingProjectileCoordinates = {
            x: pokemon.positionX,
            y: pokemon.positionY
        };
        let boltsRemaining = totalBolts;
        const fireBolt = () => {
            if (!currentTarget || boltsRemaining <= 0)
                return;
            pokemon.broadcastAbility({
                positionX: startingProjectileCoordinates.x,
                positionY: startingProjectileCoordinates.y,
                targetX: currentTarget.positionX,
                targetY: currentTarget.positionY
            });
            currentTarget.addSpecialDefense(armorReduction, pokemon, 0, false);
            const { death } = currentTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            boltsRemaining--;
            if (death) {
                const oldPositionX = currentTarget.positionX;
                const oldPositionY = currentTarget.positionY;
                const nextTarget = board.getClosestEnemy(currentTarget.positionX, currentTarget.positionY, currentTarget.team);
                if (nextTarget) {
                    startingProjectileCoordinates = {
                        x: oldPositionX,
                        y: oldPositionY
                    };
                }
                currentTarget = nextTarget;
            }
            if (boltsRemaining > 0 && currentTarget) {
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                    fireBolt();
                }, boltDelay));
            }
        };
        fireBolt();
    }
}
exports.DeepFreezeStrategy = DeepFreezeStrategy;
//# sourceMappingURL=deep-freeze.js.map