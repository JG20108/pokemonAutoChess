"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BerryTree = void 0;
const i18next_1 = require("i18next");
const phaser_1 = require("phaser");
const config_1 = require("../../../../config");
const types_1 = require("../../../../types");
const Synergy_1 = require("../../../../types/enum/Synergy");
const preferences_1 = require("../../preferences");
const depths_1 = require("../depths");
const item_detail_1 = __importDefault(require("./item-detail"));
class BerryTree extends phaser_1.GameObjects.Container {
    constructor(manager, x, y, i) {
        var _a;
        super(manager.scene, x, y);
        this.mouseoutTimeout = null;
        this.scene = manager.scene;
        this.manager = manager;
        this.index = i;
        this.player = manager.player;
        const stage = this.player.berryTreesStages[i];
        const grassLevel = (_a = this.player.synergies.get(Synergy_1.Synergy.GRASS)) !== null && _a !== void 0 ? _a : 0;
        const grassStep = config_1.SynergyTriggers[Synergy_1.Synergy.GRASS].filter((n) => n <= grassLevel).length;
        const type = grassStep === 4
            ? config_1.GOLDEN_BERRY_TREE_TYPES[i]
            : this.player.berryTreesType[i];
        this.sprite = new Phaser.GameObjects.Sprite(this.scene, 0, 0, "berry_trees", type + "_1.png");
        this.add(this.sprite);
        this.setSize(72, 72);
        this.sprite
            .setDepth(depths_1.DEPTH.INANIMATE_OBJECTS)
            .setScale(2, 2)
            .setOrigin(0.5, 1)
            .setTint((0, config_1.getRegionTint)(this.scene.mapName, (0, preferences_1.preference)("colorblindMode")));
        if (stage === 0) {
            this.sprite.anims.play("CROP");
        }
        else {
            this.sprite.anims.play(`${type}_TREE_STEP_${stage}`);
        }
        this.sprite
            .setInteractive()
            .on("pointerover", (pointer) => {
            this.onPointerOver(pointer);
        })
            .on("pointerout", () => this.onPointerOut())
            .on("pointerdown", (pointer, _x, _y, event) => {
            this.onPointerDown(pointer, event);
        });
        this.scene.add.existing(this);
    }
    openDetail() {
        this.scene.closeTooltips();
        if (this.detail === undefined) {
            const type = this.player.berryTreesType[this.index];
            this.detail = new item_detail_1.default(this.scene, 0, 0, type);
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
        else {
            if (this.player.id !== this.scene.uid)
                return;
            const stage = this.player.berryTreesStages[this.index];
            if (this.scene.room && stage >= 3) {
                this.scene.room.send(types_1.Transfer.PICK_BERRY, this.index);
                this.manager.displayText(pointer.x, pointer.y, (0, i18next_1.t)("berry_gained"), true);
                this.sprite.play("CROP");
            }
            else {
                this.manager.displayText(pointer.x, pointer.y, (0, i18next_1.t)("berry_unripe"), true);
            }
        }
    }
}
exports.BerryTree = BerryTree;
//# sourceMappingURL=berry-tree.js.map