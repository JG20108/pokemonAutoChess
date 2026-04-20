"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeElo = computeElo;
const Game_1 = require("../types/enum/Game");
const number_1 = require("../utils/number");
const elo_engine_1 = require("./elo-engine");
function computeElo(player, rank, previousElo, players, gameMode, isBot = false) {
    const eloEngine = new elo_engine_1.EloEngine();
    const eloGains = new Array();
    players.forEach((plyr) => {
        if (player.id !== plyr.id) {
            const expectedScore = eloEngine.getExpected(previousElo, plyr.elo);
            if (rank < plyr.rank) {
                eloGains.push(eloEngine.updateRating(expectedScore, 1, previousElo, player.games));
            }
            else {
                eloGains.push(eloEngine.updateRating(expectedScore, 0, previousElo, player.games));
            }
        }
    });
    let newElo = (0, number_1.min)(0)(Math.floor((0, number_1.average)(...eloGains)));
    if (rank <= Math.floor(players.length / 2) &&
        newElo < previousElo &&
        !isBot) {
        newElo = previousElo;
    }
    if (rank === 1 && gameMode === Game_1.GameMode.RANKED) {
        newElo = (0, number_1.min)(previousElo + 1)(newElo);
    }
    if (players.length % 2 === 1 &&
        rank === Math.floor(players.length / 2) + 1 &&
        newElo < previousElo) {
        const loss = previousElo - newElo;
        newElo = previousElo - Math.ceil(loss / 2);
    }
    return newElo;
}
//# sourceMappingURL=elo.js.map