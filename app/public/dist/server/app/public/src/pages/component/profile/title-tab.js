"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleTab = TitleTab;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const types_1 = require("../../../../../types");
const array_1 = require("../../../../../utils/array");
const hooks_1 = require("../../../hooks");
const title_statistic_1 = require("../../../models/title-statistic");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const descriptions_1 = require("../../utils/descriptions");
const jsx_1 = require("../../utils/jsx");
const checkbox_1 = require("../checkbox/checkbox");
function TitleTab() {
    const [showUnlocked, setShowUnlocked] = (0, react_1.useState)(true);
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const [titles, setTitles] = (0, react_1.useState)([]);
    const nbTitlesUnlocked = user
        ? Object.keys(types_1.Title).filter((title) => (0, array_1.isIn)(user.titles, title)).length
        : 0;
    (0, react_1.useEffect)(() => {
        (0, title_statistic_1.fetchTitles)().then((res) => {
            Object.keys(types_1.Title).forEach((title) => {
                if (!res.some((t) => t.name === title)) {
                    res.push({ name: title, rarity: 0 });
                }
            });
            setTitles(res);
        });
    }, []);
    return user && titles ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "space-between" }, children: [(0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: showUnlocked, onToggle: setShowUnlocked, label: t("toggle_locked"), isDark: true }), (0, jsx_runtime_1.jsx)("p", { children: t("profile.progress.titles_unlocked", {
                            count: nbTitlesUnlocked,
                            total: Object.keys(types_1.Title).length
                        }) })] }), (0, jsx_runtime_1.jsxs)("ul", { className: "titles", children: [(0, jsx_runtime_1.jsx)("li", { className: (0, jsx_1.cc)("clickable", "my-box", {
                            unlocked: true,
                            selected: user.title === ""
                        }), onClick: () => dispatch((0, NetworkStore_1.setTitle)("")), children: (0, jsx_runtime_1.jsx)("span", { children: t("title.no_title") }) }, "no-title"), titles
                        .filter((title) => showUnlocked || user.titles.includes(title.name))
                        .sort((a, b) => b.rarity - a.rarity)
                        .map((title) => ((0, jsx_runtime_1.jsxs)("li", { style: {
                            background: `linear-gradient(to right, var(--color-bg-primary) 0% ${title.rarity * 100}%, var(--color-bg-secondary) ${title.rarity * 100}% 100%)`
                        }, className: (0, jsx_1.cc)("clickable", "my-box", {
                            unlocked: user.titles.includes(title.name),
                            selected: user.title === title.name
                        }), onClick: () => {
                            if (user.titles.includes(title.name)) {
                                dispatch((0, NetworkStore_1.setTitle)(title.name));
                            }
                        }, children: [(0, jsx_runtime_1.jsx)("span", { className: "title-name", children: t(`title.${title.name}`) }), (0, jsx_runtime_1.jsxs)("div", { className: "title-description", children: [(0, jsx_runtime_1.jsx)("p", { children: (0, descriptions_1.addIconsToDescription)(t(`title_description.${title.name}`)) }), config_1.TITLES_UNLOCKING_THEMES.includes(title.name) && ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("img", { src: `/assets/ui/palette.svg`, height: "24", width: "24" }), " ", t("profile.progress.unlocks_theme", {
                                                theme: t(`theme.${config_1.THEME_BY_TITLE[title.name]}`)
                                            })] }))] }), (0, jsx_runtime_1.jsxs)("span", { className: "title-rarity", children: [(title.rarity * 100).toFixed(3), "%"] })] }, title.name)))] })] })) : null;
}
//# sourceMappingURL=title-tab.js.map