import { PayloadAction } from "@reduxjs/toolkit";
import { IAfterGamePlayer } from "../../../types";
import { GameMode } from "../../../types/enum/Game";
export interface IUserAfterState {
    players: IAfterGamePlayer[];
    elligibleToXP: boolean;
    elligibleToELO: boolean;
    gameMode: GameMode;
}
export declare const afterSlice: import("@reduxjs/toolkit").Slice<IUserAfterState, {
    addPlayer: (state: import("immer").WritableDraft<IUserAfterState>, action: PayloadAction<IAfterGamePlayer>) => void;
    leaveAfter: () => IUserAfterState;
    setElligibilityToXP: (state: import("immer").WritableDraft<IUserAfterState>, action: PayloadAction<boolean>) => void;
    setElligibilityToELO: (state: import("immer").WritableDraft<IUserAfterState>, action: PayloadAction<boolean>) => void;
    setGameMode: (state: import("immer").WritableDraft<IUserAfterState>, action: PayloadAction<GameMode>) => void;
}, "after", "after", import("@reduxjs/toolkit").SliceSelectors<IUserAfterState>>;
export declare const addPlayer: import("@reduxjs/toolkit").ActionCreatorWithPayload<IAfterGamePlayer, "after/addPlayer">, leaveAfter: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"after/leaveAfter">, setElligibilityToXP: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "after/setElligibilityToXP">, setElligibilityToELO: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "after/setElligibilityToELO">, setGameMode: import("@reduxjs/toolkit").ActionCreatorWithPayload<GameMode, "after/setGameMode">;
declare const _default: import("redux").Reducer<IUserAfterState>;
export default _default;
