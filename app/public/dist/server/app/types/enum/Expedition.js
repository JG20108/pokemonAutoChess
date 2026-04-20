"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleMissionStats = exports.ExpeditionQuest = exports.ExpeditionType = exports.ExpeditionRank = void 0;
var ExpeditionRank;
(function (ExpeditionRank) {
    ExpeditionRank["E"] = "E";
    ExpeditionRank["D"] = "D";
    ExpeditionRank["C"] = "C";
    ExpeditionRank["B"] = "B";
    ExpeditionRank["A"] = "A";
    ExpeditionRank["S"] = "S";
})(ExpeditionRank || (exports.ExpeditionRank = ExpeditionRank = {}));
var ExpeditionType;
(function (ExpeditionType) {
    ExpeditionType["RESCUE"] = "RESCUE";
    ExpeditionType["EXPLORATION"] = "EXPLORATION";
    ExpeditionType["BATTLE"] = "BATTLE";
    ExpeditionType["DELIVERY"] = "DELIVERY";
})(ExpeditionType || (exports.ExpeditionType = ExpeditionType = {}));
var ExpeditionQuest;
(function (ExpeditionQuest) {
    ExpeditionQuest["APPLE"] = "APPLE";
    ExpeditionQuest["BIG_NUGGET"] = "BIG_NUGGET";
    ExpeditionQuest["MAX_SPEED"] = "MAX_SPEED";
    ExpeditionQuest["MAX_DEFENSE"] = "MAX_DEFENSE";
    ExpeditionQuest["OVERQWIL"] = "OVERQWIL";
    ExpeditionQuest["RELIC_1"] = "RELIC_1";
    ExpeditionQuest["RELIC_2"] = "RELIC_2";
    ExpeditionQuest["RELIC_3"] = "RELIC_3";
    ExpeditionQuest["PLAY_ONE_CLASSIC"] = "PLAY_ONE_CLASSIC";
    ExpeditionQuest["PLAY_ONE_SCRIBBLE"] = "PLAY_ONE_SCRIBBLE";
    ExpeditionQuest["WIN_RANKED"] = "WIN_RANKED";
    ExpeditionQuest["SPAMMER"] = "SPAMMER";
    ExpeditionQuest["FEED_THE_BEAST"] = "FEED_THE_BEAST";
    ExpeditionQuest["SELL_UNIQUE"] = "SELL_UNIQUE";
    ExpeditionQuest["HOARDER"] = "HOARDER";
})(ExpeditionQuest || (exports.ExpeditionQuest = ExpeditionQuest = {}));
exports.BattleMissionStats = [
    "maxHP",
    "maxAttack",
    "maxDefense",
    "maxAP",
    "maxSpecialDefense",
    "maxSpeed",
    "maxPhysicalDamage",
    "maxSpecialDamage",
    "maxTrueDamage",
    "maxShield",
    "maxHeal",
    "maxWinStreak"
];
//# sourceMappingURL=Expedition.js.map