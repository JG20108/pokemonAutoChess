"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameOptionsModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const phaser_1 = __importDefault(require("phaser"));
const react_i18next_1 = require("react-i18next");
const react_tabs_1 = require("react-tabs");
const config_1 = require("../../../../../config");
const gadgets_1 = require("../../../../../config/game/gadgets");
const Language_1 = require("../../../../../types/enum/Language");
const locales_1 = require("../../../../dist/client/locales");
const hooks_1 = require("../../../hooks");
const preferences_1 = require("../../../preferences");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const game_1 = require("../../game");
const checkbox_1 = require("../checkbox/checkbox");
const modal_1 = require("../modal/modal");
const game_files_1 = __importDefault(require("./game-files"));
const keybind_info_1 = __importDefault(require("./keybind-info"));
require("./game-options-modal.css");
function GameOptionsModal(props) {
    var _a;
    const [preferences, setPreferences] = (0, preferences_1.usePreferences)();
    const { t, i18n } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const language = (0, hooks_1.useAppSelector)((state) => { var _a, _b; return (_b = (_a = state.network.profile) === null || _a === void 0 ? void 0 : _a.language) !== null && _b !== void 0 ? _b : i18n.language; });
    const profile = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const profileLevel = (_a = profile === null || profile === void 0 ? void 0 : profile.level) !== null && _a !== void 0 ? _a : 0;
    const renderers = {
        [phaser_1.default.AUTO]: "Auto",
        [phaser_1.default.WEBGL]: "WebGL",
        [phaser_1.default.CANVAS]: "Canvas"
    };
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, { show: props.show, onClose: props.hideModal, header: t("options.title"), className: "game-options-modal anchor-top", children: (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("options.sound") }, "sound"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("options.interface") }, "interface"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("options.hotkeys") }, "hotkeys"), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: t("options.game_files") }, "files")] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabPanel, { children: [(0, jsx_runtime_1.jsxs)("label", { style: { width: "100%" }, children: [t("jukebox.music_volume"), ": ", preferences.musicVolume, " %", (0, jsx_runtime_1.jsx)("input", { type: "range", min: "0", max: "100", value: preferences.musicVolume, onInput: (e) => setPreferences({
                                        musicVolume: Number.parseFloat(e.target.value)
                                    }) })] }), (0, jsx_runtime_1.jsxs)("label", { style: { width: "100%" }, children: [t("options.sfx_volume"), ": ", preferences.sfxVolume, " %", (0, jsx_runtime_1.jsx)("input", { type: "range", min: "0", max: "100", value: preferences.sfxVolume, onInput: (e) => setPreferences({
                                        sfxVolume: Number.parseFloat(e.target.value)
                                    }) })] }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { isDark: true, checked: preferences.playInBackground, onToggle: (checked) => setPreferences({ playInBackground: checked }), label: t("options.play_music_in_background") }) })] }), (0, jsx_runtime_1.jsxs)(react_tabs_1.TabPanel, { children: [props.page === "main_lobby" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("options.language"), ":\u00A0", (0, jsx_runtime_1.jsx)("select", { className: "is-light", value: language, onChange: (e) => {
                                                dispatch((0, NetworkStore_1.selectLanguage)(e.target.value));
                                                i18n.changeLanguage(e.target.value);
                                            }, children: Object.keys(Language_1.Language).map((lng) => ((0, jsx_runtime_1.jsx)("option", { value: lng, children: locales_1.LanguageNames[lng] }, lng))) })] }), (0, jsx_runtime_1.jsxs)("p", { className: "info", children: [t("options.community_translations"), " ", (0, jsx_runtime_1.jsx)("a", { href: "https://discord.com/channels/737230355039387749/1488242758232834282", target: "_blank", children: "Discord" })] })] })), profile && profileLevel >= gadgets_1.GADGETS.palette.levelRequired && ((0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsxs)("label", { children: [t("options.theme"), ":\u00A0", (0, jsx_runtime_1.jsx)("select", { className: "is-light", value: preferences.theme, onChange: (e) => setPreferences({ theme: e.target.value }), children: config_1.THEMES.filter((theme) => (0, config_1.isThemeUnlocked)(theme, profile)).map((theme) => ((0, jsx_runtime_1.jsx)("option", { value: theme, children: t(`theme.${theme}`) }, theme))) })] }) })), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { isDark: true, checked: preferences.showDetailsOnHover, onToggle: (checked) => setPreferences({ showDetailsOnHover: checked }), label: t("options.show_details_on_hover") }) }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { isDark: true, checked: preferences.showDamageNumbers, onToggle: (checked) => setPreferences({ showDamageNumbers: checked }), label: t("options.show_damage_numbers") }) }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { isDark: true, checked: preferences.disableAnimatedTilemap, onToggle: (checked) => {
                                    setPreferences({ disableAnimatedTilemap: checked });
                                    const gameScene = (0, game_1.getGameScene)();
                                    if (gameScene) {
                                        gameScene.toggleTilesetAnimation(checked);
                                    }
                                }, label: t("options.disable_animated_tilemap") }) }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { isDark: true, checked: preferences.disableCameraShake, onToggle: (checked) => {
                                    setPreferences({ disableCameraShake: checked });
                                }, label: t("options.disable_camera_shake") }) }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { isDark: true, checked: preferences.antialiasing, onToggle: (checked) => setPreferences({ antialiasing: checked }), label: t("options.antialiasing") }) }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { isDark: true, checked: preferences.colorblindMode, onToggle: (checked) => setPreferences({ colorblindMode: checked }), label: t("options.colorblind_mode") }) }), props.page === "main_lobby" && ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("label", { children: [t("options.renderer"), ":\u00A0", (0, jsx_runtime_1.jsx)("select", { className: "is-light", value: preferences.renderer, onChange: (e) => {
                                            const parsed = parseInt(e.target.value);
                                            if (!isNaN(parsed)) {
                                                setPreferences({ renderer: parsed });
                                            }
                                        }, children: Object.keys(renderers).map((r) => ((0, jsx_runtime_1.jsx)("option", { value: r, children: renderers[r] }, r))) }), (0, jsx_runtime_1.jsx)("p", { className: "info", children: t("options.renderer_info") })] }) }))] }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(keybind_info_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)(game_files_1.default, {}) })] }) }));
}
//# sourceMappingURL=game-options-modal.js.map