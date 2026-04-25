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
const schema_1 = require("@colyseus/schema");
const tools_1 = require("@colyseus/tools");
const colyseus_1 = require("colyseus");
const cron_1 = require("cron");
const app_config_1 = require("./app.config");
const metrics_1 = require("./metrics");
const cronjobs_1 = require("./services/cronjobs");
const leaderboard_1 = require("./services/leaderboard");
const meta_1 = require("./services/meta");
const sprite_gap_scanner_1 = require("./services/sprite-gap-scanner");
const twitch_1 = require("./services/twitch");
schema_1.Encoder.BUFFER_SIZE = 512 * 1024;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (process.env.NODE_APP_INSTANCE) {
            const processNumber = Number((_a = process.env.NODE_APP_INSTANCE) !== null && _a !== void 0 ? _a : "0");
            const port = ((_b = Number(process.env.PORT)) !== null && _b !== void 0 ? _b : 2569) + processNumber;
            (0, metrics_1.initializeMetrics)();
            yield (0, tools_1.listen)(app_config_1.server);
            if (port === 2569) {
                yield colyseus_1.matchMaker.createRoom("lobby", {});
                checkLobby();
                (0, cronjobs_1.initCronJobs)();
                yield (0, sprite_gap_scanner_1.warmupSpriteGapScanner)();
            }
        }
        else {
            yield (0, tools_1.listen)(app_config_1.server, process.env.PORT ? parseInt(process.env.PORT) : 9000);
            yield colyseus_1.matchMaker.createRoom("lobby", {});
            (0, cronjobs_1.initCronJobs)();
            yield (0, sprite_gap_scanner_1.warmupSpriteGapScanner)();
        }
        colyseus_1.logger.info("Fetching leaderboards...");
        (0, leaderboard_1.fetchLeaderboards)();
        setInterval(() => (0, leaderboard_1.fetchLeaderboards)(), 1000 * 60 * 10);
        colyseus_1.logger.info("Fetching meta reports...");
        (0, meta_1.fetchMetaReports)();
        setInterval(() => (0, meta_1.fetchMetaReports)(), 1000 * 60 * 60 * 24);
        colyseus_1.logger.info("Refreshing sprite gap scanner...");
        setInterval(() => (0, sprite_gap_scanner_1.refreshSpriteGapData)(), 1000 * 60 * 60 * 24);
        colyseus_1.logger.info("Fetching Twitch streams...");
        (0, twitch_1.refreshTwitchBlacklist)();
        setInterval(() => (0, twitch_1.refreshTwitchBlacklist)(), 1000 * 60);
        (0, twitch_1.refreshTwitchStreams)();
        setInterval(() => (0, twitch_1.refreshTwitchStreams)(), 1000 * 60 * 5);
    });
}
function checkLobby() {
    colyseus_1.logger.info("checkLobby cron job");
    cron_1.CronJob.from({
        cronTime: "* * * * *",
        timeZone: "Europe/Paris",
        onTick: () => __awaiter(this, void 0, void 0, function* () {
            const lobbies = yield colyseus_1.matchMaker.query({ name: "lobby" });
            if (lobbies.length === 0) {
                colyseus_1.logger.warn(`Lobby room has not been found, retrying 2 times before recreating...`);
                let retryCount = 0;
                const maxRetries = 2;
                while (retryCount < maxRetries) {
                    yield new Promise((resolve) => setTimeout(resolve, 10000));
                    retryCount++;
                    const retriedLobbies = yield colyseus_1.matchMaker.query({ name: "lobby" });
                    if (retriedLobbies.length > 0) {
                        colyseus_1.logger.info(`Lobby room found on retry attempt ${retryCount}`);
                        return;
                    }
                    colyseus_1.logger.warn(`Retry attempt ${retryCount}/${maxRetries} failed, lobby still not found`);
                }
                colyseus_1.logger.warn(`All retry attempts failed, automatically remaking lobby room`);
                colyseus_1.matchMaker.createRoom("lobby", {});
            }
        }),
        start: true
    });
}
main();
//# sourceMappingURL=index.js.map