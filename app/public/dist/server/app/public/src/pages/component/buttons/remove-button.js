"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveButton = RemoveButton;
const jsx_runtime_1 = require("react/jsx-runtime");
function RemoveButton(props) {
    return ((0, jsx_runtime_1.jsx)("button", { className: "bubbly red", title: props.title, onClick: props.onClick, style: {
            padding: 0,
            fontSize: "1em",
            height: "2em",
            width: "2em"
        }, children: "\uD83D\uDDD9" }));
}
//# sourceMappingURL=remove-button.js.map