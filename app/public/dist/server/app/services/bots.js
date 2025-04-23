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
exports.fetchBots = fetchBots;
exports.getBotsList = getBotsList;
exports.getBotData = getBotData;
exports.addBotToDatabase = addBotToDatabase;
exports.deleteBotFromDatabase = deleteBotFromDatabase;
const bot_v2_1 = require("../models/mongo-models/bot-v2");
const nanoid_1 = require("nanoid");
const colyseus_1 = require("colyseus");
const bot_logic_1 = require("../core/bot-logic");
function fetchBots() {
    return __awaiter(this, void 0, void 0, function* () {
        const bots = new Map();
        const ids = new Array();
        const chunkSize = 100;
        let skip = 0;
        while (true) {
            const botsData = yield bot_v2_1.BotV2.find({}, {}, { sort: { elo: -1 }, limit: chunkSize, skip });
            if (!botsData || botsData.length === 0)
                break;
            botsData.forEach((bot) => {
                if (ids.includes(bot.id)) {
                    const id = (0, nanoid_1.nanoid)();
                    bot.id = id;
                    bot.save();
                }
                ids.push(bot.id);
                bots.set(bot.id, bot);
                colyseus_1.matchMaker.presence.hset("bots", bot.id, JSON.stringify(bot));
            });
            skip += chunkSize;
        }
        return bots;
    });
}
function getBotsList() {
    return __awaiter(this, void 0, void 0, function* () {
        const bots = Object.values(yield colyseus_1.matchMaker.presence.hgetall("bots")).map((bot) => JSON.parse(bot));
        return bots.map((bot) => {
            const errors = (0, bot_logic_1.validateBot)((0, bot_logic_1.rewriteBotRoundsRequiredto1)(bot));
            return {
                name: bot.name,
                avatar: bot.avatar,
                id: bot.id,
                author: bot.author,
                elo: bot.elo,
                valid: errors.length === 0
            };
        });
    });
}
function getBotData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const json = yield colyseus_1.matchMaker.presence.hget("bots", id);
            if (!json)
                return undefined;
            return JSON.parse(json);
        }
        catch (e) {
            colyseus_1.logger.error(`Error parsing bot data id ${id}: ${e}`);
            return undefined;
        }
    });
}
function addBotToDatabase(json) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const resultCreate = yield bot_v2_1.BotV2.create({
            name: json.name,
            avatar: json.avatar,
            elo: (_a = json.elo) !== null && _a !== void 0 ? _a : 1200,
            author: json.author,
            steps: json.steps,
            id: (0, nanoid_1.nanoid)()
        });
        colyseus_1.logger.info(`Bot with id ${resultCreate.id} created`);
        colyseus_1.matchMaker.presence.hset("bots", resultCreate.id, JSON.stringify(resultCreate));
        return resultCreate;
    });
}
function deleteBotFromDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const resultDelete = yield bot_v2_1.BotV2.deleteOne({ id });
        colyseus_1.matchMaker.presence.hdel("bots", id);
        if (resultDelete.deletedCount > 0) {
            colyseus_1.logger.info(`Bot with id ${id} deleted`);
        }
        return resultDelete;
    });
}
//# sourceMappingURL=bots.js.map