"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxTroopersPerPkm = exports.PkmsWithAltForms = exports.PkmAltFormsByPkm = exports.PkmAltForms = exports.UnownsStage3 = exports.UnownsStage2 = exports.UnownsStage1 = exports.EvolutionTime = void 0;
exports.getUnownsPoolPerStage = getUnownsPoolPerStage;
exports.getAltFormForPlayer = getAltFormForPlayer;
exports.getBaseAltForm = getBaseAltForm;
exports.getAllAltForms = getAllAltForms;
const flower_pots_1 = require("../../core/flower-pots");
const Pokemon_1 = require("../../types/enum/Pokemon");
const Synergy_1 = require("../../types/enum/Synergy");
const array_1 = require("../../utils/array");
exports.EvolutionTime = {
    EGG_HATCH: 5,
    EVOLVE_HATCH: 5
};
exports.UnownsStage1 = [
    Pokemon_1.Pkm.UNOWN_A,
    Pokemon_1.Pkm.UNOWN_C,
    Pokemon_1.Pkm.UNOWN_D,
    Pokemon_1.Pkm.UNOWN_E,
    Pokemon_1.Pkm.UNOWN_F,
    Pokemon_1.Pkm.UNOWN_G,
    Pokemon_1.Pkm.UNOWN_I,
    Pokemon_1.Pkm.UNOWN_O,
    Pokemon_1.Pkm.UNOWN_R,
    Pokemon_1.Pkm.UNOWN_T,
    Pokemon_1.Pkm.UNOWN_V,
    Pokemon_1.Pkm.UNOWN_W
];
exports.UnownsStage2 = [
    Pokemon_1.Pkm.UNOWN_A,
    Pokemon_1.Pkm.UNOWN_B,
    Pokemon_1.Pkm.UNOWN_C,
    Pokemon_1.Pkm.UNOWN_D,
    Pokemon_1.Pkm.UNOWN_G,
    Pokemon_1.Pkm.UNOWN_H,
    Pokemon_1.Pkm.UNOWN_I,
    Pokemon_1.Pkm.UNOWN_J,
    Pokemon_1.Pkm.UNOWN_K,
    Pokemon_1.Pkm.UNOWN_L,
    Pokemon_1.Pkm.UNOWN_M,
    Pokemon_1.Pkm.UNOWN_N,
    Pokemon_1.Pkm.UNOWN_O,
    Pokemon_1.Pkm.UNOWN_P,
    Pokemon_1.Pkm.UNOWN_Q,
    Pokemon_1.Pkm.UNOWN_R,
    Pokemon_1.Pkm.UNOWN_S,
    Pokemon_1.Pkm.UNOWN_T,
    Pokemon_1.Pkm.UNOWN_U,
    Pokemon_1.Pkm.UNOWN_V,
    Pokemon_1.Pkm.UNOWN_W,
    Pokemon_1.Pkm.UNOWN_X,
    Pokemon_1.Pkm.UNOWN_Y,
    Pokemon_1.Pkm.UNOWN_Z,
    Pokemon_1.Pkm.UNOWN_QUESTION
];
exports.UnownsStage3 = [
    Pokemon_1.Pkm.UNOWN_B,
    Pokemon_1.Pkm.UNOWN_H,
    Pokemon_1.Pkm.UNOWN_J,
    Pokemon_1.Pkm.UNOWN_K,
    Pokemon_1.Pkm.UNOWN_L,
    Pokemon_1.Pkm.UNOWN_M,
    Pokemon_1.Pkm.UNOWN_N,
    Pokemon_1.Pkm.UNOWN_O,
    Pokemon_1.Pkm.UNOWN_P,
    Pokemon_1.Pkm.UNOWN_R,
    Pokemon_1.Pkm.UNOWN_S,
    Pokemon_1.Pkm.UNOWN_U,
    Pokemon_1.Pkm.UNOWN_V,
    Pokemon_1.Pkm.UNOWN_W,
    Pokemon_1.Pkm.UNOWN_X,
    Pokemon_1.Pkm.UNOWN_Y,
    Pokemon_1.Pkm.UNOWN_Z,
    Pokemon_1.Pkm.UNOWN_QUESTION,
    Pokemon_1.Pkm.UNOWN_EXCLAMATION
];
function getUnownsPoolPerStage(stageLevel) {
    if (stageLevel < 10)
        return exports.UnownsStage1;
    else if (stageLevel < 20)
        return exports.UnownsStage2;
    else
        return exports.UnownsStage3;
}
function getAltFormForPlayer(pkm, player) {
    const basePkm = getBaseAltForm(pkm);
    switch (basePkm) {
        case Pokemon_1.Pkm.FLABEBE: {
            switch (player.flowerPotsSpawnOrder[0]) {
                case flower_pots_1.FlowerPot.YELLOW:
                    return Pokemon_1.Pkm.FLABEBE_YELLOW;
                case flower_pots_1.FlowerPot.ORANGE:
                    return Pokemon_1.Pkm.FLABEBE_ORANGE;
                case flower_pots_1.FlowerPot.BLUE:
                    return Pokemon_1.Pkm.FLABEBE_BLUE;
                case flower_pots_1.FlowerPot.WHITE:
                    return Pokemon_1.Pkm.FLABEBE_WHITE;
            }
            return Pokemon_1.Pkm.FLABEBE;
        }
        case Pokemon_1.Pkm.FLOETTE: {
            switch (player.flowerPotsSpawnOrder[0]) {
                case flower_pots_1.FlowerPot.YELLOW:
                    return Pokemon_1.Pkm.FLOETTE_YELLOW;
                case flower_pots_1.FlowerPot.ORANGE:
                    return Pokemon_1.Pkm.FLOETTE_ORANGE;
                case flower_pots_1.FlowerPot.BLUE:
                    return Pokemon_1.Pkm.FLOETTE_BLUE;
                case flower_pots_1.FlowerPot.WHITE:
                    return Pokemon_1.Pkm.FLOETTE_WHITE;
            }
            return Pokemon_1.Pkm.FLOETTE;
        }
        case Pokemon_1.Pkm.FLORGES: {
            switch (player.flowerPotsSpawnOrder[0]) {
                case flower_pots_1.FlowerPot.YELLOW:
                    return Pokemon_1.Pkm.FLORGES_YELLOW;
                case flower_pots_1.FlowerPot.ORANGE:
                    return Pokemon_1.Pkm.FLORGES_ORANGE;
                case flower_pots_1.FlowerPot.BLUE:
                    return Pokemon_1.Pkm.FLORGES_BLUE;
                case flower_pots_1.FlowerPot.WHITE:
                    return Pokemon_1.Pkm.FLORGES_WHITE;
            }
            return Pokemon_1.Pkm.FLORGES;
        }
        case Pokemon_1.Pkm.VIVILLON: {
            const synergyVivillon = [
                { synergy: Synergy_1.Synergy.SOUND, form: Pokemon_1.Pkm.VIVILLON, count: 0 },
                { synergy: Synergy_1.Synergy.NORMAL, form: Pokemon_1.Pkm.VIVILLON_ICY_SNOW, count: 0 },
                { synergy: Synergy_1.Synergy.GHOST, form: Pokemon_1.Pkm.VIVILLON_POLAR, count: 0 },
                { synergy: Synergy_1.Synergy.ICE, form: Pokemon_1.Pkm.VIVILLON_TUNDRA, count: 0 },
                { synergy: Synergy_1.Synergy.FOSSIL, form: Pokemon_1.Pkm.VIVILLON_CONTINENTAL, count: 0 },
                { synergy: Synergy_1.Synergy.GRASS, form: Pokemon_1.Pkm.VIVILLON_GARDEN, count: 0 },
                { synergy: Synergy_1.Synergy.PSYCHIC, form: Pokemon_1.Pkm.VIVILLON_ELEGANT, count: 0 },
                { synergy: Synergy_1.Synergy.FIELD, form: Pokemon_1.Pkm.VIVILLON_MODERN, count: 0 },
                { synergy: Synergy_1.Synergy.WATER, form: Pokemon_1.Pkm.VIVILLON_MARINE, count: 0 },
                {
                    synergy: Synergy_1.Synergy.FIGHTING,
                    form: Pokemon_1.Pkm.VIVILLON_ARCHIPELAGO,
                    count: 0
                },
                { synergy: Synergy_1.Synergy.HUMAN, form: Pokemon_1.Pkm.VIVILLON_HIGH_PLAINS, count: 0 },
                { synergy: Synergy_1.Synergy.ROCK, form: Pokemon_1.Pkm.VIVILLON_SANDSTORM, count: 0 },
                { synergy: Synergy_1.Synergy.AQUATIC, form: Pokemon_1.Pkm.VIVILLON_RIVER, count: 0 },
                { synergy: Synergy_1.Synergy.STEEL, form: Pokemon_1.Pkm.VIVILLON_MONSOON, count: 0 },
                { synergy: Synergy_1.Synergy.ELECTRIC, form: Pokemon_1.Pkm.VIVILLON_SAVANNA, count: 0 },
                { synergy: Synergy_1.Synergy.FIRE, form: Pokemon_1.Pkm.VIVILLON_SUN, count: 0 },
                { synergy: Synergy_1.Synergy.LIGHT, form: Pokemon_1.Pkm.VIVILLON_OCEAN, count: 0 },
                { synergy: Synergy_1.Synergy.POISON, form: Pokemon_1.Pkm.VIVILLON_JUNGLE, count: 0 },
                { synergy: Synergy_1.Synergy.FAIRY, form: Pokemon_1.Pkm.VIVILLON_FANCY, count: 0 },
                {
                    synergy: Synergy_1.Synergy.ARTIFICIAL,
                    form: Pokemon_1.Pkm.VIVILLON_POKE_BALL,
                    count: 0
                }
            ];
            for (const s of synergyVivillon) {
                s.count = player.synergies.get(s.synergy) || 0;
            }
            synergyVivillon.sort((a, b) => b.count - a.count);
            return synergyVivillon[0].form;
        }
        default:
            return basePkm;
    }
}
exports.PkmAltForms = [
    Pokemon_1.Pkm.FLABEBE_YELLOW,
    Pokemon_1.Pkm.FLABEBE_ORANGE,
    Pokemon_1.Pkm.FLABEBE_BLUE,
    Pokemon_1.Pkm.FLABEBE_WHITE,
    Pokemon_1.Pkm.FLOETTE_YELLOW,
    Pokemon_1.Pkm.FLOETTE_ORANGE,
    Pokemon_1.Pkm.FLOETTE_BLUE,
    Pokemon_1.Pkm.FLOETTE_WHITE,
    Pokemon_1.Pkm.FLORGES_YELLOW,
    Pokemon_1.Pkm.FLORGES_ORANGE,
    Pokemon_1.Pkm.FLORGES_BLUE,
    Pokemon_1.Pkm.FLORGES_WHITE,
    Pokemon_1.Pkm.MINIOR_KERNEL_RED,
    Pokemon_1.Pkm.MINIOR_KERNEL_ORANGE,
    Pokemon_1.Pkm.MINIOR_KERNEL_GREEN,
    Pokemon_1.Pkm.MINIOR_KERNEL_BLUE,
    Pokemon_1.Pkm.VIVILLON_ICY_SNOW,
    Pokemon_1.Pkm.VIVILLON_POLAR,
    Pokemon_1.Pkm.VIVILLON_TUNDRA,
    Pokemon_1.Pkm.VIVILLON_CONTINENTAL,
    Pokemon_1.Pkm.VIVILLON_GARDEN,
    Pokemon_1.Pkm.VIVILLON_ELEGANT,
    Pokemon_1.Pkm.VIVILLON_MODERN,
    Pokemon_1.Pkm.VIVILLON_MARINE,
    Pokemon_1.Pkm.VIVILLON_ARCHIPELAGO,
    Pokemon_1.Pkm.VIVILLON_HIGH_PLAINS,
    Pokemon_1.Pkm.VIVILLON_SANDSTORM,
    Pokemon_1.Pkm.VIVILLON_RIVER,
    Pokemon_1.Pkm.VIVILLON_MONSOON,
    Pokemon_1.Pkm.VIVILLON_SAVANNA,
    Pokemon_1.Pkm.VIVILLON_SUN,
    Pokemon_1.Pkm.VIVILLON_OCEAN,
    Pokemon_1.Pkm.VIVILLON_JUNGLE,
    Pokemon_1.Pkm.VIVILLON_FANCY,
    Pokemon_1.Pkm.VIVILLON_POKE_BALL,
    Pokemon_1.Pkm.SILVALLY_FIGHTING,
    Pokemon_1.Pkm.SILVALLY_FLYING,
    Pokemon_1.Pkm.SILVALLY_POISON,
    Pokemon_1.Pkm.SILVALLY_GROUND,
    Pokemon_1.Pkm.SILVALLY_ROCK,
    Pokemon_1.Pkm.SILVALLY_BUG,
    Pokemon_1.Pkm.SILVALLY_GHOST,
    Pokemon_1.Pkm.SILVALLY_STEEL,
    Pokemon_1.Pkm.SILVALLY_FIRE,
    Pokemon_1.Pkm.SILVALLY_WATER,
    Pokemon_1.Pkm.SILVALLY_GRASS,
    Pokemon_1.Pkm.SILVALLY_ELECTRIC,
    Pokemon_1.Pkm.SILVALLY_PSYCHIC,
    Pokemon_1.Pkm.SILVALLY_ICE,
    Pokemon_1.Pkm.SILVALLY_DRAGON,
    Pokemon_1.Pkm.SILVALLY_DARK,
    Pokemon_1.Pkm.SILVALLY_FAIRY,
    Pokemon_1.Pkm.ARCEUS_BUG,
    Pokemon_1.Pkm.ARCEUS_DARK,
    Pokemon_1.Pkm.ARCEUS_DRAGON,
    Pokemon_1.Pkm.ARCEUS_ELECTRIC,
    Pokemon_1.Pkm.ARCEUS_FIGHTING,
    Pokemon_1.Pkm.ARCEUS_FIRE,
    Pokemon_1.Pkm.ARCEUS_FLYING,
    Pokemon_1.Pkm.ARCEUS_GHOST,
    Pokemon_1.Pkm.ARCEUS_GRASS,
    Pokemon_1.Pkm.ARCEUS_GROUND,
    Pokemon_1.Pkm.ARCEUS_ICE,
    Pokemon_1.Pkm.ARCEUS_POISON,
    Pokemon_1.Pkm.ARCEUS_PSYCHIC,
    Pokemon_1.Pkm.ARCEUS_ROCK,
    Pokemon_1.Pkm.ARCEUS_STEEL,
    Pokemon_1.Pkm.ARCEUS_WATER,
    Pokemon_1.Pkm.ARCEUS_FAIRY,
    Pokemon_1.Pkm.ALCREMIE_RUBY,
    Pokemon_1.Pkm.ALCREMIE_MATCHA,
    Pokemon_1.Pkm.ALCREMIE_MINT,
    Pokemon_1.Pkm.ALCREMIE_LEMON,
    Pokemon_1.Pkm.ALCREMIE_SALTED,
    Pokemon_1.Pkm.ALCREMIE_RUBY_SWIRL,
    Pokemon_1.Pkm.ALCREMIE_CARAMEL_SWIRL,
    Pokemon_1.Pkm.ALCREMIE_RAINBOW_SWIRL,
    Pokemon_1.Pkm.OGERPON_CORNERSTONE,
    Pokemon_1.Pkm.OGERPON_CORNERSTONE_MASK,
    Pokemon_1.Pkm.OGERPON_HEARTHFLAME,
    Pokemon_1.Pkm.OGERPON_HEARTHFLAME_MASK,
    Pokemon_1.Pkm.OGERPON_WELLSPRING,
    Pokemon_1.Pkm.OGERPON_WELLSPRING_MASK,
    Pokemon_1.Pkm.OGERPON_TEAL_MASK,
    Pokemon_1.Pkm.BASCULIN_BLUE,
    Pokemon_1.Pkm.BASCULIN_RED,
    Pokemon_1.Pkm.BASCULEGION_FEMALE,
    Pokemon_1.Pkm.DARMANITAN_ZEN,
    Pokemon_1.Pkm.GALARIAN_DARMANITAN_ZEN,
    Pokemon_1.Pkm.MAUSHOLD_FOUR,
    Pokemon_1.Pkm.HOOPA_UNBOUND,
    Pokemon_1.Pkm.AEGISLASH_BLADE,
    Pokemon_1.Pkm.MIMIKYU_BUSTED,
    Pokemon_1.Pkm.MORPEKO_HANGRY,
    Pokemon_1.Pkm.DEOXYS_ATTACK,
    Pokemon_1.Pkm.DEOXYS_DEFENSE,
    Pokemon_1.Pkm.DEOXYS_SPEED,
    Pokemon_1.Pkm.LYCANROC_NIGHT,
    Pokemon_1.Pkm.LYCANROC_DUSK,
    Pokemon_1.Pkm.TATSUGIRI_DROOPY,
    Pokemon_1.Pkm.TATSUGIRI_STRETCHY
];
exports.PkmAltFormsByPkm = {
    [Pokemon_1.Pkm.FLABEBE]: [
        Pokemon_1.Pkm.FLABEBE_YELLOW,
        Pokemon_1.Pkm.FLABEBE_ORANGE,
        Pokemon_1.Pkm.FLABEBE_BLUE,
        Pokemon_1.Pkm.FLABEBE_WHITE
    ],
    [Pokemon_1.Pkm.FLOETTE]: [
        Pokemon_1.Pkm.FLOETTE_YELLOW,
        Pokemon_1.Pkm.FLOETTE_ORANGE,
        Pokemon_1.Pkm.FLOETTE_BLUE,
        Pokemon_1.Pkm.FLOETTE_WHITE
    ],
    [Pokemon_1.Pkm.FLORGES]: [
        Pokemon_1.Pkm.FLORGES_YELLOW,
        Pokemon_1.Pkm.FLORGES_ORANGE,
        Pokemon_1.Pkm.FLORGES_BLUE,
        Pokemon_1.Pkm.FLORGES_WHITE
    ],
    [Pokemon_1.Pkm.MINIOR]: [
        Pokemon_1.Pkm.MINIOR_KERNEL_RED,
        Pokemon_1.Pkm.MINIOR_KERNEL_ORANGE,
        Pokemon_1.Pkm.MINIOR_KERNEL_GREEN,
        Pokemon_1.Pkm.MINIOR_KERNEL_BLUE
    ],
    [Pokemon_1.Pkm.VIVILLON]: [
        Pokemon_1.Pkm.VIVILLON_ICY_SNOW,
        Pokemon_1.Pkm.VIVILLON_POLAR,
        Pokemon_1.Pkm.VIVILLON_TUNDRA,
        Pokemon_1.Pkm.VIVILLON_CONTINENTAL,
        Pokemon_1.Pkm.VIVILLON_GARDEN,
        Pokemon_1.Pkm.VIVILLON_ELEGANT,
        Pokemon_1.Pkm.VIVILLON_MODERN,
        Pokemon_1.Pkm.VIVILLON_MARINE,
        Pokemon_1.Pkm.VIVILLON_ARCHIPELAGO,
        Pokemon_1.Pkm.VIVILLON_HIGH_PLAINS,
        Pokemon_1.Pkm.VIVILLON_SANDSTORM,
        Pokemon_1.Pkm.VIVILLON_RIVER,
        Pokemon_1.Pkm.VIVILLON_MONSOON,
        Pokemon_1.Pkm.VIVILLON_SAVANNA,
        Pokemon_1.Pkm.VIVILLON_SUN,
        Pokemon_1.Pkm.VIVILLON_OCEAN,
        Pokemon_1.Pkm.VIVILLON_JUNGLE,
        Pokemon_1.Pkm.VIVILLON_FANCY,
        Pokemon_1.Pkm.VIVILLON_POKE_BALL
    ],
    [Pokemon_1.Pkm.SILVALLY]: [
        Pokemon_1.Pkm.SILVALLY_FIGHTING,
        Pokemon_1.Pkm.SILVALLY_FLYING,
        Pokemon_1.Pkm.SILVALLY_POISON,
        Pokemon_1.Pkm.SILVALLY_GROUND,
        Pokemon_1.Pkm.SILVALLY_ROCK,
        Pokemon_1.Pkm.SILVALLY_BUG,
        Pokemon_1.Pkm.SILVALLY_GHOST,
        Pokemon_1.Pkm.SILVALLY_STEEL,
        Pokemon_1.Pkm.SILVALLY_FIRE,
        Pokemon_1.Pkm.SILVALLY_WATER,
        Pokemon_1.Pkm.SILVALLY_GRASS,
        Pokemon_1.Pkm.SILVALLY_ELECTRIC,
        Pokemon_1.Pkm.SILVALLY_PSYCHIC,
        Pokemon_1.Pkm.SILVALLY_ICE,
        Pokemon_1.Pkm.SILVALLY_DRAGON,
        Pokemon_1.Pkm.SILVALLY_DARK,
        Pokemon_1.Pkm.SILVALLY_FAIRY
    ],
    [Pokemon_1.Pkm.ARCEUS]: [
        Pokemon_1.Pkm.ARCEUS_BUG,
        Pokemon_1.Pkm.ARCEUS_DARK,
        Pokemon_1.Pkm.ARCEUS_DRAGON,
        Pokemon_1.Pkm.ARCEUS_ELECTRIC,
        Pokemon_1.Pkm.ARCEUS_FIGHTING,
        Pokemon_1.Pkm.ARCEUS_FIRE,
        Pokemon_1.Pkm.ARCEUS_FLYING,
        Pokemon_1.Pkm.ARCEUS_GHOST,
        Pokemon_1.Pkm.ARCEUS_GRASS,
        Pokemon_1.Pkm.ARCEUS_GROUND,
        Pokemon_1.Pkm.ARCEUS_ICE,
        Pokemon_1.Pkm.ARCEUS_POISON,
        Pokemon_1.Pkm.ARCEUS_PSYCHIC,
        Pokemon_1.Pkm.ARCEUS_ROCK,
        Pokemon_1.Pkm.ARCEUS_STEEL,
        Pokemon_1.Pkm.ARCEUS_WATER,
        Pokemon_1.Pkm.ARCEUS_FAIRY
    ],
    [Pokemon_1.Pkm.ALCREMIE_VANILLA]: [
        Pokemon_1.Pkm.ALCREMIE_RUBY,
        Pokemon_1.Pkm.ALCREMIE_MATCHA,
        Pokemon_1.Pkm.ALCREMIE_MINT,
        Pokemon_1.Pkm.ALCREMIE_LEMON,
        Pokemon_1.Pkm.ALCREMIE_SALTED,
        Pokemon_1.Pkm.ALCREMIE_RUBY_SWIRL,
        Pokemon_1.Pkm.ALCREMIE_CARAMEL_SWIRL,
        Pokemon_1.Pkm.ALCREMIE_RAINBOW_SWIRL
    ],
    [Pokemon_1.Pkm.OGERPON_TEAL]: [
        Pokemon_1.Pkm.OGERPON_TEAL_MASK,
        Pokemon_1.Pkm.OGERPON_CORNERSTONE,
        Pokemon_1.Pkm.OGERPON_CORNERSTONE_MASK,
        Pokemon_1.Pkm.OGERPON_HEARTHFLAME,
        Pokemon_1.Pkm.OGERPON_HEARTHFLAME_MASK,
        Pokemon_1.Pkm.OGERPON_WELLSPRING,
        Pokemon_1.Pkm.OGERPON_WELLSPRING_MASK
    ],
    [Pokemon_1.Pkm.BASCULIN_WHITE]: [Pokemon_1.Pkm.BASCULIN_BLUE, Pokemon_1.Pkm.BASCULIN_RED],
    [Pokemon_1.Pkm.BASCULEGION_MALE]: [Pokemon_1.Pkm.BASCULEGION_FEMALE],
    [Pokemon_1.Pkm.DARMANITAN]: [Pokemon_1.Pkm.DARMANITAN_ZEN],
    [Pokemon_1.Pkm.GALARIAN_DARMANITAN]: [Pokemon_1.Pkm.GALARIAN_DARMANITAN_ZEN],
    [Pokemon_1.Pkm.MAUSHOLD_THREE]: [Pokemon_1.Pkm.MAUSHOLD_FOUR],
    [Pokemon_1.Pkm.HOOPA]: [Pokemon_1.Pkm.HOOPA_UNBOUND],
    [Pokemon_1.Pkm.AEGISLASH]: [Pokemon_1.Pkm.AEGISLASH_BLADE],
    [Pokemon_1.Pkm.MIMIKYU]: [Pokemon_1.Pkm.MIMIKYU_BUSTED],
    [Pokemon_1.Pkm.MORPEKO]: [Pokemon_1.Pkm.MORPEKO_HANGRY],
    [Pokemon_1.Pkm.DEOXYS]: [Pokemon_1.Pkm.DEOXYS_ATTACK, Pokemon_1.Pkm.DEOXYS_DEFENSE, Pokemon_1.Pkm.DEOXYS_SPEED],
    [Pokemon_1.Pkm.LYCANROC_DAY]: [Pokemon_1.Pkm.LYCANROC_NIGHT, Pokemon_1.Pkm.LYCANROC_DUSK],
    [Pokemon_1.Pkm.TATSUGIRI_CURLY]: [Pokemon_1.Pkm.TATSUGIRI_DROOPY, Pokemon_1.Pkm.TATSUGIRI_STRETCHY]
};
exports.PkmsWithAltForms = Object.entries(exports.PkmAltFormsByPkm).reduce((acc, [base, forms]) => {
    acc.push(base);
    acc.push(...forms);
    return acc;
}, []);
function getBaseAltForm(pkm) {
    if (pkm in exports.PkmAltFormsByPkm) {
        return pkm;
    }
    for (const [base, forms] of Object.entries(exports.PkmAltFormsByPkm)) {
        if ((0, array_1.isIn)(forms, pkm)) {
            return base;
        }
    }
    return pkm;
}
function getAllAltForms(pkm) {
    const base = getBaseAltForm(pkm);
    return base in exports.PkmAltFormsByPkm
        ? [base, ...exports.PkmAltFormsByPkm[base]]
        : [pkm];
}
exports.MaxTroopersPerPkm = {
    [Pokemon_1.Pkm.FALINKS_BRASS]: 8,
    [Pokemon_1.Pkm.AVALUGG]: 4,
    [Pokemon_1.Pkm.HISUI_AVALUGG]: 4
};
//# sourceMappingURL=pokemons.js.map