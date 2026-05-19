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
exports.default = AfterGame;
const jsx_runtime_1 = require("react/jsx-runtime");
const sdk_1 = require("@colyseus/sdk");
const react_1 = require("react");
const react_router_1 = require("react-router");
const CloseCodes_1 = require("../../../types/enum/CloseCodes");
const hooks_1 = require("../hooks");
const network_1 = require("../network");
const preferences_1 = require("../preferences");
const AfterGameStore_1 = require("../stores/AfterGameStore");
const after_menu_1 = __importDefault(require("./component/after/after-menu"));
const audio_1 = require("./utils/audio");
const store_1 = require("./utils/store");
function AfterGame() {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const currentPlayerId = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    const room = network_1.rooms.after;
    const initialized = (0, react_1.useRef)(false);
    const [toLobby, setToLobby] = (0, react_1.useState)(false);
    const [toAuth, setToAuth] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const reconnect = () => __awaiter(this, void 0, void 0, function* () {
            initialized.current = true;
            (0, network_1.authenticateUser)()
                .then(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                try {
                    const cachedReconnectionToken = (_a = store_1.localStore.get(store_1.LocalStoreKeys.RECONNECTION_AFTER_GAME)) === null || _a === void 0 ? void 0 : _a.reconnectionToken;
                    if (cachedReconnectionToken) {
                        const r = yield network_1.client.reconnect(cachedReconnectionToken);
                        yield initialize(r);
                        (0, network_1.joinAfter)(r);
                    }
                    else {
                        setToLobby(true);
                    }
                }
                catch (error) {
                    setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        const cachedReconnectionToken = (_a = store_1.localStore.get(store_1.LocalStoreKeys.RECONNECTION_AFTER_GAME)) === null || _a === void 0 ? void 0 : _a.reconnectionToken;
                        if (cachedReconnectionToken) {
                            const r = yield network_1.client.reconnect(cachedReconnectionToken);
                            yield initialize(r);
                            (0, network_1.joinAfter)(r);
                        }
                        else {
                            setToLobby(true);
                        }
                    }), 1000);
                }
            }))
                .catch((err) => {
                if (err === CloseCodes_1.CloseCodes.USER_NOT_AUTHENTICATED) {
                    setToAuth(true);
                }
            });
        });
        const initialize = (room) => __awaiter(this, void 0, void 0, function* () {
            store_1.localStore.delete(store_1.LocalStoreKeys.RECONNECTION_GAME);
            store_1.localStore.set(store_1.LocalStoreKeys.RECONNECTION_AFTER_GAME, { reconnectionToken: room.reconnectionToken, roomId: room.roomId }, 30);
            const $ = (0, sdk_1.getStateCallbacks)(room);
            const $state = $(room.state);
            $state.players.onAdd((player) => {
                dispatch((0, AfterGameStore_1.addPlayer)(player));
                if (player.id === currentPlayerId) {
                    (0, audio_1.playSound)(audio_1.SOUNDS[("FINISH" + player.rank)], (0, preferences_1.preference)("musicVolume") / 100);
                }
            });
            $state.listen("eligibleToELO", (value, previousValue) => {
                dispatch((0, AfterGameStore_1.setElligibilityToELO)(value));
            });
            $state.listen("eligibleToXP", (value, previousValue) => {
                dispatch((0, AfterGameStore_1.setElligibilityToXP)(value));
            });
            $state.listen("gameMode", (value, previousValue) => {
                dispatch((0, AfterGameStore_1.setGameMode)(value));
            });
        });
        if (!initialized.current) {
            reconnect();
        }
    });
    if (toLobby) {
        return (0, jsx_runtime_1.jsx)(react_router_1.Navigate, { to: "/lobby" });
    }
    if (toAuth) {
        return (0, jsx_runtime_1.jsx)(react_router_1.Navigate, { to: "/auth" });
    }
    else {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "after-game", children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", style: { margin: "10px 0 0 10px" }, onClick: () => {
                        if (room === null || room === void 0 ? void 0 : room.connection.isOpen) {
                            room.leave();
                        }
                        dispatch((0, AfterGameStore_1.leaveAfter)());
                        store_1.localStore.delete(store_1.LocalStoreKeys.RECONNECTION_AFTER_GAME);
                        setToLobby(true);
                    }, children: "Back to Lobby" }), (0, jsx_runtime_1.jsx)(after_menu_1.default, {})] }));
    }
}
//# sourceMappingURL=after-game.js.map