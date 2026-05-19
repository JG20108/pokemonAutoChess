"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyTheme = applyTheme;
const theme_1 = require("../../config/game/theme");
const preferences_1 = require("./preferences");
const THEME_LINK_ID = "pac-theme";
function applyTheme(theme) {
    var _a;
    (_a = document.getElementById("videobg")) === null || _a === void 0 ? void 0 : _a.remove();
    let link = document.getElementById(THEME_LINK_ID);
    if (!theme || theme === "default") {
        link === null || link === void 0 ? void 0 : link.remove();
        return;
    }
    if (!link) {
        link = document.createElement("link");
        link.id = THEME_LINK_ID;
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }
    link.href = `themes/${theme}.css`;
    if (theme_1.VIDEO_BG_THEMES.includes(theme)) {
        const videoElement = document.createElement("video");
        videoElement.id = "videobg";
        videoElement.src = `/assets/theme/${theme}/videobg.mp4`;
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.loop = true;
        document.body.prepend(videoElement);
    }
}
(0, preferences_1.subscribeToPreference)("theme", applyTheme, true);
//# sourceMappingURL=theme.js.map