"use strict";
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
exports.getGameScene = getGameScene;
exports.getGameContainer = getGameContainer;
exports.cyclePlayers = cyclePlayers;
exports.playerClick = playerClick;
exports.default = Game;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@colyseus/sdk");
const app_1 = __importDefault(require("firebase/compat/app"));
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_1 = require("react-router");
const react_toastify_1 = require("react-toastify");
const config_1 = require("../../../config");
const pve_stages_1 = require("../../../models/pve-stages");
const types_1 = require("../../../types");
const CloseCodes_1 = require("../../../types/enum/CloseCodes");
const ConnectionStatus_1 = require("../../../types/enum/ConnectionStatus");
const Game_1 = require("../../../types/enum/Game");
const Passive_1 = require("../../../types/enum/Passive");
const events_1 = require("../../../types/events");
const avatar_1 = require("../../../utils/avatar");
const logger_1 = require("../../../utils/logger");
const schemas_1 = require("../../../utils/schemas");
const game_container_1 = __importDefault(require("../game/game-container"));
const hooks_1 = require("../hooks");
const network_1 = require("../network");
const stores_1 = __importDefault(require("../stores"));
const GameStore_1 = require("../stores/GameStore");
const NetworkStore_1 = require("../stores/NetworkStore");
const game_choice_1 = __importDefault(require("./component/game/game-choice"));
const game_dps_meter_1 = __importDefault(require("./component/game/game-dps-meter"));
const game_expeditions_1 = __importDefault(require("./component/game/game-expeditions"));
const game_final_rank_1 = __importDefault(require("./component/game/game-final-rank"));
const game_loading_screen_1 = __importDefault(require("./component/game/game-loading-screen"));
const game_players_1 = __importDefault(require("./component/game/game-players"));
const game_shop_1 = __importDefault(require("./component/game/game-shop"));
const game_spectate_player_info_1 = __importDefault(require("./component/game/game-spectate-player-info"));
const game_stage_info_1 = __importDefault(require("./component/game/game-stage-info"));
const game_synergies_1 = __importDefault(require("./component/game/game-synergies"));
const game_toasts_1 = __importDefault(require("./component/game/game-toasts"));
const main_sidebar_1 = require("./component/main-sidebar/main-sidebar");
const connection_status_notification_1 = require("./component/system/connection-status-notification");
const audio_1 = require("./utils/audio");
const store_1 = require("./utils/store");
const utils_1 = require("./utils/utils");
let gameContainer;
function getGameScene() {
    var _a, _b;
    return (_b = (_a = gameContainer === null || gameContainer === void 0 ? void 0 : gameContainer.game) === null || _a === void 0 ? void 0 : _a.scene) === null || _b === void 0 ? void 0 : _b.getScene("gameScene");
}
function getGameContainer() {
    return gameContainer;
}
function cyclePlayers(amt) {
    var _a;
    const players = (0, schemas_1.schemaValues)((_a = gameContainer.room) === null || _a === void 0 ? void 0 : _a.state.players);
    playerClick(players[(players.findIndex((p) => p === gameContainer.player) +
        amt +
        players.length) %
        players.length].id);
}
function playerClick(id) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const scene = getGameScene();
    (_a = gameContainer === null || gameContainer === void 0 ? void 0 : gameContainer.room) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SPECTATE, id);
    if (scene === null || scene === void 0 ? void 0 : scene.spectate) {
        if ((_c = (_b = gameContainer === null || gameContainer === void 0 ? void 0 : gameContainer.room) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.players) {
            const spectatedPlayer = (_e = (_d = gameContainer === null || gameContainer === void 0 ? void 0 : gameContainer.room) === null || _d === void 0 ? void 0 : _d.state) === null || _e === void 0 ? void 0 : _e.players.get(id);
            if (spectatedPlayer) {
                gameContainer.setPlayer(spectatedPlayer);
                const simulation = (_f = gameContainer === null || gameContainer === void 0 ? void 0 : gameContainer.room) === null || _f === void 0 ? void 0 : _f.state.simulations.get(spectatedPlayer.simulationId);
                if (simulation) {
                    gameContainer.setSimulation(simulation);
                }
            }
            (_h = (_g = gameContainer === null || gameContainer === void 0 ? void 0 : gameContainer.gameScene) === null || _g === void 0 ? void 0 : _g.board) === null || _h === void 0 ? void 0 : _h.updateScoutingAvatars();
        }
    }
}
function showMoneyToast(value) {
    (0, react_toastify_1.toast)((0, jsx_runtime_1.jsxs)("div", { className: "toast-player-income", children: [(0, jsx_runtime_1.jsxs)("span", { style: { verticalAlign: "middle" }, children: ["+", value] }), (0, jsx_runtime_1.jsx)("img", { className: "icon-money", src: "/assets/icons/money.svg", alt: "$" })] }), { containerId: "toast-money" });
}
function Game() {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_1.useNavigate)();
    const connectionStatus = (0, hooks_1.useAppSelector)((state) => state.network.connectionStatus);
    const room = network_1.rooms.game;
    const uid = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    const spectatedPlayerId = (0, hooks_1.useAppSelector)((state) => state.game.playerIdSpectated);
    const connectedPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectConnectedPlayer);
    const spectatedPlayer = (0, hooks_1.useAppSelector)(hooks_1.selectSpectatedPlayer);
    const spectate = spectatedPlayerId !== uid || !(spectatedPlayer === null || spectatedPlayer === void 0 ? void 0 : spectatedPlayer.alive);
    const initialized = (0, react_1.useRef)(false);
    const connecting = (0, react_1.useRef)(false);
    const connected = (0, react_1.useRef)(false);
    const [loaded, setLoaded] = (0, react_1.useState)(false);
    const [connectError, setConnectError] = (0, react_1.useState)("");
    const [finalRank, setFinalRank] = (0, react_1.useState)(0);
    let FinalRankVisibility;
    (function (FinalRankVisibility) {
        FinalRankVisibility[FinalRankVisibility["HIDDEN"] = 0] = "HIDDEN";
        FinalRankVisibility[FinalRankVisibility["VISIBLE"] = 1] = "VISIBLE";
        FinalRankVisibility[FinalRankVisibility["CLOSED"] = 2] = "CLOSED";
    })(FinalRankVisibility || (FinalRankVisibility = {}));
    const [finalRankVisibility, setFinalRankVisibility] = (0, react_1.useState)(FinalRankVisibility.HIDDEN);
    const container = (0, react_1.useRef)(null);
    const currentGameEvent = (0, config_1.getCurrentGameEvent)();
    const MAX_ATTEMPS_RECONNECT = 3;
    const connectToGame = (0, react_1.useCallback)((...args_1) => __awaiter(this, [...args_1], void 0, function* (attempts = 1) {
        var _a;
        logger_1.logger.debug(`connectToGame attempt ${attempts} / ${MAX_ATTEMPS_RECONNECT}`);
        const cachedReconnectionToken = (_a = store_1.localStore.get(store_1.LocalStoreKeys.RECONNECTION_GAME)) === null || _a === void 0 ? void 0 : _a.reconnectionToken;
        if (cachedReconnectionToken) {
            connecting.current = true;
            const statusMessage = document.querySelector("#status-message");
            if (statusMessage) {
                statusMessage.textContent = `Connecting to game...`;
            }
            network_1.client
                .reconnect(cachedReconnectionToken)
                .then((room) => {
                (0, network_1.joinGame)(room, 60 * 60);
                connected.current = true;
                connecting.current = false;
                dispatch((0, NetworkStore_1.setConnectionStatus)(ConnectionStatus_1.ConnectionStatus.CONNECTED));
            })
                .catch((error) => {
                if (attempts < MAX_ATTEMPS_RECONNECT) {
                    setTimeout(() => __awaiter(this, void 0, void 0, function* () { return yield connectToGame(attempts + 1); }), 1000);
                }
                else {
                    let connectError = error.message;
                    if (error.code === 4212) {
                        connectError = "This game does no longer exists";
                    }
                    setConnectError(connectError);
                    dispatch((0, NetworkStore_1.setConnectionStatus)(ConnectionStatus_1.ConnectionStatus.CONNECTION_FAILED));
                    logger_1.logger.error("reconnect error", error);
                }
            });
        }
        else {
            navigate("/");
        }
    }), [network_1.client, dispatch]);
    const leave = (0, react_1.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        const afterPlayers = new Array();
        const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
        if (gameContainer && gameContainer.game) {
            gameContainer.game.destroy(true);
        }
        const nbPlayers = (_b = room === null || room === void 0 ? void 0 : room.state.players.size) !== null && _b !== void 0 ? _b : 0;
        const hasLeftBeforeEnd = (connectedPlayer === null || connectedPlayer === void 0 ? void 0 : connectedPlayer.alive) === true && ((_c = room === null || room === void 0 ? void 0 : room.state) === null || _c === void 0 ? void 0 : _c.gameFinished) === false;
        if (nbPlayers > 0) {
            room === null || room === void 0 ? void 0 : room.state.players.forEach((p) => {
                const afterPlayer = {
                    elo: p.elo,
                    games: p.games,
                    name: p.name,
                    id: p.id,
                    rank: p.rank,
                    avatar: p.avatar,
                    title: p.title,
                    role: p.role,
                    pokemons: new Array(),
                    synergies: new Array(),
                    gameStats: p.gameStats
                };
                const allSynergies = new Array();
                p.synergies.forEach((v, k) => {
                    allSynergies.push({ name: k, value: v });
                });
                allSynergies.sort((a, b) => b.value - a.value);
                afterPlayer.synergies = allSynergies.slice(0, 5);
                if (p.board && p.board.size > 0) {
                    p.board.forEach((pokemon) => {
                        if (pokemon.positionY != 0 &&
                            pokemon.passive !== Passive_1.Passive.INANIMATE) {
                            afterPlayer.pokemons.push({
                                avatar: (0, avatar_1.getAvatarString)(pokemon.index, pokemon.shiny, pokemon.emotion),
                                items: pokemon.items.toArray(),
                                name: pokemon.name
                            });
                        }
                    });
                }
                afterPlayers.push(afterPlayer);
            });
        }
        const eligibleToXP = nbPlayers >= 2 && ((_d = room === null || room === void 0 ? void 0 : room.state.stageLevel) !== null && _d !== void 0 ? _d : 0) >= config_1.MinStageForGameToCount;
        const eligibleToELO = nbPlayers >= 2 &&
            (((_e = room === null || room === void 0 ? void 0 : room.state.stageLevel) !== null && _e !== void 0 ? _e : 0) >= config_1.MinStageForGameToCount ||
                hasLeftBeforeEnd) &&
            !(room === null || room === void 0 ? void 0 : room.state.noElo) &&
            afterPlayers.filter((p) => p.role !== types_1.Role.BOT).length >= 2;
        const gameMode = room === null || room === void 0 ? void 0 : room.state.gameMode;
        const r = yield network_1.client.create("after-game", {
            players: afterPlayers,
            idToken: token,
            eligibleToXP,
            eligibleToELO,
            gameMode
        });
        store_1.localStore.set(store_1.LocalStoreKeys.RECONNECTION_AFTER_GAME, { reconnectionToken: r.reconnectionToken, roomId: r.roomId }, 30);
        if (r.connection.isOpen) {
            yield r.leave(false);
        }
        dispatch((0, GameStore_1.leaveGame)(0));
        navigate("/after");
        if (room === null || room === void 0 ? void 0 : room.connection.isOpen) {
            room.leave();
        }
    }), [network_1.client, dispatch, room]);
    const spectateTillTheEnd = () => {
        var _a, _b, _c, _d;
        setFinalRankVisibility(FinalRankVisibility.CLOSED);
        gameContainer.spectate = true;
        if (gameContainer.gameScene) {
            gameContainer.gameScene.spectate = true;
            (_b = (_a = gameContainer.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.renderBoard(false);
            (_d = (_c = gameContainer.gameScene) === null || _c === void 0 ? void 0 : _c.itemsContainer) === null || _d === void 0 ? void 0 : _d.render(gameContainer.player.items);
        }
    };
    (0, react_1.useEffect)(() => {
        window.history.pushState(null, "", window.location.href);
        const confirmLeave = () => {
            if (confirm("Do you want to leave game ?")) {
                leave();
            }
            else {
                window.history.pushState(null, "", window.location.href);
            }
        };
        window.addEventListener("popstate", confirmLeave);
        const videoBg = document.getElementById("videobg");
        if (videoBg) {
            videoBg.pause();
            videoBg.style.display = "none";
        }
        return () => {
            if (videoBg) {
                videoBg.play();
                videoBg.style.display = "block";
            }
            window.removeEventListener("popstate", confirmLeave);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        const handleVisibilityChange = () => {
            var _a, _b, _c, _d;
            if (document.hidden) {
                (_b = (_a = getGameScene()) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.clearBoard();
            }
            else {
                (_d = (_c = getGameScene()) === null || _c === void 0 ? void 0 : _c.board) === null || _d === void 0 ? void 0 : _d.renderBoard(false);
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        try {
            fetch("/leaderboards")
                .then((res) => res.json())
                .then((data) => {
                dispatch((0, GameStore_1.setPodium)(data.leaderboard.slice(0, 3)));
            });
        }
        catch (e) {
            console.error("error fetching leaderboard", e);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        var _a;
        const connect = () => {
            logger_1.logger.debug("connecting to game");
            (0, network_1.authenticateUser)().then((user) => __awaiter(this, void 0, void 0, function* () {
                if (user && !connecting.current) {
                    connecting.current = true;
                    yield connectToGame();
                }
            }));
        };
        if ((_a = network_1.rooms.game) === null || _a === void 0 ? void 0 : _a.connection.isOpen) {
            connected.current = true;
            dispatch((0, NetworkStore_1.setConnectionStatus)(ConnectionStatus_1.ConnectionStatus.CONNECTED));
        }
        if (!connected.current) {
            connect();
        }
        else if (!initialized.current &&
            room != undefined &&
            (container === null || container === void 0 ? void 0 : container.current)) {
            logger_1.logger.debug("initializing game");
            initialized.current = true;
            gameContainer = new game_container_1.default(container.current, uid, room);
            const gameElm = document.getElementById("game");
            gameElm === null || gameElm === void 0 ? void 0 : gameElm.addEventListener(types_1.Transfer.DRAG_DROP, ((event) => {
                gameContainer.onDragDrop(event);
            }));
            gameElm === null || gameElm === void 0 ? void 0 : gameElm.addEventListener(types_1.Transfer.DRAG_DROP_ITEM, ((event) => {
                gameContainer.onDragDropItem(event);
            }));
            gameElm === null || gameElm === void 0 ? void 0 : gameElm.addEventListener(types_1.Transfer.DRAG_DROP_COMBINE, ((event) => {
                gameContainer.onDragDropCombine(event);
            }));
            room.onMessage(types_1.Transfer.LOADING_COMPLETE, () => {
                setLoaded(true);
            });
            room.onMessage(types_1.Transfer.FINAL_RANK, (finalRank) => {
                setFinalRank(finalRank);
                setFinalRankVisibility(FinalRankVisibility.VISIBLE);
            });
            room.onMessage(types_1.Transfer.PRELOAD_MAPS, (maps) => __awaiter(this, void 0, void 0, function* () {
                logger_1.logger.info("preloading maps", maps);
                const gameScene = getGameScene();
                if (gameScene) {
                    yield gameScene.preloadMaps(maps);
                    gameScene.load
                        .once("complete", () => {
                        if (room.state.phase !== Game_1.GamePhaseState.TOWN) {
                            gameContainer &&
                                gameContainer.player &&
                                gameScene.setMap(gameContainer.player.map);
                        }
                    })
                        .start();
                }
            }));
            room.onMessage(types_1.Transfer.SHOW_EMOTE, (message) => {
                var _a, _b, _c;
                const g = getGameScene();
                if (((_b = (_a = g === null || g === void 0 ? void 0 : g.minigameManager) === null || _a === void 0 ? void 0 : _a.pokemons) === null || _b === void 0 ? void 0 : _b.size) &&
                    g.minigameManager.pokemons.size > 0) {
                    return (_c = g.minigameManager) === null || _c === void 0 ? void 0 : _c.showEmote(message.id, message === null || message === void 0 ? void 0 : message.emote);
                }
                if (g && g.board) {
                    g.board.showEmote(message.id, message === null || message === void 0 ? void 0 : message.emote);
                }
            });
            room.onMessage(types_1.Transfer.COOK, (message) => __awaiter(this, void 0, void 0, function* () {
                const g = getGameScene();
                if (g && g.board) {
                    const pokemon = g.board.pokemons.get(message.pokemonId);
                    if (pokemon) {
                        pokemon.cookAnimation(message.dishes);
                    }
                }
            }));
            room.onMessage(types_1.Transfer.DIG, (message) => __awaiter(this, void 0, void 0, function* () {
                setTimeout(() => {
                    const g = getGameScene();
                    if (g && g.board) {
                        const pokemon = g.board.pokemons.get(message.pokemonId);
                        if (pokemon) {
                            pokemon.digAnimation(message.buriedItem);
                        }
                    }
                }, 500);
            }));
            room.onMessage(types_1.Transfer.POKEMON_DAMAGE, (message) => {
                gameContainer.handleDisplayDamage(message);
            });
            room.onMessage(types_1.Transfer.ABILITY, (message) => {
                gameContainer.handleDisplayAbility(message);
            });
            room.onMessage(types_1.Transfer.POKEMON_HEAL, (message) => {
                gameContainer.handleDisplayHeal(message);
            });
            room.onMessage(types_1.Transfer.PLAYER_DAMAGE, (value) => {
                (0, react_toastify_1.toast)((0, jsx_runtime_1.jsxs)("div", { className: "toast-player-damage", children: [(0, jsx_runtime_1.jsxs)("span", { style: { verticalAlign: "middle" }, children: ["-", value] }), (0, jsx_runtime_1.jsx)("img", { className: "icon-life", src: "/assets/ui/heart.png", alt: "\u2764" })] }), { containerId: "toast-life" });
            });
            room.onMessage(types_1.Transfer.PLAYER_INCOME, showMoneyToast);
            room.onMessage(types_1.Transfer.BOARD_EVENT, (event) => {
                var _a, _b;
                if (gameContainer.game) {
                    const g = getGameScene();
                    if (((_b = (_a = g === null || g === void 0 ? void 0 : g.battle) === null || _a === void 0 ? void 0 : _a.simulation) === null || _b === void 0 ? void 0 : _b.id) === event.simulationId) {
                        g.battle.displayBoardEvent(event);
                    }
                }
            });
            room.onMessage(types_1.Transfer.CLEAR_BOARD_EVENT, (event) => {
                var _a, _b;
                if (gameContainer.game) {
                    const g = getGameScene();
                    if (((_b = (_a = g === null || g === void 0 ? void 0 : g.battle) === null || _a === void 0 ? void 0 : _a.simulation) === null || _b === void 0 ? void 0 : _b.id) === event.simulationId) {
                        g.battle.removeBoardEvent(event);
                    }
                }
            });
            room.onMessage(types_1.Transfer.CLEAR_BOARD, (event) => {
                var _a, _b;
                if (gameContainer.game) {
                    const g = getGameScene();
                    if (((_b = (_a = g === null || g === void 0 ? void 0 : g.battle) === null || _a === void 0 ? void 0 : _a.simulation) === null || _b === void 0 ? void 0 : _b.id) === event.simulationId) {
                        g.battle.clearBoardEvents();
                    }
                }
            });
            room.onMessage(types_1.Transfer.SIMULATION_STOP, () => {
                if (gameContainer.game) {
                    const g = getGameScene();
                    if (g && g.battle) {
                        g.battle.clear();
                    }
                }
            });
            room.onMessage(types_1.Transfer.GAME_END, leave);
            room.onMessage(types_1.Transfer.DRAG_DROP_CANCEL, (message) => gameContainer.handleDragDropCancel(message));
            room.onMessage(types_1.Transfer.DISPLAY_TEXT, (message) => {
                var _a, _b, _c, _d, _e;
                const g = getGameScene();
                if (((_b = (_a = g === null || g === void 0 ? void 0 : g.battle) === null || _a === void 0 ? void 0 : _a.simulation) === null || _b === void 0 ? void 0 : _b.id) === message.id && message.text) {
                    const coordinates = (0, utils_1.transformEntityCoordinates)(message.x, message.y, (_c = g === null || g === void 0 ? void 0 : g.battle) === null || _c === void 0 ? void 0 : _c.flip);
                    (_e = (_d = gameContainer.gameScene) === null || _d === void 0 ? void 0 : _d.board) === null || _e === void 0 ? void 0 : _e.displayText(coordinates[0], coordinates[1], t(message.text).toUpperCase(), true);
                }
            });
            room.onDrop((code) => {
                if (code >= 1001 && code <= 1015) {
                    if (connectionStatus === ConnectionStatus_1.ConnectionStatus.CONNECTED) {
                        dispatch((0, NetworkStore_1.setConnectionStatus)(ConnectionStatus_1.ConnectionStatus.CONNECTION_LOST));
                    }
                }
            });
            room.onReconnect(() => {
                dispatch((0, NetworkStore_1.setConnectionStatus)(ConnectionStatus_1.ConnectionStatus.CONNECTED));
            });
            room.onLeave((code) => {
                const shouldGoToLobby = [
                    CloseCodes_1.CloseCodes.ROOM_DELETED,
                    CloseCodes_1.CloseCodes.USER_BANNED
                ].includes(code);
                if (shouldGoToLobby) {
                    const errorMessage = CloseCodes_1.CloseCodesMessages[code];
                    if (errorMessage) {
                        dispatch((0, NetworkStore_1.setErrorAlertMessage)(t(`errors.${errorMessage}`)));
                    }
                    const scene = getGameScene();
                    if (scene === null || scene === void 0 ? void 0 : scene.music)
                        scene.music.destroy();
                    navigate("/lobby");
                }
                else {
                    dispatch((0, NetworkStore_1.setConnectionStatus)(ConnectionStatus_1.ConnectionStatus.CONNECTION_FAILED));
                }
            });
            const $ = (0, sdk_1.getStateCallbacks)(room);
            const $state = $(room.state);
            $state.listen("gameMode", (mode) => {
                dispatch((0, GameStore_1.setGameMode)(mode));
            });
            $state.listen("roundTime", (value) => {
                var _a, _b;
                dispatch((0, GameStore_1.setRoundTime)(value));
                const stageLevel = (_a = room.state.stageLevel) !== null && _a !== void 0 ? _a : 0;
                if (room.state.phase === Game_1.GamePhaseState.PICK &&
                    stageLevel in pve_stages_1.PVEStages === false &&
                    value < 5 &&
                    ((_b = gameContainer.gameScene) === null || _b === void 0 ? void 0 : _b.board) &&
                    !gameContainer.gameScene.board.portal) {
                    gameContainer.gameScene.board.addPortal();
                }
            });
            $state.listen("phase", (newPhase, previousPhase) => {
                if (gameContainer.game) {
                    const g = getGameScene();
                    if (g) {
                        g.updatePhase(newPhase, previousPhase);
                    }
                }
                dispatch((0, GameStore_1.setPhase)(newPhase));
            });
            $state.listen("stageLevel", (value) => {
                dispatch((0, GameStore_1.setStageLevel)(value));
            });
            $state.listen("noElo", (value) => {
                dispatch((0, GameStore_1.setNoELO)(value));
            });
            $state.listen("specialGameRule", (value) => {
                dispatch((0, GameStore_1.setSpecialGameRule)(value));
            });
            $state.additionalPokemons.onChange(() => {
                dispatch((0, GameStore_1.setAdditionalPokemons)((0, schemas_1.schemaValues)(room.state.additionalPokemons)));
            });
            $state.simulations.onRemove(() => {
                gameContainer.resetSimulation();
            });
            $state.simulations.onAdd((simulation) => {
                gameContainer.initializeSimulation(simulation);
                const $simulation = $(simulation);
                $simulation.listen("weather", (value) => {
                    dispatch((0, GameStore_1.setWeather)({ id: simulation.id, value: value }));
                });
                const teams = [Game_1.Team.BLUE_TEAM, Game_1.Team.RED_TEAM];
                teams.forEach((team) => {
                    const $dpsMeter = team === Game_1.Team.BLUE_TEAM
                        ? $simulation.blueDpsMeter
                        : $simulation.redDpsMeter;
                    $dpsMeter.onAdd((dps) => {
                        dispatch((0, GameStore_1.addDpsMeter)({ value: dps, id: simulation.id, team }));
                        const $dps = $(dps);
                        const fields = [
                            "id",
                            "name",
                            "physicalDamage",
                            "specialDamage",
                            "trueDamage",
                            "heal",
                            "shield",
                            "physicalDamageReduced",
                            "specialDamageReduced",
                            "shieldDamageTaken"
                        ];
                        fields.forEach((field) => {
                            $dps.listen(field, (value) => {
                                dispatch((0, GameStore_1.changeDpsMeter)({
                                    id: dps.id,
                                    team,
                                    field: field,
                                    value: value,
                                    simulationId: simulation.id
                                }));
                            });
                        });
                    });
                    $dpsMeter.onRemove((dps) => {
                        dispatch((0, GameStore_1.removeDpsMeter)({ id: dps.id, team, simulationId: simulation.id }));
                    });
                });
            });
            $state.players.onAdd((player) => {
                dispatch((0, GameStore_1.addPlayer)(player));
                gameContainer.initializePlayer(player);
                const $player = $(player);
                if (player.id == uid) {
                    dispatch((0, GameStore_1.setInterest)(player.interest));
                    dispatch((0, GameStore_1.setMaxInterest)(player.maxInterest));
                    dispatch((0, GameStore_1.setStreak)(player.streak));
                    dispatch((0, GameStore_1.setShopLocked)(player.shopLocked));
                    dispatch((0, GameStore_1.setShopFreeRolls)(player.shopFreeRolls));
                    dispatch((0, GameStore_1.setEmotesUnlocked)(player.emotesUnlocked));
                    $player.listen("interest", (value) => {
                        dispatch((0, GameStore_1.setInterest)(value));
                    });
                    $player.listen("maxInterest", (value) => {
                        dispatch((0, GameStore_1.setMaxInterest)(value));
                    });
                    $player.shop.onChange((pkm, index) => {
                        dispatch((0, GameStore_1.changeShop)({ value: pkm, index }));
                    });
                    $player.listen("shopLocked", (value) => {
                        dispatch((0, GameStore_1.setShopLocked)(value));
                    });
                    $player.listen("shopFreeRolls", (value) => {
                        dispatch((0, GameStore_1.setShopFreeRolls)(value));
                    });
                    $player.listen("money", (value, previousValue) => {
                        dispatch((0, GameStore_1.setMoney)(value));
                        if (value - previousValue >= 30) {
                            showMoneyToast(value - previousValue);
                        }
                    });
                    $player.listen("streak", (value) => {
                        dispatch((0, GameStore_1.setStreak)(value));
                    });
                    $player.choices.onChange(() => {
                        dispatch((0, GameStore_1.changePlayer)({
                            id: player.id,
                            field: "choices",
                            value: (0, schemas_1.schemaValues)(player.choices)
                        }));
                    });
                }
                $player.listen("life", (value, previousValue) => {
                    var _a, _b;
                    dispatch((0, GameStore_1.setLife)({ id: player.id, value: value }));
                    if (value <= 0 &&
                        value !== previousValue &&
                        player.id === uid &&
                        !spectate &&
                        finalRankVisibility === FinalRankVisibility.HIDDEN) {
                        setFinalRankVisibility(FinalRankVisibility.VISIBLE);
                        (_b = (_a = getGameScene()) === null || _a === void 0 ? void 0 : _a.input.keyboard) === null || _b === void 0 ? void 0 : _b.removeAllListeners();
                    }
                });
                $player.listen("experienceManager", (experienceManager) => {
                    const $experienceManager = $(experienceManager);
                    if (player.id === uid) {
                        dispatch((0, GameStore_1.updateExperienceManager)(experienceManager));
                        const fields = [
                            "experience",
                            "expNeeded",
                            "level"
                        ];
                        fields.forEach((field) => {
                            $experienceManager.listen(field, (value) => {
                                dispatch((0, GameStore_1.updateExperienceManager)(Object.assign(Object.assign({}, experienceManager), { [field]: value })));
                            });
                        });
                    }
                    $experienceManager.listen("level", (value) => {
                        if (value > 1) {
                            (0, react_toastify_1.toast)((0, jsx_runtime_1.jsxs)("p", { children: [t("level"), " ", value] }), {
                                containerId: player.rank.toString(),
                                className: "toast-level-up"
                            });
                        }
                    });
                });
                $player.listen("loadingProgress", (value) => {
                    dispatch((0, GameStore_1.setLoadingProgress)({ id: player.id, value: value }));
                });
                $player.listen("map", (newMap) => {
                    if (player.id === stores_1.default.getState().game.playerIdSpectated) {
                        const gameScene = getGameScene();
                        if (gameScene) {
                            gameScene.setMap(newMap);
                            const alreadyLoading = gameScene.load.isLoading();
                            if (!alreadyLoading) {
                                gameScene.load.reset();
                            }
                            (0, audio_1.preloadMusic)(gameScene, config_1.RegionDetails[newMap].music);
                            gameScene.load.once("complete", () => (0, audio_1.playMusic)(gameScene, config_1.RegionDetails[newMap].music));
                            if (!alreadyLoading) {
                                gameScene.load.start();
                            }
                        }
                    }
                    dispatch((0, GameStore_1.changePlayer)({ id: player.id, field: "map", value: newMap }));
                });
                $player.listen("spectatedPlayerId", (spectatedPlayerId) => {
                    var _a, _b, _c, _d;
                    if ((_a = room === null || room === void 0 ? void 0 : room.state) === null || _a === void 0 ? void 0 : _a.players) {
                        const spectatedPlayer = (_b = room === null || room === void 0 ? void 0 : room.state) === null || _b === void 0 ? void 0 : _b.players.get(spectatedPlayerId);
                        if (spectatedPlayer && player.id === uid) {
                            gameContainer.setPlayer(spectatedPlayer);
                            const simulation = room.state.simulations.get(spectatedPlayer.simulationId);
                            if (simulation) {
                                gameContainer.setSimulation(simulation);
                            }
                        }
                        (_d = (_c = gameContainer.gameScene) === null || _c === void 0 ? void 0 : _c.board) === null || _d === void 0 ? void 0 : _d.updateScoutingAvatars();
                    }
                });
                const fields = [
                    "name",
                    "avatar",
                    "boardSize",
                    "experienceManager",
                    "money",
                    "history",
                    "life",
                    "opponentId",
                    "opponentName",
                    "opponentAvatar",
                    "opponentTitle",
                    "rank",
                    "regionalPokemons",
                    "streak",
                    "title",
                    "eggChance",
                    "goldenEggChance",
                    "cellBattery",
                    "gameStats",
                    "scarvesItems",
                    "fairyWands"
                ];
                fields.forEach((field) => {
                    $player.listen(field, (value) => {
                        dispatch((0, GameStore_1.changePlayer)({ id: player.id, field: field, value: value }));
                    });
                });
                $player.synergies.onChange(() => {
                    dispatch((0, GameStore_1.setSynergies)({ id: player.id, value: player.synergies }));
                });
                $player.groundHoles.onChange((value) => {
                    if (player.id === stores_1.default.getState().game.playerIdSpectated) {
                        const gameScene = getGameScene();
                        if ((gameScene === null || gameScene === void 0 ? void 0 : gameScene.board) && room.state.phase === Game_1.GamePhaseState.PICK) {
                            gameScene.board.renderGroundHoles();
                        }
                    }
                });
                $player.listen("mulch", (value) => {
                    var _a, _b;
                    dispatch((0, GameStore_1.changePlayer)({ id: player.id, field: "mulch", value }));
                    (_b = (_a = getGameScene()) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.updateMulchCount();
                });
                $player.listen("mulchCap", (value) => {
                    var _a, _b;
                    dispatch((0, GameStore_1.changePlayer)({ id: player.id, field: "mulchCap", value }));
                    (_b = (_a = getGameScene()) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.updateMulchCount();
                });
                $player.wanderers.onAdd((wanderer) => {
                    if (gameContainer.game &&
                        player.id === stores_1.default.getState().network.uid) {
                        const g = getGameScene();
                        if (g && g.wandererManager) {
                            g.wandererManager.addWanderer(wanderer);
                        }
                    }
                });
            });
            $state.players.onRemove((player) => {
                dispatch((0, GameStore_1.removePlayer)(player));
            });
            $state.spectators.onAdd((uid) => {
                gameContainer.initializeSpectactor(uid);
            });
        }
    }, [
        connected,
        connecting,
        initialized,
        room,
        dispatch,
        network_1.client,
        uid,
        spectatedPlayerId,
        connectToGame,
        leave
    ]);
    return ((0, jsx_runtime_1.jsxs)("main", { id: "game-wrapper", onContextMenu: (e) => e.preventDefault(), children: [(0, jsx_runtime_1.jsx)("div", { id: "game", ref: container }), loaded ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(main_sidebar_1.MainSidebar, { page: "game", leave: leave, leaveLabel: t("leave_game") }), (0, jsx_runtime_1.jsx)(game_final_rank_1.default, { rank: finalRank, hide: spectateTillTheEnd, leave: leave, visible: finalRankVisibility === FinalRankVisibility.VISIBLE }), spectate ? (0, jsx_runtime_1.jsx)(game_spectate_player_info_1.default, {}) : (0, jsx_runtime_1.jsx)(game_shop_1.default, {}), (0, jsx_runtime_1.jsx)(game_stage_info_1.default, {}), (0, jsx_runtime_1.jsx)(game_players_1.default, { click: (id) => playerClick(id) }), (0, jsx_runtime_1.jsx)(game_synergies_1.default, {}), (0, jsx_runtime_1.jsx)(game_choice_1.default, {}), (0, jsx_runtime_1.jsx)(game_dps_meter_1.default, {}), (0, jsx_runtime_1.jsx)(game_toasts_1.default, {}), currentGameEvent === events_1.GameEvent.EXPEDITIONS && (0, jsx_runtime_1.jsx)(game_expeditions_1.default, {})] })) : ((0, jsx_runtime_1.jsx)(game_loading_screen_1.default, { connectError: connectError })), (0, jsx_runtime_1.jsx)(connection_status_notification_1.ConnectionStatusNotification, {})] }));
}
//# sourceMappingURL=game.js.map