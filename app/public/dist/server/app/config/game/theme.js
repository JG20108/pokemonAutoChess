"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TITLES_UNLOCKING_THEMES = exports.THEME_BY_TITLE = exports.TITLE_BY_THEME = exports.VIDEO_BG_THEMES = exports.THEMES = void 0;
exports.isThemeUnlocked = isThemeUnlocked;
const types_1 = require("../../types");
const object_1 = require("../../utils/object");
const gadgets_1 = require("./gadgets");
exports.THEMES = [
    "default",
    "super",
    "lilac",
    "rainbow",
    "unown",
    "origin",
    "umbra",
    "autumn",
    "redsea",
    "zengarden",
    "deerling"
];
exports.VIDEO_BG_THEMES = [
    "umbra",
    "autumn",
    "redsea",
    "zengarden",
    "deerling"
];
exports.TITLE_BY_THEME = {
    unown: types_1.Title.ARCHEOLOGIST,
    rainbow: types_1.Title.HARLEQUIN,
    autumn: types_1.Title.POKEMON_RANGER,
    umbra: types_1.Title.DELINQUENT,
    redsea: types_1.Title.FISHERMAN,
    origin: types_1.Title.MUSEUM_DIRECTOR,
    zengarden: types_1.Title.NATURAL,
    deerling: types_1.Title.AMATEUR
};
exports.THEME_BY_TITLE = (0, object_1.invertKeysValues)(exports.TITLE_BY_THEME);
exports.TITLES_UNLOCKING_THEMES = (0, object_1.values)(exports.TITLE_BY_THEME);
function isThemeUnlocked(theme, profile) {
    if (profile.level < gadgets_1.GADGETS.palette.levelRequired)
        return false;
    const requiredTitle = exports.TITLE_BY_THEME[theme];
    if (!requiredTitle)
        return true;
    return profile.titles.includes(requiredTitle);
}
//# sourceMappingURL=theme.js.map