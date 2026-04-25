"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SpriteTrackerModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const modal_1 = require("../modal/modal");
const sprite_tracker_1 = __importDefault(require("./sprite-tracker"));
function SpriteTrackerModal(props) {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, { show: props.show, onClose: props.handleClose, header: t("gadget.sprite_tracker"), className: "sprite-tracker-modal", children: (0, jsx_runtime_1.jsx)(sprite_tracker_1.default, {}) }));
}
//# sourceMappingURL=sprite-tracker-modal.js.map