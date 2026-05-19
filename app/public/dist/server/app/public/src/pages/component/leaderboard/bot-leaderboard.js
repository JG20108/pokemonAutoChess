"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BotLeaderboard;
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("../../../hooks");
const leaderboard_1 = __importDefault(require("./leaderboard"));
function BotLeaderboard() {
    const infos = (0, hooks_1.useAppSelector)((state) => state.lobby.botLeaderboard);
    return (0, jsx_runtime_1.jsx)(leaderboard_1.default, { isBot: true, infos: infos, noElo: false });
}
//# sourceMappingURL=bot-leaderboard.js.map