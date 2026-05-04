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
const config_1 = require("../../config");
const collection_1 = require("../../core/collection");
const evolution_rules_1 = require("../../core/evolution-rules");
const flower_pots_1 = require("../../core/flower-pots");
const types_1 = require("../../types");
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const Pokemon_1 = require("../../types/enum/Pokemon");
const SpecialGameRule_1 = require("../../types/enum/SpecialGameRule");
const Synergy_1 = require("../../types/enum/Synergy");
const Wanderer_1 = require("../../types/enum/Wanderer");
const Weather_1 = require("../../types/enum/Weather");
const GameStats_1 = require("../../types/interfaces/GameStats");
const array_1 = require("../../utils/array");
const avatar_1 = require("../../utils/avatar");
const board_1 = require("../../utils/board");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const effects_1 = require("../effects");
const pokemon_factory_1 = __importStar(require("../pokemon-factory"));
const precomputed_pokemon_data_1 = require("../precomputed/precomputed-pokemon-data");
const experience_manager_1 = __importDefault(require("./experience-manager"));
const game_stats_1 = require("./game-stats");
const history_item_1 = __importDefault(require("./history-item"));
const player_choice_1 = require("./player-choice");
const pokemon_1 = require("./pokemon");
const pokemon_customs_1 = require("./pokemon-customs");
const synergies_1 = __importStar(require("./synergies"));
const wanderer_1 = require("./wanderer");
class Player extends schema_1.Schema {
    constructor(id, name, elo, games, avatar, isBot, rank, pokemonCollection, title, role, state) {
        var _a, _b;
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
        this.maxInterest = 5;
        this.interest = 0;
        this.opponentId = "";
        this.opponentName = "";
        this.opponentAvatar = "";
        this.opponentTitle = "";
        this.boardSize = 0;
        this.items = new schema_1.ArraySchema();
        this.scarvesItems = new schema_1.ArraySchema();
        this.fairyWands = new schema_1.ArraySchema();
        this.alive = true;
        this.history = new schema_1.ArraySchema();
        this.pokemonCustoms = new schema_1.MapSchema();
        this.emotesUnlocked = "";
        this.choices = new schema_1.ArraySchema();
        this.pveRewards = new schema_1.ArraySchema();
        this.pveRewardsPropositions = new schema_1.ArraySchema();
        this.loadingProgress = 0;
        this.berryTreesType = (0, random_1.pickNRandomIn)(Item_1.NonSpecialBerries, 3);
        this.berryTreesStages = [1, 1, 1];
        this.flowerPots = [];
        this.mulch = 0;
        this.mulchCap = flower_pots_1.MulchStockCaps[0];
        this.groundHoles = new Array(config_1.BOARD_WIDTH * config_1.BOARD_HEIGHT).fill(0);
        this.effects = new effects_1.Effects();
        this.regionalPokemons = new schema_1.ArraySchema();
        this.eggChance = 0;
        this.goldenEggChance = 0;
        this.cellBattery = 0;
        this.wanderers = new Map();
        this.gameStats = new game_stats_1.GameStatsSchema(Object.assign({}, GameStats_1.initialGameStats));
        this.commonRegionalPool = new Array();
        this.uncommonRegionalPool = new Array();
        this.rareRegionalPool = new Array();
        this.epicRegionalPool = new Array();
        this.ultraRegionalPool = new Array();
        this.opponents = new Map();
        this.titles = new Set();
        this.artificialItems = (0, random_1.pickNRandomIn)(Item_1.ArtificialItems, 3);
        this.buriedItems = initBuriedItems();
        this.tms = pickRandomTMs();
        this.weatherRocks = [];
        this.randomComponentsGiven = [];
        this.randomEggsGiven = [];
        this.flowerPotsSpawnOrder = (0, random_1.shuffleArray)([...flower_pots_1.FlowerPots]);
        this.ghost = false;
        this.gymBadgeThreshold = 0;
        this.hasLeftGame = false;
        this.bonusSynergies = new Map();
        this.pokemonsPlayed = new Set();
        this.pokemonsTrainingInDojo = [];
        this.specialGameRule = null;
        this.shopsSinceLastUnownShop = 0;
        this.regions = [];
        this.id = id;
        this.spectatedPlayerId = id;
        this.name = name;
        this.elo = elo;
        this.games = games;
        this.avatar = avatar;
        this.isBot = isBot;
        this.rank = rank;
        this.title = title;
        this.role = role;
        this.pokemonCustoms = new pokemon_customs_1.PokemonCustoms(pokemonCollection);
        this.specialGameRule = state.specialGameRule;
        this.flowerPots = initFlowerPots(this);
        const avatarCustom = (0, avatar_1.getPokemonCustomFromAvatar)(avatar);
        const avatarInCollection = pokemonCollection.get(Pokemon_1.PkmIndex[avatarCustom.name]);
        const emotesUnlocked = collection_1.CollectionUtils.getEmotionsUnlocked(avatarInCollection);
        this.emotesUnlocked = ((_a = (avatarCustom.shiny
            ? emotesUnlocked.shinyEmotions
            : emotesUnlocked.emotions)) !== null && _a !== void 0 ? _a : []).join(",");
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
        if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.SLAMINGO) {
            for (let i = 0; i < 4; i++)
                this.items.push((0, random_1.pickRandomIn)(Item_1.ItemComponentsNoFossilOrScarf));
        }
    }
    addExperience(value) {
        this.experienceManager.addExperience(value);
        if (this.experienceManager.level >= 9 &&
            this.items.includes(Item_1.Item.MISSION_ORDER_BLUE)) {
            this.completeMissionOrder(Item_1.Item.MISSION_ORDER_BLUE);
        }
    }
    addMoney(value, countTotalEarned, origin) {
        if (origin === null || origin === void 0 ? void 0 : origin.isGhostOpponent) {
            return;
        }
        this.money += value;
        if (countTotalEarned && value > 0)
            this.gameStats.totalMoneyEarned += value;
        this.board.forEach((pokemon) => {
            if (pokemon.evolutionRule instanceof evolution_rules_1.ConditionBasedEvolutionRule) {
                pokemon.evolutionRule.tryEvolve(pokemon, this, 0);
            }
        });
        if (this.gameStats.totalMoneyEarned >= 200 &&
            this.items.includes(Item_1.Item.MISSION_ORDER_GOLD)) {
            this.completeMissionOrder(Item_1.Item.MISSION_ORDER_GOLD);
        }
    }
    addBattleResult(id, name, result, avatar, weather) {
        this.history.push(new history_item_1.default(id, name, result, avatar, weather ? weather : Weather_1.Weather.NEUTRAL));
    }
    getPokemonAt(x, y) {
        return (0, schemas_1.values)(this.board).find((pokemon) => pokemon.positionX == x && pokemon.positionY == y);
    }
    transformPokemon(pokemon, newEntry) {
        const newPokemon = pokemon_factory_1.default.createPokemonFromName(newEntry, this);
        (0, evolution_rules_1.carryOverPermanentStats)(newPokemon, [pokemon]);
        pokemon.items.forEach((item) => {
            newPokemon.items.add(item);
            if (item === Item_1.Item.SHINY_CHARM) {
                newPokemon.shiny = true;
            }
        });
        newPokemon.dishes = pokemon.dishes;
        newPokemon.positionX = pokemon.positionX;
        newPokemon.positionY = pokemon.positionY;
        this.board.delete(pokemon.id);
        this.board.set(newPokemon.id, newPokemon);
        newPokemon.onAcquired(this);
        this.updateSynergies();
        this.pokemonsPlayed.add(newPokemon.name);
        return newPokemon;
    }
    updateSynergies() {
        var _a, _b, _c;
        const pokemons = (0, schemas_1.values)(this.board);
        const previousSynergies = this.synergies.toMap();
        let updatedSynergies = (0, synergies_1.computeSynergies)(pokemons, this.bonusSynergies, this.specialGameRule);
        const normalNeedsRecomputing = this.updateScarves(previousSynergies, updatedSynergies);
        const artifNeedsRecomputing = this.updateArtificialItems(previousSynergies, updatedSynergies);
        if (artifNeedsRecomputing || normalNeedsRecomputing) {
            updatedSynergies = (0, synergies_1.computeSynergies)(pokemons, this.bonusSynergies);
        }
        const previousLight = (_a = previousSynergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0;
        const newLight = (_b = updatedSynergies.get(Synergy_1.Synergy.LIGHT)) !== null && _b !== void 0 ? _b : 0;
        const minimumToGetLight = config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0];
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
            this.updateTms(previousSynergies, updatedSynergies);
        }
        if (previousSynergies.get(Synergy_1.Synergy.GOURMET) !==
            updatedSynergies.get(Synergy_1.Synergy.GOURMET)) {
            this.updateChefsHats();
        }
        if (previousSynergies.get(Synergy_1.Synergy.FAIRY) !==
            updatedSynergies.get(Synergy_1.Synergy.FAIRY)) {
            this.updateFairyWands(previousSynergies, updatedSynergies);
        }
        if (this.specialGameRule === SpecialGameRule_1.SpecialGameRule.GYM_BADGE &&
            this.monotype !== undefined) {
            const GYM_BADGE_MAX_CANDY_STEPS = 3;
            const count = (_c = updatedSynergies.get(this.monotype)) !== null && _c !== void 0 ? _c : 0;
            const thresholds = config_1.SynergyTriggers[this.monotype];
            const rawStep = thresholds.filter((t) => count >= t).length;
            const currentStep = Math.min(rawStep, GYM_BADGE_MAX_CANDY_STEPS);
            if (currentStep > this.gymBadgeThreshold) {
                const gained = currentStep - this.gymBadgeThreshold;
                for (let c = 0; c < gained; c++) {
                    this.items.push(Item_1.Item.RARE_CANDY);
                }
            }
            else if (currentStep < this.gymBadgeThreshold) {
                const removeGymBadgeRareCandy = () => {
                    for (const pokemon of (0, schemas_1.values)(this.board)) {
                        if (pokemon.items.has(Item_1.Item.RARE_CANDY)) {
                            pokemon.removeItem(Item_1.Item.RARE_CANDY, this);
                            return;
                        }
                    }
                    (0, array_1.removeInArray)(this.items, Item_1.Item.RARE_CANDY);
                };
                for (let r = 0; r < this.gymBadgeThreshold - currentStep; r++) {
                    removeGymBadgeRareCandy();
                }
            }
            this.gymBadgeThreshold = currentStep;
        }
        this.effects.update(this.synergies, this.board);
        if (this.items.includes(Item_1.Item.MISSION_ORDER_GREEN) &&
            this.synergies.countActiveSynergies() >= 9) {
            this.completeMissionOrder(Item_1.Item.MISSION_ORDER_GREEN);
        }
        if (this.items.includes(Item_1.Item.MISSION_ORDER_PINK) &&
            (0, schemas_1.values)(this.board).filter((p) => p.stars >= 3).length >= 5) {
            this.completeMissionOrder(Item_1.Item.MISSION_ORDER_PINK);
        }
    }
    updateArtificialItems(previousSynergies, updatedSynergies) {
        let needsRecomputingSynergiesAgain = false;
        const previousNbArtifItems = config_1.SynergyTriggers[Synergy_1.Synergy.ARTIFICIAL].filter((n) => { var _a; return ((_a = previousSynergies.get(Synergy_1.Synergy.ARTIFICIAL)) !== null && _a !== void 0 ? _a : 0) >= n; }).length;
        const newNbArtifItems = config_1.SynergyTriggers[Synergy_1.Synergy.ARTIFICIAL].filter((n) => { var _a; return ((_a = updatedSynergies.get(Synergy_1.Synergy.ARTIFICIAL)) !== null && _a !== void 0 ? _a : 0) >= n; }).length;
        if (newNbArtifItems > previousNbArtifItems) {
            const gainedArtificialItems = this.artificialItems.slice(previousNbArtifItems, newNbArtifItems);
            gainedArtificialItems.forEach((item) => {
                this.items.push(item);
            });
        }
        else if (newNbArtifItems < previousNbArtifItems) {
            const lostArtificialItems = this.artificialItems.slice(newNbArtifItems, previousNbArtifItems);
            const removeArtificialItem = (item) => {
                const pokemons = (0, schemas_1.values)(this.board);
                for (const pokemon of pokemons) {
                    if (pokemon.items.has(item)) {
                        pokemon.removeItem(item, this);
                        if (item in Item_1.SynergyGivenByItem && !(0, board_1.isOnBench)(pokemon)) {
                            needsRecomputingSynergiesAgain = true;
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
    getScarvesItemsWithNbScarves(n) {
        var _a;
        let i = 0;
        const scarves = [];
        while (n > 0) {
            const scarf = (_a = this.scarvesItems[i]) !== null && _a !== void 0 ? _a : Item_1.Item.SILK_SCARF;
            n -= scarf === Item_1.Item.NULLIFY_BANDANNA ? 2 : 1;
            if (n >= 0) {
                scarves.push(scarf);
                i++;
            }
        }
        return scarves;
    }
    updateScarves(previousSynergies, updatedSynergies) {
        let needsRecomputingSynergiesAgain = false;
        const previousNbNormalScarves = (0, synergies_1.getSynergyStep)(previousSynergies, Synergy_1.Synergy.NORMAL);
        const previousScarves = this.getScarvesItemsWithNbScarves(previousNbNormalScarves);
        const newNbNormalScarves = (0, synergies_1.getSynergyStep)(updatedSynergies, Synergy_1.Synergy.NORMAL);
        const newScarves = this.getScarvesItemsWithNbScarves(newNbNormalScarves);
        if (newScarves.length > previousScarves.length) {
            const gainedScarves = newScarves.slice(previousScarves.length, newScarves.length);
            gainedScarves.forEach((item) => {
                this.items.push(item);
            });
        }
        else if (newScarves.length < previousScarves.length) {
            const lostScarves = [...previousScarves];
            newScarves.forEach((s) => (0, array_1.removeInArray)(lostScarves, s));
            const removeScarf = (item) => {
                const pokemons = (0, schemas_1.values)(this.board);
                for (const pokemon of pokemons) {
                    if (pokemon.items.has(item)) {
                        pokemon.removeItem(item, this);
                        if (item in Item_1.SynergyGivenByItem && !(0, board_1.isOnBench)(pokemon)) {
                            needsRecomputingSynergiesAgain = true;
                        }
                        return;
                    }
                }
                (0, array_1.removeInArray)(this.items, item);
            };
            lostScarves.forEach(removeScarf);
        }
        return needsRecomputingSynergiesAgain;
    }
    updateWeatherRocks() {
        const nbWeatherRocks = (0, synergies_1.getSynergyStep)(this.synergies, Synergy_1.Synergy.ROCK);
        let weatherRockInInventory;
        do {
            weatherRockInInventory = this.items.findIndex((item, index) => (0, array_1.isIn)(Item_1.WeatherRocks, item));
            if (weatherRockInInventory != -1) {
                this.items.splice(weatherRockInInventory, 1);
            }
        } while (weatherRockInInventory != -1);
        if (nbWeatherRocks > 0) {
            const rocksCollected = this.weatherRocks.slice(-nbWeatherRocks);
            this.items.push(...rocksCollected);
        }
    }
    updateTms(previousSynergies, updatedSynergies) {
        const previousNbTMs = (0, synergies_1.getSynergyStep)(previousSynergies, Synergy_1.Synergy.HUMAN);
        const newNbTMs = (0, synergies_1.getSynergyStep)(updatedSynergies, Synergy_1.Synergy.HUMAN);
        if (previousNbTMs < newNbTMs) {
            const gainedTMs = this.tms.slice(previousNbTMs, newNbTMs);
            this.items.push(...gainedTMs);
        }
        else if (newNbTMs < previousNbTMs) {
            const lostTMs = this.tms.slice(newNbTMs, previousNbTMs);
            lostTMs.forEach((tm) => {
                (0, array_1.removeInArray)(this.items, tm);
                const pokemonWithThisTm = (0, schemas_1.values)(this.board).find((p) => p.tm === Item_1.AbilityPerTM[tm]);
                if (pokemonWithThisTm) {
                    pokemonWithThisTm.tm = Ability_1.Ability.DEFAULT;
                    const baseData = (0, precomputed_pokemon_data_1.getPokemonData)(pokemonWithThisTm.name);
                    pokemonWithThisTm.skill = baseData.skill;
                    pokemonWithThisTm.maxPP = baseData.pp;
                }
            });
        }
    }
    updateFishingRods() {
        const fishingLevel = (0, synergies_1.getSynergyStep)(this.synergies, Synergy_1.Synergy.WATER);
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
    updateChefsHats() {
        var _a, _b;
        const gourmetLevel = (0, synergies_1.getSynergyStep)(this.synergies, Synergy_1.Synergy.GOURMET);
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
                    (_b = hatHolders.at(-1)) === null || _b === void 0 ? void 0 : _b.removeItem(Item_1.Item.CHEF_HAT, this);
                    hatHolders.pop();
                    currentNbHats--;
                }
            }
        } while (newNbHats !== currentNbHats);
    }
    updateFairyWands(previousSynergies, updatedSynergies) {
        var _a, _b;
        const previousFairyLevel = (0, synergies_1.getSynergyStep)(previousSynergies, Synergy_1.Synergy.FAIRY);
        const newFairyLevel = (0, synergies_1.getSynergyStep)(updatedSynergies, Synergy_1.Synergy.FAIRY);
        const nbWandsByLevel = [0, 1, 2, 3, 4];
        const previousNbWands = (_a = nbWandsByLevel[previousFairyLevel]) !== null && _a !== void 0 ? _a : 0;
        const newNbWands = (_b = nbWandsByLevel[newFairyLevel]) !== null && _b !== void 0 ? _b : 0;
        const currentNbWands = this.items.filter((item) => (0, array_1.isIn)(Item_1.Wands, item)).length;
        if (currentNbWands < newNbWands) {
            const gainedWands = this.fairyWands.slice(previousNbWands, newNbWands);
            if (gainedWands.length < newNbWands - currentNbWands &&
                newFairyLevel - 1 in config_1.FAIRY_WANDS_BY_SYNERGY_LEVEL &&
                this.choices.filter((c) => c.type === "wand").length === 0) {
                this.choices.push(new player_choice_1.PlayerChoice({
                    type: "wand",
                    items: (0, random_1.pickNRandomIn)(config_1.FAIRY_WANDS_BY_SYNERGY_LEVEL[newFairyLevel - 1], 3)
                }));
            }
            this.items.push(...gainedWands);
        }
        else if (newNbWands < previousNbWands) {
            const lostWands = this.fairyWands.slice(newNbWands, previousNbWands);
            lostWands.forEach((wand) => {
                (0, array_1.removeInArray)(this.items, wand);
            });
        }
    }
    updateRegionalPool(state, mapChanged, previousMap) {
        if (this.map === "town") {
            (0, schemas_1.resetArraySchema)(this.regionalPokemons, []);
            return;
        }
        const newRegionalPokemons = precomputed_pokemon_data_1.PRECOMPUTED_REGIONAL_MONS.filter((p) => new pokemon_1.PokemonClasses[p](p).isInRegion(this.map, state));
        if (mapChanged) {
            state.shop.resetRegionalPool(this);
            newRegionalPokemons.forEach((p) => {
                const isVariant = Object.values(Pokemon_1.PkmRegionalVariants).some((variants) => variants.includes(p));
                if ((0, precomputed_pokemon_data_1.getPokemonData)(p).stars === 1 && !isVariant) {
                    state.shop.addRegionalPokemon(p, this);
                }
            });
            if (state.specialGameRule === SpecialGameRule_1.SpecialGameRule.REGIONAL_SPECIALTIES) {
                if (previousMap) {
                    const { synergies: previousSynergies } = config_1.RegionDetails[previousMap];
                    previousSynergies.forEach((synergy) => {
                        var _a;
                        this.bonusSynergies.set(synergy, (0, number_1.min)(0)(((_a = this.bonusSynergies.get(synergy)) !== null && _a !== void 0 ? _a : 0) - 1));
                    });
                }
                const { synergies, regionalSpeciality } = config_1.RegionDetails[this.map];
                synergies.forEach((synergy) => {
                    var _a;
                    this.bonusSynergies.set(synergy, ((_a = this.bonusSynergies.get(synergy)) !== null && _a !== void 0 ? _a : 0) + 1);
                });
                this.updateSynergies();
                if (regionalSpeciality) {
                    this.board.forEach((pokemon) => {
                        if (pokemon.canEat && !pokemon.dishes.has(regionalSpeciality)) {
                            pokemon.dishes.add(regionalSpeciality);
                        }
                    });
                }
            }
            const burmys = (0, schemas_1.values)(this.board).filter((p) => p.passive === Passive_1.Passive.BURMY);
            if (burmys.length > 0 && state.stageLevel >= 20) {
                const cloakTypesByBurmy = new Map([
                    [Pokemon_1.Pkm.BURMY_PLANT, Synergy_1.Synergy.GRASS],
                    [Pokemon_1.Pkm.BURMY_SANDY, Synergy_1.Synergy.GROUND],
                    [Pokemon_1.Pkm.BURMY_TRASH, Synergy_1.Synergy.ARTIFICIAL]
                ]);
                const cloakTypes = burmys
                    .map((burmy) => cloakTypesByBurmy.get(burmy.name))
                    .filter((s) => s != null);
                if (cloakTypes.some((type) => { var _a; return ((_a = config_1.RegionDetails[this.map]) === null || _a === void 0 ? void 0 : _a.synergies.includes(type)) === false; })) {
                    const burmyEvolving = burmys[0];
                    burmyEvolving.evolutionRule.divergentEvolution = () => Pokemon_1.Pkm.MOTHIM;
                    const mothim = burmyEvolving.evolutionRule.evolve(burmyEvolving, this, state.stageLevel);
                    burmyEvolving.evolutionRule.afterEvolve(mothim, this, state.stageLevel);
                }
            }
        }
        newRegionalPokemons.sort((a, b) => (0, precomputed_pokemon_data_1.getPokemonData)(a).stars - (0, precomputed_pokemon_data_1.getPokemonData)(b).stars);
        (0, schemas_1.resetArraySchema)(this.regionalPokemons, newRegionalPokemons.filter((p, index, array) => {
            const pkm = (0, precomputed_pokemon_data_1.getPokemonData)(Pokemon_1.PkmFamily[p]);
            const evolution = pkm.evolution;
            const baseVariant = Pokemon_1.PkmRegionalBaseVariants[p];
            if (baseVariant) {
                const basePkm = (0, precomputed_pokemon_data_1.getPokemonData)(baseVariant);
                if (basePkm.additional) {
                    const addpickStages = {
                        [Game_1.Rarity.UNCOMMON]: config_1.AdditionalPicksStages[0],
                        [Game_1.Rarity.RARE]: config_1.AdditionalPicksStages[1],
                        [Game_1.Rarity.EPIC]: config_1.AdditionalPicksStages[2]
                    };
                    const addPickStage = addpickStages[basePkm.rarity];
                    if (addPickStage > 0 &&
                        (state.stageLevel < addPickStage ||
                            state.additionalPokemons.includes(baseVariant) === false)) {
                        return false;
                    }
                }
            }
            return (pkm.rarity !== Game_1.Rarity.UNIQUE &&
                pkm.rarity !== Game_1.Rarity.LEGENDARY &&
                array.findIndex((p2) => Pokemon_1.PkmFamily[p] === Pokemon_1.PkmFamily[p2]) === index &&
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
    registerPlayedPokemons() {
        let legendaryCount = 0;
        let count = 0;
        this.board.forEach((pokemon) => {
            if (!(0, board_1.isOnBench)(pokemon) && pokemon.passive !== Passive_1.Passive.INANIMATE) {
                count++;
                this.pokemonsPlayed.add(pokemon.name);
                if (pokemon.rarity === Game_1.Rarity.LEGENDARY) {
                    legendaryCount++;
                }
            }
        });
        if (legendaryCount >= 3) {
            this.titles.add(types_1.Title.LEGEND);
        }
        if (count >= 10) {
            this.titles.add(types_1.Title.DECURION);
        }
    }
    collectMulch(amount) {
        var _a;
        this.mulch += amount;
        if (this.mulch >= this.mulchCap) {
            this.mulch = this.mulch % this.mulchCap;
            const index = flower_pots_1.MulchStockCaps.indexOf(this.mulchCap);
            this.mulchCap = (_a = flower_pots_1.MulchStockCaps[index + 1]) !== null && _a !== void 0 ? _a : flower_pots_1.MulchStockCaps.at(-1);
            const mulchCollected = this.items.filter((i) => i === Item_1.Item.RICH_MULCH).length +
                this.flowerPots.reduce((acc, pot) => acc + pot.stars, 0) -
                8;
            this.items.push(mulchCollected >= 8 ? Item_1.Item.AMAZE_MULCH : Item_1.Item.RICH_MULCH);
        }
    }
    getFinalizedLines() {
        if (this.specialGameRule === SpecialGameRule_1.SpecialGameRule.FAMILY_OUTING)
            return new Set();
        const finals = new Set((0, schemas_1.values)(this.board)
            .filter((pokemon) => pokemon.final)
            .map((pokemon) => (0, pokemon_factory_1.getPokemonBaseline)(pokemon.name)));
        this.pokemonsTrainingInDojo.forEach((pokemonInDojo) => {
            if (pokemonInDojo.pokemon.final) {
                finals.add((0, pokemon_factory_1.getPokemonBaseline)(pokemonInDojo.pokemon.name));
            }
        });
        if (finals.has(Pokemon_1.Pkm.BURMY_PLANT)) {
            finals.add(Pokemon_1.Pkm.BURMY_TRASH);
            finals.add(Pokemon_1.Pkm.BURMY_SANDY);
        }
        return finals;
    }
    completeMissionOrder(missionOrder) {
        (0, array_1.removeInArray)(this.items, missionOrder);
        this.spawnWanderingPokemon({
            shiny: false,
            pkm: Pokemon_1.Pkm.CHATOT,
            type: Wanderer_1.WandererType.DIALOG,
            behavior: Wanderer_1.WandererBehavior.SPECTATE
        });
        setTimeout(() => {
            this.addMoney(30, true, null);
        }, 7000);
    }
    chargeCellBattery(amount) {
        this.cellBattery += amount;
        if (this.cellBattery >= 100) {
            this.items.push(Item_1.Item.CELL_BATTERY);
            this.cellBattery %= 100;
        }
    }
    updateGameStats(state) {
        var _a;
        const simulation = state.simulations.get(this.simulationId);
        if (!simulation)
            return;
        const team = simulation.entities.filter((e) => e.team === this.team);
        this.gameStats.maxAP = Math.max(this.gameStats.maxAP, ...team.flatMap((e) => e.ap));
        this.gameStats.maxAttack = Math.max(this.gameStats.maxAttack, ...team.flatMap((e) => e.atk));
        this.gameStats.maxDefense = Math.max(this.gameStats.maxDefense, ...team.flatMap((e) => e.def));
        this.gameStats.maxSpecialDefense = Math.max(this.gameStats.maxSpecialDefense, ...team.flatMap((e) => e.speDef));
        this.gameStats.maxHP = Math.max(this.gameStats.maxHP, ...team.flatMap((e) => e.hp));
        this.gameStats.maxSpeed = Math.max(this.gameStats.maxSpeed, ...team.flatMap((e) => e.speed));
        const dps = simulation.getDpsMeter(this.id);
        if (dps) {
            const dpsList = (0, schemas_1.values)(dps);
            this.gameStats.maxHeal = Math.max(this.gameStats.maxHeal, ...dpsList.map((d) => d.heal));
            this.gameStats.maxShield = Math.max(this.gameStats.maxShield, ...dpsList.map((d) => d.shield));
            this.gameStats.maxPhysicalDamage = Math.max(this.gameStats.maxPhysicalDamage, ...dpsList.map((d) => d.physicalDamage));
            this.gameStats.maxSpecialDamage = Math.max(this.gameStats.maxSpecialDamage, ...dpsList.map((d) => d.specialDamage));
            this.gameStats.maxTrueDamage = Math.max(this.gameStats.maxTrueDamage, ...dpsList.map((d) => d.trueDamage));
        }
        if (((_a = this.history.at(-1)) === null || _a === void 0 ? void 0 : _a.result) === Game_1.BattleResult.WIN) {
            this.gameStats.maxWinStreak = Math.max(this.gameStats.maxWinStreak, this.streak);
        }
    }
    spawnWanderingPokemon({ pkm, type, behavior, data, delay = 0, shiny = (0, random_1.chance)(0.01) }) {
        const id = crypto.randomUUID();
        const wanderer = new wanderer_1.Wanderer({
            id,
            pkm,
            type,
            behavior,
            data,
            shiny
        });
        setTimeout(() => {
            this.wanderers.set(id, wanderer);
        }, delay);
        return wanderer;
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
    (0, schema_1.view)(),
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
    (0, schema_1.view)(),
    (0, schema_1.type)("boolean")
], Player.prototype, "shopLocked", void 0);
__decorate([
    (0, schema_1.view)(),
    (0, schema_1.type)("uint8")
], Player.prototype, "shopFreeRolls", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "streak", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "maxInterest", void 0);
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
    (0, schema_1.type)(["string"])
], Player.prototype, "scarvesItems", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], Player.prototype, "fairyWands", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "rank", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Player.prototype, "elo", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], Player.prototype, "games", void 0);
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
    (0, schema_1.type)([player_choice_1.PlayerChoice])
], Player.prototype, "choices", void 0);
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
], Player.prototype, "berryTreesStages", void 0);
__decorate([
    (0, schema_1.type)([pokemon_1.Pokemon])
], Player.prototype, "flowerPots", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "mulch", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "mulchCap", void 0);
__decorate([
    (0, schema_1.type)(["uint8"])
], Player.prototype, "groundHoles", void 0);
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
    (0, schema_1.type)("float32")
], Player.prototype, "eggChance", void 0);
__decorate([
    (0, schema_1.type)("float32")
], Player.prototype, "goldenEggChance", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], Player.prototype, "cellBattery", void 0);
__decorate([
    (0, schema_1.type)({ map: wanderer_1.Wanderer })
], Player.prototype, "wanderers", void 0);
__decorate([
    (0, schema_1.type)(game_stats_1.GameStatsSchema)
], Player.prototype, "gameStats", void 0);
function pickRandomTMs() {
    const bronzeTM = (0, random_1.pickRandomIn)(Item_1.TMsBronze);
    const silverTM = (0, random_1.pickRandomIn)(Item_1.TMsSilver);
    const goldTM = (0, random_1.pickRandomIn)(Item_1.TMsGold);
    return [bronzeTM, silverTM, goldTM];
}
function initBuriedItems() {
    const buriedItems = new Array(24).fill(null);
    for (let i = 0; i < 3; i++) {
        buriedItems[i] = (0, random_1.pickRandomIn)(Item_1.SynergyGemsBuried);
    }
    for (let i = 3; i < 7; i++) {
        buriedItems[i] = (0, random_1.pickRandomIn)([
            Item_1.Item.TRASH,
            Item_1.Item.LEFTOVERS,
            Item_1.Item.COIN,
            Item_1.Item.NUGGET,
            Item_1.Item.FOSSIL_STONE
        ]);
    }
    buriedItems[7] = (0, random_1.chance)(1 / 2)
        ? (0, random_1.pickRandomIn)(Item_1.ToolsBuried)
        : (0, random_1.pickRandomIn)([Item_1.Item.TREASURE_BOX, Item_1.Item.BIG_NUGGET]);
    (0, random_1.shuffleArray)(buriedItems);
    return buriedItems;
}
function initFlowerPots(player) {
    return [
        Pokemon_1.Pkm.HOPPIP,
        Pokemon_1.Pkm.BELLSPROUT,
        Pokemon_1.Pkm.CHIKORITA,
        Pokemon_1.Pkm.ODDISH,
        Pokemon_1.Pkm.BELLOSSOM
    ].map((pkm) => {
        const pokemon = pokemon_factory_1.default.createPokemonFromName(pkm, player);
        pokemon.action = Game_1.PokemonActionState.SLEEP;
        return pokemon;
    });
}
//# sourceMappingURL=player.js.map