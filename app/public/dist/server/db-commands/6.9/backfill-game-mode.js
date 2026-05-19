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
const detailled_statistic_v2_1 = __importDefault(require("../../app/models/mongo-models/detailled-statistic-v2"));
const Game_1 = require("../../app/types/enum/Game");
const logger_1 = require("../../app/utils/logger");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        if (!process.env.MONGO_URI) {
            logger_1.logger.error("MONGO_URI not set; aborting.");
            process.exit(1);
        }
        try {
            logger_1.logger.info("Backfill gameMode: connecting to MongoDB...");
            const db = yield (0, mongoose_1.connect)(process.env.MONGO_URI);
            const missingBefore = yield detailled_statistic_v2_1.default.countDocuments({
                gameMode: { $exists: false }
            });
            logger_1.logger.info(`Backfill gameMode: ${missingBefore} records missing the gameMode field.`);
            if (missingBefore === 0) {
                logger_1.logger.info("Backfill gameMode: nothing to do.");
                yield db.disconnect();
                return;
            }
            const result = yield detailled_statistic_v2_1.default.updateMany({ gameMode: { $exists: false } }, { $set: { gameMode: Game_1.GameMode.CUSTOM_LOBBY } });
            logger_1.logger.info(`Backfill gameMode: matched=${result.matchedCount} modified=${result.modifiedCount}`);
            const missingAfter = yield detailled_statistic_v2_1.default.countDocuments({
                gameMode: { $exists: false }
            });
            logger_1.logger.info(`Backfill gameMode: ${missingAfter} records still missing the field after migration.`);
            yield db.disconnect();
            logger_1.logger.info("Backfill gameMode: done.");
        }
        catch (err) {
            logger_1.logger.error("Backfill gameMode failed:", err);
            process.exitCode = 1;
        }
    });
}
main();
//# sourceMappingURL=backfill-game-mode.js.map