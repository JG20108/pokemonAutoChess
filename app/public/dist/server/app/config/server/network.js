"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_LOADING_TIME = exports.MAX_SIMULATION_DELTA_TIME = exports.INACTIVITY_TIMEOUT = exports.MIN_HUMAN_PLAYERS = exports.MAX_PLAYERS_PER_GAME = exports.MAX_CONCURRENT_PLAYERS_ON_LOBBY = exports.MAX_CONCURRENT_PLAYERS_ON_SERVER = exports.MAX_POOL_CONNECTIONS_SIZE = exports.BASE_URL = void 0;
exports.BASE_URL = "https://pokemon-auto-chess.com";
exports.MAX_POOL_CONNECTIONS_SIZE = 16;
exports.MAX_CONCURRENT_PLAYERS_ON_SERVER = 1000;
exports.MAX_CONCURRENT_PLAYERS_ON_LOBBY = 500;
exports.MAX_PLAYERS_PER_GAME = 8;
exports.MIN_HUMAN_PLAYERS = process.env.MIN_HUMAN_PLAYERS
    ? parseInt(process.env.MIN_HUMAN_PLAYERS)
    : 1;
exports.INACTIVITY_TIMEOUT = 60 * 1000 * 30;
exports.MAX_SIMULATION_DELTA_TIME = 50;
exports.MAX_LOADING_TIME = 3 * 60 * 1000;
//# sourceMappingURL=network.js.map