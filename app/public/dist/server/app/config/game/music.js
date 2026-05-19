"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMusicAlt = getMusicAlt;
const Dungeon_1 = require("../../types/enum/Dungeon");
const alt = new Date().getHours() % 2 === 0;
function getMusicAlt(music) {
    switch (music) {
        case Dungeon_1.DungeonMusic.TREASURE_TOWN_STAGE_0:
        case Dungeon_1.DungeonMusic.TREASURE_TOWN_STAGE_10:
        case Dungeon_1.DungeonMusic.TREASURE_TOWN_STAGE_20:
            return alt ? `${music} alt` : music;
        default:
            return music;
    }
}
//# sourceMappingURL=music.js.map