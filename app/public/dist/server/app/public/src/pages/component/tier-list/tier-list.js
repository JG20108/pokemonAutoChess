"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TierList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_i18next_1 = require("react-i18next");
const types_1 = require("../../../../../types");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const Synergy_1 = require("../../../../../types/enum/Synergy");
const array_1 = require("../../../../../utils/array");
const avatar_1 = require("../../../../../utils/avatar");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const tier_list_symbols_1 = require("./tier-list-symbols");
require("./tier-list.css");
function TierList(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [editingRowIndex, setEditingRowIndex] = (0, react_1.useState)(null);
    const [editingName, setEditingName] = (0, react_1.useState)(false);
    const [newName, setNewName] = (0, react_1.useState)(props.tierList.name);
    const [rowLabels, setRowLabels] = (0, react_1.useState)(props.tierList.rows.map((row) => row.name));
    const [draggedItem, setDraggedItem] = (0, react_1.useState)(null);
    const [dropZone, setDropZone] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        setRowLabels(props.tierList.rows.map((row) => row.name));
    }, [props.tierList.rows]);
    function handleLabelClick(rowIndex) {
        setEditingRowIndex(rowIndex);
    }
    function handleNameClick() {
        setEditingName(true);
    }
    function handleLabelChange(rowIndex, value) {
        const newLabels = [...rowLabels];
        newLabels[rowIndex] = value;
        setRowLabels(newLabels);
    }
    function handleNameChange(value) {
        setNewName(value);
    }
    function commitLabels() {
        const newRows = props.tierList.rows.map((r, i) => (Object.assign(Object.assign({}, r), { name: rowLabels[i] })));
        props.onUpdate({ name: newName, rows: newRows });
    }
    function handleLabelBlur() {
        setEditingRowIndex(null);
        commitLabels();
    }
    function handleNameBlur() {
        setEditingName(false);
        commitLabels();
    }
    function handleColorChange(rowIndex, color) {
        const newRows = props.tierList.rows.map((row, index) => index === rowIndex ? Object.assign(Object.assign({}, row), { color }) : row);
        props.onUpdate(Object.assign(Object.assign({}, props.tierList), { rows: newRows }));
    }
    function handleLabelKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            setEditingRowIndex(null);
            commitLabels();
        }
    }
    function handleNameKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            setEditingName(false);
            commitLabels();
        }
    }
    function deleteRow(rowIndex) {
        const newRows = props.tierList.rows.filter((_, i) => i !== rowIndex);
        props.onUpdate(Object.assign(Object.assign({}, props.tierList), { rows: newRows }));
        setRowLabels(newRows.map((r) => r.name));
        if (editingRowIndex === rowIndex)
            setEditingRowIndex(null);
    }
    function moveRow(rowIndex, direction) {
        if ((direction === "up" && rowIndex === 0) ||
            (direction === "down" && rowIndex === props.tierList.rows.length - 1)) {
            return;
        }
        const newRows = [...props.tierList.rows];
        const targetIndex = direction === "up" ? rowIndex - 1 : rowIndex + 1;
        const temp = newRows[rowIndex];
        newRows[rowIndex] = newRows[targetIndex];
        newRows[targetIndex] = temp;
        props.onUpdate(Object.assign(Object.assign({}, props.tierList), { rows: newRows }));
        setRowLabels(newRows.map((r) => r.name));
    }
    function handleItemDragStart(rowIndex, itemIndex, e) {
        setDraggedItem({ rowIndex, itemIndex });
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", "tier-list-item");
    }
    function handleItemDragEnd(e) {
        if (draggedItem) {
            const tierListElement = e.currentTarget.closest(".tier-list-table");
            const relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            if (tierListElement && !tierListElement.contains(relatedTarget)) {
                const newRows = props.tierList.rows.map((row, rowIdx) => {
                    if (rowIdx === draggedItem.rowIndex) {
                        return Object.assign(Object.assign({}, row), { items: row.items.filter((_, idx) => idx !== draggedItem.itemIndex) });
                    }
                    return row;
                });
                props.onUpdate(Object.assign(Object.assign({}, props.tierList), { rows: newRows }));
            }
        }
        setDraggedItem(null);
        setDropZone(null);
    }
    function handleItemDragOver(rowIndex, itemIndex, e) {
        e.preventDefault();
        e.stopPropagation();
        if (draggedItem) {
            const target = e.currentTarget;
            const rect = target.getBoundingClientRect();
            const mouseX = e.clientX;
            const midPoint = rect.left + rect.width / 2;
            const insertIndex = mouseX > midPoint ? itemIndex + 1 : itemIndex;
            setDropZone({ rowIndex, itemIndex: insertIndex });
        }
    }
    function handleDrop(rowIndex, itemIndex, e, draggedItem) {
        e.stopPropagation();
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        if (!data)
            return;
        if (data === "tier-list-item" && draggedItem) {
            const newRows = props.tierList.rows.map((row) => (Object.assign(Object.assign({}, row), { items: [...row.items] })));
            const item = newRows[draggedItem.rowIndex].items[draggedItem.itemIndex];
            newRows[draggedItem.rowIndex].items.splice(draggedItem.itemIndex, 1);
            let targetIndex = itemIndex;
            if (draggedItem.rowIndex === rowIndex &&
                draggedItem.itemIndex < itemIndex) {
                targetIndex--;
            }
            if (newRows[rowIndex]) {
                newRows[rowIndex].items.splice(targetIndex, 0, item);
            }
            props.onUpdate(Object.assign(Object.assign({}, props.tierList), { rows: newRows }));
            return;
        }
        const [type, value] = data.split(",");
        let newItem;
        if (type === "item") {
            newItem = value;
        }
        else if (type === "pokemon") {
            newItem = {
                name: value,
                shiny: false,
                emotion: types_1.Emotion.NORMAL
            };
        }
        else if (type === "synergy") {
            newItem = value;
        }
        else {
            return;
        }
        const newRows = [...props.tierList.rows];
        if (newRows[rowIndex]) {
            newRows[rowIndex].items.splice(itemIndex, 0, newItem);
        }
        props.onUpdate(Object.assign(Object.assign({}, props.tierList), { rows: newRows }));
    }
    function handleItemRightClick(rowIndex, itemIndex, e) {
        e.preventDefault();
        e.stopPropagation();
        const newRows = props.tierList.rows.map((row, rowIdx) => {
            if (rowIdx === rowIndex) {
                return Object.assign(Object.assign({}, row), { items: row.items.filter((_, idx) => idx !== itemIndex) });
            }
            return row;
        });
        props.onUpdate(Object.assign(Object.assign({}, props.tierList), { rows: newRows }));
    }
    function isPokemon(item) {
        return item.name !== undefined;
    }
    function isSynergy(item) {
        return (typeof item === "string" &&
            Object.values(Synergy_1.Synergy).includes(item));
    }
    function renderItemImage(item) {
        if ((0, array_1.isIn)(tier_list_symbols_1.TierListSymbols, item)) {
            return ((0, jsx_runtime_1.jsx)("img", { src: "assets/ui/" + item.toLowerCase() + ".svg", className: "tier-list-symbol-icon" }));
        }
        else if (isPokemon(item)) {
            const pokemon = item;
            return ((0, jsx_runtime_1.jsx)("img", { src: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pokemon.name], pokemon.shiny, pokemon.emotion), alt: pokemon.name, className: "tier-list-pokemon-icon" }));
        }
        else if (isSynergy(item)) {
            return ((0, jsx_runtime_1.jsx)("div", { className: "tier-list-synergy-icon", children: (0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: item, size: "48px" }) }));
        }
        else {
            return ((0, jsx_runtime_1.jsx)("img", { src: `assets/item/${item}.png`, alt: item, className: "tier-list-item-icon" }));
        }
    }
    return ((0, jsx_runtime_1.jsx)("div", { id: "tier-list", children: (0, jsx_runtime_1.jsxs)("table", { className: "tier-list-table", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("th", { colSpan: 3, children: editingName ? ((0, jsx_runtime_1.jsx)("textarea", { rows: 1, value: newName, onChange: (e) => handleNameChange(e.target.value), onBlur: handleNameBlur, onKeyDown: handleNameKeyDown, autoFocus: true, className: "tier-list-label-input", placeholder: t("tier_list.title") })) : ((0, jsx_runtime_1.jsx)("div", { className: "tier-list-label", onClick: handleNameClick, children: props.tierList.name })) }) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: props.tierList.rows.map((row, rowIndex) => ((0, jsx_runtime_1.jsxs)("tr", { className: "tier-list-row", children: [(0, jsx_runtime_1.jsx)("td", { className: "tier-list-label-cell", style: { backgroundColor: row.color }, children: editingRowIndex === rowIndex ? ((0, jsx_runtime_1.jsx)("textarea", { value: rowLabels[rowIndex], onChange: (e) => handleLabelChange(rowIndex, e.target.value), onBlur: handleLabelBlur, onKeyDown: handleLabelKeyDown, autoFocus: true, className: "tier-list-label-input", rows: 1 })) : ((0, jsx_runtime_1.jsx)("div", { className: "tier-list-label", onClick: () => handleLabelClick(rowIndex), children: rowLabels[rowIndex] })) }), (0, jsx_runtime_1.jsx)("td", { className: "tier-list-items-cell", onDrop: (e) => {
                                    handleDrop(rowIndex, row.items.length, e, draggedItem);
                                    setDropZone(null);
                                }, onDragOver: (e) => {
                                    e.preventDefault();
                                    if (draggedItem) {
                                        setDropZone({ rowIndex, itemIndex: row.items.length });
                                    }
                                }, children: (0, jsx_runtime_1.jsxs)("div", { className: "tier-list-items", children: [row.items.map((item, itemIndex) => {
                                            const isDragging = (draggedItem === null || draggedItem === void 0 ? void 0 : draggedItem.rowIndex) === rowIndex &&
                                                (draggedItem === null || draggedItem === void 0 ? void 0 : draggedItem.itemIndex) === itemIndex;
                                            const showDropBefore = (dropZone === null || dropZone === void 0 ? void 0 : dropZone.rowIndex) === rowIndex &&
                                                (dropZone === null || dropZone === void 0 ? void 0 : dropZone.itemIndex) === itemIndex &&
                                                draggedItem &&
                                                !(draggedItem.rowIndex === rowIndex &&
                                                    draggedItem.itemIndex === itemIndex);
                                            return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [showDropBefore && ((0, jsx_runtime_1.jsx)("div", { className: "tier-list-drop-indicator" })), (0, jsx_runtime_1.jsx)("div", { className: `tier-list-item${isDragging ? " dragging" : ""}`, draggable: true, onDragStart: (e) => handleItemDragStart(rowIndex, itemIndex, e), onDragEnd: handleItemDragEnd, onDrop: (e) => {
                                                            const insertIndex = (dropZone === null || dropZone === void 0 ? void 0 : dropZone.rowIndex) === rowIndex &&
                                                                (dropZone === null || dropZone === void 0 ? void 0 : dropZone.itemIndex) !== undefined
                                                                ? dropZone.itemIndex
                                                                : itemIndex;
                                                            handleDrop(rowIndex, insertIndex, e, draggedItem);
                                                            setDropZone(null);
                                                        }, onDragOver: (e) => handleItemDragOver(rowIndex, itemIndex, e), onContextMenu: (e) => handleItemRightClick(rowIndex, itemIndex, e), children: renderItemImage(item) })] }, itemIndex));
                                        }), (dropZone === null || dropZone === void 0 ? void 0 : dropZone.rowIndex) === rowIndex &&
                                            (dropZone === null || dropZone === void 0 ? void 0 : dropZone.itemIndex) === row.items.length &&
                                            draggedItem &&
                                            !(draggedItem.rowIndex === rowIndex &&
                                                draggedItem.itemIndex === row.items.length) && (0, jsx_runtime_1.jsx)("div", { className: "tier-list-drop-indicator" })] }) }), (0, jsx_runtime_1.jsx)("td", { className: "tier-list-actions-column", children: (0, jsx_runtime_1.jsxs)("div", { className: "tier-list-row-controls", children: [(0, jsx_runtime_1.jsx)("input", { type: "color", value: row.color || "#2a2a2a", onChange: (e) => handleColorChange(rowIndex, e.target.value), className: "tier-list-color-picker", title: "Change row color" }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly dark tier-list-move-up", onClick: () => moveRow(rowIndex, "up"), disabled: rowIndex === 0, title: t("tier_list.move_row_up"), type: "button", children: "\u25B2" }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly dark tier-list-move-down", onClick: () => moveRow(rowIndex, "down"), disabled: rowIndex === props.tierList.rows.length - 1, title: t("tier_list.move_row_down"), type: "button", children: "\u25BC" }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly red tier-list-delete-row", onClick: () => deleteRow(rowIndex), title: t("tier_list.delete_row"), type: "button", children: "\u2715" })] }) })] }, rowIndex))) })] }) }));
}
//# sourceMappingURL=tier-list.js.map