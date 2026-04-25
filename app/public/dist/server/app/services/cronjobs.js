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
exports.initCronJobs = initCronJobs;
const colyseus_1 = require("colyseus");
const cron_1 = require("cron");
const dayjs_1 = __importDefault(require("dayjs"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const config_1 = require("../config");
const detailled_statistic_v2_1 = __importDefault(require("../models/mongo-models/detailled-statistic-v2"));
const title_statistic_1 = __importDefault(require("../models/mongo-models/title-statistic"));
const user_metadata_1 = __importDefault(require("../models/mongo-models/user-metadata"));
const types_1 = require("../types");
const EloRank_1 = require("../types/enum/EloRank");
const Game_1 = require("../types/enum/Game");
const events_1 = require("../types/events");
const logger_1 = require("../utils/logger");
const number_1 = require("../utils/number");
const notifications_1 = require("./notifications");
const sprite_gap_scanner_1 = require("./sprite-gap-scanner");
function initCronJobs() {
    logger_1.logger.debug("init cron jobs");
    cron_1.CronJob.from({
        cronTime: "15 8 * * *",
        timeZone: "Europe/Paris",
        onTick: () => deleteOldHistory(),
        start: true
    });
    cron_1.CronJob.from({
        cronTime: "30 8 * * *",
        timeZone: "Europe/Paris",
        onTick: () => eloDecay(),
        start: true
    });
    cron_1.CronJob.from({
        cronTime: "45 8 * * *",
        timeZone: "Europe/Paris",
        onTick: () => titleStats(),
        start: true
    });
    cron_1.CronJob.from({
        cronTime: "50 8 * * *",
        timeZone: "Europe/Paris",
        onTick: () => notifications_1.notificationsService.cleanupOldNotifications(),
        start: true
    });
    cron_1.CronJob.from({
        cronTime: "0 0 1 * *",
        timeZone: "UTC",
        onTick: () => resetEventScores(),
        start: true
    });
    cron_1.CronJob.from({
        cronTime: "0 9 * * *",
        timeZone: "UTC",
        onTick: () => (0, sprite_gap_scanner_1.refreshSpriteGapData)(),
        start: true
    });
}
function deleteOldAnonymousAccounts() {
    return __awaiter(this, void 0, void 0, function* () {
        logger_1.logger.info("[CRON] Deleting old anonymous accounts...");
        const currentDate = (0, dayjs_1.default)();
        const oneMonthLimit = currentDate.subtract(1, "month");
        const anonymousAccounts = new Array();
        yield listAllUsers();
        function listAllUsers(nextPageToken) {
            return __awaiter(this, void 0, void 0, function* () {
                const listUsersResult = yield firebase_admin_1.default.auth().listUsers(1000, nextPageToken);
                listUsersResult.users.forEach((userRecord) => {
                    const lastSignInDate = (0, dayjs_1.default)(userRecord.metadata.lastSignInTime);
                    if (userRecord.email === undefined &&
                        userRecord.photoURL === undefined &&
                        userRecord.metadata.lastSignInTime &&
                        lastSignInDate.isBefore(oneMonthLimit)) {
                        anonymousAccounts.push(userRecord);
                    }
                });
                if (listUsersResult.pageToken) {
                    yield listAllUsers(listUsersResult.pageToken);
                }
            });
        }
        logger_1.logger.info(`deleting ${anonymousAccounts.length} inactive anonymous accounts`);
        while (anonymousAccounts.length > 0) {
            const batchDeletion = new Array();
            for (let i = 0; i < 999; i++) {
                const account = anonymousAccounts.pop();
                account && batchDeletion.push(account.uid);
            }
            const firebaseDeletion = yield firebase_admin_1.default.auth().deleteUsers(batchDeletion);
            logger_1.logger.info("firebase deletion result ", firebaseDeletion);
            const pacDeletion = yield user_metadata_1.default.deleteMany({
                uid: { $in: batchDeletion }
            });
            logger_1.logger.info("pac deletion result ", pacDeletion);
        }
    });
}
function eloDecay() {
    return __awaiter(this, void 0, void 0, function* () {
        logger_1.logger.info("[CRON] Computing elo decay...");
        const users = yield user_metadata_1.default.find({ elo: { $gt: config_1.CRON_ELO_DECAY_MINIMUM_ELO } }, ["uid", "elo", "displayName"]);
        if (users && users.length > 0) {
            logger_1.logger.info(`Checking activity of ${users.length} users`);
            for (let i = 0; i < users.length; i++) {
                const u = users[i];
                const stats = yield detailled_statistic_v2_1.default.find(Object.assign({ playerId: u.uid }, (u.elo >= config_1.EloRankThreshold[EloRank_1.EloRank.ULTRA_BALL]
                    ? { gameMode: Game_1.GameMode.RANKED }
                    : {})), ["time"], {
                    limit: 3,
                    sort: { time: -1 }
                });
                const shouldDecay = stats.length < config_1.ELO_DECAY_NB_GAMES_REQUIRED ||
                    Date.now() - stats[2].time > config_1.CRON_ELO_DECAY_DELAY;
                if (shouldDecay) {
                    const eloAfterDecay = (0, number_1.min)(config_1.CRON_ELO_DECAY_MINIMUM_ELO)(u.elo - config_1.ELO_DECAY_LOST_PER_DAY);
                    logger_1.logger.info(`User ${u.displayName} (${u.elo}) will decay to ${eloAfterDecay}`);
                    u.elo = eloAfterDecay;
                    yield u.save();
                }
            }
        }
        else {
            logger_1.logger.info("No users to check");
        }
    });
}
function titleStats() {
    return __awaiter(this, void 0, void 0, function* () {
        logger_1.logger.info("[CRON] Recomputing title statistics...");
        const count = yield user_metadata_1.default.estimatedDocumentCount();
        logger_1.logger.info(`${count} users found`);
        for (const title of Object.values(types_1.Title)) {
            const titleCount = yield user_metadata_1.default.countDocuments({
                titles: title
            });
            yield title_statistic_1.default.deleteMany({ name: title });
            yield title_statistic_1.default.create({ name: title, rarity: titleCount / count });
        }
    });
}
function deleteOldHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        logger_1.logger.info("[CRON] Deleting 4 weeks old games...");
        const deleteResults = yield detailled_statistic_v2_1.default.deleteMany({
            time: { $lt: Date.now() - config_1.CRON_HISTORY_CLEANUP_DELAY }
        });
        logger_1.logger.info(`${deleteResults.deletedCount} detailed statistics deleted`);
    });
}
function resetEventScores() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.logger.info("[CRON] Starting event scores reset...");
            const result = yield user_metadata_1.default.updateMany({
                $or: [
                    { eventPoints: { $gt: 0 } },
                    { maxEventPoints: { $gt: 0 } },
                    { eventFinishTime: { $exists: true, $ne: null } }
                ]
            }, {
                $set: {
                    eventPoints: 0,
                    maxEventPoints: 0,
                    eventFinishTime: null
                }
            });
            logger_1.logger.info(`Event reset completed! Reset event data for ${result.modifiedCount} users`);
            setTimeout(() => {
                const newEvent = (0, config_1.getCurrentGameEvent)();
                switch (newEvent) {
                    case events_1.GameEvent.VICTORY_ROAD:
                        colyseus_1.matchMaker.presence.publish("announcement", "Victory Road has started! Be the first to reach the finish line!");
                        break;
                    case events_1.GameEvent.EXPEDITIONS:
                        colyseus_1.matchMaker.presence.publish("announcement", "Expeditions season has started! Earn bonus experience points by accomplishing various challenges!");
                        break;
                }
            }, 60 * 1000);
        }
        catch (e) {
            logger_1.logger.error("Error during event reset scores:", e);
        }
    });
}
//# sourceMappingURL=cronjobs.js.map