"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGameMode = exports.setElligibilityToELO = exports.setElligibilityToXP = exports.leaveAfter = exports.addPlayer = exports.afterSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const Game_1 = require("../../../types/enum/Game");
const initialState = {
    players: new Array(),
    elligibleToXP: false,
    elligibleToELO: false,
    gameMode: Game_1.GameMode.CUSTOM_LOBBY
};
exports.afterSlice = (0, toolkit_1.createSlice)({
    name: "after",
    initialState: initialState,
    reducers: {
        addPlayer: (state, action) => {
            state.players.push(action.payload);
        },
        leaveAfter: () => initialState,
        setElligibilityToXP: (state, action) => {
            state.elligibleToXP = action.payload;
        },
        setElligibilityToELO: (state, action) => {
            state.elligibleToELO = action.payload;
        },
        setGameMode: (state, action) => {
            state.gameMode = action.payload;
        }
    }
});
_a = exports.afterSlice.actions, exports.addPlayer = _a.addPlayer, exports.leaveAfter = _a.leaveAfter, exports.setElligibilityToXP = _a.setElligibilityToXP, exports.setElligibilityToELO = _a.setElligibilityToELO, exports.setGameMode = _a.setGameMode;
exports.default = exports.afterSlice.reducer;
//# sourceMappingURL=AfterGameStore.js.map