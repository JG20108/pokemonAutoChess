"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SpriteGapScannerModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const modal_1 = require("../modal/modal");
const sprite_gap_scanner_1 = __importDefault(require("./sprite-gap-scanner"));
function SpriteGapScannerModal(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, { show: props.show, onClose: props.handleClose, header: t("gadget.sprite_tracker"), className: "sprite-gap-scanner-modal", children: (0, jsx_runtime_1.jsx)(sprite_gap_scanner_1.default, {}) }));
}
//# sourceMappingURL=sprite-gap-scanner-modal.js.map