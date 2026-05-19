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
exports.default = Preparation;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@colyseus/sdk");
const app_1 = __importDefault(require("firebase/compat/app"));
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_1 = require("react-router");
const config_1 = require("../../../config");
const types_1 = require("../../../types");
const CloseCodes_1 = require("../../../types/enum/CloseCodes");
const ConnectionStatus_1 = require("../../../types/enum/ConnectionStatus");
const Game_1 = require("../../../types/enum/Game");
const logger_1 = require("../../../utils/logger");
const hooks_1 = require("../hooks");
const network_1 = require("../network");
const NetworkStore_1 = require("../stores/NetworkStore");
const PreparationStore_1 = require("../stores/PreparationStore");
const chat_1 = __importDefault(require("./component/chat/chat"));
const main_sidebar_1 = require("./component/main-sidebar/main-sidebar");
const preparation_menu_1 = __importDefault(require("./component/preparation/preparation-menu"));
const connection_status_notification_1 = require("./component/system/connection-status-notification");
const audio_1 = require("./utils/audio");
const store_1 = require("./utils/store");
require("./preparation.css");
function Preparation() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_1.useNavigate)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const room = network_1.rooms.preparation;
    const user = (0, hooks_1.useAppSelector)((state) => state.preparation.user);
    const initialized = (0, react_1.useRef)(false);
    const connectingToGame = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(() => {
        const reconnect = () => __awaiter(this, void 0, void 0, function* () {
            (0, network_1.authenticateUser)()
                .then((user) => __awaiter(this, void 0, void 0, function* () {
                var _a, _b;
                try {
                    if (!initialized.current) {
                        initialized.current = true;
                        let r;
                        if ((_a = network_1.rooms.preparation) === null || _a === void 0 ? void 0 : _a.connection.isOpen) {
                            r = network_1.rooms.preparation;
                        }
                        else {
                            const cachedReconnectionToken = (_b = store_1.localStore.get(store_1.LocalStoreKeys.RECONNECTION_PREPARATION)) === null || _b === void 0 ? void 0 : _b.reconnectionToken;
                            if (cachedReconnectionToken) {
                                try {
                                    r = yield network_1.client.reconnect(cachedReconnectionToken);
                                    if (r.name !== "preparation") {
                                        throw new Error(`Expected to join a preparation room but joined ${r.name} instead`);
                                    }
                                    dispatch((0, NetworkStore_1.setConnectionStatus)(ConnectionStatus_1.ConnectionStatus.CONNECTED));
                                }
                                catch (error) {
                                    logger_1.logger.error(error);
                                    store_1.localStore.delete(store_1.LocalStoreKeys.RECONNECTION_PREPARATION);
                                    dispatch((0, PreparationStore_1.resetPreparation)());
                                    navigate("/lobby");
                                    return;
                                }
                                (0, network_1.joinPreparation)(r);
                            }
                            else {
                                navigate("/lobby");
                                return;
                            }
                        }
                        yield initialize(r, user.uid);
                    }
                }
                catch (error) {
                    logger_1.logger.error(error);
                    dispatch((0, NetworkStore_1.setErrorAlertMessage)(t("errors.UNKNOWN_ERROR", { error })));
                    navigate("/");
                }
            }))
                .catch((err) => {
                dispatch((0, NetworkStore_1.setErrorAlertMessage)(t("errors.USER_NOT_AUTHENTICATED")));
                navigate("/");
            });
        });
        const initialize = (room, uid) => __awaiter(this, void 0, void 0, function* () {
            const $ = (0, sdk_1.getStateCallbacks)(room);
            const $state = $(room.state);
            $state.listen("gameStartedAt", (value, previousValue) => {
                dispatch((0, PreparationStore_1.setGameStarted)(value));
            });
            $state.listen("ownerId", (value, previousValue) => {
                dispatch((0, PreparationStore_1.setOwnerId)(value));
            });
            $state.listen("ownerName", (value, previousValue) => {
                dispatch((0, PreparationStore_1.setOwnerName)(value));
            });
            $state.listen("name", (value, previousValue) => {
                dispatch((0, PreparationStore_1.setName)(value));
            });
            $state.listen("password", (value, previousValue) => {
                dispatch((0, PreparationStore_1.setPassword)(value));
            });
            $state.listen("noElo", (value, previousValue) => {
                dispatch((0, PreparationStore_1.setNoELO)(value));
            });
            $state.listen("minRank", (value, previousValue) => {
                dispatch((0, PreparationStore_1.setMinRank)(value));
            });
            $state.listen("maxRank", (value, previousValue) => {
                dispatch((0, PreparationStore_1.setMaxRank)(value));
            });
            $state.listen("whitelist", (value, previousValue) => {
                dispatch((0, PreparationStore_1.setWhiteList)(value));
            });
            $state.listen("blacklist", (value, previousValue) => {
                dispatch((0, PreparationStore_1.setBlackList)(value));
            });
            $state.listen("gameMode", (value, previousValue) => {
                dispatch((0, PreparationStore_1.setGameMode)(value));
            });
            $state.listen("specialGameRule", (value, previousValue) => {
                dispatch((0, PreparationStore_1.setSpecialGameRule)(value));
            });
            $state.users.onAdd((user) => {
                dispatch((0, PreparationStore_1.addUser)(user));
                if (user.uid === uid) {
                    dispatch((0, PreparationStore_1.setUser)(user));
                    if (room.state.gameMode !== Game_1.GameMode.CUSTOM_LOBBY) {
                        (0, network_1.toggleReady)(true);
                    }
                }
                else if (!user.isBot) {
                    (0, audio_1.playSound)(audio_1.SOUNDS.JOIN_ROOM);
                }
                const $user = $(user);
                const fields = [
                    "anonymous",
                    "avatar",
                    "elo",
                    "uid",
                    "isBot",
                    "name",
                    "role",
                    "title",
                    "ready",
                    "twitchLogin",
                    "twitchDisplayName"
                ];
                fields.forEach((field) => {
                    $user.listen(field, (value, previousValue) => {
                        if (field === "ready" && value) {
                            (0, audio_1.playSound)(audio_1.SOUNDS.SET_READY);
                        }
                        dispatch((0, PreparationStore_1.changeUser)({ id: user.uid, field: field, value: value }));
                    });
                });
            });
            $state.users.onRemove((u) => {
                dispatch((0, PreparationStore_1.removeUser)(u.uid));
                if (!u.isBot && u.uid !== uid && !connectingToGame.current) {
                    (0, audio_1.playSound)(audio_1.SOUNDS.LEAVE_ROOM);
                }
            });
            $state.messages.onAdd((m) => {
                dispatch((0, PreparationStore_1.pushMessage)(m));
            });
            $state.messages.onRemove((m) => {
                dispatch((0, PreparationStore_1.removeMessage)(m));
            });
            room.onDrop((code) => {
                const shouldReconnect = code === CloseCodes_1.CloseCodes.ABNORMAL_CLOSURE || code === CloseCodes_1.CloseCodes.TIMEOUT;
                if (shouldReconnect) {
                    dispatch((0, NetworkStore_1.setConnectionStatus)(ConnectionStatus_1.ConnectionStatus.CONNECTION_LOST));
                    logger_1.logger.log("Connection closed unexpectedly or timed out. Attempting reconnect.");
                    store_1.localStore.set(store_1.LocalStoreKeys.RECONNECTION_PREPARATION, { reconnectionToken: room.reconnectionToken, roomId: room.roomId }, 30);
                }
            });
            room.onReconnect(() => {
                dispatch((0, NetworkStore_1.setConnectionStatus)(ConnectionStatus_1.ConnectionStatus.CONNECTED));
            });
            room.onLeave((code) => {
                var _a;
                const shouldGoToLobby = [
                    CloseCodes_1.CloseCodes.USER_KICKED,
                    CloseCodes_1.CloseCodes.ROOM_DELETED,
                    CloseCodes_1.CloseCodes.ROOM_FULL,
                    CloseCodes_1.CloseCodes.ROOM_EMPTY,
                    CloseCodes_1.CloseCodes.USER_BANNED,
                    CloseCodes_1.CloseCodes.USER_RANK_TOO_LOW
                ].includes(code);
                logger_1.logger.info(`left preparation room with code ${code}`);
                store_1.localStore.delete(store_1.LocalStoreKeys.RECONNECTION_PREPARATION);
                dispatch((0, PreparationStore_1.resetPreparation)());
                if (shouldGoToLobby) {
                    const errorMessage = (_a = CloseCodes_1.CloseCodesMessages[code]) !== null && _a !== void 0 ? _a : "UNKNOWN_ERROR";
                    if (errorMessage) {
                        dispatch((0, NetworkStore_1.setErrorAlertMessage)(t(`errors.${errorMessage}`)));
                    }
                    navigate("/lobby");
                    (0, audio_1.playSound)(audio_1.SOUNDS.LEAVE_ROOM);
                }
                else {
                    dispatch((0, NetworkStore_1.setConnectionStatus)(ConnectionStatus_1.ConnectionStatus.CONNECTION_FAILED));
                }
            });
            room.onMessage(types_1.Transfer.GAME_START, (roomId) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
                if (token && !connectingToGame.current) {
                    (0, audio_1.playSound)(audio_1.SOUNDS.START_GAME);
                    connectingToGame.current = true;
                    const game = yield network_1.client.joinById(roomId, {
                        idToken: token
                    });
                    store_1.localStore.set(store_1.LocalStoreKeys.RECONNECTION_GAME, { reconnectionToken: game.reconnectionToken, roomId: game.roomId }, config_1.MAX_LOADING_TIME / 1000);
                    yield Promise.allSettled([
                        room.connection.isOpen && room.leave(),
                        game.connection.isOpen && game.leave(false)
                    ]);
                    dispatch((0, PreparationStore_1.resetPreparation)());
                    navigate("/game");
                }
            }));
        });
        if (!initialized.current) {
            reconnect();
        }
    }, [initialized]);
    const leavePreparationRoom = (0, react_1.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
        if (room === null || room === void 0 ? void 0 : room.connection.isOpen) {
            yield room.leave(true);
        }
        store_1.localStore.delete(store_1.LocalStoreKeys.RECONNECTION_PREPARATION);
        dispatch((0, PreparationStore_1.resetPreparation)());
        navigate("/lobby");
        (0, audio_1.playSound)(audio_1.SOUNDS.LEAVE_ROOM);
    }), [room]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "preparation-page", children: [(0, jsx_runtime_1.jsx)(main_sidebar_1.MainSidebar, { page: "preparation", leaveLabel: t("leave_room"), leave: leavePreparationRoom }), (0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)(preparation_menu_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "my-container custom-bg chat-container", children: [(0, jsx_runtime_1.jsx)("h2", { children: (user === null || user === void 0 ? void 0 : user.anonymous) ? t("chat_disabled_anonymous") : t("chat") }), (0, jsx_runtime_1.jsx)(chat_1.default, { source: "preparation", canWrite: user ? !user.anonymous : false })] })] }), (0, jsx_runtime_1.jsx)(connection_status_notification_1.ConnectionStatusNotification, {})] }));
}
//# sourceMappingURL=preparation.js.map