"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoltSurgeStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const effect_1 = require("../effects/effect");
const ability_strategy_1 = require("./ability-strategy");
const voltSurgeEffect = new effect_1.OnAttackEffect(({ pokemon, target, board }) => {
    var _a;
    if (pokemon.count.attackCount % 3 === 0) {
        const nbBounces = 4;
        const damage = (_a = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        const closestEnemies = board.getClosestEnemies(pokemon.positionX, pokemon.positionY, pokemon.team === Game_1.Team.RED_TEAM ? Game_1.Team.BLUE_TEAM : Game_1.Team.RED_TEAM);
        let previousTg = pokemon;
        let secondaryTargetHit = target;
        for (let i = 0; i < nbBounces; i++) {
            secondaryTargetHit = closestEnemies[i];
            if (secondaryTargetHit) {
                pokemon.broadcastAbility({
                    skill: "LINK_CABLE_link",
                    positionX: previousTg.positionX,
                    positionY: previousTg.positionY,
                    targetX: secondaryTargetHit.positionX,
                    targetY: secondaryTargetHit.positionY
                });
                secondaryTargetHit.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, false);
                previousTg = secondaryTargetHit;
            }
            else {
                break;
            }
        }
    }
});
class VoltSurgeStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const hpGained = (_a = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 60;
        pokemon.addMaxHP(hpGained, pokemon, 1, crit, false);
        pokemon.addSpeed(20, pokemon, 0, false);
        if (pokemon.status.electricField === false) {
            pokemon.status.electricField = true;
            pokemon.broadcastAbility({ skill: "SUPERCHARGE" });
        }
        if (pokemon.count.ult === 1) {
            pokemon.effectsSet.add(voltSurgeEffect);
        }
        else {
            pokemon.cooldown = 0;
        }
    }
}
exports.VoltSurgeStrategy = VoltSurgeStrategy;
//# sourceMappingURL=volt-surge.js.map