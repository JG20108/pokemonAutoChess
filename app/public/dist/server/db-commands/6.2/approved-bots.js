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
const logger_1 = require("../../app/utils/logger");
const bot_v2_1 = require("../../app/models/mongo-models/bot-v2");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        try {
            logger_1.logger.info("connect to db ...", process.env.MONGO_URI);
            const db = yield (0, mongoose_1.connect)(process.env.MONGO_URI);
            logger_1.logger.info("Update all bots to have the approved field set to true");
            const res = yield bot_v2_1.BotV2.updateMany({ approved: { $exists: false } }, { $set: { approved: true } });
            logger_1.logger.info(`${res.matchedCount} bots matched, ${res.modifiedCount} modified`);
            yield db.disconnect();
        }
        catch (e) {
            logger_1.logger.error("Parsing error:", e);
        }
    });
}
main();
//# sourceMappingURL=approved-bots.js.map