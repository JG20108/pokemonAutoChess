"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntrainmentStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const distance_1 = require("../../utils/distance");
const ability_strategy_1 = require("./ability-strategy");
class EntrainmentStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const ppGained = (_a = [10, 10, 10, 30][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 30;
        pokemon.addPP(ppGained, pokemon, 1, crit);
        if (target.skill !== Ability_1.Ability.ENTRAINMENT) {
            target.skill = Ability_1.Ability.ENTRAINMENT;
        }
        else {
            const potentialTargets = [];
            board.forEach((x, y, value) => {
                if (value && value.team !== pokemon.team && value.hp > 0) {
                    potentialTargets.push({ x, y, value });
                }
            });
            potentialTargets.sort((a, b) => (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, a.x, a.y) -
                (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, b.x, b.y));
            if (potentialTargets.length > 0) {
                potentialTargets[0].value.skill = Ability_1.Ability.ENTRAINMENT;
            }
        }
    }
}
exports.EntrainmentStrategy = EntrainmentStrategy;
//# sourceMappingURL=entrainment.js.map