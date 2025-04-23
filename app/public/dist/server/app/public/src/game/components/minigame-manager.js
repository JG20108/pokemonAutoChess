"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = require("i18next");
const types_1 = require("../../../../types");
const Game_1 = require("../../../../types/enum/Game");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const logger_1 = require("../../../../utils/logger");
const number_1 = require("../../../../utils/number");
const utils_1 = require("../../pages/utils/utils");
const floating_item_container_1 = require("./floating-item-container");
const pokemon_avatar_1 = __importDefault(require("./pokemon-avatar"));
const pokemon_special_1 = __importDefault(require("./pokemon-special"));
const portal_1 = require("./portal");
const depths_1 = require("../depths");
const town_encounters_1 = require("../../../../core/town-encounters");
const game_dialog_1 = require("./game-dialog");
const avatar_1 = require("../../../../utils/avatar");
const Strings_1 = require("../../../../types/strings/Strings");
const SpecialGameRule_1 = require("../../../../types/enum/SpecialGameRule");
class MinigameManager {
    constructor(scene, animationManager, uid, avatars, items) {
        var _a;
        this.villagers = [];
        this.encounterDescription = null;
        this.pokemons = new Map();
        this.items = new Map();
        this.portals = new Map();
        this.symbols = new Map();
        this.uid = uid;
        this.scene = scene;
        this.display = false;
        this.animationManager = animationManager;
        this.buildPokemons(avatars);
        this.buildItems(items);
        (_a = this.scene.room) === null || _a === void 0 ? void 0 : _a.onMessage(types_1.Transfer.NPC_DIALOG, (message) => this.onNpcDialog(message));
    }
    dispose() {
        var _a;
        this.villagers.forEach((villager) => {
            if (villager) {
                villager.destroy();
            }
        });
        this.villagers = [];
        (_a = this.encounterDescription) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    update() {
        const interpolatePosition = (min = 0.2, max = min, acceleration = 100) => (item) => {
            if (!item.data)
                return;
            const { serverX, serverY } = item.data.values;
            item.x = Phaser.Math.Linear(item.x, serverX, (0, number_1.clamp)(acceleration / Math.abs(serverX - item.x), min, max));
            item.y = Phaser.Math.Linear(item.y, serverY, (0, number_1.clamp)(acceleration / Math.abs(serverY - item.y), 0.05, 0.25));
        };
        this.pokemons.forEach(interpolatePosition(0.2));
        this.items.forEach(interpolatePosition(0.05, 0.25, 100));
        this.portals.forEach(interpolatePosition(0.05, 0.25, 100));
        this.symbols.forEach(interpolatePosition(0.02, 0.25, 50));
    }
    buildPokemons(avatars) {
        avatars.forEach((pkm) => {
            this.addPokemon(pkm);
        });
    }
    buildItems(items) {
        items.forEach((item) => {
            this.addItem(item);
        });
    }
    getVector(x, y) {
        const avatar = this.pokemons.get(this.uid);
        if (avatar) {
            return {
                x: x - avatar.x,
                y: y - avatar.y
            };
        }
        else {
            return { x: 0, y: 0 };
        }
    }
    addItem(item) {
        const it = new floating_item_container_1.FloatingItemContainer(this, item.id, (0, utils_1.transformMiniGameXCoordinate)(item.x), (0, utils_1.transformMiniGameYCoordinate)(item.y), item.name);
        this.items.set(it.id, it);
    }
    removeItem(itemToRemove) {
        const itemUI = this.items.get(itemToRemove.id);
        if (itemUI) {
            itemUI.destroy();
        }
        this.items.delete(itemToRemove.id);
    }
    changeItem(item, field, value) {
        const itemUI = this.items.get(item.id);
        const coordinate = typeof value === "number" ? value : Number.parseFloat(value);
        if (itemUI) {
            switch (field) {
                case "x":
                    itemUI.setData("serverX", (0, utils_1.transformMiniGameXCoordinate)(coordinate));
                    break;
                case "y":
                    itemUI.setData("serverY", (0, utils_1.transformMiniGameYCoordinate)(coordinate));
                    break;
                case "avatarId":
                    itemUI.onGrab(value);
            }
        }
    }
    addPortal(portal) {
        const p = new portal_1.Portal(this.scene, portal.id, (0, utils_1.transformMiniGameXCoordinate)(portal.x), (0, utils_1.transformMiniGameYCoordinate)(portal.y));
        this.portals.set(p.id, p);
    }
    removePortal(portalToRemove) {
        const portalUI = this.portals.get(portalToRemove.id);
        if (portalUI) {
            portalUI.destroy();
        }
        this.portals.delete(portalToRemove.id);
    }
    changePortal(portal, field, value) {
        const portalUI = this.portals.get(portal.id);
        const coordinate = typeof value === "number" ? value : Number.parseFloat(value);
        if (portalUI) {
            switch (field) {
                case "x":
                    portalUI.setData("serverX", (0, utils_1.transformMiniGameXCoordinate)(coordinate));
                    break;
                case "y":
                    portalUI.setData("serverY", (0, utils_1.transformMiniGameYCoordinate)(coordinate));
                    break;
                case "avatarId":
                    if (value != "" && typeof value === "string") {
                        const avatar = this.pokemons.get(value);
                        this.symbols.forEach((symbol) => {
                            if (symbol.getData("portalId") === portal.id) {
                                this.removeSymbol(symbol);
                            }
                        });
                        this.scene.tweens.add({
                            targets: [portalUI, avatar],
                            x: portalUI.x,
                            y: portalUI.y,
                            scale: 0,
                            duration: 800,
                            ease: Phaser.Math.Easing.Sine.In
                        });
                    }
            }
        }
    }
    addSymbol(symbol) {
        const s = new portal_1.SynergySymbol(this.scene, symbol.id, (0, utils_1.transformMiniGameXCoordinate)(symbol.x), (0, utils_1.transformMiniGameYCoordinate)(symbol.y), symbol.synergy);
        this.symbols.set(s.id, s);
    }
    removeSymbol(symbolToRemove) {
        const symbolUI = this.symbols.get(symbolToRemove.id);
        if (symbolUI) {
            symbolUI.destroy();
        }
        if (this.symbols.has(symbolToRemove.id)) {
            this.symbols.delete(symbolToRemove.id);
        }
    }
    changeSymbol(symbol, field, value) {
        const symbolUI = this.symbols.get(symbol.id);
        const coordinate = typeof value === "number" ? value : Number.parseFloat(value);
        if (symbolUI) {
            switch (field) {
                case "x":
                    symbolUI.setData("serverX", (0, utils_1.transformMiniGameXCoordinate)(coordinate));
                    break;
                case "y":
                    symbolUI.setData("serverY", (0, utils_1.transformMiniGameYCoordinate)(coordinate));
                    break;
                case "portalId":
                    symbolUI.setData("portalId", value);
                    break;
            }
        }
    }
    addPokemon(pokemon) {
        const pokemonUI = new pokemon_avatar_1.default(this.scene, (0, utils_1.transformMiniGameXCoordinate)(pokemon.x), (0, utils_1.transformMiniGameYCoordinate)(pokemon.y), pokemon, pokemon.id);
        if (pokemonUI.isCurrentPlayerAvatar) {
            const arrowIndicator = this.scene.add
                .sprite(pokemonUI.x + pokemonUI.width / 2 - 16, pokemonUI.y - 70, "arrowDown")
                .setDepth(depths_1.DEPTH.INDICATOR)
                .setScale(2);
            this.scene.tweens.add({
                targets: arrowIndicator,
                y: pokemonUI.y - 50,
                duration: 500,
                ease: Phaser.Math.Easing.Sine.InOut,
                loop: 5,
                yoyo: true,
                onComplete() {
                    arrowIndicator.destroy();
                }
            });
        }
        this.animationManager.animatePokemon(pokemonUI, pokemon.action, false);
        this.pokemons.set(pokemonUI.playerId, pokemonUI);
    }
    removePokemon(pokemonToRemove) {
        const pokemonUI = this.pokemons.get(pokemonToRemove.id);
        if (pokemonUI) {
            pokemonUI.destroy();
        }
        this.pokemons.delete(pokemonToRemove.id);
    }
    changePokemon(pokemon, field, value) {
        const pokemonUI = this.pokemons.get(pokemon.id);
        if (pokemonUI) {
            switch (field) {
                case "orientation":
                    pokemonUI.orientation = value;
                    this.animationManager.animatePokemon(pokemonUI, pokemonUI.action, false);
                    break;
                case "action":
                    pokemonUI.action = value;
                    this.animationManager.animatePokemon(pokemonUI, value, false);
                    break;
                case "x":
                    pokemonUI.setData("serverX", (0, utils_1.transformMiniGameXCoordinate)(value));
                    break;
                case "y":
                    pokemonUI.setData("serverY", (0, utils_1.transformMiniGameYCoordinate)(value));
                    break;
                case "timer":
                    if (pokemonUI instanceof pokemon_avatar_1.default) {
                        pokemonUI.updateCircleTimer(value);
                    }
                    break;
            }
        }
        else {
            logger_1.logger.warn("cant find pokemon for id", pokemon.id);
        }
    }
    addKecleon() {
        this.villagers.push(new pokemon_special_1.default({
            scene: this.scene,
            x: 1000,
            y: 408,
            name: Pokemon_1.Pkm.KECLEON,
            orientation: Game_1.Orientation.DOWN,
            animation: Game_1.PokemonActionState.IDLE,
            dialog: (0, i18next_1.t)("npc_dialog.tell_price"),
            dialogTitle: (0, i18next_1.t)("npc_dialog.welcome")
        }));
    }
    addVillagers(encounter, podium) {
        var _a, _b, _c;
        const cx = 964, cy = 404;
        const kecleon = new pokemon_special_1.default({
            scene: this.scene,
            x: encounter === town_encounters_1.TownEncounters.KECLEON ? cx - 24 : 34 * 48,
            y: encounter === town_encounters_1.TownEncounters.KECLEON ? cy : 5 * 48 + 4,
            name: Pokemon_1.Pkm.KECLEON
        });
        const kecleonShiny = new pokemon_special_1.default({
            scene: this.scene,
            x: encounter === town_encounters_1.TownEncounters.KECLEON ? cx + 24 : 35 * 48,
            y: encounter === town_encounters_1.TownEncounters.KECLEON ? cy : 5 * 48 + 4,
            name: Pokemon_1.Pkm.KECLEON,
            shiny: true
        });
        const electivire = new pokemon_special_1.default({
            scene: this.scene,
            x: encounter === town_encounters_1.TownEncounters.ELECTIVIRE ? cx : 6.5 * 48,
            y: encounter === town_encounters_1.TownEncounters.ELECTIVIRE ? cy : 7.5 * 48,
            name: Pokemon_1.Pkm.ELECTIVIRE
        });
        const chansey = new pokemon_special_1.default({
            scene: this.scene,
            x: encounter === town_encounters_1.TownEncounters.CHANSEY ? cx : 2.5 * 48,
            y: encounter === town_encounters_1.TownEncounters.CHANSEY ? cy : 12 * 48,
            name: Pokemon_1.Pkm.CHANSEY
        });
        const kangaskhan = new pokemon_special_1.default({
            scene: this.scene,
            x: encounter === town_encounters_1.TownEncounters.KANGASKHAN ? cx : 41 * 48,
            y: encounter === town_encounters_1.TownEncounters.KANGASKHAN ? cy : 6 * 48,
            name: Pokemon_1.Pkm.KANGASKHAN
        });
        const xatu = new pokemon_special_1.default({
            scene: this.scene,
            x: encounter === town_encounters_1.TownEncounters.XATU ? cx : 6 * 48,
            y: encounter === town_encounters_1.TownEncounters.XATU ? cy : 21 * 48,
            name: Pokemon_1.Pkm.XATU
        });
        const duskull = new pokemon_special_1.default({
            scene: this.scene,
            x: encounter === town_encounters_1.TownEncounters.DUSKULL ? cx : 18 * 48,
            y: encounter === town_encounters_1.TownEncounters.DUSKULL ? cy : 21.5 * 48,
            name: Pokemon_1.Pkm.DUSKULL
        });
        const regirock = new pokemon_special_1.default({
            scene: this.scene,
            x: encounter === town_encounters_1.TownEncounters.REGIROCK ? cx : 24 * 48,
            y: encounter === town_encounters_1.TownEncounters.REGIROCK ? cy : 22 * 48,
            name: Pokemon_1.Pkm.REGIROCK
        });
        const marowak = new pokemon_special_1.default({
            scene: this.scene,
            x: encounter === town_encounters_1.TownEncounters.MAROWAK ? cx : 41 * 48,
            y: encounter === town_encounters_1.TownEncounters.MAROWAK ? cy : 12 * 48,
            name: Pokemon_1.Pkm.MAROWAK
        });
        const wobbuffet = new pokemon_special_1.default({
            scene: this.scene,
            x: encounter === town_encounters_1.TownEncounters.WOBBUFFET ? cx + 24 : 44.5 * 48,
            y: encounter === town_encounters_1.TownEncounters.WOBBUFFET ? cy : 18 * 48,
            name: Pokemon_1.Pkm.WOBBUFFET
        });
        const wynaut = new pokemon_special_1.default({
            scene: this.scene,
            x: encounter === town_encounters_1.TownEncounters.WOBBUFFET ? cx - 24 : 43.5 * 48,
            y: encounter === town_encounters_1.TownEncounters.WOBBUFFET ? cy : 18 * 48,
            name: Pokemon_1.Pkm.WYNAUT
        });
        const spinda = new pokemon_special_1.default({
            scene: this.scene,
            x: encounter === town_encounters_1.TownEncounters.SPINDA ? cx : 38 * 48,
            y: encounter === town_encounters_1.TownEncounters.SPINDA ? cy : 18 * 48,
            name: Pokemon_1.Pkm.SPINDA
        });
        const mareep = new pokemon_special_1.default({
            scene: this.scene,
            x: 46 * 48,
            y: 2.5 * 48,
            name: Pokemon_1.Pkm.MAREEP,
            orientation: Game_1.Orientation.DOWNLEFT,
            animation: Game_1.PokemonActionState.EAT
        });
        const munchlax = new pokemon_special_1.default({
            scene: this.scene,
            x: encounter === town_encounters_1.TownEncounters.MUNCHLAX ? cx : 34 * 48,
            y: encounter === town_encounters_1.TownEncounters.MUNCHLAX ? cy : 17 * 48,
            name: Pokemon_1.Pkm.MUNCHLAX,
            orientation: Game_1.Orientation.DOWNLEFT,
            animation: encounter === town_encounters_1.TownEncounters.MUNCHLAX ? Game_1.PokemonActionState.EAT : Game_1.PokemonActionState.SLEEP
        });
        const podiumPokemons = podium.map((p, rank) => {
            const { name, shiny } = (0, avatar_1.getPokemonCustomFromAvatar)(p.avatar);
            const champion = new pokemon_special_1.default({
                scene: this.scene,
                x: 6.5 * 48 + [0, -64, +64][rank],
                y: 12.5 * 48,
                name,
                shiny,
                orientation: Game_1.Orientation.DOWN,
                animation: Game_1.PokemonActionState.IDLE,
                dialog: p.name,
                dialogTitle: (0, Strings_1.getRankLabel)(rank + 1)
            });
            champion.sprite.setDepth(depths_1.DEPTH.POKEMON + (2 - rank));
            return champion;
        });
        this.villagers.push(kecleon, kecleonShiny, electivire, chansey, kangaskhan, xatu, duskull, regirock, marowak, mareep, wobbuffet, wynaut, spinda, munchlax, ...podiumPokemons);
        const specialGameRule = (_b = (_a = this.scene.room) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.specialGameRule;
        if (encounter) {
            const cost = specialGameRule === SpecialGameRule_1.SpecialGameRule.TOWN_FESTIVAL
                ? 0
                : town_encounters_1.TownEncounterSellPrice[encounter];
            this.showEncounterDescription((0, i18next_1.t)(`town_encounter_description.${encounter}`, { cost }));
        }
        else if (specialGameRule && ((_c = this.scene.room) === null || _c === void 0 ? void 0 : _c.state.stageLevel) === 0) {
            const smeargle = new pokemon_special_1.default({
                scene: this.scene,
                x: cx,
                y: cy,
                name: Pokemon_1.Pkm.SMEARGLE
            });
            this.villagers.push(smeargle);
            this.showEncounterDescription((0, i18next_1.t)(`scribble.${specialGameRule}`) +
                " - " +
                (0, i18next_1.t)(`scribble_description.${specialGameRule}`));
        }
    }
    showEmote(id, emote) {
        const pokemonAvatar = this.pokemons.get(id);
        if (pokemonAvatar) {
            pokemonAvatar.action = Game_1.PokemonActionState.EMOTE;
            this.animationManager.animatePokemon(pokemonAvatar, Game_1.PokemonActionState.EMOTE, false, false);
            pokemonAvatar.drawSpeechBubble(emote, false);
        }
    }
    onNpcDialog({ npc, dialog }) {
        var _a;
        const villager = this.villagers.find((pkm) => pkm.name === npc);
        if (villager) {
            if (dialog) {
                (_a = this.scene.board) === null || _a === void 0 ? void 0 : _a.displayText(villager.x, villager.y - 10, (0, i18next_1.t)(dialog));
            }
            else {
                villager.emoteAnimation();
            }
        }
    }
    showEncounterDescription(desc) {
        this.encounterDescription = new game_dialog_1.GameDialog(this.scene, desc, undefined, "town-encounter-description");
        this.encounterDescription
            .setOrigin(0, 0)
            .setPosition(15 * 48, 15 * 48)
            .removeInteractive();
        this.scene.add.existing(this.encounterDescription);
    }
    closeDetails() {
        for (const it of this.items.values()) {
            it.closeDetail();
        }
    }
}
exports.default = MinigameManager;
//# sourceMappingURL=minigame-manager.js.map