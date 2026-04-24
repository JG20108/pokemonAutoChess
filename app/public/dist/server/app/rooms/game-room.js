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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@colyseus/command");
const colyseus_1 = require("colyseus");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const config_1 = require("../config");
const gadgets_1 = require("../config/game/gadgets");
const elo_1 = require("../core/elo");
const evolution_rules_1 = require("../core/evolution-rules");
const mini_game_1 = require("../core/mini-game");
const pending_game_manager_1 = require("../core/pending-game-manager");
const player_1 = __importDefault(require("../models/colyseus-models/player"));
const expeditions_1 = require("../models/expeditions");
const bot_v2_1 = require("../models/mongo-models/bot-v2");
const detailled_statistic_v2_1 = __importDefault(require("../models/mongo-models/detailled-statistic-v2"));
const user_metadata_1 = __importStar(require("../models/mongo-models/user-metadata"));
const pokemon_factory_1 = __importDefault(require("../models/pokemon-factory"));
const precomputed_pokemon_data_1 = require("../models/precomputed/precomputed-pokemon-data");
const precomputed_rarity_1 = require("../models/precomputed/precomputed-rarity");
const shop_1 = require("../models/shop");
const titles_1 = require("../models/titles");
const leaderboard_1 = require("../services/leaderboard");
const notifications_1 = require("../services/notifications");
const types_1 = require("../types");
const CloseCodes_1 = require("../types/enum/CloseCodes");
const Game_1 = require("../types/enum/Game");
const Passive_1 = require("../types/enum/Passive");
const Pokemon_1 = require("../types/enum/Pokemon");
const SpecialGameRule_1 = require("../types/enum/SpecialGameRule");
const events_1 = require("../types/events");
const array_1 = require("../utils/array");
const avatar_1 = require("../utils/avatar");
const board_1 = require("../utils/board");
const date_1 = require("../utils/date");
const elo_2 = require("../utils/elo");
const logger_1 = require("../utils/logger");
const number_1 = require("../utils/number");
const random_1 = require("../utils/random");
const schemas_1 = require("../utils/schemas");
const game_commands_1 = require("./commands/game-commands");
const game_state_1 = __importDefault(require("./states/game-state"));
class GameRoom extends colyseus_1.Room {
    constructor() {
        super();
        this.dispatcher = new command_1.Dispatcher(this);
        this.additionalUncommonPool = new Array();
        this.additionalRarePool = new Array();
        this.additionalEpicPool = new Array();
        this.miniGame = new mini_game_1.MiniGame(this);
    }
    onCreate(_a) {
        return __awaiter(this, arguments, void 0, function* ({ users, preparationId, name, ownerName, noElo, gameMode, specialGameRule, minRank, maxRank, tournamentId, bracketId }) {
            logger_1.logger.info("Create Game ", this.roomId);
            this.onRoomDeleted = this.onRoomDeleted.bind(this);
            this.presence.subscribe("room-deleted", this.onRoomDeleted);
            if (gameMode === Game_1.GameMode.RANKED) {
                name = `${(0, elo_2.formatMinMaxRanks)(minRank, maxRank)} ${name}`;
            }
            if (gameMode === Game_1.GameMode.RANKED || gameMode === Game_1.GameMode.TOURNAMENT) {
                this.autoDispose = false;
            }
            this.setMetadata({
                name,
                ownerName,
                gameMode,
                playerIds: Object.keys(users).filter((id) => users[id].isBot === false),
                playersInfo: Object.keys(users).map((u) => `${users[u].name} [${users[u].elo}]`),
                stageLevel: 0,
                type: "game",
                tournamentId,
                bracketId
            });
            this.state = new game_state_1.default(preparationId, name, noElo, gameMode, minRank, maxRank, specialGameRule);
            this.miniGame.create(this.state.avatars, this.state.floatingItems, this.state.portals, this.state.symbols);
            this.additionalUncommonPool = (0, shop_1.getAdditionalsTier1)(precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.UNCOMMON);
            this.additionalRarePool = (0, shop_1.getAdditionalsTier1)(precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.RARE);
            this.additionalEpicPool = (0, shop_1.getAdditionalsTier1)(precomputed_rarity_1.PRECOMPUTED_POKEMONS_PER_RARITY.EPIC);
            if (this.state.specialGameRule !== SpecialGameRule_1.SpecialGameRule.EVERYONE_IS_HERE) {
                const now = new Date();
                const year = now.getFullYear();
                const date = new Date(year, now.getMonth(), now.getDate());
                let season;
                const springStart = new Date(year, 2, 20);
                const summerStart = new Date(year, 5, 22);
                const autumnStart = new Date(year, 8, 23);
                const winterStart = new Date(year, 11, 21);
                if (date >= springStart && date < summerStart) {
                    season = "spring";
                }
                else if (date >= summerStart && date < autumnStart) {
                    season = "summer";
                }
                else if (date >= autumnStart && date < winterStart) {
                    season = "autumn";
                }
                else {
                    season = "winter";
                }
                this.additionalRarePool = this.additionalRarePool.filter((p) => {
                    if ((p === Pokemon_1.Pkm.DEERLING_SPRING && season !== "spring") ||
                        (p === Pokemon_1.Pkm.DEERLING_SUMMER && season !== "summer") ||
                        (p === Pokemon_1.Pkm.DEERLING_AUTUMN && season !== "autumn") ||
                        (p === Pokemon_1.Pkm.DEERLING_WINTER && season !== "winter")) {
                        return false;
                    }
                    return true;
                });
            }
            (0, random_1.shuffleArray)(this.additionalUncommonPool);
            (0, random_1.shuffleArray)(this.additionalRarePool);
            (0, random_1.shuffleArray)(this.additionalEpicPool);
            if (this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.EVERYONE_IS_HERE) {
                this.additionalUncommonPool.forEach((p) => this.state.shop.addAdditionalPokemon(p, this.state));
                this.additionalRarePool.forEach((p) => this.state.shop.addAdditionalPokemon(p, this.state));
                this.additionalEpicPool.forEach((p) => this.state.shop.addAdditionalPokemon(p, this.state));
            }
            yield Promise.all(Object.keys(users).map((id) => __awaiter(this, void 0, void 0, function* () {
                const user = users[id];
                if (user.isBot) {
                    const player = new player_1.default(user.uid, user.name, user.elo, user.games + 1, user.avatar, true, this.state.players.size + 1, new Map(), "", types_1.Role.BOT, this.state);
                    this.state.players.set(user.uid, player);
                    this.state.botManager.addBot(player);
                }
                else {
                    const leanUser = yield user_metadata_1.default.findOne({ uid: id }).lean();
                    const user = leanUser ? (0, user_metadata_1.toLeanUserMetadata)(leanUser) : null;
                    if (user) {
                        const player = new player_1.default(user.uid, user.displayName, user.elo, user.games + 1, user.avatar, false, this.state.players.size + 1, user.pokemonCollection, user.title, user.role, this.state);
                        this.state.players.set(user.uid, player);
                        this.state.shop.assignShop(player, false, this.state);
                        if (this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.EVERYONE_IS_HERE) {
                            precomputed_pokemon_data_1.PRECOMPUTED_REGIONAL_MONS.forEach((p) => {
                                if ((0, precomputed_pokemon_data_1.getPokemonData)(p).stars === 1) {
                                    this.state.shop.addRegionalPokemon(p, player);
                                }
                            });
                        }
                    }
                }
            })));
            this.clock.setTimeout(() => {
                if (this.state.gameLoaded)
                    return;
                this.broadcast(types_1.Transfer.LOADING_COMPLETE);
                this.state.players.forEach((player) => {
                    (0, pending_game_manager_1.clearPendingGame)(this.presence, player.id);
                });
                this.startGame();
            }, config_1.MAX_LOADING_TIME);
            this.onMessage(types_1.Transfer.ITEM, (client, item) => {
                if (!this.state.gameFinished && client.auth) {
                    try {
                        this.pickItemProposition(client.auth.uid, item);
                    }
                    catch (error) {
                        logger_1.logger.error(error);
                    }
                }
            });
            this.onMessage(types_1.Transfer.SHOP, (client, message) => {
                if (!this.state.gameFinished && client.auth) {
                    try {
                        this.dispatcher.dispatch(new game_commands_1.OnBuyPokemonCommand(), {
                            playerId: client.auth.uid,
                            index: message.id
                        });
                        (0, pending_game_manager_1.clearPendingGame)(this.presence, client.auth.uid);
                    }
                    catch (error) {
                        logger_1.logger.error("shop error", message, error);
                    }
                }
            });
            this.onMessage(types_1.Transfer.REMOVE_FROM_SHOP, (client, index) => {
                if (!this.state.gameFinished && client.auth) {
                    try {
                        this.dispatcher.dispatch(new game_commands_1.OnRemoveFromShopCommand(), {
                            playerId: client.auth.uid,
                            index
                        });
                    }
                    catch (error) {
                        logger_1.logger.error("remove from shop error", index, error);
                    }
                }
            });
            this.onMessage(types_1.Transfer.POKEMON_PROPOSITION, (client, pkm) => {
                if (!this.state.gameFinished && client.auth) {
                    try {
                        this.pickPokemonProposition(client.auth.uid, pkm);
                    }
                    catch (error) {
                        logger_1.logger.error(error);
                    }
                }
            });
            this.onMessage(types_1.Transfer.DRAG_DROP, (client, message) => {
                if (!this.state.gameFinished) {
                    try {
                        this.dispatcher.dispatch(new game_commands_1.OnDragDropPokemonCommand(), {
                            client: client,
                            detail: message
                        });
                        (0, pending_game_manager_1.clearPendingGame)(this.presence, client.auth.uid);
                    }
                    catch (error) {
                        const errorInformation = {
                            updateBoard: true,
                            updateItems: true
                        };
                        client.send(types_1.Transfer.DRAG_DROP_CANCEL, errorInformation);
                        logger_1.logger.error("drag drop error", error);
                    }
                }
            });
            this.onMessage(types_1.Transfer.DRAG_DROP_ITEM, (client, message) => {
                if (!this.state.gameFinished) {
                    try {
                        this.dispatcher.dispatch(new game_commands_1.OnDragDropItemCommand(), {
                            client: client,
                            detail: message
                        });
                    }
                    catch (error) {
                        const errorInformation = {
                            updateBoard: true,
                            updateItems: true
                        };
                        client.send(types_1.Transfer.DRAG_DROP_CANCEL, errorInformation);
                        logger_1.logger.error("drag drop error", error);
                    }
                }
            });
            this.onMessage(types_1.Transfer.DRAG_DROP_COMBINE, (client, message) => {
                if (!this.state.gameFinished) {
                    try {
                        this.dispatcher.dispatch(new game_commands_1.OnDragDropCombineCommand(), {
                            client: client,
                            detail: message
                        });
                    }
                    catch (error) {
                        const errorInformation = {
                            updateBoard: true,
                            updateItems: true
                        };
                        client.send(types_1.Transfer.DRAG_DROP_CANCEL, errorInformation);
                        logger_1.logger.error("drag drop error", error);
                    }
                }
            });
            this.onMessage(types_1.Transfer.VECTOR, (client, message) => {
                try {
                    if (client.auth) {
                        this.miniGame.applyVector(client.auth.uid, message.x, message.y);
                    }
                }
                catch (error) {
                    logger_1.logger.error(error);
                }
            });
            this.onMessage(types_1.Transfer.SELL_POKEMON, (client, pokemonId) => {
                if (!this.state.gameFinished && client.auth) {
                    try {
                        this.dispatcher.dispatch(new game_commands_1.OnSellPokemonCommand(), {
                            client,
                            pokemonId
                        });
                    }
                    catch (error) {
                        logger_1.logger.error("sell drop error", pokemonId);
                    }
                }
            });
            this.onMessage(types_1.Transfer.REFRESH, (client, message) => {
                if (!this.state.gameFinished && client.auth) {
                    try {
                        this.dispatcher.dispatch(new game_commands_1.OnShopRerollCommand(), client.auth.uid);
                    }
                    catch (error) {
                        logger_1.logger.error("refresh error", message);
                    }
                }
            });
            this.onMessage(types_1.Transfer.LOCK, (client, message) => {
                if (!this.state.gameFinished && client.auth) {
                    try {
                        this.dispatcher.dispatch(new game_commands_1.OnLockCommand(), client.auth.uid);
                    }
                    catch (error) {
                        logger_1.logger.error("lock error", message);
                    }
                }
            });
            this.onMessage(types_1.Transfer.SWITCH_BENCH_AND_BOARD, (client, pokemonId) => {
                if (!this.state.gameFinished && client.auth) {
                    try {
                        this.dispatcher.dispatch(new game_commands_1.OnSwitchBenchAndBoardCommand(), {
                            client,
                            pokemonId
                        });
                    }
                    catch (error) {
                        logger_1.logger.error("sell drop error", pokemonId);
                    }
                }
            });
            this.onMessage(types_1.Transfer.SPECTATE, (client, spectatedPlayerId) => {
                if (client.auth) {
                    try {
                        if (!client.userData)
                            client.userData = {};
                        client.userData.spectatedPlayerId = spectatedPlayerId;
                        this.dispatcher.dispatch(new game_commands_1.OnSpectateCommand(), {
                            id: client.auth.uid,
                            spectatedPlayerId
                        });
                    }
                    catch (error) {
                        logger_1.logger.error("spectate error", client.auth.uid, spectatedPlayerId);
                    }
                }
            });
            this.onMessage(types_1.Transfer.LEVEL_UP, (client, message) => {
                if (!this.state.gameFinished && client.auth) {
                    try {
                        this.dispatcher.dispatch(new game_commands_1.OnLevelUpCommand(), client.auth.uid);
                    }
                    catch (error) {
                        logger_1.logger.error("level up error", message);
                    }
                }
            });
            this.onMessage(types_1.Transfer.SHOW_EMOTE, (client, message) => {
                if (client.auth) {
                    this.broadcast(types_1.Transfer.SHOW_EMOTE, {
                        id: client.auth.uid,
                        emote: message
                    });
                }
            });
            this.onMessage(types_1.Transfer.WANDERER_CLICKED, (client, msg) => __awaiter(this, void 0, void 0, function* () {
                if (client.auth) {
                    try {
                        this.dispatcher.dispatch(new game_commands_1.OnPokemonCatchCommand(), {
                            client,
                            playerId: client.auth.uid,
                            id: msg.id
                        });
                    }
                    catch (e) {
                        logger_1.logger.error("catch wandering error", e);
                    }
                }
            }));
            this.onMessage(types_1.Transfer.PICK_BERRY, (client, index) => __awaiter(this, void 0, void 0, function* () {
                if (!this.state.gameFinished && client.auth) {
                    try {
                        this.dispatcher.dispatch(new game_commands_1.OnPickBerryCommand(), {
                            playerId: client.auth.uid,
                            berryIndex: index
                        });
                    }
                    catch (error) {
                        logger_1.logger.error("error picking berry", error);
                    }
                }
            }));
            this.onMessage(types_1.Transfer.LOADING_PROGRESS, (client, progress) => {
                if (client.auth) {
                    const player = this.state.players.get(client.auth.uid);
                    if (player) {
                        player.loadingProgress = progress;
                    }
                }
            });
            this.onMessage(types_1.Transfer.LOADING_COMPLETE, (client) => {
                if (client.auth) {
                    const player = this.state.players.get(client.auth.uid);
                    if (player) {
                        player.loadingProgress = 100;
                        (0, pending_game_manager_1.clearPendingGame)(this.presence, client.auth.uid);
                    }
                    if (this.state.gameLoaded) {
                        client.send(types_1.Transfer.LOADING_COMPLETE);
                    }
                    else if ((0, schemas_1.values)(this.state.players).every((p) => p.loadingProgress === 100)) {
                        this.broadcast(types_1.Transfer.LOADING_COMPLETE);
                        this.startGame();
                    }
                }
            });
            this.onMessage(types_1.Transfer.OVERWRITE_BOARD, (client, board) => {
                if (client.auth) {
                    const player = this.state.players.get(client.auth.uid);
                    if ((player === null || player === void 0 ? void 0 : player.role) !== types_1.Role.ADMIN)
                        return;
                    try {
                        this.dispatcher.dispatch(new game_commands_1.OnOverwriteBoardCommand(), {
                            playerId: client.auth.uid,
                            board
                        });
                    }
                    catch (error) {
                        logger_1.logger.error("overwrite board error", error);
                    }
                }
            });
        });
    }
    startGame() {
        if (this.state.gameLoaded)
            return;
        this.state.gameLoaded = true;
        this.setSimulationInterval((deltaTime) => {
            deltaTime = Math.min(config_1.MAX_SIMULATION_DELTA_TIME, deltaTime);
            if (!this.state.gameFinished && !this.state.simulationPaused) {
                try {
                    this.dispatcher.dispatch(new game_commands_1.OnUpdateCommand(), { deltaTime });
                }
                catch (error) {
                    logger_1.logger.error("update error", error);
                }
            }
        });
        this.state.botManager.updateBots();
        this.miniGame.initialize(this.state, this);
    }
    onAuth(client, options, context) {
        const _super = Object.create(null, {
            onAuth: { get: () => super.onAuth }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                _super.onAuth.call(this, client, options, context);
                const token = yield firebase_admin_1.default.auth().verifyIdToken(options.idToken);
                const user = yield firebase_admin_1.default.auth().getUser(token.uid);
                if (!user.displayName) {
                    logger_1.logger.error("No display name for this account", user.uid);
                    throw new Error("No display name for this account. Please report this error.");
                }
                return user;
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
    onJoin(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const userProfile = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
            if (userProfile === null || userProfile === void 0 ? void 0 : userProfile.banned) {
                throw "Account banned";
            }
            this.dispatcher.dispatch(new game_commands_1.OnJoinCommand(), { client });
            const pendingGame = yield (0, pending_game_manager_1.getPendingGame)(this.presence, client.auth.uid);
            if ((pendingGame === null || pendingGame === void 0 ? void 0 : pendingGame.gameId) === this.roomId) {
                (0, pending_game_manager_1.clearPendingGame)(this.presence, client.auth.uid);
            }
            else if (pendingGame != null && !pendingGame.isExpired) {
                client.leave(CloseCodes_1.CloseCodes.USER_IN_ANOTHER_GAME);
            }
        });
    }
    onDrop(client, code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                (0, pending_game_manager_1.setPendingGame)(this.presence, client.auth.uid, this.roomId);
                yield this.allowReconnection(client, config_1.ALLOWED_GAME_RECONNECTION_TIME);
            }
            catch (e) {
            }
        });
    }
    onReconnect(client) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, pending_game_manager_1.clearPendingGame)(this.presence, client.auth.uid);
            this.dispatcher.dispatch(new game_commands_1.OnJoinCommand(), { client });
        });
    }
    onLeave(client, code) {
        return __awaiter(this, void 0, void 0, function* () {
            const consented = code === colyseus_1.CloseCode.CONSENTED;
            if (client && client.auth && client.auth.displayName) {
                const pendingGame = yield (0, pending_game_manager_1.getPendingGame)(this.presence, client.auth.uid);
                if (!pendingGame && !consented)
                    return;
                else if (pendingGame &&
                    (0, date_1.isValidDate)(pendingGame.reconnectionDeadline) &&
                    pendingGame.reconnectionDeadline.getTime() > Date.now()) {
                    return;
                }
                (0, pending_game_manager_1.clearPendingGame)(this.presence, client.auth.uid);
                const player = this.state.players.get(client.auth.uid);
                if (player && this.state.stageLevel <= 5 && !consented) {
                    this.state.players.delete(client.auth.uid);
                    this.setMetadata({
                        playerIds: (0, array_1.removeInArray)(this.metadata.playerIds, client.auth.uid)
                    });
                }
                else if (player && !player.hasLeftGame) {
                    player.hasLeftGame = true;
                    player.spectatedPlayerId = player.id;
                    const hasLeftBeforeEnd = player.life > 0 && !this.state.gameFinished;
                    if (hasLeftBeforeEnd) {
                        player.life = -99;
                        this.rankPlayers();
                    }
                    this.updatePlayerAfterGame(player, hasLeftBeforeEnd);
                }
            }
            if (!this.state.gameLoaded &&
                (0, schemas_1.values)(this.state.players).every((p) => p.loadingProgress === 100)) {
                this.broadcast(types_1.Transfer.LOADING_COMPLETE);
                this.startGame();
            }
        });
    }
    onDispose() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            logger_1.logger.info("Dispose Game ", this.roomId);
            this.presence.unsubscribe("room-deleted", this.onRoomDeleted);
            const players = (0, schemas_1.values)(this.state.players);
            players.forEach((player) => {
                (0, pending_game_manager_1.clearPendingGamesOnRoomDispose)(this.presence, player.id, this.roomId);
            });
            const playersAlive = players.filter((p) => p.alive);
            const humansAlive = playersAlive.filter((p) => !p.isBot);
            if (playersAlive.length >= 2 && humansAlive.length >= 1) {
                if (humansAlive.length > 1) {
                    logger_1.logger.warn(`Game room has been disposed while they were still ${humansAlive.length} players alive.`);
                }
                return;
            }
            try {
                this.state.endTime = Date.now();
                const humans = [];
                const bots = [];
                this.state.players.forEach((player) => {
                    if (player.isBot) {
                        bots.push(player);
                    }
                    else {
                        humans.push(player);
                    }
                });
                const players = [...humans, ...bots].map((p) => this.transformToSimplePlayer(p));
                if (this.state.stageLevel >= config_1.MinStageForGameToCount) {
                    const eligibleToXP = this.state.players.size >= 2;
                    if (eligibleToXP) {
                        for (let i = 0; i < bots.length; i++) {
                            const botPlayer = bots[i];
                            const bot = yield bot_v2_1.BotV2.findOne({ id: botPlayer.id });
                            if (bot) {
                                bot.elo = (0, elo_1.computeElo)(this.transformToSimplePlayer(botPlayer), botPlayer.rank, bot.elo, players, this.state.gameMode, true);
                                bot.save();
                            }
                        }
                        for (let i = 0; i < humans.length; i++) {
                            const player = humans[i];
                            if (!player.hasLeftGame) {
                                player.hasLeftGame = true;
                                this.updatePlayerAfterGame(player, false);
                            }
                        }
                    }
                }
                if (this.state.gameMode === Game_1.GameMode.TOURNAMENT) {
                    this.presence.publish("tournament-match-end", {
                        tournamentId: (_a = this.metadata) === null || _a === void 0 ? void 0 : _a.tournamentId,
                        bracketId: (_b = this.metadata) === null || _b === void 0 ? void 0 : _b.bracketId,
                        players: humans
                    });
                }
                this.dispatcher.stop();
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
    updatePlayerAfterGame(player, hasLeftBeforeEnd) {
        return __awaiter(this, void 0, void 0, function* () {
            const eligibleToXP = this.state.players.size >= 2 &&
                this.state.stageLevel >= config_1.MinStageForGameToCount;
            const humans = [];
            const bots = [];
            this.state.players.forEach((player) => {
                if (player.isBot) {
                    bots.push(player);
                }
                else {
                    humans.push(player);
                }
            });
            let shouldRefetchEventLeaderboard = false;
            const eligibleToELO = !this.state.noElo &&
                (this.state.stageLevel >= config_1.MinStageForGameToCount || hasLeftBeforeEnd) &&
                humans.length >= 2;
            const rank = player.rank;
            const exp = config_1.ExpPlace[rank - 1];
            const usr = yield user_metadata_1.default.findOne({ uid: player.id });
            if (usr) {
                const previousElo = usr.elo;
                const previousRank = (0, elo_2.getRank)(previousElo);
                if (eligibleToXP) {
                    (0, user_metadata_1.giveUserExp)(usr, exp);
                }
                usr.games += 1;
                if (rank === 1) {
                    usr.wins += 1;
                    if (this.state.gameMode === Game_1.GameMode.RANKED) {
                        player.titles.add(types_1.Title.VANQUISHER);
                        const minElo = Math.min(...(0, schemas_1.values)(this.state.players).map((p) => p.elo));
                        if (usr.elo === minElo && humans.length >= 8) {
                            player.titles.add(types_1.Title.OUTSIDER);
                        }
                    }
                }
                if (usr.elo != null && eligibleToELO) {
                    let elo = (0, elo_1.computeElo)(this.transformToSimplePlayer(player), rank, usr.elo, humans.map((p) => this.transformToSimplePlayer(p)), this.state.gameMode, false);
                    if (!elo || isNaN(elo)) {
                        logger_1.logger.error(`Elo compute failed for player ${player.name} (${player.id}) ; value: ${elo}`);
                        elo = usr.elo;
                    }
                    usr.elo = elo;
                    usr.maxElo = Math.max(usr.maxElo, elo);
                    const newRank = (0, elo_2.getRank)(elo);
                    if (newRank !== previousRank) {
                        notifications_1.notificationsService.addNotification(player.id, "elo_rank_change", newRank);
                    }
                    const dbrecord = this.transformToSimplePlayer(player);
                    const synergiesMap = new Map();
                    player.synergies.forEach((v, k) => {
                        v > 0 && synergiesMap.set(k, v);
                    });
                    detailled_statistic_v2_1.default.create({
                        time: Date.now(),
                        name: dbrecord.name,
                        pokemons: dbrecord.pokemons.map((pokemon) => {
                            var _a;
                            return (Object.assign(Object.assign({}, pokemon), { items: Array.from((_a = pokemon.items) !== null && _a !== void 0 ? _a : []).map((item) => item.toString()) }));
                        }),
                        rank: dbrecord.rank,
                        nbplayers: humans.length + bots.length,
                        avatar: dbrecord.avatar,
                        playerId: dbrecord.id,
                        elo: elo,
                        synergies: synergiesMap,
                        gameMode: this.state.gameMode,
                        regions: player.regions
                    });
                    if (usr.eventFinishTime == null &&
                        (0, config_1.getCurrentGameEvent)() === events_1.GameEvent.VICTORY_ROAD) {
                        try {
                            const eventPointsGained = config_1.VictoryRoadPointsPerRank[(0, number_1.clamp)(rank - 1, 0, 7)];
                            usr.eventPoints = (0, number_1.clamp)(usr.eventPoints + eventPointsGained, 0, config_1.VICTORY_ROAD_MAX_EVENT_POINTS);
                            usr.maxEventPoints = Math.max(usr.maxEventPoints, usr.eventPoints);
                            if (usr.maxEventPoints >= config_1.VICTORY_ROAD_MAX_EVENT_POINTS) {
                                usr.eventFinishTime = new Date();
                                usr.markModified("eventFinishTime");
                                const nbFinishers = yield user_metadata_1.default.countDocuments({
                                    eventFinishTime: { $exists: true, $ne: null }
                                });
                                if (nbFinishers === 0) {
                                    player.titles.add(types_1.Title.VICTORIOUS);
                                    this.presence.publish("announcement", `${player.name} won the Victory Road race !`);
                                }
                                player.titles.add(types_1.Title.FINISHER);
                                notifications_1.notificationsService.addNotification(player.id, "victory_road_finished", `${nbFinishers + 1}`);
                                shouldRefetchEventLeaderboard = true;
                            }
                            if (usr.maxEventPoints >= 100) {
                                player.titles.add(types_1.Title.RUNNER);
                            }
                        }
                        catch (error) {
                            logger_1.logger.error("Error updating event points", error);
                        }
                    }
                }
                player.pokemonsPlayed.forEach((pkm) => {
                    const index = Pokemon_1.PkmIndex[pkm];
                    const pokemonCollectionItem = usr.pokemonCollection.get(index);
                    if (pokemonCollectionItem) {
                        pokemonCollectionItem.played = pokemonCollectionItem.played + 1;
                        usr.markModified(`pokemonCollection.${index}.played`);
                    }
                    else {
                        const newConfig = {
                            dust: 0,
                            id: index,
                            unlocked: Buffer.alloc(5, 0),
                            selectedEmotion: null,
                            selectedShiny: false,
                            played: 1
                        };
                        usr.pokemonCollection.set(index, newConfig);
                    }
                });
                if ((0, config_1.getCurrentGameEvent)() === events_1.GameEvent.EXPEDITIONS &&
                    eligibleToXP &&
                    this.state.gameMode !== Game_1.GameMode.CUSTOM_LOBBY) {
                    const hasCompletedExpeditions = (0, expeditions_1.updatePlayerExpeditionsAfterGame)(player, usr);
                    if (hasCompletedExpeditions)
                        shouldRefetchEventLeaderboard = true;
                }
                (0, titles_1.updatePlayerTitlesAfterGame)(player, usr, rank);
                if (usr.titles === undefined) {
                    usr.titles = [];
                }
                const newTitlesEarned = [];
                player.titles.forEach((t) => {
                    if (!usr.titles.includes(t)) {
                        usr.titles.push(t);
                        newTitlesEarned.push(t);
                    }
                });
                if (newTitlesEarned.length > 0) {
                    newTitlesEarned.forEach((title) => {
                        notifications_1.notificationsService.addNotification(player.id, "new_title", title);
                        if (config_1.TITLES_UNLOCKING_THEMES.includes(title) &&
                            usr.level >= gadgets_1.GADGETS.palette.levelRequired) {
                            notifications_1.notificationsService.addNotification(player.id, "new_theme", config_1.THEME_BY_TITLE[title]);
                        }
                    });
                }
                yield usr.save();
                if (shouldRefetchEventLeaderboard) {
                    yield (0, leaderboard_1.fetchEventLeaderboard)();
                }
            }
        });
    }
    transformToSimplePlayer(player) {
        const simplePlayer = {
            name: player.name,
            id: player.id,
            rank: player.rank,
            avatar: player.avatar,
            pokemons: new Array(),
            elo: player.elo,
            games: player.games,
            synergies: [],
            title: player.title,
            role: player.role
        };
        player.synergies.forEach((v, k) => {
            simplePlayer.synergies.push({ name: k, value: v });
        });
        player.board.forEach((pokemon) => {
            if (pokemon.positionY != 0 && pokemon.passive !== Passive_1.Passive.INANIMATE) {
                const avatar = (0, avatar_1.getAvatarString)(pokemon.index, pokemon.shiny, pokemon.emotion);
                const s = {
                    name: pokemon.name,
                    avatar: avatar,
                    items: new Array(),
                    inventory: new Array()
                };
                pokemon.items.forEach((i) => {
                    s.items.push(i);
                    s.inventory.push(i);
                });
                simplePlayer.pokemons.push(s);
            }
        });
        return simplePlayer;
    }
    spawnOnBench(player, pkm, anim = "spawn") {
        const pokemon = pokemon_factory_1.default.createPokemonFromName(pkm, player);
        const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
        if (x !== null) {
            pokemon.positionX = x;
            pokemon.positionY = 0;
            if (anim === "fishing") {
                pokemon.action = Game_1.PokemonActionState.FISH;
            }
            player.board.set(pokemon.id, pokemon);
            this.clock.setTimeout(() => {
                pokemon.action = Game_1.PokemonActionState.IDLE;
                this.checkEvolutionsAfterPokemonAcquired(player.id);
            }, 1000);
        }
    }
    checkEvolutionsAfterPokemonAcquired(playerId) {
        const player = this.state.players.get(playerId);
        if (!player)
            return false;
        let hasEvolved = false;
        player.board.forEach((pokemon) => {
            if (pokemon.hasEvolution &&
                pokemon.evolutionRule instanceof evolution_rules_1.CountEvolutionRule) {
                const pokemonEvolved = pokemon.evolutionRule.tryEvolve(pokemon, player, this.state.stageLevel);
                if (pokemonEvolved) {
                    hasEvolved = true;
                }
            }
        });
        player.boardSize = this.getTeamSize(player.board);
        return hasEvolved;
    }
    checkEvolutionsAfterItemAcquired(playerId, pokemon) {
        const player = this.state.players.get(playerId);
        if (!player)
            return;
        if (pokemon.evolutionRule &&
            pokemon.evolutionRule instanceof evolution_rules_1.ItemEvolutionRule) {
            const pokemonEvolved = pokemon.evolutionRule.tryEvolve(pokemon, player, this.state.stageLevel);
            return pokemonEvolved;
        }
    }
    getNumberOfPlayersAlive(players) {
        let numberOfPlayersAlive = 0;
        players.forEach((player, key) => {
            if (player.alive) {
                numberOfPlayersAlive++;
            }
        });
        return numberOfPlayersAlive;
    }
    getTeamSize(board) {
        let size = 0;
        board.forEach((pokemon, key) => {
            if (pokemon.positionY != 0 && pokemon.doesCountForTeamSize) {
                size++;
            }
        });
        return size;
    }
    pickPokemonProposition(playerId, pkm, bypassLackOfSpace = false) {
        var _a, _b;
        const player = this.state.players.get(playerId);
        if (!player || player.pokemonsProposition.length === 0)
            return;
        if (this.state.additionalPokemons.includes(pkm) &&
            this.state.specialGameRule !== SpecialGameRule_1.SpecialGameRule.EVERYONE_IS_HERE)
            return;
        if (config_1.UniquePool.includes(pkm) &&
            this.state.stageLevel !== config_1.PortalCarouselStages[1] &&
            !(this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.UNIQUE_STARTER &&
                this.state.stageLevel <= 1))
            return;
        if (config_1.LegendaryPool.includes(pkm) &&
            this.state.stageLevel !== config_1.PortalCarouselStages[2])
            return;
        let pokemonsObtained = (pkm in Pokemon_1.PkmDuos ? Pokemon_1.PkmDuos[pkm] : [pkm]).map((p) => pokemon_factory_1.default.createPokemonFromName(p, player));
        const pokemon = pokemonsObtained[0];
        const isEvolution = pokemon.evolutionRule &&
            pokemon.evolutionRule instanceof evolution_rules_1.CountEvolutionRule &&
            pokemon.evolutionRule.canEvolveIfGettingOne(pokemon, player);
        const freeSpace = (0, board_1.getFreeSpaceOnBench)(player.board);
        if (freeSpace < pokemonsObtained.length &&
            !bypassLackOfSpace &&
            !isEvolution)
            return;
        const selectedIndex = player.pokemonsProposition.indexOf(pkm);
        player.pokemonsProposition.clear();
        if (config_1.AdditionalPicksStages.includes(this.state.stageLevel)) {
            if ((_a = pokemonsObtained[0]) === null || _a === void 0 ? void 0 : _a.regional) {
                const basePkm = ((_b = Object.keys(Pokemon_1.PkmRegionalVariants).find((p) => Pokemon_1.PkmRegionalVariants[p].includes(pokemonsObtained[0].name))) !== null && _b !== void 0 ? _b : pokemonsObtained[0].name);
                this.state.shop.addAdditionalPokemon(basePkm, this.state);
                player.regionalPokemons.push(pkm);
            }
            else {
                this.state.shop.addAdditionalPokemon(pkm, this.state);
            }
            if (this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.CHOSEN_ONES) {
                pokemonsObtained = pokemonsObtained.map((pkm) => {
                    var _a, _b, _c;
                    const evolution = pkm.hasEvolution
                        ? pkm.evolutionRule.getEvolution(pkm, player, this.state.stageLevel)
                        : pkm.name;
                    const rank = [Game_1.Rarity.UNCOMMON, Game_1.Rarity.RARE, Game_1.Rarity.EPIC].indexOf(pkm.rarity);
                    const replacement = pokemon_factory_1.default.createPokemonFromName(evolution, player);
                    replacement.addMaxHP((_a = [50, 100, 150][rank]) !== null && _a !== void 0 ? _a : 50);
                    replacement.addAttack((_b = [5, 10, 15][rank]) !== null && _b !== void 0 ? _b : 5);
                    replacement.addAbilityPower((_c = [15, 30, 45][rank]) !== null && _c !== void 0 ? _c : 15);
                    return replacement;
                });
            }
            this.state.players.forEach((p) => p.updateRegionalPool(this.state, false));
        }
        if (config_1.AdditionalPicksStages.includes(this.state.stageLevel) ||
            this.state.stageLevel <= 1) {
            const selectedItem = player.itemsProposition[selectedIndex];
            if (player.itemsProposition.length > 0 && selectedItem != null) {
                player.items.push(selectedItem);
                player.itemsProposition.clear();
            }
        }
        if (this.state.stageLevel <= 1) {
            player.firstPartner = pokemonsObtained[0].name;
        }
        pokemonsObtained.forEach((pokemon) => {
            const freeCellX = (0, board_1.getFirstAvailablePositionInBench)(player.board);
            if (isEvolution) {
                pokemon.positionX = freeCellX !== null && freeCellX !== void 0 ? freeCellX : -1;
                pokemon.positionY = 0;
                player.board.set(pokemon.id, pokemon);
                pokemon.onAcquired(player);
                this.checkEvolutionsAfterPokemonAcquired(playerId);
            }
            else if (freeCellX !== null) {
                pokemon.positionX = freeCellX;
                pokemon.positionY = 0;
                player.board.set(pokemon.id, pokemon);
                pokemon.onAcquired(player);
            }
            else {
                const sellPrice = (0, shop_1.getSellPrice)(pokemon, this.state.specialGameRule);
                player.addMoney(sellPrice, true, null);
            }
        });
    }
    pickItemProposition(playerId, item) {
        const player = this.state.players.get(playerId);
        if (player && player.itemsProposition.includes(item)) {
            player.items.push(item);
            player.itemsProposition.clear();
        }
    }
    computeRoundDamage(opponentTeam, stageLevel) {
        let damage = Math.ceil(stageLevel / 2);
        if (opponentTeam.size > 0) {
            opponentTeam.forEach((pokemon) => {
                if (!pokemon.isSpawn && pokemon.passive !== Passive_1.Passive.INANIMATE) {
                    damage += 1;
                }
            });
        }
        return damage;
    }
    rankPlayers() {
        const rankArray = new Array();
        this.state.players.forEach((player) => {
            if (!player.alive) {
                return;
            }
            rankArray.push({
                id: player.id,
                life: player.life,
                level: player.experienceManager.level
            });
        });
        const sortPlayers = (a, b) => {
            let diff = b.life - a.life;
            if (diff == 0) {
                diff = b.level - a.level;
            }
            return diff;
        };
        rankArray.sort(sortPlayers);
        rankArray.forEach((rankPlayer, index) => {
            const player = this.state.players.get(rankPlayer.id);
            if (player) {
                player.rank = index + 1;
            }
        });
    }
    onRoomDeleted(roomId) {
        if (this.roomId === roomId) {
            this.disconnect(CloseCodes_1.CloseCodes.ROOM_DELETED);
        }
    }
}
exports.default = GameRoom;
//# sourceMappingURL=game-room.js.map