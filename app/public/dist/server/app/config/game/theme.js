"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TITLES_UNLOCKING_THEMES = exports.THEME_BY_TITLE = exports.TITLE_BY_THEME = exports.VIDEO_BG_THEMES = exports.THEMES = void 0;
exports.isThemeUnlocked = isThemeUnlocked;
const types_1 = require("../../types");
const gadgets_1 = require("./gadgets");
exports.THEMES = [
    "default",
    "super",
    "lilac",
    "north",
    "unown",
    "umbra",
    "forest",
    "redsea",
    "origin"
];
exports.VIDEO_BG_THEMES = ["umbra", "forest", "redsea"];
exports.TITLE_BY_THEME = {
    unown: types_1.Title.ARCHEOLOGIST,
    forest: types_1.Title.POKEMON_RANGER,
    umbra: types_1.Title.DELINQUENT,
    redsea: types_1.Title.FISHERMAN,
    origin: types_1.Title.MUSEUM_DIRECTOR
};
exports.THEME_BY_TITLE = Object.fromEntries(Object.entries(exports.TITLE_BY_THEME).map(([theme, title]) => [title, theme]));
exports.TITLES_UNLOCKING_THEMES = Object.values(exports.TITLE_BY_THEME);
function isThemeUnlocked(theme, profile) {
    if (profile.level < gadgets_1.GADGETS.palette.levelRequired)
        return false;
    const requiredTitle = exports.TITLE_BY_THEME[theme];
    if (!requiredTitle)
        return true;
    return profile.titles.includes(requiredTitle);
}
//# sourceMappingURL=theme.js.map