"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = require("i18next");
const phaser_1 = require("phaser");
const config_1 = require("../../../../config");
const pokemon_factory_1 = __importDefault(require("../../../../models/pokemon-factory"));
const types_1 = require("../../../../types");
const Game_1 = require("../../../../types/enum/Game");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const Wanderer_1 = require("../../../../types/enum/Wanderer");
const board_1 = require("../../../../utils/board");
const number_1 = require("../../../../utils/number");
const random_1 = require("../../../../utils/random");
const depths_1 = require("../depths");
const pokemon_1 = __importDefault(require("./pokemon"));
const pokemon_special_1 = __importDefault(require("./pokemon-special"));
const DEFAULT_WANDERER_SPEED = 0.25;
class WanderersManager {
    constructor(scene) {
        var _a;
        this.scene = scene;
        (_a = scene.board) === null || _a === void 0 ? void 0 : _a.player.wanderers.forEach((wanderer) => {
            this.addWanderer(wanderer);
        });
    }
    addWanderer(wanderer) {
        if (wanderer.type === Wanderer_1.WandererType.UNOWN) {
            this.addWanderingUnown(wanderer);
        }
        else if (wanderer.type === Wanderer_1.WandererType.UNOWN_SPELL) {
            this.addSpectatingUnown(wanderer);
        }
        else if (wanderer.type === Wanderer_1.WandererType.CATCHABLE) {
            this.addCatchableWanderer(wanderer);
        }
        else if (wanderer.type === Wanderer_1.WandererType.DIALOG) {
            this.addDialogWanderer(wanderer);
        }
        else if (wanderer.type === Wanderer_1.WandererType.OUTLAW) {
            this.addOutlawWanderer(wanderer);
        }
    }
    addWanderingUnown(wanderer) {
        this.addWandererPokemonSprite({
            wanderer,
            onClick: (wanderer, unownSprite, pointer) => {
                var _a;
                (_a = this.scene.room) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.WANDERER_CLICKED, { id: wanderer.id });
                this.displayShardGain([pointer.x, pointer.y], unownSprite.pokemon.index, unownSprite.pokemon.shiny);
                unownSprite.destroy();
                return true;
            }
        });
    }
    addSpectatingUnown(wanderer) {
        this.addWandererPokemonSprite({ wanderer });
    }
    addCatchableWanderer(wanderer) {
        this.addWandererPokemonSprite({
            wanderer,
            onClick: (wanderer, sprite, pointer) => {
                var _a;
                let caught = false;
                if (this.scene.board) {
                    if ((0, board_1.getFreeSpaceOnBench)(this.scene.board.player.board) > 0) {
                        caught = true;
                        (_a = this.scene.room) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.WANDERER_CLICKED, {
                            id: wanderer.id
                        });
                        sprite.destroy();
                    }
                    else {
                        this.scene.board.displayText(pointer.x, pointer.y, (0, i18next_1.t)("full"), true);
                    }
                }
                return caught;
            }
        });
    }
    addOutlawWanderer(wanderer) {
        this.addWandererPokemonSprite({
            wanderer,
            speed: 0.4,
            onClick: (wanderer, sprite, pointer) => {
                var _a;
                let caught = false;
                if (this.scene.board) {
                    caught = true;
                    (_a = this.scene.room) === null || _a === void 0 ? void 0 : _a.send(types_1.Transfer.WANDERER_CLICKED, {
                        id: wanderer.id
                    });
                    sprite.destroy();
                    this.scene.board.displayText(pointer.x, pointer.y - 40, (0, i18next_1.t)("caught"), true);
                    this.scene.displayMoneyGain(pointer.x, pointer.y, config_1.OUTLAW_GOLD_REWARD);
                }
                return caught;
            }
        });
    }
    addDialogWanderer(wanderer) {
        const sprite = new pokemon_special_1.default(Object.assign({ scene: this.scene, x: -100, y: 350, name: wanderer.pkm, animation: Game_1.PokemonActionState.WALK }, getDialogsBySpecialWanderer(wanderer)));
        this.addWandererPokemonSprite({
            wanderer,
            existingSprite: sprite,
            onClick: (wanderer, sprite) => {
                if (sprite.detail) {
                    sprite.closeDetail();
                }
                else {
                    sprite.openDetail();
                    setTimeout(() => {
                        sprite.closeDetail();
                    }, 3000);
                }
                return false;
            }
        });
        if (wanderer.pkm === Pokemon_1.Pkm.XATU && wanderer.data && this.scene.board) {
            const { chest, chestGroup } = this.scene.board.addChest(590, 450);
            setTimeout(() => {
                var _a;
                (_a = this.scene.board) === null || _a === void 0 ? void 0 : _a.openChest(chestGroup, chest, wanderer.data.split(";"));
            }, 5000);
            setTimeout(() => {
                chestGroup.destroy(true, true);
            }, 8000);
        }
        if (wanderer.pkm === Pokemon_1.Pkm.LAPRAS) {
            setTimeout(() => {
                sprite.moveManager.setSpeed(350);
                sprite.moveManager.moveTo(15 * 48, -100);
                this.scene.cameras.main.fadeOut(1000, 0, 0, 0);
                setTimeout(() => {
                    this.scene.cameras.main.fadeIn(1000, 0, 0, 0);
                    sprite.destroy();
                }, 1200);
            }, 9000);
        }
    }
    addWandererPokemonSprite({ wanderer, onClick, existingSprite, speed = DEFAULT_WANDERER_SPEED }) {
        var _a;
        let caught = false;
        const tweens = [];
        let fromLeft = (0, random_1.chance)(1 / 2);
        if (wanderer.type === Wanderer_1.WandererType.DIALOG) {
            fromLeft = true;
        }
        if (wanderer.type === Wanderer_1.WandererType.UNOWN_SPELL) {
            fromLeft = false;
        }
        let startX = fromLeft ? -100 : +window.innerWidth + 100, startY = 100 + Math.round(Math.random() * 500), endX = fromLeft ? +window.innerWidth + 100 : -100, endY = 350;
        let duration = (0, number_1.clamp)(window.innerWidth / speed, 4000, 6000);
        if (wanderer.behavior === Wanderer_1.WandererBehavior.SPECTATE) {
            endX = fromLeft ? 590 : 1512;
            endY =
                wanderer.type === Wanderer_1.WandererType.DIALOG ||
                    wanderer.type === Wanderer_1.WandererType.UNOWN_SPELL
                    ? 500
                    : 300 + Math.round(Math.random() * 200);
            duration = 4000;
        }
        if (wanderer.behavior === Wanderer_1.WandererBehavior.RUN_THROUGH) {
            endY = 100 + Math.round(Math.random() * 500);
        }
        const sprite = existingSprite !== null && existingSprite !== void 0 ? existingSprite : new pokemon_1.default(this.scene, startX, startY, pokemon_factory_1.default.createPokemonFromName(wanderer.pkm, {
            shiny: wanderer.shiny
        }), "wanderer", false, false);
        sprite.orientation = startX < endX ? Game_1.Orientation.RIGHT : Game_1.Orientation.LEFT;
        (_a = this.scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(sprite, Game_1.PokemonActionState.WALK, false);
        const tween = this.scene.tweens.add({
            targets: sprite,
            x: endX,
            y: endY,
            ease: "Linear",
            duration,
            onComplete: () => {
                var _a, _b;
                if (wanderer.behavior === Wanderer_1.WandererBehavior.SPECTATE) {
                    (_a = this.scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(sprite, Game_1.PokemonActionState.IDLE, false);
                    if (wanderer.type === Wanderer_1.WandererType.DIALOG) {
                        sprite.openDetail();
                    }
                    else if (wanderer.type === Wanderer_1.WandererType.UNOWN_SPELL) {
                        sprite.orientation = Game_1.Orientation.DOWN;
                        (_b = this.scene.animationManager) === null || _b === void 0 ? void 0 : _b.animatePokemon(sprite, Game_1.PokemonActionState.IDLE, false);
                    }
                    tweens.push(this.scene.add.tween({
                        targets: [sprite],
                        ease: "linear",
                        duration: 5000,
                        delay: 8000,
                        x: startX,
                        y: startY,
                        onComplete: () => {
                            sprite.destroy();
                        },
                        onStart: () => {
                            var _a;
                            sprite.closeDetail();
                            sprite.orientation = Game_1.Orientation.LEFT;
                            (_a = this.scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(sprite, Game_1.PokemonActionState.WALK, false);
                        }
                    }));
                }
                else {
                    sprite.destroy();
                }
            }
        });
        tweens.push(tween);
        sprite.draggable = false;
        sprite.sprite.setInteractive();
        sprite.sprite.on("pointerdown", (pointer) => {
            if (caught || !onClick)
                return;
            caught = onClick(wanderer, sprite, pointer);
            if (caught)
                tweens.forEach((tween) => tween.destroy());
        });
        return sprite;
    }
    displayShardGain(coordinates, index, shiny) {
        const textStyle = {
            fontSize: "25px",
            fontFamily: "Verdana",
            color: shiny ? "#ffd700" : "#fff",
            align: "center",
            strokeThickness: 2,
            stroke: "#000"
        };
        const image = this.scene.add.existing(new phaser_1.GameObjects.Image(this.scene, 0, 0, `portrait-${index}`)
            .setScale(0.5, 0.5)
            .setOrigin(0, 0));
        const text = this.scene.add.existing(new phaser_1.GameObjects.Text(this.scene, 25, 0, (shiny
            ? config_1.SHARDS_PER_SHINY_UNOWN_WANDERER
            : config_1.SHARDS_PER_UNOWN_WANDERER).toString(), textStyle));
        image.setDepth(depths_1.DEPTH.TEXT_MINOR);
        text.setDepth(depths_1.DEPTH.TEXT);
        const container = this.scene.add.existing(new phaser_1.GameObjects.Container(this.scene, coordinates[0], coordinates[1] - 50, [text, image]));
        this.scene.add.tween({
            targets: [container],
            ease: "linear",
            duration: 1500,
            delay: 0,
            alpha: {
                getStart: () => 1,
                getEnd: () => 0
            },
            y: {
                getStart: () => coordinates[1] - 50,
                getEnd: () => coordinates[1] - 110
            },
            onComplete: () => {
                container.destroy();
            }
        });
    }
}
exports.default = WanderersManager;
function getDialogsBySpecialWanderer(wanderer) {
    if (wanderer.pkm === Pokemon_1.Pkm.CHATOT) {
        return {
            dialog: (0, i18next_1.t)("npc_dialog.here_are_your_reward", {
                reward: `30 GOLD`
            }),
            dialogTitle: (0, i18next_1.t)("npc_dialog.good_job")
        };
    }
    if (wanderer.pkm === Pokemon_1.Pkm.MAGNEMITE) {
        return {
            dialog: (0, i18next_1.t)("npc_dialog.magnemite")
        };
    }
    if (wanderer.pkm === Pokemon_1.Pkm.MAGNEZONE) {
        return {
            dialog: (0, i18next_1.t)("npc_dialog.magnezone")
        };
    }
    if (wanderer.pkm === Pokemon_1.Pkm.XATU) {
        return {
            dialog: (0, i18next_1.t)("npc_dialog.xatu")
        };
    }
    if (wanderer.pkm === Pokemon_1.Pkm.LAPRAS) {
        return {
            dialog: (0, i18next_1.t)("npc_dialog.lapras")
        };
    }
    return {};
}
//# sourceMappingURL=wanderers-manager.js.map