"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MapViewerContainer;
const jsx_runtime_1 = require("react/jsx-runtime");
const phaser_1 = __importDefault(require("phaser"));
const moveto_plugin_1 = __importDefault(require("phaser4-rex-plugins/plugins/moveto-plugin"));
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Dungeon_1 = require("../../../../../types/enum/Dungeon");
const Weather_1 = require("../../../../../types/enum/Weather");
const debug_scene_1 = require("../../../game/scenes/debug-scene");
require("./debug-scene.css");
function MapViewerContainer() {
    const gameRef = (0, react_1.useRef)(null);
    const debugScene = (0, react_1.useRef)(null);
    const { t } = (0, react_i18next_1.useTranslation)();
    const width = 1950;
    const height = 1000;
    const initialized = (0, react_1.useRef)(false);
    const [loaded, setLoaded] = (0, react_1.useState)(false);
    const [statusMessage, setStatusMessage] = (0, react_1.useState)("");
    const maps = Object.values(Dungeon_1.DungeonPMDO);
    const [map, setMap] = (0, react_1.useState)("town");
    const [colorFilter, setColorFilter] = (0, react_1.useState)({
        red: 255,
        green: 255,
        blue: 255,
        alpha: 0
    });
    const onProgress = () => { var _a, _b, _c; return setStatusMessage((_c = (_b = (_a = debugScene === null || debugScene === void 0 ? void 0 : debugScene.current) === null || _a === void 0 ? void 0 : _a.loadingManager) === null || _b === void 0 ? void 0 : _b.statusMessage) !== null && _c !== void 0 ? _c : ""); };
    const onComplete = (0, react_1.useCallback)(() => {
        var _a;
        setStatusMessage("Loading map...");
        (_a = debugScene.current) === null || _a === void 0 ? void 0 : _a.updateMap(map).then(() => setLoaded(true));
    }, [map]);
    (0, react_1.useEffect)(() => {
        if (!initialized.current) {
            initialized.current = true;
            debugScene.current = new debug_scene_1.DebugScene(height, width, onProgress, onComplete);
            gameRef.current = new phaser_1.default.Game({
                type: phaser_1.default.AUTO,
                parent: "debug-scene",
                pixelArt: true,
                width,
                height,
                scale: { mode: phaser_1.default.Scale.FIT },
                dom: {
                    createContainer: true
                },
                disableContextMenu: true,
                scene: [debugScene.current],
                backgroundColor: "var(--color-bg-primary)",
                plugins: {
                    global: [
                        {
                            key: "rexMoveTo",
                            plugin: moveto_plugin_1.default,
                            start: true
                        }
                    ]
                }
            });
        }
    }, [height, initialized, onComplete, width]);
    (0, react_1.useEffect)(() => {
        var _a;
        if (initialized.current === true && loaded === true) {
            (_a = debugScene.current) === null || _a === void 0 ? void 0 : _a.updateMap(map);
        }
    }, [map]);
    (0, react_1.useEffect)(() => {
        var _a;
        if (initialized.current === true && loaded === true) {
            (_a = debugScene.current) === null || _a === void 0 ? void 0 : _a.updateColorFilter(colorFilter);
        }
    }, [colorFilter]);
    return ((0, jsx_runtime_1.jsxs)("div", { id: "debug-scene", className: "map-viewer", children: [!loaded && (0, jsx_runtime_1.jsx)("p", { id: "status-message", children: statusMessage }), (0, jsx_runtime_1.jsxs)("div", { id: "debug-scene-controls", children: [(0, jsx_runtime_1.jsxs)("select", { onChange: (event) => setMap(event === null || event === void 0 ? void 0 : event.target.value), children: [(0, jsx_runtime_1.jsx)("option", { value: "town", children: "Treasure Town" }, "town"), maps.map((m) => ((0, jsx_runtime_1.jsx)("option", { value: m, children: m }, m)))] }), (0, jsx_runtime_1.jsxs)("select", { onChange: (e) => {
                            var _a;
                            (_a = debugScene.current) === null || _a === void 0 ? void 0 : _a.setWeather(e.target.value);
                        }, children: [(0, jsx_runtime_1.jsx)("option", { value: "dawn", children: "Dawn (Stage 0)" }), (0, jsx_runtime_1.jsx)("option", { value: "sunset", children: "Sunset (Stage 20)" }), (0, jsx_runtime_1.jsx)("option", { value: "nighttime", children: "Town at Night (Stage 21+)" }), Object.values(Weather_1.Weather).map((weather) => ((0, jsx_runtime_1.jsx)("option", { value: weather, children: t(`weather.${weather}`) }, weather)))] }), (0, jsx_runtime_1.jsxs)("details", { children: [(0, jsx_runtime_1.jsx)("summary", { children: "Color filter" }), (0, jsx_runtime_1.jsxs)("label", { children: ["Red ", colorFilter.red, " ", (0, jsx_runtime_1.jsx)("input", { type: "range", min: "0", max: "255", value: colorFilter.red, onChange: (e) => setColorFilter(Object.assign(Object.assign({}, colorFilter), { red: +e.target.value })) })] }), (0, jsx_runtime_1.jsxs)("label", { children: ["Green ", colorFilter.green, " ", (0, jsx_runtime_1.jsx)("input", { type: "range", min: "0", max: "255", value: colorFilter.green, onChange: (e) => setColorFilter(Object.assign(Object.assign({}, colorFilter), { green: +e.target.value })) })] }), (0, jsx_runtime_1.jsxs)("label", { children: ["Blue ", colorFilter.blue, " ", (0, jsx_runtime_1.jsx)("input", { type: "range", min: "0", max: "255", value: colorFilter.blue, onChange: (e) => setColorFilter(Object.assign(Object.assign({}, colorFilter), { blue: +e.target.value })) })] }), (0, jsx_runtime_1.jsxs)("label", { children: ["Alpha ", colorFilter.alpha, " ", (0, jsx_runtime_1.jsx)("input", { type: "range", min: "0", max: "100", value: colorFilter.alpha, onChange: (e) => setColorFilter(Object.assign(Object.assign({}, colorFilter), { alpha: +e.target.value })) })] })] })] })] }));
}
//# sourceMappingURL=map-viewer.js.map