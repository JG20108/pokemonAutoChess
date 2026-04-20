"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const twitchBlacklistedStreamerSchema = new mongoose_1.Schema({
    streamerLogin: {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true,
        trim: true
    },
    reason: {
        type: String,
        default: ""
    },
    createdBy: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("TwitchBlacklistedStreamer", twitchBlacklistedStreamerSchema);
//# sourceMappingURL=twitch-blacklisted-streamer.js.map