"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationRow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const descriptions_1 = require("../../utils/descriptions");
require("./translation-row.css");
exports.TranslationRow = react_1.default.memo(function TranslationRow({ path, leafKey, enValue, targetValue, isEdited, onEdit, onRevert }) {
    const [focused, setFocused] = (0, react_1.useState)(null);
    const [previewBelow, setPreviewBelow] = (0, react_1.useState)(false);
    const enWrapRef = (0, react_1.useRef)(null);
    const targetWrapRef = (0, react_1.useRef)(null);
    function handleFocus(field) {
        const ref = field === "en" ? enWrapRef : targetWrapRef;
        if (ref.current) {
            const top = ref.current.getBoundingClientRect().top;
            setPreviewBelow(top < window.innerHeight / 4);
        }
        setFocused(field);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: `translation-row${isEdited ? " edited" : ""}`, children: [(0, jsx_runtime_1.jsx)("span", { className: "translation-key", title: path, children: leafKey }), (0, jsx_runtime_1.jsxs)("div", { className: `translation-field-wrap${previewBelow && focused === "en" ? " preview-below" : ""}`, ref: enWrapRef, children: [focused === "en" && enValue && ((0, jsx_runtime_1.jsx)("div", { className: "translation-preview", children: (0, descriptions_1.addIconsToDescription)(enValue) })), (0, jsx_runtime_1.jsx)("textarea", { className: "translation-en", value: enValue, readOnly: true, tabIndex: -1, rows: 1, onFocus: () => handleFocus("en"), onBlur: () => setFocused(null) })] }), (0, jsx_runtime_1.jsxs)("div", { className: `translation-field-wrap${previewBelow && focused === "target" ? " preview-below" : ""}`, ref: targetWrapRef, children: [focused === "target" && targetValue && ((0, jsx_runtime_1.jsx)("div", { className: "translation-preview", children: (0, descriptions_1.addIconsToDescription)(targetValue) })), (0, jsx_runtime_1.jsx)("textarea", { className: "translation-target", value: targetValue, rows: 1, onChange: (e) => onEdit(path, e.currentTarget.value), onFocus: () => handleFocus("target"), onBlur: () => setFocused(null) })] }), (0, jsx_runtime_1.jsx)("button", { className: "translation-revert-btn", title: "Revert to original", disabled: !isEdited, onClick: () => onRevert(path), children: "\u21A9" })] }));
});
//# sourceMappingURL=translation-row.js.map