"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Jukebox;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Dungeon_1 = require("../../../../../types/enum/Dungeon");
const preferences_1 = require("../../../preferences");
const game_1 = require("../../game");
const audio_1 = require("../../utils/audio");
const jsx_1 = require("../../utils/jsx");
const modal_1 = require("../modal/modal");
require("./jukebox.css");
const random_1 = require("../../../../../utils/random");
function Jukebox(props) {
    var _a, _b, _c;
    const { t } = (0, react_i18next_1.useTranslation)();
    const MUSICS = Object.values(Dungeon_1.DungeonMusic);
    const musicPlaying = (_c = (_b = (_a = (0, game_1.getGameScene)()) === null || _a === void 0 ? void 0 : _a.music) === null || _b === void 0 ? void 0 : _b.key) === null || _c === void 0 ? void 0 : _c.replace("music_", "");
    const [music, setMusic] = (0, react_1.useState)(musicPlaying);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [volume, setVolume] = (0, preferences_1.usePreference)("musicVolume");
    (0, react_1.useEffect)(() => {
        if (musicPlaying !== music && !loading) {
            setMusic(musicPlaying);
        }
    }, [music, musicPlaying, loading]);
    function changeMusic(name) {
        var _a;
        setMusic(name);
        const gameScene = (0, game_1.getGameScene)();
        if (gameScene) {
            (_a = gameScene.music) === null || _a === void 0 ? void 0 : _a.destroy();
            setLoading(true);
            gameScene.cache.audio.events.on("add", (cache, key) => {
                if (key === "music_" + name) {
                    (0, audio_1.playMusic)(gameScene, name);
                    setLoading(false);
                }
            });
            (0, audio_1.preloadMusic)(gameScene, name);
            gameScene.load.start();
        }
    }
    function handleVolumeChange(e) {
        const newVolume = Number(e.currentTarget.value);
        setVolume(newVolume);
    }
    function nextMusic(delta) {
        const newIndex = (MUSICS.indexOf(music) + MUSICS.length + delta) % MUSICS.length;
        changeMusic(MUSICS[newIndex]);
    }
    function randomizeMusic() {
        const newMusic = (0, random_1.pickRandomIn)(MUSICS.filter((m) => m !== music));
        changeMusic(newMusic);
    }
    return ((0, jsx_runtime_1.jsxs)(modal_1.Modal, { show: props.show, onClose: props.handleClose, className: "game-jukebox-modal", header: t("gadget.jukebox"), children: [(0, jsx_runtime_1.jsxs)("div", { className: "actions", style: { marginBottom: "0.5em" }, children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => nextMusic(-1), title: t("previous_music"), children: "\u25C4" }), (0, jsx_runtime_1.jsxs)("div", { className: (0, jsx_1.cc)("compact-disc", { loading }), children: [(0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/compact-disc.svg" }), (0, jsx_runtime_1.jsx)("span", { children: loading && t("loading") })] }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => nextMusic(+1), title: t("next_music"), children: "\u25BA" })] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5em",
                    marginBottom: "0.5em"
                }, children: [(0, jsx_runtime_1.jsx)("select", { value: music, onChange: (e) => changeMusic(e.target.value), className: "is-light", children: MUSICS.map((m) => ((0, jsx_runtime_1.jsx)("option", { value: m, children: m }, m))) }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => randomizeMusic(), title: t("random_music"), children: (0, jsx_runtime_1.jsx)("img", { src: "/assets/ui/randomize.svg", style: { marginRight: 0 } }) })] }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsxs)("label", { className: "full-width", children: [t("music_volume"), ": ", volume, " %", (0, jsx_runtime_1.jsx)("input", { type: "range", min: "0", max: "100", value: volume, onInput: handleVolumeChange })] }) })] }));
}
//# sourceMappingURL=jukebox.js.map