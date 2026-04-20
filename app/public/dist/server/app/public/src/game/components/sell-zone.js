"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellZone = void 0;
const i18next_1 = require("i18next");
const phaser_1 = require("phaser");
const shop_1 = require("../../../../models/shop");
const utils_1 = require("../../pages/utils/utils");
const depths_1 = require("../depths");
class SellZone extends phaser_1.GameObjects.Container {
    constructor(scene) {
        const sellZoneCoord = (0, utils_1.transformBoardCoordinates)(4, 5.5);
        super(scene, sellZoneCoord[0] - 48, sellZoneCoord[1] + 24);
        this.bgColor = 0x61738a;
        this.hoveredBgColor = 0x6b8bb2;
        this.scene = scene;
        const sellZone = scene.add.zone(0, 0, 8 * 96, 240);
        sellZone.setRectangleDropZone(8 * 96, 240);
        sellZone.setName("sell-zone");
        this.add(sellZone);
        this.rectangle = scene.add
            .rectangle(sellZone.x, sellZone.y, sellZone.input.hitArea.width, sellZone.input.hitArea.height, this.bgColor, 1)
            .setStrokeStyle(2, 0x000000, 1)
            .setAlpha(0.8);
        this.add(this.rectangle);
        sellZone.setData({ rectangle: this.rectangle });
        this.text = scene.add.text(0, -80, (0, i18next_1.t)("drop_here_to_sell"), {
            font: "600 24px Jost",
            color: "white",
            align: "center"
        });
        this.text.setOrigin(0.5, 0.5);
        this.add(this.text);
        this.setVisible(false);
        this.setDepth(depths_1.DEPTH.SELL_ZONE);
        this.scene.add.existing(this);
    }
    showForPokemon(pkm) {
        var _a, _b;
        const specialGameRule = (_a = this.scene.room) === null || _a === void 0 ? void 0 : _a.state.specialGameRule;
        const pokemon = (_b = this.scene.board) === null || _b === void 0 ? void 0 : _b.player.board.get(pkm.id);
        if (!pokemon)
            return;
        const price = (0, shop_1.getSellPrice)(pokemon, specialGameRule);
        this.text.setText(`${(0, i18next_1.t)("drop_here_to_sell")} ${(0, i18next_1.t)("for_price_gold", { price })}`);
        this.rectangle.setFillStyle(this.bgColor);
        this.setVisible(true);
    }
    hide() {
        this.rectangle.setFillStyle(this.bgColor).setAlpha(0.8);
        this.setVisible(false);
    }
    onDragEnter() {
        this.rectangle.setFillStyle(this.hoveredBgColor).setAlpha(0.9);
    }
    onDragLeave() {
        this.rectangle.setFillStyle(this.bgColor).setAlpha(0.8);
    }
}
exports.SellZone = SellZone;
//# sourceMappingURL=sell-zone.js.map