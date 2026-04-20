import { BattleMissionData, DeliveryMissionData, Expedition, ExpeditionData, ExpeditionRank, ExpeditionType, ExplorationMissionData, RescueMissionData } from "../types/enum/Expedition";
import { IUserMetadataClient, IUserMetadataMongo, IUserMetadataUnpacked } from "../types/interfaces/UserMetadata";
export declare function getPlayerExpeditions(user: IUserMetadataClient | IUserMetadataMongo | IUserMetadataUnpacked): Expedition[];
export declare function getExpeditionTier(level: number): ExpeditionRank;
export declare function getExpeditionLabel(expedition: Expedition): string;
export declare function getExpeditionData(expedition: Expedition): ExpeditionData;
export declare function getExpeditionData(expedition: Expedition & {
    type: ExpeditionType.RESCUE;
}): RescueMissionData;
export declare function getExpeditionData(expedition: Expedition & {
    type: ExpeditionType.EXPLORATION;
}): ExplorationMissionData;
export declare function getExpeditionData(expedition: Expedition & {
    type: ExpeditionType.BATTLE;
}): BattleMissionData;
export declare function getExpeditionData(expedition: Expedition & {
    type: ExpeditionType.DELIVERY;
}): DeliveryMissionData;
