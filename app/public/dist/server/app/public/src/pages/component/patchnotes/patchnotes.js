"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PatchNotes;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const react_i18next_1 = require("react-i18next");
const patch_summary_1 = require("./patch-summary");
const poster_1 = require("./poster");
require("./patchnotes.css");
function PatchNotes() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const PATCHES = [
        "6.9",
        "6.8",
        "6.7",
        "6.6",
        "6.5",
        "6.4",
        "6.3",
        "6.2",
        "6.1",
        "6.0",
        "5.10",
        "5.9",
        "5.8",
        "5.7",
        "5.6",
        "5.5",
        "5.4",
        "5.3",
        "5.2",
        "5.1",
        "5.0",
        "4.9",
        "4.8",
        "4.7",
        "4.6",
        "4.5",
        "4.4",
        "4.3",
        "4.2",
        "4.1",
        "4.0",
        "3.10",
        "3.9",
        "3.8"
    ];
    const [selectedPatch, setSelectedPatch] = (0, react_1.useState)(null);
    const viewTransition = (transition) => {
        if ("startViewTransition" in document &&
            typeof document.startViewTransition === "function") {
            document.startViewTransition(() => {
                (0, react_dom_1.flushSync)(() => {
                    transition();
                });
            });
        }
        else {
            transition();
        }
    };
    const handlePosterClick = (version) => viewTransition(() => {
        setSelectedPatch(selectedPatch === version ? null : version);
    });
    const handleBackClick = () => viewTransition(() => {
        setSelectedPatch(null);
    });
    if (selectedPatch) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "patchnotes-detail-view", children: (0, jsx_runtime_1.jsxs)("div", { className: "detail-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "detail-poster", children: (0, jsx_runtime_1.jsx)(poster_1.Poster, { version: selectedPatch, isDetailed: true }) }), (0, jsx_runtime_1.jsxs)("div", { className: "detail-notes", children: [(0, jsx_runtime_1.jsx)("button", { className: "close-btn", onClick: handleBackClick, style: { float: "right", marginLeft: "2em" }, children: "\uD83D\uDDD9" }), (0, jsx_runtime_1.jsx)(patch_summary_1.PatchSummary, { version: selectedPatch })] })] }) }));
    }
    return ((0, jsx_runtime_1.jsx)("ul", { className: "patchnotes-grid", role: "list", children: PATCHES.map((v) => ((0, jsx_runtime_1.jsx)("li", { style: { viewTransitionName: `poster-${v}` }, role: "listitem", children: (0, jsx_runtime_1.jsx)(poster_1.Poster, { version: v, onClick: () => handlePosterClick(v) }) }, v))) }));
}
//# sourceMappingURL=patchnotes.js.map