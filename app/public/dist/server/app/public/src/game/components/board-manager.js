"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardMode = void 0;
const i18next_1 = require("i18next");
const phaser_1 = require("phaser");
const pokemon_avatar_1 = require("../../../../models/colyseus-models/pokemon-avatar");
const precomputed_pokemon_data_1 = require("../../../../models/precomputed/precomputed-pokemon-data");
const types_1 = require("../../../../types");
const Config_1 = require("../../../../types/Config");
const Game_1 = require("../../../../types/enum/Game");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const Synergy_1 = require("../../../../types/enum/Synergy");
const board_1 = require("../../../../utils/board");
const schemas_1 = require("../../../../utils/schemas");
const utils_1 = require("../../pages/utils/utils");
const stores_1 = __importDefault(require("../../stores"));
const pokemon_1 = __importDefault(require("./pokemon"));
const pokemon_avatar_2 = __importDefault(require("./pokemon-avatar"));
const pokemon_special_1 = __importDefault(require("./pokemon-special"));
const boosts_animations_1 = require("./boosts-animations");
const Item_1 = require("../../../../types/enum/Item");
const audio_1 = require("../../pages/utils/audio");
const depths_1 = require("../depths");
const Dungeon_1 = require("../../../../types/enum/Dungeon");
const GameStore_1 = require("../../stores/GameStore");
var BoardMode;
(function (BoardMode) {
    BoardMode["PICK"] = "pick";
    BoardMode["BATTLE"] = "battle";
    BoardMode["TOWN"] = "town";
})(BoardMode || (exports.BoardMode = BoardMode = {}));
class BoardManager {
    constructor(scene, player, animationManager, uid, state) {
        this.scoutingAvatars = [];
        this.berryTrees = [];
        this.smeargle = null;
        this.specialGameRule = null;
        this.pokemons = new Map();
        this.uid = uid;
        this.scene = scene;
        this.state = state;
        this.player = player;
        this.mode = BoardMode.PICK;
        this.animationManager = animationManager;
        this.lightX = state.lightX;
        this.lightY = state.lightY;
        this.gameMode = state.gameMode;
        this.specialGameRule = state.specialGameRule;
        this.playerAvatar = null;
        this.opponentAvatar = null;
        this.lightCell = null;
        this.pveChest = null;
        this.pveChestGroup = null;
        if (state.phase == Game_1.GamePhaseState.FIGHT) {
            this.battleMode();
        }
        else if (state.phase === Game_1.GamePhaseState.TOWN) {
            this.renderBoard();
            this.minigameMode();
        }
        else {
            this.pickMode();
        }
    }
    victoryAnimation(winnerId) {
        var _a;
        if (winnerId === this.player.id) {
            if (this.playerAvatar) {
                this.animationManager.animatePokemon(this.playerAvatar, Game_1.PokemonActionState.HOP, false);
            }
            if (this.opponentAvatar) {
                this.animationManager.animatePokemon(this.opponentAvatar, Game_1.PokemonActionState.HURT, false);
            }
            if (this.pveChest) {
                this.pveChest.anims.play('open_chest');
                const rewards = (0, schemas_1.values)(this.player.pveRewards).concat((0, schemas_1.values)(this.player.pveRewardsPropositions));
                rewards.forEach((item, i) => {
                    var _a;
                    const itemSprite = this.scene.add.sprite(1512, 122, 'item', item + '.png');
                    itemSprite.setScale(0.5);
                    const shinyEffect = this.scene.add.sprite(1512, 122, 'shine');
                    shinyEffect.setScale(2);
                    shinyEffect.play('shine');
                    (_a = this.pveChestGroup) === null || _a === void 0 ? void 0 : _a.addMultiple([itemSprite, shinyEffect]);
                    this.scene.tweens.add({
                        targets: [itemSprite, shinyEffect],
                        ease: Phaser.Math.Easing.Quadratic.Out,
                        duration: 1000,
                        y: 75,
                        x: 1512 + (i - (rewards.length - 1) / 2) * 70,
                    });
                });
            }
        }
        else if (winnerId === ((_a = this.opponentAvatar) === null || _a === void 0 ? void 0 : _a.playerId)) {
            this.animationManager.animatePokemon(this.opponentAvatar, Game_1.PokemonActionState.HOP, false);
            this.playerAvatar &&
                this.animationManager.animatePokemon(this.playerAvatar, Game_1.PokemonActionState.HURT, false);
        }
        else {
            this.playerAvatar &&
                this.animationManager.animatePokemon(this.playerAvatar, Game_1.PokemonActionState.IDLE, false);
            if (this.opponentAvatar) {
                this.animationManager.animatePokemon(this.opponentAvatar, Game_1.PokemonActionState.IDLE, false);
            }
        }
    }
    addPokemonSprite(pokemon) {
        if (this.pokemons.has(pokemon.id)) {
            return this.pokemons.get(pokemon.id);
        }
        const coordinates = (0, utils_1.transformCoordinate)(pokemon.positionX, pokemon.positionY);
        const pokemonUI = new pokemon_1.default(this.scene, coordinates[0], coordinates[1], pokemon, this.player.id, false, false);
        this.animationManager.animatePokemon(pokemonUI, pokemon.action, false);
        this.pokemons.set(pokemonUI.id, pokemonUI);
        return pokemonUI;
    }
    removePokemon(pokemonToRemove) {
        const pokemonUI = this.pokemons.get(pokemonToRemove.id);
        if (pokemonUI) {
            pokemonUI.destroy();
        }
        this.pokemons.delete(pokemonToRemove.id);
    }
    renderBoard() {
        this.showBerryTrees();
        this.pokemons.forEach((p) => p.destroy());
        this.pokemons.clear();
        if (this.mode === BoardMode.PICK) {
            this.showLightCell();
        }
        this.player.board.forEach((pokemon) => {
            if (this.mode === BoardMode.PICK || (0, board_1.isOnBench)(pokemon)) {
                this.addPokemonSprite(pokemon);
            }
        });
        if (this.specialGameRule != null) {
            if (this.smeargle) {
                this.smeargle.destroy();
                this.smeargle = null;
            }
            this.addSmeargle();
        }
    }
    showLightCell() {
        this.hideLightCell();
        const lightCount = this.player.synergies.get(Synergy_1.Synergy.LIGHT);
        if (lightCount && lightCount >= Config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0]) {
            const coordinates = (0, utils_1.transformCoordinate)(this.lightX, this.lightY);
            this.lightCell = this.scene.add.sprite(coordinates[0], coordinates[1], 'abilities', 'LIGHT_CELL/000.png');
            this.lightCell.setDepth(depths_1.DEPTH.LIGHT_CELL);
            this.lightCell.setScale(2, 2);
            this.lightCell.anims.play('LIGHT_CELL');
        }
    }
    hideLightCell() {
        var _a;
        (_a = this.lightCell) === null || _a === void 0 ? void 0 : _a.destroy();
        this.lightCell = null;
    }
    showBerryTrees() {
        var _a;
        this.berryTrees.forEach((tree) => tree.destroy());
        this.berryTrees = [];
        const grassLevel = (_a = this.player.synergies.get(Synergy_1.Synergy.GRASS)) !== null && _a !== void 0 ? _a : 0;
        const nbTrees = Config_1.SynergyTriggers[Synergy_1.Synergy.GRASS].filter((n) => n <= grassLevel).length;
        const treePositions = [
            [408, 710],
            [360, 710],
            [312, 710],
        ];
        for (let i = 0; i < nbTrees; i++) {
            const tree = this.scene.add.sprite(treePositions[i][0], treePositions[i][1], 'berry_trees', this.player.berryTreesType[i] + '_1');
            tree.setDepth(depths_1.DEPTH.INANIMATE_OBJECTS).setScale(2, 2).setOrigin(0.5, 1);
            if (this.player.berryTreesStage[i] === 0) {
                tree.anims.play('CROP');
            }
            else {
                tree.anims.play(`${this.player.berryTreesType[i]}_TREE_STEP_${this.player.berryTreesStage[i]}`);
            }
            tree.setInteractive();
            tree.on('pointerdown', (pointer) => {
                if (this.player.id !== this.scene.uid)
                    return;
                if (this.scene.room && this.player.berryTreesStage[i] >= 3) {
                    this.scene.room.send(types_1.Transfer.PICK_BERRY, i);
                    this.displayText(pointer.x, pointer.y, (0, i18next_1.t)('berry_gained'));
                    tree.play('CROP');
                }
                else {
                    this.displayText(pointer.x, pointer.y, (0, i18next_1.t)('berry_unripe'));
                }
            });
            this.berryTrees.push(tree);
        }
    }
    hideBerryTrees() {
        this.berryTrees.forEach((tree) => tree.destroy());
    }
    displayText(x, y, label) {
        const textStyle = {
            fontSize: '25px',
            fontFamily: 'Verdana',
            color: '#fff',
            align: 'center',
            strokeThickness: 2,
            stroke: '#000',
        };
        const text = this.scene.add.existing(new phaser_1.GameObjects.Text(this.scene, x, y, label, textStyle).setOrigin(0.5, 0.5));
        text.setDepth(depths_1.DEPTH.TEXT);
        this.scene.add.tween({
            targets: [text],
            ease: 'linear',
            duration: 1500,
            delay: 0,
            alpha: {
                getStart: () => 1,
                getEnd: () => 0,
            },
            y: {
                getStart: () => y - 50,
                getEnd: () => y - 110,
            },
            onComplete: () => {
                text.destroy();
            },
        });
    }
    updatePlayerAvatar() {
        if (this.playerAvatar) {
            this.playerAvatar.destroy();
        }
        if (this.player.life <= 0)
            return;
        if (this.state.phase === Game_1.GamePhaseState.TOWN)
            return;
        const playerAvatar = new pokemon_avatar_1.PokemonAvatarModel(this.player.id, this.player.avatar, 0, 0, 0);
        this.playerAvatar = new pokemon_avatar_2.default(this.scene, 504, 696, playerAvatar, this.player.id);
        this.playerAvatar.orientation = Game_1.Orientation.UPRIGHT;
        this.playerAvatar.updateLife(this.player.life);
        this.animationManager.animatePokemon(this.playerAvatar, this.playerAvatar.action, false);
    }
    updateOpponentAvatar(opponentId, opponentAvatarString) {
        if (this.opponentAvatar) {
            this.opponentAvatar.destroy();
            this.opponentAvatar = null;
        }
        if (this.pveChestGroup) {
            this.pveChestGroup.destroy(true, true);
            this.pveChest = null;
            this.pveChestGroup = null;
        }
        if (this.mode === BoardMode.BATTLE && opponentId === 'pve') {
            this.pveChestGroup = this.scene.add.group();
            this.pveChest = this.scene.add.sprite(1512, 122, 'chest', '1.png');
            this.pveChest.setScale(2);
            this.pveChestGroup.add(this.pveChest);
        }
        else if (this.mode === BoardMode.BATTLE &&
            opponentAvatarString &&
            opponentId) {
            let opponentLife = 0;
            this.state.players.forEach((p) => {
                if (p.id === opponentId)
                    opponentLife = p.life;
            });
            if (opponentLife <= 0)
                return;
            const opponentAvatar = new pokemon_avatar_1.PokemonAvatarModel(this.player.opponentId, opponentAvatarString, 0, 0, 0);
            this.opponentAvatar = new pokemon_avatar_2.default(this.scene, 1512, 122, opponentAvatar, opponentId);
            this.opponentAvatar.orientation = Game_1.Orientation.DOWNLEFT;
            this.opponentAvatar.updateLife(opponentLife);
            this.animationManager.animatePokemon(this.opponentAvatar, this.opponentAvatar.action, false);
            this.updateScoutingAvatars();
        }
    }
    updateScoutingAvatars(resetAll = false) {
        const players = this.state.players;
        if (!players)
            return;
        const scoutingPlayers = (0, schemas_1.values)(players).filter((p) => {
            var _a;
            const spectatedPlayer = players.get(p.spectatedPlayerId);
            if (!spectatedPlayer ||
                spectatedPlayer.id === p.id ||
                this.mode === BoardMode.TOWN ||
                p.id === ((_a = this.opponentAvatar) === null || _a === void 0 ? void 0 : _a.playerId))
                return false;
            const isSpectatingBoard = spectatedPlayer.id === this.player.id;
            const isSpectatingBattle = this.mode === BoardMode.BATTLE &&
                spectatedPlayer.simulationId === this.player.simulationId;
            return isSpectatingBoard || isSpectatingBattle;
        });
        this.scoutingAvatars = this.scoutingAvatars.filter((avatar) => {
            if (resetAll ||
                scoutingPlayers.some((p) => p.id === avatar.playerId) === false) {
                avatar.destroy();
                return false;
            }
            return true;
        });
        const newScoutingAvatars = scoutingPlayers.filter((p) => this.scoutingAvatars.some((a) => a.playerId === p.id) === false);
        newScoutingAvatars.forEach((player) => {
            const playerIndex = (0, schemas_1.values)(players).findIndex((p) => p.id === player.id);
            const scoutAvatarModel = new pokemon_avatar_1.PokemonAvatarModel(player.id, player.avatar, 0, 0, 0);
            const scoutAvatar = new pokemon_avatar_2.default(this.scene, 1512, 218 + 48 * playerIndex, scoutAvatarModel, player.id, true);
            scoutAvatar.orientation = Game_1.Orientation.DOWNLEFT;
            this.animationManager.animatePokemon(scoutAvatar, scoutAvatar.action, false);
            this.scoutingAvatars.push(scoutAvatar);
        });
    }
    updateAvatarLife(playerId, value) {
        if (this.playerAvatar && this.player.id === playerId) {
            this.playerAvatar.updateLife(value);
        }
        if (this.opponentAvatar && this.opponentAvatar.playerId === playerId) {
            this.opponentAvatar.updateLife(value);
        }
    }
    battleMode() {
        this.mode = BoardMode.BATTLE;
        this.hideLightCell();
        this.pokemons.forEach((pokemon) => {
            if (!(0, board_1.isOnBench)(pokemon)) {
                pokemon.destroy();
                this.pokemons.delete(pokemon.id);
            }
        });
        this.closeTooltips();
        this.scene.input.setDragState(this.scene.input.activePointer, 0);
        setTimeout(() => {
            const gameState = stores_1.default.getState().game;
            const currentPlayer = gameState.players.find((p) => p.id === gameState.currentPlayerId);
            if (currentPlayer) {
                this.updateOpponentAvatar(currentPlayer.opponentId, currentPlayer.opponentAvatar);
            }
        }, 0);
    }
    pickMode() {
        this.mode = BoardMode.PICK;
        this.scene.setMap(this.player.map);
        if (this.scene.cache.audio.has('music_' + Dungeon_1.DungeonDetails[this.player.map].music) &&
            Config_1.PortalCarouselStages.includes(this.state.stageLevel)) {
            (0, audio_1.playMusic)(this.scene, Dungeon_1.DungeonDetails[this.player.map].music);
        }
        this.renderBoard();
        this.updatePlayerAvatar();
        this.updateOpponentAvatar(null, null);
        this.updateScoutingAvatars(true);
    }
    minigameMode() {
        var _a, _b, _c;
        this.mode = BoardMode.TOWN;
        this.scene.setMap('town');
        if (this.state.stageLevel === Config_1.PortalCarouselStages[0])
            (0, audio_1.playMusic)(this.scene, Dungeon_1.DungeonMusic.TREASURE_TOWN_STAGE_0);
        if (this.state.stageLevel === Config_1.PortalCarouselStages[1])
            (0, audio_1.playMusic)(this.scene, Dungeon_1.DungeonMusic.TREASURE_TOWN_STAGE_10);
        if (this.state.stageLevel === Config_1.PortalCarouselStages[2])
            (0, audio_1.playMusic)(this.scene, Dungeon_1.DungeonMusic.TREASURE_TOWN_STAGE_20);
        this.hideLightCell();
        this.hideBerryTrees();
        this.pokemons.forEach((pokemon) => {
            if (pokemon.positionY != 0) {
                pokemon.setVisible(false);
            }
        });
        this.closeTooltips();
        this.scene.input.setDragState(this.scene.input.activePointer, 0);
        if (this.playerAvatar) {
            this.playerAvatar.destroy();
        }
        this.updateOpponentAvatar(null, null);
        this.updateScoutingAvatars(true);
        (_a = this.scene.minigameManager) === null || _a === void 0 ? void 0 : _a.addVillagers((_c = (_b = this.scene.room) === null || _b === void 0 ? void 0 : _b.state.townEncounter) !== null && _c !== void 0 ? _c : null, stores_1.default.getState().game.podium);
    }
    setPlayer(player) {
        if (player.id != this.player.id) {
            this.player = player;
            this.renderBoard();
            this.updatePlayerAvatar();
            this.updateOpponentAvatar(this.player.opponentId, this.player.opponentAvatar);
            this.updateScoutingAvatars(true);
        }
    }
    updatePokemonItems(playerId, pokemon, item) {
        if (this.player.id === playerId) {
            const pkm = this.pokemons.get(pokemon.id);
            if (pkm) {
                pkm.itemsContainer.render(pokemon.items);
            }
            if (item === Item_1.Item.SHINY_STONE) {
                pkm === null || pkm === void 0 ? void 0 : pkm.addLight();
            }
        }
    }
    changePokemon(pokemon, field, value, previousValue) {
        const pokemonUI = this.pokemons.get(pokemon.id);
        let coordinates;
        if (pokemonUI) {
            switch (field) {
                case 'positionX':
                    pokemonUI.positionX = value;
                    pokemonUI.positionY = pokemon.positionY;
                    coordinates = (0, utils_1.transformCoordinate)(pokemon.positionX, pokemon.positionY);
                    pokemonUI.x = coordinates[0];
                    pokemonUI.y = coordinates[1];
                    stores_1.default.dispatch((0, GameStore_1.refreshShopUI)());
                    break;
                case 'positionY':
                    pokemonUI.positionY = value;
                    pokemonUI.positionX = pokemon.positionX;
                    coordinates = (0, utils_1.transformCoordinate)(pokemon.positionX, pokemon.positionY);
                    pokemonUI.x = coordinates[0];
                    pokemonUI.y = coordinates[1];
                    if (this.mode === BoardMode.BATTLE && !(0, board_1.isOnBench)(pokemonUI)) {
                        pokemonUI.destroy();
                        this.pokemons.delete(pokemonUI.id);
                    }
                    stores_1.default.dispatch((0, GameStore_1.refreshShopUI)());
                    break;
                case 'action':
                    this.animationManager.animatePokemon(pokemonUI, value, false);
                    break;
                case 'hp': {
                    const baseHP = (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).hp;
                    const sizeBuff = (pokemon.hp - baseHP) / baseHP;
                    pokemonUI.sprite.setScale(2 + sizeBuff);
                    pokemonUI.hp = value;
                    break;
                }
                case 'atk':
                    pokemonUI.atk = value;
                    if (value > previousValue)
                        this.displayBoost(Game_1.Stat.ATK, pokemonUI);
                    break;
                case 'ap':
                    pokemonUI.ap = value;
                    if (value > previousValue)
                        this.displayBoost(Game_1.Stat.AP, pokemonUI);
                    break;
                case 'shiny':
                    pokemonUI.shiny = value;
                    this.animationManager.animatePokemon(pokemonUI, pokemonUI.action, false);
                    break;
                case 'skill':
                    if (pokemonUI.skill !== value) {
                        pokemonUI.skill = value;
                        pokemonUI.evolutionAnimation();
                    }
                    break;
                case 'types':
                    pokemonUI.types = new Set((0, schemas_1.values)(value));
                    break;
                case 'meal':
                    if (pokemonUI.meal !== value) {
                        pokemonUI.updateMeal(value);
                    }
                    break;
            }
        }
    }
    closeTooltips() {
        this.pokemons.forEach((pokemon) => {
            if (pokemon.detail) {
                pokemon.closeDetail();
            }
            if (pokemon.itemsContainer) {
                pokemon.itemsContainer.closeDetails();
            }
        });
    }
    getBenchSize() {
        let benchSize = 0;
        this.pokemons.forEach((pokemon) => {
            if ((0, board_1.isOnBench)(pokemon)) {
                benchSize++;
            }
        });
        return benchSize;
    }
    showEmote(playerId, emote) {
        const avatars = [
            this.playerAvatar,
            this.opponentAvatar,
            ...this.scoutingAvatars,
        ];
        const player = avatars.find((a) => (a === null || a === void 0 ? void 0 : a.playerId) === playerId);
        if (player) {
            this.animationManager.play(player, Pokemon_1.AnimationConfig[player.name].emote);
            if (emote) {
                player.drawSpeechBubble(emote, player === this.opponentAvatar);
            }
        }
    }
    addSmeargle() {
        this.smeargle = new pokemon_special_1.default({
            scene: this.scene,
            x: 1512,
            y: 396,
            name: Pokemon_1.Pkm.SMEARGLE,
            orientation: Game_1.Orientation.DOWNLEFT,
            dialog: (0, i18next_1.t)(`scribble_description.${this.specialGameRule}`),
            dialogTitle: (0, i18next_1.t)(`scribble.${this.specialGameRule}`),
        });
    }
    displayBoost(stat, pokemon) {
        pokemon.emoteAnimation();
        const coords = (0, utils_1.transformCoordinate)(pokemon.positionX, pokemon.positionY);
        (0, boosts_animations_1.displayBoost)(this.scene, coords[0], coords[1], stat);
    }
}
exports.default = BoardManager;
//# sourceMappingURL=board-manager.js.map