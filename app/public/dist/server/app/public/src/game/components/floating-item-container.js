"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatingItemContainer = void 0;
const phaser_1 = require("phaser");
const depths_1 = require("../depths");
const item_detail_1 = __importDefault(require("./item-detail"));
const preferences_1 = require("../../preferences");
class FloatingItemContainer extends phaser_1.GameObjects.Container {
    constructor(manager, id, x, y, item) {
        super(manager.scene, x, y);
        this.mouseoutTimeout = null;
        this.manager = manager;
        this.name = item;
        this.id = id;
        this.circle = new phaser_1.GameObjects.Ellipse(manager.scene, 0, 0, 40, 40, 0x61738a, 1);
        this.circle.setStrokeStyle(1, 0xffffff, 0.7);
        this.add(this.circle);
        this.sprite = new phaser_1.GameObjects.Image(manager.scene, 0, 0, "item", this.name + ".png");
        this.sprite.setScale(0.32);
        this.add(this.sprite);
        this.setDepth(depths_1.DEPTH.INANIMATE_OBJECTS);
        this.setSize(40, 40);
        this.setInteractive()
            .on("pointerover", (pointer) => {
            this.onPointerOver(pointer);
        })
            .on("pointerout", () => this.onPointerOut())
            .on("pointerdown", (pointer, _x, _y, event) => {
            this.onPointerDown(pointer, event);
        });
        this.scene.add.existing(this);
    }
    onGrab(playerId) {
        const currentPlayerId = this.scene.uid;
        if (playerId === currentPlayerId) {
            this.circle.setStrokeStyle(2, 0x4cff00, 1);
            this.circle.setFillStyle(0x61738a, 1);
        }
        else if (playerId == "") {
            this.circle.setStrokeStyle(1, 0xffffff, 0.7);
            this.circle.setFillStyle(0x61738a, 1);
        }
        else {
            this.circle.setStrokeStyle(2, 0xcf0000, 0.7);
            this.circle.setFillStyle(0x61738a, 0.7);
        }
    }
    openDetail() {
        this.manager.closeDetails();
        if (this.detail === undefined) {
            this.detail = new item_detail_1.default(this.scene, 0, 0, this.name);
            this.detail.setDepth(depths_1.DEPTH.TOOLTIP);
            this.detail.setPosition(this.detail.width * 0.5 + 40, this.detail.height * 0.5);
            this.detail.setVisible(false);
            this.detail.dom.addEventListener("mouseenter", () => {
                this.mouseoutTimeout && clearTimeout(this.mouseoutTimeout);
            });
            this.detail.dom.addEventListener("mouseleave", () => {
                if ((0, preferences_1.preference)("showDetailsOnHover")) {
                    this.mouseoutTimeout = setTimeout(() => {
                        var _a;
                        if ((_a = this.detail) === null || _a === void 0 ? void 0 : _a.visible) {
                            this.closeDetail();
                        }
                    }, 0);
                }
            });
            this.add(this.detail);
        }
        this.detail.setVisible(true);
    }
    closeDetail() {
        var _a;
        (_a = this.detail) === null || _a === void 0 ? void 0 : _a.setVisible(false);
    }
    onPointerOver(pointer) {
        var _a;
        if ((0, preferences_1.preference)("showDetailsOnHover") && !((_a = this.detail) === null || _a === void 0 ? void 0 : _a.visible)) {
            this.mouseoutTimeout && clearTimeout(this.mouseoutTimeout);
            this.openDetail();
        }
    }
    onPointerOut() {
        if ((0, preferences_1.preference)("showDetailsOnHover")) {
            this.mouseoutTimeout = setTimeout(() => {
                var _a;
                if ((_a = this.detail) === null || _a === void 0 ? void 0 : _a.visible) {
                    this.closeDetail();
                }
            }, 0);
        }
    }
    onPointerDown(pointer, event) {
        var _a;
        event.stopPropagation();
        if (pointer.rightButtonDown() && !(0, preferences_1.preference)("showDetailsOnHover")) {
            if (!((_a = this.detail) === null || _a === void 0 ? void 0 : _a.visible)) {
                this.openDetail();
            }
            else {
                this.closeDetail();
            }
        }
    }
}
exports.FloatingItemContainer = FloatingItemContainer;
//# sourceMappingURL=floating-item-container.js.map