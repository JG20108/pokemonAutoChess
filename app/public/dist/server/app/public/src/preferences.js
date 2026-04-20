"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToPreferences = subscribeToPreferences;
exports.subscribeToPreference = subscribeToPreference;
exports.unsubscribeToPreferences = unsubscribeToPreferences;
exports.preference = preference;
exports.savePreferences = savePreferences;
exports.usePreferences = usePreferences;
exports.usePreference = usePreference;
const phaser_1 = __importDefault(require("phaser"));
const react_1 = require("react");
const array_1 = require("../../utils/array");
const store_1 = require("./pages/utils/store");
const defaultPreferences = {
    musicVolume: 30,
    sfxVolume: 30,
    playInBackground: false,
    showDpsMeter: false,
    dpsMeterPosition: { x: 0, y: 0 },
    synergiesPosition: { x: 0, y: 0 },
    expeditionsPosition: { x: 0, y: 0 },
    showDetailsOnHover: false,
    showDamageNumbers: true,
    showEvolutions: true,
    showAltForms: true,
    showRegularPool: true,
    showAdditionalPool: true,
    showRegionalPool: true,
    showSpecialPool: true,
    filterAvailableAddsAndRegionals: false,
    disableAnimatedTilemap: false,
    disableCameraShake: true,
    cameraLocked: false,
    renderer: phaser_1.default.AUTO,
    antialiasing: true,
    colorblindMode: false,
    theme: "default",
    keybindings: {
        sell: "E",
        buy_xp: "F",
        refresh: "D",
        lock: "R",
        camera_lock: "L",
        switch: "SPACE",
        emote: "A",
        prev_player: "PAGE_UP",
        next_player: "PAGE_DOWN",
        board_return: "HOME",
        wiki: "W",
        team_planner: "T"
    }
};
const LEGACY_DOM_TO_PHASER = {
    ARROWUP: "UP",
    ARROWDOWN: "DOWN",
    ARROWLEFT: "LEFT",
    ARROWRIGHT: "RIGHT"
};
function migrateLegacyKeybindings(stored) {
    var _a;
    const keybindings = stored === null || stored === void 0 ? void 0 : stored.keybindings;
    if (!keybindings || typeof keybindings !== "object") {
        return { migrated: stored, changed: false };
    }
    let changed = false;
    const migratedKeybindings = Object.assign({}, keybindings);
    for (const [action, key] of Object.entries(migratedKeybindings)) {
        if (typeof key !== "string")
            continue;
        const mapped = (_a = LEGACY_DOM_TO_PHASER[key]) !== null && _a !== void 0 ? _a : key;
        if (mapped !== key) {
            migratedKeybindings[action] = mapped;
            changed = true;
        }
    }
    if (!changed)
        return { migrated: stored, changed: false };
    return {
        migrated: Object.assign(Object.assign({}, stored), { keybindings: migratedKeybindings }),
        changed: true
    };
}
function loadPreferences() {
    if (store_1.localStore.has(store_1.LocalStoreKeys.PREFERENCES)) {
        const stored = store_1.localStore.get(store_1.LocalStoreKeys.PREFERENCES);
        const { migrated, changed } = migrateLegacyKeybindings(stored);
        if (changed) {
            store_1.localStore.put(store_1.LocalStoreKeys.PREFERENCES, migrated, Infinity);
        }
        return Object.assign(Object.assign(Object.assign({}, defaultPreferences), migrated), { keybindings: Object.assign(Object.assign({}, defaultPreferences.keybindings), migrated === null || migrated === void 0 ? void 0 : migrated.keybindings) });
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
function subscribeToPreference(key, fn, runInitially = false) {
    let previousValue = preferences[key];
    const subscription = (newPreferences) => {
        if (newPreferences[key] === previousValue)
            return;
        previousValue = newPreferences[key];
        fn(newPreferences[key]);
    };
    subscriptions.push(subscription);
    if (runInitially)
        fn(preferences[key]);
    return unsubscribeToPreferences.bind(undefined, subscription);
}
function unsubscribeToPreferences(fn) {
    (0, array_1.removeInArray)(subscriptions, fn);
}
function preference(key) {
    return preferences[key];
}
function savePreferences(modified) {
    const resolved = typeof modified === "function" ? modified(preferences) : modified;
    store_1.localStore.put(store_1.LocalStoreKeys.PREFERENCES, resolved, Infinity);
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