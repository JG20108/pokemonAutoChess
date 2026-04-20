"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameDialog = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const phaser_1 = require("phaser");
const client_1 = __importDefault(require("react-dom/client"));
const pokemon_portrait_1 = __importDefault(require("../../pages/component/pokemon-portrait"));
const descriptions_1 = require("../../pages/utils/descriptions");
class GameDialog extends phaser_1.GameObjects.DOMElement {
    constructor({ scene, dialog, dialogTitle, portrait, extraClass }) {
        super(scene, 0, 0);
        this.dom = document.createElement("div");
        this.dom.className = `my-container game-dialog ${extraClass !== null && extraClass !== void 0 ? extraClass : ""}`;
        this.setElement(this.dom);
        const root = client_1.default.createRoot(this.dom);
        root.render((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [portrait && ((0, jsx_runtime_1.jsx)("div", { className: "game-dialog-portrait", children: (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: portrait }) })), dialogTitle && ((0, jsx_runtime_1.jsx)("div", { className: "game-dialog-title", children: (0, jsx_runtime_1.jsx)("p", { children: dialogTitle }) })), (0, jsx_runtime_1.jsx)("div", { className: "game-dialog-text", children: (0, descriptions_1.addIconsToDescription)(dialog) })] }));
    }
}
exports.GameDialog = GameDialog;
//# sourceMappingURL=game-dialog.js.map