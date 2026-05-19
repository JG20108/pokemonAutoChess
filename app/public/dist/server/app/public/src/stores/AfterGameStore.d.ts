import { IAfterGamePlayer } from "../../../types";
import { GameMode } from "../../../types/enum/Game";
export interface IUserAfterState {
    players: IAfterGamePlayer[];
    eligibleToXP: boolean;
    eligibleToELO: boolean;
    gameMode: GameMode;
}
export declare const addPlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<IAfterGamePlayer, "after/addPlayer">, leaveAfter: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"after/leaveAfter">, setElligibilityToXP: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "after/setElligibilityToXP">, setElligibilityToELO: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "after/setElligibilityToELO">, setGameMode: import("@reduxjs/toolkit").ActionCreatorWithPayload<GameMode, "after/setGameMode">;
declare const _default: import("redux").Reducer<IUserAfterState>;
export default _default;
