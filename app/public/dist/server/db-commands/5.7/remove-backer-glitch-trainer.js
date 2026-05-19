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
const user_metadata_1 = __importDefault(require("../../app/models/mongo-models/user-metadata"));
const types_1 = require("../../app/types");
const logger_1 = require("../../app/utils/logger");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        try {
            logger_1.logger.info("connect to db ...");
            const db = yield (0, mongoose_1.connect)(process.env.MONGO_URI);
            logger_1.logger.info("remove glitch trainer title ...");
            const removeGlitchTrainersTitle = yield user_metadata_1.default.updateMany({ title: "GLITCH_TRAINER" }, { title: types_1.Title.NOVICE });
            logger_1.logger.info(removeGlitchTrainersTitle);
            logger_1.logger.info("remove backer title ...");
            const removeBackerTitle = yield user_metadata_1.default.updateMany({ title: "BACKER" }, { title: types_1.Title.NOVICE });
            logger_1.logger.info(removeBackerTitle);
            logger_1.logger.info("remove glitch trainer titles ...");
            const removeGlitchTrainerTitles = yield user_metadata_1.default.updateMany({ titles: { $in: ["GLITCH_TRAINER"] } }, { $pull: { titles: "GLITCH_TRAINER" } });
            logger_1.logger.info(removeGlitchTrainerTitles);
            logger_1.logger.info("remove backer titles ...");
            const removeBackerTitles = yield user_metadata_1.default.updateMany({ titles: { $in: ["BACKER"] } }, { $pull: { titles: "BACKER" } });
            logger_1.logger.info(removeBackerTitles);
            yield db.disconnect();
        }
        catch (e) {
            logger_1.logger.error("Parsing error:", e);
        }
    });
}
main();
//# sourceMappingURL=remove-backer-glitch-trainer.js.map