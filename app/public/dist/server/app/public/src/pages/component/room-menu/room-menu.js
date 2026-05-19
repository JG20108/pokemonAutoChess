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
exports.default = RoomMenu;
exports.RoomList = RoomList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_1 = require("react-router");
const react_tabs_1 = require("react-tabs");
const types_1 = require("../../../../../types");
const Game_1 = require("../../../../../types/enum/Game");
const function_1 = require("../../../../../utils/function");
const lobby_logic_1 = require("../../../game/lobby-logic");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const game_mode_icon_1 = require("../icons/game-mode-icon");
const game_rooms_menu_1 = require("./game-rooms-menu");
const room_item_1 = __importDefault(require("./room-item"));
const room_selection_menu_1 = require("./room-selection-menu");
require("./room-menu.css");
function RoomMenu() {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_1.useNavigate)();
    const preparationRooms = (0, hooks_1.useAppSelector)((state) => state.lobby.preparationRooms);
    const gameRooms = (0, hooks_1.useAppSelector)((state) => state.lobby.gameRooms);
    const ccu = (0, hooks_1.useAppSelector)((state) => state.lobby.ccu);
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const [showRoomSelectionMenu, setShowRoomSelectionMenu] = (0, react_1.useState)(false);
    const requestRoom = (0, function_1.throttle)(function (gameMode) {
        return __awaiter(this, void 0, void 0, function* () {
            if (network_1.rooms.lobby) {
                network_1.rooms.lobby.send(types_1.Transfer.REQUEST_ROOM, gameMode);
                setShowRoomSelectionMenu(false);
            }
        });
    }, 1000);
    const requestJoiningExistingRoom = (0, function_1.block)(function join(selectedRoom) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const passwordProtected = (_a = selectedRoom.metadata) === null || _a === void 0 ? void 0 : _a.passwordProtected;
            if (network_1.rooms.lobby) {
                let password;
                if (passwordProtected &&
                    (user === null || user === void 0 ? void 0 : user.role) !== types_1.Role.ADMIN &&
                    (user === null || user === void 0 ? void 0 : user.role) !== types_1.Role.MODERATOR) {
                    const inputPassword = prompt(t("room_menu.room_is_private"));
                    if (!inputPassword)
                        return;
                    password = inputPassword;
                }
                yield (0, lobby_logic_1.joinExistingPreparationRoom)(selectedRoom.roomId, dispatch, navigate, password);
            }
        });
    });
    const onRoomAction = (room, action) => {
        var _a;
        if (action === "join") {
            requestJoiningExistingRoom(room);
        }
        else if (action === "delete" && (user === null || user === void 0 ? void 0 : user.role) === types_1.Role.ADMIN) {
            confirm("Delete room ?") &&
                ((_a = network_1.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.DELETE_ROOM, room.roomId));
        }
    };
    const hasTournamentLobbies = gameRooms.some((r) => r.metadata.gameMode === Game_1.GameMode.TOURNAMENT);
    return ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { className: "my-container room-menu custom-bg hidden-scrollable", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("rooms") }), (0, jsx_runtime_1.jsxs)("p", { style: { position: "absolute", right: "10px", top: "10px" }, children: [t("players", { count: ccu }), ",", " ", t("rooms", { count: preparationRooms.length })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("available_rooms") }), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: (0, jsx_runtime_1.jsx)("span", { children: t("in_game") }) }), (0, jsx_runtime_1.jsxs)(react_tabs_1.Tab, { children: [(0, jsx_runtime_1.jsx)(game_mode_icon_1.GameModeIcon, { gameMode: Game_1.GameMode.CLASSIC }), (0, jsx_runtime_1.jsx)("span", { children: t(`game_modes.${Game_1.GameMode.CLASSIC}`) })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.Tab, { children: [(0, jsx_runtime_1.jsx)(game_mode_icon_1.GameModeIcon, { gameMode: Game_1.GameMode.RANKED }), (0, jsx_runtime_1.jsx)("span", { children: t(`game_modes.${Game_1.GameMode.RANKED}`) })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.Tab, { children: [(0, jsx_runtime_1.jsx)(game_mode_icon_1.GameModeIcon, { gameMode: Game_1.GameMode.SCRIBBLE }), (0, jsx_runtime_1.jsx)("span", { children: t(`game_modes.${Game_1.GameMode.SCRIBBLE}`) })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.Tab, { children: [(0, jsx_runtime_1.jsx)(game_mode_icon_1.GameModeIcon, { gameMode: Game_1.GameMode.CUSTOM_LOBBY }), (0, jsx_runtime_1.jsx)("span", { children: t(`game_modes.${Game_1.GameMode.CUSTOM_LOBBY}`) })] }), hasTournamentLobbies && ((0, jsx_runtime_1.jsxs)(react_tabs_1.Tab, { children: [(0, jsx_runtime_1.jsx)(game_mode_icon_1.GameModeIcon, { gameMode: Game_1.GameMode.TOURNAMENT }), (0, jsx_runtime_1.jsx)("span", { children: t(`game_modes.${Game_1.GameMode.TOURNAMENT}`) })] }))] }), !user && (0, jsx_runtime_1.jsx)("p", { className: "subtitle", children: t("loading") }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(RoomList, { onRoomAction: onRoomAction }) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(game_rooms_menu_1.IngameRoomsList, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(game_rooms_menu_1.IngameRoomsList, { gameMode: Game_1.GameMode.CLASSIC }) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(game_rooms_menu_1.IngameRoomsList, { gameMode: Game_1.GameMode.RANKED }) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(game_rooms_menu_1.IngameRoomsList, { gameMode: Game_1.GameMode.SCRIBBLE }) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(game_rooms_menu_1.IngameRoomsList, { gameMode: Game_1.GameMode.CUSTOM_LOBBY }) }), hasTournamentLobbies && ((0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(game_rooms_menu_1.IngameRoomsList, { gameMode: Game_1.GameMode.TOURNAMENT }) })), (0, jsx_runtime_1.jsx)(room_selection_menu_1.RoomSelectionMenu, { show: showRoomSelectionMenu, onClose: () => setShowRoomSelectionMenu(false), onSelectMode: (mode) => requestRoom(mode) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setShowRoomSelectionMenu(true), className: "bubbly green play-button", children: t("new_game") })] }));
}
function RoomList({ gameMode, onRoomAction }) {
    const preparationRooms = (0, hooks_1.useAppSelector)((state) => state.lobby.preparationRooms);
    return ((0, jsx_runtime_1.jsx)("ul", { className: "room-list hidden-scrollable", children: preparationRooms
            .filter((r) => !gameMode || r.metadata.gameMode === gameMode)
            .map((r) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(room_item_1.default, { room: r, click: (action) => onRoomAction(r, action) }) }, r.roomId))) }));
}
//# sourceMappingURL=room-menu.js.map