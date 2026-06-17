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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
const bot_v2_1 = require("../../app/models/mongo-models/bot-v2");
const detailled_statistic_v2_1 = __importDefault(require("../../app/models/mongo-models/detailled-statistic-v2"));
const meta_1 = __importDefault(require("../../app/models/mongo-models/meta"));
const logger_1 = require("../../app/utils/logger");
const PROGRESS_LOG_INTERVAL = 1000;
function logProgress(label, processed, total, updated) {
    const percent = total > 0 ? ((processed / total) * 100).toFixed(1) : "100.0";
    console.log(`[${label}] ${processed}/${total} (${percent}%) processed, ${updated} updated`);
}
function shouldLogProgress(processed, total) {
    return processed === 1 || processed % PROGRESS_LOG_INTERVAL === 0 || processed === total;
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        yield replacePokemonInGame("VESPIQUEEN", "0416", "VESPIQUEN", "0416");
    });
}
function replacePokemonInGame(pokemonNameToRemove, pokemonIndexToRemove, pokemonNameToReplace, pokemonIndexToReplace) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_1, _b, _c, _d, e_2, _e, _f, _g, e_3, _h, _j;
        try {
            logger_1.logger.info("connect to db ...");
            const db = yield (0, mongoose_1.connect)(process.env.MONGO_URI);
            console.log(`Replacing ${pokemonNameToRemove} by ${pokemonNameToReplace} in bots`);
            const totalBots = yield bot_v2_1.BotV2.countDocuments({});
            console.log(`[bots] total documents: ${totalBots}`);
            let processedBots = 0;
            let botCount = 0;
            const botCursor = bot_v2_1.BotV2.find({}, ["name", "steps"]).cursor({
                batchSize: 100
            });
            try {
                for (var _k = true, botCursor_1 = __asyncValues(botCursor), botCursor_1_1; botCursor_1_1 = yield botCursor_1.next(), _a = botCursor_1_1.done, !_a; _k = true) {
                    _c = botCursor_1_1.value;
                    _k = false;
                    const bot = _c;
                    processedBots += 1;
                    let modified = false;
                    bot.steps.forEach((step) => {
                        step.board.forEach((p) => {
                            if (p.name === pokemonNameToRemove) {
                                p.name = pokemonNameToReplace;
                                modified = true;
                            }
                        });
                    });
                    if (modified) {
                        console.log(`Bot ${bot.name} has been modified to replace ${pokemonNameToRemove} by ${pokemonNameToReplace}`);
                        bot.markModified("steps");
                        yield bot.save();
                        botCount += 1;
                    }
                    if (shouldLogProgress(processedBots, totalBots)) {
                        logProgress("bots", processedBots, totalBots, botCount);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_k && !_a && (_b = botCursor_1.return)) yield _b.call(botCursor_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            console.log(`Updated ${botCount} bots`);
            console.log(`Replacing ${pokemonNameToRemove} by ${pokemonNameToReplace} in game detailled statistics`);
            const totalStats = yield detailled_statistic_v2_1.default.countDocuments({});
            console.log(`[detailled-statistics] total documents: ${totalStats}`);
            let processedStats = 0;
            let statCount = 0;
            const statCursor = detailled_statistic_v2_1.default.find({}, ["pokemons"]).cursor({
                batchSize: 250
            });
            try {
                for (var _l = true, statCursor_1 = __asyncValues(statCursor), statCursor_1_1; statCursor_1_1 = yield statCursor_1.next(), _d = statCursor_1_1.done, !_d; _l = true) {
                    _f = statCursor_1_1.value;
                    _l = false;
                    const record = _f;
                    processedStats += 1;
                    let modified = false;
                    record.pokemons.forEach((p) => {
                        if (p.name === pokemonNameToRemove) {
                            p.name = pokemonNameToReplace;
                            p.avatar = p.avatar.replace(pokemonIndexToRemove, pokemonIndexToReplace);
                            record.markModified("pokemons");
                            modified = true;
                        }
                    });
                    if (modified) {
                        console.log(`DetailedStatistic has been modified to replace ${pokemonNameToRemove} by ${pokemonNameToReplace}`);
                        yield record.save();
                        statCount += 1;
                    }
                    if (shouldLogProgress(processedStats, totalStats)) {
                        logProgress("detailled-statistics", processedStats, totalStats, statCount);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (!_l && !_d && (_e = statCursor_1.return)) yield _e.call(statCursor_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            console.log(`Updated ${statCount} detailed statistics records`);
            console.log(`Removing ${pokemonNameToRemove} from meta report`);
            const totalMeta = yield meta_1.default.countDocuments({});
            console.log(`[meta] total documents: ${totalMeta}`);
            let processedMeta = 0;
            let metaCount = 0;
            const metaCursor = meta_1.default.find({}, ["pokemons", "teams"]).cursor({
                batchSize: 250
            });
            try {
                for (var _m = true, metaCursor_1 = __asyncValues(metaCursor), metaCursor_1_1; metaCursor_1_1 = yield metaCursor_1.next(), _g = metaCursor_1_1.done, !_g; _m = true) {
                    _j = metaCursor_1_1.value;
                    _m = false;
                    const metarecord = _j;
                    processedMeta += 1;
                    let modified = false;
                    if (pokemonNameToRemove in metarecord.pokemons) {
                        metarecord.pokemons[pokemonNameToReplace] =
                            metarecord.pokemons[pokemonNameToRemove];
                        delete metarecord.pokemons[pokemonNameToRemove];
                        metarecord.markModified("pokemons");
                        modified = true;
                    }
                    metarecord.teams.forEach((team) => {
                        if (pokemonNameToRemove in team.pokemons) {
                            team.pokemons[pokemonNameToReplace] =
                                team.pokemons[pokemonNameToRemove];
                            delete team.pokemons[pokemonNameToRemove];
                            metarecord.markModified("teams");
                            modified = true;
                        }
                    });
                    if (modified) {
                        console.log(`Meta report has been modified to replace ${pokemonNameToRemove} by ${pokemonIndexToReplace}`);
                        yield metarecord.save();
                        metaCount += 1;
                    }
                    if (shouldLogProgress(processedMeta, totalMeta)) {
                        logProgress("meta", processedMeta, totalMeta, metaCount);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (!_m && !_g && (_h = metaCursor_1.return)) yield _h.call(metaCursor_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            console.log(`Updated ${metaCount} meta records`);
            yield db.disconnect();
        }
        catch (e) {
            logger_1.logger.error("Error:", e);
        }
    });
}
main();
//# sourceMappingURL=rename-pkm.js.map