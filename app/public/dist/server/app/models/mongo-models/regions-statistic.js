"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Dungeon_1 = require("../../types/enum/Dungeon");
const regionStatisticSchema = new mongoose_1.Schema({
    name: {
        type: String,
        enum: Object.values(Dungeon_1.DungeonPMDO)
    },
    count: {
        type: Number
    },
    rank: {
        type: Number
    },
    elo: {
        type: Number
    },
    pokemons: [
        {
            type: String
        }
    ]
});
exports.default = (0, mongoose_1.model)("RegionStatistic", regionStatisticSchema, "regions-statistic");
//# sourceMappingURL=regions-statistic.js.map