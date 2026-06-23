"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardMode = void 0;
const i18next_1 = require("i18next");
const phaser_1 = __importStar(require("phaser"));
const config_1 = require("../../../../config");
const music_1 = require("../../../../config/game/music");
const flower_pots_1 = require("../../../../core/flower-pots");
const pokemon_avatar_1 = require("../../../../models/colyseus-models/pokemon-avatar");
const pokemon_factory_1 = __importDefault(require("../../../../models/pokemon-factory"));
const precomputed_pokemon_data_1 = require("../../../../models/precomputed/precomputed-pokemon-data");
const pve_stages_1 = require("../../../../models/pve-stages");
const types_1 = require("../../../../types");
const Dungeon_1 = require("../../../../types/enum/Dungeon");
const Game_1 = require("../../../../types/enum/Game");
const Item_1 = require("../../../../types/enum/Item");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const Synergy_1 = require("../../../../types/enum/Synergy");
const TownEncounter_1 = require("../../../../types/enum/TownEncounter");
const Weather_1 = require("../../../../types/enum/Weather");
const board_1 = require("../../../../utils/board");
const logger_1 = require("../../../../utils/logger");
const number_1 = require("../../../../utils/number");
const random_1 = require("../../../../utils/random");
const schemas_1 = require("../../../../utils/schemas");
const game_pokemon_detail_1 = require("../../pages/component/game/game-pokemon-detail");
const game_1 = require("../../pages/game");
const audio_1 = require("../../pages/utils/audio");
const utils_1 = require("../../pages/utils/utils");
const preferences_1 = require("../../preferences");
const stores_1 = __importDefault(require("../../stores"));
const GameStore_1 = require("../../stores/GameStore");
const pokemon_animations_1 = require("../components/pokemon-animations");
const depths_1 = require("../depths");
const abilities_animations_1 = require("./abilities-animations");
const berry_tree_1 = require("./berry-tree");
const pokemon_1 = __importDefault(require("./pokemon"));
const pokemon_avatar_2 = __importDefault(require("./pokemon-avatar"));
const pokemon_special_1 = __importDefault(require("./pokemon-special"));
const portal_1 = require("./portal");
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
        this.flowerPots = [];
        this.flowerPokemonsInPots = [];
        this.mulchAmountText = null;
        this.mulchIcon = null;
        this.trainingBag = null;
        this.trainingRack = null;
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
        this.groundHoles = [];
        this.berryTrees = [];
        this.flowerPots = [];
        this.flowerPokemonsInPots = [];
        if (state.phase == Game_1.GamePhaseState.FIGHT) {
            this.renderBoard(false);
            this.battleMode(false);
        }
        else if (state.phase === Game_1.GamePhaseState.TOWN) {
            this.renderBoard(false);
            this.minigameMode();
        }
        else {
            this.pickMode(false);
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
            if (this.pveChest && this.pveChestGroup) {
                const rewards = [
                    ...(0, schemas_1.schemaValues)(this.player.pveRewards),
                    ...(0, schemas_1.schemaValues)(this.player.pveRewardsPropositions)
                ];
                this.openChest(this.pveChestGroup, this.pveChest, rewards);
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
        var _a;
        if (this.pokemons.has(pokemon.id)) {
            return this.pokemons.get(pokemon.id);
        }
        const coordinates = (0, utils_1.transformBoardCoordinates)(pokemon.positionX, pokemon.positionY);
        const pokemonUI = new pokemon_1.default(this.scene, coordinates[0], coordinates[1], pokemon, this.player.id, false, false);
        this.animationManager.animatePokemon(pokemonUI, pokemon.action, false);
        (_a = this.pokemons.get(pokemonUI.id)) === null || _a === void 0 ? void 0 : _a.destroy();
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
    clearBoard() {
        this.pokemons.forEach((p) => p.destroy());
        this.pokemons.clear();
    }
    renderBoard(phaseJustChanged) {
        this.clearBoard();
        if (this.mode !== BoardMode.TOWN) {
            this.renderBerryTrees();
            this.renderFlowerPots();
            this.renderGroundHoles();
            this.renderTrainingBag();
        }
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
            this.addSmeargle(this.specialGameRule);
        }
        if (this.state.stageLevel in pve_stages_1.PVEStages && this.mode === BoardMode.PICK) {
            this.addPvePokemons(pve_stages_1.PVEStages[this.state.stageLevel], !phaseJustChanged);
        }
    }
    showLightCell() {
        this.hideLightCell();
        const lightCount = this.player.synergies.get(Synergy_1.Synergy.LIGHT);
        if (lightCount && lightCount >= config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0]) {
            const coordinates = (0, utils_1.transformBoardCoordinates)(this.lightX, this.lightY);
            this.lightCell = this.scene.add.sprite(coordinates[0], coordinates[1], "abilities", "LIGHT_CELL/000.png");
            this.lightCell.setDepth(depths_1.DEPTH.LIGHT_CELL);
            this.lightCell.setScale(2, 2);
            this.lightCell.anims.play("LIGHT_CELL");
        }
    }
    hideLightCell() {
        var _a;
        (_a = this.lightCell) === null || _a === void 0 ? void 0 : _a.destroy();
        this.lightCell = null;
    }
    renderBerryTrees() {
        var _a;
        this.berryTrees.forEach((tree) => tree.destroy());
        this.berryTrees = [];
        const grassLevel = (_a = this.player.synergies.get(Synergy_1.Synergy.GRASS)) !== null && _a !== void 0 ? _a : 0;
        const nbTrees = (0, number_1.max)(3)(config_1.SynergyTriggers[Synergy_1.Synergy.GRASS].filter((n) => n <= grassLevel).length);
        for (let i = 0; i < nbTrees; i++) {
            const tree = new berry_tree_1.BerryTree(this, config_1.BERRY_TREE_POSITIONS[i][0], config_1.BERRY_TREE_POSITIONS[i][1], i);
            this.berryTrees.push(tree);
        }
    }
    hideBerryTrees() {
        this.berryTrees.forEach((tree) => tree.destroy());
        this.berryTrees = [];
    }
    getNbFlowerPots() {
        var _a;
        const floraLevel = (_a = this.player.synergies.get(Synergy_1.Synergy.FLORA)) !== null && _a !== void 0 ? _a : 0;
        let nbPots = config_1.SynergyTriggers[Synergy_1.Synergy.FLORA].filter((n) => n <= floraLevel).length;
        if (floraLevel >= 6 &&
            this.player.flowerPots.every((p) => p.evolution === Pokemon_1.Pkm.DEFAULT)) {
            nbPots = 5;
        }
        return nbPots;
    }
    renderFlowerPots() {
        var _a, _b;
        this.hideFlowerPots();
        const nbPots = this.getNbFlowerPots();
        for (let i = 0; i < nbPots; i++) {
            const potSprite = this.scene.add.sprite(flower_pots_1.FLOWER_POTS_POSITIONS_BLUE[i][0], flower_pots_1.FLOWER_POTS_POSITIONS_BLUE[i][1], "flower_pots", types_1.FlowerPots[i] + ".png");
            potSprite
                .setDepth(i % 2 ? depths_1.DEPTH.INANIMATE_OBJECTS : depths_1.DEPTH.INANIMATE_OBJECTS + 0.1)
                .setScale(2, 2)
                .setOrigin(0.5, 0.5)
                .setTint((0, config_1.getRegionTint)(this.scene.mapName, (0, preferences_1.preference)("colorblindMode")));
            const potPokemon = this.player.flowerPots[i];
            const simulation = (_b = (_a = this.scene) === null || _a === void 0 ? void 0 : _a.room) === null || _b === void 0 ? void 0 : _b.state.simulations.get(this.player.simulationId);
            const isOnBattle = this.mode === BoardMode.BATTLE &&
                (simulation === null || simulation === void 0 ? void 0 : simulation.started) &&
                (0, schemas_1.schemaValues)(simulation.blueDpsMeter).some((p) => p.id === potPokemon.id);
            if (potPokemon && !isOnBattle) {
                const flowerInPot = new pokemon_1.default(this.scene, flower_pots_1.FLOWER_POTS_POSITIONS_BLUE[i][0], flower_pots_1.FLOWER_POTS_POSITIONS_BLUE[i][1] - 24, potPokemon, this.player.id, false, false);
                this.animationManager.animatePokemon(flowerInPot, Game_1.PokemonActionState.SLEEP, false, true);
                flowerInPot.draggable = false;
                this.flowerPokemonsInPots.push(flowerInPot);
                this.pokemons.set(flowerInPot.id, flowerInPot);
            }
            this.flowerPots.push(potSprite);
        }
        this.updateMulchCount();
    }
    updateMulchCount() {
        var _a, _b;
        const nbPots = this.getNbFlowerPots();
        if (nbPots === 0) {
            (_a = this.mulchAmountText) === null || _a === void 0 ? void 0 : _a.destroy();
            this.mulchAmountText = null;
            (_b = this.mulchIcon) === null || _b === void 0 ? void 0 : _b.destroy();
            this.mulchIcon = null;
            return;
        }
        if (this.mulchAmountText === null) {
            this.mulchAmountText = this.displayText(348, 622, "").setOrigin(0, 0);
        }
        this.mulchAmountText.setText(`${this.player.mulch}/${this.player.mulchCap}`);
        if (this.mulchIcon === null) {
            const mulchCollected = this.player.items.filter((i) => i === Item_1.Item.RICH_MULCH).length +
                this.player.flowerPots.reduce((acc, pot) => acc + pot.stars, 0) -
                8;
            this.mulchIcon = this.scene.add.image(332, 636, "item", `${mulchCollected >= 8 ? Item_1.Item.AMAZE_MULCH : Item_1.Item.RICH_MULCH}.png`);
            this.mulchIcon.setScale(0.25).setDepth(depths_1.DEPTH.TEXT);
        }
    }
    hideFlowerPots() {
        var _a;
        this.flowerPots.forEach((pot) => pot.destroy());
        this.flowerPokemonsInPots.forEach((p) => {
            p.destroy();
            this.pokemons.delete(p.id);
        });
        this.flowerPots = [];
        this.flowerPokemonsInPots = [];
        if (this.mulchAmountText) {
            this.mulchAmountText.destroy();
            this.mulchAmountText = null;
        }
        if (this.mulchIcon) {
            (_a = this.mulchIcon) === null || _a === void 0 ? void 0 : _a.destroy();
            this.mulchIcon = null;
        }
    }
    renderGroundHoles() {
        this.groundHoles.forEach((hole) => hole.destroy());
        this.groundHoles = [];
        for (let row = 0; row < config_1.BOARD_HEIGHT / 2; row++) {
            for (let col = 0; col < config_1.BOARD_WIDTH; col++) {
                let trenchWidth = 0;
                const index = col + row * config_1.BOARD_WIDTH;
                while (col + trenchWidth < config_1.BOARD_WIDTH &&
                    this.player.groundHoles[index + trenchWidth] === 5) {
                    trenchWidth++;
                }
                if (trenchWidth >= 2) {
                    const [x, y] = (0, utils_1.transformBoardCoordinates)(col, row + 1);
                    const trench = this.scene.add
                        .sprite(x - 44, y + 10, "ground_holes", `trench${trenchWidth}.png`)
                        .setOrigin(0, 0.5)
                        .setScale(2)
                        .setAlpha(0.9)
                        .setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL)
                        .setTint((0, config_1.getRegionTint)(this.scene.mapName, (0, preferences_1.preference)("colorblindMode")));
                    this.groundHoles.push(trench);
                    col += trenchWidth - 1;
                }
                else {
                    const hole = this.player.groundHoles[index];
                    if (hole > 0) {
                        const [x, y] = (0, utils_1.transformBoardCoordinates)(col, row + 1);
                        const groundHole = this.scene.add
                            .sprite(x, y + 10, "ground_holes", `hole${hole}.png`)
                            .setScale(2)
                            .setDepth(depths_1.DEPTH.BOARD_EFFECT_GROUND_LEVEL)
                            .setTint((0, config_1.getRegionTint)(this.scene.mapName, (0, preferences_1.preference)("colorblindMode")));
                        this.groundHoles.push(groundHole);
                    }
                }
            }
        }
    }
    hideGroundHoles() {
        this.groundHoles.forEach((hole) => hole.destroy());
        this.groundHoles = [];
    }
    hideTrainingBag() {
        var _a, _b;
        (_a = this.trainingRack) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.trainingBag) === null || _b === void 0 ? void 0 : _b.destroy();
        this.trainingRack = null;
        this.trainingBag = null;
    }
    renderTrainingBag() {
        var _a;
        this.hideTrainingBag();
        const fightingLevel = (_a = this.player.synergies.get(Synergy_1.Synergy.FIGHTING)) !== null && _a !== void 0 ? _a : 0;
        if (fightingLevel >= config_1.SynergyTriggers[Synergy_1.Synergy.FIGHTING][3]) {
            this.trainingRack = this.scene.add
                .sprite(605, 775, "training_bag", "rack.png")
                .setScale(1.5)
                .setDepth(depths_1.DEPTH.INANIMATE_OBJECTS);
            this.trainingBag = this.scene.add
                .sprite(621, 750, "training_bag", "bag.png")
                .setScale(1.5)
                .setOrigin(35 / 48, 19 / 72)
                .setDepth(depths_1.DEPTH.INANIMATE_OBJECTS + 0.1);
        }
    }
    animateTrainingBag() {
        if (!this.trainingBag)
            return;
        this.scene.tweens.add({
            targets: this.trainingBag,
            angle: {
                getStart: () => -10,
                getEnd: () => 10
            },
            ease: "Sine.easeInOut",
            duration: 200,
            yoyo: true,
            repeat: -1
        });
    }
    displayText(x, y, label, tweenOut = false) {
        const textStyle = {
            fontSize: "24px",
            fontFamily: "Jost",
            color: "#fff",
            align: "center",
            strokeThickness: 2,
            stroke: "#000"
        };
        const text = this.scene.add.existing(new phaser_1.GameObjects.Text(this.scene, x, y, label, textStyle).setOrigin(0.5, 0.5));
        text.setDepth(depths_1.DEPTH.TEXT);
        if (tweenOut) {
            this.scene.add.tween({
                targets: [text],
                ease: "linear",
                duration: 1500,
                delay: 0,
                alpha: {
                    getStart: () => 1,
                    getEnd: () => 0
                },
                y: {
                    getStart: () => y - 50,
                    getEnd: () => y - 110
                },
                onComplete: () => {
                    text.destroy();
                }
            });
        }
        return text;
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
    updateOpponentAvatar(opponentId, opponentAvatarString, isGhostBattle = false) {
        if (this.opponentAvatar) {
            this.opponentAvatar.destroy();
            this.opponentAvatar = null;
        }
        if (this.pveChestGroup) {
            this.pveChestGroup.destroy(true, true);
            this.pveChest = null;
            this.pveChestGroup = null;
        }
        if (this.mode === BoardMode.BATTLE && opponentId === "pve") {
            const { chest, chestGroup } = this.addChest(1512, 122);
            this.pveChest = chest;
            this.pveChestGroup = chestGroup;
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
            if (isGhostBattle)
                this.opponentAvatar.sprite.setAlpha(0.5);
            this.animationManager.animatePokemon(this.opponentAvatar, this.opponentAvatar.action, false);
            this.updateScoutingAvatars();
        }
    }
    updateScoutingAvatars(resetAll = false) {
        const players = this.state.players;
        if (!players)
            return;
        const scoutingPlayers = (0, schemas_1.schemaValues)(players).filter((p) => {
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
            const playerIndex = (0, schemas_1.schemaValues)(players).findIndex((p) => p.id === player.id);
            const scoutAvatarModel = new pokemon_avatar_1.PokemonAvatarModel(player.id, player.avatar, 0, 0, 0);
            const scoutAvatar = new pokemon_avatar_2.default(this.scene, 1512, 218 + 48 * playerIndex, scoutAvatarModel, player.id, true);
            scoutAvatar.orientation = Game_1.Orientation.DOWNLEFT;
            this.animationManager.animatePokemon(scoutAvatar, scoutAvatar.action, false);
            this.scoutingAvatars.push(scoutAvatar);
        });
    }
    updateAvatarLife(playerId, value) {
        if (this.playerAvatar &&
            this.playerAvatar.scene &&
            this.player.id === playerId) {
            this.playerAvatar.updateLife(value);
        }
        if (this.opponentAvatar &&
            this.opponentAvatar.scene &&
            this.opponentAvatar.playerId === playerId) {
            this.opponentAvatar.updateLife(value);
        }
    }
    battleMode(phaseJustChanged) {
        this.mode = BoardMode.BATTLE;
        this.hideLightCell();
        if (!phaseJustChanged)
            this.removePokemonsOnBoard();
        this.scene.closeTooltips();
        this.scene.input.setDragState(this.scene.input.activePointer, 0);
        setTimeout(() => {
            var _a, _b;
            const gameState = stores_1.default.getState().game;
            const spectatedPlayer = gameState.players.find((p) => p.id === gameState.playerIdSpectated);
            const player = spectatedPlayer !== null && spectatedPlayer !== void 0 ? spectatedPlayer : this.player;
            const simulation = (_b = (_a = this.scene) === null || _a === void 0 ? void 0 : _a.room) === null || _b === void 0 ? void 0 : _b.state.simulations.get(player.simulationId);
            if (spectatedPlayer) {
                const isPVERound = spectatedPlayer.opponentId === "pve";
                const isRedPlayer = gameState.teamSpectated === Game_1.Team.RED_TEAM;
                if (!isPVERound && phaseJustChanged) {
                    this.portalTransition(isRedPlayer);
                }
                else {
                    this.updateOpponentAvatar(spectatedPlayer.opponentId, spectatedPlayer.opponentAvatar, simulation === null || simulation === void 0 ? void 0 : simulation.isGhostBattle);
                }
            }
        }, 0);
    }
    removePokemonsOnBoard() {
        this.pokemons.forEach((pkmSprite) => {
            if (!(0, board_1.isOnBench)(pkmSprite) &&
                !(flower_pots_1.FlowerPotMons.includes(Pokemon_1.PkmByIndex[pkmSprite.pokemon.index]) &&
                    pkmSprite.positionY === -1)) {
                pkmSprite.destroy();
                this.pokemons.delete(pkmSprite.id);
            }
        });
    }
    pickMode(phaseJustChanged) {
        this.mode = BoardMode.PICK;
        this.scene.setMap(this.player.map);
        if (this.scene.cache.audio.has("music_" + config_1.RegionDetails[this.player.map].music) &&
            config_1.PortalCarouselStages.includes(this.state.stageLevel)) {
            (0, audio_1.playMusic)(this.scene, config_1.RegionDetails[this.player.map].music);
        }
        this.renderBoard(phaseJustChanged);
        this.updatePlayerAvatar();
        this.updateOpponentAvatar(null, null);
        this.updateScoutingAvatars(true);
    }
    minigameMode() {
        var _a, _b, _c, _d, _e;
        this.mode = BoardMode.TOWN;
        this.scene.setMap("town");
        if (this.state.townEncounter === TownEncounter_1.TownEncounters.LUDICOLO) {
            (0, audio_1.playMusic)(this.scene, Dungeon_1.DungeonMusic.CARNIVAL_LUDICOLO);
            (_a = this.scene.music) === null || _a === void 0 ? void 0 : _a.once("looped", () => {
                var _a;
                (0, audio_1.playMusic)(this.scene, (_a = config_1.RegionDetails[this.player.map].music) !== null && _a !== void 0 ? _a : Dungeon_1.DungeonMusic.TREASURE_TOWN);
            });
        }
        else if (this.state.stageLevel === config_1.PortalCarouselStages[0]) {
            (0, audio_1.playMusic)(this.scene, (0, music_1.getMusicAlt)(Dungeon_1.DungeonMusic.TREASURE_TOWN_STAGE_0));
        }
        else if (this.state.stageLevel === config_1.PortalCarouselStages[1]) {
            (0, audio_1.playMusic)(this.scene, (0, music_1.getMusicAlt)(Dungeon_1.DungeonMusic.TREASURE_TOWN_STAGE_10));
        }
        else if (this.state.stageLevel === config_1.PortalCarouselStages[2]) {
            (0, audio_1.playMusic)(this.scene, (0, music_1.getMusicAlt)(Dungeon_1.DungeonMusic.TREASURE_TOWN_STAGE_20));
        }
        this.hideLightCell();
        this.hideBerryTrees();
        this.hideFlowerPots();
        this.hideGroundHoles();
        this.hideTrainingBag();
        this.removePokemonsOnBoard();
        (_b = this.scene.board) === null || _b === void 0 ? void 0 : _b.pokemons.forEach((p) => p.setAlpha(1));
        this.scene.closeTooltips();
        this.scene.input.setDragState(this.scene.input.activePointer, 0);
        if (this.playerAvatar) {
            this.playerAvatar.destroy();
        }
        this.updateOpponentAvatar(null, null);
        this.updateScoutingAvatars(true);
        (_c = this.scene.minigameManager) === null || _c === void 0 ? void 0 : _c.addVillagers((_e = (_d = this.scene.room) === null || _d === void 0 ? void 0 : _d.state.townEncounter) !== null && _e !== void 0 ? _e : null, stores_1.default.getState().game.podium);
    }
    setPlayer(player) {
        var _a, _b;
        if (player.id != this.player.id) {
            this.player = player;
            this.renderBoard(false);
            this.updatePlayerAvatar();
            const simulation = (_b = (_a = this.scene) === null || _a === void 0 ? void 0 : _a.room) === null || _b === void 0 ? void 0 : _b.state.simulations.get(player.simulationId);
            this.updateOpponentAvatar(this.player.opponentId, this.player.opponentAvatar, simulation === null || simulation === void 0 ? void 0 : simulation.isGhostBattle);
            this.updateScoutingAvatars(true);
        }
    }
    updatePokemonItems(playerId, pokemon, item, removed = false) {
        if (this.player.id === playerId) {
            const pkm = this.pokemons.get(pokemon.id);
            if (pkm) {
                pkm.itemsContainer.render(pokemon.items);
            }
            if (item === Item_1.Item.SHINY_STONE) {
                if (removed) {
                    pkm === null || pkm === void 0 ? void 0 : pkm.removeLight();
                }
                else {
                    pkm === null || pkm === void 0 ? void 0 : pkm.addLight();
                }
            }
            if (item === Item_1.Item.BERSERK_GENE) {
                if (removed) {
                    pkm === null || pkm === void 0 ? void 0 : pkm.removeBerserkEffect();
                }
                else {
                    pkm === null || pkm === void 0 ? void 0 : pkm.addBerserkEffect();
                }
            }
            if (item === Item_1.Item.AIR_BALLOON) {
                if (removed) {
                    pkm === null || pkm === void 0 ? void 0 : pkm.removeFloatingAnimation();
                }
                else {
                    pkm === null || pkm === void 0 ? void 0 : pkm.addFloatingAnimation();
                }
            }
        }
    }
    updatePokemonDishes(playerId, pokemon, dishes) {
        if (this.player.id === playerId) {
            const pokemonUI = this.pokemons.get(pokemon.id);
            if (pokemonUI) {
                pokemonUI.updateDishes(dishes);
            }
        }
    }
    changePokemon(pokemon, field, value, previousValue) {
        var _a, _b, _c, _d;
        const pokemonSprite = this.pokemons.get(pokemon.id);
        let coordinates;
        if (pokemonSprite) {
            switch (field) {
                case "positionX":
                    coordinates = (0, utils_1.transformBoardCoordinates)(pokemon.positionX, pokemon.positionY);
                    setTimeout(() => {
                        pokemonSprite.x = coordinates[0];
                        pokemonSprite.y = coordinates[1];
                    }, this.scene.spectate ? 3000 : 0);
                    stores_1.default.dispatch((0, GameStore_1.refreshShopUI)(0));
                    this.showSupportItemsVfx((0, schemas_1.schemaValues)(pokemon.items), pokemonSprite, pokemon.positionX, pokemon.positionY);
                    break;
                case "positionY": {
                    coordinates = (0, utils_1.transformBoardCoordinates)(pokemon.positionX, pokemon.positionY);
                    setTimeout(() => {
                        pokemonSprite.x = coordinates[0];
                        pokemonSprite.y = coordinates[1];
                    }, this.scene.spectate ? 3000 : 0);
                    const simulation = (_b = (_a = this.scene) === null || _a === void 0 ? void 0 : _a.room) === null || _b === void 0 ? void 0 : _b.state.simulations.get(this.player.simulationId);
                    if (this.mode === BoardMode.BATTLE &&
                        !(0, board_1.isOnBench)(pokemon) &&
                        (simulation === null || simulation === void 0 ? void 0 : simulation.started)) {
                        pokemonSprite.destroy();
                        this.pokemons.delete(pokemonSprite.id);
                    }
                    stores_1.default.dispatch((0, GameStore_1.refreshShopUI)(0));
                    if (!(0, board_1.isOnBench)(pokemon)) {
                        this.showSupportItemsVfx((0, schemas_1.schemaValues)(pokemon.items), pokemonSprite, pokemon.positionX, pokemon.positionY);
                    }
                    break;
                }
                case "action":
                    this.animationManager.animatePokemon(pokemonSprite, value, false);
                    if (value === Game_1.PokemonActionState.TRAINING &&
                        pokemon.positionX === 0) {
                        this.animateTrainingBag();
                    }
                    break;
                case "hp":
                case "maxHP": {
                    const baseHP = (0, precomputed_pokemon_data_1.getPokemonData)(pokemon.name).hp;
                    const hp = (0, schemas_1.schemaValues)(pokemon.items).reduce((acc, item) => { var _a, _b; return acc + ((_b = (_a = config_1.ItemStats[item]) === null || _a === void 0 ? void 0 : _a[Game_1.Stat.HP]) !== null && _b !== void 0 ? _b : 0); }, pokemon.hp);
                    const scale = 2 * Math.sqrt(1 + (pokemon.maxHP - baseHP) / baseHP);
                    pokemonSprite.sprite.setScale(scale);
                    if (previousValue != null && value && value > previousValue)
                        pokemonSprite.displayBoost(Game_1.Stat.HP);
                    break;
                }
                case "atk":
                    if (previousValue != null && value && value > previousValue)
                        pokemonSprite.displayBoost(Game_1.Stat.ATK);
                    break;
                case "def":
                    if (previousValue != null && value && value > previousValue)
                        pokemonSprite.displayBoost(Game_1.Stat.DEF);
                    break;
                case "speed":
                    if (previousValue != null && value && value > previousValue)
                        pokemonSprite.displayBoost(Game_1.Stat.SPEED);
                    break;
                case "ap":
                    if (previousValue != null && value && value > previousValue)
                        pokemonSprite.displayBoost(Game_1.Stat.AP);
                    if (pokemonSprite.detail instanceof game_pokemon_detail_1.GamePokemonDetailDOMWrapper) {
                        pokemonSprite.detail.updatePokemon(pokemonSprite.pokemon);
                    }
                    break;
                case "luck":
                    if (previousValue != null && value && value > previousValue)
                        pokemonSprite.displayBoost(Game_1.Stat.LUCK);
                    if (pokemonSprite.detail instanceof game_pokemon_detail_1.GamePokemonDetailDOMWrapper) {
                        pokemonSprite.detail.updatePokemon(pokemonSprite.pokemon);
                    }
                    break;
                case "shiny":
                    this.animationManager.animatePokemon(pokemonSprite, pokemonSprite.action, false);
                    break;
                case "index":
                    if (previousValue != null && value !== previousValue) {
                        pokemonSprite.unloadAnimations(this.scene, previousValue, pokemonSprite.pokemon.shiny
                            ? Game_1.PokemonTint.SHINY
                            : Game_1.PokemonTint.NORMAL);
                        pokemonSprite.attackSprite =
                            (_d = (_c = pokemon_animations_1.PokemonAnimations[Pokemon_1.PkmByIndex[value]]) === null || _c === void 0 ? void 0 : _c.attackSprite) !== null && _d !== void 0 ? _d : pokemonSprite.attackSprite;
                        pokemonSprite.lazyLoadAnimations(this.scene).then(() => {
                            pokemonSprite.animationLocked = false;
                            pokemonSprite.evolutionAnimation();
                        });
                    }
                    break;
                case "skill":
                    if (previousValue != null && value !== previousValue) {
                        pokemonSprite.evolutionAnimation();
                    }
                    break;
                case "supercharged":
                    if (value === true && previousValue === false) {
                        pokemonSprite.superchargeAnimation(this.scene, false, false);
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
                pokemon.itemsContainer.closeTooltips();
            }
        });
        for (const tree of this.berryTrees.values()) {
            tree.closeDetail();
        }
        this.flowerPokemonsInPots.forEach((pokemon) => {
            if (pokemon.detail) {
                pokemon.closeDetail();
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
    showEmote(playerOrPokemonId, emote) {
        const avatars = [
            this.playerAvatar,
            this.opponentAvatar,
            ...this.scoutingAvatars
        ];
        const player = avatars.find((a) => (a === null || a === void 0 ? void 0 : a.playerId) === playerOrPokemonId);
        if (player) {
            this.animationManager.play(player, pokemon_animations_1.PokemonAnimations[player.name].emote);
            if (emote) {
                player.drawSpeechBubble(emote, player === this.opponentAvatar);
            }
        }
        else {
            const pokemonSprite = this.pokemons.get(playerOrPokemonId);
            if (pokemonSprite) {
                this.animationManager.play(pokemonSprite, pokemon_animations_1.PokemonAnimations[pokemonSprite.name].emote);
                if (emote) {
                    pokemonSprite.drawSpeechBubble(emote, player === this.opponentAvatar);
                }
            }
        }
    }
    addSmeargle(specialGameRule) {
        this.smeargle = new pokemon_special_1.default({
            scene: this.scene,
            x: 1512,
            y: 396,
            name: Pokemon_1.Pkm.SMEARGLE,
            orientation: Game_1.Orientation.DOWNLEFT,
            dialog: (0, i18next_1.t)(`scribble_description.${specialGameRule}`),
            dialogTitle: (0, i18next_1.t)(`scribble.${specialGameRule}`)
        });
    }
    addPvePokemons(pveStage, immediately) {
        pveStage.board.forEach(([pkm, boardX, boardY], i) => {
            var _a;
            const [x, y] = (0, utils_1.transformEntityCoordinates)(boardX, boardY - 1, true);
            const id = `pve_${this.state.stageLevel}_${i}`;
            const pokemon = pokemon_factory_1.default.createPokemonFromName(pkm, {
                shiny: this.state.shinyEncounter
            });
            for (const stat in pveStage.statBoosts) {
                pokemon.applyStat(stat, pveStage.statBoosts[stat]);
            }
            if (this.state.townEncounter === TownEncounter_1.TownEncounters.MAROWAK &&
                pveStage.marowakItems &&
                i in pveStage.marowakItems) {
                pveStage.marowakItems[i].forEach((item) => pokemon.items.add(item));
            }
            const pkmSprite = new pokemon_1.default(this.scene, x, y, pokemon, id, false, false);
            this.pokemons.set(id, pkmSprite);
            pkmSprite.setDepth(depths_1.DEPTH.POKEMON);
            if (immediately) {
                pkmSprite.orientation = Game_1.Orientation.DOWNLEFT;
                (_a = this.scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(pkmSprite, Game_1.PokemonActionState.IDLE, false);
            }
            else {
                pkmSprite.y -= 500;
                pkmSprite.orientation = Game_1.Orientation.DOWN;
                pkmSprite.pokemon.action = Game_1.PokemonActionState.WALK;
                this.scene.tweens.add({
                    targets: pkmSprite,
                    y,
                    ease: "Linear",
                    duration: 3000,
                    onComplete: () => {
                        var _a;
                        if (pkmSprite) {
                            pkmSprite.orientation = Game_1.Orientation.DOWNLEFT;
                            (_a = this.scene.animationManager) === null || _a === void 0 ? void 0 : _a.animatePokemon(pkmSprite, Game_1.PokemonActionState.IDLE, false);
                        }
                    }
                });
            }
        });
    }
    addPortal() {
        if (this.portal)
            this.portal.destroy();
        const [x, y] = (0, utils_1.transformBoardCoordinates)(3.5, 5);
        this.portal = new portal_1.Portal(this.scene, "portal", x, y).setScale(0);
        this.scene.tweens.add({
            targets: this.portal,
            scale: 1.5,
            duration: 5000,
            ease: phaser_1.default.Math.Easing.Sine.Out
        });
    }
    portalTransition(isRedPlayer) {
        var _a, _b;
        const [portalX, portalY] = (0, utils_1.transformBoardCoordinates)(3.5, 5);
        const opponent = (0, schemas_1.schemaValues)(this.state.players).find((p) => p.id === this.player.opponentId);
        if (!opponent) {
            logger_1.logger.error("No opponent found for portal transition");
            return;
        }
        if (isRedPlayer) {
            if (this.playerAvatar != null) {
                this.scene.tweens.add({
                    targets: this.playerAvatar,
                    ease: phaser_1.default.Math.Easing.Quadratic.In,
                    duration: 700,
                    scale: 0,
                    x: portalX,
                    y: portalY
                });
            }
            const pokemonsToTeleport = [...this.pokemons.values()].filter((p) => flower_pots_1.FlowerPotMons.includes(Pokemon_1.PkmByIndex[p.pokemon.index]) === false);
            for (const pokemon of pokemonsToTeleport) {
                const delay = (0, random_1.randomBetween)(0, 300);
                this.scene.tweens.add({
                    targets: pokemon,
                    ease: phaser_1.default.Math.Easing.Quadratic.In,
                    delay,
                    duration: 700,
                    scale: 0,
                    x: portalX,
                    y: portalY
                });
            }
            this.scene.tweens.add({
                targets: this.portal,
                ease: phaser_1.default.Math.Easing.Quadratic.In,
                delay: 700,
                duration: 300,
                scale: 0,
                onComplete: () => {
                    var _a, _b, _c;
                    this.scene.setMap(opponent.map);
                    const simulation = (_b = (_a = this.scene) === null || _a === void 0 ? void 0 : _a.room) === null || _b === void 0 ? void 0 : _b.state.simulations.get(this.player.simulationId);
                    if (simulation && simulation.weather === Weather_1.Weather.DROUGHT) {
                        (0, game_1.getGameContainer)().handleWeatherChange(simulation, simulation.weather);
                    }
                    const [x, y] = (0, utils_1.transformBoardCoordinates)(3.5, 2);
                    (_c = this.portal) === null || _c === void 0 ? void 0 : _c.setPosition(x, y).setScale(1);
                    opponent.board.forEach((pokemon) => {
                        var _a;
                        if ((0, board_1.isOnBench)(pokemon))
                            return;
                        const [x, y] = (0, utils_1.transformEntityCoordinates)(pokemon.positionX, pokemon.positionY - 1, true);
                        const pokemonSprite = new pokemon_1.default(this.scene, x, y, pokemon, this.player.opponentId, false, false);
                        this.animationManager.animatePokemon(pokemonSprite, Game_1.PokemonActionState.IDLE, false);
                        (_a = this.pokemons.get(pokemonSprite.id)) === null || _a === void 0 ? void 0 : _a.destroy();
                        this.pokemons.set(pokemonSprite.id, pokemonSprite);
                    });
                    const isGhostOpponent = (simulation === null || simulation === void 0 ? void 0 : simulation.isGhostBattle) && !isRedPlayer;
                    this.updateOpponentAvatar(opponent.id, opponent.avatar, isGhostOpponent);
                    if (this.playerAvatar) {
                        this.playerAvatar.x = x;
                        this.playerAvatar.y = y;
                        this.scene.tweens.add({
                            targets: this.playerAvatar,
                            ease: phaser_1.default.Math.Easing.Quadratic.Out,
                            duration: 1000,
                            scale: 1,
                            x: 504,
                            y: 696,
                            onStart: () => {
                                if (this.playerAvatar) {
                                    this.animationManager.animatePokemon(this.playerAvatar, Game_1.PokemonActionState.HOP, false, false);
                                }
                            }
                        });
                    }
                    pokemonsToTeleport.forEach((pokemon) => {
                        const [originalX, originalY] = (0, utils_1.transformBoardCoordinates)(pokemon.positionX, pokemon.positionY);
                        pokemon.x = x;
                        pokemon.y = y;
                        const delay = (0, random_1.randomBetween)(0, 300);
                        this.scene.tweens.add({
                            targets: pokemon,
                            ease: phaser_1.default.Math.Easing.Quadratic.Out,
                            delay,
                            duration: 700,
                            scale: 1,
                            x: originalX,
                            y: originalY,
                            onStart: () => {
                                this.animationManager.animatePokemon(pokemon, Game_1.PokemonActionState.HOP, false, false);
                            }
                        });
                    });
                    this.scene.tweens.add({
                        targets: this.portal,
                        ease: phaser_1.default.Math.Easing.Cubic.In,
                        delay: 700,
                        duration: 300,
                        scale: 0,
                        onComplete: () => {
                            var _a;
                            (_a = this.portal) === null || _a === void 0 ? void 0 : _a.destroy();
                            this.portal = undefined;
                        }
                    });
                }
            });
        }
        else {
            const simulation = (_b = (_a = this.scene) === null || _a === void 0 ? void 0 : _a.room) === null || _b === void 0 ? void 0 : _b.state.simulations.get(this.player.simulationId);
            const isGhostOpponent = (simulation === null || simulation === void 0 ? void 0 : simulation.isGhostBattle) && !isRedPlayer;
            this.updateOpponentAvatar(opponent.id, opponent.avatar, isGhostOpponent);
            if (this.opponentAvatar) {
                this.opponentAvatar.x = portalX;
                this.opponentAvatar.y = portalY;
                this.opponentAvatar.setScale(0);
                this.scene.tweens.add({
                    targets: this.opponentAvatar,
                    ease: phaser_1.default.Math.Easing.Quadratic.Out,
                    duration: 1500,
                    scale: 1,
                    x: 1512,
                    y: 122,
                    onStart: () => {
                        if (this.opponentAvatar) {
                            this.animationManager.animatePokemon(this.opponentAvatar, Game_1.PokemonActionState.HOP, false, false);
                        }
                    }
                });
            }
            setTimeout(() => {
                const opponent = (0, schemas_1.schemaValues)(this.state.players).find((p) => p.id === this.player.opponentId);
                if (!opponent)
                    return;
                opponent.board.forEach((pokemon) => {
                    var _a;
                    if ((0, board_1.isOnBench)(pokemon))
                        return;
                    const pokemonSprite = new pokemon_1.default(this.scene, portalX, portalY, pokemon, this.player.opponentId, false, false);
                    pokemonSprite.setScale(0);
                    (_a = this.pokemons.get(pokemonSprite.id)) === null || _a === void 0 ? void 0 : _a.destroy();
                    this.pokemons.set(pokemonSprite.id, pokemonSprite);
                    const [originalX, originalY] = (0, utils_1.transformEntityCoordinates)(pokemon.positionX, pokemon.positionY - 1, true);
                    const delay = (0, random_1.randomBetween)(0, 300);
                    this.scene.tweens.add({
                        targets: pokemonSprite,
                        ease: phaser_1.default.Math.Easing.Quadratic.Out,
                        delay,
                        duration: 700,
                        scale: 1,
                        x: originalX,
                        y: originalY,
                        onStart: () => {
                            this.animationManager.animatePokemon(pokemonSprite, Game_1.PokemonActionState.HOP, false, false);
                        }
                    });
                });
            }, 1000);
            this.scene.tweens.add({
                targets: this.portal,
                ease: phaser_1.default.Math.Easing.Cubic.In,
                delay: 1700,
                duration: 300,
                scale: 0,
                onComplete: () => {
                    var _a;
                    (_a = this.portal) === null || _a === void 0 ? void 0 : _a.destroy();
                    this.portal = undefined;
                }
            });
        }
    }
    addChest(x, y) {
        const chestGroup = this.scene.add.group();
        const chest = this.scene.add
            .sprite(x, y, "chest", "1.png")
            .setScale(2)
            .setTint((0, config_1.getRegionTint)(this.scene.mapName, (0, preferences_1.preference)("colorblindMode")));
        chestGroup.add(chest);
        chestGroup.setDepth(depths_1.DEPTH.INANIMATE_OBJECTS);
        return { chest, chestGroup };
    }
    openChest(chestGroup, chest, rewards) {
        chest.anims.play("open_chest");
        rewards.forEach((item, i) => {
            const itemSprite = this.scene.add.sprite(chest.x, chest.y, "item", item + ".png");
            itemSprite.setScale(0.5).setDepth(chest.depth + 1);
            const shinyEffect = this.scene.add.sprite(chest.x, chest.y, "shine");
            shinyEffect
                .setScale(2)
                .setDepth(chest.depth + 1)
                .play("shine");
            chestGroup === null || chestGroup === void 0 ? void 0 : chestGroup.addMultiple([itemSprite, shinyEffect]);
            this.scene.tweens.add({
                targets: [itemSprite, shinyEffect],
                ease: phaser_1.default.Math.Easing.Quadratic.Out,
                duration: 1000,
                y: chest.y - 48,
                x: chest.x + (i - (rewards.length - 1) / 2) * 70
            });
        });
    }
    showSupportItemsVfx(items, pokemonSprite, positionX, positionY) {
        const adjacentEffectsItems = [
            Item_1.Item.ABILITY_SHIELD,
            Item_1.Item.GRACIDEA_FLOWER,
            Item_1.Item.EFFICIENT_BANDANNA
        ];
        const shouldDisplayLeft = positionX > 0;
        const shouldDisplayRight = positionX < config_1.BOARD_WIDTH - 1;
        adjacentEffectsItems.forEach((item) => {
            if (items.includes(item)) {
                let statBoost = null;
                switch (item) {
                    case Item_1.Item.ABILITY_SHIELD:
                        statBoost = Game_1.Stat.SHIELD;
                        break;
                    case Item_1.Item.GRACIDEA_FLOWER:
                        statBoost = Game_1.Stat.SPEED;
                        break;
                    case Item_1.Item.EFFICIENT_BANDANNA:
                        statBoost = Game_1.Stat.PP;
                        break;
                }
                if (statBoost) {
                    (0, abilities_animations_1.displayBoost)(pokemonSprite, statBoost, 0, 0);
                    if (shouldDisplayLeft)
                        (0, abilities_animations_1.displayBoost)(pokemonSprite, statBoost, -1, 0);
                    if (shouldDisplayRight)
                        (0, abilities_animations_1.displayBoost)(pokemonSprite, statBoost, +1, 0);
                }
            }
        });
    }
}
exports.default = BoardManager;
//# sourceMappingURL=board-manager.js.map