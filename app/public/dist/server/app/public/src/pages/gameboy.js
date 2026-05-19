"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gameboy = Gameboy;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const react_router_1 = require("react-router");
const main_sidebar_1 = require("./component/main-sidebar/main-sidebar");
function Gameboy() {
    const navigate = (0, react_router_1.useNavigate)();
    const { t } = (0, react_i18next_1.useTranslation)();
    function cleanupFrame() {
        const frame = document.querySelector("#pokechess_iframe");
        if (!frame || !frame.contentDocument)
            return;
        const new_style_element = document.createElement("style");
        new_style_element.textContent = "body { background-color: transparent; }";
        frame.contentDocument.head.appendChild(new_style_element);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { style: { width: "100%", height: "100%" }, children: [(0, jsx_runtime_1.jsx)(main_sidebar_1.MainSidebar, { page: "main_lobby", leave: () => navigate("/lobby"), leaveLabel: t("back_to_lobby") }), (0, jsx_runtime_1.jsx)("div", { style: {
                    height: "100%",
                    paddingLeft: "calc(var(--sidebar-width) + 10px)"
                }, children: (0, jsx_runtime_1.jsx)("iframe", { id: "pokechess_iframe", src: "/pokechess/", style: {
                        height: "1400px",
                        minWidth: "1400px",
                        width: "100%",
                        border: "none"
                    }, onLoad: cleanupFrame }) })] }));
}
//# sourceMappingURL=gameboy.js.map