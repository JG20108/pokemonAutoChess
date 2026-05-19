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
exports.default = TranslationsPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_1 = require("react-router");
const Language_1 = require("../../../types/enum/Language");
const locales_1 = require("../../dist/client/locales");
const main_sidebar_1 = require("./component/main-sidebar/main-sidebar");
const pr_modal_1 = require("./component/translations/pr-modal");
const translation_row_1 = require("./component/translations/translation-row");
const translation_section_1 = require("./component/translations/translation-section");
const translation_toolbar_1 = require("./component/translations/translation-toolbar");
const types_1 = require("./component/translations/types");
const store_1 = require("./utils/store");
require("./translations.css");
function storageKey(lang) {
    return `${store_1.LocalStoreKeys.TRANSLATION_EDITS}:${lang}`;
}
function loadEdits(lang) {
    var _a;
    return (_a = store_1.localStore.get(storageKey(lang))) !== null && _a !== void 0 ? _a : {};
}
function saveEdits(lang, edits) {
    if (Object.keys(edits).length === 0) {
        store_1.localStore.delete(storageKey(lang));
    }
    else {
        store_1.localStore.set(storageKey(lang), edits);
    }
}
function clearEdits(lang) {
    store_1.localStore.delete(storageKey(lang));
}
function TranslationsPage() {
    const navigate = (0, react_router_1.useNavigate)();
    const [targetLang, setTargetLang] = (0, react_1.useState)(Language_1.Language.fr);
    const [enData, setEnData] = (0, react_1.useState)(null);
    const [targetData, setTargetData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [edits, setEdits] = (0, react_1.useState)({});
    const [search, setSearch] = (0, react_1.useState)("");
    const [filterMode, setFilterMode] = (0, react_1.useState)("all");
    const [collapsedSections, setCollapsedSections] = (0, react_1.useState)(new Set());
    const [prModalOpen, setPrModalOpen] = (0, react_1.useState)(false);
    const [prSubmitting, setPrSubmitting] = (0, react_1.useState)(false);
    const [prProgress, setPrProgress] = (0, react_1.useState)("");
    const [prError, setPrError] = (0, react_1.useState)("");
    const [prUrl, setPrUrl] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        const githubUrl = "https://raw.githubusercontent.com/keldaanCommunity/pokemonAutoChess/refs/heads/master/app/public/dist/client/locales/en/translation.json";
        fetch(githubUrl)
            .catch(() => fetch("locales/en/translation.json"))
            .then((r) => r.json())
            .then((data) => {
            setEnData(data);
            const sections = Object.entries(data)
                .filter(([, v]) => typeof v === "object")
                .map(([k]) => k);
            setCollapsedSections(new Set(sections));
        });
    }, []);
    (0, react_1.useEffect)(() => {
        setLoading(true);
        setEdits(loadEdits(targetLang));
        const githubUrl = `https://raw.githubusercontent.com/keldaanCommunity/pokemonAutoChess/refs/heads/master/app/public/dist/client/locales/${targetLang}/translation.json`;
        fetch(githubUrl)
            .catch(() => fetch(`locales/${targetLang}/translation.json`))
            .then((r) => r.json())
            .then((data) => {
            setTargetData(data);
            setLoading(false);
        })
            .catch(() => {
            setTargetData({});
            setLoading(false);
        });
    }, [targetLang]);
    const getTargetValue = (0, react_1.useCallback)((path) => {
        if (path in edits)
            return edits[path];
        if (!targetData)
            return "";
        return (0, types_1.getNestedValue)(targetData, path);
    }, [edits, targetData]);
    const onEdit = (0, react_1.useCallback)((path, value) => {
        setEdits((prev) => {
            const next = Object.assign(Object.assign({}, prev), { [path]: value });
            saveEdits(targetLang, next);
            return next;
        });
    }, [targetLang]);
    const onRevert = (0, react_1.useCallback)((path) => {
        setEdits((prev) => {
            const next = Object.assign({}, prev);
            delete next[path];
            saveEdits(targetLang, next);
            return next;
        });
    }, [targetLang]);
    const allLeaves = (0, react_1.useMemo)(() => {
        if (!enData)
            return [];
        const results = [];
        const walk = (obj, prefix) => {
            for (const [key, value] of Object.entries(obj)) {
                const path = prefix ? `${prefix}.${key}` : key;
                if (typeof value === "string") {
                    results.push({ path, leafKey: key, enValue: value });
                }
                else {
                    walk(value, path);
                }
            }
        };
        walk(enData, "");
        return results;
    }, [enData]);
    const filteredLeaves = (0, react_1.useMemo)(() => {
        const q = search.trim().toLowerCase();
        const needsFlat = q !== "" || filterMode !== "all";
        if (!needsFlat)
            return null;
        return allLeaves.filter(({ path, enValue }) => {
            const targetVal = getTargetValue(path);
            if (filterMode === "missing" && targetVal !== "" && !(path in edits))
                return false;
            if (filterMode === "translated" && targetVal === "")
                return false;
            if (filterMode === "edited" && !(path in edits))
                return false;
            if (q) {
                return (path.toLowerCase().includes(q) ||
                    enValue.toLowerCase().includes(q) ||
                    targetVal.toLowerCase().includes(q));
            }
            return true;
        });
    }, [search, filterMode, allLeaves, getTargetValue, edits]);
    const toggleSection = (0, react_1.useCallback)((path) => {
        setCollapsedSections((prev) => {
            const next = new Set(prev);
            if (next.has(path))
                next.delete(path);
            else
                next.add(path);
            return next;
        });
    }, []);
    const expandAll = (0, react_1.useCallback)(() => setCollapsedSections(new Set()), []);
    const collapseAll = (0, react_1.useCallback)(() => {
        if (!enData)
            return;
        const collect = (obj, prefix) => Object.entries(obj).flatMap(([k, v]) => {
            const p = prefix ? `${prefix}.${k}` : k;
            if (typeof v === "object")
                return [p, ...collect(v, p)];
            return [];
        });
        setCollapsedSections(new Set(collect(enData, "")));
    }, [enData]);
    const editedCount = Object.keys(edits).length;
    const translatedCount = (0, react_1.useMemo)(() => allLeaves.filter(({ path }) => getTargetValue(path) !== "").length, [allLeaves, getTargetValue]);
    const openPrModal = (0, react_1.useCallback)(() => {
        setPrProgress("");
        setPrError("");
        setPrUrl("");
        setPrModalOpen(true);
    }, []);
    const handleSubmitPR = (0, react_1.useCallback)((token) => __awaiter(this, void 0, void 0, function* () {
        if (!targetData)
            return;
        const merged = (0, types_1.applyEditsToObject)(targetData, edits);
        const content = JSON.stringify(merged, null, "\t");
        setPrSubmitting(true);
        setPrError("");
        try {
            const url = yield (0, pr_modal_1.submitTranslationPR)(token, targetLang, locales_1.LanguageNames[targetLang], content, setPrProgress);
            clearEdits(targetLang);
            setPrUrl(url);
        }
        catch (e) {
            setPrError(e instanceof Error ? e.message : "Unknown error");
        }
        finally {
            setPrSubmitting(false);
        }
    }), [targetData, edits, targetLang]);
    const handleDownload = (0, react_1.useCallback)(() => {
        if (!targetData)
            return;
        const merged = (0, types_1.applyEditsToObject)(targetData, edits);
        const blob = new Blob([JSON.stringify(merged, null, "\t")], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `translation.json`;
        a.click();
        URL.revokeObjectURL(url);
    }, [targetData, edits]);
    const handleReset = (0, react_1.useCallback)(() => {
        if (editedCount > 0 && !window.confirm("Discard all edits?"))
            return;
        clearEdits(targetLang);
        setEdits({});
    }, [editedCount, targetLang]);
    const isReady = enData !== null && targetData !== null && !loading;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "translations-page", children: [(0, jsx_runtime_1.jsx)(main_sidebar_1.MainSidebar, { page: "main_lobby", leave: () => navigate("/lobby"), leaveLabel: "Back to lobby" }), (0, jsx_runtime_1.jsxs)("div", { className: "translations-container", children: [(0, jsx_runtime_1.jsx)(translation_toolbar_1.TranslationToolbar, { targetLang: targetLang, filterMode: filterMode, search: search, translatedCount: translatedCount, totalCount: allLeaves.length, editedCount: editedCount, onLangChange: setTargetLang, onFilterChange: setFilterMode, onSearch: setSearch, onCollapseAll: collapseAll, onExpandAll: expandAll }), (0, jsx_runtime_1.jsxs)("div", { className: "translations-column-headers my-box", children: [(0, jsx_runtime_1.jsx)("span", { className: "col-key", children: "Key" }), (0, jsx_runtime_1.jsx)("span", { className: "col-en", children: "English" }), (0, jsx_runtime_1.jsx)("span", { className: "col-target", children: locales_1.LanguageNames[targetLang] })] }), (0, jsx_runtime_1.jsx)("div", { className: "translations-list my-box", children: !isReady ? ((0, jsx_runtime_1.jsx)("p", { className: "translations-loading", children: "Loading\u2026" })) : filteredLeaves !== null ? (filteredLeaves.length === 0 ? ((0, jsx_runtime_1.jsx)("p", { className: "translations-loading", children: "No results" })) : (filteredLeaves.map(({ path, enValue }) => ((0, jsx_runtime_1.jsx)(translation_row_1.TranslationRow, { path: path, leafKey: path, enValue: enValue, targetValue: getTargetValue(path), isEdited: path in edits, onEdit: onEdit, onRevert: onRevert }, path))))) : (enData &&
                                    targetData &&
                                    Object.entries(enData).map(([key, value]) => {
                                        if (typeof value === "string") {
                                            return ((0, jsx_runtime_1.jsx)(translation_row_1.TranslationRow, { path: key, leafKey: key, enValue: value, targetValue: getTargetValue(key), isEdited: key in edits, onEdit: onEdit, onRevert: onRevert }, key));
                                        }
                                        const translatedCount = Object.keys(value).filter((k) => getTargetValue(`${key}.${k}`) !== "").length;
                                        const missingCount = Object.keys(value).filter((k) => getTargetValue(`${key}.${k}`) === "").length;
                                        const totalCount = Object.keys(value).length;
                                        return ((0, jsx_runtime_1.jsx)(translation_section_1.TranslationSection, { path: key, label: key, enObj: value, collapsedSections: collapsedSections, toggleSection: toggleSection, edits: edits, getTargetValue: getTargetValue, onEdit: onEdit, onRevert: onRevert, depth: 0, translatedCount: translatedCount, missingCount: missingCount, totalCount: totalCount }, key));
                                    })) }), (0, jsx_runtime_1.jsxs)("div", { className: "translations-footer my-box", children: [(0, jsx_runtime_1.jsx)("span", { className: "edited-count", children: editedCount === 0
                                            ? "No fields edited"
                                            : `${editedCount} field${editedCount === 1 ? "" : "s"} edited` }), (0, jsx_runtime_1.jsx)("div", { className: "flex-spacer" }), editedCount > 0 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly red", onClick: handleReset, children: "Reset all" }), (0, jsx_runtime_1.jsx)("div", { className: "spacer" }), (0, jsx_runtime_1.jsxs)("button", { className: "bubbly blue", onClick: handleDownload, children: ["Download ", locales_1.LanguageNames[targetLang], " JSON"] }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly green", onClick: openPrModal, children: "Submit Pull Request" })] }))] })] })] }), prModalOpen && ((0, jsx_runtime_1.jsx)(pr_modal_1.PRModal, { lang: targetLang, langName: locales_1.LanguageNames[targetLang], onClose: () => setPrModalOpen(false), onSubmit: handleSubmitPR, progress: prProgress, error: prError, prUrl: prUrl, submitting: prSubmitting }))] }));
}
//# sourceMappingURL=translations.js.map