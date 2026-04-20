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
exports.getDendrogram = getDendrogram;
exports.computeSynergyAverages = computeSynergyAverages;
const dendrogram_1 = __importDefault(require("../models/mongo-models/dendrogram"));
const items_statistic_v2_1 = __importDefault(require("../models/mongo-models/items-statistic-v2"));
const meta_v2_1 = __importDefault(require("../models/mongo-models/meta-v2"));
const pokemons_statistic_v2_1 = __importDefault(require("../models/mongo-models/pokemons-statistic-v2"));
const regions_statistic_1 = __importDefault(require("../models/mongo-models/regions-statistic"));
const report_metadata_1 = __importDefault(require("../models/mongo-models/report-metadata"));
const precomputed_pokemon_data_1 = require("../models/precomputed/precomputed-pokemon-data");
const logger_1 = require("../utils/logger");
const map_1 = require("../utils/map");
function fetchMetaReports() {
    return __awaiter(this, void 0, void 0, function* () {
        logger_1.logger.info("Refreshing meta reports...");
        const data = yield Promise.all([
            fetchMetadata(),
            fetchMetaItems(),
            fetchMetaPokemons(),
            fetchMetaRegions(),
            fetchMetaV2(),
            fetchDendrogramData()
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