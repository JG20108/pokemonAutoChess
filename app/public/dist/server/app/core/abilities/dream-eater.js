"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DreamEaterStrategy = void 0;
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class DreamEaterStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const sleepingTarget = board.find((x, y, entity) => entity.status.sleep && entity.team !== pokemon.team);
        if (sleepingTarget) {
            pokemon.broadcastAbility({
                targetX: sleepingTarget.positionX,
                targetY: sleepingTarget.positionY
            });
            const coord = pokemon.state.getNearestAvailablePlaceCoordinates(sleepingTarget, board, 1);
            if (coord) {
                pokemon.moveTo(coord.x, coord.y, board, false);
            }
            const damage = (_a = [45, 90, 150, 250][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 250;
            const { takenDamage } = sleepingTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
            pokemon.handleHeal(takenDamage, pokemon, 0, false);
        }
        else {
            const targetThatCanSleep = [
                target,
                ...board.cells.filter((e) => e && e.team !== pokemon.team)
            ].find((e) => !e.status.runeProtect &&
                !e.status.skydiving &&
                !e.effects.has(Effect_1.EffectEnum.IMMUNITY_SLEEP) &&
                e.status.ccCooldown <= 0);
            if (targetThatCanSleep) {
                const duration = Math.round(((_b = [3000, 4000, 5000, 6000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 6000) *
                    (1 + pokemon.ap / 100));
                target.status.triggerSleep(duration, target);
                pokemon.broadcastAbility({
                    targetX: target.positionX,
                    targetY: target.positionY
                });
                pokemon.pp = pokemon.maxPP;
            }
        }
    }
}
exports.DreamEaterStrategy = DreamEaterStrategy;
//# sourceMappingURL=dream-eater.js.map