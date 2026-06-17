"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecorateStrategy = void 0;
const Pokemon_1 = require("../../types/enum/Pokemon");
const unit_score_1 = require("../unit-score");
const ability_strategy_1 = require("./ability-strategy");
class DecorateStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const atkBoost = (_a = [1, 2, 3, 6][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 6;
        const apBoost = (_b = [10, 20, 30, 60][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 60;
        const nearestAllies = pokemon.state.getNearestAllies(pokemon, board);
        const strongestNearestAlly = (0, unit_score_1.getStrongestUnit)(nearestAllies);
        if (strongestNearestAlly) {
            pokemon.broadcastAbility({
                targetX: strongestNearestAlly.positionX,
                targetY: strongestNearestAlly.positionY
            });
            strongestNearestAlly.addAttack(atkBoost, pokemon, 1, crit);
            strongestNearestAlly.addAbilityPower(apBoost, pokemon, 1, crit);
            if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_VANILLA) {
                strongestNearestAlly.addShield(80, pokemon, 1, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_RUBY) {
                strongestNearestAlly.addSpeed(30, pokemon, 1, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_MATCHA) {
                strongestNearestAlly.addMaxHP(60, pokemon, 1, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_MINT) {
                strongestNearestAlly.handleHeal(40, pokemon, 1, crit);
                strongestNearestAlly.addSpecialDefense(15, pokemon, 1, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_LEMON) {
                strongestNearestAlly.addCritChance(40, pokemon, 1, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_SALTED) {
                strongestNearestAlly.handleHeal(40, pokemon, 1, crit);
                strongestNearestAlly.addDefense(15, pokemon, 1, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_RUBY_SWIRL) {
                strongestNearestAlly.addAttack(10, pokemon, 1, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_CARAMEL_SWIRL) {
                strongestNearestAlly.addCritPower(80, pokemon, 1, crit);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ALCREMIE_RAINBOW_SWIRL) {
                strongestNearestAlly.addPP(50, pokemon, 1, crit);
            }
        }
    }
}
exports.DecorateStrategy = DecorateStrategy;
//# sourceMappingURL=decorate.js.map