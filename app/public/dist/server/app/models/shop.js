"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPoolSize = getPoolSize;
exports.getRegularsTier1 = getRegularsTier1;
exports.getAdditionalsTier1 = getAdditionalsTier1;
exports.getSellPrice = getSellPrice;
exports.getBuyPrice = getBuyPrice;
const Config_1 = require("../types/Config");
const Ability_1 = require("../types/enum/Ability");
const Effect_1 = require("../types/enum/Effect");
const Game_1 = require("../types/enum/Game");
const Item_1 = require("../types/enum/Item");
const Pokemon_1 = require("../types/enum/Pokemon");
const SpecialGameRule_1 = require("../types/enum/SpecialGameRule");
const Synergy_1 = require("../types/enum/Synergy");
const array_1 = require("../utils/array");
const logger_1 = require("../utils/logger");
const number_1 = require("../utils/number");
const random_1 = require("../utils/random");
const schemas_1 = require("../utils/schemas");
const pokemon_1 = require("./colyseus-models/pokemon");
const pokemon_factory_1 = __importDefault(require("./pokemon-factory"));
const precomputed_pokemon_data_1 = require("./precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("./precomputed/precomputed-rarity");
const pve_stages_1 = require("./pve-stages");
function getPoolSize(rarity, maxStars) {
    return Config_1.PoolSize[rarity][(0, number_1.clamp)(maxStars, 1, 3) - 1];
}
function getRegularsTier1(pokemons) {
    return pokemons.filter((p) => {
        const pokemonData = (0, precomputed_pokemon_data_1.getPokemonData)(p);
        return (pokemonData.stars === 1 &&
            pokemonData.skill !== Ability_1.Ability.DEFAULT &&
            !pokemonData.additional &&
            !pokemonData.regional);
    });
}
function getAdditionalsTier1(pokemons) {
    return pokemons.filter((p) => {
        const pokemonData = (0, precomputed_pokemon_data_1.getPokemonData)(p);
        return (pokemonData.stars === 1 &&
            pokemonData.skill !== Ability_1.Ability.DEFAULT &&
            pokemonData.additional &&
            !pokemonData.regional);
    });
}
function getSellPrice(pokemon, specialGameRule) {
    var _a;
    const name = pokemon.name;
    if (specialGameRule === SpecialGameRule_1.SpecialGameRule.FREE_MARKET && name !== Pokemon_1.Pkm.EGG)
        return 0;
    const duo = Object.entries(Pokemon_1.PkmDuos).find(([key, duo]) => duo.includes(name));
    let price = 1;
    let stars = pokemon.stars;
    const hasRareCandy = pokemon.items && pokemon.items.has(Item_1.Item.RARE_CANDY);
    if (hasRareCandy) {
        stars = (0, number_1.min)(1)(stars - 1);
    }
    if (name === Pokemon_1.Pkm.EGG) {
        price = pokemon.shiny ? 10 : 2;
    }
    else if (name == Pokemon_1.Pkm.DITTO) {
        price = 5;
    }
    else if (name === Pokemon_1.Pkm.MAGIKARP) {
        price = 0;
    }
    else if (name === Pokemon_1.Pkm.FEEBAS) {
        price = 1;
    }
    else if (name === Pokemon_1.Pkm.WISHIWASHI) {
        price = 3;
    }
    else if (name === Pokemon_1.Pkm.REMORAID) {
        price = 3;
    }
    else if (name === Pokemon_1.Pkm.OCTILLERY) {
        price = 10;
    }
    else if (name === Pokemon_1.Pkm.GYARADOS) {
        price = hasRareCandy ? 0 : 10;
    }
    else if (name === Pokemon_1.Pkm.MILOTIC) {
        price = hasRareCandy ? 1 : 10;
    }
    else if (name === Pokemon_1.Pkm.WISHIWASHI_SCHOOL) {
        price = hasRareCandy ? 3 : 10;
    }
    else if (Pokemon_1.Unowns.includes(name)) {
        price = 1;
    }
    else if (pokemon.rarity === Game_1.Rarity.HATCH) {
        price = (_a = [3, 4, 5][stars - 1]) !== null && _a !== void 0 ? _a : 5;
    }
    else if (pokemon.rarity === Game_1.Rarity.UNIQUE) {
        price = duo ? 6 : 10;
    }
    else if (pokemon.rarity === Game_1.Rarity.LEGENDARY) {
        price = duo ? 10 : 20;
    }
    else if (pokemon_factory_1.default.getPokemonBaseEvolution(name) === Pokemon_1.Pkm.EEVEE) {
        price = Config_1.RarityCost[pokemon.rarity];
    }
    else if (duo) {
        price = Math.ceil((Config_1.RarityCost[pokemon.rarity] * stars) / 2);
    }
    else {
        price = Config_1.RarityCost[pokemon.rarity] * stars;
    }
    return price;
}
function getBuyPrice(name, specialGameRule) {
    if (specialGameRule === SpecialGameRule_1.SpecialGameRule.FREE_MARKET)
        return 0;
    let price = 1;
    if (name === Pokemon_1.Pkm.DITTO) {
        price = 5;
    }
    else if (Pokemon_1.Unowns.includes(name)) {
        price = 1;
    }
    else {
        price = Config_1.RarityCost[(0, precomputed_pokemon_data_1.getPokemonData)(name).rarity];
    }
    return price;
}
const CommonShop = getRegularsTier1(precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.COMMON);
const UncommonShop = getRegularsTier1(precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.UNCOMMON);
const RareShop = getRegularsTier1(precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.RARE);
const EpicShop = getRegularsTier1(precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.EPIC);
const UltraShop = getRegularsTier1(precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.ULTRA);
class Shop {
    constructor() {
        this.commonPool = new Array();
        this.uncommonPool = new Array();
        this.rarePool = new Array();
        this.epicPool = new Array();
        this.ultraPool = new Array();
        this.commonPool = CommonShop.flatMap((pkm) => Array(getPoolSize(Game_1.Rarity.COMMON, 3)).fill(pkm));
        this.uncommonPool = UncommonShop.flatMap((pkm) => Array(getPoolSize(Game_1.Rarity.UNCOMMON, pkm === Pokemon_1.Pkm.EEVEE ? 2 : 3)).fill(pkm));
        this.rarePool = RareShop.flatMap((pkm) => Array(getPoolSize(Game_1.Rarity.RARE, 3)).fill(pkm));
        this.epicPool = EpicShop.flatMap((pkm) => Array(getPoolSize(Game_1.Rarity.EPIC, 3)).fill(pkm));
        this.ultraPool = UltraShop.flatMap((pkm) => Array(getPoolSize(Game_1.Rarity.ULTRA, 3)).fill(pkm));
    }
    getPool(rarity) {
        switch (rarity) {
            case Game_1.Rarity.COMMON:
                return this.commonPool;
            case Game_1.Rarity.UNCOMMON:
                return this.uncommonPool;
            case Game_1.Rarity.RARE:
                return this.rarePool;
            case Game_1.Rarity.EPIC:
                return this.epicPool;
            case Game_1.Rarity.ULTRA:
                return this.ultraPool;
        }
    }
    getRegionalPool(rarity, player) {
        switch (rarity) {
            case Game_1.Rarity.COMMON:
                return player.commonRegionalPool;
            case Game_1.Rarity.UNCOMMON:
                return player.uncommonRegionalPool;
            case Game_1.Rarity.RARE:
                return player.rareRegionalPool;
            case Game_1.Rarity.EPIC:
                return player.epicRegionalPool;
            case Game_1.Rarity.ULTRA:
                return player.ultraRegionalPool;
        }
    }
    addAdditionalPokemon(pkmProposition) {
        const pkm = pkmProposition in Pokemon_1.PkmDuos ? Pokemon_1.PkmDuos[pkmProposition][0] : pkmProposition;
        const { rarity, stages } = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
        const pool = this.getPool(rarity);
        const entityNumber = getPoolSize(rarity, stages);
        if (pool) {
            for (let n = 0; n < entityNumber; n++) {
                pool.push(pkm);
            }
        }
    }
    addRegionalPokemon(pkm, player) {
        const { rarity, stages } = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
        const pool = this.getRegionalPool(rarity, player);
        const entityNumber = getPoolSize(rarity, stages);
        if (pool) {
            for (let n = 0; n < entityNumber; n++) {
                pool.push(pkm);
            }
        }
    }
    resetRegionalPool(player) {
        player.commonRegionalPool = player.commonRegionalPool.filter((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p).regional === false);
        player.uncommonRegionalPool = player.uncommonRegionalPool.filter((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p).regional === false);
        player.rareRegionalPool = player.rareRegionalPool.filter((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p).regional === false);
        player.epicRegionalPool = player.epicRegionalPool.filter((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p).regional === false);
        player.ultraRegionalPool = player.ultraRegionalPool.filter((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p).regional === false);
    }
    releasePokemon(pkm, player, state) {
        const { stars, rarity, regional } = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
        const baseEvolution = pokemon_factory_1.default.getPokemonBaseEvolution(pkm);
        let entityNumber = stars >= 3 ? 9 : stars === 2 ? 3 : 1;
        const duo = Object.entries(Pokemon_1.PkmDuos).find(([_key, duo]) => duo.includes(pkm));
        if (duo) {
            entityNumber = Math.ceil(entityNumber / 2);
        }
        if (regional &&
            new pokemon_1.PokemonClasses[pkm]().isInRegion(player.map, state) === false) {
            return;
        }
        const pool = regional
            ? this.getRegionalPool(rarity, player)
            : this.getPool(rarity);
        if (pool) {
            for (let n = 0; n < entityNumber; n++) {
                pool.push(baseEvolution);
            }
        }
    }
    refillShop(player, state) {
        player.shop.forEach((pokemon, i) => {
            if (pokemon === Pokemon_1.Pkm.MAGIKARP || pokemon === Pokemon_1.Pkm.DEFAULT) {
                player.shop[i] = this.pickPokemon(player, state, i);
            }
        });
    }
    assignShop(player, manualRefresh, state) {
        player.shop.forEach((pkm) => this.releasePokemon(pkm, player, state));
        if (player.effects.has(Effect_1.Effect.EERIE_SPELL) &&
            !manualRefresh &&
            !player.shopLocked) {
            player.shopFreeRolls += 1;
            const unowns = (0, Pokemon_1.getUnownsPoolPerStage)(state.stageLevel);
            for (let i = 0; i < Config_1.SHOP_SIZE; i++) {
                player.shop[i] = (0, random_1.pickRandomIn)(unowns);
            }
        }
        else {
            for (let i = 0; i < Config_1.SHOP_SIZE; i++) {
                player.shop[i] = this.pickPokemon(player, state, i);
            }
        }
    }
    assignUniquePropositions(player, stageLevel, portalSynergies) {
        const allCandidates = stageLevel === Config_1.PortalCarouselStages[1]
            ? [...Config_1.UniquePool]
            : [...Config_1.LegendaryPool];
        if (portalSynergies.length > Config_1.NB_UNIQUE_PROPOSITIONS) {
            portalSynergies = (0, random_1.pickNRandomIn)(portalSynergies, Config_1.NB_UNIQUE_PROPOSITIONS);
        }
        for (let i = 0; i < Config_1.NB_UNIQUE_PROPOSITIONS; i++) {
            const synergyWanted = portalSynergies[i];
            let candidates = allCandidates.filter((m) => {
                const pkm = m in Pokemon_1.PkmDuos ? Pokemon_1.PkmDuos[m][0] : m;
                const specialSynergies = new Map([
                    [Pokemon_1.Pkm.TAPU_BULU, Synergy_1.Synergy.GRASS],
                    [Pokemon_1.Pkm.TAPU_FINI, Synergy_1.Synergy.FAIRY],
                    [Pokemon_1.Pkm.TAPU_KOKO, Synergy_1.Synergy.ELECTRIC],
                    [Pokemon_1.Pkm.TAPU_LELE, Synergy_1.Synergy.PSYCHIC],
                    [Pokemon_1.Pkm.OGERPON_CORNERSTONE, Synergy_1.Synergy.ROCK],
                    [Pokemon_1.Pkm.OGERPON_HEARTHFLAME, Synergy_1.Synergy.FIRE],
                    [Pokemon_1.Pkm.OGERPON_WELLSPRING, Synergy_1.Synergy.AQUATIC]
                ]);
                const hasSynergyWanted = synergyWanted === undefined
                    ? true
                    : specialSynergies.has(pkm)
                        ? specialSynergies.get(pkm) === synergyWanted
                        : (0, precomputed_pokemon_data_1.getPokemonData)(pkm).types.includes(synergyWanted);
                return (hasSynergyWanted &&
                    !player.pokemonsProposition.some((prop) => {
                        const p = prop in Pokemon_1.PkmDuos ? Pokemon_1.PkmDuos[prop][0] : prop;
                        return Pokemon_1.PkmFamily[p] === Pokemon_1.PkmFamily[pkm] || (0, Pokemon_1.isRegionalVariant)(p, pkm);
                    }));
            });
            if (candidates.length === 0)
                candidates = allCandidates;
            let selected = (0, random_1.pickRandomIn)(candidates);
            if (stageLevel === Config_1.PortalCarouselStages[1] &&
                player.pokemonsProposition.includes(Pokemon_1.Pkm.KECLEON) === false &&
                (0, random_1.chance)(Config_1.KECLEON_RATE)) {
                selected = Pokemon_1.Pkm.KECLEON;
            }
            else if (stageLevel === Config_1.PortalCarouselStages[2] &&
                player.pokemonsProposition.includes(Pokemon_1.Pkm.ARCEUS) === false &&
                (0, random_1.chance)(Config_1.ARCEUS_RATE)) {
                selected = Pokemon_1.Pkm.ARCEUS;
            }
            (0, array_1.removeInArray)(allCandidates, selected);
            player.pokemonsProposition.push(selected);
        }
    }
    getRandomPokemonFromPool(rarity, player, finals = new Set(), specificTypesWanted) {
        var _a, _b;
        let pkm = Pokemon_1.Pkm.MAGIKARP;
        const candidates = ((_a = this.getPool(rarity)) !== null && _a !== void 0 ? _a : [])
            .concat((_b = this.getRegionalPool(rarity, player)) !== null && _b !== void 0 ? _b : [])
            .map((pkm) => {
            if (pkm in Pokemon_1.PkmRegionalVariants) {
                const regionalVariants = Pokemon_1.PkmRegionalVariants[pkm].filter((p) => player.regionalPokemons.includes(p));
                if (regionalVariants.length > 0)
                    pkm = (0, random_1.pickRandomIn)(regionalVariants);
            }
            return pkm;
        })
            .filter((pkm) => {
            const types = (0, precomputed_pokemon_data_1.getPokemonData)(pkm).types;
            const isOfTypeWanted = specificTypesWanted
                ? specificTypesWanted.some((specificTypeWanted) => types.includes(specificTypeWanted))
                : types.includes(Synergy_1.Synergy.WILD) === false;
            return isOfTypeWanted && !finals.has(pkm);
        });
        if (candidates.length > 0) {
            pkm = (0, random_1.pickRandomIn)(candidates);
        }
        else if (specificTypesWanted &&
            specificTypesWanted.includes(Synergy_1.Synergy.WATER)) {
            return Pokemon_1.Pkm.MAGIKARP;
        }
        else if (specificTypesWanted) {
            return this.getRandomPokemonFromPool(rarity, player, finals);
        }
        const { regional } = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
        const pool = regional
            ? this.getRegionalPool(rarity, player)
            : this.getPool(rarity);
        if (pool) {
            const index = pool.indexOf(pkm);
            if (index >= 0) {
                pool.splice(index, 1);
            }
        }
        return pkm;
    }
    pickPokemon(player, state, shopIndex = -1) {
        if (state.specialGameRule !== SpecialGameRule_1.SpecialGameRule.DITTO_PARTY &&
            (0, random_1.chance)(Config_1.DITTO_RATE) &&
            state.stageLevel >= 2) {
            return Pokemon_1.Pkm.DITTO;
        }
        if (player.effects.has(Effect_1.Effect.LIGHT_SCREEN) &&
            shopIndex === 5 &&
            (player.rerollCount + state.stageLevel) % 3 === 0) {
            const unowns = (0, Pokemon_1.getUnownsPoolPerStage)(state.stageLevel);
            return (0, random_1.pickRandomIn)(unowns);
        }
        const isPVE = state.stageLevel in pve_stages_1.PVEStages;
        const wildChance = player.wildChance + (isPVE ? 0.05 : 0);
        const finals = new Set((0, schemas_1.values)(player.board)
            .filter((pokemon) => pokemon.final)
            .map((pokemon) => Pokemon_1.PkmFamily[pokemon.name]));
        let specificTypesWanted = undefined;
        const attractors = (0, schemas_1.values)(player.board).filter((p) => p.items.has(Item_1.Item.INCENSE) || p.meal === Item_1.Item.HONEY);
        const attractor = attractors.find((p) => (0, random_1.chance)(5 / 100, p));
        if (attractor) {
            specificTypesWanted = (0, schemas_1.values)(attractor.types);
        }
        else if (wildChance > 0 && (0, random_1.chance)(wildChance)) {
            specificTypesWanted = [Synergy_1.Synergy.WILD];
        }
        const probas = Config_1.RarityProbabilityPerLevel[player.experienceManager.level];
        const rarity_seed = Math.random();
        let i = 0, threshold = 0;
        while (rarity_seed > threshold) {
            threshold += probas[i];
            i++;
        }
        const rarity = [
            Game_1.Rarity.COMMON,
            Game_1.Rarity.UNCOMMON,
            Game_1.Rarity.RARE,
            Game_1.Rarity.EPIC,
            Game_1.Rarity.ULTRA
        ][i - 1];
        if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.HIGH_ROLLER &&
            (0, random_1.chance)(2 / 100)) {
            if (state.stageLevel < 10)
                return this.pickSpecialPokemon(Game_1.Rarity.HATCH);
            if (state.stageLevel < 20)
                return this.pickSpecialPokemon(Game_1.Rarity.UNIQUE);
            return this.pickSpecialPokemon(Game_1.Rarity.LEGENDARY);
        }
        if (!rarity) {
            logger_1.logger.error(`error in shop while picking seed = ${rarity_seed}, threshold = ${threshold}`);
            return Pokemon_1.Pkm.MAGIKARP;
        }
        const repeatBallHolders = (0, schemas_1.values)(player.board).filter((p) => p.items.has(Item_1.Item.REPEAT_BALL));
        const totalRerolls = player.rerollCount + state.stageLevel;
        if (repeatBallHolders.length > 0 &&
            shopIndex >= 0 &&
            shopIndex < repeatBallHolders.length) {
            if (totalRerolls >= 150 && totalRerolls % 10 === 0) {
                return this.pickSpecialPokemon(Game_1.Rarity.LEGENDARY);
            }
            else if (totalRerolls >= 100 && totalRerolls % 10 === 0) {
                return this.pickSpecialPokemon(Game_1.Rarity.UNIQUE);
            }
        }
        return this.getRandomPokemonFromPool(rarity, player, finals, specificTypesWanted);
    }
    pickSpecialPokemon(rarity) {
        let pool;
        switch (rarity) {
            case Game_1.Rarity.LEGENDARY:
                pool = Config_1.LegendaryPool;
                break;
            case Game_1.Rarity.UNIQUE:
                pool = Config_1.UniquePool;
                break;
            case Game_1.Rarity.HATCH:
                pool = precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.HATCH.filter((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p).stars === 1);
                break;
            default:
                return Pokemon_1.Pkm.MAGIKARP;
        }
        let candidates = pool.filter((p) => !(p in Pokemon_1.PkmDuos));
        (0, random_1.shuffleArray)(candidates);
        candidates = candidates.filter((p, index) => candidates.findIndex((p2) => Pokemon_1.PkmFamily[p2] === Pokemon_1.PkmFamily[p]) === index);
        if (candidates.length > 0)
            return (0, random_1.pickRandomIn)(candidates);
        return Pokemon_1.Pkm.MAGIKARP;
    }
    pickFish(player, rod) {
        const mantine = (0, schemas_1.values)(player.board).find((p) => p.name === Pokemon_1.Pkm.MANTYKE || p.name === Pokemon_1.Pkm.MANTINE);
        if (mantine && (0, random_1.chance)(0.3, mantine))
            return Pokemon_1.Pkm.REMORAID;
        const rarityProbability = Config_1.FishRarityProbability[rod];
        const rarity_seed = Math.random();
        let threshold = 0;
        const finals = new Set((0, schemas_1.values)(player.board)
            .filter((pokemon) => pokemon.final)
            .map((pokemon) => Pokemon_1.PkmFamily[pokemon.name]));
        let rarity = Game_1.Rarity.SPECIAL;
        for (const r in rarityProbability) {
            threshold += rarityProbability[r];
            if (rarity_seed < threshold) {
                rarity = r;
                break;
            }
        }
        if (rarity !== Game_1.Rarity.SPECIAL) {
            const fish = this.getRandomPokemonFromPool(rarity, player, finals, [
                Synergy_1.Synergy.WATER
            ]);
            if (fish !== Pokemon_1.Pkm.MAGIKARP)
                return fish;
        }
        if (rod === Item_1.Item.SUPER_ROD)
            return Pokemon_1.Pkm.WISHIWASHI;
        if (rod === Item_1.Item.GOOD_ROD)
            return Pokemon_1.Pkm.FEEBAS;
        return Pokemon_1.Pkm.MAGIKARP;
    }
}
exports.default = Shop;
//# sourceMappingURL=shop.js.map