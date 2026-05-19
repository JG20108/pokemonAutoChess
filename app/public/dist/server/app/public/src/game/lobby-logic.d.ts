import { Room } from "@colyseus/sdk";
import { NavigateFunction } from "react-router";
import LobbyState from "../../../rooms/states/lobby-state";
import { AppDispatch } from "../stores";
export declare function joinLobbyRoom(dispatch: AppDispatch, navigate: NavigateFunction): Promise<Room<{
    state: LobbyState;
}>>;
export declare function joinExistingPreparationRoom(roomId: string, dispatch: AppDispatch, navigate: NavigateFunction, password?: string): Promise<void>;
