import type { IBot } from "../../types/models/bot-v2";
declare const BotV2: import("mongoose").Model<IBot, {}, {}, {}, import("mongoose").Document<unknown, {}, IBot, {}, import("mongoose").DefaultSchemaOptions> & IBot & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, IBot>;
export { BotV2 };
