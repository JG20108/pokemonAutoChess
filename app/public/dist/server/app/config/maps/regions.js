"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionDetails = void 0;
exports.getRegionTint = getRegionTint;
exports.countRegionsBySynergy = countRegionsBySynergy;
const Dungeon_1 = require("../../types/enum/Dungeon");
const Item_1 = require("../../types/enum/Item");
const Synergy_1 = require("../../types/enum/Synergy");
const music_1 = require("../game/music");
exports.RegionDetails = {
    [Dungeon_1.DungeonPMDO.AmpPlains]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.SOUND],
        music: Dungeon_1.DungeonMusic.AMP_PLAINS,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SOUR
    },
    [Dungeon_1.DungeonPMDO.AppleWoods]: {
        synergies: [Synergy_1.Synergy.BUG, Synergy_1.Synergy.GOURMET, Synergy_1.Synergy.BABY],
        music: Dungeon_1.DungeonMusic.APPLE_WOODS,
        regionalSpeciality: Item_1.Item.SWEET_APPLE
    },
    [Dungeon_1.DungeonPMDO.BarrenValley]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.GHOST],
        music: Dungeon_1.DungeonMusic.BARREN_VALLEY,
        regionalSpeciality: Item_1.Item.ROCK_SALT,
        tint: 0xdddddd
    },
    [Dungeon_1.DungeonPMDO.BeachCave]: {
        synergies: [Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FOSSIL],
        music: Dungeon_1.DungeonMusic.BEACH_CAVE,
        regionalSpeciality: Item_1.Item.LEEK
    },
    [Dungeon_1.DungeonPMDO.BrineCave]: {
        synergies: [Synergy_1.Synergy.POISON, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.DARK],
        music: Dungeon_1.DungeonMusic.BRINE_CAVE,
        regionalSpeciality: Item_1.Item.BLACK_SLUDGE,
        tint: 0xeeddee
    },
    [Dungeon_1.DungeonPMDO.BuriedRelic1]: {
        synergies: [Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.HUMAN],
        music: Dungeon_1.DungeonMusic.BURIED_RELIC,
        regionalSpeciality: Item_1.Item.POFFIN
    },
    [Dungeon_1.DungeonPMDO.BuriedRelic2]: {
        synergies: [Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.LIGHT],
        music: Dungeon_1.DungeonMusic.TIME_GEAR_REMIX,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SALTY
    },
    [Dungeon_1.DungeonPMDO.BuriedRelic3]: {
        synergies: [Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.HUMAN],
        music: Dungeon_1.DungeonMusic.TIME_GEAR,
        regionalSpeciality: Item_1.Item.RIBBON_SWEET
    },
    [Dungeon_1.DungeonPMDO.ConcealedRuins]: {
        synergies: [Synergy_1.Synergy.POISON, Synergy_1.Synergy.WILD, Synergy_1.Synergy.GHOST],
        music: Dungeon_1.DungeonMusic.CONCEALED_RUINS,
        regionalSpeciality: Item_1.Item.BINDING_MOCHI,
        tint: 0xddffbb
    },
    [Dungeon_1.DungeonPMDO.CraggyCoast]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.MONSTER],
        music: Dungeon_1.DungeonMusic.CRAGGY_COAST,
        regionalSpeciality: Item_1.Item.TEA,
        tint: 0xeeeeff
    },
    [Dungeon_1.DungeonPMDO.CrystalCave1]: {
        synergies: [Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.FAIRY],
        music: Dungeon_1.DungeonMusic.CRYSTAL_CAVE,
        regionalSpeciality: Item_1.Item.WHIPPED_DREAM,
        tint: 0xffeeff
    },
    [Dungeon_1.DungeonPMDO.CrystalCave2]: {
        synergies: [Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.LIGHT],
        music: Dungeon_1.DungeonMusic.STAFF_ROLL,
        regionalSpeciality: Item_1.Item.STAR_SWEET,
        tint: 0xffeeee
    },
    [Dungeon_1.DungeonPMDO.CrystalCrossing]: {
        synergies: [Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.POISON],
        music: Dungeon_1.DungeonMusic.CRYSTAL_CROSSING,
        regionalSpeciality: Item_1.Item.STRAWBERRY_SWEET,
        tint: 0xeeffff
    },
    [Dungeon_1.DungeonPMDO.DarkCrater]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GROUND],
        music: Dungeon_1.DungeonMusic.DARK_CRATER,
        regionalSpeciality: Item_1.Item.CURRY,
        tint: 0xffaaaa
    },
    [Dungeon_1.DungeonPMDO.DarkHill1]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING],
        music: Dungeon_1.DungeonMusic.DARK_HILL,
        regionalSpeciality: Item_1.Item.TINY_MUSHROOM,
        tint: 0xeeffee
    },
    [Dungeon_1.DungeonPMDO.DarkHill2]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.DARK, Synergy_1.Synergy.AMORPHOUS],
        music: Dungeon_1.DungeonMusic.I_SAW_SOMETHING_AGAIN,
        regionalSpeciality: Item_1.Item.CLOVER_SWEET,
        tint: 0xddffcc
    },
    [Dungeon_1.DungeonPMDO.DarkIceMountain]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.ICE, Synergy_1.Synergy.NORMAL],
        music: Dungeon_1.DungeonMusic.DARK_ICE_MOUNTAIN,
        regionalSpeciality: Item_1.Item.HEARTY_STEW
    },
    [Dungeon_1.DungeonPMDO.DarkIceMountainPeak]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.ICE, Synergy_1.Synergy.FLYING],
        music: Dungeon_1.DungeonMusic.AT_THE_SNOWY_MOUNTAIN,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [Dungeon_1.DungeonPMDO.DarknightRelic]: {
        synergies: [Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.HUMAN],
        music: Dungeon_1.DungeonMusic.DARK_WASTELAND,
        regionalSpeciality: Item_1.Item.RIBBON_SWEET
    },
    [Dungeon_1.DungeonPMDO.DarkWasteland]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.POISON, Synergy_1.Synergy.MONSTER],
        music: Dungeon_1.DungeonMusic.CHASM_CAVE,
        regionalSpeciality: Item_1.Item.BINDING_MOCHI,
        tint: 0xeeeeee
    },
    [Dungeon_1.DungeonPMDO.DeepBoulderQuarry]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FOSSIL],
        music: Dungeon_1.DungeonMusic.BOULDER_QUARRY,
        regionalSpeciality: Item_1.Item.ROCK_SALT,
        tint: 0xffeeee
    },
    [Dungeon_1.DungeonPMDO.DeepDarkCrater]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.MONSTER],
        music: Dungeon_1.DungeonMusic.DEEP_DARK_CRATER,
        regionalSpeciality: Item_1.Item.SMOKED_FILET,
        tint: 0xffddee
    },
    [Dungeon_1.DungeonPMDO.DeepDuskForest1]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.GOURMET],
        music: Dungeon_1.DungeonMusic.DEEP_DUSK_FOREST,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_BITTER,
        tint: 0xeeffee
    },
    [Dungeon_1.DungeonPMDO.DeepDuskForest2]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.LIGHT],
        music: Dungeon_1.DungeonMusic.GROWING_ANXIETY,
        regionalSpeciality: Item_1.Item.CLOVER_SWEET,
        tint: 0xffffee
    },
    [Dungeon_1.DungeonPMDO.DeepLimestoneCavern]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.BUG, Synergy_1.Synergy.ROCK],
        music: Dungeon_1.DungeonMusic.PROTECTED_WORLD_PEACE,
        regionalSpeciality: Item_1.Item.ROCK_SALT
    },
    [Dungeon_1.DungeonPMDO.DeepSealedRuin]: {
        synergies: [Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.GHOST, Synergy_1.Synergy.MONSTER],
        music: Dungeon_1.DungeonMusic.SEALED_RUIN_PIT,
        regionalSpeciality: Item_1.Item.LEFTOVERS,
        tint: 0xeeeeff
    },
    [Dungeon_1.DungeonPMDO.DesertRegion]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.LIGHT],
        music: Dungeon_1.DungeonMusic.MT_BLAZE_PEAK,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [Dungeon_1.DungeonPMDO.DrenchedBluff]: {
        synergies: [Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.MONSTER],
        music: Dungeon_1.DungeonMusic.DRENCHED_BLUFF,
        regionalSpeciality: Item_1.Item.LOVE_SWEET
    },
    [Dungeon_1.DungeonPMDO.DuskForest1]: {
        synergies: [Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK],
        music: Dungeon_1.DungeonMusic.DUSK_FOREST,
        regionalSpeciality: Item_1.Item.LARGE_LEEK,
        tint: 0xccddcc
    },
    [Dungeon_1.DungeonPMDO.DuskForest2]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA],
        music: Dungeon_1.DungeonMusic.SINISTER_WOODS,
        regionalSpeciality: Item_1.Item.LARGE_LEEK,
        tint: 0xccddee
    },
    [Dungeon_1.DungeonPMDO.ElectricMaze]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.GOURMET],
        music: Dungeon_1.DungeonMusic.STOP_THIEF,
        regionalSpeciality: Item_1.Item.FRUIT_JUICE
    },
    [Dungeon_1.DungeonPMDO.FarAmpPlains]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.FOSSIL],
        music: Dungeon_1.DungeonMusic.FAR_AMP_PLAINS,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SOUR
    },
    [Dungeon_1.DungeonPMDO.FinalMaze2]: {
        synergies: [Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.BUG],
        music: Dungeon_1.DungeonMusic.FRIEND_AREA_CAVES,
        regionalSpeciality: Item_1.Item.HONEY
    },
    [Dungeon_1.DungeonPMDO.FoggyForest]: {
        synergies: [Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLORA],
        music: Dungeon_1.DungeonMusic.FOGGY_FOREST,
        regionalSpeciality: Item_1.Item.WHIPPED_DREAM
    },
    [Dungeon_1.DungeonPMDO.ForestPath]: {
        synergies: [Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BUG, Synergy_1.Synergy.BABY],
        music: Dungeon_1.DungeonMusic.SKY_PEAK_FOREST,
        regionalSpeciality: Item_1.Item.HONEY
    },
    [Dungeon_1.DungeonPMDO.FrostyForest]: {
        synergies: [Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIGHTING],
        music: Dungeon_1.DungeonMusic.FROSTY_FOREST,
        regionalSpeciality: Item_1.Item.TINY_MUSHROOM
    },
    [Dungeon_1.DungeonPMDO.FutureTemporalSpire]: {
        synergies: [Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.PSYCHIC],
        music: Dungeon_1.DungeonMusic.BATTLE_WITH_RAYQUAZA,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL,
        tint: 0xdddddd
    },
    [Dungeon_1.DungeonPMDO.FutureTemporalTower]: {
        synergies: [Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.PSYCHIC],
        music: Dungeon_1.DungeonMusic.TEMPORAL_TOWER,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL,
        tint: 0xeeeeee
    },
    [Dungeon_1.DungeonPMDO.GoldenChamber]: {
        synergies: [Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.STEEL, Synergy_1.Synergy.AMORPHOUS],
        music: Dungeon_1.DungeonMusic.OUTLAW,
        regionalSpeciality: Item_1.Item.POFFIN,
        tint: 0xffffee
    },
    [Dungeon_1.DungeonPMDO.GrassMaze]: {
        synergies: [Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.NORMAL],
        music: Dungeon_1.DungeonMusic.MAKUHITA_DOJO,
        regionalSpeciality: Item_1.Item.MOOMOO_MILK
    },
    [Dungeon_1.DungeonPMDO.GreatCanyon]: {
        synergies: [Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE],
        music: Dungeon_1.DungeonMusic.GREAT_CANYON,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SPICY
    },
    [Dungeon_1.DungeonPMDO.HiddenHighland]: {
        synergies: [Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DRAGON],
        music: Dungeon_1.DungeonMusic.HIDDEN_HIGHLAND,
        regionalSpeciality: Item_1.Item.HONEY
    },
    [Dungeon_1.DungeonPMDO.HiddenLand]: {
        synergies: [Synergy_1.Synergy.FLORA, Synergy_1.Synergy.BUG, Synergy_1.Synergy.WATER],
        music: Dungeon_1.DungeonMusic.HIDDEN_LAND,
        regionalSpeciality: Item_1.Item.RAGE_CANDY_BAR
    },
    [Dungeon_1.DungeonPMDO.HowlingForest1]: {
        synergies: [Synergy_1.Synergy.SOUND, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.BUG],
        music: Dungeon_1.DungeonMusic.RANDOM_DUNGEON_2,
        regionalSpeciality: Item_1.Item.BERRY_JUICE
    },
    [Dungeon_1.DungeonPMDO.HowlingForest2]: {
        synergies: [Synergy_1.Synergy.SOUND, Synergy_1.Synergy.POISON, Synergy_1.Synergy.GOURMET],
        music: Dungeon_1.DungeonMusic.FRIEND_AREA_FOREST,
        regionalSpeciality: Item_1.Item.BLACK_SLUDGE
    },
    [Dungeon_1.DungeonPMDO.IceAegisCave]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.GROUND],
        music: Dungeon_1.DungeonMusic.ILLUSION_STONE_CHAMBER,
        regionalSpeciality: Item_1.Item.TINY_MUSHROOM,
        tint: 0xccffff
    },
    [Dungeon_1.DungeonPMDO.IceMaze]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FIGHTING],
        music: Dungeon_1.DungeonMusic.TOP_MENU_THEME,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [Dungeon_1.DungeonPMDO.IcicleForest]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.FIGHTING],
        music: Dungeon_1.DungeonMusic.ICICLE_FOREST,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SALTY
    },
    [Dungeon_1.DungeonPMDO.JoyousTower]: {
        synergies: [Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.BABY],
        music: Dungeon_1.DungeonMusic.A_NEW_WORLD,
        regionalSpeciality: Item_1.Item.WHIPPED_DREAM,
        tint: 0xffeeee
    },
    [Dungeon_1.DungeonPMDO.LapisCave]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.FOSSIL],
        music: Dungeon_1.DungeonMusic.LAPIS_CAVE,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SWEET
    },
    [Dungeon_1.DungeonPMDO.LightningField]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.LIGHT],
        music: Dungeon_1.DungeonMusic.OH_NO,
        regionalSpeciality: Item_1.Item.FRUIT_JUICE
    },
    [Dungeon_1.DungeonPMDO.LimestoneCavern]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.BUG, Synergy_1.Synergy.AQUATIC],
        music: Dungeon_1.DungeonMusic.LIMESTONE_CAVERN,
        regionalSpeciality: Item_1.Item.ROCK_SALT
    },
    [Dungeon_1.DungeonPMDO.LowerBrineCave]: {
        synergies: [Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.DRAGON],
        music: Dungeon_1.DungeonMusic.LOWER_BRINE_CAVE,
        regionalSpeciality: Item_1.Item.POFFIN
    },
    [Dungeon_1.DungeonPMDO.LushPrairie]: {
        synergies: [Synergy_1.Synergy.GOURMET, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.FLORA],
        music: Dungeon_1.DungeonMusic.WELCOME_TO_THE_WORLD_OF_POKEMON,
        regionalSpeciality: Item_1.Item.OLIVE_OIL
    },
    [Dungeon_1.DungeonPMDO.MagmaCavern2]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FIGHTING],
        music: Dungeon_1.DungeonMusic.MAGMA_CAVERN,
        regionalSpeciality: Item_1.Item.CURRY,
        tint: 0xffeeee
    },
    [Dungeon_1.DungeonPMDO.MagmaCavern3]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.MONSTER],
        music: Dungeon_1.DungeonMusic.MAGMA_CAVERN_PIT,
        regionalSpeciality: Item_1.Item.CURRY,
        tint: 0xffdddd
    },
    [Dungeon_1.DungeonPMDO.MeteorCave]: {
        synergies: [Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.HUMAN],
        music: Dungeon_1.DungeonMusic.RANDOM_DUNGEON_1,
        regionalSpeciality: Item_1.Item.BIG_MUSHROOM
    },
    [Dungeon_1.DungeonPMDO.MiracleSea]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.FAIRY],
        music: Dungeon_1.DungeonMusic.MIRACLE_SEA,
        regionalSpeciality: Item_1.Item.SMOKED_FILET
    },
    [Dungeon_1.DungeonPMDO.MoonlitCourtyard]: {
        synergies: [Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.DARK],
        music: Dungeon_1.DungeonMusic.GOODNIGHT,
        regionalSpeciality: Item_1.Item.LOVE_SWEET,
        tint: 0xddeeff
    },
    [Dungeon_1.DungeonPMDO.MtBlaze]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.WILD],
        music: Dungeon_1.DungeonMusic.MT_BLAZE,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [Dungeon_1.DungeonPMDO.MtBristle]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.MONSTER],
        music: Dungeon_1.DungeonMusic.MT_BRISTLE,
        regionalSpeciality: Item_1.Item.FRUIT_JUICE
    },
    [Dungeon_1.DungeonPMDO.MtFaraway2]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.DRAGON],
        music: Dungeon_1.DungeonMusic.FROSTY_GROTTO,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [Dungeon_1.DungeonPMDO.MtFaraway4]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.SOUND],
        music: Dungeon_1.DungeonMusic.ESCAPE_THROUGH_THE_SNOW,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SALTY
    },
    [Dungeon_1.DungeonPMDO.MtFreeze]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.NORMAL],
        music: Dungeon_1.DungeonMusic.MT_FREEZE,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [Dungeon_1.DungeonPMDO.MtHorn]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.SOUND],
        music: Dungeon_1.DungeonMusic.MT_HORN,
        regionalSpeciality: Item_1.Item.RAGE_CANDY_BAR
    },
    [Dungeon_1.DungeonPMDO.MtSteel1]: {
        synergies: [Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FOSSIL],
        music: Dungeon_1.DungeonMusic.MT_STEEL,
        regionalSpeciality: Item_1.Item.RAGE_CANDY_BAR
    },
    [Dungeon_1.DungeonPMDO.MtSteel2]: {
        synergies: [Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.AMORPHOUS],
        music: Dungeon_1.DungeonMusic.BOSS_BATTLE,
        regionalSpeciality: Item_1.Item.RAGE_CANDY_BAR
    },
    [Dungeon_1.DungeonPMDO.MtThunder]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.STEEL],
        music: Dungeon_1.DungeonMusic.MT_THUNDER,
        regionalSpeciality: Item_1.Item.FRUIT_JUICE
    },
    [Dungeon_1.DungeonPMDO.MtThunderPeak]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.WILD],
        music: Dungeon_1.DungeonMusic.MT_THUNDER_PEAK,
        regionalSpeciality: Item_1.Item.FRUIT_JUICE
    },
    [Dungeon_1.DungeonPMDO.MtTravail]: {
        synergies: [Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.FOSSIL],
        music: Dungeon_1.DungeonMusic.MT_TRAVAIL,
        regionalSpeciality: Item_1.Item.RAGE_CANDY_BAR
    },
    [Dungeon_1.DungeonPMDO.MurkyCave]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.HUMAN],
        music: Dungeon_1.DungeonMusic.MONSTER_HOUSE,
        regionalSpeciality: Item_1.Item.BLACK_SLUDGE
    },
    [Dungeon_1.DungeonPMDO.MurkyForest]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK],
        music: Dungeon_1.DungeonMusic.MURKY_FOREST,
        regionalSpeciality: Item_1.Item.BERRY_JUICE,
        tint: 0xffeeff
    },
    [Dungeon_1.DungeonPMDO.MysteryJungle1]: {
        synergies: [Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.POISON],
        music: Dungeon_1.DungeonMusic.FRIEND_AREA_STEPPE,
        regionalSpeciality: Item_1.Item.TART_APPLE
    },
    [Dungeon_1.DungeonPMDO.MysteryJungle2]: {
        synergies: [Synergy_1.Synergy.WILD, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.POISON],
        music: Dungeon_1.DungeonMusic.BLIZZARD_ISLAND,
        regionalSpeciality: Item_1.Item.SIRUPY_APPLE,
        tint: 0xddffdd
    },
    [Dungeon_1.DungeonPMDO.MystifyingForest]: {
        synergies: [Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA],
        music: Dungeon_1.DungeonMusic.MYSTIFYING_FOREST,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SWEET
    },
    [Dungeon_1.DungeonPMDO.NorthernDesert1]: {
        synergies: [Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.LIGHT],
        music: Dungeon_1.DungeonMusic.NORTHERN_DESERT,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SPICY
    },
    [Dungeon_1.DungeonPMDO.NorthernDesert2]: {
        synergies: [Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.WILD],
        music: Dungeon_1.DungeonMusic.NORTHERN_DESERT,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SPICY
    },
    [Dungeon_1.DungeonPMDO.NorthernRange1]: {
        synergies: [Synergy_1.Synergy.POISON, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.STEEL],
        music: Dungeon_1.DungeonMusic.FORTUNE_RAVINE,
        regionalSpeciality: Item_1.Item.POFFIN
    },
    [Dungeon_1.DungeonPMDO.NorthernRange2]: {
        synergies: [Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.STEEL],
        music: Dungeon_1.DungeonMusic.TEAM_SKULL,
        regionalSpeciality: Item_1.Item.MOOMOO_MILK
    },
    [Dungeon_1.DungeonPMDO.NorthwindField]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.SOUND],
        music: Dungeon_1.DungeonMusic.THROUGH_THE_SEA_OF_TIME,
        regionalSpeciality: Item_1.Item.NUTRITIOUS_EGG
    },
    [Dungeon_1.DungeonPMDO.PitfallValley1]: {
        synergies: [Synergy_1.Synergy.FIELD, Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.BABY],
        music: Dungeon_1.DungeonMusic.PERSONALITY_TEST,
        regionalSpeciality: Item_1.Item.MOOMOO_MILK
    },
    [Dungeon_1.DungeonPMDO.PoisonMaze]: {
        synergies: [Synergy_1.Synergy.POISON, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.BUG],
        music: Dungeon_1.DungeonMusic.RANDOM_DUNGEON_3,
        regionalSpeciality: Item_1.Item.BLACK_SLUDGE,
        tint: 0xffeeff
    },
    [Dungeon_1.DungeonPMDO.PurityForest2]: {
        synergies: [Synergy_1.Synergy.BABY, Synergy_1.Synergy.GOURMET, Synergy_1.Synergy.AMORPHOUS],
        music: Dungeon_1.DungeonMusic.RUN_AWAY,
        regionalSpeciality: Item_1.Item.SWEET_APPLE
    },
    [Dungeon_1.DungeonPMDO.PurityForest4]: {
        synergies: [Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.BABY, Synergy_1.Synergy.FAIRY],
        music: Dungeon_1.DungeonMusic.POKEMON_SQUARE,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SWEET
    },
    [Dungeon_1.DungeonPMDO.PurityForest6]: {
        synergies: [Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BABY],
        music: Dungeon_1.DungeonMusic.SHAYMIN_VILLAGE,
        regionalSpeciality: Item_1.Item.SWEET_APPLE
    },
    [Dungeon_1.DungeonPMDO.PurityForest7]: {
        synergies: [Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BABY, Synergy_1.Synergy.SOUND],
        music: Dungeon_1.DungeonMusic.ON_THE_BEACH_AT_DUSK,
        regionalSpeciality: Item_1.Item.SWEET_APPLE
    },
    [Dungeon_1.DungeonPMDO.QuicksandCave]: {
        synergies: [Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.NORMAL],
        music: Dungeon_1.DungeonMusic.QUICKSAND_CAVE,
        regionalSpeciality: Item_1.Item.LEEK
    },
    [Dungeon_1.DungeonPMDO.QuicksandPit]: {
        synergies: [Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.MONSTER],
        music: Dungeon_1.DungeonMusic.QUICKSAND_PIT,
        regionalSpeciality: Item_1.Item.LEEK
    },
    [Dungeon_1.DungeonPMDO.QuicksandUnused]: {
        synergies: [Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.POISON],
        music: Dungeon_1.DungeonMusic.THERES_TROUBLE,
        regionalSpeciality: Item_1.Item.LARGE_LEEK,
        tint: 0xeeeeee
    },
    [Dungeon_1.DungeonPMDO.RescueTeamMaze]: {
        synergies: [Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.ARTIFICIAL],
        music: Dungeon_1.DungeonMusic.RESCUE_TEAM_BASE,
        regionalSpeciality: Item_1.Item.NUTRITIOUS_EGG
    },
    [Dungeon_1.DungeonPMDO.RockAegisCave]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GHOST, Synergy_1.Synergy.AMORPHOUS],
        music: Dungeon_1.DungeonMusic.FRIEND_AREA_SWAMP,
        regionalSpeciality: Item_1.Item.ROCK_SALT,
        tint: 0xeeffee
    },
    [Dungeon_1.DungeonPMDO.RockMaze]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FIGHTING],
        music: Dungeon_1.DungeonMusic.DEFY_THE_LEGENDS,
        regionalSpeciality: Item_1.Item.ROCK_SALT
    },
    [Dungeon_1.DungeonPMDO.RockPathRB]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.FIRE],
        music: Dungeon_1.DungeonMusic.RISING_FEAR,
        regionalSpeciality: Item_1.Item.RIBBON_SWEET
    },
    [Dungeon_1.DungeonPMDO.RockPathTDS]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.MONSTER],
        music: Dungeon_1.DungeonMusic.FRIEND_AREA_POND,
        regionalSpeciality: Item_1.Item.RIBBON_SWEET
    },
    [Dungeon_1.DungeonPMDO.SealedRuin]: {
        synergies: [Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GHOST],
        music: Dungeon_1.DungeonMusic.THE_LEGEND_OF_NINETALES,
        regionalSpeciality: Item_1.Item.LEFTOVERS
    },
    [Dungeon_1.DungeonPMDO.SidePath]: {
        synergies: [Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.STEEL],
        music: Dungeon_1.DungeonMusic.CAVE_AND_SIDE_PATH,
        regionalSpeciality: Item_1.Item.MOOMOO_MILK
    },
    [Dungeon_1.DungeonPMDO.SilentChasm]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.WILD],
        music: Dungeon_1.DungeonMusic.SILENT_CHASM,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [Dungeon_1.DungeonPMDO.SkyPeak4thPass]: {
        synergies: [Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.WATER],
        music: Dungeon_1.DungeonMusic.SKY_PEAK_COAST,
        regionalSpeciality: Item_1.Item.OLIVE_OIL
    },
    [Dungeon_1.DungeonPMDO.SkyPeak7thPass]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FAIRY],
        music: Dungeon_1.DungeonMusic.DIALGA_FIGHT_TO_THE_FINISH,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [Dungeon_1.DungeonPMDO.SkyPeakSummitPass]: {
        synergies: [Synergy_1.Synergy.FLYING, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIGHTING],
        music: Dungeon_1.DungeonMusic.SKY_TOWER_SUMMIT,
        regionalSpeciality: Item_1.Item.STAR_SWEET,
        tint: 0xeeeeee
    },
    [Dungeon_1.DungeonPMDO.SkyTower]: {
        synergies: [Synergy_1.Synergy.FLYING, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.FAIRY],
        music: Dungeon_1.DungeonMusic.SKY_TOWER,
        regionalSpeciality: Item_1.Item.STAR_SWEET
    },
    [Dungeon_1.DungeonPMDO.SnowPath]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.NORMAL],
        music: Dungeon_1.DungeonMusic.SKY_PEAK_SNOWFIELD,
        regionalSpeciality: Item_1.Item.HEARTY_STEW
    },
    [Dungeon_1.DungeonPMDO.SolarCave1]: {
        synergies: [Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.SOUND],
        music: Dungeon_1.DungeonMusic.SKY_PEAK_PRAIRIE,
        regionalSpeciality: Item_1.Item.STRAWBERRY_SWEET
    },
    [Dungeon_1.DungeonPMDO.SouthernCavern1]: {
        synergies: [Synergy_1.Synergy.STEEL, Synergy_1.Synergy.POISON, Synergy_1.Synergy.ARTIFICIAL],
        music: Dungeon_1.DungeonMusic.SPRING_CAVE,
        regionalSpeciality: Item_1.Item.CLOVER_SWEET
    },
    [Dungeon_1.DungeonPMDO.SouthernCavern2]: {
        synergies: [Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.POISON],
        music: Dungeon_1.DungeonMusic.SPRING_CAVE_DEPTHS,
        regionalSpeciality: Item_1.Item.BERRY_SWEET
    },
    [Dungeon_1.DungeonPMDO.SouthernJungle]: {
        synergies: [Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GRASS],
        music: Dungeon_1.DungeonMusic.SOUTHERN_JUNGLE,
        regionalSpeciality: Item_1.Item.BERRY_JUICE,
        tint: 0xeeffee
    },
    [Dungeon_1.DungeonPMDO.SpacialCliffs]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.ELECTRIC],
        music: Dungeon_1.DungeonMusic.SPACIAL_CLIFFS,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL,
        tint: 0xeeeeee
    },
    [Dungeon_1.DungeonPMDO.SpacialRift1]: {
        synergies: [Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.MONSTER],
        music: Dungeon_1.DungeonMusic.IN_THE_FUTURE,
        regionalSpeciality: Item_1.Item.STAR_SWEET,
        tint: 0xeeffee
    },
    [Dungeon_1.DungeonPMDO.SpacialRift2]: {
        synergies: [Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.PSYCHIC],
        music: Dungeon_1.DungeonMusic.PLANETS_PARALYSIS,
        regionalSpeciality: Item_1.Item.STAR_SWEET,
        tint: 0xeeeeee
    },
    [Dungeon_1.DungeonPMDO.SteamCave]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GOURMET, Synergy_1.Synergy.ELECTRIC],
        music: Dungeon_1.DungeonMusic.STEAM_CAVE,
        regionalSpeciality: Item_1.Item.BALM_MUSHROOM,
        tint: 0xfff0f0
    },
    [Dungeon_1.DungeonPMDO.SteelAegisCave]: {
        synergies: [Synergy_1.Synergy.STEEL, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIGHTING],
        music: Dungeon_1.DungeonMusic.AEGIS_CAVE,
        regionalSpeciality: Item_1.Item.POFFIN
    },
    [Dungeon_1.DungeonPMDO.StormySea1]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.ELECTRIC],
        music: Dungeon_1.DungeonMusic.STORMY_SEA,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SOUR
    },
    [Dungeon_1.DungeonPMDO.StormySea2]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.SOUND],
        music: Dungeon_1.DungeonMusic.FRIEND_AREA_OCEANIC,
        regionalSpeciality: Item_1.Item.SMOKED_FILET
    },
    [Dungeon_1.DungeonPMDO.SurroundedSea]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.ICE, Synergy_1.Synergy.WILD],
        music: Dungeon_1.DungeonMusic.SURROUNDED_SEA,
        regionalSpeciality: Item_1.Item.LEFTOVERS
    },
    [Dungeon_1.DungeonPMDO.TemporalSpire]: {
        synergies: [Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AMORPHOUS],
        music: Dungeon_1.DungeonMusic.TEMPORAL_SPIRE,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL
    },
    [Dungeon_1.DungeonPMDO.TemporalTower]: {
        synergies: [Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.STEEL, Synergy_1.Synergy.ARTIFICIAL],
        music: Dungeon_1.DungeonMusic.GARDEVOIR_INSIDE_OF_A_DREAM,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL
    },
    [Dungeon_1.DungeonPMDO.TemporalUnused]: {
        synergies: [Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.ARTIFICIAL],
        music: Dungeon_1.DungeonMusic.TEMPORAL_PINNACLE,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL
    },
    [Dungeon_1.DungeonPMDO.TestDungeon]: {
        synergies: [Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.PSYCHIC],
        music: Dungeon_1.DungeonMusic.FRIEND_AREA_LAB,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SPICY
    },
    [Dungeon_1.DungeonPMDO.TheNightmare]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.DARK, Synergy_1.Synergy.PSYCHIC],
        music: Dungeon_1.DungeonMusic.THE_POWER_OF_DARKNESS,
        regionalSpeciality: Item_1.Item.BLACK_SLUDGE,
        tint: 0xffddff
    },
    [Dungeon_1.DungeonPMDO.ThunderwaveCave]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.LIGHT],
        music: Dungeon_1.DungeonMusic.THUNDERWAVE_CAVE,
        regionalSpeciality: Item_1.Item.BIG_MUSHROOM
    },
    [Dungeon_1.DungeonPMDO.TinyMeadow]: {
        synergies: [Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BABY, Synergy_1.Synergy.AMORPHOUS],
        music: Dungeon_1.DungeonMusic.FRIEND_AREA_GRASSLANDS,
        regionalSpeciality: Item_1.Item.MOOMOO_MILK
    },
    [Dungeon_1.DungeonPMDO.TinyWoods]: {
        synergies: [Synergy_1.Synergy.BUG, Synergy_1.Synergy.BABY, Synergy_1.Synergy.NORMAL],
        music: Dungeon_1.DungeonMusic.TINY_WOODS,
        regionalSpeciality: Item_1.Item.SWEET_APPLE
    },
    [Dungeon_1.DungeonPMDO.TreeshroudForest1]: {
        synergies: [Synergy_1.Synergy.GOURMET, Synergy_1.Synergy.WATER, Synergy_1.Synergy.BUG],
        music: Dungeon_1.DungeonMusic.TREESHROUD_FOREST,
        regionalSpeciality: Item_1.Item.TART_APPLE
    },
    [Dungeon_1.DungeonPMDO.TreeshroudForest2]: {
        synergies: [Synergy_1.Synergy.GRASS, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.BABY],
        music: Dungeon_1.DungeonMusic.FRIEND_AREA_WILDS,
        regionalSpeciality: Item_1.Item.TART_APPLE
    },
    [Dungeon_1.DungeonPMDO.UnusedBrineCave]: {
        synergies: [Synergy_1.Synergy.GOURMET, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.DRAGON],
        music: Dungeon_1.DungeonMusic.IN_THE_NIGHTMARE,
        regionalSpeciality: Item_1.Item.STRAWBERRY_SWEET
    },
    [Dungeon_1.DungeonPMDO.UnusedSteamCave]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.WATER, Synergy_1.Synergy.ELECTRIC],
        music: Dungeon_1.DungeonMusic.UPPER_STEAM_CAVE,
        regionalSpeciality: Item_1.Item.BALM_MUSHROOM
    },
    [Dungeon_1.DungeonPMDO.UnusedWaterfallPond]: {
        synergies: [Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.BUG, Synergy_1.Synergy.WILD],
        music: Dungeon_1.DungeonMusic.DEEP_STAR_CAVE,
        regionalSpeciality: Item_1.Item.CLOVER_SWEET
    },
    [Dungeon_1.DungeonPMDO.UproarForest]: {
        synergies: [Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.SOUND],
        music: Dungeon_1.DungeonMusic.TREASURE_TOWN,
        regionalSpeciality: Item_1.Item.RAGE_CANDY_BAR
    },
    [Dungeon_1.DungeonPMDO.VastIceMountain]: {
        synergies: [Synergy_1.Synergy.WILD, Synergy_1.Synergy.ICE, Synergy_1.Synergy.ROCK],
        music: Dungeon_1.DungeonMusic.VAST_ICE_MOUNTAIN,
        regionalSpeciality: Item_1.Item.HEARTY_STEW
    },
    [Dungeon_1.DungeonPMDO.VastIceMountainPeak]: {
        synergies: [Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ICE, Synergy_1.Synergy.FLYING],
        music: Dungeon_1.DungeonMusic.VAST_ICE_MOUNTAIN_PEAK,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [Dungeon_1.DungeonPMDO.WaterfallCave]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.SOUND],
        music: Dungeon_1.DungeonMusic.MAROWAK_DOJO,
        regionalSpeciality: Item_1.Item.TEA
    },
    [Dungeon_1.DungeonPMDO.WaterfallPond]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.SOUND],
        music: Dungeon_1.DungeonMusic.WATERFALL_CAVE,
        regionalSpeciality: Item_1.Item.TEA,
        tint: 0xeeffff
    },
    [Dungeon_1.DungeonPMDO.WaterMaze]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.GRASS],
        music: Dungeon_1.DungeonMusic.STAR_CAVE,
        regionalSpeciality: Item_1.Item.TEA
    },
    [Dungeon_1.DungeonPMDO.WesternCave1]: {
        synergies: [Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.ARTIFICIAL],
        music: Dungeon_1.DungeonMusic.SKY_PEAK_FINAL_PASS,
        regionalSpeciality: Item_1.Item.RIBBON_SWEET
    },
    [Dungeon_1.DungeonPMDO.WesternCave2]: {
        synergies: [Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.ROCK],
        music: Dungeon_1.DungeonMusic.JOB_CLEAR,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_BITTER
    },
    [Dungeon_1.DungeonPMDO.WishCave1]: {
        synergies: [Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.BABY],
        music: Dungeon_1.DungeonMusic.LIVING_SPIRIT,
        regionalSpeciality: Item_1.Item.LOVE_SWEET
    },
    [Dungeon_1.DungeonPMDO.WishCave2]: {
        synergies: [Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.BUG],
        music: Dungeon_1.DungeonMusic.TEAM_CHARM_THEME,
        regionalSpeciality: Item_1.Item.LOVE_SWEET
    },
    [Dungeon_1.DungeonPMDO.WorldAbyss2]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ELECTRIC],
        music: Dungeon_1.DungeonMusic.WORLD_CALAMITY,
        regionalSpeciality: Item_1.Item.LEFTOVERS
    },
    [Dungeon_1.DungeonPMDO.WyvernHill]: {
        synergies: [Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.GOURMET],
        music: Dungeon_1.DungeonMusic.KECLEONS_SHOP,
        regionalSpeciality: Item_1.Item.POFFIN
    },
    [Dungeon_1.DungeonPMDO.ZeroIsleEast3]: {
        synergies: [Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.STEEL],
        music: Dungeon_1.DungeonMusic.VERSUS_BOSS,
        regionalSpeciality: Item_1.Item.BIG_MUSHROOM,
        tint: 0xeeeeee
    },
    [Dungeon_1.DungeonPMDO.ZeroIsleEast4]: {
        synergies: [Synergy_1.Synergy.POISON, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.PSYCHIC],
        music: Dungeon_1.DungeonMusic.VERSUS_LEGENDARY,
        regionalSpeciality: Item_1.Item.BLACK_SLUDGE,
        tint: 0xeeeeee
    },
    [Dungeon_1.DungeonPMDO.ZeroIsleSouth1]: {
        synergies: [Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.BUG, Synergy_1.Synergy.GOURMET],
        music: Dungeon_1.DungeonMusic.WIGGLYTUFFS_GUILD_REMIX,
        regionalSpeciality: Item_1.Item.LARGE_LEEK
    },
    [Dungeon_1.DungeonPMDO.ZeroIsleSouth2]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FIGHTING],
        music: Dungeon_1.DungeonMusic.WIGGLYTUFFS_GUILD,
        regionalSpeciality: Item_1.Item.HERBA_MYSTICA_SALTY
    },
    town: {
        synergies: [],
        music: (0, music_1.getMusicAlt)(Dungeon_1.DungeonMusic.TREASURE_TOWN_STAGE_0),
        regionalSpeciality: Item_1.Item.NUTRITIOUS_EGG
    }
};
function getRegionTint(region, colorblindMode = false) {
    var _a, _b;
    if (colorblindMode) {
        return 0xffffff;
    }
    return (_b = (_a = exports.RegionDetails[region]) === null || _a === void 0 ? void 0 : _a.tint) !== null && _b !== void 0 ? _b : 0xffffff;
}
function countRegionsBySynergy() {
    const synergyCount = {};
    Object.values(Synergy_1.Synergy).forEach((synergy) => {
        synergyCount[synergy] = 0;
    });
    Object.values(exports.RegionDetails).forEach((region) => {
        region.synergies.forEach((synergy) => {
            synergyCount[synergy]++;
        });
    });
    console.log("Regions per synergy:");
    Object.entries(synergyCount)
        .sort(([, a], [, b]) => b - a)
        .forEach(([synergy, count]) => {
        console.log(`${synergy}: ${count}`);
    });
    return synergyCount;
}
//# sourceMappingURL=regions.js.map