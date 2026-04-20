"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const metadataSchema = new mongoose_1.Schema({
    time_limit: {
        type: String
    },
    created_at: {
        type: String
    },
    count: {
        type: Number
    }
});
exports.default = (0, mongoose_1.model)("Metadata", metadataSchema, "metadata");
//# sourceMappingURL=report-metadata.js.map