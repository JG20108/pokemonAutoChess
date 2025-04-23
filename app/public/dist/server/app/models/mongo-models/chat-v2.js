"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const chatSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    payload: {
        type: String,
        required: true,
        default: ""
    },
    authorId: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        expires: 7 * 24 * 60 * 60,
        default: Date.now,
        required: true
    }
});
exports.default = (0, mongoose_1.model)("ChatV2", chatSchema);
//# sourceMappingURL=chat-v2.js.map