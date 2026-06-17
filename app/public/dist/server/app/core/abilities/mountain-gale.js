"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainGaleStrategy = void 0;
const config_1 = require("../../config");
const Game_1 = require("../../types/enum/Game");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const bergmite_on_back_1 = require("../effects/passives/bergmite-on-back");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class MountainGaleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c, _d;
        super.process(pokemon, board, target, crit, true);
        const damage = 40;
        const targets = board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
            .filter((cell) => cell.value && cell.value.team !== pokemon.team)
            .map((cell) => cell.value);
        if (targets.length === 0 || !targets.some((t) => t.id === target.id)) {
            targets.push(target);
        }
        const nbHits = (_a = [1, 3, 5, 10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10;
        const nbBergmites = pokemon.count.ult === 0
            ? (0, number_1.max)((_b = config_1.MaxTroopersPerPkm[pokemon.name]) !== null && _b !== void 0 ? _b : 0)((_d = (_c = [...pokemon.effectsSet.values()].find((e) => e instanceof bergmite_on_back_1.BergmiteOnBackEffect)) === null || _c === void 0 ? void 0 : _c.stacks) !== null && _d !== void 0 ? _d : 0)
            : 0;
        for (let i = 0; i < nbHits + nbBergmites; i++) {
            const t = (0, random_1.pickRandomIn)(targets);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                t.status.triggerFlinch(3000, pokemon);
                t.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                pokemon.broadcastAbility({
                    targetX: t.positionX,
                    targetY: t.positionY,
                    delay: i >= nbHits ? i - nbHits : undefined
                });
            }, 200 * i));
        }
    }
}
exports.MountainGaleStrategy = MountainGaleStrategy;
//# sourceMappingURL=mountain-gale.js.map