import type { ITournament } from "../../types/interfaces/Tournament";
export declare const Tournament: import("mongoose").Model<ITournament, {}, {}, {}, import("mongoose").Document<unknown, {}, ITournament, {}, import("mongoose").DefaultSchemaOptions> & ITournament & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, ITournament>;
export default Tournament;
