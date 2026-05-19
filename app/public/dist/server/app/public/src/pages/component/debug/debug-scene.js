"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DebugSceneContainer;
const jsx_runtime_1 = require("react/jsx-runtime");
const phaser_1 = __importDefault(require("phaser"));
const moveto_plugin_1 = __importDefault(require("phaser4-rex-plugins/plugins/moveto-plugin"));
const react_1 = require("react");
const Game_1 = require("../../../../../types/enum/Game");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const debug_scene_1 = require("../../../game/scenes/debug-scene");
const preferences_1 = require("../../../preferences");
require("./debug-scene.css");
function DebugSceneContainer({ pkm = Pokemon_1.Pkm.RATTATA, orientation = Game_1.Orientation.DOWNLEFT, animationType = "Idle", shiny, status, height = 100, width = 100 }) {
    const gameRef = (0, react_1.useRef)(null);
    const debugScene = (0, react_1.useRef)(null);
    const initialized = (0, react_1.useRef)(false);
    const [loaded, setLoaded] = (0, react_1.useState)(false);
    const [statusMessage, setStatusMessage] = (0, react_1.useState)("");
    const onProgress = () => { var _a, _b, _c; return setStatusMessage((_c = (_b = (_a = debugScene === null || debugScene === void 0 ? void 0 : debugScene.current) === null || _a === void 0 ? void 0 : _a.loadingManager) === null || _b === void 0 ? void 0 : _b.statusMessage) !== null && _c !== void 0 ? _c : ""); };
    const onComplete = (0, react_1.useCallback)(() => {
        var _a;
        setLoaded(true);
        (_a = debugScene.current) === null || _a === void 0 ? void 0 : _a.updateSprite(pkm, orientation, animationType, status, shiny);
    }, [animationType, orientation, pkm, status, shiny]);
    (0, react_1.useEffect)(() => {
        var _a;
        if (!initialized.current) {
            initialized.current = true;
            debugScene.current = new debug_scene_1.DebugScene(height, width, onProgress, onComplete);
            gameRef.current = new phaser_1.default.Game({
                type: +((_a = (0, preferences_1.preference)("renderer")) !== null && _a !== void 0 ? _a : phaser_1.default.AUTO),
                parent: "debug-scene",
                pixelArt: true,
                width,
                height,
                scene: [debugScene.current],
                backgroundColor: "#61738a",
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
            (_a = debugScene.current) === null || _a === void 0 ? void 0 : _a.updateSprite(pkm, orientation, animationType, status, shiny);
        }
    }, [pkm, orientation, animationType, status, loaded, shiny]);
    return ((0, jsx_runtime_1.jsx)("div", { id: "debug-scene", children: !loaded && (0, jsx_runtime_1.jsx)("p", { id: "status-message", children: statusMessage }) }));
}
//# sourceMappingURL=debug-scene.js.map