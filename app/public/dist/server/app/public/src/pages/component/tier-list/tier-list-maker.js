"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TierListMaker;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const types_1 = require("../../../../../types");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const export_image_1 = require("../../../../../utils/export-image");
const store_1 = require("../../utils/store");
const item_picker_1 = __importDefault(require("../bot-builder/item-picker"));
const pokemon_picker_1 = __importDefault(require("../bot-builder/pokemon-picker"));
const tier_list_1 = __importDefault(require("./tier-list"));
require("./tier-list-maker.css");
function TierListMaker() {
    var _a;
    const { t } = (0, react_i18next_1.useTranslation)();
    function getInitialTierList() {
        return {
            name: t("tier_list.title"),
            rows: [
                { name: "S", color: "#ff7f7f", items: [] },
                { name: "A", color: "#ffbf7f", items: [] },
                { name: "B", color: "#FFDF7F", items: [] },
                { name: "C", color: "#FFFF7F", items: [] },
                { name: "D", color: "#BFFF7F", items: [] }
            ]
        };
    }
    const [selection, setSelection] = (0, react_1.useState)({
        name: Pokemon_1.Pkm.MAGIKARP,
        shiny: false,
        emotion: types_1.Emotion.NORMAL
    });
    const [tierList, setTierList] = (0, react_1.useState)((_a = store_1.localStore.get(store_1.LocalStoreKeys.TIER_LIST)) !== null && _a !== void 0 ? _a : getInitialTierList());
    (0, react_1.useEffect)(() => {
        store_1.localStore.set(store_1.LocalStoreKeys.TIER_LIST, tierList);
    }, [tierList]);
    function saveFile() {
        const blob = new Blob([JSON.stringify(tierList)], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "tierlist.json";
        a.click();
        URL.revokeObjectURL(url);
    }
    function loadFile() {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/json";
        input.addEventListener("change", (e) => __awaiter(this, void 0, void 0, function* () {
            if (!input.files)
                return;
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = (e) => __awaiter(this, void 0, void 0, function* () {
                if (!e.target)
                    return;
                try {
                    const data = JSON.parse(e.target.result);
                    if (!data) {
                        throw new Error("Invalid file content");
                    }
                    else {
                        setTierList(Object.assign({}, data));
                    }
                }
                catch (e) {
                    alert("Invalid file");
                }
            });
            reader.readAsText(file);
        }));
        input.click();
    }
    function downloadImage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, export_image_1.exportElementAsImage)({
                    selector: ".tier-list-table",
                    excludeSelector: ".tier-list-actions-column",
                    filename: tierList.name,
                    preferClipboard: false
                });
            }
            catch (error) {
                alert("Failed to capture tier list image");
            }
        });
    }
    function shareOnDiscord() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, export_image_1.exportElementAsImage)({
                    selector: ".tier-list-table",
                    excludeSelector: ".tier-list-actions-column",
                    filename: tierList.name,
                    preferClipboard: true
                });
                const discordChannelUrl = "https://discord.com/channels/737230355039387749/1126145783889145887";
                window.open(discordChannelUrl, "_blank");
            }
            catch (error) {
                console.error("Error sharing to Discord:", error);
                alert("Failed to prepare tier list for Discord sharing");
            }
        });
    }
    function reset() {
        setTierList(getInitialTierList());
    }
    function addRow() {
        const newRows = [
            ...tierList.rows,
            {
                name: `Tier ${tierList.rows.length + 1}`,
                color: "#7f7f7f",
                items: []
            }
        ];
        setTierList(Object.assign(Object.assign({}, tierList), { rows: newRows }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { id: "tier-list-maker", children: [(0, jsx_runtime_1.jsxs)("div", { className: "actions", children: [(0, jsx_runtime_1.jsxs)("button", { className: "bubbly tier-list-add-row", onClick: addRow, type: "button", children: ["\uFF0B", t("tier_list.add_row")] }), (0, jsx_runtime_1.jsxs)("button", { className: "bubbly", onClick: loadFile, children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/load.svg" }), " ", t("load")] }), (0, jsx_runtime_1.jsxs)("button", { className: "bubbly", onClick: saveFile, children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/save.svg" }), " ", t("save")] }), (0, jsx_runtime_1.jsxs)("button", { className: "bubbly blue", onClick: downloadImage, children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/save.svg" }), " ", t("tier_list.download_image")] }), (0, jsx_runtime_1.jsxs)("button", { className: "bubbly blue", onClick: shareOnDiscord, children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/share.svg" }), " ", t("tier_list.share_on_discord")] }), (0, jsx_runtime_1.jsxs)("button", { className: "bubbly red", onClick: reset, children: [(0, jsx_runtime_1.jsx)("img", { src: "assets/ui/trash.svg" }), " ", t("reset")] })] }), (0, jsx_runtime_1.jsx)(tier_list_1.default, { tierList: tierList, onUpdate: setTierList }), (0, jsx_runtime_1.jsx)(item_picker_1.default, {}), (0, jsx_runtime_1.jsx)(pokemon_picker_1.default, {})] }));
}
//# sourceMappingURL=tier-list-maker.js.map