"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RoomItem;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const gadgets_1 = require("../../../../../config/game/gadgets");
const types_1 = require("../../../../../types");
const Game_1 = require("../../../../../types/enum/Game");
const elo_1 = require("../../../../../utils/elo");
const hooks_1 = require("../../../hooks");
const jsx_1 = require("../../utils/jsx");
const game_mode_icon_1 = require("../icons/game-mode-icon");
require("./room-item.css");
function RoomItem(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
    const { t } = (0, react_i18next_1.useTranslation)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const isAdmin = (user === null || user === void 0 ? void 0 : user.role) === types_1.Role.ADMIN;
    const nbPlayersExpected = ((_a = props.room.metadata) === null || _a === void 0 ? void 0 : _a.whitelist) && props.room.metadata.whitelist.length > 0
        ? (_b = props.room.metadata) === null || _b === void 0 ? void 0 : _b.whitelist.length
        : config_1.MAX_PLAYERS_PER_GAME;
    let canJoin = true, disabledReason = null;
    if (props.room.clients >= nbPlayersExpected) {
        canJoin = false;
        disabledReason = t("room_menu.game_full");
    }
    else if (((_c = props.room.metadata) === null || _c === void 0 ? void 0 : _c.gameStartedAt) != null) {
        canJoin = false;
        disabledReason = t("room_menu.game_already_started");
    }
    else if (((_d = props.room.metadata) === null || _d === void 0 ? void 0 : _d.blacklist) &&
        props.room.metadata.blacklist.length > 0 &&
        (user === null || user === void 0 ? void 0 : user.uid) &&
        props.room.metadata.blacklist.includes(user.uid) === true) {
        canJoin = false;
        disabledReason = t("room_menu.blacklisted");
    }
    else if (((_e = props.room.metadata) === null || _e === void 0 ? void 0 : _e.whitelist) &&
        props.room.metadata.whitelist.length > 0 &&
        (user === null || user === void 0 ? void 0 : user.uid) &&
        props.room.metadata.whitelist.includes(user.uid) === false) {
        canJoin = false;
        disabledReason = t("errors.USER_NOT_WHITELISTED");
    }
    else if (((_f = props.room.metadata) === null || _f === void 0 ? void 0 : _f.minRank) != null &&
        ((_g = user === null || user === void 0 ? void 0 : user.elo) !== null && _g !== void 0 ? _g : 0) < config_1.EloRankThreshold[props.room.metadata.minRank]) {
        canJoin = false;
        disabledReason = t("room_menu.min_rank_not_reached");
    }
    else if (((_h = props.room.metadata) === null || _h === void 0 ? void 0 : _h.maxRank) != null &&
        (user === null || user === void 0 ? void 0 : user.elo) &&
        config_1.EloRankThreshold[(0, elo_1.getRank)(user.elo)] >
            config_1.EloRankThreshold[(_j = props.room.metadata) === null || _j === void 0 ? void 0 : _j.maxRank]) {
        canJoin = false;
        disabledReason = t("room_menu.max_rank_not_reached");
    }
    else if (((_k = props.room.metadata) === null || _k === void 0 ? void 0 : _k.gameMode) === Game_1.GameMode.RANKED &&
        (user === null || user === void 0 ? void 0 : user.level) != null &&
        user.level < gadgets_1.GADGETS.certificate.levelRequired) {
        canJoin = false;
        disabledReason = t("room_menu.ranked_mode_locked", {
            requiredLevel: gadgets_1.GADGETS.certificate.levelRequired
        });
    }
    if ((user === null || user === void 0 ? void 0 : user.role) === types_1.Role.ADMIN) {
        canJoin = true;
    }
    const title = `${((_l = props.room.metadata) === null || _l === void 0 ? void 0 : _l.ownerName) ? "Owner: " + ((_m = props.room.metadata) === null || _m === void 0 ? void 0 : _m.ownerName) : ""}\n${(_p = (_o = props.room.metadata) === null || _o === void 0 ? void 0 : _o.playersInfo) === null || _p === void 0 ? void 0 : _p.join("\n")}`;
    const [joining, setJoining] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "room-item my-box", children: [(0, jsx_runtime_1.jsxs)("span", { className: "room-name", title: title, children: [(0, elo_1.formatMinMaxRanks)((_q = props.room.metadata) === null || _q === void 0 ? void 0 : _q.minRank, (_r = props.room.metadata) === null || _r === void 0 ? void 0 : _r.maxRank) + " ", (_s = props.room.metadata) === null || _s === void 0 ? void 0 : _s.name] }), ((_t = props.room.metadata) === null || _t === void 0 ? void 0 : _t.passwordProtected) && ((0, jsx_runtime_1.jsx)("img", { alt: t("private"), title: t("password_protected"), className: "lock icon", src: "/assets/ui/lock.svg" })), ((_u = props.room.metadata) === null || _u === void 0 ? void 0 : _u.gameMode) === Game_1.GameMode.SCRIBBLE && ((0, jsx_runtime_1.jsx)(game_mode_icon_1.GameModeIcon, { gameMode: Game_1.GameMode.SCRIBBLE })), ((_v = props.room.metadata) === null || _v === void 0 ? void 0 : _v.noElo) &&
                ((_w = props.room.metadata) === null || _w === void 0 ? void 0 : _w.gameMode) === Game_1.GameMode.CUSTOM_LOBBY && ((0, jsx_runtime_1.jsx)("img", { alt: t("no_elo"), title: t("no_elo"), className: "noelo gamemode icon", src: "/assets/ui/noelo.png" })), ((_x = props.room.metadata) === null || _x === void 0 ? void 0 : _x.gameMode) === Game_1.GameMode.CLASSIC && ((0, jsx_runtime_1.jsx)(game_mode_icon_1.GameModeIcon, { gameMode: Game_1.GameMode.CLASSIC })), ((_y = props.room.metadata) === null || _y === void 0 ? void 0 : _y.gameMode) === Game_1.GameMode.RANKED && ((0, jsx_runtime_1.jsx)(game_mode_icon_1.GameModeIcon, { gameMode: Game_1.GameMode.RANKED })), ((_z = props.room.metadata) === null || _z === void 0 ? void 0 : _z.minRank) && ((0, jsx_runtime_1.jsx)("img", { alt: t("minimum_rank"), title: t("minimum_rank") +
                    ": " +
                    t(`elorank.${(_0 = props.room.metadata) === null || _0 === void 0 ? void 0 : _0.minRank}`), className: "rank icon", src: "/assets/ranks/" + ((_1 = props.room.metadata) === null || _1 === void 0 ? void 0 : _1.minRank) + ".svg" })), (0, jsx_runtime_1.jsxs)("span", { children: [props.room.clients, "/", nbPlayersExpected] }), isAdmin && ((0, jsx_runtime_1.jsx)("button", { title: t("delete_room"), onClick: () => {
                    props.click("delete");
                }, children: "X" })), (0, jsx_runtime_1.jsx)("button", { title: disabledReason !== null && disabledReason !== void 0 ? disabledReason : t("join"), disabled: !canJoin || joining, className: (0, jsx_1.cc)("bubbly", joining ? "loading" : "", ((_2 = props.room.metadata) === null || _2 === void 0 ? void 0 : _2.passwordProtected) ? "orange" : "green"), onClick: () => {
                    if (canJoin && !joining) {
                        props.click("join");
                        setJoining(true);
                        setTimeout(() => setJoining(false), 3000);
                    }
                }, children: t("join") })] }));
}
//# sourceMappingURL=room-item.js.map