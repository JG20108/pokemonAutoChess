"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PatchNotes;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const patches_1 = require("../../../../../config/game/patches");
const patch_summary_1 = require("./patch-summary");
const poster_1 = require("./poster");
require("./patchnotes.css");
function PatchNotes() {
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
    const handlePosterClick = (patch) => viewTransition(() => {
        setSelectedPatch((selectedPatch === null || selectedPatch === void 0 ? void 0 : selectedPatch.v) === patch.v ? null : patch);
    });
    const handleBackClick = () => viewTransition(() => {
        setSelectedPatch(null);
    });
    if (selectedPatch) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "patchnotes-detail-view", children: (0, jsx_runtime_1.jsxs)("div", { className: "detail-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "detail-poster", children: (0, jsx_runtime_1.jsx)(poster_1.Poster, { version: selectedPatch.v, isDetailed: true }) }), (0, jsx_runtime_1.jsxs)("div", { className: "detail-notes", children: [(0, jsx_runtime_1.jsx)("button", { className: "close-btn", onClick: handleBackClick, style: { float: "right", marginLeft: "2em" }, children: "\uD83D\uDDD9" }), (0, jsx_runtime_1.jsx)(patch_summary_1.PatchSummary, { patch: selectedPatch })] })] }) }));
    }
    return ((0, jsx_runtime_1.jsx)("ul", { className: "patchnotes-grid", role: "list", children: patches_1.PATCHES.map((patch) => ((0, jsx_runtime_1.jsx)("li", { style: { viewTransitionName: `poster-${patch.v}` }, role: "listitem", children: (0, jsx_runtime_1.jsx)(poster_1.Poster, { version: patch.v, onClick: () => handlePosterClick(patch) }) }, patch.v))) }));
}
//# sourceMappingURL=patchnotes.js.map