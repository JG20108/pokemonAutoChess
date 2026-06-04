import { type Room } from "@colyseus/sdk";
import type { NavigateFunction } from "react-router";
import type LobbyState from "../../../rooms/states/lobby-state";
import type { AppDispatch } from "../stores";
export declare function joinLobbyRoom(dispatch: AppDispatch, navigate: NavigateFunction): Promise<Room<{
    state: LobbyState;
}>>;
export declare function joinExistingPreparationRoom(roomId: string, dispatch: AppDispatch, navigate: NavigateFunction, password?: string): Promise<void>;
