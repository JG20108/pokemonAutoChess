"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AstralBarrageStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const move_speed_1 = require("../move-speed");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class AstralBarrageStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const corner = board.getTeleportationCell(pokemon.positionX, pokemon.positionY, pokemon.team);
        if (corner) {
            pokemon.moveTo(corner.x, corner.y, board, false);
        }
        const damagePerGhost = 20;
        const enemies = [];
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                enemies.push(tg);
            }
        });
        const nbGhosts = ((_a = [3, 5, 7, 13][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 13) * (1 + pokemon.ap / 100);
        const delay = Math.round(500 / (0, move_speed_1.getMoveSpeed)(pokemon)) / (nbGhosts + 1);
        for (let i = 0; i < nbGhosts; i++) {
            const randomTarget = (0, random_1.pickRandomIn)(enemies);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                pokemon.broadcastAbility({
                    targetX: randomTarget.positionX,
                    targetY: randomTarget.positionY
                });
                if ((randomTarget === null || randomTarget === void 0 ? void 0 : randomTarget.hp) > 0) {
                    randomTarget.handleSpecialDamage(damagePerGhost, board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
                }
            }, delay * (i + 1)));
        }
    }
}
exports.AstralBarrageStrategy = AstralBarrageStrategy;
//# sourceMappingURL=astral-barrage.js.map