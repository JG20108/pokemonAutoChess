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
exports.fetchMetaReports = fetchMetaReports;
exports.getMetaPokemons = getMetaPokemons;
exports.getMetaItems = getMetaItems;
exports.getMetadata = getMetadata;
exports.getMetaRegions = getMetaRegions;
exports.getMetaV2 = getMetaV2;
exports.getPlayerRankDistribution = getPlayerRankDistribution;
exports.getGameActivity = getGameActivity;
exports.getDendrogram = getDendrogram;
exports.computeSynergyAverages = computeSynergyAverages;
const dendrogram_1 = __importDefault(require("../models/mongo-models/dendrogram"));
const detailled_statistic_v2_1 = __importDefault(require("../models/mongo-models/detailled-statistic-v2"));
const items_statistic_v2_1 = __importDefault(require("../models/mongo-models/items-statistic-v2"));
const meta_v2_1 = __importDefault(require("../models/mongo-models/meta-v2"));
const pokemons_statistic_v2_1 = __importDefault(require("../models/mongo-models/pokemons-statistic-v2"));
const regions_statistic_1 = __importDefault(require("../models/mongo-models/regions-statistic"));
const report_metadata_1 = __importDefault(require("../models/mongo-models/report-metadata"));
const user_metadata_1 = __importDefault(require("../models/mongo-models/user-metadata"));
const precomputed_pokemon_data_1 = require("../models/precomputed/precomputed-pokemon-data");
const logger_1 = require("../utils/logger");
const map_1 = require("../utils/map");
const PLAYER_RANK_BUCKET_START = 600;
const PLAYER_RANK_BUCKET_SIZE = 25;
const PLAYER_RANK_COUNTING_SLOW_MS = 5000;
function fetchMetaReports() {
    return __awaiter(this, void 0, void 0, function* () {
        logger_1.logger.info("Refreshing meta reports...");
        const data = yield Promise.all([
            fetchMetadata(),
            fetchMetaItems(),
            fetchMetaPokemons(),
            fetchMetaRegions(),
            fetchMetaV2(),
            fetchDendrogramData(),
            fetchPlayerRankDistribution(),
            fetchGameActivity()
        ]);
        logger_1.logger.info("Meta reports refreshed");
        return data;
    });
}
let metadata = new Array();
let metaItems = new Array();
let metaPokemons = new Array();
let metaRegions = new Array();
let metaV2 = new Array();
let dendrogram = null;
let gameActivity = {
    updatedAt: new Date(0).toISOString(),
    days: []
};
let playerRankDistribution = {
    updatedAt: new Date(0).toISOString(),
    totalPlayers: 0,
    bucketSize: PLAYER_RANK_BUCKET_SIZE,
    bucketStart: PLAYER_RANK_BUCKET_START,
    buckets: []
};
function makeBucketLabel(minElo, maxElo) {
    return `${minElo}-${maxElo}`;
}
function fetchPlayerRankDistribution() {
    return __awaiter(this, void 0, void 0, function* () {
        const countingStartedAt = Date.now();
        const hasEloFilter = {
            elo: { $ne: null }
        };
        let totalPlayers = 0;
        const bucketStart = PLAYER_RANK_BUCKET_START;
        let highestBucketIndex = -1;
        try {
            totalPlayers = yield user_metadata_1.default.countDocuments(hasEloFilter).exec();
            const highestEloPlayer = yield user_metadata_1.default.findOne(hasEloFilter)
                .sort({ elo: -1 })
                .select({ elo: 1 })
                .lean()
                .exec();
            const highestElo = typeof (highestEloPlayer === null || highestEloPlayer === void 0 ? void 0 : highestEloPlayer.elo) === "number" ? highestEloPlayer.elo : null;
            if (highestElo !== null && highestElo >= bucketStart) {
                highestBucketIndex = Math.floor((highestElo - bucketStart) / PLAYER_RANK_BUCKET_SIZE);
            }
        }
        catch (error) {
            logger_1.logger.error("Failed to refresh player rank distribution counts; keeping previous snapshot", error);
            return playerRankDistribution;
        }
        const buckets = [];
        let rangeBucketQueryCount = 0;
        try {
            const underflowCount = yield user_metadata_1.default.countDocuments({
                elo: { $ne: null, $lt: bucketStart }
            }).exec();
            rangeBucketQueryCount += 1;
            buckets.push({
                bucketLabel: `<${bucketStart}`,
                count: underflowCount,
                percentage: totalPlayers > 0 ? (underflowCount / totalPlayers) * 100 : 0,
                topPercent: 0,
                minElo: null,
                maxElo: bucketStart - 1,
                isUnderflow: true
            });
            for (let i = 0; i <= highestBucketIndex; i += 1) {
                const minElo = bucketStart + i * PLAYER_RANK_BUCKET_SIZE;
                const maxElo = minElo + PLAYER_RANK_BUCKET_SIZE - 1;
                const count = yield user_metadata_1.default.countDocuments({
                    elo: {
                        $gte: minElo,
                        $lte: maxElo
                    }
                }).exec();
                rangeBucketQueryCount += 1;
                buckets.push({
                    bucketLabel: makeBucketLabel(minElo, maxElo),
                    count,
                    percentage: totalPlayers > 0 ? (count / totalPlayers) * 100 : 0,
                    topPercent: 0,
                    minElo,
                    maxElo,
                    isUnderflow: false
                });
            }
        }
        catch (error) {
            logger_1.logger.error("Failed to refresh player rank distribution bucket counts; keeping previous snapshot", error);
            return playerRankDistribution;
        }
        const countingDurationMs = Date.now() - countingStartedAt;
        if (countingDurationMs >= PLAYER_RANK_COUNTING_SLOW_MS) {
            logger_1.logger.warn("Player rank distribution per-bucket counting is slow", {
                countingDurationMs,
                rangeBucketQueryCount,
                slowThresholdMs: PLAYER_RANK_COUNTING_SLOW_MS
            });
        }
        else {
            logger_1.logger.info("Player rank distribution per-bucket counting runtime", {
                countingDurationMs,
                rangeBucketQueryCount
            });
        }
        let cumulativeFromTop = 0;
        for (let i = buckets.length - 1; i >= 0; i -= 1) {
            cumulativeFromTop += buckets[i].count;
            buckets[i].topPercent =
                totalPlayers > 0 ? (cumulativeFromTop / totalPlayers) * 100 : 0;
        }
        playerRankDistribution = {
            updatedAt: new Date().toISOString(),
            totalPlayers,
            bucketSize: PLAYER_RANK_BUCKET_SIZE,
            bucketStart,
            buckets
        };
        return playerRankDistribution;
    });
}
function fetchMetaItems() {
    return __awaiter(this, void 0, void 0, function* () {
        metaItems = yield items_statistic_v2_1.default.find().lean().exec();
        return metaItems;
    });
}
function fetchMetaPokemons() {
    return __awaiter(this, void 0, void 0, function* () {
        metaPokemons = yield pokemons_statistic_v2_1.default.find().lean().exec();
        return metaPokemons;
    });
}
function fetchMetadata() {
    return __awaiter(this, void 0, void 0, function* () {
        metadata = yield report_metadata_1.default.find().lean().exec();
        return metadata;
    });
}
function fetchMetaRegions() {
    return __awaiter(this, void 0, void 0, function* () {
        metaRegions = yield regions_statistic_1.default.find().lean().exec();
        return metaRegions;
    });
}
function fetchMetaV2() {
    return __awaiter(this, void 0, void 0, function* () {
        metaV2 = yield meta_v2_1.default.find().lean().exec();
        return metaV2;
    });
}
function getMetaPokemons() {
    return metaPokemons;
}
function getMetaItems() {
    return metaItems;
}
function getMetadata() {
    return metadata;
}
function getMetaRegions() {
    return metaRegions;
}
function getMetaV2() {
    return metaV2;
}
function getPlayerRankDistribution() {
    return playerRankDistribution;
}
function getGameActivity() {
    return gameActivity;
}
function fetchGameActivity() {
    return __awaiter(this, void 0, void 0, function* () {
        const DAYS = 30;
        const since = Date.now() - DAYS * 24 * 60 * 60 * 1000;
        try {
            const rows = yield detailled_statistic_v2_1.default.aggregate([
                { $match: { time: { $gte: since } } },
                {
                    $group: {
                        _id: {
                            $dateToString: { format: "%Y-%m-%d", date: { $toDate: "$time" } }
                        },
                        gameCount: { $sum: 1 }
                    }
                },
                { $sort: { _id: 1 } }
            ]).exec();
            const days = rows
                .map((row) => ({
                date: row._id,
                gameCount: row.gameCount
            }))
                .slice(1, -1);
            gameActivity = { updatedAt: new Date().toISOString(), days };
        }
        catch (error) {
            logger_1.logger.error("Failed to refresh game activity; keeping previous snapshot", error);
        }
        return gameActivity;
    });
}
function fetchDendrogramData() {
    return __awaiter(this, void 0, void 0, function* () {
        dendrogram = yield dendrogram_1.default.findOne().lean().exec();
        return dendrogram;
    });
}
function getDendrogram() {
    return dendrogram;
}
function computeSynergyAverages() {
    const rankPerTierAndSynergy = new Map();
    const countPerTierAndSynergy = new Map();
    metaPokemons.forEach((pokemonStat) => {
        Object.values(pokemonStat.pokemons).forEach((pkm) => {
            const tier = pokemonStat.tier;
            if (!rankPerTierAndSynergy.has(tier)) {
                rankPerTierAndSynergy.set(tier, new Map());
                countPerTierAndSynergy.set(tier, new Map());
            }
            const pokemon = (0, precomputed_pokemon_data_1.getPokemonData)(pkm.name);
            for (const synergy of pokemon.types) {
                const count = pkm.count;
                const rank = pkm.rank;
                const ranksPerSynergy = rankPerTierAndSynergy.get(tier);
                const countsPerSynergy = countPerTierAndSynergy.get(tier);
                if (!ranksPerSynergy.has(synergy)) {
                    ranksPerSynergy.set(synergy, 0);
                    countsPerSynergy.set(synergy, 0);
                }
                ranksPerSynergy.set(synergy, ranksPerSynergy.get(synergy) + rank * count);
                countsPerSynergy.set(synergy, countsPerSynergy.get(synergy) + count);
            }
        });
    });
    const synergyAveragesPerTier = new Map();
    rankPerTierAndSynergy.forEach((ranksPerSynergy, tier) => {
        const countsPerSynergy = countPerTierAndSynergy.get(tier);
        const averagesPerSynergy = new Map();
        ranksPerSynergy.forEach((totalRank, synergy) => {
            const totalCount = countsPerSynergy.get(synergy);
            averagesPerSynergy.set(synergy, {
                average_rank: totalRank / totalCount,
                count: totalCount
            });
        });
        synergyAveragesPerTier.set(tier, (0, map_1.mapToObj)(averagesPerSynergy));
    });
    return (0, map_1.mapToObj)(synergyAveragesPerTier);
}
//# sourceMappingURL=meta.js.map