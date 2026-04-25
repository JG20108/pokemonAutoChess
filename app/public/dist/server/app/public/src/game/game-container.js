"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("@colyseus/sdk");
const i18next_1 = require("i18next");
const phaser_1 = __importDefault(require("phaser"));
const moveto_plugin_js_1 = __importDefault(require("phaser3-rex-plugins/plugins/moveto-plugin.js"));
const outlinepipeline_plugin_js_1 = __importDefault(require("phaser3-rex-plugins/plugins/outlinepipeline-plugin.js"));
const react_1 = __importDefault(require("react"));
const react_toastify_1 = require("react-toastify");
const config_1 = require("../../../config");
const flower_pots_1 = require("../../../core/flower-pots");
const types_1 = require("../../../types");
const Effect_1 = require("../../../types/enum/Effect");
const Game_1 = require("../../../types/enum/Game");
const Weather_1 = require("../../../types/enum/Weather");
const logger_1 = require("../../../utils/logger");
const number_1 = require("../../../utils/number");
const schemas_1 = require("../../../utils/schemas");
const game_pokemon_portrait_1 = require("../pages/component/game/game-pokemon-portrait");
const audio_1 = require("../pages/utils/audio");
const utils_1 = require("../pages/utils/utils");
const preferences_1 = require("../preferences");
const stores_1 = __importDefault(require("../stores"));
const GameStore_1 = require("../stores/GameStore");
const abilities_animations_1 = require("./components/abilities-animations");
const board_manager_1 = require("./components/board-manager");
const depths_1 = require("./depths");
const game_scene_1 = __importDefault(require("./scenes/game-scene"));
class GameContainer {
    constructor(div, uid, room) {
        this.room = room;
        this.$ = (0, sdk_1.getStateCallbacks)(room);
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
        for (const team of [$simulation.blueTeam, $simulation.redTeam]) {
            team.onAdd((p, key) => this.initializePokemon(p, simulation, team === $simulation.blueTeam
                ? simulation.bluePlayerId
                : simulation.redPlayerId));
            team.onRemove((pokemon, key) => {
                var _a, _b;
                (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.removePokemon(simulation.id, pokemon);
            });
        }
        $simulation.listen("started", (value, previousValue) => {
            var _a, _b, _c, _d, _e, _f;
            if (((_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.player.simulationId) === simulation.id &&
                value === true &&
                value !== previousValue) {
                (_d = (_c = this.gameScene) === null || _c === void 0 ? void 0 : _c.board) === null || _d === void 0 ? void 0 : _d.removePokemonsOnBoard();
                (_f = (_e = this.gameScene) === null || _e === void 0 ? void 0 : _e.battle) === null || _f === void 0 ? void 0 : _f.onSimulationStart();
            }
        });
    }
    initializePokemon(pokemon, simulation, playerId) {
        var _a, _b;
        (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.addPokemonEntitySprite(simulation.id, pokemon, playerId);
        const $pokemon = this.$(pokemon);
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
            "hp",
            "maxHP",
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
            "name",
            "shiny",
            "skill",
            "stars",
            "types",
            "stacks",
            "stacksRequired"
        ];
        fields.forEach((field) => {
            $pokemon.listen(field, (value, previousValue) => {
                var _a, _b;
                (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.changePokemon(simulation.id, pokemon, field, value, previousValue);
            });
        });
        const statusFields = [
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
            "resurrection",
            "resurrecting",
            "runeProtect",
            "silence",
            "sleep",
            "spikeArmor",
            "wound",
            "enraged",
            "possessed",
            "locked",
            "blinded",
            "magicBounce",
            "reflect",
            "tree"
        ];
        statusFields.forEach((field) => {
            $pokemon.status.listen(field, (value, previousValue) => {
                var _a, _b;
                (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.changeStatus(simulation.id, pokemon, field, previousValue);
            });
        });
        $pokemon.items.onChange((value, key) => {
            var _a, _b;
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.updatePokemonItems(simulation.id, pokemon);
        });
        $pokemon.effects.onChange((value, key) => {
            var _a, _b, _c;
            if (pokemon.effects.has(Effect_1.EffectEnum.BALM_MUSHROOM)) {
                (_c = (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.pokemonSprites.get(pokemon.id)) === null || _c === void 0 ? void 0 : _c.addBalmMushroomEffect();
            }
        });
        const fieldsCount = [
            "crit",
            "dodgeCount",
            "ult",
            "fieldCount",
            "fightingBlockCount",
            "fairyCritCount",
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
            "muscleBandCount",
            "machRibbonCount"
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
            const fields = [
                "x",
                "y",
                "avatarId"
            ];
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
        const listenForPokemonChanges = (pokemon, fields = [
            "index",
            "positionX",
            "positionY",
            "action",
            "hp",
            "maxHP",
            "atk",
            "ap",
            "def",
            "speed",
            "luck",
            "shiny",
            "skill",
            "supercharged"
        ]) => {
            const $pokemon = this.$(pokemon);
            fields.forEach((field) => {
                $pokemon.listen(field, (value, previousValue) => {
                    var _a, _b;
                    if (field && player.id === this.playerIdSpectated) {
                        (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.changePokemon(pokemon, field, value, previousValue);
                    }
                });
            });
            $pokemon.items.onAdd((item) => {
                var _a, _b, _c, _d, _e;
                if (player.id === this.playerIdSpectated) {
                    (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.updatePokemonItems(player.id, pokemon, item);
                    if ((_c = config_1.ItemStats[item]) === null || _c === void 0 ? void 0 : _c.hasOwnProperty(Game_1.Stat.HP)) {
                        (_e = (_d = this.gameScene) === null || _d === void 0 ? void 0 : _d.board) === null || _e === void 0 ? void 0 : _e.changePokemon(pokemon, "hp", pokemon.hp + config_1.ItemStats[item][Game_1.Stat.HP], pokemon.hp);
                    }
                }
            });
            $pokemon.items.onRemove((item) => {
                var _a, _b, _c, _d, _e;
                if (player.id === this.playerIdSpectated) {
                    (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.updatePokemonItems(player.id, pokemon, item, true);
                    if ((_c = config_1.ItemStats[item]) === null || _c === void 0 ? void 0 : _c.hasOwnProperty(Game_1.Stat.HP)) {
                        (_e = (_d = this.gameScene) === null || _d === void 0 ? void 0 : _d.board) === null || _e === void 0 ? void 0 : _e.changePokemon(pokemon, "hp", pokemon.hp + config_1.ItemStats[item][Game_1.Stat.HP], pokemon.hp);
                    }
                }
            });
            $pokemon.dishes.onChange((value, key) => {
                var _a, _b;
                if (player.id === this.playerIdSpectated) {
                    (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.updatePokemonDishes(player.id, pokemon, (0, schemas_1.values)(pokemon.dishes));
                }
            });
        };
        const $player = this.$(player);
        $player.board.onAdd((pokemon, key) => {
            if (pokemon.stars > 1) {
                const i = react_1.default.createElement("img", {
                    src: (0, game_pokemon_portrait_1.getCachedPortrait)(pokemon.index, player.pokemonCustoms)
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
            if (player.id === this.playerIdSpectated) {
                (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.removePokemon(pokemon);
            }
        });
        $player.board.onChange((pokemon, key) => {
            stores_1.default.dispatch((0, GameStore_1.changePlayer)({ id: player.id, field: "board", value: player.board }));
        });
        $player.items.onChange((value, key) => {
            var _a, _b;
            if (player.id === this.playerIdSpectated) {
                (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.itemsContainer) === null || _b === void 0 ? void 0 : _b.render(player.items);
            }
        });
        $player.synergies.onChange(() => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (player.id === this.playerIdSpectated &&
                ((_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.mode) === board_manager_1.BoardMode.PICK) {
                (_d = (_c = this.gameScene) === null || _c === void 0 ? void 0 : _c.board) === null || _d === void 0 ? void 0 : _d.showLightCell();
                (_f = (_e = this.gameScene) === null || _e === void 0 ? void 0 : _e.board) === null || _f === void 0 ? void 0 : _f.renderBerryTrees();
                (_h = (_g = this.gameScene) === null || _g === void 0 ? void 0 : _g.board) === null || _h === void 0 ? void 0 : _h.renderFlowerPots();
            }
        });
        $player.berryTreesStages.onChange((value, key) => {
            var _a, _b;
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.renderBerryTrees();
        });
        $player.flowerPots.onAdd((pokemon, index) => {
            var _a, _b, _c;
            listenForPokemonChanges(pokemon, ["hp", "ap"]);
            const board = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board;
            if (board &&
                player.id === this.playerIdSpectated &&
                ((_c = (_b = this.gameScene) === null || _b === void 0 ? void 0 : _b.board) === null || _c === void 0 ? void 0 : _c.mode) !== board_manager_1.BoardMode.TOWN) {
                board.renderFlowerPots();
                const [x, y] = flower_pots_1.FLOWER_POTS_POSITIONS_BLUE[index];
                const evolutionAnim = this.gameScene.add.sprite(x, y - 24, "abilities", "EVOLUTION/000.png");
                evolutionAnim.once(phaser_1.default.Animations.Events.ANIMATION_COMPLETE, () => evolutionAnim.destroy());
                evolutionAnim.setScale(2).setDepth(depths_1.DEPTH.BOOST_BACK).play("EVOLUTION");
            }
        }, false);
        $player.flowerPots.onChange((pokemon, key) => {
            stores_1.default.dispatch((0, GameStore_1.changePlayer)({
                id: player.id,
                field: "flowerPots",
                value: player.flowerPots
            }));
            if (pokemon) {
                listenForPokemonChanges(pokemon, ["hp", "ap"]);
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
    get playerIdSpectated() {
        return stores_1.default.getState().game.playerIdSpectated;
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
                else if (value === Weather_1.Weather.ZENITH) {
                    this.gameScene.weatherManager.addSun();
                }
                else if (value === Weather_1.Weather.DROUGHT) {
                    this.gameScene.weatherManager.addDrought();
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
                else if (value === Weather_1.Weather.MURKY) {
                    this.gameScene.weatherManager.addMurky();
                }
            }
        }
    }
    handleDisplayHeal(message) {
        var _a, _b;
        if (document.hidden)
            return;
        if ((0, preferences_1.preference)("showDamageNumbers")) {
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.displayHeal(message);
        }
    }
    handleDisplayDamage(message) {
        var _a, _b;
        if (document.hidden)
            return;
        if ((0, preferences_1.preference)("showDamageNumbers")) {
            (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.displayDamage(message);
        }
    }
    handleDisplayAbility(message) {
        var _a, _b;
        if (document.hidden)
            return;
        (_b = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.battle) === null || _b === void 0 ? void 0 : _b.displayAbility(message);
    }
    handleBoardPokemonAdd(player, pokemon) {
        var _a, _b, _c;
        const board = (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.board;
        if (board &&
            player.id === this.playerIdSpectated &&
            (board.mode === board_manager_1.BoardMode.PICK || pokemon.positionY === 0)) {
            const pokemonUI = (_c = (_b = this.gameScene) === null || _b === void 0 ? void 0 : _b.board) === null || _c === void 0 ? void 0 : _c.addPokemonSprite(pokemon);
            if (!pokemonUI)
                return;
            if (pokemon.action === Game_1.PokemonActionState.FISH) {
                pokemonUI.fishingAnimation();
            }
            else if (pokemon.stars > 1) {
                pokemonUI.evolutionAnimation();
                (0, audio_1.playSound)(pokemon.stars === 2 ? audio_1.SOUNDS.EVOLUTION_T2 : audio_1.SOUNDS.EVOLUTION_T3);
            }
            else if (pokemon.rarity === Game_1.Rarity.HATCH) {
                pokemonUI.hatchAnimation();
            }
            else {
                pokemonUI.spawnAnimation();
            }
        }
    }
    handleDragDropCancel(message) {
        var _a, _b, _c, _d;
        const gameScene = this.gameScene;
        if ((gameScene === null || gameScene === void 0 ? void 0 : gameScene.lastDragDropPokemon) && message.updateBoard) {
            const tg = gameScene.lastDragDropPokemon;
            const coordinates = (0, utils_1.transformBoardCoordinates)(tg.positionX, tg.positionY);
            tg.x = coordinates[0];
            tg.y = coordinates[1];
        }
        if (message.updateItems && gameScene && this.player) {
            (_a = gameScene.itemsContainer) === null || _a === void 0 ? void 0 : _a.render(this.player.items);
        }
        if (message.text && message.pokemonId) {
            const pokemon = (_c = (_b = this.gameScene) === null || _b === void 0 ? void 0 : _b.board) === null || _c === void 0 ? void 0 : _c.pokemons.get(message.pokemonId);
            if (pokemon) {
                (_d = gameScene === null || gameScene === void 0 ? void 0 : gameScene.board) === null || _d === void 0 ? void 0 : _d.displayText(pokemon.x, pokemon.y, (0, i18next_1.t)(message.text), true);
            }
        }
    }
    setPlayer(player) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.player = player;
        if (this.room.state.phase !== Game_1.GamePhaseState.TOWN) {
            (_a = this.gameScene) === null || _a === void 0 ? void 0 : _a.setMap(player.map);
        }
        this.gameScene && (0, abilities_animations_1.clearAbilityAnimations)(this.gameScene);
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