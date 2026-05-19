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
exports.default = Lobby;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = __importDefault(require("firebase/compat/app"));
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_1 = require("react-router");
const types_1 = require("../../../types");
const function_1 = require("../../../utils/function");
const lobby_logic_1 = require("../game/lobby-logic");
const hooks_1 = require("../hooks");
const network_1 = require("../network");
const BoostersStore_1 = require("../stores/BoostersStore");
const LobbyStore_1 = require("../stores/LobbyStore");
const NetworkStore_1 = require("../stores/NetworkStore");
const events_menu_1 = require("./component/events-menu/events-menu");
const leaderboard_menu_1 = __importDefault(require("./component/leaderboard/leaderboard-menu"));
const main_sidebar_1 = require("./component/main-sidebar/main-sidebar");
const modal_1 = require("./component/modal/modal");
const notification_modal_1 = require("./component/notifications/notification-modal");
const room_menu_1 = __importDefault(require("./component/room-menu/room-menu"));
const jsx_1 = require("./utils/jsx");
const store_1 = require("./utils/store");
require("./lobby.css");
function Lobby() {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const navigate = (0, react_router_1.useNavigate)();
    const networkError = (0, hooks_1.useAppSelector)((state) => state.network.error);
    const pendingGameId = (0, hooks_1.useAppSelector)((state) => state.network.pendingGameId);
    const notifications = (0, hooks_1.useAppSelector)((state) => state.network.notifications);
    const gameRooms = (0, hooks_1.useAppSelector)((state) => state.lobby.gameRooms);
    const showGameReconnect = pendingGameId != null && gameRooms.some((r) => r.roomId === pendingGameId);
    const { t } = (0, react_i18next_1.useTranslation)();
    const lobbyJoined = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(() => {
        if (!lobbyJoined.current) {
            (0, lobby_logic_1.joinLobbyRoom)(dispatch, navigate);
            lobbyJoined.current = true;
        }
    }, [lobbyJoined]);
    const signOut = (0, react_1.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
        (0, network_1.leaveRoom)("lobby");
        yield app_1.default.auth().signOut();
        dispatch((0, LobbyStore_1.resetLobby)());
        dispatch((0, BoostersStore_1.resetBoosters)());
        dispatch((0, NetworkStore_1.logOut)());
        navigate("/");
    }), [dispatch]);
    const handleNotificationClose = (notificationId) => {
        var _a;
        (_a = network_1.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.NOTIFICATION_SEEN, notificationId);
        dispatch((0, NetworkStore_1.clearNotification)(notificationId));
    };
    const reconnectToGame = (0, function_1.throttle)(function reconnectToGame() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const idToken = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
            if (idToken && pendingGameId) {
                const game = yield network_1.client.joinById(pendingGameId, {
                    idToken
                });
                store_1.localStore.set(store_1.LocalStoreKeys.RECONNECTION_GAME, { reconnectionToken: game.reconnectionToken, roomId: game.roomId }, 30);
                (0, network_1.leaveRoom)("lobby", true);
                dispatch((0, LobbyStore_1.resetLobby)());
                dispatch((0, BoostersStore_1.resetBoosters)());
                navigate("/game");
            }
        });
    }, 1000);
    return ((0, jsx_runtime_1.jsxs)("main", { className: "lobby", children: [(0, jsx_runtime_1.jsx)(main_sidebar_1.MainSidebar, { page: "main_lobby", leave: signOut, leaveLabel: t("auth.sign_out") }), (0, jsx_runtime_1.jsx)("div", { className: "lobby-container", children: (0, jsx_runtime_1.jsx)(MainLobby, {}) }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { show: showGameReconnect, header: t("game-reconnect-modal-title"), body: t("game-reconnect-modal-body"), footer: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly green", onClick: reconnectToGame, children: t("yes") }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly red", onClick: () => {
                                dispatch((0, NetworkStore_1.setPendingGameId)(null));
                            }, children: t("no") })] }) }), (0, jsx_runtime_1.jsx)(notification_modal_1.NotificationModal, { notifications: notifications, onClose: handleNotificationClose }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { show: networkError != null, onClose: () => {
                    dispatch((0, NetworkStore_1.setErrorAlertMessage)(null));
                }, className: "is-dark basic-modal-body", body: (0, jsx_runtime_1.jsx)("p", { style: { padding: "1em" }, children: networkError }) })] }));
}
function MainLobby() {
    const [activeSection, setActive] = (0, react_1.useState)("leaderboard");
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "main-lobby", children: [(0, jsx_runtime_1.jsx)("nav", { className: "main-lobby-nav", children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { onClick: () => setActive("leaderboard"), className: (0, jsx_1.cc)({ active: activeSection === "leaderboard" }), children: [(0, jsx_runtime_1.jsx)("img", { width: 32, height: 32, src: `assets/ui/leaderboard.svg` }), t("leaderboard")] }), (0, jsx_runtime_1.jsxs)("li", { onClick: () => setActive("rooms"), className: (0, jsx_1.cc)({ active: activeSection === "rooms" }), children: [(0, jsx_runtime_1.jsx)("img", { width: 32, height: 32, src: `assets/ui/room.svg` }), t("rooms")] }), (0, jsx_runtime_1.jsxs)("li", { onClick: () => setActive("events"), className: (0, jsx_1.cc)({ active: activeSection === "events" }), children: [(0, jsx_runtime_1.jsx)("img", { width: 32, height: 32, src: `assets/ui/chat.svg` }), t("events")] })] }) }), (0, jsx_runtime_1.jsx)("section", { className: (0, jsx_1.cc)("leaderboard", {
                    active: activeSection === "leaderboard"
                }), children: (0, jsx_runtime_1.jsx)(leaderboard_menu_1.default, {}) }), (0, jsx_runtime_1.jsx)("section", { className: (0, jsx_1.cc)("rooms", { active: activeSection === "rooms" }), children: (0, jsx_runtime_1.jsx)(room_menu_1.default, {}) }), (0, jsx_runtime_1.jsx)("section", { className: (0, jsx_1.cc)("events", {
                    active: activeSection === "events"
                }), children: (0, jsx_runtime_1.jsx)(events_menu_1.EventsMenu, {}) })] }));
}
//# sourceMappingURL=lobby.js.map