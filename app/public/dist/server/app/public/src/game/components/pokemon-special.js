"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_factory_1 = __importDefault(require("../../../../models/pokemon-factory"));
const Game_1 = require("../../../../types/enum/Game");
const game_dialog_1 = require("./game-dialog");
const pokemon_1 = __importDefault(require("./pokemon"));
class PokemonSpecial extends pokemon_1.default {
    constructor({ scene, x, y, name, orientation = Game_1.Orientation.DOWN, animation = Game_1.PokemonActionState.IDLE, dialog, dialogTitle, emotion, shiny }) {
        super(scene, x + 24, y + 24, pokemon_factory_1.default.createPokemonFromName(name, { emotion, shiny }), "environment", false, false);
        this.detail = null;
        this.scene = scene;
        this.draggable = false;
        this.orientation = orientation;
        this.once("loaded", () => { var _a; return (_a = scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(this, animation, false); });
        this.dialog = dialog;
        this.dialogTitle = dialogTitle;
    }
    onPointerDown(pointer, event) {
        var _a;
        super.onPointerDown(pointer, event);
        (_a = this.scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(this, Game_1.PokemonActionState.EMOTE, false, false);
    }
    openDetail() {
        if (this.dialog) {
            const s = this.scene;
            if (s.lastPokemonDetail && s.lastPokemonDetail != this) {
                s.lastPokemonDetail.closeDetail();
                s.lastPokemonDetail = null;
            }
            this.detail = new game_dialog_1.GameDialog({
                scene: this.scene,
                dialog: this.dialog,
                dialogTitle: this.dialogTitle,
                portrait: {
                    index: this.pokemon.index,
                    shiny: this.pokemon.shiny,
                    emotion: this.pokemon.emotion
                }
            });
            this.updateTooltipPosition();
            this.detail.removeInteractive();
            this.add(this.detail);
            s.lastPokemonDetail = this;
        }
    }
}
exports.default = PokemonSpecial;
//# sourceMappingURL=pokemon-special.js.map