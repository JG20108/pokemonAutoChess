import { PayloadAction } from "@reduxjs/toolkit";
import type { Booster } from "../../../types/Booster";
export interface IUserBoostersState {
    boosterContent: Booster;
    lastBoostersOpened: Booster[];
}
export declare const boostersSlice: import("@reduxjs/toolkit").Slice<IUserBoostersState, {
    setBoosterContent: (state: {
        boosterContent: {
            name: import("../../../types/enum/Pokemon").Pkm;
            shiny: boolean;
            emotion: import("../../../types").Emotion;
            new: boolean;
        }[];
        lastBoostersOpened: {
            name: import("../../../types/enum/Pokemon").Pkm;
            shiny: boolean;
            emotion: import("../../../types").Emotion;
            new: boolean;
        }[][];
    }, action: PayloadAction<Booster>) => void;
    resetLastBoostersOpened: (state: {
        boosterContent: {
            name: import("../../../types/enum/Pokemon").Pkm;
            shiny: boolean;
            emotion: import("../../../types").Emotion;
            new: boolean;
        }[];
        lastBoostersOpened: {
            name: import("../../../types/enum/Pokemon").Pkm;
            shiny: boolean;
            emotion: import("../../../types").Emotion;
            new: boolean;
        }[][];
    }) => void;
    resetBoosters: () => IUserBoostersState;
}, "boosters", "boosters", import("@reduxjs/toolkit").SliceSelectors<IUserBoostersState>>;
export declare const setBoosterContent: import("@reduxjs/toolkit").ActionCreatorWithPayload<Booster, "boosters/setBoosterContent">, resetLastBoostersOpened: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"boosters/resetLastBoostersOpened">, resetBoosters: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"boosters/resetBoosters">;
declare const _default: import("redux").Reducer<IUserBoostersState>;
export default _default;
