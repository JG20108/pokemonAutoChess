"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
const title_statistic_1 = __importDefault(require("../../app/models/mongo-models/title-statistic"));
const user_metadata_1 = __importDefault(require("../../app/models/mongo-models/user-metadata"));
const types_1 = require("../../app/types");
const logger_1 = require("../../app/utils/logger");
const titlesToRemove = [types_1.Title.DUKE, "DIVER"];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        try {
            logger_1.logger.info("connect to db ...", process.env.MONGO_URI);
            const db = yield (0, mongoose_1.connect)(process.env.MONGO_URI);
            logger_1.logger.info("Remove the obsolete titles for all players");
            const res = yield user_metadata_1.default.updateMany({}, { $pull: { titles: { $in: titlesToRemove } } });
            logger_1.logger.info(`Titles ${titlesToRemove.join(",")} removed for ${res.modifiedCount} players`);
            for (const title of titlesToRemove) {
                logger_1.logger.info(`Remove title statistic for ${title}`);
                yield title_statistic_1.default.deleteOne({ name: title });
                logger_1.logger.info(`Title statistic for ${title} removed`);
            }
            yield db.disconnect();
        }
        catch (e) {
            logger_1.logger.error("Parsing error:", e);
        }
    });
}
main();
//# sourceMappingURL=remove-titles.js.map