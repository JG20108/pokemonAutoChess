"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ULTRABALL_RANKED_LOBBY_CRON = exports.GREATBALL_RANKED_LOBBY_CRON = exports.SCRIBBLE_LOBBY_CRON = exports.CRON_HISTORY_CLEANUP_DELAY = exports.CRON_ELO_DECAY_MINIMUM_ELO = exports.ELO_DECAY_NB_GAMES_REQUIRED = exports.ELO_DECAY_LOST_PER_DAY = exports.CRON_ELO_DECAY_DELAY = void 0;
exports.CRON_ELO_DECAY_DELAY = 86400 * 1000 * 20;
exports.ELO_DECAY_LOST_PER_DAY = 5;
exports.ELO_DECAY_NB_GAMES_REQUIRED = 3;
exports.CRON_ELO_DECAY_MINIMUM_ELO = 1100;
exports.CRON_HISTORY_CLEANUP_DELAY = 86400 * 1000 * 30;
exports.SCRIBBLE_LOBBY_CRON = "0 0 0-20/4 * * *";
exports.GREATBALL_RANKED_LOBBY_CRON = "0 0 2,6,14,18 * * *";
exports.ULTRABALL_RANKED_LOBBY_CRON = "0 0 22 * * *";
//# sourceMappingURL=cronjobs.js.map