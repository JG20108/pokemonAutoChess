export interface ITwitchBlacklistedStreamer {
    streamerLogin: string;
    reason?: string;
    createdBy: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const _default: import("mongoose").Model<ITwitchBlacklistedStreamer, {}, {}, {}, import("mongoose").Document<unknown, {}, ITwitchBlacklistedStreamer, {}, import("mongoose").DefaultSchemaOptions> & ITwitchBlacklistedStreamer & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, ITwitchBlacklistedStreamer>;
export default _default;
