"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Leaderboard;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_virtualized_auto_sizer_1 = require("react-virtualized-auto-sizer");
const react_window_1 = require("react-window");
const leaderboard_item_1 = __importDefault(require("./leaderboard-item"));
const ROW_HEIGHT = 58;
function LeaderboardRow({ index, style, infos, isBot, noElo }) {
    return ((0, jsx_runtime_1.jsx)("div", { style: Object.assign(Object.assign({}, style), { paddingBottom: 4 }), children: (0, jsx_runtime_1.jsx)(leaderboard_item_1.default, { item: infos[index], isBot: isBot, noElo: noElo }) }));
}
function Leaderboard(props) {
    return ((0, jsx_runtime_1.jsx)("div", { style: { flex: 1, minHeight: 0 }, children: (0, jsx_runtime_1.jsx)(react_virtualized_auto_sizer_1.AutoSizer, { renderProp: ({ height, width }) => {
                if (height === undefined || width === undefined)
                    return null;
                return ((0, jsx_runtime_1.jsx)(react_window_1.List, { style: { height, width }, rowCount: props.infos.length, rowHeight: ROW_HEIGHT, rowComponent: LeaderboardRow, rowProps: {
                        infos: props.infos,
                        isBot: props.isBot,
                        noElo: props.noElo
                    } }));
            } }) }));
}
//# sourceMappingURL=leaderboard.js.map