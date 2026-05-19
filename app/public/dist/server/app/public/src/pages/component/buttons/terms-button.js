"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TermsButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
function TermsButton() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("a", { href: "/terms-of-service", target: "_blank", rel: "noopener noreferrer", children: (0, jsx_runtime_1.jsxs)("button", { type: "button", className: "bubbly dark", children: [(0, jsx_runtime_1.jsx)("img", { width: 32, height: 32, src: `assets/ui/meta.svg` }), t("terms_of_service")] }) }));
}
//# sourceMappingURL=terms-button.js.map