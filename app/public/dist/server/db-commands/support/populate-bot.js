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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBots = addBots;
const nanoid_1 = require("nanoid");
const bot_v2_1 = require("../../app/models/mongo-models/bot-v2");
const logger_1 = require("../../app/utils/logger");
const array_1 = require("../../app/utils/array");
function addBots(bots) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const bot of (0, array_1.wrapInArray)(bots)) {
            try {
                const resultDelete = yield bot_v2_1.BotV2.deleteMany({
                    avatar: bot.avatar,
                    author: bot.author
                });
                logger_1.logger.debug(resultDelete);
                logger_1.logger.debug(`creating BotV2 ${bot.avatar} by ${bot.author}...`);
                const resultCreate = yield bot_v2_1.BotV2.create({
                    name: bot.name,
                    avatar: bot.avatar,
                    elo: bot.elo ? bot.elo : 1200,
                    author: bot.author,
                    steps: bot.steps,
                    id: (0, nanoid_1.nanoid)()
                });
                logger_1.logger.debug(resultCreate.id, resultCreate.name, resultCreate.avatar, resultCreate.author, resultCreate.elo);
            }
            catch (e) {
                logger_1.logger.error("Error adding to DB:", e);
            }
        }
    });
}
//# sourceMappingURL=populate-bot.js.map