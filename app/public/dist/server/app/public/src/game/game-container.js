"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colyseus_js_1 = require("colyseus.js");
const phaser_1 = __importDefault(require("phaser"));
const moveto_plugin_js_1 = __importDefault(require("phaser3-rex-plugins/plugins/moveto-plugin.js"));
const outlinepipeline_plugin_js_1 = __importDefault(require("phaser3-rex-plugins/plugins/outlinepipeline-plugin.js"));
const react_1 = __importDefault(require("react"));
const react_toastify_1 = require("react-toastify");
const types_1 = require("../../../types");
const Game_1 = require("../../../types/enum/Game");
const Weather_1 = require("../../../types/enum/Weather");
const logger_1 = require("../../../utils/logger");
const number_1 = require("../../../utils/number");
const audio_1 = require("../pages/utils/audio");
const utils_1 = require("../pages/utils/utils");
const preferences_1 = require("../preferences");
const stores_1 = __importDefault(require("../stores"));
const GameStore_1 = require("../stores/GameStore");
const avatar_1 = require("../../../utils/avatar");
const board_manager_1 = require("./components/board-manager");
const game_scene_1 = __importDefault(require("./scenes/game-scene"));
const i18next_1 = require("i18next");
const schemas_1 = require("../../../utils/schemas");
const pokemon_customs_1 = require("../../../models/colyseus-models/pokemon-customs");
const depths_1 = require("./depths");
class GameContainer {
    constructor(div, uid, room) {
        this.room = room;
        this.$ = (0, colyseus_js_1.getStateCallbacks)(room);
        this.div = div;
        this.uid = uid;
        this.spectate = false;
        this.initializeEvents();
    }
    resetSimulation() {
        var _a, _b;
        this.simulation = undefined;
        (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.clear();
    }
    initializeSimulation(simulation) {
        var _a, _b;
        if (simulation.bluePlayerId === ((_a = this.player) === null || _a === void 0 ? void 0 : _a.id) ||
            (simulation.redPlayerId === ((_b = this.player) === null || _b === void 0 ? void 0 : _b.id) && !simulation.isGhostBattle)) {
            this.setSimulation(simulation);
        }
        const $simulation = this.$(simulation);
        $simulation.listen("winnerId", (winnerId) => {
            var _a, _b;
            if (((_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.player.simulationId) === simulation.id) {
                this.gameScene.board.victoryAnimation(winnerId);
            }
        });
        $simulation.listen("weather", (value, previousValue) => {
            this.handleWeatherChange(simulation, value);
        });
        [$simulation.blueTeam, $simulation.redTeam].forEach((team) => {
            team.onAdd((p, key) => this.initializePokemon(p, simulation));
            team.onRemove((pokemon, key) => {
                var _a, _b;
                (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.removePokemon(simulation.id, pokemon);
            });
        });
    }
    initializePokemon(pokemon, simulation) {
        var _a, _b;
        (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.addPokemonEntitySprite(simulation.id, pokemon);
        const fields = [
            "armorReduction",
            "burn",
            "charm",
            "confusion",
            "curse",
            "curseVulnerability",
            "curseWeakness",
            "curseTorment",
            "curseFate",
            "electricField",
            "fairyField",
            "fatigue",
            "flinch",
            "freeze",
            "grassField",
            "paralysis",
            "pokerus",
            "poisonStacks",
            "protect",
            "skydiving",
            "psychicField",
            "resurection",
            "resurecting",
            "runeProtect",
            "silence",
            "sleep",
            "spikeArmor",
            "wound",
            "enraged",
            "locked",
            "blinded",
            "magicBounce",
            "tree"
        ];
        const $pokemon = this.$(pokemon);
        fields.forEach((field) => {
            $pokemon.status.listen(field, (value, previousValue) => {
                var _a, _b;
                (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.changeStatus(simulation.id, pokemon, field);
            });
        });
        $pokemon.onChange(() => {
            const fields = [
                "positionX",
                "positionY",
                "orientation",
                "action",
                "critChance",
                "critPower",
                "ap",
                "luck",
                "speed",
                "life",
                "hp",
                "shield",
                "pp",
                "atk",
                "def",
                "speDef",
                "range",
                "targetX",
                "targetY",
                "team",
                "index",
                "shiny",
                "skill",
                "stars",
                "types"
            ];
            fields.forEach((field) => {
                $pokemon.listen(field, (value, previousValue) => {
                    var _a, _b;
                    (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.changePokemon(simulation.id, pokemon, field, value, previousValue || value);
                });
            });
        });
        $pokemon.items.onChange((value, key) => {
            var _a, _b;
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.updatePokemonItems(simulation.id, pokemon);
        });
        const fieldsCount = [
            "crit",
            "dodgeCount",
            "ult",
            "fieldCount",
            "fightingBlockCount",
            "fairyCritCount",
            "powerLensCount",
            "starDustCount",
            "spellBlockedCount",
            "manaBurnCount",
            "moneyCount",
            "amuletCoinCount",
            "bottleCapCount",
            "attackCount",
            "tripleAttackCount",
            "upgradeCount",
            "soulDewCount",
            "defensiveRibbonCount",
            "magmarizerCount"
        ];
        fieldsCount.forEach((field) => {
            $pokemon.count.listen(field, (value, previousValue) => {
                var _a, _b;
                (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.changeCount(simulation.id, pokemon, field, value, previousValue);
            });
        });
    }
    initializeGame() {
        var _a;
        if (this.game != null)
            return;
        const renderer = Number((_a = (0, preferences_1.preference)("renderer")) !== null && _a !== void 0 ? _a : phaser_1.default.AUTO);
        const config = {
            type: renderer,
            width: 1950,
            height: 1000,
            parent: this.div,
            pixelArt: true,
            scene: game_scene_1.default,
            scale: { mode: phaser_1.default.Scale.FIT },
            dom: {
                createContainer: true
            },
            disableContextMenu: true,
            plugins: {
                global: [
                    {
                        key: "rexMoveTo",
                        plugin: moveto_plugin_js_1.default,
                        start: true
                    }
                ]
            }
        };
        this.game = new phaser_1.default.Game(config);
        this.game.domContainer.style.zIndex = depths_1.DEPTH.PHASER_DOM_CONTAINER.toString();
        this.game.scene.start("gameScene", {
            room: this.room,
            spectate: this.spectate
        });
        this.game.scale.on("resize", this.resize, this);
        if (this.game.renderer.type === phaser_1.default.WEBGL) {
            this.game.plugins.install("rexOutline", outlinepipeline_plugin_js_1.default, true);
        }
        const unsubscribeToPreferences = (0, preferences_1.subscribeToPreferences)(({ antialiasing }) => {
            var _a;
            if (!((_a = this.game) === null || _a === void 0 ? void 0 : _a.canvas))
                return;
            this.game.canvas.style.imageRendering = antialiasing ? "" : "pixelated";
        }, true);
        this.game.events.on("destroy", unsubscribeToPreferences);
    }
    resize() {
        const screenWidth = window.innerWidth - 60;
        const screenHeight = window.innerHeight;
        const screenRatio = screenWidth / screenHeight;
        const IDEAL_WIDTH = 42 * 48;
        const MIN_HEIGHT = 1050;
        const MAX_HEIGHT = 32 * 48;
        const height = (0, number_1.clamp)(IDEAL_WIDTH / screenRatio, MIN_HEIGHT, MAX_HEIGHT);
        const width = (0, number_1.max)(50 * 48)(height * screenRatio);
        if (this.game &&
            (this.game.scale.height !== height || this.game.scale.width !== width)) {
            this.game.scale.setGameSize(width, height);
        }
    }
    initializeEvents() {
        this.room.onMessage(types_1.Transfer.DRAG_DROP_FAILED, (message) => this.handleDragDropFailed(message));
        const $state = this.$(this.room.state);
        $state.avatars.onAdd((avatar) => {
            var _a, _b;
            const $avatar = this.$(avatar);
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.minigameManager) === null || _b === void 0 ? void 0 : _b.addPokemon(avatar);
            const fields = [
                "x",
                "y",
                "action",
                "timer",
                "orientation"
            ];
            fields.forEach((field) => {
                $avatar.listen(field, (value, previousValue) => {
                    var _a, _b;
                    (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.minigameManager) === null || _b === void 0 ? void 0 : _b.changePokemon(avatar, field, value);
                });
            });
        });
        $state.avatars.onRemove((avatar, key) => {
            var _a, _b;
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.minigameManager) === null || _b === void 0 ? void 0 : _b.removePokemon(avatar);
        });
        $state.floatingItems.onAdd((floatingItem) => {
            var _a, _b;
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.minigameManager) === null || _b === void 0 ? void 0 : _b.addItem(floatingItem);
            const fields = [
                "x",
                "y",
                "avatarId"
            ];
            const $floatingItem = this.$(floatingItem);
            fields.forEach((field) => {
                $floatingItem.listen(field, (value, previousValue) => {
                    var _a, _b;
                    (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.minigameManager) === null || _b === void 0 ? void 0 : _b.changeItem(floatingItem, field, value);
                });
            });
        });
        $state.floatingItems.onRemove((floatingItem, key) => {
            var _a, _b;
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.minigameManager) === null || _b === void 0 ? void 0 : _b.removeItem(floatingItem);
        });
        $state.portals.onAdd((portal) => {
            var _a, _b;
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.minigameManager) === null || _b === void 0 ? void 0 : _b.addPortal(portal);
            const $portal = this.$(portal);
            const fields = ["x", "y", "avatarId"];
            fields.forEach((field) => {
                $portal.listen(field, (value, previousValue) => {
                    var _a, _b;
                    (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.minigameManager) === null || _b === void 0 ? void 0 : _b.changePortal(portal, field, value);
                });
            });
        });
        $state.portals.onRemove((portal, key) => {
            var _a, _b;
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.minigameManager) === null || _b === void 0 ? void 0 : _b.removePortal(portal);
        });
        $state.symbols.onAdd((symbol) => {
            var _a, _b;
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.minigameManager) === null || _b === void 0 ? void 0 : _b.addSymbol(symbol);
            const $symbol = this.$(symbol);
            const fields = [
                "x",
                "y",
                "portalId"
            ];
            fields.forEach((field) => {
                $symbol.listen(field, (value, previousValue) => {
                    var _a, _b;
                    (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.minigameManager) === null || _b === void 0 ? void 0 : _b.changeSymbol(symbol, field, value);
                });
            });
        });
        $state.symbols.onRemove((symbol, key) => {
            var _a, _b;
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.minigameManager) === null || _b === void 0 ? void 0 : _b.removeSymbol(symbol);
        });
        this.room.onError((err) => logger_1.logger.error("room error", err));
    }
    initializePlayer(player) {
        if (this.uid == player.id || (this.spectate && !this.player)) {
            this.room.send(types_1.Transfer.SPECTATE, this.uid);
            this.setPlayer(player);
            this.initializeGame();
        }
        const listenForPokemonChanges = (pokemon) => {
            const $pokemon = this.$(pokemon);
            $pokemon.onChange(() => {
                const fields = [
                    "positionX",
                    "positionY",
                    "action",
                    "hp",
                    "atk",
                    "ap",
                    "shiny",
                    "skill",
                    "meal"
                ];
                fields.forEach((field) => {
                    $pokemon.listen(field, (value, previousValue) => {
                        var _a, _b;
                        if (field && player.id === this.spectatedPlayerId) {
                            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.changePokemon(pokemon, field, value, previousValue);
                        }
                    });
                });
                $pokemon.types.onChange((value, key) => {
                    var _a, _b;
                    if (player.id === this.spectatedPlayerId) {
                        const pokemonUI = (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.pokemons.get(pokemon.id);
                        if (pokemonUI) {
                            pokemonUI.types = new Set((0, schemas_1.values)(pokemon.types));
                        }
                    }
                });
                $pokemon.items.onChange((value, key) => {
                    var _a, _b;
                    if (player.id === this.spectatedPlayerId) {
                        (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.updatePokemonItems(player.id, pokemon, value);
                    }
                });
            });
        };
        const $player = this.$(player);
        $player.board.onAdd((pokemon, key) => {
            if (pokemon.stars > 1) {
                const custom = (0, pokemon_customs_1.getPkmWithCustom)(pokemon.index, player.pokemonCustoms);
                const i = react_1.default.createElement("img", {
                    src: (0, avatar_1.getPortraitSrc)(pokemon.index, custom.shiny, custom.emotion)
                }, null);
                (0, react_toastify_1.toast)(i, {
                    containerId: player.rank.toString(),
                    className: "toast-new-pokemon"
                });
            }
            listenForPokemonChanges(pokemon);
            this.handleBoardPokemonAdd(player, pokemon);
        }, false);
        $player.board.onRemove((pokemon, key) => {
            var _a, _b;
            if (player.id === this.spectatedPlayerId) {
                (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.removePokemon(pokemon);
            }
        });
        $player.board.onChange((pokemon, key) => {
            stores_1.default.dispatch((0, GameStore_1.changePlayer)({ id: player.id, field: "board", value: player.board }));
            if (pokemon) {
                listenForPokemonChanges(pokemon);
            }
        });
        $player.items.onChange((value, key) => {
            var _a, _b;
            if (player.id === this.spectatedPlayerId) {
                (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.itemsContainer) === null || _b === void 0 ? void 0 : _b.render(player.items);
            }
        });
        $player.synergies.onChange(() => {
            var _a, _b, _c, _d;
            if (player.id === this.spectatedPlayerId) {
                (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.showLightCell();
                (_d = (_c = this.gameScene) === null || _c === void 0 ? void 0 : _c.board) === null || _d === void 0 ? void 0 : _d.showBerryTrees();
            }
        });
    }
    initializeSpectactor(uid) {
        if (this.uid === uid) {
            this.spectate = true;
            if (this.room.state.players.size > 0) {
                this.initializeGame();
            }
        }
    }
    get gameScene() {
        var _a, _b;
        return (_b = (_a = this.game) === null || _a === void 0 ? void 0 : _a.scene) === null || _b === void 0 ? void 0 : _b.getScene("gameScene");
    }
    get spectatedPlayerId() {
        return stores_1.default.getState().game.currentPlayerId;
    }
    get simulationId() {
        var _a;
        return ((_a = this.simulation) === null || _a === void 0 ? void 0 : _a.id) ? this.simulation.id : "";
    }
    handleWeatherChange(simulation, value) {
        var _a;
        if (this.gameScene && simulation.id === ((_a = this.player) === null || _a === void 0 ? void 0 : _a.simulationId)) {
            if (this.gameScene.weatherManager) {
                this.gameScene.weatherManager.clearWeather();
                if (value === Weather_1.Weather.RAIN) {
                    this.gameScene.weatherManager.addRain();
                }
                else if (value === Weather_1.Weather.SUN) {
                    this.gameScene.weatherManager.addSun();
                }
                else if (value === Weather_1.Weather.SANDSTORM) {
                    this.gameScene.weatherManager.addSandstorm();
                }
                else if (value === Weather_1.Weather.SNOW) {
                    this.gameScene.weatherManager.addSnow();
                }
                else if (value === Weather_1.Weather.NIGHT) {
                    this.gameScene.weatherManager.addNight();
                }
                else if (value === Weather_1.Weather.BLOODMOON) {
                    this.gameScene.weatherManager.addBloodMoon();
                }
                else if (value === Weather_1.Weather.WINDY) {
                    this.gameScene.weatherManager.addWind();
                }
                else if (value === Weather_1.Weather.STORM) {
                    this.gameScene.weatherManager.addStorm();
                }
                else if (value === Weather_1.Weather.MISTY) {
                    this.gameScene.weatherManager.addMist();
                }
                else if (value === Weather_1.Weather.SMOG) {
                    this.gameScene.weatherManager.addSmog();
                }
            }
        }
    }
    handleDisplayHeal(message) {
        var _a, _b;
        (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.displayHeal(message.x, message.y, message.amount, message.type, message.index, message.id);
    }
    handleDisplayDamage(message) {
        var _a, _b;
        if ((0, preferences_1.preference)("showDamageNumbers")) {
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.displayDamage(message.x, message.y, message.amount, message.type, message.index, message.id);
        }
    }
    handleDisplayAbility(message) {
        var _a, _b;
        (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.displayAbility(message.id, message.skill, message.orientation, message.positionX, message.positionY, message.targetX, message.targetY, message.delay);
    }
    handleBoardPokemonAdd(player, pokemon) {
        var _a, _b, _c;
        const board = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board;
        if (board &&
            player.id === this.spectatedPlayerId &&
            (board.mode === board_manager_1.BoardMode.PICK || pokemon.positionY === 0)) {
            const pokemonUI = (_c = (_b = this.gameScene) === null || _b === void 0 ? void 0 : _b.board) === null || _c === void 0 ? void 0 : _c.addPokemonSprite(pokemon);
            if (pokemonUI && pokemon.action === Game_1.PokemonActionState.FISH) {
                pokemonUI.fishingAnimation();
            }
            else if (pokemonUI && pokemon.stars > 1) {
                pokemonUI.evolutionAnimation();
                (0, audio_1.playSound)(pokemon.stars === 2 ? audio_1.SOUNDS.EVOLUTION_T2 : audio_1.SOUNDS.EVOLUTION_T3);
            }
            else if (pokemonUI && pokemon.rarity === Game_1.Rarity.HATCH) {
                pokemonUI.hatchAnimation();
            }
            else if (pokemonUI) {
                pokemonUI.spawnAnimation();
            }
        }
    }
    handleDragDropFailed(message) {
        var _a, _b, _c;
        const gameScene = this.gameScene;
        if ((gameScene === null || gameScene === void 0 ? void 0 : gameScene.lastDragDropPokemon) && message.updateBoard) {
            const tg = gameScene.lastDragDropPokemon;
            const coordinates = (0, utils_1.transformCoordinate)(tg.positionX, tg.positionY);
            tg.x = coordinates[0];
            tg.y = coordinates[1];
        }
        if (message.updateItems && gameScene && this.player) {
            (_a = gameScene.itemsContainer) === null || _a === void 0 ? void 0 : _a.render(this.player.items);
        }
        if (message.text && message.pokemonId) {
            const pokemon = (_b = this.player) === null || _b === void 0 ? void 0 : _b.board.get(message.pokemonId);
            if (pokemon) {
                const [x, y] = (0, utils_1.transformCoordinate)(pokemon.positionX, pokemon.positionY);
                (_c = gameScene === null || gameScene === void 0 ? void 0 : gameScene.board) === null || _c === void 0 ? void 0 : _c.displayText(x, y, (0, i18next_1.t)(message.text));
            }
        }
    }
    setPlayer(player) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.player = player;
        if (this.room.state.phase !== Game_1.GamePhaseState.TOWN) {
            (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.setMap(player.map);
        }
        (_c = (_b = this.gameScene) === null || _b === void 0 ? void 0 : _b.battle) === null || _c === void 0 ? void 0 : _c.setPlayer(player);
        (_e = (_d = this.gameScene) === null || _d === void 0 ? void 0 : _d.board) === null || _e === void 0 ? void 0 : _e.setPlayer(player);
        (_g = (_f = this.gameScene) === null || _f === void 0 ? void 0 : _f.itemsContainer) === null || _g === void 0 ? void 0 : _g.setPlayer(player);
        stores_1.default.dispatch((0, GameStore_1.setPlayer)(player));
    }
    setSimulation(simulation) {
        var _a, _b;
        this.simulation = simulation;
        stores_1.default.dispatch((0, GameStore_1.setSimulation)(simulation));
        if ((_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) {
            (_b = this.gameScene) === null || _b === void 0 ? void 0 : _b.battle.setSimulation(this.simulation);
        }
        this.handleWeatherChange(simulation, simulation.weather);
    }
    onDragDrop(event) {
        this.room.send(types_1.Transfer.DRAG_DROP, event.detail);
    }
    onDragDropCombine(event) {
        this.room.send(types_1.Transfer.DRAG_DROP_COMBINE, event.detail);
    }
    onDragDropItem(event) {
        this.room.send(types_1.Transfer.DRAG_DROP_ITEM, event.detail);
    }
}
exports.default = GameContainer;
//# sourceMappingURL=game-container.js.map