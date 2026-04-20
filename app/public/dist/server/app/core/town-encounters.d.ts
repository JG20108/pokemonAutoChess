import { Pkm } from "../types/enum/Pokemon";
export declare const TownEncounters: {
    readonly KECLEON: Pkm.KECLEON;
    readonly CHANSEY: Pkm.CHANSEY;
    readonly ELECTIVIRE: Pkm.ELECTIVIRE;
    readonly XATU: Pkm.XATU;
    readonly KANGASKHAN: Pkm.KANGASKHAN;
    readonly DUSKULL: Pkm.DUSKULL;
    readonly MAROWAK: Pkm.MAROWAK;
    readonly WOBBUFFET: Pkm.WOBBUFFET;
    readonly SPINDA: Pkm.SPINDA;
    readonly REGIROCK: Pkm.REGIROCK;
    readonly MUNCHLAX: Pkm.MUNCHLAX;
    readonly SABLEYE: Pkm.SABLEYE;
    readonly CELEBI: Pkm.CELEBI;
};
export type TownEncounter = (typeof TownEncounters)[keyof typeof TownEncounters];
export declare const TownEncounterSellPrice: {
    [encounter in TownEncounter]?: number;
};
export declare const TownEncountersByStage: {
    [stageLevel: number]: {
        [encounter in TownEncounter]?: number;
    };
};
