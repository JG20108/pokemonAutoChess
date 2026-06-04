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
exports.default = SpriteGapScanner;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const checkbox_1 = require("../checkbox/checkbox");
require("./sprite-gap-scanner.css");
function SpriteGapScanner() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [data, setData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    const [filterAlternate, setFilterAlternate] = (0, react_1.useState)(false);
    const [filterAltcolor, setFilterAltcolor] = (0, react_1.useState)(false);
    const [filterFemale, setFilterFemale] = (0, react_1.useState)(false);
    const [filterCutscene, setFilterCutscene] = (0, react_1.useState)(false);
    const [filterAlcremie, setFilterAlcremie] = (0, react_1.useState)(false);
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
            return true;
        });
    }, [
        data === null || data === void 0 ? void 0 : data.spriteOnly,
        filterAlternate,
        filterAltcolor,
        filterFemale,
        filterCutscene,
        filterAlcremie
    ]);
    const filterCounts = (0, react_1.useMemo)(() => {
        var _a;
        const entries = (_a = data === null || data === void 0 ? void 0 : data.spriteOnly) !== null && _a !== void 0 ? _a : [];
        let alternate = 0;
        let altcolor = 0;
        let female = 0;
        let cutscene = 0;
        let alcremie = 0;
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
        }
        return { alternate, altcolor, female, cutscene, alcremie };
    }, [data === null || data === void 0 ? void 0 : data.spriteOnly]);
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
    if (loading) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "sprite-gap-scanner", children: (0, jsx_runtime_1.jsx)("div", { className: "loading", children: t("loading") }) }));
    }
    if (error) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "sprite-gap-scanner", children: (0, jsx_runtime_1.jsxs)("div", { className: "error", children: [(0, jsx_runtime_1.jsx)("strong", { children: t("sprite_tracker.error_label") }), ": ", error] }) }));
    }
    if (!data) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "sprite-gap-scanner", children: (0, jsx_runtime_1.jsx)("div", { className: "error", children: t("no_data_available") }) }));
    }
    const lastRefreshDate = new Date(data.stats.lastRefresh);
    const lastRefreshStr = lastRefreshDate.toLocaleString();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "sprite-gap-scanner", children: [(0, jsx_runtime_1.jsx)("div", { className: "refresh-info", children: (0, jsx_runtime_1.jsx)("small", { children: t("sprite_tracker.summary_line", {
                        totalSpriteCollab: data.stats.totalSpriteCollab,
                        missingInPac: data.spriteOnly.length,
                        lastUpdated: lastRefreshStr,
                        refreshDurationMs: data.stats.refreshDurationMs
                    }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "criteria-info", children: [(0, jsx_runtime_1.jsx)("strong", { children: t("sprite_tracker.criteria_title") }), (0, jsx_runtime_1.jsx)("p", { children: t("sprite_tracker.criteria_line_1") }), (0, jsx_runtime_1.jsx)("p", { children: t("sprite_tracker.criteria_line_2") }), (0, jsx_runtime_1.jsx)("p", { children: t("sprite_tracker.criteria_line_3") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "filter-container", children: [(0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { label: t("sprite_tracker.filter_alternate", {
                            count: filterCounts.alternate
                        }), checked: filterAlternate, onToggle: setFilterAlternate, isDark: true }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { label: t("sprite_tracker.filter_altcolor", {
                            count: filterCounts.altcolor
                        }), checked: filterAltcolor, onToggle: setFilterAltcolor, isDark: true }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { label: t("sprite_tracker.filter_female", {
                            count: filterCounts.female
                        }), checked: filterFemale, onToggle: setFilterFemale, isDark: true }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { label: t("sprite_tracker.filter_cutscene", {
                            count: filterCounts.cutscene
                        }), checked: filterCutscene, onToggle: setFilterCutscene, isDark: true }), (0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { label: t("sprite_tracker.filter_alcremie", {
                            count: filterCounts.alcremie
                        }), checked: filterAlcremie, onToggle: setFilterAlcremie, isDark: true })] }), (0, jsx_runtime_1.jsx)("div", { className: "content", children: (0, jsx_runtime_1.jsx)("div", { className: "entry-list", children: filteredSpriteOnly.length === 0 ? ((0, jsx_runtime_1.jsx)("p", { className: "empty-state", children: t("no_results_found") })) : (filteredSpriteOnly.map((entry) => ((0, jsx_runtime_1.jsx)("div", { className: "entry sprite-only-entry", children: (0, jsx_runtime_1.jsx)("div", { className: "entry-header", children: (0, jsx_runtime_1.jsxs)("div", { className: "entry-info", children: [(0, jsx_runtime_1.jsx)("strong", { children: entry.index }), (0, jsx_runtime_1.jsx)("a", { className: "pokemon-name entry-name-link", href: getSpriteCollabUrl(entry.index), target: "_blank", rel: "noreferrer", children: entry.pkm })] }) }) }, entry.index)))) }) })] }));
}
//# sourceMappingURL=sprite-gap-scanner.js.map