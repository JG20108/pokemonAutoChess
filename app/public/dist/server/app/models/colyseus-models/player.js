"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const evolution_rules_1 = require("../../core/evolution-rules");
const bot_logic_1 = require("../../core/bot-logic");
const Config_1 = require("../../types/Config");
const Dungeon_1 = require("../../types/enum/Dungeon");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Pokemon_1 = require("../../types/enum/Pokemon");
const SpecialGameRule_1 = require("../../types/enum/SpecialGameRule");
const Synergy_1 = require("../../types/enum/Synergy");
const Weather_1 = require("../../types/enum/Weather");
const array_1 = require("../../utils/array");
const avatar_1 = require("../../utils/avatar");
const board_1 = require("../../utils/board");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const effects_1 = require("../effects");
const eggs_1 = require("../../core/eggs");
const pokemon_factory_1 = __importDefault(require("../pokemon-factory"));
const precomputed_pokemon_data_1 = require("../precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("../precomputed/precomputed-rarity");
const shop_1 = require("../shop");
const experience_manager_1 = __importDefault(require("./experience-manager"));
const history_item_1 = __importDefault(require("./history-item"));
const pokemon_1 = require("./pokemon");
const pokemon_customs_1 = require("./pokemon-customs");
const synergies_1 = __importStar(require("./synergies"));
class Player extends schema_1.Schema {
    constructor(id, name, elo, avatar, isBot, rank, pokemonCollection, title, role, state) {
        var _a, _b, _c;
        super();
        this.simulationId = "";
        this.team = Game_1.Team.BLUE_TEAM;
        this.board = new schema_1.MapSchema();
        this.shop = new schema_1.ArraySchema();
        this.experienceManager = new experience_manager_1.default();
        this.synergies = new synergies_1.default();
        this.money = process.env.MODE == "dev" ? 999 : 5;
        this.life = 100;
        this.shopLocked = false;
        this.shopFreeRolls = 0;
        this.streak = 0;
        this.interest = 0;
        this.opponentId = "";
        this.opponentName = "";
        this.opponentAvatar = "";
        this.opponentTitle = "";
        this.boardSize = 0;
        this.items = new schema_1.ArraySchema();
        this.alive = true;
        this.history = new schema_1.ArraySchema();
        this.pokemonCustoms = new schema_1.MapSchema();
        this.emotesUnlocked = "";
        this.itemsProposition = new schema_1.ArraySchema();
        this.pokemonsProposition = new schema_1.ArraySchema();
        this.pveRewards = new schema_1.ArraySchema();
        this.pveRewardsPropositions = new schema_1.ArraySchema();
        this.loadingProgress = 0;
        this.berryTreesType = [
            (0, random_1.pickRandomIn)(Item_1.Berries),
            (0, random_1.pickRandomIn)(Item_1.Berries),
            (0, random_1.pickRandomIn)(Item_1.Berries)
        ];
        this.berryTreesStage = [1, 1, 1];
        this.effects = new effects_1.Effects();
        this.regionalPokemons = new schema_1.ArraySchema();
        this.rerollCount = 0;
        this.totalMoneyEarned = 0;
        this.totalPlayerDamageDealt = 0;
        this.eggChance = 0;
        this.goldenEggChance = 0;
        this.wildChance = 0;
        this.commonRegionalPool = new Array();
        this.uncommonRegionalPool = new Array();
        this.rareRegionalPool = new Array();
        this.epicRegionalPool = new Array();
        this.ultraRegionalPool = new Array();
        this.opponents = new Map();
        this.titles = new Set();
        this.artificialItems = (0, random_1.pickNRandomIn)(Item_1.ArtificialItems, 3);
        this.tms = pickRandomTMs();
        this.weatherRocks = [];
        this.randomComponentsGiven = [];
        this.randomEggsGiven = [];
        this.ghost = false;
        this.hasLeftGame = false;
        this.bonusSynergies = new Map();
        this.id = id;
        this.spectatedPlayerId = id;
        this.name = name;
        this.elo = elo;
        this.avatar = avatar;
        this.isBot = isBot;
        this.rank = rank;
        this.title = title;
        this.role = role;
        this.pokemonCustoms = new pokemon_customs_1.PokemonCustoms(pokemonCollection);
        const avatarCustom = (0, avatar_1.getPokemonCustomFromAvatar)(avatar);
        const avatarInCollection = pokemonCollection.get(Pokemon_1.PkmIndex[avatarCustom.name]);
        this.emotesUnlocked = ((_a = ((avatarInCollection === null || avatarInCollection === void 0 ? void 0 : avatarInCollection.selectedShiny)
            ? avatarInCollection === null || avatarInCollection === void 0 ? void 0 : avatarInCollection.shinyEmotions
            : avatarInCollection === null || avatarInCollection === void 0 ? void 0 : avatarInCollection.emotions)) !== null && _a !== void 0 ? _a : []).join(",");
        this.lightX = state.lightX;
        this.lightY = state.lightY;
        this.map = "town";
        this.updateRegionalPool(state, true);
        if (isBot) {
            this.loadingProgress = 100;
            this.lightX = 3;
            this.lightY = 2;
        }
        if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.DITTO_PARTY) {
            for (let i = 0; i < 5; i++) {
                const ditto = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.DITTO, this);
                ditto.positionX = (_b = (0, board_1.getFirstAvailablePositionInBench)(this.board)) !== null && _b !== void 0 ? _b : 0;
                ditto.positionY = 0;
                this.board.set(ditto.id, ditto);
                ditto.onAcquired(this);
            }
        }
        if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.UNIQUE_STARTER) {
            const randomUnique = (0, random_1.pickRandomIn)(Config_1.UniquePool);
            const pokemonsObtained = (randomUnique in Pokemon_1.PkmDuos ? Pokemon_1.PkmDuos[randomUnique] : [randomUnique]).map((p) => pokemon_factory_1.default.createPokemonFromName(p, this));
            this.firstPartner = pokemonsObtained[0].name;
            pokemonsObtained.forEach((pokemon) => {
                var _a;
                pokemon.positionX = (_a = (0, board_1.getFirstAvailablePositionInBench)(this.board)) !== null && _a !== void 0 ? _a : 0;
                pokemon.positionY = 0;
                this.board.set(pokemon.id, pokemon);
                pokemon.onAcquired(this);
            });
        }
        else if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.DO_IT_ALL_YOURSELF) {
            const avatar = spawnDIAYAvatar(this);
            this.board.set(avatar.id, avatar);
            avatar.onAcquired(this);
        }
        else if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.FIRST_PARTNER) {
            const randomCommons = (0, random_1.pickNRandomIn)((0, shop_1.getRegularsTier1)(precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.COMMON).filter((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p).stages === 3), 3);
            this.pokemonsProposition.push(...randomCommons);
        }
        else {
            this.firstPartner = state.shop.getRandomPokemonFromPool(Game_1.Rarity.COMMON, this);
            const pokemon = pokemon_factory_1.default.createPokemonFromName(this.firstPartner, this);
            pokemon.positionX = (_c = (0, board_1.getFirstAvailablePositionInBench)(this.board)) !== null && _c !== void 0 ? _c : 0;
            pokemon.positionY = 0;
            this.board.set(pokemon.id, pokemon);
            pokemon.onAcquired(this);
        }
        if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.SLAMINGO) {
            for (let i = 0; i < 4; i++)
                this.items.push((0, random_1.pickRandomIn)(Item_1.ItemComponents));
        }
    }
    addMoney(value, countTotalEarned, origin) {
        if (origin === null || origin === void 0 ? void 0 : origin.isGhostOpponent) {
            return;
        }
        this.money += value;
        if (countTotalEarned && value > 0)
            this.totalMoneyEarned += value;
    }
    addBattleResult(id, name, result, avatar, weather) {
        this.history.push(new history_item_1.default(id, name, result, avatar, weather ? weather : Weather_1.Weather.NEUTRAL));
    }
    getPokemonAt(x, y) {
        let p = undefined;
        this.board.forEach((pokemon) => {
            if (pokemon.positionX == x && pokemon.positionY == y) {
                p = pokemon;
            }
        });
        return p;
    }
    transformPokemon(pokemon, newEntry) {
        const newPokemon = pokemon_factory_1.default.createPokemonFromName(newEntry, this);
        pokemon.items.forEach((item) => {
            newPokemon.items.add(item);
            if (item === Item_1.Item.SHINY_CHARM) {
                newPokemon.shiny = true;
            }
        });
        newPokemon.meal = pokemon.meal;
        newPokemon.positionX = pokemon.positionX;
        newPokemon.positionY = pokemon.positionY;
        this.board.delete(pokemon.id);
        this.board.set(newPokemon.id, newPokemon);
        newPokemon.onAcquired(this);
        this.updateSynergies();
        (0, evolution_rules_1.carryOverPermanentStats)(newPokemon, [pokemon]);
        return newPokemon;
    }
    updateSynergies() {
        var _a, _b;
        const pokemons = (0, schemas_1.values)(this.board);
        const previousSynergies = this.synergies.toMap();
        let updatedSynergies = (0, synergies_1.computeSynergies)(pokemons);
        this.bonusSynergies.forEach((value, synergy) => {
            var _a;
            updatedSynergies.set(synergy, ((_a = updatedSynergies.get(synergy)) !== null && _a !== void 0 ? _a : 0) + value);
        });
        const artifNeedsRecomputing = this.updateArtificialItems(previousSynergies, updatedSynergies);
        if (artifNeedsRecomputing) {
            updatedSynergies = (0, synergies_1.computeSynergies)(pokemons);
        }
        const previousLight = (_a = previousSynergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0;
        const newLight = (_b = updatedSynergies.get(Synergy_1.Synergy.LIGHT)) !== null && _b !== void 0 ? _b : 0;
        const minimumToGetLight = Config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0];
        const lightChanged = (previousLight >= minimumToGetLight && newLight < minimumToGetLight) ||
            (previousLight < minimumToGetLight && newLight >= minimumToGetLight);
        updatedSynergies.forEach((value, synergy) => this.synergies.set(synergy, value));
        if (lightChanged)
            this.onLightChange();
        if (previousSynergies.get(Synergy_1.Synergy.WATER) !==
            updatedSynergies.get(Synergy_1.Synergy.WATER)) {
            this.updateFishingRods();
        }
        if (previousSynergies.get(Synergy_1.Synergy.ROCK) !== updatedSynergies.get(Synergy_1.Synergy.ROCK)) {
            this.updateWeatherRocks();
        }
        if (previousSynergies.get(Synergy_1.Synergy.HUMAN) !==
            updatedSynergies.get(Synergy_1.Synergy.HUMAN)) {
            this.updateTms();
        }
        if (previousSynergies.get(Synergy_1.Synergy.GOURMET) !==
            updatedSynergies.get(Synergy_1.Synergy.GOURMET)) {
            this.updateChefsHats();
        }
        this.updateWildChance();
        this.effects.update(this.synergies, this.board);
    }
    updateArtificialItems(previousSynergies, updatedSynergies) {
        let needsRecomputingSynergiesAgain = false;
        const previousNbArtifItems = Config_1.SynergyTriggers[Synergy_1.Synergy.ARTIFICIAL].filter((n) => { var _a; return ((_a = previousSynergies.get(Synergy_1.Synergy.ARTIFICIAL)) !== null && _a !== void 0 ? _a : 0) >= n; }).length;
        const newNbArtifItems = Config_1.SynergyTriggers[Synergy_1.Synergy.ARTIFICIAL].filter((n) => { var _a; return ((_a = updatedSynergies.get(Synergy_1.Synergy.ARTIFICIAL)) !== null && _a !== void 0 ? _a : 0) >= n; }).length;
        if (newNbArtifItems > previousNbArtifItems) {
            const gainedArtificialItems = this.artificialItems.slice(previousNbArtifItems, newNbArtifItems);
            gainedArtificialItems.forEach((item) => {
                this.items.push(item);
            });
        }
        else if (newNbArtifItems < previousNbArtifItems) {
            const lostArtificialItems = this.artificialItems.slice(newNbArtifItems, previousNbArtifItems);
            const lostTrash = lostArtificialItems.filter((item) => item === Item_1.Item.TRASH).length;
            const removeArtificialItem = (item) => {
                const pokemons = (0, schemas_1.values)(this.board);
                for (const pokemon of pokemons) {
                    if (pokemon.items.has(item)) {
                        pokemon.items.delete(item);
                        if (item in Item_1.SynergyGivenByItem) {
                            const type = Item_1.SynergyGivenByItem[item];
                            const nativeTypes = (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).types;
                            if (nativeTypes.includes(type) === false) {
                                pokemon.types.delete(type);
                                if (pokemon.name === Pokemon_1.Pkm.SILVALLY &&
                                    nativeTypes.length === pokemon.types.size) {
                                    this.transformPokemon(pokemon, Pokemon_1.Pkm.TYPE_NULL);
                                }
                                if (pokemon.name === Pokemon_1.Pkm.ARCHALUDON) {
                                    this.transformPokemon(pokemon, Pokemon_1.Pkm.DURALUDON);
                                }
                                if (!(0, board_1.isOnBench)(pokemon)) {
                                    needsRecomputingSynergiesAgain = true;
                                }
                            }
                        }
                        return;
                    }
                }
                (0, array_1.removeInArray)(this.items, item);
            };
            lostArtificialItems.forEach(removeArtificialItem);
        }
        return needsRecomputingSynergiesAgain;
    }
    updateWeatherRocks() {
        const nbWeatherRocks = this.synergies.getSynergyStep(Synergy_1.Synergy.ROCK);
        let weatherRockInInventory;
        do {
            weatherRockInInventory = this.items.findIndex((item, index) => Item_1.WeatherRocks.includes(item));
            if (weatherRockInInventory != -1) {
                this.items.splice(weatherRockInInventory, 1);
            }
        } while (weatherRockInInventory != -1);
        if (nbWeatherRocks > 0) {
            const rocksCollected = this.weatherRocks.slice(-nbWeatherRocks);
            this.items.push(...rocksCollected);
        }
    }
    updateTms() {
        const nbTMs = this.synergies.getSynergyStep(Synergy_1.Synergy.HUMAN);
        let tmInInventory;
        do {
            tmInInventory = this.items.findIndex((item, index) => Item_1.TMs.includes(item) || Item_1.HMs.includes(item));
            if (tmInInventory != -1) {
                this.items.splice(tmInInventory, 1);
            }
        } while (tmInInventory != -1);
        if (nbTMs > 0) {
            const tmsCollected = this.tms
                .slice(0, nbTMs)
                .filter((tm) => tm != null);
            this.items.push(...tmsCollected);
        }
    }
    updateFishingRods() {
        const fishingLevel = this.synergies.getSynergyStep(Synergy_1.Synergy.WATER);
        if (this.items.includes(Item_1.Item.OLD_ROD) && fishingLevel !== 1)
            (0, array_1.removeInArray)(this.items, Item_1.Item.OLD_ROD);
        if (this.items.includes(Item_1.Item.GOOD_ROD) && fishingLevel !== 2)
            (0, array_1.removeInArray)(this.items, Item_1.Item.GOOD_ROD);
        if (this.items.includes(Item_1.Item.SUPER_ROD) && fishingLevel !== 3)
            (0, array_1.removeInArray)(this.items, Item_1.Item.SUPER_ROD);
        if (this.items.includes(Item_1.Item.OLD_ROD) === false && fishingLevel === 1)
            this.items.push(Item_1.Item.OLD_ROD);
        if (this.items.includes(Item_1.Item.GOOD_ROD) === false && fishingLevel === 2)
            this.items.push(Item_1.Item.GOOD_ROD);
        if (this.items.includes(Item_1.Item.SUPER_ROD) === false && fishingLevel === 3)
            this.items.push(Item_1.Item.SUPER_ROD);
    }
    updateWildChance() {
        this.wildChance =
            (0, schemas_1.values)(this.board)
                .filter((p) => p.types.has(Synergy_1.Synergy.WILD))
                .reduce((total, p) => total + p.stars * (1 + p.luck / 100), 0) / 100;
    }
    updateChefsHats() {
        var _a, _b;
        const gourmetLevel = this.synergies.getSynergyStep(Synergy_1.Synergy.GOURMET);
        const newNbHats = (_a = [0, 1, 1, 2][gourmetLevel]) !== null && _a !== void 0 ? _a : 0;
        const hatHolders = (0, schemas_1.values)(this.board).filter((p) => p.items.has(Item_1.Item.CHEF_HAT));
        let currentNbHats = this.items.filter((item) => item === Item_1.Item.CHEF_HAT).length +
            hatHolders.length;
        do {
            if (newNbHats > currentNbHats) {
                this.items.push(Item_1.Item.CHEF_HAT);
                currentNbHats++;
            }
            else if (newNbHats < currentNbHats) {
                if (this.items.includes(Item_1.Item.CHEF_HAT)) {
                    (0, array_1.removeInArray)(this.items, Item_1.Item.CHEF_HAT);
                    currentNbHats--;
                }
                else {
                    (_b = hatHolders.at(-1)) === null || _b === void 0 ? void 0 : _b.items.delete(Item_1.Item.CHEF_HAT);
                    hatHolders.pop();
                    currentNbHats--;
                }
            }
        } while (newNbHats !== currentNbHats);
    }
    updateRegionalPool(state, mapChanged) {
        if (this.map === "town") {
            (0, schemas_1.resetArraySchema)(this.regionalPokemons, []);
            return;
        }
        const newRegionalPokemons = precomputed_pokemon_data_1.PRECOMPUTED_REGIONAL_MONS.filter((p) => new pokemon_1.PokemonClasses[p]().isInRegion(this.map, state));
        if (mapChanged) {
            state.shop.resetRegionalPool(this);
            newRegionalPokemons.forEach((p) => {
                const isVariant = Object.values(Pokemon_1.PkmRegionalVariants).some((variants) => variants.includes(p));
                if ((0, precomputed_pokemon_data_1.getPokemonData)(p).stars === 1 && !isVariant) {
                    state.shop.addRegionalPokemon(p, this);
                }
            });
            if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.REGIONAL_SPECIALITIES) {
                this.bonusSynergies.clear();
                const { synergies, regionalSpeciality } = Dungeon_1.DungeonDetails[this.map];
                synergies.forEach((synergy) => {
                    this.bonusSynergies.set(synergy, 1);
                });
                this.updateSynergies();
                if (regionalSpeciality) {
                    this.board.forEach((pokemon) => {
                        pokemon.meal = regionalSpeciality;
                    });
                }
            }
        }
        newRegionalPokemons.sort((a, b) => (0, precomputed_pokemon_data_1.getPokemonData)(a).stars - (0, precomputed_pokemon_data_1.getPokemonData)(b).stars);
        (0, schemas_1.resetArraySchema)(this.regionalPokemons, newRegionalPokemons.filter((p, index, array) => {
            const evolution = (0, precomputed_pokemon_data_1.getPokemonData)(Pokemon_1.PkmFamily[p]).evolution;
            return (array.findIndex((p2) => Pokemon_1.PkmFamily[p] === Pokemon_1.PkmFamily[p2]) === index &&
                !(evolution === p ||
                    (evolution && (0, precomputed_pokemon_data_1.getPokemonData)(evolution).evolution === p)));
        }));
    }
    onLightChange() {
        const pokemonsReactingToLight = [
            Pokemon_1.Pkm.NECROZMA,
            Pokemon_1.Pkm.ULTRA_NECROZMA,
            Pokemon_1.Pkm.CHERRIM_SUNLIGHT,
            Pokemon_1.Pkm.CHERRIM
        ];
        this.board.forEach((pokemon) => {
            if (pokemonsReactingToLight.includes(pokemon.name)) {
                pokemon.onChangePosition(pokemon.positionX, pokemon.positionY, this);
            }
        });
    }
}
exports.default = Player;
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "simulationId", void 0);
__decorate([
    (0, schema_1.type)("number")
], Player.prototype, "team", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "avatar", void 0);
__decorate([
    (0, schema_1.type)({ map: pokemon_1.Pokemon })
], Player.prototype, "board", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "shop", void 0);
__decorate([
    (0, schema_1.type)(experience_manager_1.default)
], Player.prototype, "experienceManager", void 0);
__decorate([
    (0, schema_1.type)({ map: "uint8" })
], Player.prototype, "synergies", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Player.prototype, "money", void 0);
__decorate([
    (0, schema_1.type)("int16")
], Player.prototype, "life", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Player.prototype, "shopLocked", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "shopFreeRolls", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "streak", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "interest", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "opponentId", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "opponentName", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "opponentAvatar", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "opponentTitle", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "spectatedPlayerId", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "boardSize", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "items", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "rank", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Player.prototype, "elo", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Player.prototype, "alive", void 0);
__decorate([
    (0, schema_1.type)([history_item_1.default])
], Player.prototype, "history", void 0);
__decorate([
    (0, schema_1.type)({ map: "uint8" })
], Player.prototype, "pokemonCustoms", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "emotesUnlocked", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "title", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "role", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "itemsProposition", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "pokemonsProposition", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "pveRewards", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "pveRewardsPropositions", void 0);
__decorate([
    (0, schema_1.type)("float32")
], Player.prototype, "loadingProgress", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "berryTreesType", void 0);
__decorate([
    (0, schema_1.type)(["uint8"])
], Player.prototype, "berryTreesStage", void 0);
__decorate([
    (0, schema_1.type)("string")
], Player.prototype, "map", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], Player.prototype, "effects", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "regionalPokemons", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Player.prototype, "rerollCount", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Player.prototype, "totalMoneyEarned", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Player.prototype, "totalPlayerDamageDealt", void 0);
__decorate([
    (0, schema_1.type)("float32")
], Player.prototype, "eggChance", void 0);
__decorate([
    (0, schema_1.type)("float32")
], Player.prototype, "goldenEggChance", void 0);
__decorate([
    (0, schema_1.type)("float32")
], Player.prototype, "wildChance", void 0);
function pickRandomTMs() {
    const firstTM = (0, random_1.pickRandomIn)(Item_1.TMs);
    const secondTM = (0, random_1.pickRandomIn)(Item_1.TMs.filter((tm) => tm !== firstTM));
    const hm = (0, random_1.pickRandomIn)(Item_1.HMs);
    return [firstTM, secondTM, hm];
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
        powerScore = (_c = [1, 3, 7, 7][avatar.stars]) !== null && _c !== void 0 ? _c : 7;
    }
    if (powerScore < 5) {
        player.money += 55 - Math.round(10 * powerScore);
    }
    const bonusHP = Math.round(150 - powerScore * 30);
    avatar.hp = (0, number_1.min)(10)(avatar.hp + bonusHP);
    return avatar;
}
//# sourceMappingURL=player.js.map