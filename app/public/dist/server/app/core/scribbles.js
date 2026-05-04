"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PseudoLegendaryPool = exports.PSEUDO_JOURNEY_NORMALIZED_STATS = void 0;
exports.applyPseudoJourneyNormalizedStats = applyPseudoJourneyNormalizedStats;
exports.pickPseudoLegendaries = pickPseudoLegendaries;
exports.pickAllSynergies = pickAllSynergies;
exports.spawnDIAYAvatar = spawnDIAYAvatar;
exports.pickFirstPartners = pickFirstPartners;
const config_1 = require("../config");
const pokemon_factory_1 = __importDefault(require("../models/pokemon-factory"));
const precomputed_pokemon_data_1 = require("../models/precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("../models/precomputed/precomputed-rarity");
const shop_1 = require("../models/shop");
const Game_1 = require("../types/enum/Game");
const Pokemon_1 = require("../types/enum/Pokemon");
const Synergy_1 = require("../types/enum/Synergy");
const avatar_1 = require("../utils/avatar");
const board_1 = require("../utils/board");
const number_1 = require("../utils/number");
const random_1 = require("../utils/random");
const bot_logic_1 = require("./bot-logic");
const eggs_1 = require("./eggs");
exports.PSEUDO_JOURNEY_NORMALIZED_STATS = {
    [Pokemon_1.Pkm.GOOMY]: { hp: 85, atk: 7, def: 2, speDef: 5 },
    [Pokemon_1.Pkm.SLIGOO]: { hp: 155, atk: 14, def: 4, speDef: 8 },
    [Pokemon_1.Pkm.GOODRA]: { hp: 240, atk: 24, def: 6, speDef: 14 },
    [Pokemon_1.Pkm.HISUI_SLIGGOO]: { hp: 155, atk: 14, def: 8, speDef: 6 },
    [Pokemon_1.Pkm.HISUI_GOODRA]: { hp: 240, atk: 24, def: 12, speDef: 10 },
    [Pokemon_1.Pkm.BAGON]: { hp: 85, atk: 7, def: 5, speDef: 5 },
    [Pokemon_1.Pkm.SHELGON]: { hp: 155, atk: 14, def: 10, speDef: 9 },
    [Pokemon_1.Pkm.SALAMENCE]: { hp: 240, atk: 24, def: 12, speDef: 11 },
    [Pokemon_1.Pkm.LARVITAR]: { hp: 85, atk: 7, def: 6, speDef: 4 },
    [Pokemon_1.Pkm.PUPITAR]: { hp: 155, atk: 14, def: 12, speDef: 8 },
    [Pokemon_1.Pkm.TYRANITAR]: { hp: 240, atk: 24, def: 18, speDef: 10 },
    [Pokemon_1.Pkm.DEINO]: { hp: 85, atk: 7, def: 3, speDef: 3 },
    [Pokemon_1.Pkm.ZWEILOUS]: { hp: 155, atk: 14, def: 6, speDef: 6 },
    [Pokemon_1.Pkm.HYDREIGON]: { hp: 240, atk: 24, def: 8, speDef: 8 },
    [Pokemon_1.Pkm.DRATINI]: { hp: 85, atk: 7, def: 5, speDef: 6 },
    [Pokemon_1.Pkm.DRAGONAIR]: { hp: 155, atk: 14, def: 10, speDef: 10 },
    [Pokemon_1.Pkm.DRAGONITE]: { hp: 240, atk: 24, def: 14, speDef: 14 },
    [Pokemon_1.Pkm.JANGMO_O]: { hp: 85, atk: 7, def: 5, speDef: 5 },
    [Pokemon_1.Pkm.HAKAMO_O]: { hp: 155, atk: 14, def: 10, speDef: 10 },
    [Pokemon_1.Pkm.KOMMO_O]: { hp: 240, atk: 24, def: 14, speDef: 12 },
    [Pokemon_1.Pkm.GIBLE]: { hp: 85, atk: 7, def: 4, speDef: 4 },
    [Pokemon_1.Pkm.GABITE]: { hp: 155, atk: 14, def: 8, speDef: 7 },
    [Pokemon_1.Pkm.GARCHOMP]: { hp: 240, atk: 24, def: 10, speDef: 8 },
    [Pokemon_1.Pkm.BELDUM]: { hp: 85, atk: 7, def: 7, speDef: 6 },
    [Pokemon_1.Pkm.METANG]: { hp: 155, atk: 14, def: 13, speDef: 10 },
    [Pokemon_1.Pkm.METAGROSS]: { hp: 240, atk: 24, def: 18, speDef: 14 },
    [Pokemon_1.Pkm.FRIGIBAX]: { hp: 85, atk: 7, def: 6, speDef: 4 },
    [Pokemon_1.Pkm.ARCTIBAX]: { hp: 155, atk: 14, def: 10, speDef: 7 },
    [Pokemon_1.Pkm.BAXCALIBUR]: { hp: 240, atk: 24, def: 16, speDef: 10 },
};
function applyPseudoJourneyNormalizedStats(pokemon) {
    const stats = exports.PSEUDO_JOURNEY_NORMALIZED_STATS[pokemon.name];
    if (!stats)
        return;
    pokemon.hp = stats.hp;
    pokemon.maxHP = stats.hp;
    pokemon.atk = stats.atk;
    pokemon.def = stats.def;
    pokemon.speDef = stats.speDef;
}
exports.PseudoLegendaryPool = [
    Pokemon_1.Pkm.DRATINI,
    Pokemon_1.Pkm.LARVITAR,
    Pokemon_1.Pkm.BAGON,
    Pokemon_1.Pkm.BELDUM,
    Pokemon_1.Pkm.GIBLE,
    Pokemon_1.Pkm.DEINO,
    Pokemon_1.Pkm.GOOMY,
    Pokemon_1.Pkm.JANGMO_O,
    Pokemon_1.Pkm.FRIGIBAX
];
function pickPseudoLegendaries() {
    return [...exports.PseudoLegendaryPool];
}
function pickAllSynergies() {
    return Object.values(Synergy_1.Synergy);
}
function spawnDIAYAvatar(player) {
    var _a, _b, _c;
    const { name, emotion, shiny = false } = (0, avatar_1.getPokemonCustomFromAvatar)(player.avatar);
    player.firstPartner = name;
    let powerScore = (0, bot_logic_1.getUnitPowerScore)(name);
    switch (player.firstPartner) {
        case Pokemon_1.Pkm.AEGISLASH_BLADE:
            player.firstPartner = Pokemon_1.Pkm.AEGISLASH;
            break;
        case Pokemon_1.Pkm.HOOPA_UNBOUND:
            player.firstPartner = Pokemon_1.Pkm.HOOPA;
            break;
        case Pokemon_1.Pkm.MINIOR_KERNEL_BLUE:
        case Pokemon_1.Pkm.MINIOR_KERNEL_GREEN:
        case Pokemon_1.Pkm.MINIOR_KERNEL_ORANGE:
        case Pokemon_1.Pkm.MINIOR_KERNEL_RED:
            player.firstPartner = Pokemon_1.Pkm.MINIOR;
            break;
        case Pokemon_1.Pkm.MORPEKO_HANGRY:
            player.firstPartner = Pokemon_1.Pkm.MORPEKO;
            break;
        case Pokemon_1.Pkm.DARMANITAN_ZEN:
            player.firstPartner = Pokemon_1.Pkm.DARMANITAN;
            break;
        case Pokemon_1.Pkm.COSMOG:
        case Pokemon_1.Pkm.POIPOLE:
        case Pokemon_1.Pkm.CHIMECHO:
        case Pokemon_1.Pkm.GIMMIGHOUL:
            powerScore = 5;
            break;
        case Pokemon_1.Pkm.COSMOEM:
            powerScore = 6;
            break;
        case Pokemon_1.Pkm.NAGANADEL:
        case Pokemon_1.Pkm.GHOLDENGO:
            powerScore = 8;
            break;
    }
    let avatar;
    if (player.firstPartner === Pokemon_1.Pkm.EGG) {
        avatar = (0, eggs_1.createRandomEgg)(player, false);
        powerScore = 5;
    }
    else {
        avatar = pokemon_factory_1.default.createPokemonFromName(player.firstPartner, {
            emotion,
            shiny
        });
    }
    avatar.positionX = (_a = (0, board_1.getFirstAvailablePositionInBench)(player.board)) !== null && _a !== void 0 ? _a : 0;
    avatar.positionY = 0;
    if (avatar.name === Pokemon_1.Pkm.EGG) {
        powerScore = 5;
        if (avatar.shiny) {
            player.money = 1;
        }
    }
    if (avatar.rarity === Game_1.Rarity.HATCH) {
        powerScore = (_b = [5, 6, 7][avatar.stars]) !== null && _b !== void 0 ? _b : 7;
    }
    if (avatar.rarity === Game_1.Rarity.SPECIAL) {
        powerScore = (_c = [1, 3, 7, 7][avatar.stars - 1]) !== null && _c !== void 0 ? _c : 7;
    }
    if (powerScore < 5) {
        player.money += 55 - Math.round(10 * powerScore);
    }
    else {
        avatar.ap = (0, number_1.min)(-100)(avatar.ap - (powerScore - 5) * 10);
        avatar.addAttack(-Math.round(avatar.atk * (powerScore - 5) * 0.1));
    }
    const bonusHP = Math.round(150 - powerScore * 30);
    avatar.maxHP = (0, number_1.min)(10)(avatar.maxHP + bonusHP);
    avatar.hp = avatar.maxHP;
    return avatar;
}
function pickFirstPartners(player, state) {
    const coinFlip = (0, random_1.simpleHashSeededCoinFlip)(state.preparationId);
    const rarityPartner = coinFlip ? Game_1.Rarity.COMMON : Game_1.Rarity.UNCOMMON;
    return (0, shop_1.getRegularsTier1)(precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY[rarityPartner])
        .filter((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p).stages === 3)
        .map((pkm) => {
        if (pkm in Pokemon_1.PkmRegionalVariants) {
            const regionalVariants = Pokemon_1.PkmRegionalVariants[pkm].filter((p) => player.regionalPokemons.includes(p));
            if (regionalVariants.length > 0)
                pkm = (0, random_1.pickRandomIn)(regionalVariants);
        }
        if (config_1.PkmsWithAltForms.includes(pkm)) {
            pkm = (0, config_1.getAltFormForPlayer)(pkm, player);
        }
        return pkm;
    });
}
//# sourceMappingURL=scribbles.js.map