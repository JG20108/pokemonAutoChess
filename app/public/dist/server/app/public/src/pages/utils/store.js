"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localStore = exports.LocalStoreKeys = exports.LocalStore = exports.Store = void 0;
exports.useLocalStore = useLocalStore;
const react_1 = require("react");
const DEFAULT_EXPIRATION_TIME_IN_SECONDS = 60 * 60 * 24 * 365;
class Store {
    constructor(params) {
        Object.assign(this, params);
    }
    has(key) {
        return this.get(key) != null;
    }
    get(key) {
        const data = this.getter(key);
        if (!data || data.value == null) {
            return null;
        }
        if (data.expirationDate && Date.now() > data.expirationDate) {
            this.delete(key);
            return null;
        }
        return data.value;
    }
    put(key, value, expirationTimeInSeconds = DEFAULT_EXPIRATION_TIME_IN_SECONDS) {
        this.set(key, Object.assign({}, this.get(key), value), expirationTimeInSeconds);
    }
    set(key, value, expirationTimeInSeconds = DEFAULT_EXPIRATION_TIME_IN_SECONDS) {
        const expirationDate = Date.now() + expirationTimeInSeconds * 1000;
        this.setter(key, { expirationDate, value });
        window.dispatchEvent(new StorageEvent("storage", { key, newValue: value }));
    }
    delete(key) {
        return this.deleter(key);
    }
    clear() {
        return this.cleaner();
    }
}
exports.Store = Store;
class LocalStore extends Store {
    getter(key) {
        var _a;
        let parsed;
        try {
            parsed = JSON.parse((_a = self.localStorage.getItem(key)) !== null && _a !== void 0 ? _a : "");
        }
        catch (e) {
            return null;
        }
        return parsed;
    }
    setter(key, value) {
        try {
            self.localStorage.setItem(key, JSON.stringify(value));
            return true;
        }
        catch (e) {
            return false;
        }
    }
    deleter(key) {
        self.localStorage.removeItem(key);
        return true;
    }
    cleaner() {
        return self.localStorage.clear();
    }
}
exports.LocalStore = LocalStore;
var LocalStoreKeys;
(function (LocalStoreKeys) {
    LocalStoreKeys["FAVORITES"] = "favorites";
    LocalStoreKeys["PREFERENCES"] = "pac_preferences";
    LocalStoreKeys["RECONNECTION_LOBBY"] = "reconnection_lobby";
    LocalStoreKeys["RECONNECTION_PREPARATION"] = "reconnection_preparation";
    LocalStoreKeys["RECONNECTION_GAME"] = "reconnection_game";
    LocalStoreKeys["RECONNECTION_AFTER_GAME"] = "reconnection_after-game";
    LocalStoreKeys["TEAM_PLANNER"] = "team_planner";
    LocalStoreKeys["TIER_LIST"] = "tier_list";
    LocalStoreKeys["LAST_PATCH_READ"] = "last_patch_read";
    LocalStoreKeys["COLLECTION_FILTER"] = "collection_filter";
    LocalStoreKeys["TRANSLATION_EDITS"] = "translation_edits";
    LocalStoreKeys["LAST_TAB_OPENED_PICKER"] = "last_tab_opened_picker";
})(LocalStoreKeys || (exports.LocalStoreKeys = LocalStoreKeys = {}));
exports.localStore = new LocalStore();
function useLocalStore(key, defaultValue, expirationTimeInSeconds) {
    const [storedValue, setStoredValue] = (0, react_1.useState)(() => {
        const current = exports.localStore.get(key);
        return current !== null ? current : defaultValue;
    });
    (0, react_1.useEffect)(() => {
        const handleStorageChange = (e) => {
            if (e.key === key) {
                const newValue = exports.localStore.get(key);
                setStoredValue(newValue !== null ? newValue : defaultValue);
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [key, defaultValue]);
    const setValue = (0, react_1.useCallback)((value) => {
        try {
            if (value === null) {
                exports.localStore.delete(key);
            }
            else {
                exports.localStore.set(key, value, expirationTimeInSeconds);
            }
            setStoredValue(value);
            window.dispatchEvent(new CustomEvent(`store-update-${key}`));
        }
        catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    }, [key]);
    const clearValue = (0, react_1.useCallback)(() => {
        setStoredValue(defaultValue);
    }, [setStoredValue]);
    return [storedValue, setValue, clearValue];
}
//# sourceMappingURL=store.js.map