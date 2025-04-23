"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KeybindInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const preferences_1 = require("../../../preferences");
const game_1 = require("../../game");
const jsx_1 = require("../../utils/jsx");
require("./keybind-info.css");
function KeybindInfo() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [preferences, setPreferences] = (0, preferences_1.usePreferences)();
    const [currentlyRemapping, setCurrentlyRemapping] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        function onKeydown(e) {
            if (currentlyRemapping === null)
                return;
            let key = e.key.toUpperCase();
            if (key === "ESCAPE") {
                setCurrentlyRemapping(null);
                return;
            }
            if (key === " ") {
                key = "SPACE";
            }
            setPreferences((old) => ({
                keybindings: Object.assign(Object.assign({}, old.keybindings), { [currentlyRemapping]: key })
            }));
            setCurrentlyRemapping(null);
            const gameScene = (0, game_1.getGameScene)();
            if (gameScene)
                gameScene.registerKeys();
        }
        window.addEventListener("keydown", onKeydown);
        return () => {
            window.removeEventListener("keydown", onKeydown);
        };
    }, [currentlyRemapping]);
    const keys = Object.keys(preferences.keybindings);
    const conflictingKeys = keys.filter((key, i) => keys.some((otherKey, otherIndex) => i !== otherIndex && preferences.keybindings[key] === preferences.keybindings[otherKey]));
    const RemappableKey = ({ keyId }) => {
        return ((0, jsx_runtime_1.jsx)("kbd", { className: (0, jsx_1.cc)("remappable", {
                remapping: currentlyRemapping === keyId,
                conflict: conflictingKeys.includes(keyId)
            }), onClick: () => setCurrentlyRemapping(keyId), children: currentlyRemapping === keyId ? "?" : preferences.keybindings[keyId] }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "keybind-container", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("key_bindings") }), (0, jsx_runtime_1.jsxs)("dl", { children: [(0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "sell" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("key_desc_sell") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "buy_xp" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("key_desc_buy_xp") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "refresh" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("key_desc_refresh") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "lock" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("key_desc_lock") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "switch" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("key_desc_switch") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "emote" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("key_desc_avatar_anim") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)("kbd", { children: "Ctrl" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("key_desc_avatar_emotes") }), (0, jsx_runtime_1.jsxs)("dt", { children: [(0, jsx_runtime_1.jsx)("kbd", { children: "Ctrl" }), "+", (0, jsx_runtime_1.jsx)("kbd", { children: "1" }), "..", (0, jsx_runtime_1.jsx)("kbd", { children: "9" })] }), (0, jsx_runtime_1.jsxs)("dd", { children: [t("key_desc_avatar_show_emote"), " 1..9"] })] })] }));
}
//# sourceMappingURL=keybind-info.js.map