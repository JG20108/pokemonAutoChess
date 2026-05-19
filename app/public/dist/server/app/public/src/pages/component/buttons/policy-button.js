"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PolicyButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
function PolicyButton() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("a", { href: "/privacy-policy", target: "_blank", rel: "noopener noreferrer", children: (0, jsx_runtime_1.jsxs)("button", { type: "button", className: "bubbly dark", children: [(0, jsx_runtime_1.jsx)("img", { width: 32, height: 32, src: `assets/ui/meta.svg` }), t("policy")] }) }));
}
//# sourceMappingURL=policy-button.js.map