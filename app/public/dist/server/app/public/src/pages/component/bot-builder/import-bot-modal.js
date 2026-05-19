"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImportBotModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const modal_1 = require("../modal/modal");
function ImportBotModal(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [botList, setBotList] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        fetch("/bots")
            .then((res) => res.json())
            .then((data) => {
            setBotList(data.sort((a, b) => a.name.localeCompare(b.name)));
        });
    }, []);
    const [textArea, setTextArea] = (0, react_1.useState)("");
    const [jsonError, setJsonError] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        setTextArea(JSON.stringify(props.bot, null, 2));
    }, [props.bot]);
    function handleTextAreaChange(newValue) {
        setJsonError("");
        try {
            setTextArea(JSON.stringify(JSON.parse(newValue), null, 2));
        }
        catch (e) {
            setJsonError(e.message);
        }
    }
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, { show: props.visible, onClose: props.hideModal, className: "bot-import-modal", header: t("import"), body: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { children: t("import_bot") }), (0, jsx_runtime_1.jsxs)("div", { style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5em",
                        marginBottom: "0.5em"
                    }, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "bot_select", children: t("existing_bot") }), (0, jsx_runtime_1.jsxs)("select", { id: "bot_select", defaultValue: "", onChange: (e) => {
                                if (e.target.value.length != 0) {
                                    fetch(`/bots/${e.target.value}`)
                                        .then((r) => r.json())
                                        .then((bot) => {
                                        setTextArea(JSON.stringify(bot, null, 2));
                                    });
                                }
                            }, children: [(0, jsx_runtime_1.jsx)("option", { value: "", hidden: true, children: t("select") }), botList.map((bot) => ((0, jsx_runtime_1.jsxs)("option", { value: bot.id, children: [bot.name, " ", t("by"), " ", bot.author] }, bot.id)))] })] }), (0, jsx_runtime_1.jsxs)("details", { children: [(0, jsx_runtime_1.jsx)("summary", { children: "Bot code" }), (0, jsx_runtime_1.jsx)("textarea", { readOnly: true, rows: 10, value: textArea, onChange: (e) => handleTextAreaChange(e.target.value) }), jsonError && (0, jsx_runtime_1.jsx)("p", { className: "error", children: jsonError })] })] }), footer: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("button", { className: "bubbly green", onClick: () => {
                    props.importBot(textArea);
                }, children: t("import") }) }) }));
}
//# sourceMappingURL=import-bot-modal.js.map