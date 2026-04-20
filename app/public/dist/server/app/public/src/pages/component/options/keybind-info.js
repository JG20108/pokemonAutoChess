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
            var _a;
            if (currentlyRemapping === null)
                return;
            e.preventDefault();
            e.stopPropagation();
            let key = e.key.toUpperCase();
            if (key === "ESCAPE") {
                setCurrentlyRemapping(null);
                return;
            }
            key = (_a = KEY_CODES_TO_PHASER_KEY_CODES[key]) !== null && _a !== void 0 ? _a : key;
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
    const conflictingKeys = keys.filter((key, i) => keys.some((otherKey, otherIndex) => i !== otherIndex &&
        preferences.keybindings[key] === preferences.keybindings[otherKey]));
    const RemappableKey = ({ keyId }) => {
        return ((0, jsx_runtime_1.jsx)("kbd", { className: (0, jsx_1.cc)("remappable", {
                remapping: currentlyRemapping === keyId,
                conflict: conflictingKeys.includes(keyId)
            }), onClick: () => setCurrentlyRemapping(keyId), children: currentlyRemapping === keyId ? "?" : preferences.keybindings[keyId] }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "keybind-container", children: [(0, jsx_runtime_1.jsx)("h2", { children: t("options.key_bindings") }), (0, jsx_runtime_1.jsxs)("dl", { children: [(0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "sell" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("options.key_description.sell") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "buy_xp" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("options.key_description.buy_xp") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "refresh" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("options.key_description.refresh") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "lock" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("options.key_description.lock") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "camera_lock" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("options.key_description.camera_lock") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "switch" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("options.key_description.switch") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "emote" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("options.key_description.avatar_anim") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "prev_player" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("options.key_description.prev_player") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "next_player" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("options.key_description.next_player") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "board_return" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("options.key_description.board_return") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "wiki" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("options.key_description.wiki") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)(RemappableKey, { keyId: "team_planner" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("options.key_description.team_planner") }), (0, jsx_runtime_1.jsx)("dt", { children: (0, jsx_runtime_1.jsx)("kbd", { children: "Ctrl" }) }), (0, jsx_runtime_1.jsx)("dd", { children: t("options.key_description.avatar_emotes") }), (0, jsx_runtime_1.jsxs)("dt", { children: [(0, jsx_runtime_1.jsx)("kbd", { children: "Ctrl" }), "+", (0, jsx_runtime_1.jsx)("kbd", { children: "1" }), "..", (0, jsx_runtime_1.jsx)("kbd", { children: "9" })] }), (0, jsx_runtime_1.jsxs)("dd", { children: [t("options.key_description.avatar_show_emote"), " 1..9"] })] }), (0, jsx_runtime_1.jsx)("p", { children: t("options.click_on_keybind_to_change_it") })] }));
}
const KEY_CODES_TO_PHASER_KEY_CODES = {
    " ": "SPACE",
    PAGEUP: "PAGE_UP",
    PAGEDOWN: "PAGE_DOWN",
    ARROWUP: "UP",
    ARROWDOWN: "DOWN",
    ARROWLEFT: "LEFT",
    ARROWRIGHT: "RIGHT"
};
//# sourceMappingURL=keybind-info.js.map