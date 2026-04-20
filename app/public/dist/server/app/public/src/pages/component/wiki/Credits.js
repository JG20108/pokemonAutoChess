"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Credits;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const credits_1 = require("../../../../../core/credits");
function Credits(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { spriteCredits, creditsNames } = (0, credits_1.useCredits)();
    if (!spriteCredits || !(props.index in spriteCredits))
        return null;
    let credits;
    if (props.for === "portrait") {
        credits = spriteCredits[props.index].portrait_credit;
    }
    else {
        credits = spriteCredits[props.index].sprite_credit;
    }
    if (!credits)
        return null;
    function findCredits(id) {
        let contact = "";
        let name = "";
        if (creditsNames) {
            const user = creditsNames.find((user) => user.discord === id);
            if (user != null) {
                contact = user.contact;
                name = user.name;
            }
        }
        return contact ? ((0, jsx_runtime_1.jsx)("a", { style: { marginRight: "0.5em" }, href: contact, children: name }, id)) : name ? ((0, jsx_runtime_1.jsx)("span", { style: { marginRight: "0.5em" }, children: name }, id)) : null;
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("dd", { children: credits.primary.length > 0 && findCredits(credits.primary) }), credits.secondary.length > 0 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("dt", { children: t("wiki.credits.others") }), (0, jsx_runtime_1.jsx)("dd", { children: (0, jsx_runtime_1.jsx)("ul", { style: { display: "inline-block" }, children: credits.secondary.map((s) => ((0, jsx_runtime_1.jsx)("li", { children: findCredits(s) }, s))) }) })] }))] }));
}
//# sourceMappingURL=Credits.js.map