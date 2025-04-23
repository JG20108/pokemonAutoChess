import { PayloadAction } from "@reduxjs/toolkit";
import Simulation from "../../../core/simulation";
import Synergies from "../../../models/colyseus-models/synergies";
import { Emotion, IDps, IExperienceManager, IPlayer, ISimulation } from "../../../types";
import { GamePhaseState, Team } from "../../../types/enum/Game";
import { Item } from "../../../types/enum/Item";
import { Pkm, PkmProposition } from "../../../types/enum/Pokemon";
import { SpecialGameRule } from "../../../types/enum/SpecialGameRule";
import { Weather } from "../../../types/enum/Weather";
import { ILeaderboardInfo } from "../../../types/interfaces/LeaderboardInfo";
export interface GameStateStore {
    afterGameId: string;
    phaseDuration: number;
    roundTime: number;
    phase: GamePhaseState;
    players: IPlayer[];
    simulations: ISimulation[];
    stageLevel: number;
    noElo: boolean;
    specialGameRule: SpecialGameRule | null;
    currentPlayerId: string;
    currentSimulationId: string;
    currentTeam: Team;
    money: number;
    interest: number;
    streak: number;
    shopFreeRolls: number;
    shopLocked: boolean;
    experienceManager: IExperienceManager;
    shop: Pkm[];
    itemsProposition: Item[];
    pokemonsProposition: PkmProposition[];
    currentPlayerSynergies: [string, number][];
    weather: Weather;
    blueDpsMeter: IDps[];
    redDpsMeter: IDps[];
    emotesUnlocked: Emotion[];
    additionalPokemons: Pkm[];
    podium: ILeaderboardInfo[];
}
export declare const gameSlice: import("@reduxjs/toolkit").Slice<GameStateStore, {
    setRoundTime: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<number>) => void;
    setAfterGameId: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<string>) => void;
    setPhase: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<GamePhaseState>) => void;
    setStageLevel: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<number>) => void;
    setNoELO: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<boolean>) => void;
    setSpecialGameRule: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<SpecialGameRule | null>) => void;
    addPlayer: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<IPlayer>) => void;
    removePlayer: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<IPlayer>) => void;
    setMoney: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<number>) => void;
    setInterest: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<number>) => void;
    setStreak: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<number>) => void;
    setShopLocked: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<boolean>) => void;
    setShopFreeRolls: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<number>) => void;
    updateExperienceManager: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<IExperienceManager>) => void;
    changePlayer: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        id: string;
        field: string;
        value: any;
    }>) => void;
    changeShop: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        index: number;
        value: Pkm;
    }>) => void;
    refreshShopUI: (state: import("immer").WritableDraft<GameStateStore>) => void;
    setItemsProposition: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<Item[]>) => void;
    setPokemonProposition: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<PkmProposition[]>) => void;
    setAdditionalPokemons: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<Pkm[]>) => void;
    setSynergies: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        value: Synergies;
        id: string;
    }>) => void;
    setLife: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        value: number;
        id: string;
    }>) => void;
    setLoadingProgress: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        value: number;
        id: string;
    }>) => void;
    setWeather: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        value: Weather;
        id: string;
    }>) => void;
    setSimulation: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<Simulation>) => void;
    setPlayer: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<IPlayer>) => void;
    addDpsMeter: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        value: IDps;
        team: Team;
        id: string;
    }>) => void;
    changeDpsMeter: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        id: string;
        team: Team;
        field: string;
        value: string | number;
        simulationId: string;
    }>) => void;
    removeDpsMeter: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<{
        team: Team;
        simulationId: string;
    }>) => void;
    setEmotesUnlocked: (state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<string>) => void;
    setPodium(state: import("immer").WritableDraft<GameStateStore>, action: PayloadAction<ILeaderboardInfo[]>): void;
    leaveGame: () => GameStateStore;
}, "game", "game", import("@reduxjs/toolkit").SliceSelectors<GameStateStore>>;
export declare const setSimulation: import("@reduxjs/toolkit").ActionCreatorWithPayload<Simulation, "game/setSimulation">, setAdditionalPokemons: import("@reduxjs/toolkit").ActionCreatorWithPayload<Pkm[], "game/setAdditionalPokemons">, setPokemonProposition: import("@reduxjs/toolkit").ActionCreatorWithPayload<PkmProposition[], "game/setPokemonProposition">, setEmotesUnlocked: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "game/setEmotesUnlocked">, leaveGame: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"game/leaveGame">, removeDpsMeter: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    team: Team;
    simulationId: string;
}, "game/removeDpsMeter">, changeDpsMeter: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: string;
    team: Team;
    field: string;
    value: string | number;
    simulationId: string;
}, "game/changeDpsMeter">, addDpsMeter: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    value: IDps;
    team: Team;
    id: string;
}, "game/addDpsMeter">, setLoadingProgress: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    value: number;
    id: string;
}, "game/setLoadingProgress">, setPlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<IPlayer, "game/setPlayer">, setLife: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    value: number;
    id: string;
}, "game/setLife">, setSynergies: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    value: Synergies;
    id: string;
}, "game/setSynergies">, setRoundTime: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "game/setRoundTime">, setAfterGameId: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "game/setAfterGameId">, setPhase: import("@reduxjs/toolkit").ActionCreatorWithPayload<GamePhaseState, "game/setPhase">, setStageLevel: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "game/setStageLevel">, setWeather: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    value: Weather;
    id: string;
}, "game/setWeather">, setNoELO: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "game/setNoELO">, setSpecialGameRule: import("@reduxjs/toolkit").ActionCreatorWithPayload<SpecialGameRule | null, "game/setSpecialGameRule">, addPlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<IPlayer, "game/addPlayer">, removePlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<IPlayer, "game/removePlayer">, updateExperienceManager: import("@reduxjs/toolkit").ActionCreatorWithPayload<IExperienceManager, "game/updateExperienceManager">, setStreak: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "game/setStreak">, setInterest: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "game/setInterest">, setMoney: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "game/setMoney">, setShopFreeRolls: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "game/setShopFreeRolls">, setShopLocked: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "game/setShopLocked">, changePlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: string;
    field: string;
    value: any;
}, "game/changePlayer">, changeShop: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    index: number;
    value: Pkm;
}, "game/changeShop">, refreshShopUI: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"game/refreshShopUI">, setItemsProposition: import("@reduxjs/toolkit").ActionCreatorWithPayload<Item[], "game/setItemsProposition">, setPodium: import("@reduxjs/toolkit").ActionCreatorWithPayload<ILeaderboardInfo[], "game/setPodium">;
declare const _default: import("redux").Reducer<GameStateStore>;
export default _default;
