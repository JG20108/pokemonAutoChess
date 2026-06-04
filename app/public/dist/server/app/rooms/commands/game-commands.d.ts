import { Command } from "@colyseus/command";
import { type Client } from "colyseus";
import type Player from "../../models/colyseus-models/player";
import { type Pokemon } from "../../models/colyseus-models/pokemon";
import { type IClient, type IDragDropCombineMessage, type IDragDropItemMessage, type IDragDropMessage } from "../../types";
import { SpecialGameRule } from "../../types/enum/SpecialGameRule";
import type { IDetailledPokemon } from "../../types/models/bot-v2";
import type GameRoom from "../game-room";
import type GameState from "../states/game-state";
export declare class OnBuyPokemonCommand extends Command<GameRoom, {
    playerId: string;
    index: number;
}> {
    execute({ playerId, index }: {
        playerId: any;
        index: any;
    }): void;
}
export declare class OnRemoveFromShopCommand extends Command<GameRoom, {
    playerId: string;
    index: number;
}> {
    execute({ playerId, index }: {
        playerId: any;
        index: any;
    }): void;
}
export declare class OnPokemonCatchCommand extends Command<GameRoom, {
    client: Client;
    playerId: string;
    id: string;
}> {
    execute({ client, playerId, id }: {
        client: any;
        playerId: any;
        id: any;
    }): Promise<void>;
}
export declare class OnDragDropPokemonCommand extends Command<GameRoom, {
    client: IClient;
    detail: IDragDropMessage;
}> {
    execute({ client, detail }: {
        client: any;
        detail: any;
    }): never[] | undefined;
    swapPokemonPositions(player: Player, pokemon: Pokemon, x: number, y: number): void;
}
export declare class OnSwitchBenchAndBoardCommand extends Command<GameRoom, {
    client: Client;
    pokemonId: string;
}> {
    execute({ client, pokemonId }: {
        client: any;
        pokemonId: any;
    }): void;
}
export declare class OnDragDropCombineCommand extends Command<GameRoom, {
    client: Client;
    detail: IDragDropCombineMessage;
}> {
    execute({ client, detail }: {
        client: any;
        detail: any;
    }): void;
}
export declare class OnDragDropItemCommand extends Command<GameRoom, {
    client: Client;
    detail: IDragDropItemMessage;
}> {
    execute({ client, detail }: {
        client: Client;
        detail: IDragDropItemMessage;
    }): void;
}
export declare class OnSellPokemonCommand extends Command<GameRoom, {
    client: Client;
    pokemonId: string;
}> {
    execute({ client, pokemonId }: {
        client: any;
        pokemonId: any;
    }): void;
}
export declare class OnShopRerollCommand extends Command<GameRoom, string> {
    execute(id: any): void;
}
export declare class OnLockCommand extends Command<GameRoom, string> {
    execute(id: any): void;
}
export declare class OnSpectateCommand extends Command<GameRoom, {
    id: string;
    spectatedPlayerId: string;
}> {
    execute({ id, spectatedPlayerId }: {
        id: any;
        spectatedPlayerId: any;
    }): void;
}
export declare class OnLevelUpCommand extends Command<GameRoom, {
    id: string;
}> {
    execute(id: any): void;
}
export declare class OnPickBerryCommand extends Command<GameRoom, {
    playerId: string;
    berryIndex: number;
}> {
    execute({ playerId, berryIndex }: {
        playerId: any;
        berryIndex: any;
    }): void;
}
export declare class OnJoinCommand extends Command<GameRoom, {
    client: Client;
}> {
    execute({ client }: {
        client: any;
    }): Promise<void>;
}
export declare class OnUpdateCommand extends Command<GameRoom, {
    deltaTime: number;
}> {
    execute({ deltaTime }: {
        deltaTime: any;
    }): OnUpdatePhaseCommand[] | undefined;
}
export declare class OnUpdatePhaseCommand extends Command<GameRoom> {
    execute(): void;
    computeAchievements(): void;
    checkEndGame(): boolean;
    computeIncome(isPVE: boolean, specialGameRule: SpecialGameRule | null): void;
    checkDeath(): void;
    initializePickingPhase(): Command<import("colyseus").Room<import("colyseus").RoomOptions>, unknown>[];
    updatePlayerBetweenStages(player: Player): void;
    checkForLazyTeam(): void;
    stopPickingPhase(): void;
    stopFightingPhase(): void;
    stopTownPhase(): void;
    initializeTownPhase(): void;
    initializeFightingPhase(): void;
    spawnWanderingPokemons(): void;
    spawnBabyEggs(player: Player, isPVE: boolean): void;
}
export declare class OnOverwriteBoardCommand extends Command<GameRoom> {
    execute({ playerId, board }: {
        playerId: string;
        board: IDetailledPokemon[];
    }): void;
}
export declare function onPokemonChangePosition({ pokemon, newX, newY, player, oldX, oldY, state, doNotRemoveItems }: {
    pokemon: Pokemon;
    newX: number;
    newY: number;
    player: Player;
    oldX: number;
    oldY: number;
    state: GameState;
    doNotRemoveItems?: boolean;
}): void;
