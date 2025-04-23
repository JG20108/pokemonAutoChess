"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPodium = exports.setItemsProposition = exports.refreshShopUI = exports.changeShop = exports.changePlayer = exports.setShopLocked = exports.setShopFreeRolls = exports.setMoney = exports.setInterest = exports.setStreak = exports.updateExperienceManager = exports.removePlayer = exports.addPlayer = exports.setSpecialGameRule = exports.setNoELO = exports.setWeather = exports.setStageLevel = exports.setPhase = exports.setAfterGameId = exports.setRoundTime = exports.setSynergies = exports.setLife = exports.setPlayer = exports.setLoadingProgress = exports.addDpsMeter = exports.changeDpsMeter = exports.removeDpsMeter = exports.leaveGame = exports.setEmotesUnlocked = exports.setPokemonProposition = exports.setAdditionalPokemons = exports.setSimulation = exports.gameSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const experience_manager_1 = __importDefault(require("../../../models/colyseus-models/experience-manager"));
const Config_1 = require("../../../types/Config");
const Game_1 = require("../../../types/enum/Game");
const Weather_1 = require("../../../types/enum/Weather");
const game_1 = require("../pages/game");
const schemas_1 = require("../../../utils/schemas");
const initialState = {
    afterGameId: "",
    phaseDuration: Config_1.StageDuration[1],
    roundTime: Config_1.StageDuration[1],
    phase: Game_1.GamePhaseState.PICK,
    players: new Array(),
    simulations: new Array(),
    stageLevel: 0,
    weather: Weather_1.Weather.NEUTRAL,
    noElo: false,
    currentPlayerId: "",
    currentSimulationId: "",
    currentTeam: Game_1.Team.BLUE_TEAM,
    money: 5,
    interest: 0,
    streak: 0,
    shopFreeRolls: 0,
    shopLocked: false,
    experienceManager: new experience_manager_1.default(),
    shop: new Array(),
    itemsProposition: new Array(),
    pokemonsProposition: new Array(),
    currentPlayerSynergies: new Array(),
    blueDpsMeter: new Array(),
    redDpsMeter: new Array(),
    emotesUnlocked: [],
    additionalPokemons: new Array(),
    specialGameRule: null,
    podium: new Array()
};
exports.gameSlice = (0, toolkit_1.createSlice)({
    name: "game",
    initialState: initialState,
    reducers: {
        setRoundTime: (state, action) => {
            if (action.payload > state.roundTime)
                state.phaseDuration = action.payload;
            state.roundTime = action.payload;
        },
        setAfterGameId: (state, action) => {
            state.afterGameId = action.payload;
        },
        setPhase: (state, action) => {
            state.phase = action.payload;
        },
        setStageLevel: (state, action) => {
            state.stageLevel = action.payload;
        },
        setNoELO: (state, action) => {
            state.noElo = action.payload;
        },
        setSpecialGameRule: (state, action) => {
            state.specialGameRule = action.payload;
        },
        addPlayer: (state, action) => {
            state.players.push(JSON.parse(JSON.stringify(action.payload)));
        },
        removePlayer: (state, action) => {
            state.players = state.players.filter((p) => p.id !== action.payload.id);
        },
        setMoney: (state, action) => {
            state.money = action.payload;
        },
        setInterest: (state, action) => {
            state.interest = action.payload;
        },
        setStreak: (state, action) => {
            state.streak = action.payload;
        },
        setShopLocked: (state, action) => {
            state.shopLocked = action.payload;
        },
        setShopFreeRolls: (state, action) => {
            state.shopFreeRolls = action.payload;
        },
        updateExperienceManager: (state, action) => {
            state.experienceManager = Object.assign(Object.assign({}, state.experienceManager), { experience: action.payload.experience, expNeeded: action.payload.expNeeded, level: action.payload.level });
        },
        changePlayer: (state, action) => {
            const index = state.players.findIndex((e) => action.payload.id == e.id);
            if (index >= 0) {
                state.players[index][action.payload.field] = action.payload.value;
            }
            else {
                console.error(`changePlayer: Player not found ${action.payload.id} in ${state.players.map((p) => p.id)}`);
            }
        },
        changeShop: (state, action) => {
            state.shop[action.payload.index] = action.payload.value;
        },
        refreshShopUI: (state) => {
            state.shop = state.shop.slice();
        },
        setItemsProposition: (state, action) => {
            state.itemsProposition = action.payload;
        },
        setPokemonProposition: (state, action) => {
            state.pokemonsProposition = action.payload;
        },
        setAdditionalPokemons: (state, action) => {
            state.additionalPokemons = action.payload;
        },
        setSynergies: (state, action) => {
            if (state.currentPlayerId === action.payload.id) {
                state.currentPlayerSynergies = Array.from(action.payload.value);
            }
            const playerToUpdate = state.players.findIndex((player) => player.id === action.payload.id);
            if (playerToUpdate !== -1) {
                state.players.at(playerToUpdate).synergies = new Map((0, schemas_1.entries)(action.payload.value));
            }
        },
        setLife: (state, action) => {
            var _a, _b;
            (_b = (_a = (0, game_1.getGameScene)()) === null || _a === void 0 ? void 0 : _a.board) === null || _b === void 0 ? void 0 : _b.updateAvatarLife(action.payload.id, action.payload.value);
        },
        setLoadingProgress: (state, action) => {
            const player = state.players.find((p) => p.id === action.payload.id);
            if (player) {
                player.loadingProgress = action.payload.value;
            }
        },
        setWeather: (state, action) => {
            if (state.currentSimulationId === action.payload.id) {
                state.weather = action.payload.value;
            }
        },
        setSimulation: (state, action) => {
            if (state.currentPlayerId === action.payload.bluePlayerId ||
                state.currentPlayerId === action.payload.redPlayerId) {
                state.currentSimulationId = action.payload.id;
                state.currentTeam =
                    state.currentPlayerId === action.payload.bluePlayerId
                        ? Game_1.Team.BLUE_TEAM
                        : Game_1.Team.RED_TEAM;
                state.weather = action.payload.weather;
                state.blueDpsMeter = new Array();
                state.redDpsMeter = new Array();
                action.payload.blueDpsMeter.forEach((dps) => {
                    state.blueDpsMeter.push(structuredClone(dps));
                });
                action.payload.redDpsMeter.forEach((dps) => {
                    state.redDpsMeter.push(structuredClone(dps));
                });
            }
        },
        setPlayer: (state, action) => {
            state.currentPlayerId = action.payload.id;
            state.currentSimulationId = action.payload.simulationId;
            state.currentTeam = action.payload.team;
            state.currentPlayerSynergies = Array.from(action.payload.synergies);
        },
        addDpsMeter: (state, action) => {
            const { value, team, id } = action.payload;
            const dpsMeter = team === Game_1.Team.BLUE_TEAM ? state.blueDpsMeter : state.redDpsMeter;
            if (state.currentSimulationId === id &&
                dpsMeter.find((d) => d.id == value.id) === undefined) {
                dpsMeter.push(structuredClone(value));
            }
        },
        changeDpsMeter: (state, action) => {
            const { value, field, team, id, simulationId } = action.payload;
            const dpsMeter = team === Game_1.Team.BLUE_TEAM ? state.blueDpsMeter : state.redDpsMeter;
            if (state.currentSimulationId === simulationId) {
                const index = dpsMeter.findIndex((e) => id == e.id);
                if (index >= 0) {
                    dpsMeter[index][field] = value;
                }
            }
        },
        removeDpsMeter: (state, action) => {
            const { team, simulationId } = action.payload;
            if (state.currentSimulationId === simulationId) {
                if (team === Game_1.Team.BLUE_TEAM)
                    state.blueDpsMeter = new Array();
                if (team === Game_1.Team.RED_TEAM)
                    state.redDpsMeter = new Array();
            }
        },
        setEmotesUnlocked: (state, action) => {
            state.emotesUnlocked = action.payload.split(",");
        },
        setPodium(state, action) {
            state.podium = action.payload;
        },
        leaveGame: () => initialState
    }
});
_a = exports.gameSlice.actions, exports.setSimulation = _a.setSimulation, exports.setAdditionalPokemons = _a.setAdditionalPokemons, exports.setPokemonProposition = _a.setPokemonProposition, exports.setEmotesUnlocked = _a.setEmotesUnlocked, exports.leaveGame = _a.leaveGame, exports.removeDpsMeter = _a.removeDpsMeter, exports.changeDpsMeter = _a.changeDpsMeter, exports.addDpsMeter = _a.addDpsMeter, exports.setLoadingProgress = _a.setLoadingProgress, exports.setPlayer = _a.setPlayer, exports.setLife = _a.setLife, exports.setSynergies = _a.setSynergies, exports.setRoundTime = _a.setRoundTime, exports.setAfterGameId = _a.setAfterGameId, exports.setPhase = _a.setPhase, exports.setStageLevel = _a.setStageLevel, exports.setWeather = _a.setWeather, exports.setNoELO = _a.setNoELO, exports.setSpecialGameRule = _a.setSpecialGameRule, exports.addPlayer = _a.addPlayer, exports.removePlayer = _a.removePlayer, exports.updateExperienceManager = _a.updateExperienceManager, exports.setStreak = _a.setStreak, exports.setInterest = _a.setInterest, exports.setMoney = _a.setMoney, exports.setShopFreeRolls = _a.setShopFreeRolls, exports.setShopLocked = _a.setShopLocked, exports.changePlayer = _a.changePlayer, exports.changeShop = _a.changeShop, exports.refreshShopUI = _a.refreshShopUI, exports.setItemsProposition = _a.setItemsProposition, exports.setPodium = _a.setPodium;
exports.default = exports.gameSlice.reducer;
//# sourceMappingURL=GameStore.js.map