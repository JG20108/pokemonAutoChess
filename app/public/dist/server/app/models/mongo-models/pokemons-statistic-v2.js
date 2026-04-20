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
    pokemons: {
        type: Map,
        of: {
            item_count: {
                type: Number
            },
            rank: {
                type: Number
            },
            count: {
                type: Number
            },
            name: {
                type: String,
                enum: Pokemon_1.Pkm
            },
            items: [
                {
                    type: String,
                    enum: Object.values(Item_1.Item)
                }
            ],
            rank_history: {
                type: [historyEntrySchema],
                default: []
            },
            count_history: {
                type: [historyEntrySchema],
                default: []
            },
            item_count_history: {
                type: [historyEntrySchema],
                default: []
            }
        }
    }
});
exports.default = (0, mongoose_1.model)("PokemonsStatisticV2", pokemonsStatistic, "pokemons-statistic-v2");
//# sourceMappingURL=pokemons-statistic-v2.js.map