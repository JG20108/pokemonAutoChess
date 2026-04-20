"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconRegExp = void 0;
exports.addIconsToDescription = addIconsToDescription;
exports.addIconsToHtml = addIconsToHtml;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const react_1 = __importDefault(require("react"));
const Game_1 = require("../../../../types/enum/Game");
const Item_1 = require("../../../../types/enum/Item");
const Status_1 = require("../../../../types/enum/Status");
const Synergy_1 = require("../../../../types/enum/Synergy");
const Weather_1 = require("../../../../types/enum/Weather");
const number_1 = require("../../../../utils/number");
const synergy_icon_1 = __importDefault(require("../component/icons/synergy-icon"));
const jsx_1 = require("./jsx");
const DamageTypes = Object.keys(Game_1.Damage);
const Stats = Object.keys(Game_1.Stat);
const Statuses = Object.keys(Status_1.Status);
const Weathers = Object.keys(Weather_1.Weather);
const Synergies = Object.keys(Synergy_1.Synergy);
const Items = Object.keys(Item_1.Item);
const TechnicalTerms = [
    "STRONGEST",
    "ADJACENT",
    "ADJACENT_IN_THE_SAME_ROW",
    "CONE",
    "BOARD_EFFECT"
];
exports.iconRegExp = new RegExp(`(?<=\\W|^)(?:${[
    ...DamageTypes,
    ...Stats,
    ...Statuses,
    ...Weathers,
    ...Synergies,
    ...Items,
    ...TechnicalTerms,
    "GOLD",
    "STAR"
].join("|")}|\\[[^\\]]+\\])(?=\\W|$)`, "g");
function addIconsToDescription(description, stats) {
    const matchIcon = description.match(exports.iconRegExp);
    if (matchIcon === null)
        return description;
    const descriptionParts = description.split(exports.iconRegExp);
    return descriptionParts.map((f, i) => {
        var _a, _b, _c, _d, _e, _f;
        const token = matchIcon[i - 1];
        let d = null;
        const isAtStartOfSentence = i === 0 || descriptionParts[i - 1].trim().endsWith(".");
        const capitalize = (s) => isAtStartOfSentence ? s.charAt(0).toUpperCase() + s.slice(1) : s;
        if (token) {
            if (token === "GOLD") {
                d = ((0, jsx_runtime_1.jsx)("img", { className: "description-icon icon-money", src: "/assets/icons/money.svg", alt: "$" }));
            }
            else if (token === "STAR") {
                d = ((0, jsx_runtime_1.jsx)("img", { className: "description-icon icon-star", src: "/assets/ui/star.svg", alt: "\u2B50" }));
            }
            else if (DamageTypes.includes(token)) {
                d = ((0, jsx_runtime_1.jsx)("span", { className: token === Game_1.Damage.PHYSICAL
                        ? "damage-physical"
                        : token === Game_1.Damage.SPECIAL
                            ? "damage-special"
                            : "damage-true", children: (0, i18next_1.t)(`damage.${token}`) }));
            }
            else if (Stats.includes(token)) {
                d = ((0, jsx_runtime_1.jsxs)("span", { className: "description-icon stat", children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/icons/${token}.png` }), (0, jsx_runtime_1.jsx)("span", { className: "stat-label", children: (0, i18next_1.t)(`stat.${token}`) })] }));
            }
            else if (Statuses.includes(token)) {
                d = ((0, jsx_runtime_1.jsxs)("span", { className: "description-icon status", title: (0, i18next_1.t)(`status_description.${token}`), children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/icons/${token}.svg` }), (0, jsx_runtime_1.jsx)("span", { className: (0, jsx_1.cc)("status-label", {
                                positive: Status_1.PositiveStatuses.includes(token)
                            }), children: (0, i18next_1.t)(`status.${token}`) })] }));
            }
            else if (Weathers.includes(token)) {
                d = ((0, jsx_runtime_1.jsxs)("span", { className: "description-icon weather", title: (0, i18next_1.t)(`weather_description.${token}`), children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/icons/weather/${token.toLowerCase()}.svg` }), (0, jsx_runtime_1.jsx)("span", { className: "weather-label", children: (0, i18next_1.t)(`weather.${token}`) })] }));
            }
            else if (Items.includes(token)) {
                d = ((0, jsx_runtime_1.jsxs)("span", { className: "description-icon item", title: (0, i18next_1.t)(`item_description.${token}`), children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/item/${token}.png` }), (0, jsx_runtime_1.jsx)("span", { className: "item-label", children: (0, i18next_1.t)(`item.${token}`) })] }));
            }
            else if (Synergies.includes(token)) {
                d = ((0, jsx_runtime_1.jsxs)("span", { className: "description-icon synergy", children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: token, size: "1.5em" }), (0, jsx_runtime_1.jsx)("span", { className: "synergy-label", children: (0, i18next_1.t)(`synergy.${token}`) })] }));
            }
            else if (TechnicalTerms.includes(token)) {
                d = ((0, jsx_runtime_1.jsxs)("span", { className: "description-icon technical-term", title: (0, i18next_1.t)(`technical_terms_definitions.${token}`), children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/ui/${token.toLowerCase()}.svg` }), (0, jsx_runtime_1.jsx)("i", { className: "technical-term-label", children: capitalize((0, i18next_1.t)(`technical_terms.${token}`)) })] }));
            }
            else if (/\[[^\]]+\]/.test(token)) {
                const array = token.slice(1, -1).split(",");
                let scaleType = null;
                let scaleFactor = 1;
                let nbDigits = 0;
                if ((_a = array.at(-1)) === null || _a === void 0 ? void 0 : _a.includes("ND")) {
                    nbDigits = Number((_b = array.pop()) === null || _b === void 0 ? void 0 : _b.replace("ND=", "")) || 0;
                }
                if ((_c = array.at(-1)) === null || _c === void 0 ? void 0 : _c.includes("SP")) {
                    scaleType = "AP";
                    scaleFactor = Number((_d = array.pop()) === null || _d === void 0 ? void 0 : _d.replace("SP=", "")) || 1;
                }
                else if ((_e = array.at(-1)) === null || _e === void 0 ? void 0 : _e.includes("LK")) {
                    scaleType = "LUCK";
                    scaleFactor = Number((_f = array.pop()) === null || _f === void 0 ? void 0 : _f.replace("LK=", "")) || 1;
                }
                d = ((0, jsx_runtime_1.jsxs)("span", { className: (0, jsx_1.cc)("description-icon", {
                        "scales-ap": scaleType === "AP",
                        "scales-luck": scaleType === "LUCK"
                    }), children: [scaleType === "AP" && ((0, jsx_runtime_1.jsx)("img", { src: "assets/icons/AP.png", alt: "Ability Power", title: "Scales with Ability Power" })), scaleType === "LUCK" && ((0, jsx_runtime_1.jsx)("img", { src: "assets/icons/LUCK.png", alt: "Luck", title: "Scales with Luck" })), array.slice(0, stats === null || stats === void 0 ? void 0 : stats.stages).map((v, j) => {
                            var _a, _b, _c;
                            const separator = j < Math.min((_a = stats === null || stats === void 0 ? void 0 : stats.stages) !== null && _a !== void 0 ? _a : 4, array.length) - 1 ? "/" : "";
                            let value = (0, number_1.roundToNDigits)(Number(v), nbDigits);
                            if (Number.isNaN(value)) {
                                value = v;
                            }
                            else if (scaleType === "AP") {
                                value = (0, number_1.roundToNDigits)(Number(v) * (1 + (((_b = stats === null || stats === void 0 ? void 0 : stats.ap) !== null && _b !== void 0 ? _b : 0) * scaleFactor) / 100), nbDigits);
                            }
                            else if (scaleType === "LUCK") {
                                value = (0, number_1.roundToNDigits)((0, number_1.max)(100)(Math.pow(Number(v) / 100, 1 - ((_c = stats === null || stats === void 0 ? void 0 : stats.luck) !== null && _c !== void 0 ? _c : 0) / 100) *
                                    100), nbDigits);
                            }
                            const tier = stats === null || stats === void 0 ? void 0 : stats.stars;
                            const active = tier === undefined ||
                                array.length === 1 ||
                                j === tier - 1 ||
                                (tier > array.length && j === array.length - 1);
                            return ((0, jsx_runtime_1.jsxs)("span", { className: "ability-value", children: [(0, jsx_runtime_1.jsx)("span", { className: (0, jsx_1.cc)({ active }), children: value }), separator] }, j));
                        })] }));
            }
        }
        return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [d, f] }, i));
    });
}
function addIconsToHtml(htmlString, stats) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;
    const processTextNode = (textNode) => {
        var _a;
        const text = textNode.textContent || "";
        const matchIcon = text.match(exports.iconRegExp);
        if (!matchIcon)
            return;
        const descriptionParts = text.split(exports.iconRegExp);
        let newHTML = "";
        descriptionParts.forEach((part, i) => {
            var _a, _b, _c, _d, _e, _f;
            const token = matchIcon[i - 1];
            let iconHTML = "";
            if (token) {
                if (token === "GOLD") {
                    iconHTML =
                        '<img class="description-icon icon-money" src="/assets/icons/money.svg" alt="$" />';
                }
                else if (token === "STAR") {
                    iconHTML =
                        '<img class="description-icon icon-star" src="/assets/ui/star.svg" alt="⭐" />';
                }
                else if (DamageTypes.includes(token)) {
                    const className = token === Game_1.Damage.PHYSICAL
                        ? "damage-physical"
                        : token === Game_1.Damage.SPECIAL
                            ? "damage-special"
                            : "damage-true";
                    iconHTML = `<span class="${className}">${(0, i18next_1.t)(`damage.${token}`)}</span>`;
                }
                else if (Stats.includes(token)) {
                    iconHTML = `<span class="description-icon stat">
            <img src="assets/icons/${token}.png" />
            <span class="stat-label">${(0, i18next_1.t)(`stat.${token}`)}</span>
          </span>`;
                }
                else if (Statuses.includes(token)) {
                    const isPositive = Status_1.PositiveStatuses.includes(token);
                    iconHTML = `<span class="description-icon status" title="${(0, i18next_1.t)(`status_description.${token}`)}">
            <img src="assets/icons/${token}.svg" />
            <span class="status-label${isPositive ? " positive" : ""}">${(0, i18next_1.t)(`status.${token}`)}</span>
          </span>`;
                }
                else if (Weathers.includes(token)) {
                    iconHTML = `<span class="description-icon weather" title="${(0, i18next_1.t)(`weather_description.${token}`)}">
            <img src="assets/icons/weather/${token.toLowerCase()}.svg" />
            <span class="weather-label">${(0, i18next_1.t)(`weather.${token}`)}</span>
          </span>`;
                }
                else if (Items.includes(token)) {
                    iconHTML = `<span class="description-icon item" title="${(0, i18next_1.t)(`item_description.${token}`)}" data-tooltip-id="item-detail-tooltip" data-tooltip-content="${token}">
            <img src="assets/item/${token}.png" />
            <span class="item-label">${(0, i18next_1.t)(`item.${token}`)}</span>
          </span>`;
                }
                else if (Synergies.includes(token)) {
                    iconHTML = `<span class="description-icon synergy">
            <img src="assets/types/${token}.svg" style="width: 1.5em; height: 1.5em;" />
            <span class="synergy-label">${(0, i18next_1.t)(`synergy.${token}`)}</span>
          </span>`;
                }
                else if (TechnicalTerms.includes(token)) {
                    iconHTML = `<span class="description-icon technical-term" title="${(0, i18next_1.t)(`technical_terms_definitions.${token}`)}">
            <img src="assets/ui/${token.toLowerCase()}.svg" />
            <i class="technical-term-label">${(0, i18next_1.t)(`technical_terms.${token}`)}</i>
          </span>`;
                }
                else if (/\[[^\]]+\]/.test(token)) {
                    const array = token.slice(1, -1).split(",");
                    let scaleType = null;
                    let scaleFactor = 1;
                    let nbDigits = 0;
                    if ((_a = array.at(-1)) === null || _a === void 0 ? void 0 : _a.includes("ND")) {
                        nbDigits = Number((_b = array.pop()) === null || _b === void 0 ? void 0 : _b.replace("ND=", "")) || 0;
                    }
                    else if ((_c = array.at(-1)) === null || _c === void 0 ? void 0 : _c.includes("SP")) {
                        scaleType = "AP";
                        scaleFactor = Number((_d = array.pop()) === null || _d === void 0 ? void 0 : _d.replace("SP=", "")) || 1;
                    }
                    else if ((_e = array.at(-1)) === null || _e === void 0 ? void 0 : _e.includes("LK")) {
                        scaleType = "LUCK";
                        scaleFactor = Number((_f = array.pop()) === null || _f === void 0 ? void 0 : _f.replace("LK=", "")) || 1;
                    }
                    const scaleClass = scaleType === "AP"
                        ? " scales-ap"
                        : scaleType === "LUCK"
                            ? " scales-luck"
                            : "";
                    let scaleIcon = "";
                    if (scaleType === "AP") {
                        scaleIcon =
                            '<img src="assets/icons/AP.png" alt="Ability Power" title="Scales with Ability Power" />';
                    }
                    else if (scaleType === "LUCK") {
                        scaleIcon =
                            '<img src="assets/icons/LUCK.png" alt="Luck" title="Scales with Luck" />';
                    }
                    let valuesHTML = "";
                    array.slice(0, stats === null || stats === void 0 ? void 0 : stats.stages).forEach((v, j) => {
                        var _a, _b, _c;
                        const separator = j < Math.min((_a = stats === null || stats === void 0 ? void 0 : stats.stages) !== null && _a !== void 0 ? _a : 4, array.length) - 1 ? "/" : "";
                        let value = (0, number_1.roundToNDigits)(Number(v), nbDigits);
                        if (Number.isNaN(value)) {
                            value = v;
                        }
                        else if (scaleType === "AP") {
                            value = (0, number_1.roundToNDigits)(Number(v) * (1 + (((_b = stats === null || stats === void 0 ? void 0 : stats.ap) !== null && _b !== void 0 ? _b : 0) * scaleFactor) / 100), nbDigits);
                        }
                        else if (scaleType === "LUCK") {
                            value = (0, number_1.roundToNDigits)((0, number_1.max)(100)(Math.pow(Number(v) / 100, 1 - ((_c = stats === null || stats === void 0 ? void 0 : stats.luck) !== null && _c !== void 0 ? _c : 0) / 100) * 100), nbDigits);
                        }
                        const tier = stats === null || stats === void 0 ? void 0 : stats.stars;
                        const active = tier === undefined ||
                            array.length === 1 ||
                            j === tier - 1 ||
                            (tier > array.length && j === array.length - 1);
                        valuesHTML += `<span class="ability-value">
              <span class="${active ? "active" : ""}">${value}</span>
              ${separator}
            </span>`;
                    });
                    iconHTML = `<span class="description-icon${scaleClass}">
            ${scaleIcon}
            ${valuesHTML}
          </span>`;
                }
            }
            newHTML += iconHTML + part;
        });
        const newElement = document.createElement("span");
        newElement.innerHTML = newHTML;
        (_a = textNode.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(newElement, textNode);
    };
    const walker = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
        textNodes.push(node);
    }
    textNodes.reverse().forEach(processTextNode);
    return tempDiv.innerHTML;
}
//# sourceMappingURL=descriptions.js.map