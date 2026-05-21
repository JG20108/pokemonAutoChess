"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const config_1 = require("../config");
const synergies_1 = require("../models/colyseus-models/synergies");
const effects_1 = require("../models/effects");
const pokemon_factory_1 = __importDefault(require("../models/pokemon-factory"));
const precomputed_pokemon_data_1 = require("../models/precomputed/precomputed-pokemon-data");
const precomputed_types_1 = require("../models/precomputed/precomputed-types");
const types_1 = require("../types");
const Ability_1 = require("../types/enum/Ability");
const Effect_1 = require("../types/enum/Effect");
const Game_1 = require("../types/enum/Game");
const Item_1 = require("../types/enum/Item");
const Passive_1 = require("../types/enum/Passive");
const Pokemon_1 = require("../types/enum/Pokemon");
const Synergy_1 = require("../types/enum/Synergy");
const Weather_1 = require("../types/enum/Weather");
const array_1 = require("../utils/array");
const avatar_1 = require("../utils/avatar");
const board_1 = require("../utils/board");
const logger_1 = require("../utils/logger");
const number_1 = require("../utils/number");
const random_1 = require("../utils/random");
const schemas_1 = require("../utils/schemas");
const abilities_1 = require("./abilities/abilities");
const board_2 = require("./board");
const dishes_1 = require("./dishes");
const dps_1 = __importDefault(require("./dps"));
const effect_1 = require("./effects/effect");
const passives_1 = require("./effects/passives");
const synergies_2 = require("./effects/synergies");
const pokemon_entity_1 = require("./pokemon-entity");
const simulation_command_1 = require("./simulation-command");
class Simulation extends schema_1.Schema {
    constructor(id, room, bluePlayer, redPlayer, stageLevel, weather, isGhostBattle = false) {
        var _a;
        super();
        this.weather = Weather_1.Weather.NEUTRAL;
        this.winnerId = "";
        this.blueTeam = new schema_1.MapSchema();
        this.redTeam = new schema_1.MapSchema();
        this.blueDpsMeter = new schema_1.MapSchema();
        this.redDpsMeter = new schema_1.MapSchema();
        this.blueEffects = new Set();
        this.redEffects = new Set();
        this.board = new board_2.Board(config_1.BOARD_HEIGHT, config_1.BOARD_WIDTH);
        this.finished = false;
        this.blueFlowerSpawn = 0;
        this.redFlowerSpawn = 0;
        this.stageLevel = 0;
        this.blueAbilitiesCast = [];
        this.redAbilitiesCast = [];
        this.stormLightningTimer = 0;
        this.tidalWaveTimer = 0;
        this.tidalWaveCounter = 0;
        this.entities = [];
        this.id = id;
        this.room = room;
        this.bluePlayer = bluePlayer;
        this.redPlayer = redPlayer.id === "pve" ? undefined : redPlayer;
        this.bluePlayerId = bluePlayer.id;
        this.redPlayerId = redPlayer.id;
        this.stageLevel = stageLevel;
        this.weather = weather;
        this.isGhostBattle = isGhostBattle;
        this.board = new board_2.Board(config_1.BOARD_HEIGHT, config_1.BOARD_WIDTH);
        this.started = false;
        this.bluePlayer.effects.forEach((e) => this.blueEffects.add(e));
        (_a = this.redPlayer) === null || _a === void 0 ? void 0 : _a.effects.forEach((e) => this.redEffects.add(e));
        const playerEffects = [
            [this.bluePlayer, this.blueEffects, this.redEffects],
            [this.redPlayer, this.redEffects, this.blueEffects]
        ];
        for (const [player, teamEffects, opponentEffects] of playerEffects) {
            if (player) {
                player.board.forEach((pokemon, id) => {
                    pokemon.beforeSimulationStart({
                        simulationId: this.id,
                        isGhostBattle: this.isGhostBattle,
                        weather: this.weather,
                        player,
                        teamEffects,
                        opponentEffects
                    });
                    if ((0, board_1.isOnBench)(pokemon)) {
                        if (teamEffects.has(Effect_1.EffectEnum.COACHING) &&
                            pokemon.types.has(Synergy_1.Synergy.FIGHTING)) {
                            synergies_2.fightingTrainingEffect.apply({
                                pokemon,
                                player,
                                simulation: this
                            });
                        }
                    }
                });
            }
        }
        const weatherEffect = Weather_1.WeatherEffects.get(this.weather);
        if (weatherEffect) {
            this.blueEffects.add(weatherEffect);
            this.redEffects.add(weatherEffect);
        }
        this.finished = false;
        this.winnerId = "";
        this.stormLightningTimer = (0, random_1.randomBetween)(4000, 8000);
        if (effects_1.SynergyEffects[Synergy_1.Synergy.AQUATIC].some((e) => this.blueEffects.has(e) || this.redEffects.has(e))) {
            this.tidalWaveTimer = 7000;
        }
        this.bluePlayer.board.forEach((pokemon) => {
            if (!(0, board_1.isOnBench)(pokemon)) {
                this.addPokemon(pokemon, pokemon.positionX, pokemon.positionY - 1, Game_1.Team.BLUE_TEAM);
            }
        });
        const redBoard = this.redPlayer ? this.redPlayer.board : redPlayer.board;
        redBoard.forEach((pokemon) => {
            if (!(0, board_1.isOnBench)(pokemon)) {
                this.addPokemon(pokemon, pokemon.positionX, 5 - (pokemon.positionY - 1), Game_1.Team.RED_TEAM);
            }
        });
        this.applyPostEffects(bluePlayer.board, redBoard);
    }
    broadcastToSpectators(transfer, data) {
        var _a;
        if (!this.room)
            return;
        const players = this.room.state.players;
        for (const client of this.room.clients) {
            const spectatedPlayer = players.get((_a = client.userData) === null || _a === void 0 ? void 0 : _a.spectatedPlayerId);
            if ((spectatedPlayer === null || spectatedPlayer === void 0 ? void 0 : spectatedPlayer.simulationId) === this.id) {
                client.send(transfer, data);
            }
        }
    }
    start() {
        this.started = true;
        for (const [player, team] of [
            [this.bluePlayer, this.blueTeam],
            [this.redPlayer, this.redTeam]
        ]) {
            if (player) {
                player.board.forEach((pokemon) => {
                    const entity = (0, schemas_1.schemaValues)(team).find((p) => p.refToBoardPokemon === pokemon);
                    if (pokemon.dishes.size > 0) {
                        pokemon.dishes.forEach((dish) => {
                            this.applyDishEffects(dish, pokemon, entity, player);
                        });
                        pokemon.action = Game_1.PokemonActionState.IDLE;
                        pokemon.dishes.clear();
                    }
                    if (entity) {
                        entity.getEffects(effect_1.OnSimulationStartEffect).forEach((effect) => {
                            effect.apply({ simulation: this, player, team, entity });
                        });
                    }
                });
            }
        }
    }
    getEffects(playerId) {
        var _a, _b;
        return playerId === ((_a = this.bluePlayer) === null || _a === void 0 ? void 0 : _a.id)
            ? this.blueEffects
            : playerId === ((_b = this.redPlayer) === null || _b === void 0 ? void 0 : _b.id)
                ? this.redEffects
                : undefined;
    }
    getDpsMeter(playerId) {
        var _a, _b;
        return playerId === ((_a = this.bluePlayer) === null || _a === void 0 ? void 0 : _a.id)
            ? this.blueDpsMeter
            : playerId === ((_b = this.redPlayer) === null || _b === void 0 ? void 0 : _b.id)
                ? this.redDpsMeter
                : undefined;
    }
    getTeam(playerId) {
        var _a, _b;
        return playerId === ((_a = this.bluePlayer) === null || _a === void 0 ? void 0 : _a.id)
            ? this.blueTeam
            : playerId === ((_b = this.redPlayer) === null || _b === void 0 ? void 0 : _b.id)
                ? this.redTeam
                : undefined;
    }
    getOpponentTeam(playerId) {
        var _a, _b;
        return playerId === ((_a = this.bluePlayer) === null || _a === void 0 ? void 0 : _a.id)
            ? this.redTeam
            : playerId === ((_b = this.redPlayer) === null || _b === void 0 ? void 0 : _b.id)
                ? this.blueTeam
                : undefined;
    }
    addPokemon(pokemon, x, y, team, isSpawn = false) {
        const player = team === Game_1.Team.BLUE_TEAM ? this.bluePlayer : this.redPlayer;
        const pokemonEntity = new pokemon_entity_1.PokemonEntity(pokemon, x, y, team, this);
        pokemonEntity.isSpawn = isSpawn;
        pokemonEntity.orientation =
            team === Game_1.Team.BLUE_TEAM ? Game_1.Orientation.UPRIGHT : Game_1.Orientation.DOWNLEFT;
        this.applySynergyEffects(pokemonEntity);
        this.applyItemsEffects(pokemonEntity);
        this.board.setEntityOnCell(pokemonEntity.positionX, pokemonEntity.positionY, pokemonEntity);
        const dps = new dps_1.default(pokemonEntity.id, (0, avatar_1.getAvatarString)(pokemonEntity.index, pokemonEntity.shiny, pokemonEntity.emotion));
        if (team == Game_1.Team.BLUE_TEAM) {
            this.blueTeam.set(pokemonEntity.id, pokemonEntity);
            this.blueDpsMeter.set(pokemonEntity.id, dps);
        }
        if (team == Game_1.Team.RED_TEAM) {
            this.redTeam.set(pokemonEntity.id, pokemonEntity);
            this.redDpsMeter.set(pokemonEntity.id, dps);
        }
        this.entities.push(pokemonEntity);
        pokemon.onSpawn({ entity: pokemonEntity, simulation: this, isSpawn });
        pokemonEntity.getEffects(effect_1.OnSpawnEffect).forEach((effect) => {
            effect.apply(pokemonEntity, player, isSpawn);
        });
        return pokemonEntity;
    }
    getFirstFreeCell(team) {
        if (team === Game_1.Team.BLUE_TEAM) {
            for (let y = 0; y < this.board.rows; y++) {
                for (let x = 0; x < this.board.columns; x++) {
                    if (this.board.isOnBoard(x, y) &&
                        this.board.getEntityOnCell(x, y) === undefined) {
                        return { x, y };
                    }
                }
            }
        }
        else {
            for (let y = this.board.rows - 1; y >= 0; y--) {
                for (let x = this.board.columns - 1; x >= 0; x--) {
                    if (this.board.isOnBoard(x, y) &&
                        this.board.getEntityOnCell(x, y) === undefined) {
                        return { x, y };
                    }
                }
            }
        }
        return null;
    }
    getClosestFreeCellTo(positionX, positionY, team) {
        const placesToConsiderByOrderOfPriority = [
            [0, 0],
            [-1, 0],
            [+1, 0],
            [0, -1],
            [-1, -1],
            [+1, -1],
            [-1, +1],
            [+1, +1],
            [0, +1],
            [-2, 0],
            [+2, 0],
            [-2, -1],
            [+2, -1],
            [0, -2],
            [-1, -2],
            [+1, -2],
            [-2, -2],
            [+2, -2],
            [-2, +1],
            [+2, +1],
            [-3, 0],
            [+3, 0],
            [-3, -1],
            [+3, -1],
            [-3, -2],
            [+3, -2],
            [0, -3],
            [-1, -3],
            [+1, -3],
            [-2, -3],
            [+2, -3],
            [-3, -3],
            [+3, -3],
            [-3, +1],
            [+3, +1]
        ];
        for (const [dx, dy] of placesToConsiderByOrderOfPriority) {
            const x = positionX + dx;
            const y = positionY + dy * (team === Game_1.Team.BLUE_TEAM ? 1 : -1);
            if (this.board.isOnBoard(x, y) &&
                this.board.getEntityOnCell(x, y) === undefined) {
                return { x, y };
            }
        }
        return this.getFirstFreeCell(team);
    }
    getClosestFreeCellToPokemon(pokemon, team) {
        const positionX = pokemon.positionX;
        const positionY = team === Game_1.Team.BLUE_TEAM
            ? pokemon.positionY - 1
            : 5 - (pokemon.positionY - 1);
        return this.getClosestFreeCellTo(positionX, positionY, team);
    }
    getClosestFreeCellToPokemonEntity(pokemon, team = pokemon.team) {
        return this.getClosestFreeCellTo(pokemon.positionX, pokemon.positionY, team);
    }
    applyItemsEffects(pokemon) {
        if (pokemon.passive === Passive_1.Passive.PICKUP && pokemon.items.size === 0) {
            pokemon.items.add((0, random_1.pickRandomIn)(Item_1.CraftableItemsNoScarves.concat(Item_1.NonSpecialBerries)));
        }
        if (pokemon.items.has(Item_1.Item.WONDER_BOX)) {
            pokemon.items.delete(Item_1.Item.WONDER_BOX);
            const wonderboxItems = [];
            for (let n = 0; n < 2; n++) {
                const eligibleItems = Item_1.CraftableItemsNoScarves.filter((i) => !(0, array_1.isIn)(Item_1.SynergyStones, i) &&
                    !wonderboxItems.includes(i) &&
                    !pokemon.items.has(i) &&
                    i !== Item_1.Item.WONDER_BOX);
                wonderboxItems.push((0, random_1.pickRandomIn)(eligibleItems));
            }
            wonderboxItems.forEach((item) => {
                if (pokemon.items.size < 3) {
                    pokemon.items.add(item);
                }
            });
        }
        pokemon.items.forEach((item) => {
            pokemon.applyItemEffect(item);
        });
    }
    applySynergyEffects(pokemon, singleType) {
        const allyEffects = pokemon.team === Game_1.Team.BLUE_TEAM ? this.blueEffects : this.redEffects;
        const apply = (effect) => {
            this.applyEffect(pokemon, effect);
        };
        if (singleType) {
            const effect = effects_1.SynergyEffects[singleType].find((e) => allyEffects.has(e));
            if (effect && !pokemon.effects.has(effect)) {
                apply(effect);
            }
        }
        else {
            allyEffects.forEach((effect) => {
                apply(effect);
            });
        }
        if ((singleType === Synergy_1.Synergy.SOUND ||
            (!singleType && pokemon.types.has(Synergy_1.Synergy.SOUND))) &&
            !effects_1.SynergyEffects[Synergy_1.Synergy.SOUND].some((e) => allyEffects.has(e))) {
            pokemon.effectsSet.add(new synergies_2.SoundCryEffect());
        }
        if (pokemon.types.has(Synergy_1.Synergy.ELECTRIC) && pokemon.player) {
            const nbCellBatteries = (0, schemas_1.schemaValues)(pokemon.player.items).filter((item) => item === Item_1.Item.CELL_BATTERY).length;
            if (nbCellBatteries > 0) {
                pokemon.addSpeed(2 * nbCellBatteries, pokemon, 0, false);
            }
        }
        if (pokemon.refToBoardPokemon.supercharged) {
            pokemon.refToBoardPokemon.supercharged = false;
            pokemon.status.addElectricField(pokemon);
            pokemon.addSpeed(20, pokemon, 0, false);
            pokemon.addShield(30, pokemon, 0, false);
        }
    }
    applyDishEffects(dish, pokemon, entity, player) {
        const dishEffects = dishes_1.DishEffects[dish];
        if (!dishEffects)
            return;
        dishEffects.forEach((effect) => {
            entity === null || entity === void 0 ? void 0 : entity.effectsSet.add(effect);
            if (effect instanceof effect_1.OnDishConsumedEffect)
                effect.apply({ pokemon, dish, entity, player });
            if (effect instanceof effect_1.OnSpawnEffect && entity)
                effect.apply(entity, player, true);
        });
        if (pokemon.passive === Passive_1.Passive.GLUTTON) {
            pokemon.addMaxHP(20);
            entity === null || entity === void 0 ? void 0 : entity.addMaxHP(20, entity, 0, false);
            if (pokemon.maxHP > 750) {
                player.titles.add(types_1.Title.GLUTTON);
            }
        }
    }
    applyPostEffects(blueBoard, redBoard) {
        for (const board of [blueBoard, redBoard]) {
            const teamIndex = board === blueBoard ? Game_1.Team.BLUE_TEAM : Game_1.Team.RED_TEAM;
            const player = board === blueBoard ? this.bluePlayer : this.redPlayer;
            const effects = board === blueBoard ? this.blueEffects : this.redEffects;
            if ([
                Effect_1.EffectEnum.COCOON,
                Effect_1.EffectEnum.INFESTATION,
                Effect_1.EffectEnum.HORDE,
                Effect_1.EffectEnum.HEART_OF_THE_SWARM
            ].some((e) => effects.has(e))) {
                const bugTeam = new Array();
                board.forEach((pkm) => {
                    if (pkm.types.has(Synergy_1.Synergy.BUG) && pkm.positionY != 0) {
                        bugTeam.push(pkm);
                    }
                });
                bugTeam.sort((a, b) => (0, pokemon_entity_1.getUnitScore)(b) - (0, pokemon_entity_1.getUnitScore)(a));
                let numberToSpawn = 0;
                if (effects.has(Effect_1.EffectEnum.COCOON)) {
                    numberToSpawn = 1;
                }
                if (effects.has(Effect_1.EffectEnum.INFESTATION)) {
                    numberToSpawn = 2;
                }
                if (effects.has(Effect_1.EffectEnum.HORDE)) {
                    numberToSpawn = 3;
                }
                if (effects.has(Effect_1.EffectEnum.HEART_OF_THE_SWARM)) {
                    numberToSpawn = 5;
                }
                numberToSpawn = Math.min(numberToSpawn, bugTeam.length);
                for (let i = 0; i < numberToSpawn; i++) {
                    const pokemonCloned = bugTeam[i];
                    const bug = pokemon_factory_1.default.createPokemonFromName(pokemonCloned.name, player);
                    bug.stacks = pokemonCloned.stacks;
                    const coord = this.getClosestFreeCellToPokemon(pokemonCloned, teamIndex);
                    if (coord) {
                        const cloneEntity = this.addPokemon(bug, coord.x, coord.y, teamIndex, true);
                        if (pokemonCloned.items.has(Item_1.Item.SHED_SHELL)) {
                            const team = teamIndex === Game_1.Team.BLUE_TEAM ? this.blueTeam : this.redTeam;
                            const clonedEntity = (0, schemas_1.schemaValues)(team).find((p) => p.refToBoardPokemon.id === pokemonCloned.id);
                            if (clonedEntity) {
                                clonedEntity.addMaxHP(-0.5 * pokemonCloned.maxHP, clonedEntity, 0, false);
                            }
                            cloneEntity.addMaxHP(-0.5 * bug.maxHP, cloneEntity, 0, false);
                        }
                    }
                }
            }
            board.forEach((pokemon) => {
                if (pokemon.items.has(Item_1.Item.WHITE_FLUTE) && !(0, board_1.isOnBench)(pokemon)) {
                    const wilds = precomputed_types_1.PRECOMPUTED_POKEMONS_PER_TYPE[Synergy_1.Synergy.WILD].map((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p));
                    const spawns = [];
                    const pickWild = (rarity, tier) => {
                        const randomWild = (0, random_1.pickRandomIn)(wilds.filter((p) => p.rarity === rarity && p.stars === tier));
                        if (randomWild) {
                            spawns.push(randomWild);
                        }
                        else {
                            logger_1.logger.info("no pokemon found for white flute call", rarity, tier);
                        }
                    };
                    if (this.stageLevel <= 5) {
                        pickWild(Game_1.Rarity.COMMON, 1);
                        pickWild(Game_1.Rarity.COMMON, 1);
                        pickWild(Game_1.Rarity.COMMON, 1);
                    }
                    else if (this.stageLevel <= 10) {
                        pickWild(Game_1.Rarity.COMMON, 1);
                        pickWild(Game_1.Rarity.COMMON, 1);
                        pickWild(Game_1.Rarity.UNCOMMON, 1);
                    }
                    else if (this.stageLevel <= 15) {
                        pickWild(Game_1.Rarity.UNCOMMON, 1);
                        pickWild(Game_1.Rarity.UNCOMMON, 1);
                        pickWild(Game_1.Rarity.RARE, 1);
                    }
                    else if (this.stageLevel <= 20) {
                        pickWild(Game_1.Rarity.UNCOMMON, 1);
                        pickWild(Game_1.Rarity.RARE, 1);
                        pickWild(Game_1.Rarity.EPIC, 1);
                    }
                    else if (this.stageLevel <= 25) {
                        pickWild(Game_1.Rarity.UNCOMMON, 2);
                        pickWild(Game_1.Rarity.RARE, 1);
                        pickWild(Game_1.Rarity.EPIC, 1);
                    }
                    else if (this.stageLevel <= 30) {
                        pickWild(Game_1.Rarity.RARE, 2);
                        pickWild(Game_1.Rarity.EPIC, 1);
                        pickWild(Game_1.Rarity.EPIC, 1);
                    }
                    else if (this.stageLevel <= 35) {
                        pickWild(Game_1.Rarity.RARE, 2);
                        pickWild(Game_1.Rarity.EPIC, 2);
                        pickWild(Game_1.Rarity.UNIQUE, 3);
                    }
                    else {
                        pickWild(Game_1.Rarity.EPIC, 2);
                        pickWild(Game_1.Rarity.UNIQUE, 3);
                        pickWild(Game_1.Rarity.ULTRA, 2);
                    }
                    spawns.forEach((spawn) => {
                        const coord = this.getClosestFreeCellToPokemon(pokemon, teamIndex);
                        if (!coord)
                            return;
                        const mon = pokemon_factory_1.default.createPokemonFromName(spawn.name);
                        this.addPokemon(mon, coord.x, coord.y, teamIndex, true);
                    });
                }
            });
        }
        for (const team of [this.blueTeam, this.redTeam]) {
            team.forEach((pokemon) => {
                if (pokemon.items.has(Item_1.Item.ABILITY_SHIELD)) {
                    ;
                    [-1, 0, 1].forEach((offset) => {
                        const ally = this.board.getEntityOnCell(pokemon.positionX + offset, pokemon.positionY);
                        if (ally && ally.team === pokemon.team) {
                            ally.addShield(Math.ceil(0.2 * ally.maxHP), ally, 0, false);
                            ally.status.triggerRuneProtect(5000, ally, pokemon);
                        }
                    });
                }
                if (pokemon.items.has(Item_1.Item.GRACIDEA_FLOWER)) {
                    ;
                    [-1, 0, 1].forEach((offset) => {
                        const value = this.board.getEntityOnCell(pokemon.positionX + offset, pokemon.positionY);
                        if (value) {
                            value.addSpeed(20, pokemon, 0, false);
                        }
                    });
                }
                if (pokemon.items.has(Item_1.Item.EXP_SHARE)) {
                    ;
                    [-1, 1].forEach((offset) => {
                        const value = this.board.getEntityOnCell(pokemon.positionX + offset, pokemon.positionY);
                        if (value) {
                            if (value.atk > pokemon.atk)
                                pokemon.atk = value.atk;
                            if (value.def > pokemon.def)
                                pokemon.def = value.def;
                            if (value.speDef > pokemon.speDef)
                                pokemon.speDef = value.speDef;
                            if (value.ap > pokemon.ap)
                                pokemon.ap = value.ap;
                        }
                    });
                }
                if (pokemon.passive === Passive_1.Passive.LUVDISC) {
                    const lovers = [-1, 1].map((offset) => this.board.getEntityOnCell(pokemon.positionX + offset, pokemon.positionY));
                    if (lovers[0] && lovers[1]) {
                        const bestAtk = Math.max(lovers[0].atk, lovers[1].atk);
                        const bestDef = Math.max(lovers[0].def, lovers[1].def);
                        const bestSpeDef = Math.max(lovers[0].speDef, lovers[1].speDef);
                        const bestAP = Math.max(lovers[0].ap, lovers[1].ap);
                        lovers[0].atk = bestAtk;
                        lovers[1].atk = bestAtk;
                        lovers[0].def = bestDef;
                        lovers[1].def = bestDef;
                        lovers[0].speDef = bestSpeDef;
                        lovers[1].speDef = bestSpeDef;
                        lovers[0].ap = bestAP;
                        lovers[1].ap = bestAP;
                    }
                }
            });
        }
        for (const team of [this.blueTeam, this.redTeam]) {
            team.forEach((pokemon) => {
                if (pokemon.items.has(Item_1.Item.COMET_SHARD)) {
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        const farthestCoordinate = this.board.getFarthestTargetCoordinateAvailablePlace(pokemon);
                        if (farthestCoordinate) {
                            const target = farthestCoordinate.target;
                            pokemon.skydiveTo(farthestCoordinate.x, farthestCoordinate.y, this.board);
                            pokemon.setTarget(target);
                            pokemon.status.triggerProtect(2000);
                            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                                pokemon.simulation.room.broadcast(types_1.Transfer.ABILITY, {
                                    id: pokemon.simulation.id,
                                    skill: "COMET_CRASH",
                                    positionX: farthestCoordinate.x,
                                    positionY: farthestCoordinate.y,
                                    targetX: target.positionX,
                                    targetY: target.positionY
                                });
                            }, 500));
                            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                                if ((target === null || target === void 0 ? void 0 : target.hp) > 0) {
                                    const crit = (0, random_1.chance)(pokemon.critChance / 100, pokemon);
                                    target.handleSpecialDamage(3 * pokemon.atk, this.board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
                                    this.board
                                        .getAdjacentCells(target.positionX, target.positionY)
                                        .forEach((cell) => {
                                        if (cell.value && cell.value.team !== pokemon.team) {
                                            cell.value.handleSpecialDamage(pokemon.atk, this.board, Game_1.AttackType.SPECIAL, pokemon, crit, false);
                                        }
                                    });
                                }
                            }, 1000));
                        }
                    }, 100));
                }
            });
            const teamEffects = team === this.blueTeam ? this.blueEffects : this.redEffects;
            const opponentTeam = team === this.blueTeam ? Game_1.Team.RED_TEAM : Game_1.Team.BLUE_TEAM;
            if (teamEffects.has(Effect_1.EffectEnum.CURSE_OF_VULNERABILITY) ||
                teamEffects.has(Effect_1.EffectEnum.CURSE_OF_WEAKNESS) ||
                teamEffects.has(Effect_1.EffectEnum.CURSE_OF_TORMENT) ||
                teamEffects.has(Effect_1.EffectEnum.CURSE_OF_FATE)) {
                this.applyCurse(Effect_1.EffectEnum.CURSE_OF_VULNERABILITY, opponentTeam);
            }
            if (teamEffects.has(Effect_1.EffectEnum.CURSE_OF_WEAKNESS) ||
                teamEffects.has(Effect_1.EffectEnum.CURSE_OF_TORMENT) ||
                teamEffects.has(Effect_1.EffectEnum.CURSE_OF_FATE)) {
                this.applyCurse(Effect_1.EffectEnum.CURSE_OF_WEAKNESS, opponentTeam);
            }
            if (teamEffects.has(Effect_1.EffectEnum.CURSE_OF_TORMENT) ||
                teamEffects.has(Effect_1.EffectEnum.CURSE_OF_FATE)) {
                this.applyCurse(Effect_1.EffectEnum.CURSE_OF_TORMENT, opponentTeam);
            }
            if (teamEffects.has(Effect_1.EffectEnum.CURSE_OF_FATE)) {
                this.applyCurse(Effect_1.EffectEnum.CURSE_OF_FATE, opponentTeam);
            }
        }
    }
    applyEffect(pokemon, effect) {
        var _a, _b, _c, _d;
        const player = pokemon.player;
        const types = pokemon.types;
        switch (effect) {
            case Effect_1.EffectEnum.HONE_CLAWS:
                if (types.has(Synergy_1.Synergy.DARK)) {
                    pokemon.addCritChance(30, pokemon, 0, false);
                    pokemon.addCritPower(30, pokemon, 0, false);
                    pokemon.effects.add(Effect_1.EffectEnum.HONE_CLAWS);
                }
                break;
            case Effect_1.EffectEnum.ASSURANCE:
                if (types.has(Synergy_1.Synergy.DARK)) {
                    pokemon.addCritChance(40, pokemon, 0, false);
                    pokemon.addCritPower(50, pokemon, 0, false);
                    pokemon.effects.add(Effect_1.EffectEnum.ASSURANCE);
                }
                break;
            case Effect_1.EffectEnum.BEAT_UP:
                if (types.has(Synergy_1.Synergy.DARK)) {
                    pokemon.addCritChance(50, pokemon, 0, false);
                    pokemon.addCritPower(80, pokemon, 0, false);
                    pokemon.effects.add(Effect_1.EffectEnum.BEAT_UP);
                }
                break;
            case Effect_1.EffectEnum.ANCIENT_POWER:
            case Effect_1.EffectEnum.ELDER_POWER:
            case Effect_1.EffectEnum.FORGOTTEN_POWER:
                if (types.has(Synergy_1.Synergy.FOSSIL)) {
                    pokemon.effects.add(effect);
                    const fossilStatScale = effect === Effect_1.EffectEnum.FORGOTTEN_POWER
                        ? { hp: 0.1, atk: 0.06, def: 0.06 }
                        : effect === Effect_1.EffectEnum.ELDER_POWER
                            ? { hp: 0.08, atk: 0.05, def: 0.05 }
                            : { hp: 0.06, atk: 0.04, def: 0.04 };
                    pokemon.addMaxHP(Math.ceil(fossilStatScale.hp * pokemon.maxHP), pokemon, 0, false);
                    pokemon.addAttack(Math.ceil(fossilStatScale.atk * pokemon.baseAtk), pokemon, 0, false);
                    pokemon.addDefense(Math.ceil(fossilStatScale.def * pokemon.baseDef), pokemon, 0, false);
                    pokemon.addSpecialDefense(Math.ceil(fossilStatScale.def * pokemon.baseSpeDef), pokemon, 0, false);
                }
                break;
            case Effect_1.EffectEnum.FLAME_BODY:
            case Effect_1.EffectEnum.WILDFIRE:
            case Effect_1.EffectEnum.BLAZE:
            case Effect_1.EffectEnum.DESOLATE_LAND:
                if (types.has(Synergy_1.Synergy.FIRE)) {
                    pokemon.effects.add(effect);
                    pokemon.effectsSet.add(new synergies_2.FireHitEffect(effect));
                }
                break;
            case Effect_1.EffectEnum.INGRAIN:
            case Effect_1.EffectEnum.GROWTH:
            case Effect_1.EffectEnum.SPORE:
            case Effect_1.EffectEnum.OVERGROW:
                if (types.has(Synergy_1.Synergy.GRASS)) {
                    pokemon.effects.add(effect);
                    if (effect === Effect_1.EffectEnum.OVERGROW) {
                        pokemon.effectsSet.add(synergies_2.overgrowEffect);
                    }
                }
                break;
            case Effect_1.EffectEnum.RAIN_DANCE:
            case Effect_1.EffectEnum.DRIZZLE:
            case Effect_1.EffectEnum.PRIMORDIAL_SEA:
                if (types.has(Synergy_1.Synergy.WATER)) {
                    pokemon.effects.add(effect);
                }
                break;
            case Effect_1.EffectEnum.STAMINA:
            case Effect_1.EffectEnum.STRENGTH:
            case Effect_1.EffectEnum.ENDURE:
            case Effect_1.EffectEnum.PURE_POWER:
                if (types.has(Synergy_1.Synergy.NORMAL)) {
                    pokemon.effects.add(effect);
                    pokemon.effectsSet.add(synergies_2.normalShieldEffect);
                }
                break;
            case Effect_1.EffectEnum.RISING_VOLTAGE:
            case Effect_1.EffectEnum.POWER_SURGE:
            case Effect_1.EffectEnum.SUPERCHARGED:
                if (types.has(Synergy_1.Synergy.ELECTRIC)) {
                    pokemon.effects.add(effect);
                    pokemon.effectsSet.add(synergies_2.electricTripleAttackEffect);
                }
                break;
            case Effect_1.EffectEnum.GUTS:
            case Effect_1.EffectEnum.STURDY:
            case Effect_1.EffectEnum.DEFIANT:
            case Effect_1.EffectEnum.COACHING:
                if (types.has(Synergy_1.Synergy.FIGHTING)) {
                    pokemon.effects.add(effect);
                    pokemon.effectsSet.add(new synergies_2.FightingKnockbackEffect(effect));
                }
                break;
            case Effect_1.EffectEnum.STEEL_SURGE:
            case Effect_1.EffectEnum.STEEL_SPIKE:
            case Effect_1.EffectEnum.CORKSCREW_CRASH:
            case Effect_1.EffectEnum.MAX_MELTDOWN:
                if (types.has(Synergy_1.Synergy.STEEL)) {
                    pokemon.effects.add(effect);
                }
                break;
            case Effect_1.EffectEnum.BULK_UP:
            case Effect_1.EffectEnum.RAGE:
            case Effect_1.EffectEnum.ANGER_POINT:
                if (types.has(Synergy_1.Synergy.FIELD)) {
                    pokemon.effects.add(effect);
                    pokemon.effectsSet.add(new synergies_2.OnFieldDeathEffect(effect));
                }
                break;
            case Effect_1.EffectEnum.PURSUIT:
            case Effect_1.EffectEnum.BRUTAL_SWING:
            case Effect_1.EffectEnum.POWER_TRIP:
            case Effect_1.EffectEnum.MERCILESS:
                if (types.has(Synergy_1.Synergy.MONSTER)) {
                    pokemon.effects.add(effect);
                    pokemon.effectsSet.add(new synergies_2.MonsterKillEffect(effect));
                }
                break;
            case Effect_1.EffectEnum.PRECOGNITION:
                if (types.has(Synergy_1.Synergy.PSYCHIC)) {
                    pokemon.effects.add(Effect_1.EffectEnum.PRECOGNITION);
                    pokemon.addAbilityPower(50, pokemon, 0, false);
                }
                break;
            case Effect_1.EffectEnum.AURA:
                if (types.has(Synergy_1.Synergy.PSYCHIC)) {
                    pokemon.effects.add(Effect_1.EffectEnum.AURA);
                    pokemon.addAbilityPower(100, pokemon, 0, false);
                }
                break;
            case Effect_1.EffectEnum.TRANSCENDENCE:
                if (types.has(Synergy_1.Synergy.PSYCHIC)) {
                    pokemon.effects.add(Effect_1.EffectEnum.TRANSCENDENCE);
                    pokemon.addAbilityPower(150, pokemon, 0, false);
                }
                break;
            case Effect_1.EffectEnum.MEDITATE:
            case Effect_1.EffectEnum.FOCUS_ENERGY:
            case Effect_1.EffectEnum.CALM_MIND:
                if (types.has(Synergy_1.Synergy.HUMAN)) {
                    pokemon.effects.add(effect);
                    pokemon.effectsSet.add(synergies_2.humanHealEffect);
                }
                break;
            case Effect_1.EffectEnum.TAILWIND:
            case Effect_1.EffectEnum.FEATHER_DANCE:
            case Effect_1.EffectEnum.MAX_AIRSTREAM:
            case Effect_1.EffectEnum.SKYDIVE:
                if (types.has(Synergy_1.Synergy.FLYING)) {
                    pokemon.effects.add(effect);
                    pokemon.effectsSet.add(new synergies_2.FlyingProtectionEffect(effect));
                    const flyingAtkRatio = effect === Effect_1.EffectEnum.TAILWIND
                        ? 0.1
                        : effect === Effect_1.EffectEnum.FEATHER_DANCE
                            ? 0.2
                            : effect === Effect_1.EffectEnum.MAX_AIRSTREAM
                                ? 0.3
                                : 0.4;
                    pokemon.addAttack(Math.ceil(flyingAtkRatio * pokemon.baseAtk), pokemon, 0, false);
                }
                break;
            case Effect_1.EffectEnum.SWIFT_SWIM:
            case Effect_1.EffectEnum.HYDRATION:
            case Effect_1.EffectEnum.WATER_VEIL:
            case Effect_1.EffectEnum.SURGE_SURFER:
                pokemon.effects.add(effect);
                break;
            case Effect_1.EffectEnum.COTTONWEED:
            case Effect_1.EffectEnum.FLYCATCHER:
            case Effect_1.EffectEnum.FRAGRANT:
            case Effect_1.EffectEnum.FLOWER_POWER:
                if (types.has(Synergy_1.Synergy.FLORA)) {
                    pokemon.effects.add(effect);
                    pokemon.effectsSet.add(synergies_2.onFlowerMonDeath);
                }
                break;
            case Effect_1.EffectEnum.BATTLE_ARMOR:
                if (types.has(Synergy_1.Synergy.ROCK)) {
                    pokemon.addDefense(10, pokemon, 0, false);
                    pokemon.effects.add(Effect_1.EffectEnum.BATTLE_ARMOR);
                }
                break;
            case Effect_1.EffectEnum.MOUTAIN_RESISTANCE:
                if (types.has(Synergy_1.Synergy.ROCK)) {
                    pokemon.addDefense(25, pokemon, 0, false);
                    pokemon.effects.add(Effect_1.EffectEnum.MOUTAIN_RESISTANCE);
                }
                break;
            case Effect_1.EffectEnum.DIAMOND_STORM:
                if (types.has(Synergy_1.Synergy.ROCK)) {
                    pokemon.addDefense(50, pokemon, 0, false);
                    pokemon.effects.add(Effect_1.EffectEnum.DIAMOND_STORM);
                }
                break;
            case Effect_1.EffectEnum.AROMATIC_MIST:
            case Effect_1.EffectEnum.FAIRY_WIND:
            case Effect_1.EffectEnum.STRANGE_STEAM:
            case Effect_1.EffectEnum.MOON_FORCE:
                if (types.has(Synergy_1.Synergy.FAIRY)) {
                    pokemon.effects.add(effect);
                    if ((_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.items.includes(Item_1.Item.LONG_WAND)) {
                        pokemon.range += 1;
                    }
                    if ((_b = pokemon.player) === null || _b === void 0 ? void 0 : _b.items.includes(Item_1.Item.POUNCE_WAND)) {
                        pokemon.effectsSet.add(synergies_2.pounceWandEffect);
                    }
                    if (effect === Effect_1.EffectEnum.MOON_FORCE) {
                        pokemon.addLuck(20, pokemon, 0, false);
                    }
                }
                break;
            case Effect_1.EffectEnum.DRAGON_ENERGY:
            case Effect_1.EffectEnum.DRAGON_SCALES:
            case Effect_1.EffectEnum.DRAGON_DANCE:
                if (types.has(Synergy_1.Synergy.DRAGON)) {
                    pokemon.effects.add(effect);
                    if (player) {
                        const dragonLevel = (0, schemas_1.schemaValues)(player.board).reduce((acc, p) => acc +
                            (p.types.has(Synergy_1.Synergy.DRAGON) && !(0, board_1.isOnBench)(p) ? p.stars : 0), 0);
                        if (effect === Effect_1.EffectEnum.DRAGON_SCALES ||
                            effect === Effect_1.EffectEnum.DRAGON_DANCE) {
                            pokemon.addShield(dragonLevel * 5, pokemon, 0, false);
                        }
                        if (effect === Effect_1.EffectEnum.DRAGON_DANCE) {
                            pokemon.addAbilityPower(dragonLevel, pokemon, 0, false);
                            pokemon.addSpeed(dragonLevel, pokemon, 0, false);
                        }
                    }
                }
                break;
            case Effect_1.EffectEnum.CHILLY:
                pokemon.effects.add(Effect_1.EffectEnum.CHILLY);
                pokemon.addSpecialDefense(4, pokemon, 0, false);
                pokemon.addDefense(2, pokemon, 0, false);
                break;
            case Effect_1.EffectEnum.FROSTY:
                pokemon.effects.add(Effect_1.EffectEnum.FROSTY);
                pokemon.addSpecialDefense(12, pokemon, 0, false);
                pokemon.addDefense(5, pokemon, 0, false);
                break;
            case Effect_1.EffectEnum.FREEZING:
                pokemon.effects.add(Effect_1.EffectEnum.FREEZING);
                pokemon.addSpecialDefense(25, pokemon, 0, false);
                pokemon.addDefense(10, pokemon, 0, false);
                break;
            case Effect_1.EffectEnum.SHEER_COLD:
                pokemon.effects.add(Effect_1.EffectEnum.SHEER_COLD);
                pokemon.addSpecialDefense(50, pokemon, 0, false);
                pokemon.addDefense(20, pokemon, 0, false);
                break;
            case Effect_1.EffectEnum.POISONOUS:
            case Effect_1.EffectEnum.VENOMOUS:
            case Effect_1.EffectEnum.TOXIC:
                if (types.has(Synergy_1.Synergy.POISON)) {
                    pokemon.effects.add(effect);
                }
                break;
            case Effect_1.EffectEnum.LARGO:
            case Effect_1.EffectEnum.ALLEGRO:
            case Effect_1.EffectEnum.PRESTO:
                if (types.has(Synergy_1.Synergy.SOUND)) {
                    pokemon.effects.add(effect);
                    pokemon.effectsSet.add(new synergies_2.SoundCryEffect(effect));
                }
                break;
            case Effect_1.EffectEnum.COCOON:
            case Effect_1.EffectEnum.INFESTATION:
            case Effect_1.EffectEnum.HORDE:
            case Effect_1.EffectEnum.HEART_OF_THE_SWARM:
                if (types.has(Synergy_1.Synergy.BUG)) {
                    pokemon.effects.add(effect);
                }
                break;
            case Effect_1.EffectEnum.TILLER:
            case Effect_1.EffectEnum.DIGGER:
            case Effect_1.EffectEnum.DRILLER:
            case Effect_1.EffectEnum.DEEP_MINER:
                if (types.has(Synergy_1.Synergy.GROUND)) {
                    pokemon.effects.add(effect);
                    pokemon.effectsSet.add(new synergies_2.GroundHoleEffect(effect));
                }
                break;
            case Effect_1.EffectEnum.DUBIOUS_DISC:
            case Effect_1.EffectEnum.LINK_CABLE:
            case Effect_1.EffectEnum.GOOGLE_SPECS:
                if (types.has(Synergy_1.Synergy.ARTIFICIAL) && pokemon.items.size > 0) {
                    const nbItems = (0, number_1.max)(3)(pokemon.items.size + (pokemon.items.has(Item_1.Item.WONDER_BOX) ? 1 : 0));
                    const attackBoost = {
                        [Effect_1.EffectEnum.DUBIOUS_DISC]: 0,
                        [Effect_1.EffectEnum.LINK_CABLE]: (5 / 100) * pokemon.baseAtk,
                        [Effect_1.EffectEnum.GOOGLE_SPECS]: (10 / 100) * pokemon.baseAtk
                    }[effect];
                    const apBoost = {
                        [Effect_1.EffectEnum.DUBIOUS_DISC]: 0,
                        [Effect_1.EffectEnum.LINK_CABLE]: 5,
                        [Effect_1.EffectEnum.GOOGLE_SPECS]: 10
                    }[effect];
                    const shieldBoost = {
                        [Effect_1.EffectEnum.DUBIOUS_DISC]: 0,
                        [Effect_1.EffectEnum.LINK_CABLE]: (5 / 100) * pokemon.maxHP,
                        [Effect_1.EffectEnum.GOOGLE_SPECS]: (10 / 100) * pokemon.maxHP
                    }[effect];
                    pokemon.addAttack(attackBoost * nbItems, pokemon, 0, false);
                    pokemon.addAbilityPower(apBoost * nbItems, pokemon, 0, false);
                    pokemon.addShield(shieldBoost * nbItems, pokemon, 0, false);
                    pokemon.effects.add(effect);
                }
                break;
            case Effect_1.EffectEnum.GRASSY_TERRAIN:
                if (types.has(Synergy_1.Synergy.GRASS)) {
                    pokemon.status.grassField = true;
                    pokemon.effects.add(Effect_1.EffectEnum.GRASSY_TERRAIN);
                }
                break;
            case Effect_1.EffectEnum.PSYCHIC_TERRAIN:
                if (types.has(Synergy_1.Synergy.PSYCHIC)) {
                    pokemon.status.addPsychicField(pokemon);
                    pokemon.effects.add(Effect_1.EffectEnum.PSYCHIC_TERRAIN);
                }
                break;
            case Effect_1.EffectEnum.ELECTRIC_TERRAIN:
                if (types.has(Synergy_1.Synergy.ELECTRIC)) {
                    pokemon.status.addElectricField(pokemon);
                    pokemon.effects.add(Effect_1.EffectEnum.ELECTRIC_TERRAIN);
                }
                break;
            case Effect_1.EffectEnum.MISTY_TERRAIN:
                if (types.has(Synergy_1.Synergy.FAIRY)) {
                    pokemon.status.fairyField = true;
                    pokemon.effects.add(Effect_1.EffectEnum.MISTY_TERRAIN);
                }
                break;
            case Effect_1.EffectEnum.SHINING_RAY:
                if (pokemon.inSpotlight) {
                    pokemon.status.light = true;
                    pokemon.effects.add(Effect_1.EffectEnum.SHINING_RAY);
                    pokemon.addAttack(Math.ceil(pokemon.atk * 0.2), pokemon, 0, false);
                    pokemon.addAbilityPower(20, pokemon, 0, false);
                }
                break;
            case Effect_1.EffectEnum.LIGHT_PULSE:
                if (pokemon.inSpotlight) {
                    pokemon.status.light = true;
                    pokemon.effects.add(Effect_1.EffectEnum.LIGHT_PULSE);
                    pokemon.addAttack(Math.ceil(pokemon.atk * 0.2), pokemon, 0, false);
                    pokemon.addAbilityPower(20, pokemon, 0, false);
                }
                break;
            case Effect_1.EffectEnum.ETERNAL_LIGHT:
                if (pokemon.inSpotlight) {
                    pokemon.status.light = true;
                    pokemon.effects.add(Effect_1.EffectEnum.ETERNAL_LIGHT);
                    pokemon.addAttack(Math.ceil(pokemon.atk * 0.2), pokemon, 0, false);
                    pokemon.addAbilityPower(20, pokemon, 0, false);
                    pokemon.status.triggerRuneProtect(8000, pokemon, pokemon);
                    pokemon.addDefense(0.3 * pokemon.baseDef, pokemon, 0, false);
                    pokemon.addSpecialDefense(0.3 * pokemon.baseSpeDef, pokemon, 0, false);
                }
                break;
            case Effect_1.EffectEnum.MAX_ILLUMINATION:
                if (pokemon.inSpotlight) {
                    pokemon.status.light = true;
                    pokemon.effects.add(Effect_1.EffectEnum.MAX_ILLUMINATION);
                    pokemon.addAttack(Math.ceil(pokemon.atk * 0.2), pokemon, 0, false);
                    pokemon.addAbilityPower(20, pokemon, 0, false);
                    pokemon.status.triggerRuneProtect(8000, pokemon, pokemon);
                    pokemon.addDefense(0.3 * pokemon.baseDef, pokemon, 0, false);
                    pokemon.addSpecialDefense(0.3 * pokemon.baseSpeDef, pokemon, 0, false);
                    pokemon.addShield(100, pokemon, 0, false);
                    pokemon.status.addResurrection(pokemon);
                }
                break;
            case Effect_1.EffectEnum.QUICK_FEET:
                if (types.has(Synergy_1.Synergy.WILD)) {
                    pokemon.effects.add(Effect_1.EffectEnum.QUICK_FEET);
                    pokemon.addSpeed(20, pokemon, 0, false);
                    pokemon.addAttack(Math.ceil(0.05 * pokemon.baseAtk), pokemon, 0, false);
                }
                break;
            case Effect_1.EffectEnum.RUN_AWAY:
                if (types.has(Synergy_1.Synergy.WILD)) {
                    pokemon.effects.add(Effect_1.EffectEnum.RUN_AWAY);
                    pokemon.addSpeed(40, pokemon, 0, false);
                }
                break;
            case Effect_1.EffectEnum.HUSTLE:
                if (types.has(Synergy_1.Synergy.WILD)) {
                    pokemon.effects.add(Effect_1.EffectEnum.HUSTLE);
                    pokemon.addAttack(Math.ceil(0.4 * pokemon.baseAtk), pokemon, 0, false);
                    pokemon.addSpeed(40, pokemon, 0, false);
                }
                break;
            case Effect_1.EffectEnum.BERSERK:
                if (types.has(Synergy_1.Synergy.WILD)) {
                    pokemon.effects.add(Effect_1.EffectEnum.BERSERK);
                    pokemon.effectsSet.add(synergies_2.wildBerserkEffect);
                    pokemon.addAttack(Math.ceil(0.4 * pokemon.baseAtk), pokemon, 0, false);
                    pokemon.addSpeed(40, pokemon, 0, false);
                }
                break;
            case Effect_1.EffectEnum.FLUID:
            case Effect_1.EffectEnum.SHAPELESS:
            case Effect_1.EffectEnum.ETHEREAL: {
                const activeSynergies = (player === null || player === void 0 ? void 0 : player.synergies.countActiveSynergies()) || 0;
                const speedFactor = (_c = [1, 3, 6][effects_1.SynergyEffects[Synergy_1.Synergy.AMORPHOUS].indexOf(effect)]) !== null && _c !== void 0 ? _c : 0;
                const hpFactor = (_d = [3, 6, 12][effects_1.SynergyEffects[Synergy_1.Synergy.AMORPHOUS].indexOf(effect)]) !== null && _d !== void 0 ? _d : 0;
                pokemon.effects.add(effect);
                pokemon.addSpeed(speedFactor * activeSynergies, pokemon, 0, false);
                pokemon.addMaxHP(hpFactor * activeSynergies, pokemon, 0, false);
                break;
            }
            case Effect_1.EffectEnum.CURSE_OF_VULNERABILITY:
            case Effect_1.EffectEnum.CURSE_OF_WEAKNESS:
            case Effect_1.EffectEnum.CURSE_OF_TORMENT:
            case Effect_1.EffectEnum.CURSE_OF_FATE:
                if (pokemon.types.has(Synergy_1.Synergy.GHOST)) {
                    pokemon.effects.add(effect);
                    pokemon.addDodgeChance(0.1, pokemon, 0, false);
                }
                break;
            case Effect_1.EffectEnum.VICTINI_PASSIVE: {
                pokemon.effects.add(effect);
                pokemon.addDodgeChance(-1, pokemon, 0, false);
                break;
            }
            case Effect_1.EffectEnum.GOOD_LUCK: {
                pokemon.effects.add(effect);
                pokemon.addLuck(20, pokemon, 0, false);
                break;
            }
            case Effect_1.EffectEnum.WATER_SPRING: {
                pokemon.effectsSet.add(passives_1.WaterSpringEffect);
                break;
            }
            case Effect_1.EffectEnum.WINDY: {
                const nbFloatStones = player ? (0, array_1.count)(player.items, Item_1.Item.FLOAT_STONE) : 0;
                pokemon.addSpeed((pokemon.types.has(Synergy_1.Synergy.FLYING) ? 20 : 10) + nbFloatStones * 10, "environment", 0, false);
                break;
            }
            case Effect_1.EffectEnum.SNOW:
                if (pokemon.types.has(Synergy_1.Synergy.ICE) === false) {
                    pokemon.addSpeed(-10, "environment", 0, false);
                }
                break;
            case Effect_1.EffectEnum.SMOG: {
                const opponentPlayer = pokemon.team === Game_1.Team.BLUE_TEAM ? this.redPlayer : this.bluePlayer;
                const nbSmellyClays = opponentPlayer
                    ? (0, array_1.count)(opponentPlayer.items, Item_1.Item.SMELLY_CLAY)
                    : 0;
                pokemon.addDodgeChance(0.15 - 0.05 * nbSmellyClays, "environment", 0, false);
                break;
            }
            case Effect_1.EffectEnum.NIGHT: {
                const nbBlackAugurite = player
                    ? (0, array_1.count)(player.items, Item_1.Item.BLACK_AUGURITE)
                    : 0;
                pokemon.addCritChance(10 + 5 * nbBlackAugurite, "environment", 0, false);
                break;
            }
            case Effect_1.EffectEnum.DROUGHT: {
                const nbHeatStones = player ? (0, array_1.count)(player.items, Item_1.Item.HEAT_ROCK) : 0;
                pokemon.addAttack(3 * nbHeatStones, "environment", 0, false);
                break;
            }
            case Effect_1.EffectEnum.MURKY: {
                const player = pokemon.player;
                const nbOddStones = player ? (0, array_1.count)(player.items, Item_1.Item.ODD_KEYSTONE) : 0;
                const luckDebuff = 10 * nbOddStones - (pokemon.types.has(Synergy_1.Synergy.GHOST) ? 0 : 30);
                pokemon.addLuck(luckDebuff, "environment", 0, false);
                break;
            }
            case Effect_1.EffectEnum.MISTY: {
                const player = pokemon.player;
                const nbMistStones = player ? (0, array_1.count)(player.items, Item_1.Item.MIST_STONE) : 0;
                if (nbMistStones > 0) {
                    pokemon.addSpecialDefense(3 * nbMistStones, "environment", 0, false);
                }
                break;
            }
            default:
                break;
        }
    }
    update(dt) {
        if (this.blueTeam.size === 0 || this.redTeam.size === 0) {
            this.onFinish();
        }
        this.blueTeam.forEach((pkm, key) => {
            var _a;
            (_a = this.blueDpsMeter
                .get(key)) === null || _a === void 0 ? void 0 : _a.update(pkm.physicalDamage, pkm.specialDamage, pkm.trueDamage, pkm.physicalDamageReduced, pkm.specialDamageReduced, pkm.shieldDamageTaken, pkm.healDone, pkm.shieldDone);
            pkm.update(dt, this.board, this.bluePlayer);
        });
        this.redTeam.forEach((pkm, key) => {
            var _a;
            (_a = this.redDpsMeter
                .get(key)) === null || _a === void 0 ? void 0 : _a.update(pkm.physicalDamage, pkm.specialDamage, pkm.trueDamage, pkm.physicalDamageReduced, pkm.specialDamageReduced, pkm.shieldDamageTaken, pkm.healDone, pkm.shieldDone);
            pkm.update(dt, this.board, this.redPlayer);
        });
        if (this.weather === Weather_1.Weather.STORM) {
            this.stormLightningTimer -= dt;
            if (this.stormLightningTimer <= 0 && !this.finished) {
                this.stormLightningTimer = (0, random_1.randomBetween)(2000, 6000);
                const x = (0, random_1.randomBetween)(0, this.board.columns - 1);
                const y = (0, random_1.randomBetween)(0, this.board.rows - 1);
                const pokemonOnCell = this.board.getEntityOnCell(x, y);
                if (pokemonOnCell) {
                    const nbElectricQuartz = pokemonOnCell.player
                        ? (0, array_1.count)(pokemonOnCell.player.items, Item_1.Item.ELECTRIC_QUARTZ)
                        : 0;
                    if (nbElectricQuartz > 0) {
                        pokemonOnCell.addShield(50 * nbElectricQuartz, pokemonOnCell, 0, false);
                    }
                    if (pokemonOnCell.types.has(Synergy_1.Synergy.ELECTRIC)) {
                        pokemonOnCell.status.addElectricField(pokemonOnCell);
                        pokemonOnCell.addSpeed(20, pokemonOnCell, 0, false);
                        pokemonOnCell.addShield(30, pokemonOnCell, 0, false);
                    }
                    else {
                        pokemonOnCell.handleDamage({
                            damage: 100,
                            board: this.board,
                            attackType: Game_1.AttackType.SPECIAL,
                            attacker: null,
                            shouldTargetGainMana: false
                        });
                    }
                }
                this.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                    simulationId: this.id,
                    effect: Effect_1.EffectEnum.LIGHTNING_STRIKE,
                    x,
                    y
                });
            }
        }
        if (this.tidalWaveTimer > 0) {
            this.tidalWaveTimer -= dt;
            if (this.tidalWaveTimer <= 0) {
                this.tidalWaveCounter++;
                this.handleTidalWaveForTeam(Game_1.Team.BLUE_TEAM);
                this.handleTidalWaveForTeam(Game_1.Team.RED_TEAM);
                if (this.redEffects.has(Effect_1.EffectEnum.SURGE_SURFER) ||
                    this.blueEffects.has(Effect_1.EffectEnum.SURGE_SURFER) ||
                    this.tidalWaveCounter < 2) {
                    this.tidalWaveTimer = 7000;
                }
            }
        }
    }
    stop() {
        this.blueTeam.forEach((pokemon, key) => {
            delete pokemon.simulation;
            this.blueTeam.delete(key);
        });
        this.redTeam.forEach((pokemon, key) => {
            delete pokemon.simulation;
            this.redTeam.delete(key);
        });
        this.weather = Weather_1.Weather.NEUTRAL;
        this.winnerId = "";
        this.room.broadcast(types_1.Transfer.SIMULATION_STOP);
        delete this.room;
    }
    onFinish() {
        var _a;
        this.finished = true;
        if (this.blueTeam.size === 0 && this.redTeam.size > 0) {
            this.winnerId = this.redPlayerId;
        }
        else if (this.redTeam.size === 0 && this.blueTeam.size > 0) {
            this.winnerId = this.bluePlayerId;
        }
        const winningTeam = this.winnerId === this.redPlayerId
            ? this.redTeam
            : this.winnerId === this.bluePlayerId
                ? this.blueTeam
                : null;
        if (winningTeam) {
            winningTeam.forEach((p) => {
                const entity = p;
                entity.status.clearNegativeStatus(entity);
                if (entity.status.resurrecting) {
                    entity.status.resurrecting = false;
                    entity.resurrect();
                }
                if (!entity.status.tree) {
                    entity.action = Game_1.PokemonActionState.HOP;
                }
            });
        }
        const playersToProcess = [
            {
                player: this.redPlayer,
                playerId: this.redPlayerId,
                opponentTeam: this.blueTeam,
                opponentPlayer: this.bluePlayer,
                opponentPlayerId: this.bluePlayerId
            },
            {
                player: this.bluePlayer,
                playerId: this.bluePlayerId,
                opponentTeam: this.redTeam,
                opponentPlayer: this.redPlayer,
                opponentPlayerId: this.redPlayerId
            }
        ];
        for (const { player, playerId, opponentTeam, opponentPlayer, opponentPlayerId } of playersToProcess) {
            const isPVEPlayer = playerId === "pve" || !player;
            if (isPVEPlayer)
                continue;
            const isGhostPlayer = this.id !== player.simulationId;
            const isGhostOpponent = playerId === this.bluePlayerId && this.isGhostBattle;
            const isPvE = opponentPlayerId === "pve";
            const battleResult = this.winnerId === playerId
                ? Game_1.BattleResult.WIN
                : this.winnerId === opponentPlayerId
                    ? Game_1.BattleResult.DEFEAT
                    : Game_1.BattleResult.DRAW;
            if (!isGhostPlayer) {
                player.addBattleResult(player.opponentId, player.opponentName, battleResult, player.opponentAvatar, this.weather);
                const previousBattleResult = player.history
                    .filter((stage) => stage.id !== "pve" && stage.result !== Game_1.BattleResult.DRAW)
                    .map((stage) => stage.result)
                    .at(-2);
                if (battleResult === Game_1.BattleResult.DRAW) {
                }
                else if (battleResult !== previousBattleResult) {
                    player.streak = 0;
                }
                else {
                    player.streak += 1;
                }
            }
            const client = this.room.clients.find((cli) => cli.auth.uid === playerId);
            if (this.winnerId === playerId) {
                if (!isPvE && !isGhostPlayer) {
                    const hasLeadersCrest = (_a = opponentPlayer === null || opponentPlayer === void 0 ? void 0 : opponentPlayer.items.includes(Item_1.Item.LEADERS_CREST)) !== null && _a !== void 0 ? _a : false;
                    const moneyGain = hasLeadersCrest ? 5 : 1;
                    player.addMoney(moneyGain, true, null);
                    client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.PLAYER_INCOME, moneyGain);
                    if (hasLeadersCrest && opponentPlayer) {
                        (0, array_1.removeInArray)(opponentPlayer.items, Item_1.Item.LEADERS_CREST);
                        player.items.push(Item_1.Item.LEADERS_CREST);
                    }
                }
            }
            else {
                const playerDamage = this.room.computeRoundDamage(opponentTeam, this.stageLevel);
                if (!isGhostPlayer) {
                    player.life -= playerDamage;
                    if (playerDamage > 0) {
                        client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.PLAYER_DAMAGE, playerDamage);
                    }
                }
                if (opponentPlayer && !isGhostOpponent) {
                    opponentPlayer.gameStats.totalPlayerDamageDealt += playerDamage;
                    if (opponentPlayer.items.includes(Item_1.Item.MISSION_ORDER_RED) &&
                        opponentPlayer.gameStats.totalPlayerDamageDealt >= 100) {
                        opponentPlayer.completeMissionOrder(Item_1.Item.MISSION_ORDER_RED);
                    }
                }
            }
            if (this.weather !== Weather_1.Weather.NEUTRAL &&
                (0, synergies_1.getSynergyStep)(player.synergies, Synergy_1.Synergy.ROCK) > 0 &&
                !isGhostPlayer &&
                !isPvE) {
                const rockCollected = Item_1.WeatherRocksByWeather.get(this.weather);
                if (rockCollected) {
                    player.weatherRocks.push(rockCollected);
                    if (player.weatherRocks.length > 3) {
                        player.weatherRocks.shift();
                    }
                    player.updateWeatherRocks();
                }
            }
        }
        this.room.rankPlayers();
    }
    applyCurse(effect, opponentTeamNumber) {
        const team = opponentTeamNumber === Game_1.Team.RED_TEAM ? this.blueTeam : this.redTeam;
        const opponentTeam = opponentTeamNumber === Game_1.Team.BLUE_TEAM ? this.blueTeam : this.redTeam;
        const opponentsCursable = (0, random_1.shuffleArray)([...opponentTeam.values()]).filter((p) => p.hp > 0);
        const curser = (0, schemas_1.schemaValues)(team).find((e) => e.types.has(Synergy_1.Synergy.GHOST));
        if (!curser)
            return;
        if (effect === Effect_1.EffectEnum.CURSE_OF_VULNERABILITY) {
            const highestDef = Math.max(...opponentsCursable.map((p) => p.def + p.speDef));
            const enemyWithHighestDef = (0, random_1.pickRandomIn)(opponentsCursable.filter((p) => p.def + p.speDef === highestDef));
            if (enemyWithHighestDef) {
                enemyWithHighestDef.addDefense(-4, curser, 0, false);
                enemyWithHighestDef.addSpecialDefense(-4, curser, 0, false);
                enemyWithHighestDef.status.curseVulnerability = true;
                enemyWithHighestDef.status.triggerFlinch(30000, enemyWithHighestDef);
            }
        }
        if (effect === Effect_1.EffectEnum.CURSE_OF_WEAKNESS) {
            const highestAtk = Math.max(...opponentsCursable.map((p) => p.atk));
            const enemyWithHighestAtk = (0, random_1.pickRandomIn)(opponentsCursable.filter((p) => p.atk === highestAtk));
            if (enemyWithHighestAtk) {
                enemyWithHighestAtk.addAttack(Math.round(-0.15 * enemyWithHighestAtk.atk), curser, 0, false);
                enemyWithHighestAtk.status.curseWeakness = true;
                enemyWithHighestAtk.status.triggerParalysis(30000, enemyWithHighestAtk, null);
            }
        }
        if (effect === Effect_1.EffectEnum.CURSE_OF_TORMENT) {
            const highestAP = Math.max(...opponentsCursable.map((p) => p.ap));
            const enemyWithHighestAP = (0, random_1.pickRandomIn)(opponentsCursable.filter((p) => p.ap === highestAP));
            if (enemyWithHighestAP) {
                enemyWithHighestAP.addAbilityPower(-25, curser, 0, false);
                enemyWithHighestAP.status.curseTorment = true;
                enemyWithHighestAP.status.triggerFatigue(30000, enemyWithHighestAP);
            }
        }
        if (effect === Effect_1.EffectEnum.CURSE_OF_FATE) {
            const strongestEnemy = (0, pokemon_entity_1.getStrongestUnit)(opponentsCursable);
            if (strongestEnemy) {
                strongestEnemy.status.curseFate = true;
                strongestEnemy.status.triggerCurse(12000, strongestEnemy);
            }
        }
    }
    addPikachuSurferToBoard(team) {
        const player = team === Game_1.Team.RED_TEAM ? this.redPlayer : this.bluePlayer;
        const pikachuSurfer = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.PIKACHU_SURFER, player);
        if (player)
            player.pokemonsPlayed.add(Pokemon_1.Pkm.PIKACHU_SURFER);
        const coord = this.getFirstFreeCell(team);
        if (coord) {
            this.addPokemon(pikachuSurfer, coord.x, coord.y, team, true);
        }
    }
    handleTidalWaveForTeam(team) {
        const effects = team === Game_1.Team.RED_TEAM ? this.redEffects : this.blueEffects;
        const tidalWaveLevel = effects.has(Effect_1.EffectEnum.WATER_VEIL) || effects.has(Effect_1.EffectEnum.SURGE_SURFER)
            ? 3
            : effects.has(Effect_1.EffectEnum.HYDRATION)
                ? 2
                : effects.has(Effect_1.EffectEnum.SWIFT_SWIM)
                    ? 1
                    : 0;
        const shouldTrigger = (tidalWaveLevel > 0 && this.tidalWaveCounter === 1) ||
            (tidalWaveLevel === 3 && this.tidalWaveCounter === 2) ||
            effects.has(Effect_1.EffectEnum.SURGE_SURFER);
        if (shouldTrigger) {
            this.triggerTidalWave(team, tidalWaveLevel);
            if (effects.has(Effect_1.EffectEnum.SURGE_SURFER) && this.tidalWaveCounter === 1) {
                this.addPikachuSurferToBoard(team);
            }
        }
    }
    triggerTidalWave(team, tidalWaveLevel, healAll = false) {
        const isRed = team === Game_1.Team.RED_TEAM;
        const orientation = isRed ? Game_1.Orientation.DOWN : Game_1.Orientation.UP;
        this.room.broadcast(types_1.Transfer.ABILITY, {
            id: this.id,
            skill: "TIDAL_WAVE",
            positionX: 0,
            positionY: 0,
            targetX: 0,
            targetY: tidalWaveLevel - 1,
            orientation
        });
        this.room.broadcast(types_1.Transfer.CLEAR_BOARD, {
            simulationId: this.id
        });
        const rowRange = isRed
            ? [...Array(this.board.rows).keys()]
            : [...Array(this.board.rows).keys()].reverse();
        for (const y of rowRange) {
            for (let x = 0; x < this.board.columns; x++) {
                const pokemonHit = this.board.getEntityOnCell(x, y);
                this.board.clearBoardEffect(x, y, this);
                if (pokemonHit) {
                    if (pokemonHit.team === team) {
                        pokemonHit.status.clearNegativeStatus(pokemonHit);
                        if (pokemonHit.types.has(Synergy_1.Synergy.AQUATIC) || healAll) {
                            pokemonHit.handleHeal(tidalWaveLevel * 0.1 * pokemonHit.maxHP, pokemonHit, 0, false);
                        }
                    }
                    else {
                        pokemonHit.handleDamage({
                            damage: tidalWaveLevel * 0.05 * pokemonHit.maxHP,
                            board: this.board,
                            attackType: Game_1.AttackType.TRUE,
                            attacker: null,
                            shouldTargetGainMana: false
                        });
                        let newY = y;
                        if (isRed) {
                            while (newY > 0 &&
                                this.board.getEntityOnCell(x, newY - 1) === undefined) {
                                newY--;
                            }
                        }
                        else {
                            while (newY < this.board.rows - 1 &&
                                this.board.getEntityOnCell(x, newY + 1) === undefined) {
                                newY++;
                            }
                        }
                        if (newY !== y) {
                            pokemonHit.moveTo(x, newY, this.board, true);
                            pokemonHit.cooldown = 500;
                        }
                    }
                    if (pokemonHit.items.has(Item_1.Item.SURFBOARD)) {
                        const surf = abilities_1.AbilityStrategies[Ability_1.Ability.SURF];
                        surf.process(pokemonHit, this.board, null, false, false, tidalWaveLevel);
                    }
                    if (pokemonHit.passive === Passive_1.Passive.PIKACHU_SURFER) {
                        pokemonHit.addPP(pokemonHit.maxPP, pokemonHit, 0, false);
                    }
                }
            }
        }
    }
}
exports.default = Simulation;
__decorate([
    (0, schema_1.type)("string")
], Simulation.prototype, "weather", void 0);
__decorate([
    (0, schema_1.type)("string")
], Simulation.prototype, "winnerId", void 0);
__decorate([
    (0, schema_1.type)({ map: pokemon_entity_1.PokemonEntity })
], Simulation.prototype, "blueTeam", void 0);
__decorate([
    (0, schema_1.type)({ map: pokemon_entity_1.PokemonEntity })
], Simulation.prototype, "redTeam", void 0);
__decorate([
    (0, schema_1.type)({ map: dps_1.default })
], Simulation.prototype, "blueDpsMeter", void 0);
__decorate([
    (0, schema_1.type)({ map: dps_1.default })
], Simulation.prototype, "redDpsMeter", void 0);
__decorate([
    (0, schema_1.type)("string")
], Simulation.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], Simulation.prototype, "bluePlayerId", void 0);
__decorate([
    (0, schema_1.type)("string")
], Simulation.prototype, "redPlayerId", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Simulation.prototype, "isGhostBattle", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Simulation.prototype, "started", void 0);
//# sourceMappingURL=simulation.js.map