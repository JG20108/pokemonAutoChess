"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPoolSize = getPoolSize;
exports.getRegularsTier1 = getRegularsTier1;
exports.getAdditionalsTier1 = getAdditionalsTier1;
exports.getSellPrice = getSellPrice;
exports.getBuyPrice = getBuyPrice;
const config_1 = require("../config");
const scribbles_1 = require("../core/scribbles");
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
const player_choice_1 = require("./colyseus-models/player-choice");
const pokemon_1 = require("./colyseus-models/pokemon");
const synergies_1 = require("./colyseus-models/synergies");
const pokemon_factory_1 = require("./pokemon-factory");
const precomputed_pokemon_data_1 = require("./precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("./precomputed/precomputed-rarity");
function getPoolSize(rarity, maxStars) {
    return config_1.PoolSize[rarity][(0, number_1.clamp)(maxStars, 1, 3) - 1];
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
function getSellPrice(pokemon, specialGameRule, ignoreRareCandy = false) {
    var _a;
    const name = pokemon.name;
    if (specialGameRule === SpecialGameRule_1.SpecialGameRule.FREE_MARKET && name !== Pokemon_1.Pkm.EGG)
        return 0;
    const duo = Object.entries(Pokemon_1.PkmDuos).find(([key, duo]) => duo.includes(name));
    let price = 1;
    let stars = pokemon.stars;
    const hasRareCandy = pokemon.items && pokemon.items.has(Item_1.Item.RARE_CANDY);
    if (hasRareCandy && !ignoreRareCandy) {
        stars = (0, number_1.min)(1)(stars - 1);
    }
    if (name === Pokemon_1.Pkm.EGG) {
        price = pokemon.shiny ? config_1.SellPrices.SHINY_EGG : config_1.SellPrices.EGG;
    }
    else if (name == Pokemon_1.Pkm.DITTO) {
        price = config_1.SellPrices.DITTO;
    }
    else if (name == Pokemon_1.Pkm.FALINKS_TROOPER) {
        price = config_1.SellPrices.FALINKS_TROOPER;
    }
    else if (name == Pokemon_1.Pkm.MELTAN) {
        price = config_1.SellPrices.MELTAN;
    }
    else if (name === Pokemon_1.Pkm.MAGIKARP) {
        price = config_1.SellPrices.MAGIKARP;
    }
    else if (name === Pokemon_1.Pkm.FEEBAS) {
        price = config_1.SellPrices.FEEBAS;
    }
    else if (name === Pokemon_1.Pkm.WISHIWASHI) {
        price = config_1.SellPrices.WISHIWASHI;
    }
    else if (name === Pokemon_1.Pkm.REMORAID) {
        price = config_1.SellPrices.REMORAID;
    }
    else if (name === Pokemon_1.Pkm.OCTILLERY) {
        price = hasRareCandy ? config_1.SellPrices.REMORAID : config_1.SellPrices.OCTILLERY;
    }
    else if (name === Pokemon_1.Pkm.GYARADOS) {
        price = hasRareCandy ? config_1.SellPrices.MAGIKARP : config_1.SellPrices.GYARADOS;
    }
    else if (name === Pokemon_1.Pkm.MILOTIC) {
        price = hasRareCandy ? config_1.SellPrices.FEEBAS : config_1.SellPrices.MILOTIC;
    }
    else if (name === Pokemon_1.Pkm.WISHIWASHI_SCHOOL) {
        price = hasRareCandy ? config_1.SellPrices.WISHIWASHI : config_1.SellPrices.WISHIWASHI_SCHOOL;
    }
    else if (Pokemon_1.Unowns.includes(name)) {
        price = config_1.SellPrices.UNOWN;
    }
    else if (pokemon.rarity === Game_1.Rarity.HATCH) {
        price = (_a = config_1.SellPrices.HATCH[stars - 1]) !== null && _a !== void 0 ? _a : config_1.SellPrices.HATCH.at(-1);
    }
    else if (pokemon.rarity === Game_1.Rarity.UNIQUE) {
        price = duo ? config_1.SellPrices.UNIQUE_DUO : config_1.SellPrices.UNIQUE;
    }
    else if (pokemon.rarity === Game_1.Rarity.LEGENDARY) {
        price = duo ? config_1.SellPrices.LEGENDARY_DUO : config_1.SellPrices.LEGENDARY;
    }
    else if ((0, pokemon_factory_1.getPokemonBaseline)(name) === Pokemon_1.Pkm.EEVEE) {
        price = config_1.SellPrices.EEVEE;
    }
    else if (duo) {
        price = Math.ceil((config_1.RarityCost[pokemon.rarity] * stars) / 2);
    }
    else if (name === Pokemon_1.Pkm.MOTHIM) {
        price = config_1.RarityCost[pokemon.rarity] * 1;
    }
    else {
        price = config_1.RarityCost[pokemon.rarity] * stars;
    }
    return price;
}
function getBuyPrice(name, specialGameRule) {
    if (specialGameRule === SpecialGameRule_1.SpecialGameRule.FREE_MARKET)
        return 0;
    let price;
    if (name === Pokemon_1.Pkm.DITTO) {
        price = config_1.BuyPrices.DITTO;
    }
    else if (name === Pokemon_1.Pkm.FALINKS_TROOPER) {
        price = config_1.BuyPrices.FALINKS_TROOPER;
    }
    else if (name === Pokemon_1.Pkm.MELTAN) {
        price = config_1.BuyPrices.MELTAN;
    }
    else if (Pokemon_1.Unowns.includes(name)) {
        price = config_1.BuyPrices.UNOWN;
    }
    else {
        price = config_1.RarityCost[(0, precomputed_pokemon_data_1.getPokemonData)(name).rarity];
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
        this.uncommonPool = UncommonShop.flatMap((pkm) => Array(getPoolSize(Game_1.Rarity.UNCOMMON, 3)).fill(pkm));
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
    addAdditionalPokemon(pkmProposition, state) {
        const pkm = pkmProposition in Pokemon_1.PkmDuos ? Pokemon_1.PkmDuos[pkmProposition][0] : pkmProposition;
        if (state.additionalPokemons.includes(pkm))
            return;
        state.additionalPokemons.push(pkm);
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
        const baseline = (0, pokemon_factory_1.getPokemonBaseline)(pkm);
        let entityNumber = stars >= 3 ? 9 : stars === 2 ? 3 : 1;
        const duo = Object.entries(Pokemon_1.PkmDuos).find(([_key, duo]) => duo.includes(pkm));
        if (duo) {
            entityNumber = Math.ceil(entityNumber / 2);
        }
        if (regional &&
            new pokemon_1.PokemonClasses[pkm](pkm).isInRegion(player.map, state) === false) {
            return;
        }
        const pool = regional
            ? this.getRegionalPool(rarity, player)
            : this.getPool(rarity);
        if (pool) {
            for (let n = 0; n < entityNumber; n++) {
                pool.push(baseline);
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
        const hasTranscendence = player.effects.has(Effect_1.EffectEnum.TRANSCENDENCE);
        if (hasTranscendence) {
            player.shopsSinceLastUnownShop += 1;
        }
        const shouldBeUnownShop = hasTranscendence &&
            ((!manualRefresh && !player.shopLocked) ||
                (manualRefresh &&
                    player.shopsSinceLastUnownShop === config_1.UNOWN_PSY7_NB_SHOPS_INTERVAL));
        if (shouldBeUnownShop) {
            player.shopFreeRolls += 1;
            player.shopsSinceLastUnownShop = 0;
            const unowns = (0, config_1.getUnownsPoolPerStage)(state.stageLevel);
            const chosenUnowns = [];
            for (let i = 0; i < config_1.SHOP_SIZE; i++) {
                const availableUnowns = unowns.filter((u) => !chosenUnowns.includes(u));
                const randomUnown = (0, random_1.pickRandomIn)(availableUnowns);
                chosenUnowns.push(randomUnown);
                player.shop[i] = randomUnown;
            }
        }
        else {
            for (let i = 0; i < config_1.SHOP_SIZE; i++) {
                player.shop[i] = this.pickPokemon(player, state, i);
            }
        }
    }
    assignUniquePropositions(player, state, portalSynergies) {
        const stageLevel = state.stageLevel;
        const typeByStage = {
            [config_1.PortalCarouselStages[0]]: "starter",
            [config_1.PortalCarouselStages[1]]: "unique",
            [config_1.PortalCarouselStages[2]]: "legendary"
        };
        const type = typeByStage[stageLevel];
        const poolByType = {
            starter: [...this.commonPool],
            unique: [...config_1.UniquePool],
            legendary: [...config_1.LegendaryPool]
        };
        let allCandidates = poolByType[type] || [];
        if (stageLevel === 0) {
            if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.UNIQUE_STARTER) {
                allCandidates = [...config_1.UniquePool];
            }
            else if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.FIRST_PARTNER) {
                allCandidates = (0, scribbles_1.pickFirstPartners)(player, state);
            }
            else if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.PSEUDO_JOURNEY) {
                allCandidates = (0, scribbles_1.pickPseudoLegendaries)();
            }
            else if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.CHOSEN_ONE) {
                player.choices.push(new player_choice_1.PlayerChoice({ type: "starter", pokemons: [...config_1.UniquePool] }));
                return;
            }
            else if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.MONOTYPE) {
                player.choices.push(new player_choice_1.PlayerChoice({
                    type: "synergy",
                    synergies: (0, scribbles_1.pickAllSynergies)()
                }));
            }
        }
        if (portalSynergies.length > config_1.NB_UNIQUE_PROPOSITIONS) {
            portalSynergies = (0, random_1.pickNRandomIn)(portalSynergies, config_1.NB_UNIQUE_PROPOSITIONS);
        }
        let nbPropositions = stageLevel === config_1.PortalCarouselStages[0]
            ? config_1.NB_STARTERS
            : config_1.NB_UNIQUE_PROPOSITIONS;
        if (stageLevel === config_1.PortalCarouselStages[0] &&
            state.specialGameRule === SpecialGameRule_1.SpecialGameRule.PSEUDO_JOURNEY) {
            nbPropositions = allCandidates.length;
        }
        const pokemonsProposed = [];
        const itemsProposed = [];
        for (let i = 0; i < nbPropositions; i++) {
            let synergyWanted = portalSynergies[i];
            function filterCandidates(proposition) {
                var _a;
                const pkm = proposition in Pokemon_1.PkmDuos ? Pokemon_1.PkmDuos[proposition][0] : proposition;
                const { types, regional } = (0, precomputed_pokemon_data_1.getPokemonData)(pkm);
                const hasSynergyWanted = synergyWanted === undefined || types.includes(synergyWanted);
                if (!hasSynergyWanted)
                    return false;
                if (regional) {
                    const pokemon = new pokemon_1.PokemonClasses[pkm](pkm);
                    if (!pokemon.isInRegion(player.map)) {
                        return false;
                    }
                }
                if (pokemonsProposed.some((prop) => {
                    const p = prop in Pokemon_1.PkmDuos ? Pokemon_1.PkmDuos[prop][0] : prop;
                    return Pokemon_1.PkmFamily[p] === Pokemon_1.PkmFamily[pkm] || (0, Pokemon_1.isRegionalVariant)(p, pkm);
                })) {
                    return false;
                }
                if (pkm in Pokemon_1.PkmRegionalVariants &&
                    ((_a = Pokemon_1.PkmRegionalVariants[pkm]) === null || _a === void 0 ? void 0 : _a.some((p) => {
                        const variant = new pokemon_1.PokemonClasses[p](p);
                        const lostTypes = types.filter((type) => !variant.types.has(type));
                        return (variant.isInRegion(player.map) &&
                            synergyWanted &&
                            lostTypes.includes(synergyWanted));
                    }))) {
                    return false;
                }
                return true;
            }
            let candidates = allCandidates.filter(filterCandidates);
            const initialCandidatesEmpty = candidates.length === 0;
            if (initialCandidatesEmpty) {
                synergyWanted = undefined;
                candidates = allCandidates.filter(filterCandidates);
            }
            let selected = (0, random_1.pickRandomIn)(candidates);
            if (selected in Pokemon_1.PkmRegionalVariants) {
                const regionalVariants = Pokemon_1.PkmRegionalVariants[selected].filter((p) => new pokemon_1.PokemonClasses[p](p).isInRegion(player.map));
                if (regionalVariants.length > 0)
                    selected = (0, random_1.pickRandomIn)(regionalVariants);
            }
            if (selected in config_1.PkmAltFormsByPkm) {
                selected = (0, config_1.getAltFormForPlayer)(selected, player);
            }
            if (stageLevel === config_1.PortalCarouselStages[0]) {
                itemsProposed[i] = (0, random_1.pickRandomIn)(Item_1.ItemComponentsNoFossilOrScarf.filter((c) => itemsProposed.includes(c) === false));
            }
            if (stageLevel === config_1.PortalCarouselStages[0] &&
                pokemonsProposed.includes(Pokemon_1.Pkm.EEVEE) === false &&
                ((0, random_1.chance)(config_1.EEVEE_RATE) || initialCandidatesEmpty) &&
                state.specialGameRule !== SpecialGameRule_1.SpecialGameRule.FIRST_PARTNER &&
                state.specialGameRule !== SpecialGameRule_1.SpecialGameRule.UNIQUE_STARTER &&
                state.specialGameRule !== SpecialGameRule_1.SpecialGameRule.PSEUDO_JOURNEY &&
                state.specialGameRule !== SpecialGameRule_1.SpecialGameRule.MONOTYPE) {
                selected = Pokemon_1.Pkm.EEVEE;
                itemsProposed[i] = Item_1.Item.FOSSIL_STONE;
            }
            else if (stageLevel === config_1.PortalCarouselStages[1] &&
                pokemonsProposed.includes(Pokemon_1.Pkm.KECLEON) === false &&
                (0, random_1.chance)(config_1.KECLEON_RATE)) {
                selected = Pokemon_1.Pkm.KECLEON;
            }
            else if (stageLevel === config_1.PortalCarouselStages[2] &&
                pokemonsProposed.includes(Pokemon_1.Pkm.ARCEUS) === false &&
                (0, random_1.chance)(config_1.ARCEUS_RATE)) {
                selected = Pokemon_1.Pkm.ARCEUS;
            }
            (0, array_1.removeInArray)(allCandidates, selected);
            pokemonsProposed.push(selected);
        }
        player.choices.push(new player_choice_1.PlayerChoice({
            type,
            pokemons: pokemonsProposed,
            items: itemsProposed
        }));
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
            if (config_1.PkmsWithAltForms.includes(pkm) &&
                (0, config_1.getAltFormForPlayer)(pkm, player) !== pkm) {
                return false;
            }
            return isOfTypeWanted && !finals.has((0, pokemon_factory_1.getPokemonBaseline)(pkm));
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
            const index = pool.indexOf((0, pokemon_factory_1.getPokemonBaseline)(pkm));
            if (index >= 0) {
                pool.splice(index, 1);
            }
        }
        return pkm;
    }
    pickPokemon(player, state, shopIndex = -1, noSpecial = false) {
        if (state.specialGameRule !== SpecialGameRule_1.SpecialGameRule.DITTO_PARTY &&
            (0, random_1.chance)(config_1.DITTO_RATE) &&
            state.stageLevel >= config_1.MIN_STAGE_FOR_DITTO &&
            !noSpecial) {
            return player.items.includes(Item_1.Item.MYSTERY_BOX) ? Pokemon_1.Pkm.MELTAN : Pokemon_1.Pkm.DITTO;
        }
        if (shopIndex === 5 && !noSpecial) {
            const totalRerolls = player.gameStats.rerollCount + state.stageLevel;
            if ((player.effects.has(Effect_1.EffectEnum.PRECOGNITION) &&
                totalRerolls % config_1.UNOWN_PSY3_NB_SHOPS_INTERVAL === 0) ||
                (player.effects.has(Effect_1.EffectEnum.AURA) &&
                    totalRerolls % config_1.UNOWN_PSY5_NB_SHOPS_INTERVAL === 0)) {
                const unowns = (0, config_1.getUnownsPoolPerStage)(state.stageLevel);
                return (0, random_1.pickRandomIn)(unowns);
            }
        }
        if (player.effects.has(Effect_1.EffectEnum.FALINKS_BRASS) &&
            (0, random_1.chance)(config_1.FALINKS_TROOPER_RATE)) {
            return Pokemon_1.Pkm.FALINKS_TROOPER;
        }
        const wildChance = (0, synergies_1.getWildChance)(player, state.stageLevel);
        const finals = player.getFinalizedLines();
        let specificTypesWanted = undefined;
        const attractors = (0, schemas_1.values)(player.board).filter((p) => p.items.has(Item_1.Item.INCENSE) || p.dishes.has(Item_1.Item.HONEY));
        let attractor = null;
        for (const p of attractors) {
            if (p.items.has(Item_1.Item.INCENSE) && (0, random_1.chance)(config_1.INCENSE_CHANCE, p))
                attractor = p;
            if (p.dishes.has(Item_1.Item.HONEY) && (0, random_1.chance)(config_1.HONEY_CHANCE, p))
                attractor = p;
        }
        if (attractor) {
            specificTypesWanted = (0, schemas_1.values)(attractor.types);
        }
        else if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.MONOTYPE &&
            player.monotype !== undefined &&
            (0, random_1.chance)(0.2)) {
            specificTypesWanted = [player.monotype];
        }
        else if (wildChance > 0 && (0, random_1.chance)(wildChance)) {
            specificTypesWanted = [Synergy_1.Synergy.WILD];
        }
        const probas = config_1.RarityProbabilityPerLevel[player.experienceManager.level];
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
            (0, random_1.chance)(config_1.HIGH_ROLLER_CHANCE) &&
            !noSpecial) {
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
        const totalRerolls = player.gameStats.rerollCount + state.stageLevel;
        if (repeatBallHolders.length > 0 &&
            shopIndex >= 0 &&
            shopIndex < repeatBallHolders.length &&
            !noSpecial) {
            if (totalRerolls >= config_1.REPEAT_BALL_LEGENDARY_CAP &&
                totalRerolls % config_1.REPEAT_BALL_UNIQUE_INTERVAL === 0) {
                return this.pickSpecialPokemon(Game_1.Rarity.LEGENDARY);
            }
            else if (totalRerolls >= config_1.REPEAT_BALL_UNIQUE_CAP &&
                totalRerolls % config_1.REPEAT_BALL_UNIQUE_INTERVAL === 0) {
                return this.pickSpecialPokemon(Game_1.Rarity.UNIQUE);
            }
        }
        return this.getRandomPokemonFromPool(rarity, player, finals, specificTypesWanted);
    }
    pickSpecialPokemon(rarity) {
        let pool;
        switch (rarity) {
            case Game_1.Rarity.LEGENDARY:
                pool = config_1.LegendaryPool;
                break;
            case Game_1.Rarity.UNIQUE:
                pool = config_1.UniquePool;
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
    pickFish(player, rod, state) {
        const mantine = (0, schemas_1.values)(player.board).find((p) => p.name === Pokemon_1.Pkm.MANTYKE || p.name === Pokemon_1.Pkm.MANTINE);
        const rarityProbability = config_1.FishRarityProbability[rod];
        const rarity_seed = Math.random();
        let threshold = 0;
        const finals = player.getFinalizedLines();
        const wildChance = (0, synergies_1.getWildChance)(player, state.stageLevel);
        if (finals.has(Pokemon_1.Pkm.REMORAID) === false &&
            ((mantine && (0, random_1.chance)(config_1.REMORAID_RATE, mantine)) || (0, random_1.chance)(wildChance)))
            return Pokemon_1.Pkm.REMORAID;
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
    magnetPull(meltan, player) {
        var _a;
        const finals = player.getFinalizedLines();
        const rarityProbabilies = config_1.RarityProbabilityPerLevel[player.experienceManager.level];
        const magnetPullRatePerRarity = {
            [Game_1.Rarity.COMMON]: rarityProbabilies[0],
            [Game_1.Rarity.UNCOMMON]: rarityProbabilies[1],
            [Game_1.Rarity.RARE]: rarityProbabilies[2],
            [Game_1.Rarity.EPIC]: rarityProbabilies[3],
            [Game_1.Rarity.ULTRA]: rarityProbabilies[4],
            [Game_1.Rarity.SPECIAL]: 0.35
        };
        const rarity = (_a = (0, random_1.randomWeighted)(magnetPullRatePerRarity, 1.35, meltan.ap, 0.5, meltan.luck)) !== null && _a !== void 0 ? _a : Game_1.Rarity.SPECIAL;
        if (rarity !== Game_1.Rarity.SPECIAL) {
            const steelPkm = this.getRandomPokemonFromPool(rarity, player, finals, [
                Synergy_1.Synergy.STEEL
            ]);
            if ((0, precomputed_pokemon_data_1.getPokemonData)(steelPkm).types.includes(Synergy_1.Synergy.STEEL))
                return steelPkm;
        }
        return Pokemon_1.Pkm.MELTAN;
    }
}
exports.default = Shop;
//# sourceMappingURL=shop.js.map