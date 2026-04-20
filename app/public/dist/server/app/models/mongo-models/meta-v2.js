"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const meanTeamSchema = new mongoose_1.Schema({
    cluster_id: {
        type: String
    },
    rank: {
        type: Number
    },
    pokemons: {
        type: Map,
        of: new mongoose_1.Schema({
            frequency: Number,
            mean_items: Number,
            items: [String]
        })
    },
    synergies: Object
});
const metaV2Schema = new mongoose_1.Schema({
    cluster_id: {
        type: String
    },
    count: {
        type: Number
    },
    ratio: {
        type: Number
    },
    winrate: {
        type: Number
    },
    mean_rank: {
        type: Number
    },
    synergies: Object,
    mean_team: meanTeamSchema,
    mean_items: [
        new mongoose_1.Schema({
            item: String,
            frequency: Number
        })
    ],
    top_teams: [
        new mongoose_1.Schema({
            rank: Number,
            elo: Number,
            pokemons: [
                new mongoose_1.Schema({
                    name: String,
                    items: [String]
                })
            ]
        })
    ],
    hull: [[Number]],
    x: {
        type: Number
    },
    y: {
        type: Number
    },
    generated_at: {
        type: String
    }
});
exports.default = (0, mongoose_1.model)("MetaV2", metaV2Schema, "meta-report-v2");
//# sourceMappingURL=meta-v2.js.map