export interface IBannedUser {
    uid: string;
    name: string;
    time: number;
    author: string;
}
declare const _default: import("mongoose").Model<IBannedUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IBannedUser, {}, import("mongoose").DefaultSchemaOptions> & IBannedUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IBannedUser>;
export default _default;
