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
exports.IngameRoomsList = IngameRoomsList;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = __importDefault(require("firebase/compat/app"));
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_1 = require("react-router");
const config_1 = require("../../../../../config");
const types_1 = require("../../../../../types");
const function_1 = require("../../../../../utils/function");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const BoostersStore_1 = require("../../../stores/BoostersStore");
const LobbyStore_1 = require("../../../stores/LobbyStore");
const game_room_item_1 = __importDefault(require("./game-room-item"));
function IngameRoomsList({ gameMode }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const gameRooms = (0, hooks_1.useAppSelector)((state) => state.lobby.gameRooms).filter((r) => !gameMode || r.metadata.gameMode === gameMode);
    const navigate = (0, react_router_1.useNavigate)();
    const [isJoining, setJoining] = (0, react_1.useState)(false);
    const [sortBy, setSortBy] = (0, react_1.useState)("stage");
    const [searchQuery, setSearchQuery] = (0, react_1.useState)("");
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const extractEloFromPlayerInfo = (playerInfo) => {
        const match = playerInfo.match(/\[(\d+)\]$/);
        return match ? parseInt(match[1], 10) : 0;
    };
    const calculateAverageElo = (room) => {
        var _a;
        const playersInfo = ((_a = room.metadata) === null || _a === void 0 ? void 0 : _a.playersInfo) || [];
        if (playersInfo.length === 0)
            return 0;
        const eloValues = playersInfo.map(extractEloFromPlayerInfo);
        const totalElo = eloValues.reduce((sum, elo) => sum + elo, 0);
        return totalElo / eloValues.length;
    };
    const sortRooms = (rooms) => {
        return [...rooms].sort((a, b) => {
            var _a, _b, _c, _d, _e, _f;
            if (sortBy === "stage") {
                const stageA = ((_a = a.metadata) === null || _a === void 0 ? void 0 : _a.stageLevel) || 0;
                const stageB = ((_b = b.metadata) === null || _b === void 0 ? void 0 : _b.stageLevel) || 0;
                return stageB - stageA;
            }
            else if (sortBy === "elo") {
                const eloA = calculateAverageElo(a);
                const eloB = calculateAverageElo(b);
                return eloB - eloA;
            }
            else {
                const nameA = ((_d = (_c = a.metadata) === null || _c === void 0 ? void 0 : _c.name) === null || _d === void 0 ? void 0 : _d.toLowerCase()) || "";
                const nameB = ((_f = (_e = b.metadata) === null || _e === void 0 ? void 0 : _e.name) === null || _f === void 0 ? void 0 : _f.toLowerCase()) || "";
                return nameA.localeCompare(nameB);
            }
        });
    };
    const filterRooms = (rooms) => {
        if (!searchQuery.trim())
            return rooms;
        const searchTerm = searchQuery.toLowerCase().trim();
        return rooms.filter((room) => {
            var _a;
            const playersInfo = ((_a = room.metadata) === null || _a === void 0 ? void 0 : _a.playersInfo) || [];
            return playersInfo.some((playerInfo) => playerInfo.toLowerCase().includes(searchTerm));
        });
    };
    const filteredGameRooms = sortRooms(filterRooms(gameRooms));
    const connectToGame = (0, function_1.throttle)(function connectToGame(selectedRoom) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
            if (network_1.rooms.lobby && !isJoining && token) {
                setJoining(true);
                const game = yield network_1.client.joinById(selectedRoom.roomId, {
                    idToken: token
                });
                (0, network_1.joinGame)(game, config_1.MAX_LOADING_TIME / 1000);
                dispatch((0, LobbyStore_1.resetLobby)());
                dispatch((0, BoostersStore_1.resetBoosters)());
                navigate("/game");
            }
        });
    }, 1000);
    const onRoomAction = (room, action) => {
        var _a;
        if (action === "join" || action === "spectate") {
            connectToGame(room);
        }
        else if (action === "delete" && (user === null || user === void 0 ? void 0 : user.role) === types_1.Role.ADMIN) {
            confirm("Delete room ?") &&
                ((_a = network_1.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.DELETE_ROOM, room.roomId));
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "controls", style: {
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginBottom: "10px"
                }, children: [(0, jsx_runtime_1.jsx)("p", { children: t("games_in_progress", { count: filteredGameRooms.length }) }), (0, jsx_runtime_1.jsx)("div", { className: "spacer" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "sort-select", children: "Sort by:" }), (0, jsx_runtime_1.jsxs)("select", { id: "sort-select", value: sortBy, onChange: (e) => setSortBy(e.target.value), style: { padding: "4px 8px" }, children: [(0, jsx_runtime_1.jsx)("option", { value: "stage", children: t("stage") }), (0, jsx_runtime_1.jsx)("option", { value: "elo", children: t("average_elo") }), (0, jsx_runtime_1.jsx)("option", { value: "name", children: t("name") })] }), (0, jsx_runtime_1.jsxs)("label", { htmlFor: "search-player", children: [t("search"), ":"] }), (0, jsx_runtime_1.jsx)("input", { id: "search-player", type: "text", placeholder: t("search_player"), value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), style: { padding: "4px 8px", minWidth: "150px", maxWidth: "300px" } })] }), (0, jsx_runtime_1.jsx)("ul", { className: "hidden-scrollable room-list", children: filteredGameRooms.map((r) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(game_room_item_1.default, { room: r, click: (action) => onRoomAction(r, action) }) }, r.roomId))) })] }));
}
//# sourceMappingURL=game-rooms-menu.js.map