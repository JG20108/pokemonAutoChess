"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkestLariatStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class DarkestLariatStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const hits = Math.round((1 + 0.01 * pokemon.speed) * 3);
        target.status.triggerFlinch(1000, target, pokemon);
        for (let i = 0; i < hits; i++) {
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                var _a;
                if (target.hp > 0) {
                    const damage = ((_a = [1, 1, 1, 2][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 2) * pokemon.atk;
                    target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    if (pokemon.effects.has(Effect_1.EffectEnum.WILDFIRE)) {
                        pokemon.addAttack(1, pokemon, 0, false);
                    }
                    else if (pokemon.effects.has(Effect_1.EffectEnum.BLAZE)) {
                        pokemon.addAttack(2, pokemon, 0, false);
                    }
                    else if (pokemon.effects.has(Effect_1.EffectEnum.DESOLATE_LAND)) {
                        pokemon.addAttack(3, pokemon, 0, false);
                    }
                }
            }, Math.round((i * 1000) / hits)));
        }
        const dx = target.positionX - pokemon.positionX;
        const dy = target.positionY - pokemon.positionY;
        const freeCellBehind = board.getClosestAvailablePlace(target.positionX + dx, target.positionY + dy);
        pokemon.broadcastAbility({
            targetX: (_a = freeCellBehind === null || freeCellBehind === void 0 ? void 0 : freeCellBehind.x) !== null && _a !== void 0 ? _a : pokemon.positionX,
            targetY: (_b = freeCellBehind === null || freeCellBehind === void 0 ? void 0 : freeCellBehind.y) !== null && _b !== void 0 ? _b : pokemon.positionY
        });
        if (freeCellBehind) {
            pokemon.moveTo(freeCellBehind.x, freeCellBehind.y, board, false);
            pokemon.resetCooldown(500);
        }
    }
}
exports.DarkestLariatStrategy = DarkestLariatStrategy;
//# sourceMappingURL=darkest-lariat.js.map