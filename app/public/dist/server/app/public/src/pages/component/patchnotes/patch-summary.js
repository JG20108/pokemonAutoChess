"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchSummary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const marked_1 = require("marked");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Item_1 = require("../../../../../types/enum/Item");
const avatar_1 = require("../../../../../utils/avatar");
const number_1 = require("../../../../../utils/number");
const item_detail_1 = require("../../../game/components/item-detail");
const descriptions_1 = require("../../utils/descriptions");
const game_pokemon_detail_1 = require("../game/game-pokemon-detail");
require("./patch-summary.css");
function fetchMarkdown(url, headingLevelAdjustment = 0) {
    return fetch(url)
        .then((res) => res.text())
        .then((md) => {
        marked_1.marked.use({
            renderer: {
                heading({ tokens, depth }) {
                    const newDepth = (0, number_1.clamp)(depth + headingLevelAdjustment, 1, 6);
                    const text = this.parser.parseInline(tokens);
                    return `<h${newDepth}>${text}</h${newDepth}>`;
                },
                image({ href, title, text }) {
                    var _a;
                    const titleAttr = title ? ` title="${title}"` : "";
                    let tooltipId = "";
                    let content = "";
                    if (href.startsWith("/assets/portraits/")) {
                        tooltipId = "game-pokemon-detail-tooltip";
                        content = ((_a = (0, avatar_1.getPkmFromPortraitSrc)(href)) === null || _a === void 0 ? void 0 : _a.name) || "";
                    }
                    else if (href.startsWith("/assets/item/")) {
                        tooltipId = "item-detail-tooltip";
                        const itemNameMatch = href.match(/\/assets\/item\/(\w+)\.png/);
                        if (itemNameMatch && itemNameMatch[1] in Item_1.Item) {
                            content = Item_1.Item[itemNameMatch[1]];
                        }
                    }
                    return `<img src="${href}" alt="${text}"${titleAttr} ${tooltipId && `data-tooltip-id="${tooltipId}"`} data-tooltip-content="${content}" />`;
                }
            }
        });
        return marked_1.marked.parse(md);
    });
}
exports.PatchSummary = (0, react_1.memo)(({ patch }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [patchContent, setPatchContent] = (0, react_1.useState)();
    const [fullPatchNotes, setFullPatchNotes] = (0, react_1.useState)();
    const [midpatchNotes, setMidpatchNotes] = (0, react_1.useState)([]);
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        var _a;
        setIsLoading(true);
        const fetchSummary = fetchMarkdown(`/changelog/summary/summary-${patch.v}.md`);
        const fetchFullNotes = fetchMarkdown(`/changelog/patch-${patch.v}.md`, 2);
        const midpatches = (_a = patch.midpatches) !== null && _a !== void 0 ? _a : [];
        const fetchMidpatchNotes = Promise.all(midpatches.map((version) => fetchMarkdown(`/changelog/patch-${version}.md`, 3)
            .then((parsed) => ({
            version,
            html: (0, descriptions_1.addIconsToHtml)(parsed)
        }))
            .catch(() => null)));
        Promise.all([fetchSummary, fetchFullNotes, fetchMidpatchNotes])
            .then(([summaryParsed, fullNotesParsed, midpatchesParsed]) => {
            setPatchContent((0, descriptions_1.addIconsToHtml)(summaryParsed));
            setFullPatchNotes((0, descriptions_1.addIconsToHtml)(fullNotesParsed));
            setMidpatchNotes(midpatchesParsed.filter(Boolean));
        })
            .catch(() => {
            const fallbackContent = `<h2>Patch ${patch.v}</h2><p>Changelog not available</p>`;
            const fallbackNotes = "<p>Patch notes not available</p>";
            setPatchContent((0, descriptions_1.addIconsToHtml)(fallbackContent));
            setFullPatchNotes((0, descriptions_1.addIconsToHtml)(fallbackNotes));
            setMidpatchNotes([]);
        })
            .finally(() => {
            setIsLoading(false);
        });
    }, [patch.v, patch.midpatches]);
    const patchContentHtml = (0, react_1.useMemo)(() => ({ __html: patchContent || "" }), [patchContent]);
    const fullPatchNotesHtml = (0, react_1.useMemo)(() => ({ __html: fullPatchNotes || "" }), [fullPatchNotes]);
    const hasMidpatches = midpatchNotes.length > 0;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "patch-summary", children: [isLoading ? ((0, jsx_runtime_1.jsxs)("p", { children: [t("loading"), "..."] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [hasMidpatches && ((0, jsx_runtime_1.jsxs)("nav", { className: "midpatch-shortcuts", "aria-label": "Midpatch shortcuts", children: [(0, jsx_runtime_1.jsx)("span", { children: "Jump to midpatch notes:" }), midpatchNotes.map(({ version }) => ((0, jsx_runtime_1.jsx)("a", { href: `#midpatch-${version.replace(/\./g, "-")}`, children: version }, version)))] })), (0, jsx_runtime_1.jsx)("div", { className: "patch-content", dangerouslySetInnerHTML: patchContentHtml }), (0, jsx_runtime_1.jsx)("hr", {}), fullPatchNotes && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h2", { children: t("full_patch_notes") }), (0, jsx_runtime_1.jsx)("div", { className: "full-patch-notes", dangerouslySetInnerHTML: fullPatchNotesHtml })] })), hasMidpatches && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Midpatch notes" }), midpatchNotes.map(({ version, html }) => ((0, jsx_runtime_1.jsxs)("section", { id: `midpatch-${version.replace(/\./g, "-")}`, className: "midpatch-section", children: [(0, jsx_runtime_1.jsxs)("h3", { children: ["Patch ", version] }), (0, jsx_runtime_1.jsx)("div", { className: "full-patch-notes", dangerouslySetInnerHTML: { __html: html } })] }, version)))] }))] })), (0, jsx_runtime_1.jsx)(game_pokemon_detail_1.GamePokemonDetailTooltip, { origin: "patchnotes" }), (0, jsx_runtime_1.jsx)(item_detail_1.ItemDetailTooltip, {})] }));
}, (prevProps, nextProps) => prevProps.patch.v === nextProps.patch.v);
//# sourceMappingURL=patch-summary.js.map