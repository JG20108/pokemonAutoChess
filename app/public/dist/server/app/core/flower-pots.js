"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulchStockCaps = exports.FlowerPotMons = exports.FlowerMonByPot = exports.FLOWER_POTS_POSITIONS_RED = exports.FLOWER_POTS_POSITIONS_BLUE = void 0;
exports.getFlowerPotsUnlocked = getFlowerPotsUnlocked;
exports.getFlowerMonByPot = getFlowerMonByPot;
const types_1 = require("../types");
const Effect_1 = require("../types/enum/Effect");
const FlowerPot_1 = require("../types/enum/FlowerPot");
const Pokemon_1 = require("../types/enum/Pokemon");
exports.FLOWER_POTS_POSITIONS_BLUE = [
    [432, 614],
    [400, 566],
    [368, 614],
    [336, 566],
    [304, 614]
];
exports.FLOWER_POTS_POSITIONS_RED = [
    [1576, 186],
    [1544, 234],
    [1512, 186],
    [1480, 234],
    [1448, 186]
];
exports.FlowerMonByPot = {
    [FlowerPot_1.FlowerPot.PINK]: [Pokemon_1.Pkm.HOPPIP, Pokemon_1.Pkm.SKIPLOOM, Pokemon_1.Pkm.JUMPLUFF],
    [FlowerPot_1.FlowerPot.YELLOW]: [Pokemon_1.Pkm.BELLSPROUT, Pokemon_1.Pkm.WEEPINBELL, Pokemon_1.Pkm.VICTREEBEL],
    [FlowerPot_1.FlowerPot.WHITE]: [Pokemon_1.Pkm.CHIKORITA, Pokemon_1.Pkm.BAYLEEF, Pokemon_1.Pkm.MEGANIUM],
    [FlowerPot_1.FlowerPot.BLUE]: [Pokemon_1.Pkm.ODDISH, Pokemon_1.Pkm.GLOOM, Pokemon_1.Pkm.VILEPLUME],
    [FlowerPot_1.FlowerPot.ORANGE]: [Pokemon_1.Pkm.BELLOSSOM]
};
function getFlowerPotsUnlocked(player) {
    const hasAllEvolutions = player.flowerPots.every((pot) => pot.evolution === Pokemon_1.Pkm.DEFAULT);
    if (hasAllEvolutions)
        player.titles.add(types_1.Title.BLOSSOMED);
    return player.flowerPotsSpawnOrder.filter((pot) => {
        if (player.effects.has(Effect_1.EffectEnum.COTTONWEED))
            return pot === FlowerPot_1.FlowerPot.PINK;
        if (player.effects.has(Effect_1.EffectEnum.FLYCATCHER))
            return [FlowerPot_1.FlowerPot.PINK, FlowerPot_1.FlowerPot.YELLOW].includes(pot);
        if (player.effects.has(Effect_1.EffectEnum.FRAGRANT))
            return [FlowerPot_1.FlowerPot.PINK, FlowerPot_1.FlowerPot.YELLOW, FlowerPot_1.FlowerPot.WHITE].includes(pot);
        if (player.effects.has(Effect_1.EffectEnum.FLOWER_POWER)) {
            return ([
                FlowerPot_1.FlowerPot.PINK,
                FlowerPot_1.FlowerPot.YELLOW,
                FlowerPot_1.FlowerPot.WHITE,
                FlowerPot_1.FlowerPot.BLUE
            ].includes(pot) ||
                (hasAllEvolutions && pot === FlowerPot_1.FlowerPot.ORANGE));
        }
    });
}
function getFlowerMonByPot(pot) {
    return exports.FlowerMonByPot[pot] || [];
}
exports.FlowerPotMons = Object.values(exports.FlowerMonByPot).flat();
exports.MulchStockCaps = [
    5,
    8,
    11,
    15,
    20,
    27,
    36,
    50
];
//# sourceMappingURL=flower-pots.js.map