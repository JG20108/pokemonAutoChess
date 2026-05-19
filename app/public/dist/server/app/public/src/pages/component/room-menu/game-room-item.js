"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameRoomItem;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const types_1 = require("../../../../../types");
const hooks_1 = require("../../../hooks");
const jsx_1 = require("../../utils/jsx");
require("./room-item.css");
function GameRoomItem(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { t } = (0, react_i18next_1.useTranslation)();
    const myUid = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const isAdmin = (user === null || user === void 0 ? void 0 : user.role) === types_1.Role.ADMIN;
    const playerIds = (_b = (_a = props.room.metadata) === null || _a === void 0 ? void 0 : _a.playerIds) !== null && _b !== void 0 ? _b : [];
    const spectate = playerIds.includes(myUid) === false;
    const title = `${((_c = props.room.metadata) === null || _c === void 0 ? void 0 : _c.ownerName) ? "Owner: " + ((_d = props.room.metadata) === null || _d === void 0 ? void 0 : _d.ownerName) : ""}\n${(_f = (_e = props.room.metadata) === null || _e === void 0 ? void 0 : _e.playersInfo) === null || _f === void 0 ? void 0 : _f.join("\n")}`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "room-item my-box", children: [(0, jsx_runtime_1.jsx)("span", { className: "room-name", title: title, children: (_g = props.room.metadata) === null || _g === void 0 ? void 0 : _g.name }), (0, jsx_runtime_1.jsxs)("span", { className: "room-info", children: [playerIds.length, " ", t("player"), playerIds.length !== 1 ? "s" : "", ", ", t("stage"), " ", (_h = props.room.metadata) === null || _h === void 0 ? void 0 : _h.stageLevel] }), isAdmin && ((0, jsx_runtime_1.jsx)("button", { title: t("delete_room"), onClick: () => {
                    props.click("delete");
                }, children: "X" })), (0, jsx_runtime_1.jsx)("button", { className: (0, jsx_1.cc)("bubbly", spectate ? "blue" : "green"), onClick: () => props.click(spectate ? "spectate" : "join"), children: spectate ? t("spectate") : t("reconnect") })] }));
}
//# sourceMappingURL=game-room-item.js.map