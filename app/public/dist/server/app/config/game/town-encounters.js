"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TREASURE_BOX_LIFE_THRESHOLD = exports.OUTLAW_GOLD_REWARD = exports.TownEncountersByStage = exports.TownEncounterSellPrice = void 0;
exports.getTreasureBoxReward = getTreasureBoxReward;
const Pokemon_1 = require("../../types/enum/Pokemon");
const random_1 = require("../../utils/random");
exports.TownEncounterSellPrice = {
    [Pokemon_1.Pkm.CHANSEY]: 7,
    [Pokemon_1.Pkm.KECLEON]: 10,
    [Pokemon_1.Pkm.KANGASKHAN]: 10,
    [Pokemon_1.Pkm.ELECTIVIRE]: 10
};
exports.TownEncountersByStage = {
    4: {
        [Pokemon_1.Pkm.WIGGLYTUFF]: 1 / 20,
        [Pokemon_1.Pkm.CHANSEY]: 1 / 20,
        [Pokemon_1.Pkm.MEOWTH]: 1 / 20,
        [Pokemon_1.Pkm.DUSKULL]: 1 / 20,
        [Pokemon_1.Pkm.CINCCINO]: 1 / 20,
        [Pokemon_1.Pkm.MAROWAK]: 1 / 20,
        [Pokemon_1.Pkm.MAKUHITA]: 1 / 20,
        [Pokemon_1.Pkm.MAGNEZONE]: 1 / 20,
        [Pokemon_1.Pkm.LAPRAS]: 1 / 20,
        [Pokemon_1.Pkm.LUDICOLO]: 1 / 20
    },
    12: {
        [Pokemon_1.Pkm.KANGASKHAN]: 1 / 20,
        [Pokemon_1.Pkm.WOBBUFFET]: 1 / 20,
        [Pokemon_1.Pkm.KECLEON]: 1 / 20,
        [Pokemon_1.Pkm.ELECTIVIRE]: 1 / 20,
        [Pokemon_1.Pkm.XATU]: 1 / 20,
        [Pokemon_1.Pkm.CINCCINO]: 1 / 20,
        [Pokemon_1.Pkm.MAROWAK]: 1 / 20,
        [Pokemon_1.Pkm.SABLEYE]: 1 / 20,
        [Pokemon_1.Pkm.MAKUHITA]: 1 / 20,
        [Pokemon_1.Pkm.CELEBI]: 1 / 40
    },
    17: {
        [Pokemon_1.Pkm.WOBBUFFET]: 1 / 20,
        [Pokemon_1.Pkm.CROAGUNK]: 1 / 20,
        [Pokemon_1.Pkm.ELECTIVIRE]: 1 / 20,
        [Pokemon_1.Pkm.XATU]: 1 / 20,
        [Pokemon_1.Pkm.MAROWAK]: 1 / 20,
        [Pokemon_1.Pkm.SABLEYE]: 1 / 20,
        [Pokemon_1.Pkm.MAKUHITA]: 1 / 20,
        [Pokemon_1.Pkm.LAPRAS]: 1 / 20
    },
    22: {
        [Pokemon_1.Pkm.KECLEON]: 1 / 20,
        [Pokemon_1.Pkm.ELECTIVIRE]: 1 / 20,
        [Pokemon_1.Pkm.MAROWAK]: 1 / 20,
        [Pokemon_1.Pkm.SPINDA]: 1 / 20,
        [Pokemon_1.Pkm.REGIROCK]: 1 / 20,
        [Pokemon_1.Pkm.MUNCHLAX]: 1 / 20,
        [Pokemon_1.Pkm.WOBBUFFET]: 1 / 20,
        [Pokemon_1.Pkm.KINGAMBIT]: 1 / 20
    },
    27: {
        [Pokemon_1.Pkm.ELECTIVIRE]: 1 / 20,
        [Pokemon_1.Pkm.MAROWAK]: 1 / 20,
        [Pokemon_1.Pkm.SPINDA]: 1 / 20,
        [Pokemon_1.Pkm.REGIROCK]: 1 / 20,
        [Pokemon_1.Pkm.MUNCHLAX]: 1 / 20,
        [Pokemon_1.Pkm.WOBBUFFET]: 1 / 20
    },
    34: {
        [Pokemon_1.Pkm.ELECTIVIRE]: 1 / 20,
        [Pokemon_1.Pkm.MAROWAK]: 1 / 20,
        [Pokemon_1.Pkm.SPINDA]: 1 / 20,
        [Pokemon_1.Pkm.REGIROCK]: 1 / 20,
        [Pokemon_1.Pkm.MUNCHLAX]: 1 / 20
    }
};
exports.OUTLAW_GOLD_REWARD = 10;
exports.TREASURE_BOX_LIFE_THRESHOLD = 40;
function getTreasureBoxReward() {
    var _a;
    return ((_a = (0, random_1.randomWeighted)({
        gold: 0.2,
        mushrooms: 0.1,
        sweets: 0.1,
        itemComponents: 0.1,
        componentsAndTickets: 0.1,
        craftableItems: 0.15,
        goldBow: 0.05
    })) !== null && _a !== void 0 ? _a : "itemComponents");
}
//# sourceMappingURL=town-encounters.js.map