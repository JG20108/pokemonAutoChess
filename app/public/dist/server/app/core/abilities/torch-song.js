"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TorchSongStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class TorchSongStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damagePerFlame = 0.5 * pokemon.atk;
        const apGainPerFlame = (_a = [1, 2, 3, 6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6;
        const enemies = [];
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team != tg.team) {
                enemies.push(tg);
            }
        });
        const nbFlames = Math.round(4 * (1 + pokemon.ap / 100) * (crit ? pokemon.critPower : 1));
        for (let i = 0; i < nbFlames; i++) {
            const randomTarget = (0, random_1.pickRandomIn)(enemies);
            if (randomTarget) {
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                    pokemon.broadcastAbility({
                        targetX: randomTarget.positionX,
                        targetY: randomTarget.positionY
                    });
                    pokemon.addAbilityPower(apGainPerFlame, pokemon, 0, false);
                    if (randomTarget.hp > 0) {
                        randomTarget.handleSpecialDamage(damagePerFlame, board, Game_1.AttackType.SPECIAL, pokemon, false, false);
                        if ((0, random_1.chance)(0.3, pokemon)) {
                            randomTarget.status.triggerBurn(2000, randomTarget, pokemon);
                        }
                    }
                }, 100 * i));
            }
        }
    }
}
exports.TorchSongStrategy = TorchSongStrategy;
//# sourceMappingURL=torch-song.js.map