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
exports.recordBoosterCreation = recordBoosterCreation;
exports.logPreviousDayBoosterCreationStats = logPreviousDayBoosterCreationStats;
const colyseus_1 = require("colyseus");
const precomputed_pokemon_data_1 = require("../models/precomputed/precomputed-pokemon-data");
const Game_1 = require("../types/enum/Game");
const logger_1 = require("../utils/logger");
const BOOSTER_STATS_KEY_PREFIX = "booster:stats";
const DAY_IN_MS = 24 * 60 * 60 * 1000;
function formatUtcDate(date) {
    return date.toISOString().slice(0, 10);
}
function getBoosterStatsKey(date) {
    return `${BOOSTER_STATS_KEY_PREFIX}:${formatUtcDate(date)}`;
}
function createEmptyRarityCounts() {
    return Object.values(Game_1.Rarity).reduce((counts, rarity) => {
        counts[rarity] = 0;
        return counts;
    }, {});
}
function parseBoosterStats(rawStats) {
    var _a, _b, _c;
    const rarityCounts = createEmptyRarityCounts();
    for (const rarity of Object.values(Game_1.Rarity)) {
        rarityCounts[rarity] = Number((_a = rawStats[`rarity:${rarity}`]) !== null && _a !== void 0 ? _a : 0);
    }
    return {
        boostersCreated: Number((_b = rawStats.boostersCreated) !== null && _b !== void 0 ? _b : 0),
        totalCards: Number((_c = rawStats.totalCards) !== null && _c !== void 0 ? _c : 0),
        rarityCounts
    };
}
function recordBoosterCreation(boosterContent) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = getBoosterStatsKey(new Date());
        const rarityCounts = createEmptyRarityCounts();
        for (const card of boosterContent) {
            const rarity = (0, precomputed_pokemon_data_1.getPokemonData)(card.name).rarity;
            rarityCounts[rarity] += 1;
        }
        try {
            yield colyseus_1.matchMaker.presence.hincrby(key, "boostersCreated", 1);
            yield colyseus_1.matchMaker.presence.hincrby(key, "totalCards", boosterContent.length);
            yield Promise.all(Object.entries(rarityCounts)
                .filter(([, count]) => count > 0)
                .map(([rarity, count]) => colyseus_1.matchMaker.presence.hincrby(key, `rarity:${rarity}`, count)));
        }
        catch (error) {
            logger_1.logger.warn("Failed to record booster creation stats", error);
        }
    });
}
function logPreviousDayBoosterCreationStats() {
    return __awaiter(this, void 0, void 0, function* () {
        const date = new Date(Date.now() - DAY_IN_MS);
        const key = getBoosterStatsKey(date);
        try {
            const rawStats = yield colyseus_1.matchMaker.presence.hgetall(key);
            if (Object.keys(rawStats).length === 0) {
                logger_1.logger.info(`[CRON] Booster creation stats for ${formatUtcDate(date)}: no boosters created`);
                return;
            }
            const stats = parseBoosterStats(rawStats);
            const byRarity = Object.values(Game_1.Rarity)
                .map((rarity) => `${rarity}=${stats.rarityCounts[rarity]}`)
                .join(", ");
            logger_1.logger.info(`[CRON] Booster creation stats for ${formatUtcDate(date)}: boosters=${stats.boostersCreated}, cards=${stats.totalCards}, byRarity=${byRarity}`);
            yield Promise.all(Object.keys(rawStats).map((field) => colyseus_1.matchMaker.presence.hdel(key, field)));
        }
        catch (error) {
            logger_1.logger.error("Failed to log booster creation stats", error);
        }
    });
}
//# sourceMappingURL=booster-monitor.js.map