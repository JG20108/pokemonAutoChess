"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayBoost = displayBoost;
const Game_1 = require("../../../../types/enum/Game");
const depths_1 = require("../depths");
const game_scene_1 = __importDefault(require("../scenes/game-scene"));
function displayBoost(scene, x, y, stat) {
    var _a;
    const tint = (_a = {
        [Game_1.Stat.AP]: 0xff00aa,
        [Game_1.Stat.SPEED]: 0xffaa44,
        [Game_1.Stat.ATK]: 0xff6633,
        [Game_1.Stat.DEF]: 0xffaa66,
        [Game_1.Stat.SPE_DEF]: 0xff99cc,
        [Game_1.Stat.SHIELD]: 0xffcc99
    }[stat]) !== null && _a !== void 0 ? _a : 0xffffff;
    const boost = scene.add
        .sprite(x, y - 10, "abilities", `BOOST/000.png`)
        .setDepth(depths_1.DEPTH.BOOST_BACK)
        .setScale(2)
        .setTint(tint);
    boost.anims.play({
        key: "BOOST",
        repeat: scene instanceof game_scene_1.default ? 0 : 5
    });
    boost.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
        boost.destroy();
    });
}
//# sourceMappingURL=boosts-animations.js.map