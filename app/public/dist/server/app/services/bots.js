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
exports.fetchBotsList = fetchBotsList;
exports.fetchBot = fetchBot;
exports.addBotToDatabase = addBotToDatabase;
exports.deleteBotFromDatabase = deleteBotFromDatabase;
exports.approveBot = approveBot;
const colyseus_1 = require("colyseus");
const bot_v2_1 = require("../models/mongo-models/bot-v2");
const discord_1 = require("./discord");
function fetchBotsList(approved, usingPkm) {
    return __awaiter(this, void 0, void 0, function* () {
        const pageSize = 100;
        const maxPages = 20;
        const allBots = [];
        const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        let page = 0;
        let hasMoreData = true;
        while (hasMoreData && page < maxPages) {
            try {
                const queryFilter = {};
                if (approved !== undefined) {
                    queryFilter.approved = approved;
                }
                if (usingPkm) {
                    queryFilter["steps.board.name"] = usingPkm;
                }
                const botsData = yield bot_v2_1.BotV2.find(queryFilter, { steps: 0 }, { sort: { elo: -1, id: 1 }, limit: pageSize, skip: page * pageSize }).lean();
                if (!botsData || botsData.length === 0) {
                    hasMoreData = false;
                    break;
                }
                const processedBots = botsData.map((bot) => ({
                    name: bot.name,
                    avatar: bot.avatar,
                    id: bot.id,
                    approved: bot.approved,
                    author: bot.author,
                    elo: bot.elo
                }));
                allBots.push(...processedBots);
                if (botsData.length < pageSize) {
                    hasMoreData = false;
                }
                else {
                    yield wait(100);
                    page++;
                }
            }
            catch (error) {
                colyseus_1.logger.error(`Error fetching bots page ${page}:`, error);
                hasMoreData = false;
            }
        }
        if (page >= maxPages) {
            colyseus_1.logger.warn(`Reached maximum page limit (${maxPages}) while fetching bots`);
        }
        return allBots;
    });
}
function fetchBot(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bot = yield bot_v2_1.BotV2.findOne({ id }, {});
            return bot;
        }
        catch (e) {
            colyseus_1.logger.error(`Error fetching bot data id ${id}: ${e}`);
            return null;
        }
    });
}
function addBotToDatabase(bot) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        colyseus_1.logger.info(`Adding bot ${bot.name} created by ${bot.author}`);
        const resultDelete = yield bot_v2_1.BotV2.deleteMany({
            avatar: bot.avatar,
            author: bot.author
        });
        const resultCreate = yield bot_v2_1.BotV2.create({
            name: bot.name,
            avatar: bot.avatar,
            elo: (_a = bot.elo) !== null && _a !== void 0 ? _a : 1200,
            author: bot.author,
            steps: bot.steps,
            id: crypto.randomUUID()
        });
        colyseus_1.logger.info(`Bot with id ${resultCreate.id} created`);
        discord_1.discordService.announceBotCreation(resultCreate);
        return resultCreate;
    });
}
function deleteBotFromDatabase(botId, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const resultDelete = yield bot_v2_1.BotV2.deleteOne({ id: botId });
        if (resultDelete.deletedCount > 0) {
            colyseus_1.logger.info(`Bot with id ${botId} has been deleted by ${user.displayName}`);
        }
        else {
            colyseus_1.logger.warn(`Bot with id ${botId} not found`);
        }
        return resultDelete;
    });
}
function approveBot(botId, approved, user) {
    return __awaiter(this, void 0, void 0, function* () {
        colyseus_1.logger.debug(`${user.displayName} is ${approved ? "approving" : "disapproving"} bot ${botId}`);
        const result = yield bot_v2_1.BotV2.updateOne({ id: botId }, { $set: { approved } });
        if (result.modifiedCount > 0) {
            colyseus_1.logger.info(`Bot with id ${botId} ${approved ? "approved" : "disapproved"}`);
        }
        else {
            colyseus_1.logger.warn(`Bot with id ${botId} not found`);
        }
        return result;
    });
}
//# sourceMappingURL=bots.js.map