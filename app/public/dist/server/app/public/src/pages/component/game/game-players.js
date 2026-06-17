"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GamePlayers;
const jsx_runtime_1 = require("react/jsx-runtime");
const depths_1 = require("../../../game/depths");
const hooks_1 = require("../../../hooks");
const game_player_1 = __importDefault(require("./game-player"));
require("./game-players.css");
function GamePlayers(props) {
    const players = (0, hooks_1.useAppSelector)((state) => state.game.players);
    const sortedPlayers = [...players];
    return ((0, jsx_runtime_1.jsx)("div", { id: "game-players", style: { zIndex: depths_1.DEPTH.PLAYER_ICON }, children: sortedPlayers
            .sort((a, b) => {
            return a.rank - b.rank;
        })
            .map((p, i) => {
            return ((0, jsx_runtime_1.jsx)(game_player_1.default, { player: p, click: (id) => props.click(id), index: i }, p.id));
        }) }));
}
//# sourceMappingURL=game-players.js.map