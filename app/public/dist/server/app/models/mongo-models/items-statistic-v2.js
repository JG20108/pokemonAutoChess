"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Item_1 = require("../../types/enum/Item");
const Pokemon_1 = require("../../types/enum/Pokemon");
const historyEntrySchema = new mongoose_1.Schema({
    date: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
}, { _id: false });
const pokemonsStatistic = new mongoose_1.Schema({
    tier: {
        type: String
    },
    items: {
        type: Map,
        of: {
            rank: {
                type: Number
            },
            count: {
                type: Number
            },
            name: {
                type: String,
                enum: Item_1.Item
            },
            pokemons: [
                {
                    type: String,
                    enum: Object.values(Pokemon_1.Pkm)
                }
            ],
            rank_history: {
                type: [historyEntrySchema],
                default: []
            },
            count_history: {
                type: [historyEntrySchema],
                default: []
            }
        }
    }
});
exports.default = (0, mongoose_1.model)("ItemsStatisticV2", pokemonsStatistic, "items-statistic-v2");
//# sourceMappingURL=items-statistic-v2.js.map