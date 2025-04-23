"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const bot_manager_1 = __importDefault(require("../../core/bot-manager"));
const simulation_1 = __importDefault(require("../../core/simulation"));
const floating_item_1 = require("../../models/colyseus-models/floating-item");
const player_1 = __importDefault(require("../../models/colyseus-models/player"));
const pokemon_avatar_1 = require("../../models/colyseus-models/pokemon-avatar");
const portal_1 = require("../../models/colyseus-models/portal");
const shop_1 = __importDefault(require("../../models/shop"));
const Config_1 = require("../../types/Config");
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
class GameState extends schema_1.Schema {
    constructor(options, players, gameMode, specialGameRule, seed) {
        super();
        this.afterGameId = '';
        this.roundTime = Config_1.StageDuration[0];
        this.phase = Game_1.GamePhaseState.TOWN;
        this.players = new schema_1.MapSchema();
        this.avatars = new schema_1.MapSchema();
        this.floatingItems = new schema_1.MapSchema();
        this.portals = new schema_1.MapSchema();
        this.symbols = new schema_1.MapSchema();
        this.additionalPokemons = new schema_1.ArraySchema();
        this.stageLevel = 0;
        this.noElo = false;
        this.gameMode = Game_1.GameMode.CUSTOM_LOBBY;
        this.spectators = new schema_1.SetSchema();
        this.simulations = new schema_1.MapSchema();
        this.lightX = (0, random_1.randomBetween)(0, Config_1.BOARD_WIDTH - 1);
        this.lightY = (0, random_1.randomBetween)(1, Config_1.BOARD_HEIGHT / 2);
        this.specialGameRule = null;
        this.townEncounter = null;
        this.time = Config_1.StageDuration[0] * 1000;
        this.updatePhaseNeeded = false;
        this.gameFinished = false;
        this.gameLoaded = false;
        this.name = '';
        this.startTime = 0;
        this.endTime = undefined;
        this.preparationId = '';
        this.shinyEncounter = false;
        this.seed = 0;
        this.turn = 0;
        this.phaseStartedAt = 0;
        this.phaseEndedAt = 0;
        this.history = [];
        this.shopLocked = false;
        this.levelCost = 4;
        this.levelMaxExp = 4;
        this.expPerBattle = 1;
        this.expPerBuy = 4;
        this.rerollCost = 1;
        this.pokemonPrices = [1, 1, 2, 3, 4, 5];
        this.pokemonPerShop = 5;
        this.maxLevel = 9;
        this.maxPokemonPerTeam = 9;
        this.maxItemPerPokemon = 3;
        this.maxCopiesPerPokemon = 3;
        this.maxCopiesPerItem = 1;
        this.maxTeamCost = 30;
        this.maxLife = 20;
        this.maxMana = 100;
        this.boosterDropRate = 0.15;
        this.shinyRate = 0.01;
        this.weatherDuration = 0;
        this.weatherStartedAt = 0;
        this.status = '';
        this.statusStartedAt = 0;
        this.statusEndedAt = 0;
        this.statusMessage = '';
        this.statusMessageStartedAt = 0;
        this.statusMessageEndedAt = 0;
        this.minRank = null;
        this.maxRank = null;
        this.botManager = new bot_manager_1.default();
        this.shop = new shop_1.default();
        this.townEncounters = new Set();
        this.pveRewards = [];
        this.pveRewardsPropositions = [];
        this.wanderers = new Map();
        this.preparationId = options.preparationId;
        this.startTime = Date.now();
        this.name = options.name;
        this.noElo = options.noElo;
        this.gameMode = gameMode;
        this.minRank = options.minRank;
        this.maxRank = options.maxRank;
        this.weather = options.weather;
        this.specialGameRule = specialGameRule !== null && specialGameRule !== void 0 ? specialGameRule : null;
        this.seed = seed ? Number(seed) : 0;
        this.turn = 0;
        this.phase = options.phase;
        this.phaseStartedAt = Date.now();
        this.phaseEndedAt = Date.now() + options.PICK_PHASE_DURATION;
        this.status = options.status;
        this.statusStartedAt = Date.now();
    }
}
exports.default = GameState;
__decorate([
    (0, schema_1.type)('string')
], GameState.prototype, "afterGameId", void 0);
__decorate([
    (0, schema_1.type)('uint8')
], GameState.prototype, "roundTime", void 0);
__decorate([
    (0, schema_1.type)('uint8')
], GameState.prototype, "phase", void 0);
__decorate([
    (0, schema_1.type)({ map: player_1.default })
], GameState.prototype, "players", void 0);
__decorate([
    (0, schema_1.type)({ map: pokemon_avatar_1.PokemonAvatarModel })
], GameState.prototype, "avatars", void 0);
__decorate([
    (0, schema_1.type)({ map: floating_item_1.FloatingItem })
], GameState.prototype, "floatingItems", void 0);
__decorate([
    (0, schema_1.type)({ map: portal_1.Portal })
], GameState.prototype, "portals", void 0);
__decorate([
    (0, schema_1.type)({ map: portal_1.SynergySymbol })
], GameState.prototype, "symbols", void 0);
__decorate([
    (0, schema_1.type)(['string'])
], GameState.prototype, "additionalPokemons", void 0);
__decorate([
    (0, schema_1.type)('uint8')
], GameState.prototype, "stageLevel", void 0);
__decorate([
    (0, schema_1.type)('string')
], GameState.prototype, "weather", void 0);
__decorate([
    (0, schema_1.type)('boolean')
], GameState.prototype, "noElo", void 0);
__decorate([
    (0, schema_1.type)('string')
], GameState.prototype, "gameMode", void 0);
__decorate([
    (0, schema_1.type)({ set: 'string' })
], GameState.prototype, "spectators", void 0);
__decorate([
    (0, schema_1.type)({ map: simulation_1.default })
], GameState.prototype, "simulations", void 0);
__decorate([
    (0, schema_1.type)('uint8')
], GameState.prototype, "lightX", void 0);
__decorate([
    (0, schema_1.type)('uint8')
], GameState.prototype, "lightY", void 0);
__decorate([
    (0, schema_1.type)('string')
], GameState.prototype, "specialGameRule", void 0);
__decorate([
    (0, schema_1.type)('string')
], GameState.prototype, "townEncounter", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "time", void 0);
__decorate([
    (0, schema_1.type)('boolean')
], GameState.prototype, "updatePhaseNeeded", void 0);
__decorate([
    (0, schema_1.type)('boolean')
], GameState.prototype, "gameFinished", void 0);
__decorate([
    (0, schema_1.type)('boolean')
], GameState.prototype, "gameLoaded", void 0);
__decorate([
    (0, schema_1.type)('string')
], GameState.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "startTime", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "endTime", void 0);
__decorate([
    (0, schema_1.type)('string')
], GameState.prototype, "preparationId", void 0);
__decorate([
    (0, schema_1.type)('boolean')
], GameState.prototype, "shinyEncounter", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "seed", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "turn", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "phaseStartedAt", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "phaseEndedAt", void 0);
__decorate([
    (0, schema_1.type)(['string'])
], GameState.prototype, "history", void 0);
__decorate([
    (0, schema_1.type)('boolean')
], GameState.prototype, "shopLocked", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "levelCost", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "levelMaxExp", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "expPerBattle", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "expPerBuy", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "rerollCost", void 0);
__decorate([
    (0, schema_1.type)(['number'])
], GameState.prototype, "pokemonPrices", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "pokemonPerShop", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "maxLevel", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "maxPokemonPerTeam", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "maxItemPerPokemon", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "maxCopiesPerPokemon", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "maxCopiesPerItem", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "maxTeamCost", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "maxLife", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "maxMana", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "boosterDropRate", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "shinyRate", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "weatherDuration", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "weatherStartedAt", void 0);
__decorate([
    (0, schema_1.type)('string')
], GameState.prototype, "status", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "statusStartedAt", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "statusEndedAt", void 0);
__decorate([
    (0, schema_1.type)('string')
], GameState.prototype, "statusMessage", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "statusMessageStartedAt", void 0);
__decorate([
    (0, schema_1.type)('number')
], GameState.prototype, "statusMessageEndedAt", void 0);
__decorate([
    (0, schema_1.type)('string')
], GameState.prototype, "minRank", void 0);
__decorate([
    (0, schema_1.type)('string')
], GameState.prototype, "maxRank", void 0);
//# sourceMappingURL=game-state.js.map