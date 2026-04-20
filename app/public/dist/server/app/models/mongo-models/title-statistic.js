"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const types_1 = require("../../types");
const titleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        enum: types_1.Title
    },
    rarity: {
        type: Number
    }
});
exports.default = (0, mongoose_1.model)("TitleStatistic", titleSchema);
//# sourceMappingURL=title-statistic.js.map