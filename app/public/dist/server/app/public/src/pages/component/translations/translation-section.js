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
exports.TranslationSection = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const translation_row_1 = require("./translation-row");
require("./translation-section.css");
exports.TranslationSection = react_1.default.memo(function TranslationSection({ path, label, enObj, collapsedSections, toggleSection, edits, getTargetValue, onEdit, onRevert, depth, translatedCount, missingCount, totalCount }) {
    const isCollapsed = collapsedSections.has(path);
    const editedCount = (0, react_1.useMemo)(() => Object.keys(edits).filter((k) => k === path || k.startsWith(path + "."))
        .length, [edits, path]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "translation-section", children: [(0, jsx_runtime_1.jsxs)("button", { className: `translation-section-header depth-${Math.min(depth, 3)}${editedCount > 0 ? " has-edits" : ""}`, onClick: () => toggleSection(path), children: [(0, jsx_runtime_1.jsx)("span", { className: "section-arrow", children: isCollapsed ? "▶" : "▼" }), (0, jsx_runtime_1.jsx)("span", { className: "section-label", children: label }), (0, jsx_runtime_1.jsxs)("span", { className: "translations-stats", children: [(0, jsx_runtime_1.jsxs)("span", { className: "stat-translated", children: [translatedCount, " translated"] }), ", ", (0, jsx_runtime_1.jsxs)("span", { className: "stat-missing", children: [missingCount, " missing"] }), " ", (0, jsx_runtime_1.jsxs)("span", { children: ["(", ((translatedCount / totalCount) * 100).toFixed(1), "% complete)"] })] }), editedCount > 0 && ((0, jsx_runtime_1.jsxs)("span", { className: "section-edit-badge", children: [editedCount, " edited"] }))] }), !isCollapsed && ((0, jsx_runtime_1.jsx)("div", { className: "translation-section-content", children: Object.entries(enObj).map(([key, value]) => {
                    const childPath = `${path}.${key}`;
                    if (typeof value === "string") {
                        return ((0, jsx_runtime_1.jsx)(translation_row_1.TranslationRow, { path: childPath, leafKey: key, enValue: value, targetValue: getTargetValue(childPath), isEdited: childPath in edits, onEdit: onEdit, onRevert: onRevert }, childPath));
                    }
                    const translatedCount = Object.keys(value).filter((k) => getTargetValue(`${childPath}.${k}`) !== "").length;
                    const missingCount = Object.keys(value).filter((k) => getTargetValue(`${childPath}.${k}`) === "").length;
                    const totalCount = Object.keys(value).length;
                    return ((0, jsx_runtime_1.jsx)(TranslationSection, { path: childPath, label: key, enObj: value, collapsedSections: collapsedSections, toggleSection: toggleSection, edits: edits, getTargetValue: getTargetValue, onEdit: onEdit, onRevert: onRevert, depth: depth + 1, translatedCount: translatedCount, missingCount: missingCount, totalCount: totalCount }, childPath));
                }) }))] }));
});
//# sourceMappingURL=translation-section.js.map