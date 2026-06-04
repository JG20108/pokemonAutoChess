import type { IUserMetadataJSON, IUserMetadataLean, IUserMetadataMongo } from "../../types/interfaces/UserMetadata";
declare const _default: import("mongoose").Model<IUserMetadataMongo, {}, {}, {}, import("mongoose").Document<unknown, {}, IUserMetadataMongo, {}, import("mongoose").DefaultSchemaOptions> & IUserMetadataMongo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IUserMetadataMongo>;
export default _default;
export declare function toLeanUserMetadata(user: IUserMetadataLean | IUserMetadataMongo): IUserMetadataMongo;
export declare function toUserMetadataJSON(user: any): IUserMetadataJSON;
export declare function giveUserExp(user: IUserMetadataMongo, exp: number): void;
