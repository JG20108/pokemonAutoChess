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
const config_1 = require("../../config");
const bot_manager_1 = __importDefault(require("../../core/bot-manager"));
const simulation_1 = __importDefault(require("../../core/simulation"));
const floating_item_1 = require("../../models/colyseus-models/floating-item");
const player_1 = __importDefault(require("../../models/colyseus-models/player"));
const pokemon_avatar_1 = require("../../models/colyseus-models/pokemon-avatar");
const portal_1 = require("../../models/colyseus-models/portal");
const shop_1 = __importDefault(require("../../models/shop"));
const Game_1 = require("../../types/enum/Game");
const SpecialGameRule_1 = require("../../types/enum/SpecialGameRule");
const Weather_1 = require("../../types/enum/Weather");
const random_1 = require("../../utils/random");
class GameState extends schema_1.Schema {
    constructor(preparationId, name, noElo, gameMode, minRank, maxRank, specialGameRule) {
        super();
        this.afterGameId = "";
        this.roundTime = config_1.StageDuration[0];
        this.phase = Game_1.GamePhaseState.TOWN;
        this.players = new schema_1.MapSchema();
        this.avatars = new schema_1.MapSchema();
        this.floatingItems = new schema_1.MapSchema();
        this.portals = new schema_1.MapSchema();
        this.symbols = new schema_1.MapSchema();
        this.additionalPokemons = new schema_1.ArraySchema();
        this.stageLevel = 0;
        this.shinyEncounter = false;
        this.noElo = false;
        this.gameMode = Game_1.GameMode.CUSTOM_LOBBY;
        this.spectators = new schema_1.SetSchema();
        this.simulations = new schema_1.MapSchema();
        this.lightX = (0, random_1.randomBetween)(0, config_1.BOARD_WIDTH - 1);
        this.lightY = (0, random_1.randomBetween)(1, config_1.BOARD_HEIGHT / 2);
        this.specialGameRule = null;
        this.townEncounter = null;
        this.time = config_1.StageDuration[0] * 1000;
        this.updatePhaseNeeded = false;
        this.botManager = new bot_manager_1.default();
        this.shop = new shop_1.default();
        this.simulationPaused = false;
        this.gameFinished = false;
        this.gameLoaded = false;
        this.endTime = undefined;
        this.townEncounters = new Set();
        this.pveRewards = [];
        this.pveRewardsPropositions = [];
        this.minRank = null;
        this.maxRank = null;
        this.outlawStage = null;
        this.treasureBoxRewardGiven = (0, config_1.getTreasureBoxReward)();
        this.preparationId = preparationId;
        this.startTime = Date.now();
        this.name = name;
        this.noElo = noElo;
        this.gameMode = gameMode;
        this.minRank = minRank;
        this.maxRank = maxRank;
        this.weather = Weather_1.Weather.NEUTRAL;
        if (gameMode === Game_1.GameMode.SCRIBBLE) {
            this.specialGameRule = (0, random_1.pickRandomIn)(Object.values(SpecialGameRule_1.SpecialGameRule));
        }
        else {
            this.specialGameRule = specialGameRule;
        }
    }
}
exports.default = GameState;
__decorate([
    (0, schema_1.type)("string")
], GameState.prototype, "afterGameId", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], GameState.prototype, "roundTime", void 0);
__decorate([
    (0, schema_1.type)("uint8")
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
    (0, schema_1.type)(["string"])
], GameState.prototype, "additionalPokemons", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], GameState.prototype, "stageLevel", void 0);
__decorate([
    (0, schema_1.type)("string")
], GameState.prototype, "weather", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], GameState.prototype, "shinyEncounter", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], GameState.prototype, "noElo", void 0);
__decorate([
    (0, schema_1.type)("string")
], GameState.prototype, "gameMode", void 0);
__decorate([
    (0, schema_1.type)({ set: "string" })
], GameState.prototype, "spectators", void 0);
__decorate([
    (0, schema_1.type)({ map: simulation_1.default })
], GameState.prototype, "simulations", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], GameState.prototype, "lightX", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], GameState.prototype, "lightY", void 0);
__decorate([
    (0, schema_1.type)("string")
], GameState.prototype, "specialGameRule", void 0);
__decorate([
    (0, schema_1.type)("string")
], GameState.prototype, "townEncounter", void 0);
//# sourceMappingURL=game-state.js.map