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
const pastebin_1 = require("../app/services/pastebin");
const logger_1 = require("../app/utils/logger");
const populate_bot_1 = require("./support/populate-bot");
const args = process.argv.slice(2);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        const url = args[0];
        if (!url) {
            logger_1.logger.error(`Usage: npm run add-bot <pastebin-url>`);
            process.exit(1);
        }
        const id = url.slice(21);
        logger_1.logger.debug(`retrieving id: ${id} ...`);
        const data = yield pastebin_1.pastebinService.getPaste(id, false);
        if (!data) {
            logger_1.logger.error("No data found for this pastebin url");
            process.exit(1);
        }
        logger_1.logger.debug("parsing JSON data ...");
        let botData;
        try {
            botData = JSON.parse(data);
        }
        catch (e) {
            logger_1.logger.error("Parsing error:", e);
            process.exit(1);
        }
        logger_1.logger.debug("connect to db ...");
        const db = yield (0, mongoose_1.connect)(process.env.MONGO_URI);
        yield (0, populate_bot_1.addBots)(botData);
        yield db.disconnect();
    });
}
main();
//# sourceMappingURL=populate-bot-from-pastebin.js.map