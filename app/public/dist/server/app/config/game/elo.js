"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EloRankThreshold = exports.MinStageForGameToCount = void 0;
const EloRank_1 = require("../../types/enum/EloRank");
exports.MinStageForGameToCount = 10;
exports.EloRankThreshold = {
    [EloRank_1.EloRank.LEVEL_BALL]: 0,
    [EloRank_1.EloRank.NET_BALL]: 1050,
    [EloRank_1.EloRank.SAFARI_BALL]: 1100,
    [EloRank_1.EloRank.LOVE_BALL]: 1150,
    [EloRank_1.EloRank.PREMIER_BALL]: 1200,
    [EloRank_1.EloRank.QUICK_BALL]: 1250,
    [EloRank_1.EloRank.POKE_BALL]: 1300,
    [EloRank_1.EloRank.SUPER_BALL]: 1350,
    [EloRank_1.EloRank.ULTRA_BALL]: 1400,
    [EloRank_1.EloRank.MASTER_BALL]: 1500,
    [EloRank_1.EloRank.BEAST_BALL]: 1600
};
//# sourceMappingURL=elo.js.map