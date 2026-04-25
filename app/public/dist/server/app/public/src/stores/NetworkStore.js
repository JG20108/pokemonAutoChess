"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPendingGameId = exports.setErrorAlertMessage = exports.setConnectionStatus = exports.selectLanguage = exports.setTitle = exports.changeAvatar = exports.changeName = exports.clearNotification = exports.setNotifications = exports.setProfile = exports.logOut = exports.logIn = exports.networkSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const collection_1 = require("../../../core/collection");
const types_1 = require("../../../types");
const ConnectionStatus_1 = require("../../../types/enum/ConnectionStatus");
const avatar_1 = require("../../../utils/avatar");
const network_js_1 = require("../network.js");
const initalState = {
    uid: "",
    displayName: "",
    email: "",
    profile: undefined,
    pendingGameId: null,
    error: null,
    connectionStatus: ConnectionStatus_1.ConnectionStatus.PENDING,
    notifications: []
};
exports.networkSlice = (0, toolkit_1.createSlice)({
    name: "network",
    initialState: initalState,
    reducers: {
        logIn: (state, action) => {
            var _a, _b;
            if (action.payload) {
                state.uid = action.payload.uid;
                state.displayName = (_a = action.payload.displayName) !== null && _a !== void 0 ? _a : "Anonymous";
                state.email = (_b = action.payload.email) !== null && _b !== void 0 ? _b : "";
            }
        },
        logOut: (state) => {
            state.uid = "";
            state.displayName = "";
            state.email = "";
            (0, network_js_1.leaveAllRooms)();
        },
        setProfile: (state, action) => {
            const unpackedCollection = new Map();
            for (const index in action.payload.pokemonCollection) {
                const item = action.payload.pokemonCollection[index];
                unpackedCollection.set(index, collection_1.CollectionUtils.unpackCollectionItem(item));
            }
            state.profile = Object.assign(Object.assign({}, action.payload), { pokemonCollection: unpackedCollection });
        },
        changeName: (state, action) => {
            var _a;
            if (state.profile)
                state.profile.displayName = action.payload;
            (_a = network_js_1.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_NAME, { name: action.payload });
        },
        changeAvatar: (state, action) => {
            var _a;
            if (state.profile)
                state.profile.avatar = (0, avatar_1.getAvatarString)(action.payload.index, action.payload.shiny, action.payload.emotion);
            (_a = network_js_1.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.CHANGE_AVATAR, action.payload);
        },
        setTitle: (state, action) => {
            var _a;
            if (state.profile)
                state.profile.title = action.payload;
            (_a = network_js_1.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SET_TITLE, action.payload);
        },
        selectLanguage: (state, action) => {
            var _a;
            if (state.profile)
                state.profile.language = action.payload;
            (_a = network_js_1.rooms.lobby) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.SELECT_LANGUAGE, action.payload);
        },
        setErrorAlertMessage: (state, action) => {
            state.error = action.payload;
        },
        setConnectionStatus: (state, action) => {
            state.connectionStatus = action.payload;
        },
        setPendingGameId: (state, action) => {
            state.pendingGameId = action.payload;
        },
        setNotifications: (state, action) => {
            state.notifications = action.payload;
        },
        clearNotification: (state, action) => {
            state.notifications = state.notifications.filter((n) => n.id !== action.payload);
        }
    }
});
_a = exports.networkSlice.actions, exports.logIn = _a.logIn, exports.logOut = _a.logOut, exports.setProfile = _a.setProfile, exports.setNotifications = _a.setNotifications, exports.clearNotification = _a.clearNotification, exports.changeName = _a.changeName, exports.changeAvatar = _a.changeAvatar, exports.setTitle = _a.setTitle, exports.selectLanguage = _a.selectLanguage, exports.setConnectionStatus = _a.setConnectionStatus, exports.setErrorAlertMessage = _a.setErrorAlertMessage, exports.setPendingGameId = _a.setPendingGameId;
exports.default = exports.networkSlice.reducer;
//# sourceMappingURL=NetworkStore.js.map