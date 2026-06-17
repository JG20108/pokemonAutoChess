"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrostBreathStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const orientation_1 = require("../../utils/orientation");
const random_1 = require("../../utils/random");
const ability_strategy_1 = require("./ability-strategy");
class FrostBreathStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.canCritByDefault = true;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [35, 70, 140, 280][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 280;
        pokemon.orientation = board.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, target);
        const [dx, dy] = orientation_1.OrientationVector[pokemon.orientation];
        const orientations = [
            pokemon.orientation,
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(pokemon.orientation) + 1) % 8],
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(pokemon.orientation) + 7) % 8]
        ];
        const cellsHit = [[pokemon.positionX + dx, pokemon.positionY + dy]];
        for (const o of orientations) {
            cellsHit.push([
                pokemon.positionX + dx + orientation_1.OrientationVector[o][0],
                pokemon.positionY + dy + +orientation_1.OrientationVector[o][1]
            ]);
        }
        cellsHit.forEach((cell) => {
            const value = board.getEntityOnCell(cell[0], cell[1]);
            if (value && value.team !== pokemon.team) {
                value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                if ((0, random_1.chance)(0.5, pokemon)) {
                    value.status.triggerFreeze(2000, value, pokemon);
                }
            }
        });
    }
}
exports.FrostBreathStrategy = FrostBreathStrategy;
//# sourceMappingURL=frost-breath.js.map