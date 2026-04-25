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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnOverwriteBoardCommand = exports.OnUpdatePhaseCommand = exports.OnUpdateCommand = exports.OnJoinCommand = exports.OnPickBerryCommand = exports.OnLevelUpCommand = exports.OnSpectateCommand = exports.OnLockCommand = exports.OnShopRerollCommand = exports.OnSellPokemonCommand = exports.OnDragDropItemCommand = exports.OnDragDropCombineCommand = exports.OnSwitchBenchAndBoardCommand = exports.OnDragDropPokemonCommand = exports.OnPokemonCatchCommand = exports.OnRemoveFromShopCommand = exports.OnBuyPokemonCommand = void 0;
const command_1 = require("@colyseus/command");
const schema_1 = require("@colyseus/schema");
const colyseus_1 = require("colyseus");
const config_1 = require("../../config");
const abilities_1 = require("../../core/abilities/abilities");
const effect_1 = require("../../core/effects/effect");
const items_1 = require("../../core/effects/items");
const passives_1 = require("../../core/effects/passives");
const eggs_1 = require("../../core/eggs");
const evolution_rules_1 = require("../../core/evolution-rules");
const flower_pots_1 = require("../../core/flower-pots");
const matchmaking_1 = require("../../core/matchmaking");
const pokemon_entity_1 = require("../../core/pokemon-entity");
const simulation_1 = __importDefault(require("../../core/simulation"));
const experience_manager_1 = require("../../models/colyseus-models/experience-manager");
const player_choice_1 = require("../../models/colyseus-models/player-choice");
const pokemon_1 = require("../../models/colyseus-models/pokemon");
const synergies_1 = require("../../models/colyseus-models/synergies");
const user_metadata_1 = __importDefault(require("../../models/mongo-models/user-metadata"));
const pokemon_factory_1 = __importStar(require("../../models/pokemon-factory"));
const pve_stages_1 = require("../../models/pve-stages");
const shop_1 = require("../../models/shop");
const titles_1 = require("../../models/titles");
const types_1 = require("../../types");
const Dungeon_1 = require("../../types/enum/Dungeon");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const Pokemon_1 = require("../../types/enum/Pokemon");
const SpecialGameRule_1 = require("../../types/enum/SpecialGameRule");
const Synergy_1 = require("../../types/enum/Synergy");
const TownEncounter_1 = require("../../types/enum/TownEncounter");
const Wanderer_1 = require("../../types/enum/Wanderer");
const array_1 = require("../../utils/array");
const avatar_1 = require("../../utils/avatar");
const board_1 = require("../../utils/board");
const function_1 = require("../../utils/function");
const logger_1 = require("../../utils/logger");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const weather_1 = require("../../utils/weather");
class OnBuyPokemonCommand extends command_1.Command {
    execute({ playerId, index }) {
        if (playerId === undefined ||
            index === undefined ||
            !this.state.players.has(playerId))
            return;
        const player = this.state.players.get(playerId);
        const name = player === null || player === void 0 ? void 0 : player.shop[index];
        if (!player || !player.alive || !name || name === Pokemon_1.Pkm.DEFAULT)
            return;
        const pokemon = pokemon_factory_1.default.createPokemonFromName(name, player);
        const isEvolution = pokemon.evolutionRule &&
            pokemon.evolutionRule instanceof evolution_rules_1.CountEvolutionRule &&
            pokemon.evolutionRule.canEvolveIfGettingOne(pokemon, player);
        const cost = (0, shop_1.getBuyPrice)(name, this.state.specialGameRule);
        const freeSpaceOnBench = (0, board_1.getFreeSpaceOnBench)(player.board);
        const hasSpaceOnBench = freeSpaceOnBench > 0 || isEvolution;
        const canBuy = player.money >= cost && hasSpaceOnBench;
        if (!canBuy)
            return;
        player.money -= cost;
        const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
        pokemon.positionX = x !== null ? x : -1;
        pokemon.positionY = 0;
        player.board.set(pokemon.id, pokemon);
        pokemon.onAcquired(player);
        if (pokemon.passive === Passive_1.Passive.UNOWN &&
            (player.effects.has(Effect_1.EffectEnum.TRANSCENDENCE) ||
                player.shopsSinceLastUnownShop === 0) &&
            player.shopFreeRolls > 0 &&
            player.shop.every((p) => Pokemon_1.Unowns.includes(p) || p === Pokemon_1.Pkm.DEFAULT)) {
            this.state.shop.assignShop(player, true, this.state);
            player.shopFreeRolls -= 1;
        }
        else {
            player.shop[index] = Pokemon_1.Pkm.DEFAULT;
        }
        this.room.checkEvolutionsAfterPokemonAcquired(playerId);
    }
}
exports.OnBuyPokemonCommand = OnBuyPokemonCommand;
class OnRemoveFromShopCommand extends command_1.Command {
    execute({ playerId, index }) {
        if (playerId === undefined ||
            index === undefined ||
            !this.state.players.has(playerId))
            return;
        const player = this.state.players.get(playerId);
        const name = player === null || player === void 0 ? void 0 : player.shop[index];
        if (!player || !player.alive || !name || name === Pokemon_1.Pkm.DEFAULT)
            return;
        const cost = (0, shop_1.getBuyPrice)(name, this.state.specialGameRule);
        if (player.money >= cost) {
            player.shop[index] = Pokemon_1.Pkm.DEFAULT;
            player.shopLocked = true;
            this.state.shop.releasePokemon(name, player, this.state);
        }
    }
}
exports.OnRemoveFromShopCommand = OnRemoveFromShopCommand;
class OnPokemonCatchCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client, playerId, id }) {
            if (playerId === undefined || !this.state.players.has(playerId))
                return;
            const player = this.state.players.get(playerId);
            const wanderer = player === null || player === void 0 ? void 0 : player.wanderers.get(id);
            if (!player || !player.alive || !wanderer)
                return;
            player.wanderers.delete(id);
            if (wanderer.type === Wanderer_1.WandererType.UNOWN) {
                const unownIndex = Pokemon_1.PkmIndex[wanderer.pkm];
                if (client.auth) {
                    const shardsGained = wanderer.shiny
                        ? config_1.SHARDS_PER_SHINY_UNOWN_WANDERER
                        : config_1.SHARDS_PER_UNOWN_WANDERER;
                    const u = yield user_metadata_1.default.findOne({ uid: client.auth.uid });
                    if (u) {
                        const c = u.pokemonCollection.get(unownIndex);
                        if (c) {
                            c.dust += shardsGained;
                        }
                        else {
                            u.pokemonCollection.set(unownIndex, {
                                id: unownIndex,
                                unlocked: Buffer.alloc(5, 0),
                                dust: shardsGained,
                                selectedEmotion: types_1.Emotion.NORMAL,
                                selectedShiny: false,
                                played: 0
                            });
                        }
                        u.save();
                    }
                }
            }
            else if (wanderer.type === Wanderer_1.WandererType.CATCHABLE) {
                const pokemon = pokemon_factory_1.default.createPokemonFromName(wanderer.pkm, player);
                const freeSpaceOnBench = (0, board_1.getFreeSpaceOnBench)(player.board);
                const hasSpaceOnBench = freeSpaceOnBench > 0 ||
                    (pokemon.evolutionRule &&
                        pokemon.evolutionRule instanceof evolution_rules_1.CountEvolutionRule &&
                        pokemon.evolutionRule.canEvolveIfGettingOne(pokemon, player));
                if (hasSpaceOnBench) {
                    const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
                    pokemon.positionX = x !== null ? x : -1;
                    pokemon.positionY = 0;
                    player.board.set(pokemon.id, pokemon);
                    pokemon.onAcquired(player);
                    this.room.checkEvolutionsAfterPokemonAcquired(playerId);
                }
            }
            else if (wanderer.type === Wanderer_1.WandererType.OUTLAW) {
                player.addMoney(config_1.OUTLAW_GOLD_REWARD, true, null);
                (0, array_1.removeInArray)(player.items, Item_1.Item.WANTED_NOTICE);
            }
        });
    }
}
exports.OnPokemonCatchCommand = OnPokemonCatchCommand;
class OnDragDropPokemonCommand extends command_1.Command {
    execute({ client, detail }) {
        var _a;
        const commands = [];
        let success = false;
        let dittoReplaced = false;
        const message = {
            updateBoard: true,
            updateItems: true
        };
        const playerId = client.auth.uid;
        const player = this.state.players.get(playerId);
        if (player && player.alive) {
            message.updateItems = false;
            const pokemon = player.board.get(detail.id);
            const { x, y } = detail;
            if (pokemon &&
                x != null &&
                x >= 0 &&
                x < config_1.BOARD_WIDTH &&
                y != null &&
                y >= 0 &&
                y < config_1.BOARD_SIDE_HEIGHT) {
                const dropOnBench = y == 0;
                const dropFromBench = (0, board_1.isOnBench)(pokemon);
                if (pokemon.name === Pokemon_1.Pkm.DITTO &&
                    dropFromBench &&
                    !(0, board_1.isPositionEmpty)(x, y, player.board) &&
                    !(this.state.phase === Game_1.GamePhaseState.FIGHT && y > 0)) {
                    const pokemonToClone = player.getPokemonAt(x, y);
                    if (pokemonToClone && pokemonToClone.canBeCloned) {
                        dittoReplaced = true;
                        player.gameStats.dittosUsed += 1;
                        let pkm = (0, pokemon_factory_1.getPokemonBaseline)(pokemonToClone.name);
                        if (config_1.PkmsWithAltForms.includes(pkm)) {
                            pkm = (0, config_1.getAltFormForPlayer)(pkm, player);
                        }
                        const replaceDitto = pokemon_factory_1.default.createPokemonFromName(pkm, player);
                        replaceDitto.onAcquired(player);
                        pokemon.items.forEach((item) => {
                            player.items.push(item);
                        });
                        player.board.delete(detail.id);
                        const position = (0, board_1.getFirstAvailablePositionInBench)(player.board);
                        if (position !== null) {
                            replaceDitto.positionX = position;
                            replaceDitto.positionY = 0;
                            player.board.set(replaceDitto.id, replaceDitto);
                            success = true;
                            message.updateBoard = false;
                        }
                    }
                    else if (dropOnBench) {
                        this.swapPokemonPositions(player, pokemon, x, y);
                        success = true;
                    }
                }
                else if (pokemon.name === Pokemon_1.Pkm.MELTAN &&
                    ((_a = player.getPokemonAt(x, y)) === null || _a === void 0 ? void 0 : _a.name) === Pokemon_1.Pkm.MELMETAL) {
                    const melmetal = player.getPokemonAt(x, y);
                    melmetal.addMaxHP(50);
                    pokemon.items.forEach((item) => {
                        player.items.push(item);
                    });
                    player.board.delete(pokemon.id);
                    success = true;
                }
                else if (dropOnBench && dropFromBench) {
                    this.swapPokemonPositions(player, pokemon, x, y);
                    success = true;
                }
                else if (this.state.phase == Game_1.GamePhaseState.PICK) {
                    const teamSize = this.room.getTeamSize(player.board);
                    const isBoardFull = teamSize >=
                        (0, board_1.getMaxTeamSize)(player.experienceManager.level, this.room.state.specialGameRule);
                    const dropToEmptyPlace = (0, board_1.isPositionEmpty)(x, y, player.board);
                    const target = player.getPokemonAt(x, y);
                    if (dropOnBench) {
                        if (pokemon.canBeBenched &&
                            (!target || target.canBePlaced) &&
                            !(isBoardFull && (pokemon === null || pokemon === void 0 ? void 0 : pokemon.doesCountForTeamSize) === false)) {
                            this.swapPokemonPositions(player, pokemon, x, y);
                            success = true;
                        }
                    }
                    else if (pokemon.canBePlaced &&
                        (!target || target.canBeBenched) &&
                        !(dropFromBench &&
                            dropToEmptyPlace &&
                            isBoardFull &&
                            pokemon.doesCountForTeamSize) &&
                        !(dropFromBench &&
                            isBoardFull &&
                            (target === null || target === void 0 ? void 0 : target.doesCountForTeamSize) === false) &&
                        !(dropFromBench &&
                            this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.MONOTYPE &&
                            player.monotype !== undefined &&
                            !pokemon.types.has(player.monotype))) {
                        this.swapPokemonPositions(player, pokemon, x, y);
                        success = true;
                    }
                }
            }
            if (!success && client.send) {
                client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
            }
            if (dittoReplaced) {
                this.room.checkEvolutionsAfterPokemonAcquired(playerId);
            }
            if (success) {
                player.updateSynergies();
                player.boardSize = this.room.getTeamSize(player.board);
            }
        }
        if (commands.length > 0) {
            return commands;
        }
    }
    swapPokemonPositions(player, pokemon, x, y) {
        const pokemonToSwap = player.getPokemonAt(x, y);
        if (pokemonToSwap) {
            pokemonToSwap.positionX = pokemon.positionX;
            pokemonToSwap.positionY = pokemon.positionY;
            pokemonToSwap.onChangePosition(pokemon.positionX, pokemon.positionY, player, this.state);
        }
        pokemon.positionX = x;
        pokemon.positionY = y;
        pokemon.onChangePosition(x, y, player, this.state);
    }
}
exports.OnDragDropPokemonCommand = OnDragDropPokemonCommand;
class OnSwitchBenchAndBoardCommand extends command_1.Command {
    execute({ client, pokemonId }) {
        const playerId = client.auth.uid;
        const player = this.room.state.players.get(playerId);
        if (!player || !player.alive)
            return;
        const pokemon = player.board.get(pokemonId);
        if (!pokemon)
            return;
        if (this.state.phase !== Game_1.GamePhaseState.PICK)
            return;
        if (pokemon.positionY === 0) {
            const teamSize = this.room.getTeamSize(player.board);
            const isBoardFull = teamSize >=
                (0, board_1.getMaxTeamSize)(player.experienceManager.level, this.room.state.specialGameRule);
            const destination = (0, board_1.getFirstAvailablePositionOnBoard)(player.board, pokemon.range);
            if (pokemon.canBePlaced &&
                destination &&
                !(isBoardFull && pokemon.doesCountForTeamSize) &&
                !(this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.MONOTYPE &&
                    player.monotype !== undefined &&
                    !pokemon.types.has(player.monotype))) {
                const [x, y] = destination;
                pokemon.positionX = x;
                pokemon.positionY = y;
                pokemon.onChangePosition(x, y, player, this.state);
            }
        }
        else {
            const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
            if (x !== null) {
                pokemon.positionX = x;
                pokemon.positionY = 0;
                pokemon.onChangePosition(x, 0, player, this.state);
            }
        }
        player.updateSynergies();
        player.boardSize = this.room.getTeamSize(player.board);
    }
}
exports.OnSwitchBenchAndBoardCommand = OnSwitchBenchAndBoardCommand;
class OnDragDropCombineCommand extends command_1.Command {
    execute({ client, detail }) {
        const playerId = client.auth.uid;
        const message = {
            updateBoard: true,
            updateItems: true
        };
        const player = this.state.players.get(playerId);
        if (!player || !player.alive)
            return;
        message.updateBoard = false;
        message.updateItems = true;
        const itemA = detail.itemA;
        const itemB = detail.itemB;
        if (!player.items.includes(itemA) || !player.items.includes(itemB)) {
            client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
            return;
        }
        else if (itemA == itemB) {
            let count = 0;
            player.items.forEach((item) => {
                if (item == itemA) {
                    count++;
                }
            });
            if (count < 2) {
                client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
                return;
            }
        }
        let result = undefined;
        if (itemA === Item_1.Item.EXCHANGE_TICKET || itemB === Item_1.Item.EXCHANGE_TICKET) {
            const exchangedItem = itemA === Item_1.Item.EXCHANGE_TICKET ? itemB : itemA;
            if (Item_1.ItemComponentsNoScarf.includes(exchangedItem)) {
                result = (0, random_1.pickRandomIn)(Item_1.ItemComponentsNoFossilOrScarf.filter((i) => i !== exchangedItem));
            }
            else if (Item_1.SynergyStones.includes(exchangedItem)) {
                result = (0, random_1.pickRandomIn)(Item_1.SynergyStones.filter((i) => i !== exchangedItem));
            }
            else if (Item_1.CraftableItemsNoScarves.includes(exchangedItem)) {
                result = (0, random_1.pickRandomIn)(Item_1.CraftableNoStonesOrScarves.filter((i) => i !== exchangedItem));
            }
            else {
                client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
                return;
            }
        }
        else if (itemA === Item_1.Item.RECYCLE_TICKET || itemB === Item_1.Item.RECYCLE_TICKET) {
            const recycledItem = itemA === Item_1.Item.RECYCLE_TICKET ? itemB : itemA;
            const recipe = Item_1.ItemRecipe[recycledItem];
            if (!recipe) {
                client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
                return;
            }
            if (Item_1.Scarves.includes(recycledItem)) {
                (0, array_1.removeInArray)(player.scarvesItems, recycledItem);
            }
            (0, array_1.removeInArray)(player.items, itemA);
            (0, array_1.removeInArray)(player.items, itemB);
            player.items.push(recipe[0]);
            player.items.push(recipe[1]);
            player.updateSynergies();
            return;
        }
        else {
            const recipes = Object.entries(Item_1.ItemRecipe);
            for (const [key, value] of recipes) {
                if ((value[0] == itemA && value[1] == itemB) ||
                    (value[0] == itemB && value[1] == itemA)) {
                    result = key;
                    break;
                }
            }
        }
        if (!result) {
            client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
            return;
        }
        else {
            if (itemA === Item_1.Item.SILK_SCARF || itemB === Item_1.Item.SILK_SCARF) {
                const nbScarvesBasedOnNormalSynergy = (0, synergies_1.getSynergyStep)(player.synergies, Synergy_1.Synergy.NORMAL);
                if (player.scarvesItems.length < nbScarvesBasedOnNormalSynergy) {
                    player.scarvesItems.push(result);
                }
            }
            player.items.push(result);
            (0, array_1.removeInArray)(player.items, itemA);
            (0, array_1.removeInArray)(player.items, itemB);
        }
        player.updateSynergies();
    }
}
exports.OnDragDropCombineCommand = OnDragDropCombineCommand;
class OnDragDropItemCommand extends command_1.Command {
    execute({ client, detail }) {
        var _a, _b, _c, _d, _e;
        const playerId = client.auth.uid;
        const message = {
            updateBoard: true,
            updateItems: true
        };
        const player = this.state.players.get(playerId);
        if (!player || !player.alive)
            return;
        message.updateBoard = false;
        message.updateItems = true;
        const { zone, index, id: item } = detail;
        if (!player.items.includes(item)) {
            client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
            return;
        }
        let pokemon;
        if (zone === "flower-pot-zone") {
            const nbPots = (0, flower_pots_1.getFlowerPotsUnlocked)(player).length;
            if (index >= nbPots) {
                client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
                return;
            }
            pokemon = player.flowerPots[index];
            if (!pokemon || (0, array_1.isIn)(Item_1.Mulches, item) === false) {
                client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
                return;
            }
            if (item === Item_1.Item.RICH_MULCH) {
                if (pokemon.evolution === Pokemon_1.Pkm.DEFAULT) {
                    client.send(types_1.Transfer.DRAG_DROP_CANCEL, Object.assign(Object.assign({}, message), { text: "fully_grown", pokemonId: pokemon.id }));
                    return;
                }
                const potEvolution = pokemon_factory_1.default.createPokemonFromName(pokemon.evolution, player);
                potEvolution.action = Game_1.PokemonActionState.SLEEP;
                player.flowerPots[index] = potEvolution;
                (0, array_1.removeInArray)(player.items, item);
                client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
                return;
            }
        }
        else if (zone === "berry-tree-zone") {
            const grassLevel = (_a = player.synergies.get(Synergy_1.Synergy.GRASS)) !== null && _a !== void 0 ? _a : 0;
            const nbTrees = config_1.SynergyTriggers[Synergy_1.Synergy.GRASS].filter((n) => n <= grassLevel).length;
            if (item === Item_1.Item.RICH_MULCH && index < nbTrees) {
                player.berryTreesStages[index] = 3;
                (0, array_1.removeInArray)(player.items, item);
            }
            else if (item === Item_1.Item.AMAZE_MULCH && index < nbTrees) {
                player.berryTreesType[index] = (0, random_1.pickRandomIn)(config_1.GOLDEN_BERRY_TREE_TYPES.filter((b) => player.berryTreesType.includes(b) === false));
                player.berryTreesStages[index] = 3;
                (0, array_1.removeInArray)(player.items, item);
            }
            client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
            return;
        }
        else {
            const x = index % config_1.BOARD_WIDTH;
            const y = Math.floor(index / config_1.BOARD_WIDTH);
            pokemon = player.getPokemonAt(x, y);
        }
        if (!pokemon) {
            client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
            return;
        }
        const onItemDroppedEffects = [
            ...((_c = (_b = items_1.ItemEffects[item]) === null || _b === void 0 ? void 0 : _b.filter((effect) => effect instanceof effect_1.OnItemDroppedEffect)) !== null && _c !== void 0 ? _c : []),
            ...((_e = (_d = passives_1.PassiveEffects[pokemon.passive]) === null || _d === void 0 ? void 0 : _d.filter((effect) => effect instanceof effect_1.OnItemDroppedEffect)) !== null && _e !== void 0 ? _e : [])
        ];
        for (const onItemDroppedEffect of onItemDroppedEffects) {
            const shouldEquipItem = onItemDroppedEffect.apply({
                pokemon,
                player,
                item,
                room: this.room
            });
            if (shouldEquipItem === false) {
                client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
                return;
            }
        }
        if ((0, array_1.isIn)(Item_1.Dishes, item)) {
            if (pokemon.canEat && !pokemon.dishes.has(item)) {
                pokemon.dishes.add(item);
                pokemon.action = Game_1.PokemonActionState.EAT;
                (0, array_1.removeInArray)(player.items, item);
                client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
                pokemon.items.add(item);
                const pokemonEvolved = this.room.checkEvolutionsAfterItemAcquired(playerId, pokemon);
                if (pokemonEvolved)
                    pokemonEvolved.items.delete(item);
                else
                    pokemon.items.delete(item);
                return;
            }
            else {
                client.send(types_1.Transfer.DRAG_DROP_CANCEL, Object.assign(Object.assign({}, message), { text: pokemon.dishes.size > 0 ? "belly_full" : "not_hungry", pokemonId: pokemon.id }));
                return;
            }
        }
        if (Item_1.UnholdableItems.includes(item) && !Item_1.ConsumableItems.includes(item)) {
            client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
            return;
        }
        if (pokemon.canHoldItems === false &&
            !(Item_1.UnholdableItems.includes(item) && (0, array_1.isIn)(Item_1.ConsumableItems, item))) {
            client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
            return;
        }
        const isBasicItem = Item_1.ItemComponents.includes(item);
        const existingBasicItemToCombine = (0, schemas_1.values)(pokemon.items).find((i) => Item_1.ItemComponents.includes(i));
        if (pokemon.items.size >= 3 &&
            !(isBasicItem && existingBasicItemToCombine) &&
            Item_1.UnholdableItems.includes(item) === false) {
            client.send(types_1.Transfer.DRAG_DROP_CANCEL, Object.assign(Object.assign({}, message), { text: "full", pokemonId: pokemon.id }));
            return;
        }
        if (!isBasicItem && pokemon.items.has(item)) {
            client.send(types_1.Transfer.DRAG_DROP_CANCEL, Object.assign(Object.assign({}, message), { text: "already_held", pokemonId: pokemon.id }));
            return;
        }
        if (isBasicItem && existingBasicItemToCombine) {
            const recipe = Object.entries(Item_1.ItemRecipe).find(([_result, recipe]) => (recipe[0] === existingBasicItemToCombine && recipe[1] === item) ||
                (recipe[0] === item && recipe[1] === existingBasicItemToCombine));
            if (!recipe) {
                client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
                return;
            }
            const itemCombined = recipe[0];
            if (recipe[1].includes(Item_1.Item.SILK_SCARF)) {
                const nbScarvesBasedOnNormalSynergy = (0, synergies_1.getSynergyStep)(player.synergies, Synergy_1.Synergy.NORMAL);
                if (player.scarvesItems.length < nbScarvesBasedOnNormalSynergy) {
                    player.scarvesItems.push(itemCombined);
                }
            }
            pokemon.items.delete(existingBasicItemToCombine);
            (0, array_1.removeInArray)(player.items, item);
            if (pokemon.items.has(itemCombined)) {
                player.items.push(itemCombined);
            }
            else if (((0, array_1.isIn)(Item_1.SynergyStones, itemCombined) ||
                itemCombined === Item_1.Item.FRIEND_BOW) &&
                pokemon.types.has(Item_1.SynergyGivenByItem[itemCombined])) {
                player.items.push(itemCombined);
            }
            else {
                pokemon.addItem(itemCombined, player);
            }
        }
        else {
            if (((0, array_1.isIn)(Item_1.SynergyStones, item) || item === Item_1.Item.FRIEND_BOW) &&
                pokemon.types.has(Item_1.SynergyGivenByItem[item])) {
                client.send(types_1.Transfer.DRAG_DROP_CANCEL, message);
                return;
            }
            pokemon.addItem(item, player);
            (0, array_1.removeInArray)(player.items, item);
        }
        if (pokemon.items.has(Item_1.Item.SHINY_CHARM)) {
            pokemon.shiny = true;
        }
        this.room.checkEvolutionsAfterItemAcquired(playerId, pokemon);
        if (pokemon.items.has(item) && (0, array_1.isIn)(Item_1.UnholdableItems, item)) {
            pokemon.items.delete(item);
            if (!(0, array_1.isIn)(Item_1.ConsumableItems, item) && !(0, array_1.isIn)(Item_1.Mulches, item)) {
                player.items.push(item);
            }
        }
        player.updateSynergies();
    }
}
exports.OnDragDropItemCommand = OnDragDropItemCommand;
class OnSellPokemonCommand extends command_1.Command {
    execute({ client, pokemonId }) {
        const player = this.state.players.get(client.auth.uid);
        if (!player || !player.alive)
            return;
        const pokemon = player.board.get(pokemonId);
        if (!pokemon)
            return;
        if (!(0, board_1.isOnBench)(pokemon) && this.state.phase === Game_1.GamePhaseState.FIGHT) {
            return;
        }
        if ((0, pokemon_entity_1.canSell)(pokemon.name, this.state.specialGameRule) === false) {
            return;
        }
        player.board.delete(pokemonId);
        this.state.shop.releasePokemon(pokemon.name, player, this.state);
        const sellPrice = (0, shop_1.getSellPrice)(pokemon, this.state.specialGameRule);
        player.addMoney(sellPrice, false, null);
        pokemon.items.forEach((it) => {
            player.items.push(it);
        });
        player.updateSynergies();
        player.boardSize = this.room.getTeamSize(player.board);
        pokemon.afterSell(player);
    }
}
exports.OnSellPokemonCommand = OnSellPokemonCommand;
class OnShopRerollCommand extends command_1.Command {
    execute(id) {
        var _a;
        const player = this.state.players.get(id);
        if (!player || !player.alive)
            return;
        const rollCost = player.shopFreeRolls > 0 ? 0 : 1;
        const canRoll = ((_a = player === null || player === void 0 ? void 0 : player.money) !== null && _a !== void 0 ? _a : 0) >= rollCost;
        if (canRoll) {
            player.gameStats.rerollCount++;
            player.money -= rollCost;
            if (player.shopFreeRolls > 0) {
                player.shopFreeRolls--;
            }
            else {
                const repeatBallHolders = (0, schemas_1.values)(player.board).filter((p) => p.items.has(Item_1.Item.REPEAT_BALL));
                if (repeatBallHolders.length > 0)
                    player.shopFreeRolls += repeatBallHolders.length;
            }
            this.state.shop.assignShop(player, true, this.state);
        }
    }
}
exports.OnShopRerollCommand = OnShopRerollCommand;
class OnLockCommand extends command_1.Command {
    execute(id) {
        const player = this.state.players.get(id);
        if (!player || !player.alive)
            return;
        player.shopLocked = !player.shopLocked;
    }
}
exports.OnLockCommand = OnLockCommand;
class OnSpectateCommand extends command_1.Command {
    execute({ id, spectatedPlayerId }) {
        const player = this.state.players.get(id);
        if (!player)
            return;
        player.spectatedPlayerId = spectatedPlayerId;
    }
}
exports.OnSpectateCommand = OnSpectateCommand;
class OnLevelUpCommand extends command_1.Command {
    execute(id) {
        const player = this.state.players.get(id);
        if (!player || !player.alive)
            return;
        const cost = (0, experience_manager_1.getLevelUpCost)(this.state.specialGameRule);
        if (player.money >= cost && player.experienceManager.canLevelUp()) {
            player.addExperience(4);
            player.money -= cost;
        }
    }
}
exports.OnLevelUpCommand = OnLevelUpCommand;
class OnPickBerryCommand extends command_1.Command {
    execute({ playerId, berryIndex }) {
        const player = this.state.players.get(playerId);
        if (!player || !player.alive)
            return;
        if (player.berryTreesStages[berryIndex] >= 3) {
            player.berryTreesStages[berryIndex] = 0;
            const type = (0, synergies_1.getSynergyStep)(player.synergies, Synergy_1.Synergy.GRASS) === 4
                ? config_1.GOLDEN_BERRY_TREE_TYPES[berryIndex]
                : player.berryTreesType[berryIndex];
            player.items.push(type);
        }
    }
}
exports.OnPickBerryCommand = OnPickBerryCommand;
class OnJoinCommand extends command_1.Command {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ client }) {
            try {
                if (!client.userData)
                    client.userData = {};
                client.userData.spectatedPlayerId = client.auth.uid;
                client.view = new schema_1.StateView();
                const players = (0, schemas_1.values)(this.state.players);
                const connectedPlayer = players.find((p) => p.id === client.auth.uid);
                if (connectedPlayer) {
                    client.view.add(connectedPlayer);
                    if (this.state.players.size >= config_1.MAX_PLAYERS_PER_GAME) {
                        const humanPlayers = players.filter((p) => !p.isBot);
                        if (humanPlayers.length === 1) {
                            humanPlayers[0].titles.add(types_1.Title.LONE_WOLF);
                        }
                    }
                }
                else {
                    this.state.spectators.add(client.auth.uid);
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
}
exports.OnJoinCommand = OnJoinCommand;
class OnUpdateCommand extends command_1.Command {
    execute({ deltaTime }) {
        if (deltaTime) {
            this.state.time -= deltaTime;
            if (Math.round(this.state.time / 1000) != this.state.roundTime) {
                this.state.roundTime = Math.round(this.state.time / 1000);
            }
            if (this.state.time < 0) {
                this.state.updatePhaseNeeded = true;
            }
            else if (this.state.phase == Game_1.GamePhaseState.FIGHT) {
                let everySimulationFinished = true;
                this.state.simulations.forEach((simulation) => {
                    if (!simulation.finished) {
                        if (simulation.started)
                            simulation.update(deltaTime);
                        everySimulationFinished = false;
                    }
                });
                if (everySimulationFinished && !this.state.updatePhaseNeeded) {
                    this.state.time = 3000;
                    this.state.updatePhaseNeeded = true;
                }
            }
            else if (this.state.phase === Game_1.GamePhaseState.TOWN) {
                this.room.miniGame.update(deltaTime);
            }
            if (this.state.updatePhaseNeeded && this.state.time < 0) {
                return [new OnUpdatePhaseCommand()];
            }
        }
    }
}
exports.OnUpdateCommand = OnUpdateCommand;
class OnUpdatePhaseCommand extends command_1.Command {
    execute() {
        this.state.updatePhaseNeeded = false;
        if (this.state.phase == Game_1.GamePhaseState.TOWN) {
            this.stopTownPhase();
            if (this.state.stageLevel === 0) {
                this.state.stageLevel = 1;
            }
            this.initializePickingPhase();
        }
        else if (this.state.phase == Game_1.GamePhaseState.PICK) {
            this.stopPickingPhase();
            this.checkForLazyTeam();
            this.initializeFightingPhase();
        }
        else if (this.state.phase == Game_1.GamePhaseState.FIGHT) {
            this.stopFightingPhase();
            if ((config_1.ItemCarouselStages.includes(this.state.stageLevel) ||
                config_1.PortalCarouselStages.includes(this.state.stageLevel)) &&
                !this.state.gameFinished) {
                this.initializeTownPhase();
            }
            else {
                this.initializePickingPhase();
            }
        }
    }
    computeAchievements() {
        this.state.players.forEach((player) => {
            (0, titles_1.updatePlayerTitlesAfterFight)(player, this.state);
            player.updateGameStats(this.state);
        });
    }
    checkEndGame() {
        const playersAlive = (0, schemas_1.values)(this.state.players).filter((p) => p.alive);
        if (playersAlive.length <= 1) {
            this.state.gameFinished = true;
            const winner = playersAlive[0];
            if (winner) {
                const client = this.room.clients.find((cli) => cli.auth.uid === winner.id);
                if (client) {
                    client.send(types_1.Transfer.FINAL_RANK, 1);
                }
            }
            this.clock.setTimeout(() => {
                this.room.broadcast(types_1.Transfer.GAME_END);
                this.room.disconnect();
            }, 30 * 1000);
            return true;
        }
        return false;
    }
    computeIncome(isPVE, specialGameRule) {
        this.state.players.forEach((player) => {
            let income = 0;
            if (player.alive && !player.isBot) {
                const nbGimmighoulCoins = player.items.filter((item) => item === Item_1.Item.GIMMIGHOUL_COIN).length;
                const nbAmuletCoins = player.items.filter((item) => item === Item_1.Item.AMULET_COIN).length +
                    (0, schemas_1.values)(player.board).filter((pokemon) => pokemon.items.has(Item_1.Item.AMULET_COIN)).length;
                const nbRedScales = player.items.filter((item) => item === Item_1.Item.RED_SCALE).length;
                player.maxInterest = 5 + nbGimmighoulCoins - nbAmuletCoins;
                if (specialGameRule !== SpecialGameRule_1.SpecialGameRule.BLOOD_MONEY) {
                    player.interest = (0, number_1.max)(player.maxInterest)(Math.floor(player.money / 10));
                    income += player.interest;
                }
                if (!isPVE) {
                    income += (0, number_1.max)(5)(player.streak);
                }
                income += 5;
                income += nbRedScales * 5;
                player.addMoney(income, true, null);
                if (income > 0) {
                    const client = this.room.clients.find((cli) => cli.auth.uid === player.id);
                    client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.PLAYER_INCOME, income);
                }
                player.addExperience(2);
            }
        });
    }
    checkDeath() {
        this.state.players.forEach((player) => {
            if (player.life <= 0 && player.alive) {
                if (!player.isBot) {
                    player.shop.forEach((pkm) => {
                        this.state.shop.releasePokemon(pkm, player, this.state);
                    });
                    player.board.forEach((pokemon) => {
                        this.state.shop.releasePokemon(pokemon.name, player, this.state);
                    });
                }
                player.alive = false;
                player.spectatedPlayerId = player.id;
                const client = this.room.clients.find((cli) => cli.auth.uid === player.id);
                if (client) {
                    client.send(types_1.Transfer.FINAL_RANK, player.rank);
                }
            }
        });
    }
    initializePickingPhase() {
        var _a, _b;
        this.state.phase = Game_1.GamePhaseState.PICK;
        this.state.time =
            ((_a = config_1.StageDuration[this.state.stageLevel]) !== null && _a !== void 0 ? _a : config_1.StageDuration.DEFAULT) * 1000;
        if ([2, 4].includes(this.state.stageLevel) &&
            this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.TECHNOLOGIC) {
            this.state.players.forEach((player) => {
                const itemsSet = Item_1.Tools.filter((item) => player.artificialItems.includes(item) === false);
                player.choices.push(new player_choice_1.PlayerChoice({
                    type: "item",
                    items: (0, random_1.pickNRandomIn)(itemsSet, 3)
                }));
            });
        }
        if (config_1.AdditionalPicksStages.includes(this.state.stageLevel)) {
            const pool = this.state.stageLevel === config_1.AdditionalPicksStages[0]
                ? this.room.additionalUncommonPool
                : this.state.stageLevel === config_1.AdditionalPicksStages[1]
                    ? this.room.additionalRarePool
                    : this.room.additionalEpicPool;
            let remainingAddPicks = 8;
            this.state.players.forEach((player) => {
                var _a;
                if (!player.isBot) {
                    const items = (0, random_1.pickNRandomIn)(Item_1.ItemComponentsNoScarf, 3);
                    const pokemons = [];
                    for (let i = 0; i < 3; i++) {
                        const p = pool.pop();
                        if (p) {
                            const regionalVariants = ((_a = Pokemon_1.PkmRegionalVariants[p]) !== null && _a !== void 0 ? _a : []).filter((pkm) => new pokemon_1.PokemonClasses[pkm](pkm).isInRegion(player.map === "town" ? Dungeon_1.DungeonPMDO.AmpPlains : player.map));
                            if (regionalVariants.length > 0) {
                                pokemons.push((0, random_1.pickRandomIn)(regionalVariants));
                            }
                            else {
                                pokemons.push(p);
                            }
                        }
                    }
                    player.choices.push(new player_choice_1.PlayerChoice({
                        type: "addPick",
                        pokemons,
                        items
                    }));
                    remainingAddPicks--;
                }
            });
            (0, function_1.repeat)(remainingAddPicks)(() => {
                const p = pool.pop();
                if (p) {
                    this.state.shop.addAdditionalPokemon(p, this.state);
                }
            });
            this.state.players.forEach((p) => p.updateRegionalPool(this.state, false));
        }
        const commands = new Array();
        this.state.players.forEach((p) => this.updatePlayerBetweenStages(p));
        this.spawnWanderingPokemons();
        const pveStage = pve_stages_1.PVEStages[this.state.stageLevel];
        if (pveStage) {
            this.state.shinyEncounter =
                this.state.townEncounter === TownEncounter_1.TownEncounters.CELEBI ||
                    (this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.SHINY_HUNTER &&
                        pveStage.shinyChance !== undefined) ||
                    (0, random_1.chance)((_b = pveStage.shinyChance) !== null && _b !== void 0 ? _b : 0);
        }
        return commands;
    }
    updatePlayerBetweenStages(player) {
        const board = (0, schemas_1.values)(player.board);
        if ((0, synergies_1.getSynergyStep)(player.synergies, Synergy_1.Synergy.FIRE) === 4 &&
            player.items.includes(Item_1.Item.FIRE_SHARD) === false &&
            player.life > 2) {
            player.items.push(Item_1.Item.FIRE_SHARD);
        }
        if (player.items.includes(Item_1.Item.TREASURE_BOX) &&
            player.life <= config_1.TREASURE_BOX_LIFE_THRESHOLD) {
            (0, array_1.removeInArray)(player.items, Item_1.Item.TREASURE_BOX);
            let rewards = [];
            let rewardsIcons = undefined;
            switch (this.state.treasureBoxRewardGiven) {
                case "sweets":
                    rewardsIcons = [Item_1.Item.SWEETS];
                    rewards = (0, random_1.pickNRandomIn)(Item_1.Sweets, 5);
                    break;
                case "itemComponents":
                    rewards = (0, random_1.pickNRandomIn)(Item_1.ItemComponents, 4);
                    break;
                case "componentsAndTickets":
                    rewards = [
                        ...(0, random_1.pickNRandomIn)(Item_1.ItemComponents, 2),
                        Item_1.Item.RECYCLE_TICKET,
                        Item_1.Item.EXCHANGE_TICKET
                    ];
                    break;
                case "craftableItems":
                    rewards = (0, random_1.pickNRandomIn)(Item_1.CraftableNoStonesOrScarves, 2);
                    break;
                case "mushrooms":
                    rewardsIcons = [Item_1.Item.MUSHROOMS];
                    rewards = [Item_1.Item.TINY_MUSHROOM, Item_1.Item.BIG_MUSHROOM, Item_1.Item.BALM_MUSHROOM];
                    break;
                case "goldBow":
                    rewards = [Item_1.Item.GOLD_BOW];
                    break;
                case "gold":
                default:
                    rewards = [Item_1.Item.BIG_NUGGET];
                    break;
            }
            player.spawnWanderingPokemon({
                pkm: Pokemon_1.Pkm.XATU,
                shiny: false,
                type: Wanderer_1.WandererType.DIALOG,
                behavior: Wanderer_1.WandererBehavior.SPECTATE,
                data: (rewardsIcons !== null && rewardsIcons !== void 0 ? rewardsIcons : rewards).join(";"),
                delay: 3000
            });
            setTimeout(() => {
                if (rewards[0] === Item_1.Item.BIG_NUGGET) {
                    const moneyGained = 10;
                    player.addMoney(moneyGained, true, null);
                    const client = this.room.clients.find((cli) => cli.auth.uid === player.id);
                    client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.PLAYER_INCOME, moneyGained);
                }
                else {
                    player.items.push(...rewards);
                }
            }, 10000);
        }
        const nbTrees = (0, synergies_1.getSynergyStep)(player.synergies, Synergy_1.Synergy.GRASS);
        for (let i = 0; i < nbTrees; i++) {
            player.berryTreesStages[i] = (0, number_1.max)(3)(player.berryTreesStages[i] + 1);
        }
        if ((0, synergies_1.getSynergyStep)(player.synergies, Synergy_1.Synergy.GROUND) > 0) {
            player.board.forEach((pokemon, pokemonId) => {
                if (pokemon.types.has(Synergy_1.Synergy.GROUND) &&
                    !(0, board_1.isOnBench)(pokemon) &&
                    pokemon.items.has(Item_1.Item.CHEF_HAT) === false) {
                    const index = (pokemon.positionY - 1) * config_1.BOARD_WIDTH + pokemon.positionX;
                    const hasAlreadyReachedMaxDepth = player.groundHoles[index] === 5;
                    const isReachingMaxDepth = player.groundHoles[index] === 4;
                    if (!hasAlreadyReachedMaxDepth) {
                        let buriedItem = isReachingMaxDepth
                            ? player.buriedItems[index]
                            : null;
                        if (pokemon.items.has(Item_1.Item.EXPLORER_KIT) &&
                            isReachingMaxDepth &&
                            !buriedItem) {
                            if ((0, random_1.chance)(0.1, pokemon)) {
                                buriedItem = Item_1.Item.BIG_NUGGET;
                            }
                            else if ((0, random_1.chance)(0.5, pokemon)) {
                                buriedItem = Item_1.Item.NUGGET;
                            }
                            else {
                                buriedItem = Item_1.Item.COIN;
                            }
                        }
                        this.room.broadcast(types_1.Transfer.DIG, {
                            pokemonId,
                            buriedItem
                        });
                        this.room.clock.setTimeout(() => {
                            player.groundHoles[index] = (0, number_1.max)(5)(player.groundHoles[index] + 1);
                            if (pokemon.passive === Passive_1.Passive.ORTHWORM) {
                                pokemon.addMaxHP(5);
                            }
                            player.board.forEach((pokemon) => {
                                if (pokemon.evolutionRule instanceof evolution_rules_1.ConditionBasedEvolutionRule) {
                                    pokemon.evolutionRule.tryEvolve(pokemon, player, this.state.stageLevel);
                                }
                            });
                        }, 1000);
                        if (buriedItem) {
                            this.room.clock.setTimeout(() => {
                                var _a;
                                if (buriedItem === Item_1.Item.COIN) {
                                    player.addMoney(1, true, null);
                                }
                                else if (buriedItem === Item_1.Item.NUGGET) {
                                    player.addMoney(3, true, null);
                                }
                                else if (buriedItem === Item_1.Item.BIG_NUGGET) {
                                    player.addMoney(10, true, null);
                                }
                                else if (buriedItem === Item_1.Item.TREASURE_BOX) {
                                    player.items.push(...(0, random_1.pickNRandomIn)(Item_1.ItemComponents, 2));
                                }
                                else if ((0, array_1.isIn)(Item_1.SynergyGems, buriedItem)) {
                                    const type = Item_1.SynergyGivenByGem[buriedItem];
                                    player.bonusSynergies.set(type, ((_a = player.bonusSynergies.get(type)) !== null && _a !== void 0 ? _a : 0) + 1);
                                    player.items.push(buriedItem);
                                    player.updateSynergies();
                                }
                                else {
                                    player.items.push(buriedItem);
                                }
                            }, 2500);
                        }
                    }
                }
            });
        }
        const rottingItems = new Map([
            [Item_1.Item.SIRUPY_APPLE, Item_1.Item.LEFTOVERS],
            [Item_1.Item.SWEET_APPLE, Item_1.Item.SIRUPY_APPLE],
            [Item_1.Item.TART_APPLE, Item_1.Item.SWEET_APPLE]
        ]);
        for (const rottingItem of rottingItems.keys()) {
            while (player.items.includes(rottingItem)) {
                const index = player.items.indexOf(rottingItem);
                const newItem = rottingItems.get(rottingItem);
                if (index >= 0 && newItem) {
                    player.items.splice(index, 1);
                    player.items.push(newItem);
                }
            }
        }
        if ((this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.FIRST_PARTNER ||
            this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.PSEUDO_JOURNEY) &&
            this.state.stageLevel > 1 &&
            this.state.stageLevel < 10 &&
            player.firstPartner) {
            this.room.spawnOnBench(player, player.firstPartner, "spawn");
        }
        if (this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.GO_BIG_OR_GO_HOME) {
            board.forEach((pokemon) => {
                pokemon.addMaxHP(5);
            });
        }
        if (player.pokemonsTrainingInDojo.some((p) => p.returnStage === this.state.stageLevel)) {
            const returningPokemons = player.pokemonsTrainingInDojo.filter((p) => p.returnStage === this.state.stageLevel);
            returningPokemons.forEach((p) => {
                var _a, _b, _c, _d;
                const substitute = (0, schemas_1.values)(player.board).find((s) => s.name === Pokemon_1.Pkm.SUBSTITUTE && s.id === p.pokemon.id);
                if (!substitute)
                    return;
                p.pokemon.hp += (_a = [50, 100, 150][p.ticketLevel - 1]) !== null && _a !== void 0 ? _a : 0;
                p.pokemon.maxHP += (_b = [50, 100, 150][p.ticketLevel - 1]) !== null && _b !== void 0 ? _b : 0;
                p.pokemon.atk += (_c = [5, 10, 15][p.ticketLevel - 1]) !== null && _c !== void 0 ? _c : 0;
                p.pokemon.ap += (_d = [15, 30, 45][p.ticketLevel - 1]) !== null && _d !== void 0 ? _d : 0;
                p.pokemon.positionX = substitute.positionX;
                p.pokemon.positionY = substitute.positionY;
                player.board.delete(substitute.id);
                player.board.set(p.pokemon.id, p.pokemon);
                p.pokemon.types = new schema_1.SetSchema((0, schemas_1.values)(p.pokemon.types));
                p.pokemon.items = new schema_1.SetSchema();
                p.pokemon.addItems((0, schemas_1.values)(substitute.items), player);
                substitute.items.clear();
                this.room.checkEvolutionsAfterPokemonAcquired(player.id);
                player.pokemonsTrainingInDojo.splice(player.pokemonsTrainingInDojo.indexOf(p), 1);
            });
        }
        board.forEach((pokemon) => {
            var _a, _b, _c, _d;
            const passiveEffects = (_b = (_a = passives_1.PassiveEffects[pokemon.passive]) === null || _a === void 0 ? void 0 : _a.filter((p) => p instanceof effect_1.OnStageStartEffect)) !== null && _b !== void 0 ? _b : [];
            passiveEffects.forEach((effect) => effect.apply({ pokemon, player, room: this.room }));
            const itemEffects = (_d = (_c = (0, schemas_1.values)(pokemon.items)
                .flatMap((item) => items_1.ItemEffects[item])) === null || _c === void 0 ? void 0 : _c.filter((p) => p instanceof effect_1.OnStageStartEffect)) !== null && _d !== void 0 ? _d : [];
            itemEffects.forEach((effect) => effect.apply({ pokemon, player, room: this.room }));
            if (pokemon.evolutionRule instanceof evolution_rules_1.ConditionBasedEvolutionRule) {
                pokemon.evolutionRule.tryEvolve(pokemon, player, this.state.stageLevel);
            }
        });
        player.items.forEach((item) => {
            var _a, _b;
            const itemEffects = (_b = (_a = items_1.ItemEffects[item]) === null || _a === void 0 ? void 0 : _a.filter((p) => p instanceof effect_1.OnStageStartEffect)) !== null && _b !== void 0 ? _b : [];
            itemEffects.forEach((effect) => effect.apply({ player, room: this.room }));
        });
    }
    checkForLazyTeam() {
        this.state.players.forEach((player, key) => {
            if (player.isBot)
                return;
            const teamSize = this.room.getTeamSize(player.board);
            const maxTeamSize = (0, board_1.getMaxTeamSize)(player.experienceManager.level, this.state.specialGameRule);
            if (teamSize < maxTeamSize) {
                const numberOfPokemonsToMove = maxTeamSize - teamSize;
                for (let i = 0; i < numberOfPokemonsToMove; i++) {
                    const pokemon = (0, schemas_1.values)(player.board)
                        .filter((p) => (0, board_1.isOnBench)(p) && p.canBePlaced)
                        .sort((a, b) => a.positionX - b.positionX)[0];
                    if (pokemon) {
                        const coordinates = (0, board_1.getFirstAvailablePositionOnBoard)(player.board, pokemon.types.has(Synergy_1.Synergy.DARK) && pokemon.range === 1
                            ? 3
                            : pokemon.range);
                        if (coordinates) {
                            pokemon.positionX = coordinates[0];
                            pokemon.positionY = coordinates[1];
                            pokemon.onChangePosition(coordinates[0], coordinates[1], player, this.state);
                        }
                    }
                }
                if (numberOfPokemonsToMove > 0) {
                    player.updateSynergies();
                    player.boardSize = this.room.getTeamSize(player.board);
                }
            }
        });
    }
    stopPickingPhase() {
        this.state.players.forEach((player) => {
            player.choices
                .filter((choice) => choice.type === "addPick" ||
                choice.type === "item" ||
                choice.type === "unique")
                .forEach((choice) => {
                const randomPick = (0, random_1.randomBetween)(0, choice.pokemons
                    ? choice.pokemons.length - 1
                    : choice.items.length - 1);
                this.room.pickChoice(player.id, choice.id, randomPick, true);
            });
        });
    }
    stopFightingPhase() {
        const isPVE = this.state.stageLevel in pve_stages_1.PVEStages;
        this.state.simulations.forEach((simulation) => {
            if (!simulation.finished) {
                simulation.onFinish();
            }
            simulation.stop();
        });
        this.computeAchievements();
        this.checkDeath();
        const isGameFinished = this.checkEndGame();
        if (!isGameFinished) {
            this.state.stageLevel += 1;
            this.room.setMetadata({ stageLevel: this.state.stageLevel });
            this.computeIncome(isPVE, this.state.specialGameRule);
            this.state.players.forEach((player) => {
                var _a;
                player.wanderers.clear();
                if (player.alive) {
                    if (player.isBot) {
                        player.experienceManager.level = (0, number_1.max)(9)(Math.round(this.state.stageLevel / 2));
                    }
                    if (isPVE && ((_a = player.history.at(-1)) === null || _a === void 0 ? void 0 : _a.result) === Game_1.BattleResult.WIN) {
                        while (player.pveRewards.length > 0) {
                            const reward = player.pveRewards.pop();
                            player.items.push(reward);
                        }
                        if (player.pveRewardsPropositions.length > 0) {
                            player.choices.push(new player_choice_1.PlayerChoice({
                                type: "item",
                                items: (0, schemas_1.values)(player.pveRewardsPropositions)
                            }));
                            player.pveRewardsPropositions.clear();
                        }
                    }
                    this.spawnBabyEggs(player, isPVE);
                    player.board.forEach((pokemon, key) => {
                        if (pokemon.evolutionRule) {
                            if (pokemon.evolutionRule instanceof evolution_rules_1.HatchEvolutionRule) {
                                pokemon.evolutionRule.updateHatch(pokemon, player, this.state.stageLevel);
                            }
                        }
                        if (pokemon.passive === Passive_1.Passive.UNOWN && !(0, board_1.isOnBench)(pokemon)) {
                            player.board.delete(key);
                        }
                    });
                    player.updateSynergies();
                    if (!player.isBot) {
                        if (!player.shopLocked) {
                            if (player.shop.every((p) => Pokemon_1.Unowns.includes(p))) {
                                player.shopFreeRolls -= 1;
                            }
                            this.state.shop.assignShop(player, false, this.state);
                        }
                        else {
                            this.state.shop.refillShop(player, this.state);
                            player.shopLocked = false;
                        }
                    }
                }
            });
            this.state.botManager.updateBots();
        }
    }
    stopTownPhase() {
        this.room.miniGame.stop(this.room.state);
        this.state.players.forEach((player) => {
            player.wanderers.clear();
        });
    }
    initializeTownPhase() {
        this.state.phase = Game_1.GamePhaseState.TOWN;
        const nbPlayersAlive = (0, schemas_1.values)(this.state.players).filter((p) => p.alive).length;
        let minigamePhaseDuration = config_1.ITEM_CAROUSEL_BASE_DURATION;
        if (config_1.PortalCarouselStages.includes(this.state.stageLevel)) {
            minigamePhaseDuration = config_1.PORTAL_CAROUSEL_BASE_DURATION;
        }
        else if (this.state.stageLevel !== config_1.ItemCarouselStages[0]) {
            minigamePhaseDuration += nbPlayersAlive * 2000;
        }
        this.state.time = minigamePhaseDuration;
        this.room.miniGame.initialize(this.state, this.room);
        this.state.players.forEach((player) => {
            if (player.alive) {
                const itemsToSell = player.items.filter((item) => (0, array_1.isIn)(Item_1.ItemsSoldAtTown, item));
                let totalMoneyGained = 0;
                itemsToSell.forEach((item) => {
                    var _a, _b;
                    player.money += (_a = config_1.ItemSellPricesAtTown[item]) !== null && _a !== void 0 ? _a : 0;
                    totalMoneyGained += (_b = config_1.ItemSellPricesAtTown[item]) !== null && _b !== void 0 ? _b : 0;
                    (0, array_1.removeInArray)(player.items, item);
                });
                if (totalMoneyGained > 0) {
                    const client = this.room.clients.find((cli) => cli.auth.uid === player.id);
                    client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.PLAYER_INCOME, totalMoneyGained);
                }
            }
        });
    }
    initializeFightingPhase() {
        this.state.simulations.clear();
        this.state.phase = Game_1.GamePhaseState.FIGHT;
        this.state.time = config_1.FIGHTING_PHASE_DURATION;
        this.state.roundTime = Math.round(this.state.time / 1000);
        (0, colyseus_1.updateLobby)(this.room);
        this.state.players.forEach((player) => {
            if (player.alive) {
                player.registerPlayedPokemons();
            }
        });
        const pveStage = pve_stages_1.PVEStages[this.state.stageLevel];
        if (pveStage) {
            this.state.players.forEach((player) => {
                var _a, _b, _c, _d;
                if (player.alive) {
                    player.opponentId = "pve";
                    player.opponentName = pveStage.name;
                    player.opponentAvatar = (0, avatar_1.getAvatarString)(Pokemon_1.PkmIndex[pveStage.avatar], this.state.shinyEncounter, pveStage.emotion);
                    player.opponentTitle = "WILD";
                    player.team = Game_1.Team.BLUE_TEAM;
                    const rewards = (_b = (_a = pveStage.getRewards) === null || _a === void 0 ? void 0 : _a.call(pveStage, player, this.state.shinyEncounter)) !== null && _b !== void 0 ? _b : [];
                    (0, schemas_1.resetArraySchema)(player.pveRewards, rewards);
                    const rewardsPropositions = (_d = (_c = pveStage.getRewardsPropositions) === null || _c === void 0 ? void 0 : _c.call(pveStage, player, this.state.shinyEncounter)) !== null && _d !== void 0 ? _d : [];
                    (0, schemas_1.resetArraySchema)(player.pveRewardsPropositions, rewardsPropositions);
                    const pveBoard = pokemon_factory_1.default.makePveBoard(pveStage, this.state.shinyEncounter, this.state.townEncounter);
                    const weather = (0, weather_1.getWeather)(player, null, pveBoard);
                    const simulation = new simulation_1.default(crypto.randomUUID(), this.room, player, { id: "pve", board: pveBoard }, this.state.stageLevel, weather);
                    player.simulationId = simulation.id;
                    this.state.simulations.set(simulation.id, simulation);
                    simulation.start();
                }
            });
        }
        else {
            const matchups = (0, matchmaking_1.selectMatchups)(this.state);
            this.state.simulationPaused = true;
            matchups.forEach((matchup) => {
                var _a, _b, _c, _d;
                const { bluePlayer, redPlayer, ghost } = matchup;
                const weather = (0, weather_1.getWeather)(bluePlayer, redPlayer, redPlayer.board, ghost);
                const simulationId = crypto.randomUUID();
                bluePlayer.simulationId = simulationId;
                bluePlayer.team = Game_1.Team.BLUE_TEAM;
                bluePlayer.opponents.set(redPlayer.id, ((_a = bluePlayer.opponents.get(redPlayer.id)) !== null && _a !== void 0 ? _a : 0) + 1);
                bluePlayer.opponentId = redPlayer.id;
                bluePlayer.opponentName = matchup.ghost
                    ? `Ghost of ${redPlayer.name}`
                    : redPlayer.name;
                bluePlayer.opponentAvatar = redPlayer.avatar;
                bluePlayer.opponentTitle = (_b = redPlayer.title) !== null && _b !== void 0 ? _b : "";
                if (!matchup.ghost) {
                    redPlayer.simulationId = simulationId;
                    redPlayer.team = Game_1.Team.RED_TEAM;
                    redPlayer.opponents.set(bluePlayer.id, ((_c = redPlayer.opponents.get(bluePlayer.id)) !== null && _c !== void 0 ? _c : 0) + 1);
                    redPlayer.opponentId = bluePlayer.id;
                    redPlayer.opponentName = bluePlayer.name;
                    redPlayer.opponentAvatar = bluePlayer.avatar;
                    redPlayer.opponentTitle = (_d = bluePlayer.title) !== null && _d !== void 0 ? _d : "";
                }
                const simulation = new simulation_1.default(simulationId, this.room, bluePlayer, redPlayer, this.state.stageLevel, weather, matchup.ghost);
                this.state.simulations.set(simulation.id, simulation);
                setTimeout(() => {
                    this.state.simulationPaused = false;
                    simulation.start();
                }, 2500);
            });
        }
        if (this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.UNOWN_SPELL) {
            this.state.simulations.forEach((simulation) => {
                const unown = (0, random_1.pickRandomIn)(Pokemon_1.UnownsForScribble);
                [simulation.bluePlayer, simulation.redPlayer].forEach((player) => {
                    if (!player ||
                        (simulation.isGhostBattle && player === simulation.redPlayer))
                        return;
                    const wanderer = player.spawnWanderingPokemon({
                        pkm: unown,
                        shiny: false,
                        type: Wanderer_1.WandererType.UNOWN_SPELL,
                        behavior: Wanderer_1.WandererBehavior.SPECTATE
                    });
                    this.clock.setTimeout(() => {
                        player.wanderers.delete(wanderer.id);
                        if (simulation.finished)
                            return;
                        const caster = new pokemon_entity_1.PokemonEntity(pokemon_factory_1.default.createPokemonFromName(unown), 9, 2, player.team, simulation);
                        (0, abilities_1.castAbility)(caster.skill, caster, simulation.board, null, false);
                    }, 10000);
                });
            });
        }
    }
    spawnWanderingPokemons() {
        const isPVE = this.state.stageLevel in pve_stages_1.PVEStages;
        this.state.players.forEach((player) => {
            if (player.alive && !player.isBot) {
                const client = this.room.clients.find((cli) => cli.auth.uid === player.id);
                if (!client)
                    return;
                if ((0, random_1.chance)(config_1.UNOWN_ENCOUNTER_CHANCE)) {
                    player.spawnWanderingPokemon({
                        pkm: (0, random_1.pickRandomIn)(Pokemon_1.Unowns),
                        shiny: (0, random_1.chance)(config_1.SHINY_UNOWN_ENCOUNTER_CHANCE),
                        type: Wanderer_1.WandererType.UNOWN,
                        behavior: Wanderer_1.WandererBehavior.RUN_THROUGH,
                        delay: Math.round((5 + 15 * Math.random()) * 1000)
                    });
                }
                if (this.state.outlawStage != null) {
                    if (this.state.stageLevel === this.state.outlawStage) {
                        player.spawnWanderingPokemon({
                            pkm: Pokemon_1.Pkm.DROWZEE,
                            shiny: false,
                            type: Wanderer_1.WandererType.OUTLAW,
                            behavior: Wanderer_1.WandererBehavior.RUN_THROUGH,
                            delay: Math.round((5 + 15 * Math.random()) * 1000)
                        });
                    }
                    else if (this.state.stageLevel < this.state.outlawStage) {
                        const magnezoneChance = (0, random_1.chance)(this.state.stageLevel * 0.04);
                        if (magnezoneChance) {
                            player.spawnWanderingPokemon({
                                pkm: Pokemon_1.Pkm.MAGNEZONE,
                                shiny: false,
                                type: Wanderer_1.WandererType.DIALOG,
                                behavior: Wanderer_1.WandererBehavior.RUN_THROUGH,
                                delay: Math.round((5 + 15 * Math.random()) * 1000)
                            });
                        }
                        else {
                            for (let i = 0; i < (0, random_1.randomBetween)(1, 3); i++) {
                                player.spawnWanderingPokemon({
                                    pkm: Pokemon_1.Pkm.MAGNEMITE,
                                    shiny: false,
                                    type: Wanderer_1.WandererType.DIALOG,
                                    behavior: Wanderer_1.WandererBehavior.RUN_THROUGH,
                                    delay: Math.round((5 + 15 * Math.random()) * 1000)
                                });
                            }
                        }
                    }
                    else if (this.state.stageLevel > this.state.outlawStage) {
                        (0, array_1.removeInArray)(player.items, Item_1.Item.WANTED_NOTICE);
                    }
                }
                if (isPVE &&
                    this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.GOTTA_CATCH_EM_ALL) {
                    const nbPokemonsToSpawn = Math.ceil(this.state.stageLevel / 2);
                    for (let i = 0; i < nbPokemonsToSpawn; i++) {
                        const pkm = this.state.shop.pickPokemon(player, this.state, -1, true);
                        player.spawnWanderingPokemon({
                            pkm,
                            type: Wanderer_1.WandererType.CATCHABLE,
                            behavior: Wanderer_1.WandererBehavior.RUN_THROUGH,
                            delay: 4000 + i * 400
                        });
                    }
                }
            }
        });
    }
    spawnBabyEggs(player, isPVE) {
        var _a;
        const hasBabyActive = player.effects.has(Effect_1.EffectEnum.HATCHER) ||
            player.effects.has(Effect_1.EffectEnum.BREEDER) ||
            player.effects.has(Effect_1.EffectEnum.GOLDEN_EGGS);
        const hasLostLastBattle = ((_a = player.history.at(-1)) === null || _a === void 0 ? void 0 : _a.result) === Game_1.BattleResult.DEFEAT;
        const eggsOnBench = (0, schemas_1.values)(player.board).filter((p) => p.name === Pokemon_1.Pkm.EGG);
        const nbOfGoldenEggsOnBench = eggsOnBench.filter((p) => p.shiny).length;
        let nbEggsFound = 0;
        let goldenEggFound = false;
        if (hasLostLastBattle && hasBabyActive) {
            const EGG_CHANCE = 0.1;
            const GOLDEN_EGG_CHANCE = 0.05;
            const playerEggChanceStacked = player.eggChance;
            const playerGoldenEggChanceStacked = player.goldenEggChance;
            const babies = (0, schemas_1.values)(player.board).filter((p) => !(0, board_1.isOnBench)(p) && p.types.has(Synergy_1.Synergy.BABY));
            for (const baby of babies) {
                if (player.effects.has(Effect_1.EffectEnum.GOLDEN_EGGS) &&
                    nbOfGoldenEggsOnBench === 0 &&
                    (0, random_1.chance)(GOLDEN_EGG_CHANCE, baby)) {
                    nbEggsFound++;
                    goldenEggFound = true;
                }
                else if ((0, random_1.chance)(EGG_CHANCE, baby)) {
                    nbEggsFound++;
                }
                if (player.effects.has(Effect_1.EffectEnum.GOLDEN_EGGS) && !goldenEggFound) {
                    player.goldenEggChance += (0, number_1.max)(0.1)(Math.pow(GOLDEN_EGG_CHANCE, 1 - baby.luck / 200));
                }
                else if (player.effects.has(Effect_1.EffectEnum.HATCHER) &&
                    nbEggsFound === 0) {
                    player.eggChance += (0, number_1.max)(0.2)(Math.pow(EGG_CHANCE, 1 - baby.luck / 100));
                }
            }
            if (nbEggsFound === 0 &&
                (player.effects.has(Effect_1.EffectEnum.BREEDER) ||
                    player.effects.has(Effect_1.EffectEnum.GOLDEN_EGGS) ||
                    (0, random_1.chance)(playerEggChanceStacked))) {
                nbEggsFound = 1;
            }
            if (goldenEggFound === false &&
                player.effects.has(Effect_1.EffectEnum.GOLDEN_EGGS) &&
                nbOfGoldenEggsOnBench === 0 &&
                (0, random_1.chance)(playerGoldenEggChanceStacked)) {
                goldenEggFound = true;
            }
        }
        else if (!isPVE) {
            player.eggChance = 0;
            player.goldenEggChance = 0;
        }
        if (this.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.OMELETTE_COOK &&
            [2, 3, 4].includes(this.state.stageLevel)) {
            nbEggsFound = 1;
        }
        for (let i = 0; i < nbEggsFound; i++) {
            if ((0, board_1.getFreeSpaceOnBench)(player.board) === 0)
                continue;
            const isGoldenEgg = goldenEggFound && i === 0 && nbOfGoldenEggsOnBench === 0;
            (0, eggs_1.giveRandomEgg)(player, isGoldenEgg);
            if (player.effects.has(Effect_1.EffectEnum.HATCHER)) {
                player.eggChance = 0;
            }
            if (player.effects.has(Effect_1.EffectEnum.GOLDEN_EGGS) && isGoldenEgg) {
                player.goldenEggChance = 0;
            }
        }
    }
}
exports.OnUpdatePhaseCommand = OnUpdatePhaseCommand;
class OnOverwriteBoardCommand extends command_1.Command {
    execute({ playerId, board }) {
        const player = this.room.state.players.get(playerId);
        if (!player || player.role !== types_1.Role.ADMIN)
            return;
        player.board.clear();
        board.forEach((p) => {
            const pokemon = pokemon_factory_1.default.createPokemonFromName(p.name, p);
            pokemon.positionX = p.x;
            pokemon.positionY = p.y;
            p.items.forEach((item) => pokemon.items.add(item));
            player.board.set(pokemon.id, pokemon);
        });
        player.updateSynergies();
        player.boardSize = this.room.getTeamSize(player.board);
    }
}
exports.OnOverwriteBoardCommand = OnOverwriteBoardCommand;
//# sourceMappingURL=game-commands.js.map