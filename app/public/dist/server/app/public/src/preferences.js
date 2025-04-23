"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToPreferences = subscribeToPreferences;
exports.unsubscribeToPreferences = unsubscribeToPreferences;
exports.preference = preference;
exports.savePreferences = savePreferences;
exports.usePreferences = usePreferences;
exports.usePreference = usePreference;
const phaser_1 = __importDefault(require("phaser"));
const store_1 = require("./pages/utils/store");
const react_1 = require("react");
const array_1 = require("../../utils/array");
const defaultPreferences = {
    musicVolume: 30,
    sfxVolume: 30,
    playInBackground: false,
    showDpsMeter: false,
    showDetailsOnHover: false,
    showDamageNumbers: true,
    showEvolutions: true,
    filterAvailableAddsAndRegionals: false,
    disableAnimatedTilemap: false,
    renderer: phaser_1.default.AUTO,
    antialiasing: true,
    keybindings: {
        sell: "E",
        buy_xp: "F",
        refresh: "D",
        lock: "R",
        switch: "SPACE",
        emote: "A"
    }
};
function loadPreferences() {
    var _a;
    if (store_1.localStore.has(store_1.LocalStoreKeys.PREFERENCES)) {
        return Object.assign(Object.assign(Object.assign({}, defaultPreferences), store_1.localStore.get(store_1.LocalStoreKeys.PREFERENCES)), { keybindings: Object.assign(Object.assign({}, defaultPreferences.keybindings), (_a = store_1.localStore.get(store_1.LocalStoreKeys.PREFERENCES)) === null || _a === void 0 ? void 0 : _a.keybindings) });
    }
    else {
        return defaultPreferences;
    }
}
let preferences = Object.freeze(loadPreferences());
const subscriptions = [];
function subscribeToPreferences(fn, runInitially = false) {
    subscriptions.push(fn);
    if (runInitially)
        fn(preferences);
    return unsubscribeToPreferences.bind(undefined, fn);
}
function unsubscribeToPreferences(fn) {
    (0, array_1.removeInArray)(subscriptions, fn);
}
function preference(key) {
    return preferences[key];
}
function savePreferences(modified) {
    const resolved = typeof modified === "function" ? modified(preferences) : modified;
    store_1.localStore.put(store_1.LocalStoreKeys.PREFERENCES, resolved);
    preferences = Object.freeze(Object.assign(Object.assign({}, preferences), resolved));
    subscriptions.forEach((s) => s(preferences));
}
function usePreferences() {
    const [preferenceState, setPreferenceState] = (0, react_1.useState)(preferences);
    (0, react_1.useEffect)(() => subscribeToPreferences(setPreferenceState), []);
    return [preferenceState, savePreferences];
}
function usePreference(key) {
    const [preferenceState, setPreferenceState] = (0, react_1.useState)(preferences[key]);
    (0, react_1.useEffect)(() => subscribeToPreferences((newPreferences) => {
        setPreferenceState(newPreferences[key]);
    }), [key]);
    const update = (0, react_1.useCallback)((value) => {
        savePreferences({ [key]: value });
    }, [key]);
    return [preferenceState, update];
}
//# sourceMappingURL=preferences.js.map