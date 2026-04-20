"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TeamEditor;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
function TeamEditor(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    function handleOnDragStart(e, p) {
        e.stopPropagation();
        e.dataTransfer.setData("text/plain", ["cell", p.x, p.y].join(","));
    }
    function handleOnDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        const target = e.target;
        target.classList.add("dragover");
    }
    function handleOnDragEnd(e) {
        e.stopPropagation();
        const target = e.target;
        target.classList.remove("dragover");
    }
    function handleDrop(x, y, e) {
        e.preventDefault();
        e.stopPropagation();
        props.handleDrop(x, y, e);
        handleOnDragEnd(e);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { id: "team-editor", children: [(0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsx)("tbody", { children: [3, 2, 1].map((y) => {
                        return ((0, jsx_runtime_1.jsx)(BoardRow, { y: y, board: props.board, handleEditorClick: props.handleEditorClick, handleDrop: handleDrop, handleOnDragStart: handleOnDragStart, handleOnDragOver: handleOnDragOver, handleOnDragEnd: handleOnDragEnd }, "row" + y));
                    }) }) }), props.showBench && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { children: t("bench") }), (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsx)(BoardRow, { y: 0, board: props.board, handleEditorClick: props.handleEditorClick, handleDrop: handleDrop, handleOnDragStart: handleOnDragStart, handleOnDragOver: handleOnDragOver, handleOnDragEnd: handleOnDragEnd }) }) })] }))] }));
}
function BoardRow(props) {
    const { y, board, handleEditorClick, handleOnDragStart, handleOnDragOver, handleOnDragEnd } = props;
    function handleDrop(x, y, e) {
        e.preventDefault();
        e.stopPropagation();
        props.handleDrop(x, y, e);
        handleOnDragEnd(e);
    }
    return ((0, jsx_runtime_1.jsx)("tr", { children: [0, 1, 2, 3, 4, 5, 6, 7].map((x) => {
            const p = board.find((p) => p.x === x && p.y === y);
            return ((0, jsx_runtime_1.jsx)("td", { onClick: (e) => {
                    e.preventDefault();
                    handleEditorClick(x, y, false);
                }, onContextMenu: (e) => {
                    e.preventDefault();
                    handleEditorClick(x, y, true);
                }, onDragOver: handleOnDragOver, onDragLeave: handleOnDragEnd, onDrop: (e) => handleDrop(x, y, e), children: p && ((0, jsx_runtime_1.jsxs)("div", { draggable: true, onDragStart: (e) => handleOnDragStart(e, p), children: [(0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: {
                                index: Pokemon_1.PkmIndex[p.name],
                                shiny: p.shiny,
                                emotion: p.emotion
                            } }), p.items && ((0, jsx_runtime_1.jsx)("div", { className: "pokemon-items", children: p.items.map((it, j) => {
                                return ((0, jsx_runtime_1.jsx)("img", { src: "assets/item/" + it + ".png", onContextMenu: (e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleEditorClick(x, y, true, j);
                                    } }, j));
                            }) }))] })) }, "row" + y + "-col" + x));
        }) }, "row" + y));
}
//# sourceMappingURL=team-editor.js.map