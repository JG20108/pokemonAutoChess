"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TownEncountersByStage = exports.TownEncounterSellPrice = exports.TownEncounters = void 0;
const Pokemon_1 = require("../types/enum/Pokemon");
exports.TownEncounters = {
    [Pokemon_1.Pkm.KECLEON]: Pokemon_1.Pkm.KECLEON,
    [Pokemon_1.Pkm.CHANSEY]: Pokemon_1.Pkm.CHANSEY,
    [Pokemon_1.Pkm.ELECTIVIRE]: Pokemon_1.Pkm.ELECTIVIRE,
    [Pokemon_1.Pkm.XATU]: Pokemon_1.Pkm.XATU,
    [Pokemon_1.Pkm.KANGASKHAN]: Pokemon_1.Pkm.KANGASKHAN,
    [Pokemon_1.Pkm.DUSKULL]: Pokemon_1.Pkm.DUSKULL,
    [Pokemon_1.Pkm.MAROWAK]: Pokemon_1.Pkm.MAROWAK,
    [Pokemon_1.Pkm.WOBBUFFET]: Pokemon_1.Pkm.WOBBUFFET,
    [Pokemon_1.Pkm.SPINDA]: Pokemon_1.Pkm.SPINDA,
    [Pokemon_1.Pkm.REGIROCK]: Pokemon_1.Pkm.REGIROCK,
    [Pokemon_1.Pkm.MUNCHLAX]: Pokemon_1.Pkm.MUNCHLAX,
    [Pokemon_1.Pkm.SABLEYE]: Pokemon_1.Pkm.SABLEYE,
    [Pokemon_1.Pkm.CELEBI]: Pokemon_1.Pkm.CELEBI
};
exports.TownEncounterSellPrice = {
    [Pokemon_1.Pkm.KECLEON]: 10,
    [Pokemon_1.Pkm.KANGASKHAN]: 10,
    [Pokemon_1.Pkm.CHANSEY]: 10,
    [Pokemon_1.Pkm.ELECTIVIRE]: 10,
    [Pokemon_1.Pkm.XATU]: 15,
    [Pokemon_1.Pkm.DUSKULL]: 10
};
exports.TownEncountersByStage = {
    4: {
        [Pokemon_1.Pkm.CHANSEY]: 1 / 20,
        [Pokemon_1.Pkm.ELECTIVIRE]: 1 / 20,
        [Pokemon_1.Pkm.KECLEON]: 1 / 20,
        [Pokemon_1.Pkm.MAROWAK]: 1 / 20,
        [Pokemon_1.Pkm.SABLEYE]: 1 / 20,
        [Pokemon_1.Pkm.CELEBI]: 1 / 40
    },
    12: {
        [Pokemon_1.Pkm.DUSKULL]: 1 / 20,
        [Pokemon_1.Pkm.KANGASKHAN]: 1 / 20,
        [Pokemon_1.Pkm.WOBBUFFET]: 1 / 20,
        [Pokemon_1.Pkm.KECLEON]: 1 / 20,
        [Pokemon_1.Pkm.ELECTIVIRE]: 1 / 20,
        [Pokemon_1.Pkm.XATU]: 1 / 20,
        [Pokemon_1.Pkm.MAROWAK]: 1 / 20,
        [Pokemon_1.Pkm.SABLEYE]: 1 / 20
    },
    17: {
        [Pokemon_1.Pkm.WOBBUFFET]: 1 / 10,
        [Pokemon_1.Pkm.KANGASKHAN]: 1 / 20,
        [Pokemon_1.Pkm.KECLEON]: 1 / 20,
        [Pokemon_1.Pkm.ELECTIVIRE]: 1 / 20,
        [Pokemon_1.Pkm.XATU]: 1 / 20,
        [Pokemon_1.Pkm.MAROWAK]: 1 / 20,
        [Pokemon_1.Pkm.CELEBI]: 1 / 20
    },
    22: {
        [Pokemon_1.Pkm.KECLEON]: 1 / 20,
        [Pokemon_1.Pkm.ELECTIVIRE]: 1 / 20,
        [Pokemon_1.Pkm.XATU]: 1 / 20,
        [Pokemon_1.Pkm.MAROWAK]: 1 / 20,
        [Pokemon_1.Pkm.SPINDA]: 1 / 20,
        [Pokemon_1.Pkm.REGIROCK]: 1 / 20,
        [Pokemon_1.Pkm.MUNCHLAX]: 1 / 20
    },
    27: {
        [Pokemon_1.Pkm.KECLEON]: 1 / 20,
        [Pokemon_1.Pkm.ELECTIVIRE]: 1 / 20,
        [Pokemon_1.Pkm.XATU]: 1 / 20,
        [Pokemon_1.Pkm.MAROWAK]: 1 / 20,
        [Pokemon_1.Pkm.SPINDA]: 1 / 20,
        [Pokemon_1.Pkm.REGIROCK]: 1 / 20,
        [Pokemon_1.Pkm.MUNCHLAX]: 1 / 20
    },
    34: {
        [Pokemon_1.Pkm.KECLEON]: 1 / 20,
        [Pokemon_1.Pkm.ELECTIVIRE]: 1 / 20,
        [Pokemon_1.Pkm.XATU]: 1 / 20,
        [Pokemon_1.Pkm.MAROWAK]: 1 / 20,
        [Pokemon_1.Pkm.SPINDA]: 1 / 20,
        [Pokemon_1.Pkm.REGIROCK]: 1 / 20,
        [Pokemon_1.Pkm.MUNCHLAX]: 1 / 20
    }
};
//# sourceMappingURL=town-encounters.js.map