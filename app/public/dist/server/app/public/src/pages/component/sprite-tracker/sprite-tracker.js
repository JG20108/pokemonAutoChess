"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SpriteTracker;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_virtualized_auto_sizer_1 = require("react-virtualized-auto-sizer");
const react_window_1 = require("react-window");
const avatar_1 = require("../../../../../utils/avatar");
const checkbox_1 = require("../checkbox/checkbox");
require("./sprite-tracker.css");
const SPRITE_TRACKER_ROW_HEIGHT = 76;
function SpriteOnlyRow({ index, style, groups, normalLabel, shinyLabel, getSpriteCollabUrl, getPacPortraitUrl, getImageFallback }) {
    var _a, _b, _c, _d, _e;
    const group = groups[index];
    const normalEntry = (_b = (_a = group.normal) !== null && _a !== void 0 ? _a : group.others[0]) !== null && _b !== void 0 ? _b : group.shiny;
    const shinyEntry = group.shiny !== normalEntry ? group.shiny : undefined;
    const title = normalEntry === null || normalEntry === void 0 ? void 0 : normalEntry.displayName.replace(/\s+Shiny$/i, "");
    const normalIndex = (normalEntry === null || normalEntry === void 0 ? void 0 : normalEntry.isShiny) ? undefined : normalEntry === null || normalEntry === void 0 ? void 0 : normalEntry.index;
    const shinyIndex = (_c = shinyEntry === null || shinyEntry === void 0 ? void 0 : shinyEntry.index) !== null && _c !== void 0 ? _c : ((normalEntry === null || normalEntry === void 0 ? void 0 : normalEntry.isShiny) ? normalEntry.index : undefined);
    if (!normalEntry) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("div", { style: style, children: (0, jsx_runtime_1.jsx)("div", { className: "entry my-box sprite-only-entry", children: (0, jsx_runtime_1.jsx)("div", { className: "entry-header", children: (0, jsx_runtime_1.jsxs)("div", { className: "entry-info grouped-row", children: [(0, jsx_runtime_1.jsxs)("div", { className: "entry-portraits", children: [(0, jsx_runtime_1.jsx)("img", { className: "pokemon-portrait entry-portrait", src: (_d = normalEntry.portraitUrl) !== null && _d !== void 0 ? _d : getPacPortraitUrl(normalEntry.index), onError: getImageFallback }), shinyEntry && ((0, jsx_runtime_1.jsx)("img", { className: "pokemon-portrait entry-portrait", src: (_e = shinyEntry.portraitUrl) !== null && _e !== void 0 ? _e : getPacPortraitUrl(shinyEntry.index), onError: getImageFallback }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "entry-text", children: [(0, jsx_runtime_1.jsx)("div", { className: "entry-line", children: (0, jsx_runtime_1.jsx)("a", { className: "pokemon-name entry-title entry-name-link", href: getSpriteCollabUrl(normalEntry.index), target: "_blank", rel: "noreferrer", children: title }) }), (0, jsx_runtime_1.jsxs)("div", { className: "entry-line entry-summary", children: [normalIndex && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { className: "entry-kind", children: normalLabel }), (0, jsx_runtime_1.jsx)("span", { className: "entry-index", children: normalIndex })] })), normalIndex && shinyIndex && ((0, jsx_runtime_1.jsx)("span", { className: "entry-separator", children: "|" })), shinyIndex && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { className: "entry-kind", children: shinyLabel }), (0, jsx_runtime_1.jsx)("span", { className: "entry-index", children: shinyIndex })] }))] })] })] }) }) }) }));
}
function getShinyGroupKey(index) {
    if (index.endsWith("-0000-0001")) {
        return index.slice(0, -10);
    }
    const parts = index.split("-");
    if (parts.length === 3 && parts[2] === "0001") {
        return `${parts[0]}-${parts[1]}`;
    }
    if (parts.length >= 4 && parts[2] === "0001") {
        const base = [...parts];
        base[2] = "0000";
        return base.join("-");
    }
    return index;
}
function buildGroupedSpriteRows(entries) {
    const groups = new Map();
    for (const entry of entries) {
        const key = getShinyGroupKey(entry.index);
        if (!groups.has(key)) {
            groups.set(key, { key, others: [] });
        }
        const group = groups.get(key);
        if (entry.isShiny) {
            if (!group.shiny) {
                group.shiny = entry;
            }
            else {
                group.others.push(entry);
            }
        }
        else if (!group.normal) {
            group.normal = entry;
        }
        else {
            group.others.push(entry);
        }
    }
    return [...groups.values()].sort((a, b) => a.key.localeCompare(b.key));
}
function SpriteTracker() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [data, setData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    const [filterAlternate, setFilterAlternate] = (0, react_1.useState)(false);
    const [filterAltcolor, setFilterAltcolor] = (0, react_1.useState)(false);
    const [filterFemale, setFilterFemale] = (0, react_1.useState)(false);
    const [filterCutscene, setFilterCutscene] = (0, react_1.useState)(false);
    const [filterAlcremie, setFilterAlcremie] = (0, react_1.useState)(false);
    const [filterBeta, setFilterBeta] = (0, react_1.useState)(false);
    const [filterMega, setFilterMega] = (0, react_1.useState)(false);
    const [searchQuery, setSearchQuery] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                setLoading(true);
                const response = yield fetch("/sprite-gap-scanner");
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const result = yield response.json();
                setData(result);
                setError(null);
            }
            catch (err) {
                setError(err instanceof Error
                    ? err.message
                    : t("sprite_tracker.failed_to_fetch_data"));
                setData(null);
            }
            finally {
                setLoading(false);
            }
        });
        fetchData();
    }, []);
    const filteredSpriteOnly = (0, react_1.useMemo)(() => {
        var _a;
        const entries = (_a = data === null || data === void 0 ? void 0 : data.spriteOnly) !== null && _a !== void 0 ? _a : [];
        const normalizedQuery = searchQuery.trim().toLowerCase();
        return entries.filter((entry) => {
            const form = entry.formName.toLowerCase();
            const pkm = entry.pkm.toLowerCase();
            if (form.includes("alternate") && !filterAlternate)
                return false;
            if (form.includes("altcolor") && !filterAltcolor)
                return false;
            if (form.includes("female") && !filterFemale)
                return false;
            if (form.includes("cutscene") && !filterCutscene)
                return false;
            if (pkm.includes("alcremie") && !filterAlcremie)
                return false;
            if ((form.includes("beta") || pkm.includes("missingno")) && !filterBeta)
                return false;
            if (form.includes("mega") && !filterMega)
                return false;
            if (normalizedQuery && !pkm.includes(normalizedQuery)) {
                if (!form.includes(normalizedQuery))
                    return false;
            }
            return true;
        });
    }, [
        data === null || data === void 0 ? void 0 : data.spriteOnly,
        filterAlternate,
        filterAltcolor,
        filterFemale,
        filterCutscene,
        filterAlcremie,
        filterBeta,
        filterMega,
        searchQuery
    ]);
    const filterCounts = (0, react_1.useMemo)(() => {
        var _a;
        const entries = (_a = data === null || data === void 0 ? void 0 : data.spriteOnly) !== null && _a !== void 0 ? _a : [];
        let alternate = 0;
        let altcolor = 0;
        let female = 0;
        let cutscene = 0;
        let alcremie = 0;
        let beta = 0;
        let mega = 0;
        for (const entry of entries) {
            const formName = entry.formName.toLowerCase();
            const pkm = entry.pkm.toLowerCase();
            if (formName.includes("alternate"))
                alternate += 1;
            if (formName.includes("altcolor"))
                altcolor += 1;
            if (formName.includes("female"))
                female += 1;
            if (formName.includes("cutscene"))
                cutscene += 1;
            if (pkm.includes("alcremie"))
                alcremie += 1;
            if (formName.includes("beta"))
                beta += 1;
            if (formName.includes("mega"))
                mega += 1;
        }
        return { alternate, altcolor, female, cutscene, alcremie, beta, mega };
    }, [data === null || data === void 0 ? void 0 : data.spriteOnly]);
    const groupedSpriteOnly = (0, react_1.useMemo)(() => buildGroupedSpriteRows(filteredSpriteOnly), [filteredSpriteOnly]);
    const getSpriteCollabUrl = (index) => {
        var _a;
        const parts = index.split("-");
        const species = parts[0];
        const baseForm = Number((_a = parts[1]) !== null && _a !== void 0 ? _a : "0");
        const hasVariant = parts.slice(2).some((part) => Number(part) > 0);
        const form = baseForm > 0 ? baseForm : hasVariant ? 1 : 0;
        if (form === 0) {
            return `https://sprites.pmdcollab.org/#/${species}`;
        }
        return `https://sprites.pmdcollab.org/#/${species}?form=${form}`;
    };
    const getPacPortraitUrl = (index) => (0, avatar_1.getPortraitSrc)(index);
    const getImageFallback = (event) => {
        const target = event.currentTarget;
        const fallback = (0, avatar_1.getPortraitSrc)("0129");
        if (target.src !== new URL(fallback, window.location.origin).href) {
            target.src = fallback;
            return;
        }
        target.style.visibility = "hidden";
    };
    if (loading) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "sprite-tracker", children: (0, jsx_runtime_1.jsx)("div", { className: "loading", children: t("loading") }) }));
    }
    if (error) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "sprite-tracker", children: (0, jsx_runtime_1.jsxs)("div", { className: "error", children: [(0, jsx_runtime_1.jsx)("strong", { children: t("sprite_tracker.error_label") }), ": ", error] }) }));
    }
    if (!data) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "sprite-tracker", children: (0, jsx_runtime_1.jsx)("div", { className: "error", children: t("no_data_available") }) }));
    }
    const lastRefreshDate = new Date(data.stats.lastRefresh);
    const lastRefreshStr = lastRefreshDate.toLocaleString();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "sprite-tracker", children: [(0, jsx_runtime_1.jsx)("div", { className: "refresh-info", children: t("sprite_tracker.summary_line", {
                    totalSpriteCollab: data.stats.totalSpriteCollab,
                    missingInPac: data.spriteOnly.length,
                    lastUpdated: lastRefreshStr,
                    refreshDurationMs: data.stats.refreshDurationMs
                }) }), (0, jsx_runtime_1.jsxs)("div", { className: "criteria-info my-box", children: [(0, jsx_runtime_1.jsx)("strong", { children: t("sprite_tracker.criteria_title") }), (0, jsx_runtime_1.jsx)("p", { children: t("sprite_tracker.criteria_line_1") }), (0, jsx_runtime_1.jsx)("p", { children: t("sprite_tracker.criteria_line_2") }), (0, jsx_runtime_1.jsx)("p", { children: t("sprite_tracker.criteria_line_3") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "filter-container", children: [(0, jsx_runtime_1.jsxs)("details", { children: [(0, jsx_runtime_1.jsx)("summary", { children: t("filters") }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { label: t("sprite_tracker.filter_mega", {
                                            count: filterCounts.mega
                                        }), checked: filterMega, onToggle: setFilterMega, isDark: true }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { label: t("sprite_tracker.filter_alternate", {
                                            count: filterCounts.alternate
                                        }), checked: filterAlternate, onToggle: setFilterAlternate, isDark: true }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { label: t("sprite_tracker.filter_altcolor", {
                                            count: filterCounts.altcolor
                                        }), checked: filterAltcolor, onToggle: setFilterAltcolor, isDark: true }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { label: t("sprite_tracker.filter_female", {
                                            count: filterCounts.female
                                        }), checked: filterFemale, onToggle: setFilterFemale, isDark: true }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { label: t("sprite_tracker.filter_cutscene", {
                                            count: filterCounts.cutscene
                                        }), checked: filterCutscene, onToggle: setFilterCutscene, isDark: true }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { label: t("sprite_tracker.filter_alcremie", {
                                            count: filterCounts.alcremie
                                        }), checked: filterAlcremie, onToggle: setFilterAlcremie, isDark: true }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { label: t("sprite_tracker.filter_beta", {
                                            count: filterCounts.beta
                                        }), checked: filterBeta, onToggle: setFilterBeta, isDark: true })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "filter-search-box", children: (0, jsx_runtime_1.jsx)("input", { className: "filter-search-input", type: "search", value: searchQuery, onChange: (event) => setSearchQuery(event.target.value), placeholder: t("search"), "aria-label": t("search") }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "content", children: groupedSpriteOnly.length === 0 ? ((0, jsx_runtime_1.jsx)("p", { className: "empty-state", children: t("no_results_found") })) : ((0, jsx_runtime_1.jsx)(react_virtualized_auto_sizer_1.AutoSizer, { renderProp: ({ height, width }) => {
                        if (height === undefined || width === undefined)
                            return null;
                        return ((0, jsx_runtime_1.jsx)(react_window_1.List, { style: { height, width }, rowCount: groupedSpriteOnly.length, rowHeight: SPRITE_TRACKER_ROW_HEIGHT, rowComponent: SpriteOnlyRow, rowProps: {
                                groups: groupedSpriteOnly,
                                normalLabel: t("sprite_tracker.normal"),
                                shinyLabel: t("sprite_tracker.shiny"),
                                getSpriteCollabUrl,
                                getPacPortraitUrl,
                                getImageFallback
                            } }));
                    } })) })] }));
}
//# sourceMappingURL=sprite-tracker.js.map