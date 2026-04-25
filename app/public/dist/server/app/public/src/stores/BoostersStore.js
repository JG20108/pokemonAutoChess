"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetBoosters = exports.resetLastBoostersOpened = exports.setBoosterContent = exports.boostersSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    boosterContent: [],
    lastBoostersOpened: []
};
exports.boostersSlice = (0, toolkit_1.createSlice)({
    name: "boosters",
    initialState,
    reducers: {
        setBoosterContent: (state, action) => {
            state.boosterContent = action.payload;
            state.lastBoostersOpened.push([...action.payload]);
        },
        resetLastBoostersOpened: (state) => {
            state.lastBoostersOpened = [];
        },
        resetBoosters: () => initialState
    }
});
_a = exports.boostersSlice.actions, exports.setBoosterContent = _a.setBoosterContent, exports.resetLastBoostersOpened = _a.resetLastBoostersOpened, exports.resetBoosters = _a.resetBoosters;
exports.default = exports.boostersSlice.reducer;
//# sourceMappingURL=BoostersStore.js.map