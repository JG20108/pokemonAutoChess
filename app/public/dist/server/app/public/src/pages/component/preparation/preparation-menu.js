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
exports.default = PreparationMenu;
exports.RankSelect = RankSelect;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = __importDefault(require("firebase/compat/app"));
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const types_1 = require("../../../../../types");
const EloRank_1 = require("../../../../../types/enum/EloRank");
const Game_1 = require("../../../../../types/enum/Game");
const SpecialGameRule_1 = require("../../../../../types/enum/SpecialGameRule");
const elo_1 = require("../../../../../utils/elo");
const function_1 = require("../../../../../utils/function");
const number_1 = require("../../../../../utils/number");
const window_1 = require("../../../../../utils/window");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const jsx_1 = require("../../utils/jsx");
const game_mode_icon_1 = require("../icons/game-mode-icon");
const bot_select_modal_1 = require("./bot-select-modal");
const preparation_menu_user_1 = __importDefault(require("./preparation-menu-user"));
require("./preparation-menu.css");
const object_1 = require("../../../../../utils/object");
function PreparationMenu() {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const users = (0, hooks_1.useAppSelector)((state) => state.preparation.users);
    const user = (0, hooks_1.useAppSelector)((state) => state.preparation.user);
    const name = (0, hooks_1.useAppSelector)((state) => state.preparation.name);
    const ownerId = (0, hooks_1.useAppSelector)((state) => state.preparation.ownerId);
    const password = (0, hooks_1.useAppSelector)((state) => state.preparation.password);
    const noElo = (0, hooks_1.useAppSelector)((state) => state.preparation.noElo);
    const specialGameRule = (0, hooks_1.useAppSelector)((state) => state.preparation.specialGameRule);
    const minRank = (0, hooks_1.useAppSelector)((state) => state.preparation.minRank);
    const maxRank = (0, hooks_1.useAppSelector)((state) => state.preparation.maxRank);
    const [showBotSelectModal, setShowBotSelectModal] = (0, react_1.useState)(false);
    const uid = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    const isOwner = (0, hooks_1.useAppSelector)((state) => state.preparation.ownerId === state.network.uid);
    const gameMode = (0, hooks_1.useAppSelector)((state) => state.preparation.gameMode);
    const [botDifficulty, setBotDifficulty] = (0, react_1.useState)(Game_1.BotDifficulty.MEDIUM);
    const isReady = (_a = users.find((user) => user.uid === uid)) === null || _a === void 0 ? void 0 : _a.ready;
    const nbUsersReady = users.filter((user) => user.ready).length;
    const allUsersReady = users.every((user) => user.ready) && nbUsersReady > 1;
    const isAdmin = (user === null || user === void 0 ? void 0 : user.role) === types_1.Role.ADMIN;
    const isModerator = (user === null || user === void 0 ? void 0 : user.role) === types_1.Role.MODERATOR;
    const nbExpectedPlayers = (0, hooks_1.useAppSelector)((state) => state.preparation.whitelist && state.preparation.whitelist.length > 0
        ? (0, number_1.max)(config_1.MAX_PLAYERS_PER_GAME)(state.preparation.whitelist.length)
        : config_1.MAX_PLAYERS_PER_GAME);
    (0, react_1.useEffect)(() => {
        if (allUsersReady) {
            (0, window_1.setTitleNotificationIcon)("🟢");
        }
        else if (nbUsersReady === 0) {
            (0, window_1.setTitleNotificationIcon)("🔴");
        }
        else if (nbUsersReady === users.length - 1) {
            (0, window_1.setTitleNotificationIcon)("🟡");
        }
        else {
            (0, window_1.setTitleNotificationIcon)("🟠");
        }
    }, [nbUsersReady, users.length, allUsersReady]);
    const humans = users.filter((u) => !u.isBot);
    const isEligibleForELO = gameMode === Game_1.GameMode.CLASSIC || humans.length >= 2;
    const averageElo = humans.length > 0
        ? Math.round(humans.reduce((acc, u) => acc + u.elo, 0) / humans.length)
        : 0;
    function togglePrivate() {
        if (password === null || password === undefined) {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            const randomBytes = new Uint8Array(4);
            crypto.getRandomValues(randomBytes);
            const newPassword = Array.from(randomBytes, (b) => chars[b % chars.length]).join("");
            (0, network_1.changeRoomPassword)(newPassword);
        }
        else {
            (0, network_1.changeRoomPassword)(null);
        }
    }
    function toggleNoElo() {
        (0, network_1.setNoElo)(!noElo);
    }
    const startGame = (0, function_1.throttle)(function startGame() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (network_1.rooms.preparation) {
                const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
                if (token) {
                    (0, network_1.gameStartRequest)(token);
                }
            }
        });
    }, 1000);
    const changeMinRank = (newMinRank) => {
        (0, network_1.changeRoomMinMaxRanks)({
            minRank: newMinRank,
            maxRank: maxRank
        });
    };
    const changeMaxRank = (newMaxRank) => {
        (0, network_1.changeRoomMinMaxRanks)({
            minRank: minRank,
            maxRank: newMaxRank
        });
    };
    const changeSpecialRule = (rule) => {
        (0, network_1.setSpecialRule)(rule === "none" ? null : rule);
    };
    const headerMessage = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [gameMode === Game_1.GameMode.RANKED && ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)(game_mode_icon_1.GameModeIcon, { gameMode: gameMode }), t("ranked_game_hint")] })), (gameMode === Game_1.GameMode.SCRIBBLE || specialGameRule != null) && ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)(game_mode_icon_1.GameModeIcon, { gameMode: gameMode }), t("smeargle_scribble_hint")] })), gameMode === Game_1.GameMode.CLASSIC && ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)(game_mode_icon_1.GameModeIcon, { gameMode: gameMode }), t("classic_hint")] })), noElo === true ? ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("img", { alt: t("no_elo"), title: t("no_elo_hint"), className: "noelo icon", src: "/assets/ui/noelo.png" }), t("no_elo_hint")] })) : isEligibleForELO ? ((0, jsx_runtime_1.jsxs)("p", { children: [t("eligible_elo_hint"), " ", t("average_elo"), ": ", averageElo, " ;", " ", t("GLHF"), " !"] })) : users.length > 1 ? ((0, jsx_runtime_1.jsx)("p", { children: t("not_eligible_elo_hint") })) : null, gameMode === Game_1.GameMode.CUSTOM_LOBBY && users.length === 1 && ((0, jsx_runtime_1.jsx)("p", { children: config_1.BOTS_ENABLED
                    ? t("add_bot_or_wait_hint")
                    : t("wait_for_players_hint") }))] }));
    const roomPrivateButton = gameMode === Game_1.GameMode.CUSTOM_LOBBY &&
        (isOwner || isAdmin) && ((0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: togglePrivate, title: password ? t("make_room_public_hint") : t("make_room_private_hint"), children: password ? t("make_room_public") : t("make_room_private") }));
    const roomEloButton = gameMode === Game_1.GameMode.CUSTOM_LOBBY && isAdmin && ((0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: toggleNoElo, title: noElo ? t("enable_elo_hint") : t("disable_elo_hint"), children: noElo ? t("enable_elo") : t("disable_elo") }));
    const minMaxRanks = gameMode === Game_1.GameMode.CUSTOM_LOBBY && isOwner && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(RankSelect, { label: t("minimum_rank"), value: minRank !== null && minRank !== void 0 ? minRank : EloRank_1.EloRank.LEVEL_BALL, onChange: changeMinRank }), (0, jsx_runtime_1.jsx)(RankSelect, { label: t("maximum_rank"), value: maxRank !== null && maxRank !== void 0 ? maxRank : EloRank_1.EloRank.BEAST_BALL, onChange: changeMaxRank })] }));
    const scribbleRule = gameMode === Game_1.GameMode.CUSTOM_LOBBY &&
        isAdmin &&
        noElo && ((0, jsx_runtime_1.jsxs)("label", { children: [t("game_modes.SCRIBBLE"), (0, jsx_runtime_1.jsxs)("select", { onChange: (e) => changeSpecialRule(e.target.value), value: specialGameRule !== null && specialGameRule !== void 0 ? specialGameRule : "none", children: [(0, jsx_runtime_1.jsx)("option", { value: "none", children: t("no_rule") }), (0, object_1.keys)(SpecialGameRule_1.SpecialGameRule).map((rule) => ((0, jsx_runtime_1.jsx)("option", { value: rule, children: t(`scribble.${rule}`) }, rule)))] })] }));
    const roomNameInput = gameMode === Game_1.GameMode.CUSTOM_LOBBY &&
        (isModerator || isAdmin) &&
        user &&
        !user.anonymous && ((0, jsx_runtime_1.jsxs)("div", { className: "my-input-group", children: [(0, jsx_runtime_1.jsx)("input", { maxLength: 30, type: "text", placeholder: name, style: { flex: 1 }, onChange: (e) => {
                    setInputValue(e.target.value);
                }, className: "with-button" }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => (0, network_1.changeRoomName)(inputValue), children: t("change_room_name") })] }));
    const botControls = gameMode === Game_1.GameMode.CUSTOM_LOBBY &&
        (isOwner || isAdmin) && ((0, jsx_runtime_1.jsxs)("div", { className: "my-input-group", children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => {
                    if (botDifficulty === Game_1.BotDifficulty.CUSTOM) {
                        setShowBotSelectModal(true);
                    }
                    else {
                        (0, network_1.addBot)(botDifficulty);
                    }
                }, children: t("add_bot") }), (0, jsx_runtime_1.jsxs)("select", { value: botDifficulty, onChange: (e) => {
                    setBotDifficulty(parseInt(e.target.value, 10));
                }, children: [(0, jsx_runtime_1.jsx)("option", { value: Game_1.BotDifficulty.BEGINNER, children: t("bot_difficulty.BEGINNER") }), (0, jsx_runtime_1.jsx)("option", { value: Game_1.BotDifficulty.EASY, children: t("bot_difficulty.EASY") }), (0, jsx_runtime_1.jsx)("option", { value: Game_1.BotDifficulty.MEDIUM, children: t("bot_difficulty.MEDIUM") }), (0, jsx_runtime_1.jsx)("option", { value: Game_1.BotDifficulty.HARD, children: t("bot_difficulty.HARD") }), (0, jsx_runtime_1.jsx)("option", { value: Game_1.BotDifficulty.EXTREME, children: t("bot_difficulty.EXTREME") }), (0, jsx_runtime_1.jsx)("option", { value: Game_1.BotDifficulty.MASTER, children: t("bot_difficulty.MASTER") }), (0, jsx_runtime_1.jsx)("option", { value: Game_1.BotDifficulty.CUSTOM, children: t("bot_difficulty.CUSTOM") })] })] }));
    const roomInfo = gameMode === Game_1.GameMode.CUSTOM_LOBBY && ((0, jsx_runtime_1.jsx)("p", { className: "room-info", children: password && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [t("room_password"), ": ", (0, jsx_runtime_1.jsx)("b", { children: password })] })) }));
    const readyButton = (gameMode === Game_1.GameMode.CUSTOM_LOBBY || !isReady) &&
        users.length > 0 && ((0, jsx_runtime_1.jsxs)("button", { className: (0, jsx_1.cc)("bubbly", "ready-button", isReady ? "green" : "orange"), onClick: () => {
            (0, network_1.toggleReady)(!isReady);
        }, children: [t("ready"), " ", isReady ? "✔" : "?"] }));
    const startGameButton = (isOwner || isAdmin) && ((0, jsx_runtime_1.jsx)("button", { className: (0, jsx_1.cc)("bubbly", {
            green: allUsersReady,
            orange: !allUsersReady
        }), onClick: startGame, "data-tooltip-id": "start-game", children: t("start_game") }));
    return ((0, jsx_runtime_1.jsxs)("div", { className: "preparation-menu my-container is-centered custom-bg", children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsxs)("h1", { children: [(0, elo_1.formatMinMaxRanks)(minRank, maxRank), " ", name, ": ", users.length, "/", nbExpectedPlayers] }), headerMessage] }), (0, jsx_runtime_1.jsx)("div", { className: "preparation-menu-users", children: users.map((u) => {
                    return ((0, jsx_runtime_1.jsx)(preparation_menu_user_1.default, { user: u, isOwner: isOwner, ownerId: ownerId }, u.uid));
                }) }), (0, jsx_runtime_1.jsxs)("div", { className: "actions", children: [(0, jsx_runtime_1.jsxs)("div", { children: [roomNameInput, (0, jsx_runtime_1.jsx)("div", { className: "spacer" }), scribbleRule] }), (config_1.BOTS_ENABLED || isAdmin) && (0, jsx_runtime_1.jsx)("div", { children: botControls }), (0, jsx_runtime_1.jsxs)("div", { children: [roomEloButton, minMaxRanks, (0, jsx_runtime_1.jsx)("div", { className: "spacer" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [roomPrivateButton, roomInfo, (0, jsx_runtime_1.jsx)("div", { className: "spacer" }), readyButton, startGameButton] })] }), isOwner && showBotSelectModal && ((0, jsx_runtime_1.jsx)(bot_select_modal_1.BotSelectModal, { botsSelected: users.filter((u) => u.isBot).map((u) => u.uid), close: () => setShowBotSelectModal(false) }))] }));
}
function RankSelect(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("label", { children: [props.label, (0, jsx_runtime_1.jsx)("select", { value: props.value, onChange: (e) => props.onChange(e.target.value), style: { marginLeft: "0.5em" }, children: Object.values(EloRank_1.EloRank).map((rank) => ((0, jsx_runtime_1.jsxs)("option", { value: rank, children: [t(`elorank.${rank}`), " (", config_1.EloRankThreshold[rank], ")"] }, rank))) })] }));
}
//# sourceMappingURL=preparation-menu.js.map