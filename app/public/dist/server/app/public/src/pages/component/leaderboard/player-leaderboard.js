"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PlayerLeaderboard;
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("../../../hooks");
const leaderboard_1 = __importDefault(require("./leaderboard"));
function PlayerLeaderboard() {
    const infos = (0, hooks_1.useAppSelector)((state) => state.lobby.leaderboard);
    return (0, jsx_runtime_1.jsx)(leaderboard_1.default, { isBot: false, infos: infos, noElo: false });
}
//# sourceMappingURL=player-leaderboard.js.map