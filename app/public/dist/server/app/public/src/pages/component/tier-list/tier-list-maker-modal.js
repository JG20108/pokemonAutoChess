"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TierListMakerModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const modal_1 = require("../modal/modal");
const tier_list_maker_1 = __importDefault(require("./tier-list-maker"));
function TierListMakerModal(props) {
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, { show: props.show, onClose: props.handleClose, header: (0, i18next_1.t)("gadget.tier_list_maker"), className: "tier-list-maker-modal", children: (0, jsx_runtime_1.jsx)(tier_list_maker_1.default, {}) }));
}
//# sourceMappingURL=tier-list-maker-modal.js.map