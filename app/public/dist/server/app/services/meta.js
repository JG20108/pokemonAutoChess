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
exports.fetchMetaItems = fetchMetaItems;
exports.fetchMetaPokemons = fetchMetaPokemons;
exports.getMetaPokemons = getMetaPokemons;
exports.getMetaItems = getMetaItems;
const items_statistic_1 = __importDefault(require("../models/mongo-models/items-statistic"));
const pokemons_statistic_v2_1 = __importDefault(require("../models/mongo-models/pokemons-statistic-v2"));
const logger_1 = require("../utils/logger");
function fetchMetaReports() {
    logger_1.logger.info("Refreshing meta reports...");
    return Promise.all([fetchMetaItems(), fetchMetaPokemons()]);
}
let metaItems = new Array();
let metaPokemons = new Array();
function fetchMetaItems() {
    return __awaiter(this, void 0, void 0, function* () {
        metaItems = yield items_statistic_1.default.find();
        return metaItems;
    });
}
function fetchMetaPokemons() {
    return __awaiter(this, void 0, void 0, function* () {
        metaPokemons = yield pokemons_statistic_v2_1.default.find();
        return metaPokemons;
    });
}
function getMetaPokemons() {
    return metaPokemons;
}
function getMetaItems() {
    return metaItems;
}
//# sourceMappingURL=meta.js.map