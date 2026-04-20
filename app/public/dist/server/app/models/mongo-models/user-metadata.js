"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLeanUserMetadata = toLeanUserMetadata;
exports.toUserMetadataJSON = toUserMetadataJSON;
exports.giveUserExp = giveUserExp;
const mongoose_1 = require("mongoose");
const config_1 = require("../../config");
const gadgets_1 = require("../../config/game/gadgets");
const collection_1 = require("../../core/collection");
const notifications_1 = require("../../services/notifications");
const types_1 = require("../../types");
const userMetadataSchema = new mongoose_1.Schema({
    uid: {
        type: String
    },
    displayName: {
        type: String
    },
    language: {
        type: String,
        default: "en"
    },
    avatar: {
        type: String,
        default: "0019/Normal"
    },
    wins: {
        type: Number,
        default: 0
    },
    games: {
        type: Number,
        default: 0
    },
    exp: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 0
    },
    elo: {
        type: Number,
        default: 1000
    },
    maxElo: {
        type: Number,
        default: 1000
    },
    eventPoints: {
        type: Number,
        default: 0
    },
    maxEventPoints: {
        type: Number,
        default: 0
    },
    eventFinishTime: {
        type: Date,
        sparse: true
    },
    booster: {
        type: Number,
        default: 0
    },
    title: {
        type: String
    },
    role: {
        type: String,
        enum: types_1.Role,
        default: types_1.Role.BASIC
    },
    banned: {
        type: Boolean,
        default: false
    },
    titles: [
        {
            type: String,
            enum: types_1.Title
        }
    ],
    pokemonCollection: {
        type: Map,
        of: {
            dust: {
                type: Number
            },
            unlocked: {
                type: Buffer,
                default: () => Buffer.alloc(5, 0)
            },
            selectedEmotion: {
                type: String,
                enum: types_1.Emotion
            },
            selectedShiny: {
                type: Boolean
            },
            id: {
                type: String
            },
            played: {
                type: Number,
                default: 0
            }
        }
    }
});
userMetadataSchema.index({ displayName: 1 }, { collation: { locale: "en", strength: 2 } });
userMetadataSchema.index({ titles: 1 });
exports.default = (0, mongoose_1.model)("UserMetadata", userMetadataSchema);
function toLeanUserMetadata(user) {
    var _a, _b;
    const pokemonCollection = new Map();
    const collectionEntries = user.pokemonCollection instanceof Map
        ? user.pokemonCollection.entries()
        : Object.entries((_a = user.pokemonCollection) !== null && _a !== void 0 ? _a : {});
    for (const [key, item] of collectionEntries) {
        pokemonCollection.set(key, Object.assign(Object.assign({}, item), { unlocked: Buffer.isBuffer(item === null || item === void 0 ? void 0 : item.unlocked)
                ? item.unlocked
                : ((_b = item === null || item === void 0 ? void 0 : item.unlocked) === null || _b === void 0 ? void 0 : _b.buffer)
                    ? Buffer.from(item.unlocked.buffer)
                    : Buffer.alloc(5, 0) }));
    }
    return Object.assign(Object.assign({}, user), { pokemonCollection });
}
function toUserMetadataJSON(user) {
    const pokemonCollection = {};
    user.pokemonCollection.forEach((item, index) => {
        pokemonCollection[index] = collection_1.CollectionUtils.toCollectionItemClient(item);
    });
    return Object.assign(Object.assign({}, user.toObject()), { pokemonCollection });
}
function giveUserExp(user, exp) {
    if (user.exp + exp >= config_1.ExpThreshold) {
        user.level += 1;
        user.booster += 1;
        user.exp = user.exp + exp - config_1.ExpThreshold;
        if (user.level <= 2) {
            notifications_1.notificationsService.addNotification(user.uid, "level_up", user.level.toString());
        }
        if (user.level in gadgets_1.GADGETS_UNLOCKED_BY_LEVEL) {
            notifications_1.notificationsService.addNotification(user.uid, "new_gadget", gadgets_1.GADGETS_UNLOCKED_BY_LEVEL[user.level].name);
        }
    }
    else {
        user.exp = user.exp + exp;
    }
    user.exp = !isNaN(user.exp) ? user.exp : 0;
}
//# sourceMappingURL=user-metadata.js.map