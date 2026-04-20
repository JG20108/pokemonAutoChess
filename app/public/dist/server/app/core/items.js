"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemStats = void 0;
exports.getWonderboxItems = getWonderboxItems;
const Item_1 = require("../types/enum/Item");
const random_1 = require("../utils/random");
const Game_1 = require("../types/enum/Game");
function getWonderboxItems(existingItems) {
    const wonderboxItems = [];
    for (let n = 0; n < 2; n++) {
        const elligibleItems = Item_1.CraftableItems.filter((i) => !Item_1.SynergyStones.includes(i) &&
            !wonderboxItems.includes(i) &&
            !existingItems.has(i) &&
            i !== Item_1.Item.WONDER_BOX);
        wonderboxItems.push((0, random_1.pickRandomIn)(elligibleItems));
    }
    return wonderboxItems;
}
exports.ItemStats = {
    [Item_1.Item.TWISTED_SPOON]: { [Game_1.Stat.AP]: 10 },
    [Item_1.Item.MAGNET]: { [Game_1.Stat.SPEED]: 10 },
    [Item_1.Item.BLACK_GLASSES]: { [Game_1.Stat.CRIT_CHANCE]: 10 },
    [Item_1.Item.MIRACLE_SEED]: { [Game_1.Stat.SHIELD]: 15 },
    [Item_1.Item.CHARCOAL]: { [Game_1.Stat.ATK]: 3 },
    [Item_1.Item.NEVER_MELT_ICE]: { [Game_1.Stat.SPE_DEF]: 3 },
    [Item_1.Item.HEART_SCALE]: { [Game_1.Stat.DEF]: 3 },
    [Item_1.Item.MYSTIC_WATER]: { [Game_1.Stat.PP]: 15 },
    [Item_1.Item.OLD_AMBER]: {},
    [Item_1.Item.DAWN_STONE]: { [Game_1.Stat.AP]: 10 },
    [Item_1.Item.WATER_STONE]: { [Game_1.Stat.PP]: 15 },
    [Item_1.Item.THUNDER_STONE]: { [Game_1.Stat.SPEED]: 10 },
    [Item_1.Item.FIRE_STONE]: { [Game_1.Stat.ATK]: 3 },
    [Item_1.Item.MOON_STONE]: { [Game_1.Stat.DEF]: 3 },
    [Item_1.Item.DUSK_STONE]: { [Game_1.Stat.CRIT_CHANCE]: 10 },
    [Item_1.Item.LEAF_STONE]: { [Game_1.Stat.SHIELD]: 15 },
    [Item_1.Item.ICE_STONE]: { [Game_1.Stat.SPE_DEF]: 3 },
    [Item_1.Item.CHOICE_SPECS]: { [Game_1.Stat.AP]: 100 },
    [Item_1.Item.SOUL_DEW]: { [Game_1.Stat.AP]: 10, [Game_1.Stat.PP]: 15 },
    [Item_1.Item.UPGRADE]: { [Game_1.Stat.AP]: 10, [Game_1.Stat.SPEED]: 10 },
    [Item_1.Item.REAPER_CLOTH]: { [Game_1.Stat.AP]: 10, [Game_1.Stat.CRIT_CHANCE]: 20 },
    [Item_1.Item.POKEMONOMICON]: { [Game_1.Stat.AP]: 10, [Game_1.Stat.SHIELD]: 15 },
    [Item_1.Item.POWER_LENS]: { [Game_1.Stat.AP]: 10, [Game_1.Stat.SPE_DEF]: 10 },
    [Item_1.Item.SHELL_BELL]: { [Game_1.Stat.AP]: 10, [Game_1.Stat.ATK]: 3 },
    [Item_1.Item.LUCKY_EGG]: { [Game_1.Stat.AP]: 60, [Game_1.Stat.DEF]: 12, [Game_1.Stat.LUCK]: 50 },
    [Item_1.Item.AQUA_EGG]: { [Game_1.Stat.PP]: 50 },
    [Item_1.Item.BLUE_ORB]: { [Game_1.Stat.PP]: 15, [Game_1.Stat.SPEED]: 10 },
    [Item_1.Item.SCOPE_LENS]: { [Game_1.Stat.PP]: 15, [Game_1.Stat.CRIT_CHANCE]: 25 },
    [Item_1.Item.STAR_DUST]: { [Game_1.Stat.PP]: 15, [Game_1.Stat.SHIELD]: 15 },
    [Item_1.Item.GREEN_ORB]: { [Game_1.Stat.PP]: 15, [Game_1.Stat.SPE_DEF]: 3 },
    [Item_1.Item.MANA_SCARF]: { [Game_1.Stat.PP]: 15, [Game_1.Stat.ATK]: 3 },
    [Item_1.Item.SMOKE_BALL]: { [Game_1.Stat.PP]: 15, [Game_1.Stat.DEF]: 3 },
    [Item_1.Item.XRAY_VISION]: { [Game_1.Stat.SPEED]: 50 },
    [Item_1.Item.RAZOR_FANG]: {
        [Game_1.Stat.SPEED]: 10,
        [Game_1.Stat.CRIT_CHANCE]: 10,
        [Game_1.Stat.CRIT_POWER]: 100
    },
    [Item_1.Item.GRACIDEA_FLOWER]: { [Game_1.Stat.SPEED]: 10, [Game_1.Stat.SHIELD]: 15 },
    [Item_1.Item.CHOICE_SCARF]: { [Game_1.Stat.SPEED]: 10, [Game_1.Stat.SPE_DEF]: 3 },
    [Item_1.Item.PUNCHING_GLOVE]: { [Game_1.Stat.SPEED]: 10, [Game_1.Stat.ATK]: 3 },
    [Item_1.Item.DEFENSIVE_RIBBON]: { [Game_1.Stat.SPEED]: 10, [Game_1.Stat.DEF]: 3 },
    [Item_1.Item.WONDER_BOX]: { [Game_1.Stat.CRIT_CHANCE]: 10 },
    [Item_1.Item.CLEANSE_TAG]: { [Game_1.Stat.CRIT_CHANCE]: 10, [Game_1.Stat.SHIELD]: 15 },
    [Item_1.Item.WIDE_LENS]: { [Game_1.Stat.CRIT_CHANCE]: 10, [Game_1.Stat.SPE_DEF]: 3 },
    [Item_1.Item.RAZOR_CLAW]: { [Game_1.Stat.CRIT_CHANCE]: 50, [Game_1.Stat.ATK]: 3 },
    [Item_1.Item.FLUFFY_TAIL]: { [Game_1.Stat.CRIT_CHANCE]: 10, [Game_1.Stat.DEF]: 3 },
    [Item_1.Item.KINGS_ROCK]: { [Game_1.Stat.SHIELD]: 100 },
    [Item_1.Item.SHINY_CHARM]: { [Game_1.Stat.SHIELD]: 15, [Game_1.Stat.SPE_DEF]: 3 },
    [Item_1.Item.PROTECTIVE_PADS]: { [Game_1.Stat.SHIELD]: 60, [Game_1.Stat.ATK]: 6 },
    [Item_1.Item.MAX_REVIVE]: { [Game_1.Stat.SHIELD]: 15, [Game_1.Stat.DEF]: 3 },
    [Item_1.Item.ASSAULT_VEST]: { [Game_1.Stat.SPE_DEF]: 40 },
    [Item_1.Item.AMULET_COIN]: {},
    [Item_1.Item.POKE_DOLL]: { [Game_1.Stat.DEF]: 3, [Game_1.Stat.SPE_DEF]: 3 },
    [Item_1.Item.RED_ORB]: { [Game_1.Stat.ATK]: 10 },
    [Item_1.Item.FLAME_ORB]: { [Game_1.Stat.ATK]: 5, [Game_1.Stat.DEF]: 3 },
    [Item_1.Item.ROCKY_HELMET]: { [Game_1.Stat.DEF]: 25 },
    [Item_1.Item.ELECTIRIZER]: { [Game_1.Stat.SPEED]: 30 },
    [Item_1.Item.MAGMARIZER]: { [Game_1.Stat.ATK]: 5 },
    [Item_1.Item.MACHO_BRACE]: { [Game_1.Stat.ATK]: 15, [Game_1.Stat.SPEED]: -15 },
    [Item_1.Item.LIGHT_BALL]: { [Game_1.Stat.AP]: 75 },
    [Item_1.Item.TOXIC_ORB]: { [Game_1.Stat.SHIELD]: 15, [Game_1.Stat.SPE_DEF]: 4 },
    [Item_1.Item.METRONOME]: { [Game_1.Stat.PP]: 5 },
    [Item_1.Item.METAL_COAT]: { [Game_1.Stat.DEF]: 10, [Game_1.Stat.SPE_DEF]: 10 },
    [Item_1.Item.SWIFT_WING]: { [Game_1.Stat.SPEED]: 30 },
    [Item_1.Item.HARD_STONE]: { [Game_1.Stat.SHIELD]: 100 },
    [Item_1.Item.BIG_NUGGET]: {
        [Game_1.Stat.DEF]: 10,
        [Game_1.Stat.SPE_DEF]: 10
    },
    [Item_1.Item.INCENSE]: { [Game_1.Stat.SPE_DEF]: 10, [Game_1.Stat.AP]: 30 },
    [Item_1.Item.COOKING_POT]: { [Game_1.Stat.DEF]: 10 },
    [Item_1.Item.EVIOLITE]: {
        [Game_1.Stat.HP]: 100,
        [Game_1.Stat.ATK]: 10,
        [Game_1.Stat.AP]: 50,
        [Game_1.Stat.DEF]: 10,
        [Game_1.Stat.SPE_DEF]: 10
    },
    [Item_1.Item.GOLD_BOTTLE_CAP]: {
        [Game_1.Stat.LUCK]: 50
    },
    [Item_1.Item.COMET_SHARD]: { [Game_1.Stat.ATK]: 15 },
    [Item_1.Item.ABSORB_BULB]: { [Game_1.Stat.DEF]: 15, [Game_1.Stat.SPE_DEF]: 15 },
    [Item_1.Item.TEAL_MASK]: { [Game_1.Stat.SHIELD]: 50 },
    [Item_1.Item.WELLSPRING_MASK]: { [Game_1.Stat.SHIELD]: 50 },
    [Item_1.Item.CORNERSTONE_MASK]: { [Game_1.Stat.SHIELD]: 50 },
    [Item_1.Item.HEARTHFLAME_MASK]: { [Game_1.Stat.SHIELD]: 50 }
};
//# sourceMappingURL=items.js.map