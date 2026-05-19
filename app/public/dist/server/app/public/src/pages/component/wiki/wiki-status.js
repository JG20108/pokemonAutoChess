"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WikiStatus;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const Status_1 = require("../../../../../types/enum/Status");
const descriptions_1 = require("../../utils/descriptions");
function WikiStatus() {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)("ul", { className: "wiki-status", children: Status_1.DocumentedStatuses.map((status) => ((0, jsx_runtime_1.jsxs)("li", { className: "my-box", children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/status/demo/${status}.gif`, alt: status }), (0, jsx_runtime_1.jsx)("h2", { children: (0, descriptions_1.addIconsToDescription)(status) }), (0, jsx_runtime_1.jsx)("p", { className: "description", children: (0, descriptions_1.addIconsToDescription)(t(`status_description.${status}`)) })] }, status))) }));
}
//# sourceMappingURL=wiki-status.js.map