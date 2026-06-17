"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IcicleMissileStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class IcicleMissileStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = 50;
        const count = (_a = [1, 2, 3, 5][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 5;
        const rank = new Array();
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                rank.push(tg);
            }
        });
        rank.sort((a, b) => {
            if (a.team === Game_1.Team.BLUE_TEAM) {
                return a.positionY - b.positionY;
            }
            else {
                return b.positionY - a.positionY;
            }
        });
        for (let i = 0; i < count; i++) {
            const tg = rank[i];
            if (tg) {
                const targetX = tg.positionX;
                const targetY = tg.positionY;
                pokemon.broadcastAbility({
                    targetX,
                    targetY,
                    delay: i
                });
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                    const entityHit = board.getEntityOnCell(targetX, targetY);
                    if (entityHit &&
                        entityHit.hp > 0 &&
                        entityHit.team !== pokemon.team) {
                        entityHit.status.triggerFreeze(2000, tg, pokemon);
                        entityHit.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                }, 1000));
            }
        }
    }
}
exports.IcicleMissileStrategy = IcicleMissileStrategy;
//# sourceMappingURL=icicle-missile.js.map