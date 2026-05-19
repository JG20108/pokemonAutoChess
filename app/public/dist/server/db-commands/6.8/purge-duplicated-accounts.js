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
const logger_1 = require("../../app/utils/logger");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        try {
            logger_1.logger.info("connect to db ...");
            const db = yield (0, mongoose_1.connect)(process.env.MONGO_URI);
            logger_1.logger.info("Finding duplicated UserMetadata entries...");
            const batchSize = 1000;
            let skip = 0;
            let totalDuplicatesRemoved = 0;
            const processedUIDs = new Set();
            while (true) {
                const batch = yield user_metadata_1.default.find({}).skip(skip).limit(batchSize);
                if (batch.length === 0)
                    break;
                logger_1.logger.info(`Processing batch ${skip / batchSize + 1}, ${batch.length} entries`);
                const uidGroups = new Map();
                for (const entry of batch) {
                    if (processedUIDs.has(entry.uid))
                        continue;
                    if (!uidGroups.has(entry.uid)) {
                        uidGroups.set(entry.uid, []);
                    }
                    uidGroups.get(entry.uid).push(entry);
                }
                for (const [uid, entries] of uidGroups) {
                    if (entries.length > 1) {
                        const allEntries = yield user_metadata_1.default.find({ uid });
                        if (allEntries.length > 1) {
                            logger_1.logger.info(`Processing UID: ${uid} with ${allEntries.length} entries`);
                            const sortedEntries = allEntries.sort((a, b) => {
                                if (a.level !== b.level)
                                    return b.level - a.level;
                                if (a.elo !== b.elo)
                                    return b.elo - a.elo;
                                if (a.wins !== b.wins)
                                    return b.wins - a.wins;
                                return b.exp - a.exp;
                            });
                            const entryToKeep = sortedEntries[0];
                            const entriesToRemove = sortedEntries.slice(1);
                            logger_1.logger.info(`Keeping entry with level: ${entryToKeep.level}, elo: ${entryToKeep.elo}`);
                            logger_1.logger.info(`Removing ${entriesToRemove.length} duplicate entries`);
                            for (const entryToRemove of entriesToRemove) {
                                yield user_metadata_1.default.findByIdAndDelete(entryToRemove._id);
                                totalDuplicatesRemoved++;
                            }
                        }
                    }
                    processedUIDs.add(uid);
                }
                skip += batchSize;
            }
            logger_1.logger.info(`Purge completed. Removed ${totalDuplicatesRemoved} duplicate UserMetadata entries.`);
            yield db.disconnect();
        }
        catch (e) {
            logger_1.logger.error("Parsing error:", e);
        }
    });
}
main();
//# sourceMappingURL=purge-duplicated-accounts.js.map