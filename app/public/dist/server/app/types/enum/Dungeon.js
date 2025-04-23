"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonDetails = exports.DungeonPMDO = exports.DungeonMusic = void 0;
const Item_1 = require("./Item");
const Synergy_1 = require("./Synergy");
var DungeonMusic;
(function (DungeonMusic) {
    DungeonMusic["AEGIS_CAVE"] = "Aegis Cave";
    DungeonMusic["AMP_PLAINS"] = "Amp Plains";
    DungeonMusic["A_NEW_WORLD"] = "A New World";
    DungeonMusic["APPLE_WOODS"] = "Apple Woods";
    DungeonMusic["AT_THE_SNOWY_MOUNTAIN"] = "At the Snowy Mountain";
    DungeonMusic["AT_THE_END_OF_THE_DAY"] = "At the End of the Day";
    DungeonMusic["BARREN_VALLEY"] = "Barren Valley";
    DungeonMusic["BATTLE_WITH_RAYQUAZA"] = "Battle with Rayquaza";
    DungeonMusic["BEACH_CAVE"] = "Beach Cave";
    DungeonMusic["BLIZZARD_ISLAND"] = "Blizzard Island Rescue Team Medley";
    DungeonMusic["BOSS_BATTLE"] = "Boss Battle!";
    DungeonMusic["BOULDER_QUARRY"] = "Boulder Quarry";
    DungeonMusic["BRINE_CAVE"] = "Brine Cave";
    DungeonMusic["BURIED_RELIC"] = "Burned Relic";
    DungeonMusic["CAVE_AND_SIDE_PATH"] = "Cave and Side Path";
    DungeonMusic["CHASM_CAVE"] = "Chasm Cave";
    DungeonMusic["CONCEALED_RUINS"] = "Concealed Ruins";
    DungeonMusic["CRAGGY_COAST"] = "Craggy Coast";
    DungeonMusic["CRYSTAL_CAVE"] = "Crystal Cave";
    DungeonMusic["CRYSTAL_CROSSING"] = "Crystal Crossing";
    DungeonMusic["DARK_CRATER"] = "Dark Crater";
    DungeonMusic["DARK_HILL"] = "Dark Hill";
    DungeonMusic["DARK_ICE_MOUNTAIN"] = "Dark Ice Mountain";
    DungeonMusic["DARK_WASTELAND"] = "Dark Wasteland";
    DungeonMusic["DEEP_DARK_CRATER"] = "Deep Dark Crater";
    DungeonMusic["DEEP_DUSK_FOREST"] = "Deep Dusk Forest";
    DungeonMusic["DEEP_STAR_CAVE"] = "Deep Star Cave";
    DungeonMusic["DEFY_THE_LEGENDS"] = "Defy the Legends";
    DungeonMusic["DRENCHED_BLUFF"] = "Drenched Bluff";
    DungeonMusic["DUN_HONOO_2"] = "Dun Honoo 2";
    DungeonMusic["DUSK_FOREST"] = "Dusk Forest";
    DungeonMusic["ESCAPE_THROUGH_THE_SNOW"] = "Escape Through the Snow";
    DungeonMusic["FAR_AMP_PLAINS"] = "Far Amp Plains";
    DungeonMusic["FOGGY_FOREST"] = "Foggy Forest";
    DungeonMusic["FORTUNE_RAVINE"] = "Fortune Ravine";
    DungeonMusic["FORTUNE_RAVINE_DEPTHS"] = "Fortune Ravine Depths";
    DungeonMusic["FRIEND_AREA_CAVES"] = "Friend Area ~ Caves";
    DungeonMusic["FRIEND_AREA_FOREST"] = "Friend Area ~ Forest";
    DungeonMusic["FRIEND_AREA_GRASSLANDS"] = "Friend Area - Grasslands";
    DungeonMusic["FRIEND_AREA_OCEANIC"] = "Friend Area ~ Oceanic";
    DungeonMusic["FRIEND_AREA_LAB"] = "Friend Area - Lab";
    DungeonMusic["FRIEND_AREA_POND"] = "Friend Area - Pond";
    DungeonMusic["FRIEND_AREA_STEPPE"] = "Friend Area - Steppe";
    DungeonMusic["FRIEND_AREA_SWAMP"] = "Friend Area - Swamp";
    DungeonMusic["FRIEND_AREA_WILDS"] = "Friend Area - Wilds";
    DungeonMusic["FROSTY_FOREST"] = "Frosty Forest";
    DungeonMusic["FROSTY_GROTTO"] = "Frosty Grotto";
    DungeonMusic["GARDEVOIR_INSIDE_OF_A_DREAM"] = "Gardevoir Inside of a Dream";
    DungeonMusic["GOODNIGHT"] = "Goodnight";
    DungeonMusic["GREAT_CANYON"] = "Great Canyon";
    DungeonMusic["GROWING_ANXIETY"] = "Growing Anxiety";
    DungeonMusic["HIDDEN_HIGHLAND"] = "Hidden Highland";
    DungeonMusic["HIDDEN_LAND"] = "Hidden Land";
    DungeonMusic["I_SAW_SOMETHING_AGAIN"] = "I Saw Something Again";
    DungeonMusic["ICICLE_FOREST"] = "Icicle Forest";
    DungeonMusic["ILLUSION_STONE_CHAMBER"] = "Illusion Stone Chamber";
    DungeonMusic["IN_THE_FUTURE"] = "In the Future";
    DungeonMusic["IN_THE_HANDS_OF_FATE"] = "In the Hands of Fate";
    DungeonMusic["IN_THE_NIGHTMARE"] = "In the Nightmare";
    DungeonMusic["JOB_CLEAR"] = "Job Clear!";
    DungeonMusic["KECLEONS_SHOP"] = "Kecleon's Shop";
    DungeonMusic["LAPIS_CAVE"] = "Lapis Cave";
    DungeonMusic["LIMESTONE_CAVERN"] = "Limestone Cavern";
    DungeonMusic["LIVING_SPIRIT"] = "Living Spirit";
    DungeonMusic["LOWER_BRINE_CAVE"] = "Lower Brine Cave";
    DungeonMusic["LUDICOLO_DANCE"] = "Ludicolo Dance";
    DungeonMusic["MAGMA_CAVERN"] = "Magma Cavern";
    DungeonMusic["MAGMA_CAVERN_PIT"] = "Magma Cavern Pit";
    DungeonMusic["MAKUHITA_DOJO"] = "Makuhita Dojo";
    DungeonMusic["MAROWAK_DOJO"] = "Marowak Dojo";
    DungeonMusic["MIRACLE_SEA"] = "Miracle Sea";
    DungeonMusic["MONSTER_HOUSE"] = "Monster House!";
    DungeonMusic["MT_BLAZE"] = "Mt. Blaze";
    DungeonMusic["MT_BRISTLE"] = "Mt. Bristle";
    DungeonMusic["MT_FREEZE"] = "Mt. Freeze";
    DungeonMusic["MT_HORN"] = "Mt. Horn";
    DungeonMusic["MT_STEEL"] = "Mt. Steel";
    DungeonMusic["MT_THUNDER"] = "Mt. Thunder";
    DungeonMusic["MT_THUNDER_PEAK"] = "Mt. Thunder Peak";
    DungeonMusic["MT_TRAVAIL"] = "Mt. Travail";
    DungeonMusic["MURKY_FOREST"] = "Murky Forest";
    DungeonMusic["MYSTIFYING_FOREST"] = "Mystifying Forest";
    DungeonMusic["NORTHERN_DESERT"] = "Northern Desert";
    DungeonMusic["OH_NO"] = "Oh No!";
    DungeonMusic["ON_THE_BEACH_AT_DUSK"] = "On the Beach at Dusk";
    DungeonMusic["OUTLAW"] = "Outlaw!";
    DungeonMusic["PERSONALITY_TEST"] = "Personality Test";
    DungeonMusic["PLANETS_PARALYSIS"] = "Planet's Paralysis";
    DungeonMusic["POKEMON_SQUARE"] = "Pokemon Square";
    DungeonMusic["PROTECTED_WORLD_PEACE"] = "Protected World Peace";
    DungeonMusic["QUICKSAND_CAVE"] = "Quicksand Cave";
    DungeonMusic["QUICKSAND_PIT"] = "Quicksand Pit";
    DungeonMusic["RANDOM_DUNGEON_1"] = "Random Dungeon 1";
    DungeonMusic["RANDOM_DUNGEON_2"] = "Random Dungeon 2";
    DungeonMusic["RANDOM_DUNGEON_3"] = "Random Dungeon 3";
    DungeonMusic["RESCUE_TEAM_BASE"] = "Rescue Team Base";
    DungeonMusic["RISING_FEAR"] = "Rising Fear";
    DungeonMusic["RUN_AWAY"] = "Run Away";
    DungeonMusic["SEALED_RUIN_PIT"] = "Sealed Ruin Pit";
    DungeonMusic["SHAYMIN_VILLAGE"] = "Shaymin Village";
    DungeonMusic["SILENT_CHASM"] = "Silent Chasm";
    DungeonMusic["SINISTER_WOODS"] = "Sinister Woods";
    DungeonMusic["SKY_PEAK_CAVE"] = "Sky Peak Cave";
    DungeonMusic["SKY_PEAK_COAST"] = "Sky Peak Coast";
    DungeonMusic["SKY_PEAK_FINAL_PASS"] = "Sky Peak Final Pass";
    DungeonMusic["SKY_PEAK_FOREST"] = "Sky Peak Forest";
    DungeonMusic["SKY_PEAK_PRAIRIE"] = "Sky Peak Prairie";
    DungeonMusic["SKY_PEAK_SNOWFIELD"] = "Sky Peak Snowfield";
    DungeonMusic["SKY_TOWER"] = "Sky Tower";
    DungeonMusic["SKY_TOWER_SUMMIT"] = "Sky Tower Summit";
    DungeonMusic["SOUTHERN_JUNGLE"] = "Southern Jungle";
    DungeonMusic["SPACIAL_CLIFFS"] = "Spacial Cliffs";
    DungeonMusic["SPINDA_CAFE"] = "Spinda's Cafe";
    DungeonMusic["SPRING_CAVE"] = "Spring Cave";
    DungeonMusic["SPRING_CAVE_DEPTHS"] = "Spring Cave Depths";
    DungeonMusic["STAFF_ROLL"] = "Staff Roll";
    DungeonMusic["STAR_CAVE"] = "Star Cave";
    DungeonMusic["STEAM_CAVE"] = "Steam Cave";
    DungeonMusic["STOP_THIEF"] = "Stop! Thief!";
    DungeonMusic["STORMY_SEA"] = "Stormy Sea";
    DungeonMusic["SURROUNDED_SEA"] = "Surrounded Sea";
    DungeonMusic["TEAM_CHARM_THEME"] = "Team Charm's Theme";
    DungeonMusic["TEAM_SKULL"] = "Team Skull";
    DungeonMusic["TEMPORAL_PINNACLE"] = "Temporal Pinnacle";
    DungeonMusic["TEMPORAL_SPIRE"] = "Temporal Spire";
    DungeonMusic["TEMPORAL_TOWER"] = "Temporal Tower";
    DungeonMusic["THE_LEGEND_OF_NINETALES"] = "The Legend of Ninetales";
    DungeonMusic["THE_POWER_OF_DARKNESS"] = "The Power of Darkness";
    DungeonMusic["THERES_TROUBLE"] = "There's Trouble!";
    DungeonMusic["THROUGH_THE_SEA_OF_TIME"] = "Through the Sea of Time";
    DungeonMusic["THUNDERWAVE_CAVE"] = "Thunderwave Cave";
    DungeonMusic["TIME_GEAR"] = "Time Gear";
    DungeonMusic["TIME_GEAR_REMIX"] = "Time Gear Remix";
    DungeonMusic["TINY_WOODS"] = "Tiny Woods";
    DungeonMusic["TOP_MENU_THEME"] = "Top Menu Theme";
    DungeonMusic["TREASURE_TOWN"] = "Treasure Town";
    DungeonMusic["TREASURE_TOWN_STAGE_0"] = "Treasure Town Stage 0";
    DungeonMusic["TREASURE_TOWN_STAGE_10"] = "Treasure Town Stage 10";
    DungeonMusic["TREASURE_TOWN_STAGE_20"] = "Treasure Town Stage 20";
    DungeonMusic["TREESHROUD_FOREST"] = "Treeshroud Forest";
    DungeonMusic["UPPER_STEAM_CAVE"] = "Upper Steam Cave";
    DungeonMusic["VAST_ICE_MOUNTAIN"] = "Vast Ice Mountain";
    DungeonMusic["VAST_ICE_MOUNTAIN_PEAK"] = "Vast Ice Mountain Peak";
    DungeonMusic["VERSUS_BOSS"] = "Versus Boss";
    DungeonMusic["VERSUS_LEGENDARY"] = "Versus Legendary";
    DungeonMusic["WATERFALL_CAVE"] = "Waterfall Cave";
    DungeonMusic["WELCOME_TO_THE_WORLD_OF_POKEMON"] = "Welcome To the World of Pokemon!";
    DungeonMusic["WIGGLYTUFFS_GUILD"] = "Wigglytuff's Guild";
    DungeonMusic["WIGGLYTUFFS_GUILD_REMIX"] = "Wigglytuff's Guild Remix";
    DungeonMusic["WORLD_CALAMITY"] = "World Calamity";
})(DungeonMusic || (exports.DungeonMusic = DungeonMusic = {}));
var DungeonPMDO;
(function (DungeonPMDO) {
    DungeonPMDO["AmpPlains"] = "AmpPlains";
    DungeonPMDO["AppleWoods"] = "AppleWoods";
    DungeonPMDO["BarrenValley"] = "BarrenValley";
    DungeonPMDO["BeachCave"] = "BeachCave";
    DungeonPMDO["BrineCave"] = "BrineCave";
    DungeonPMDO["BuriedRelic1"] = "BuriedRelic1";
    DungeonPMDO["BuriedRelic2"] = "BuriedRelic2";
    DungeonPMDO["BuriedRelic3"] = "BuriedRelic3";
    DungeonPMDO["ConcealedRuins"] = "ConcealedRuins";
    DungeonPMDO["CraggyCoast"] = "CraggyCoast";
    DungeonPMDO["CrystalCave1"] = "CrystalCave1";
    DungeonPMDO["CrystalCave2"] = "CrystalCave2";
    DungeonPMDO["CrystalCrossing"] = "CrystalCrossing";
    DungeonPMDO["DarkCrater"] = "DarkCrater";
    DungeonPMDO["DarkHill1"] = "DarkHill1";
    DungeonPMDO["DarkHill2"] = "DarkHill2";
    DungeonPMDO["DarkIceMountain"] = "DarkIceMountain";
    DungeonPMDO["DarkIceMountainPeak"] = "DarkIceMountainPeak";
    DungeonPMDO["DarknightRelic"] = "DarknightRelic";
    DungeonPMDO["DarkWasteland"] = "DarkWasteland";
    DungeonPMDO["DeepBoulderQuarry"] = "DeepBoulderQuarry";
    DungeonPMDO["DeepDarkCrater"] = "DeepDarkCrater";
    DungeonPMDO["DeepDuskForest1"] = "DeepDuskForest1";
    DungeonPMDO["DeepDuskForest2"] = "DeepDuskForest2";
    DungeonPMDO["DeepLimestoneCavern"] = "DeepLimestoneCavern";
    DungeonPMDO["DeepSealedRuin"] = "DeepSealedRuin";
    DungeonPMDO["DesertRegion"] = "DesertRegion";
    DungeonPMDO["DrenchedBluff"] = "DrenchedBluff";
    DungeonPMDO["DuskForest1"] = "DuskForest1";
    DungeonPMDO["DuskForest2"] = "DuskForest2";
    DungeonPMDO["ElectricMaze"] = "ElectricMaze";
    DungeonPMDO["FarAmpPlains"] = "FarAmpPlains";
    DungeonPMDO["FinalMaze2"] = "FinalMaze2";
    DungeonPMDO["FoggyForest"] = "FoggyForest";
    DungeonPMDO["ForestPath"] = "ForestPath";
    DungeonPMDO["FrostyForest"] = "FrostyForest";
    DungeonPMDO["FutureTemporalSpire"] = "FutureTemporalSpire";
    DungeonPMDO["FutureTemporalTower"] = "FutureTemporalTower";
    DungeonPMDO["GoldenChamber"] = "GoldenChamber";
    DungeonPMDO["GrassMaze"] = "GrassMaze";
    DungeonPMDO["GreatCanyon"] = "GreatCanyon";
    DungeonPMDO["HiddenHighland"] = "HiddenHighland";
    DungeonPMDO["HiddenLand"] = "HiddenLand";
    DungeonPMDO["HowlingForest1"] = "HowlingForest1";
    DungeonPMDO["HowlingForest2"] = "HowlingForest2";
    DungeonPMDO["IceAegisCave"] = "IceAegisCave";
    DungeonPMDO["IceMaze"] = "IceMaze";
    DungeonPMDO["IcicleForest"] = "IcicleForest";
    DungeonPMDO["JoyousTower"] = "JoyousTower";
    DungeonPMDO["LapisCave"] = "LapisCave";
    DungeonPMDO["LightningField"] = "LightningField";
    DungeonPMDO["LimestoneCavern"] = "LimestoneCavern";
    DungeonPMDO["LowerBrineCave"] = "LowerBrineCave";
    DungeonPMDO["LushPrairie"] = "LushPrairie";
    DungeonPMDO["MagmaCavern2"] = "MagmaCavern2";
    DungeonPMDO["MagmaCavern3"] = "MagmaCavern3";
    DungeonPMDO["MeteorCave"] = "MeteorCave";
    DungeonPMDO["MiracleSea"] = "MiracleSea";
    DungeonPMDO["MoonlitCourtyard"] = "MoonlitCourtyard";
    DungeonPMDO["MtBlaze"] = "MtBlaze";
    DungeonPMDO["MtBristle"] = "MtBristle";
    DungeonPMDO["MtFaraway2"] = "MtFaraway2";
    DungeonPMDO["MtFaraway4"] = "MtFaraway4";
    DungeonPMDO["MtFreeze"] = "MtFreeze";
    DungeonPMDO["MtHorn"] = "MtHorn";
    DungeonPMDO["MtSteel1"] = "MtSteel1";
    DungeonPMDO["MtSteel2"] = "MtSteel2";
    DungeonPMDO["MtThunder"] = "MtThunder";
    DungeonPMDO["MtThunderPeak"] = "MtThunderPeak";
    DungeonPMDO["MtTravail"] = "MtTravail";
    DungeonPMDO["MurkyCave"] = "MurkyCave";
    DungeonPMDO["MurkyForest"] = "MurkyForest";
    DungeonPMDO["MysteryJungle1"] = "MysteryJungle1";
    DungeonPMDO["MysteryJungle2"] = "MysteryJungle2";
    DungeonPMDO["MystifyingForest"] = "MystifyingForest";
    DungeonPMDO["NorthernDesert1"] = "NorthernDesert1";
    DungeonPMDO["NorthernDesert2"] = "NorthernDesert2";
    DungeonPMDO["NorthernRange1"] = "NorthernRange1";
    DungeonPMDO["NorthernRange2"] = "NorthernRange2";
    DungeonPMDO["NorthwindField"] = "NorthwindField";
    DungeonPMDO["PitfallValley1"] = "PitfallValley1";
    DungeonPMDO["PoisonMaze"] = "PoisonMaze";
    DungeonPMDO["PurityForest2"] = "PurityForest2";
    DungeonPMDO["PurityForest4"] = "PurityForest4";
    DungeonPMDO["PurityForest6"] = "PurityForest6";
    DungeonPMDO["PurityForest7"] = "PurityForest7";
    DungeonPMDO["QuicksandCave"] = "QuicksandCave";
    DungeonPMDO["QuicksandPit"] = "QuicksandPit";
    DungeonPMDO["QuicksandUnused"] = "QuicksandUnused";
    DungeonPMDO["RescueTeamMaze"] = "RescueTeamMaze";
    DungeonPMDO["RockAegisCave"] = "RockAegisCave";
    DungeonPMDO["RockMaze"] = "RockMaze";
    DungeonPMDO["RockPathRB"] = "RockPathRB";
    DungeonPMDO["RockPathTDS"] = "RockPathTDS";
    DungeonPMDO["SealedRuin"] = "SealedRuin";
    DungeonPMDO["SidePath"] = "SidePath";
    DungeonPMDO["SilentChasm"] = "SilentChasm";
    DungeonPMDO["SkyPeak4thPass"] = "SkyPeak4thPass";
    DungeonPMDO["SkyPeak7thPass"] = "SkyPeak7thPass";
    DungeonPMDO["SkyPeakSummitPass"] = "SkyPeakSummitPass";
    DungeonPMDO["SkyTower"] = "SkyTower";
    DungeonPMDO["SnowPath"] = "SnowPath";
    DungeonPMDO["SolarCave1"] = "SolarCave1";
    DungeonPMDO["SouthernCavern1"] = "SouthernCavern1";
    DungeonPMDO["SouthernCavern2"] = "SouthernCavern2";
    DungeonPMDO["SouthernJungle"] = "SouthernJungle";
    DungeonPMDO["SpacialCliffs"] = "SpacialCliffs";
    DungeonPMDO["SpacialRift1"] = "SpacialRift1";
    DungeonPMDO["SpacialRift2"] = "SpacialRift2";
    DungeonPMDO["SteamCave"] = "SteamCave";
    DungeonPMDO["SteelAegisCave"] = "SteelAegisCave";
    DungeonPMDO["StormySea1"] = "StormySea1";
    DungeonPMDO["StormySea2"] = "StormySea2";
    DungeonPMDO["SurroundedSea"] = "SurroundedSea";
    DungeonPMDO["TemporalSpire"] = "TemporalSpire";
    DungeonPMDO["TemporalTower"] = "TemporalTower";
    DungeonPMDO["TemporalUnused"] = "TemporalUnused";
    DungeonPMDO["TestDungeon"] = "TestDungeon";
    DungeonPMDO["TheNightmare"] = "TheNightmare";
    DungeonPMDO["ThunderwaveCave"] = "ThunderwaveCave";
    DungeonPMDO["TinyMeadow"] = "TinyMeadow";
    DungeonPMDO["TinyWoods"] = "TinyWoods";
    DungeonPMDO["TreeshroudForest1"] = "TreeshroudForest1";
    DungeonPMDO["TreeshroudForest2"] = "TreeshroudForest2";
    DungeonPMDO["UnusedBrineCave"] = "UnusedBrineCave";
    DungeonPMDO["UnusedSteamCave"] = "UnusedSteamCave";
    DungeonPMDO["UnusedWaterfallPond"] = "UnusedWaterfallPond";
    DungeonPMDO["UproarForest"] = "UproarForest";
    DungeonPMDO["VastIceMountain"] = "VastIceMountain";
    DungeonPMDO["VastIceMountainPeak"] = "VastIceMountainPeak";
    DungeonPMDO["WaterfallCave"] = "WaterfallCave";
    DungeonPMDO["WaterfallPond"] = "WaterfallPond";
    DungeonPMDO["WaterMaze"] = "WaterMaze";
    DungeonPMDO["WesternCave1"] = "WesternCave1";
    DungeonPMDO["WesternCave2"] = "WesternCave2";
    DungeonPMDO["WishCave1"] = "WishCave1";
    DungeonPMDO["WishCave2"] = "WishCave2";
    DungeonPMDO["WorldAbyss2"] = "WorldAbyss2";
    DungeonPMDO["WyvernHill"] = "WyvernHill";
    DungeonPMDO["ZeroIsleEast3"] = "ZeroIsleEast3";
    DungeonPMDO["ZeroIsleEast4"] = "ZeroIsleEast4";
    DungeonPMDO["ZeroIsleSouth1"] = "ZeroIsleSouth1";
    DungeonPMDO["ZeroIsleSouth2"] = "ZeroIsleSouth2";
})(DungeonPMDO || (exports.DungeonPMDO = DungeonPMDO = {}));
exports.DungeonDetails = {
    [DungeonPMDO.AmpPlains]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.AQUATIC],
        music: DungeonMusic.AMP_PLAINS,
        regionalSpeciality: Item_1.Item.FRUIT_JUICE
    },
    [DungeonPMDO.AppleWoods]: {
        synergies: [Synergy_1.Synergy.BUG, Synergy_1.Synergy.GOURMET, Synergy_1.Synergy.BABY],
        music: DungeonMusic.APPLE_WOODS,
        regionalSpeciality: Item_1.Item.SWEET_APPLE
    },
    [DungeonPMDO.BarrenValley]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.GHOST],
        music: DungeonMusic.BARREN_VALLEY,
        regionalSpeciality: Item_1.Item.ROCK_SALT
    },
    [DungeonPMDO.BeachCave]: {
        synergies: [Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FOSSIL],
        music: DungeonMusic.BEACH_CAVE,
        regionalSpeciality: Item_1.Item.LEEK
    },
    [DungeonPMDO.BrineCave]: {
        synergies: [Synergy_1.Synergy.POISON, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.GROUND],
        music: DungeonMusic.BRINE_CAVE,
        regionalSpeciality: Item_1.Item.BLACK_SLUDGE
    },
    [DungeonPMDO.BuriedRelic1]: {
        synergies: [Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.HUMAN],
        music: DungeonMusic.BURIED_RELIC,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL
    },
    [DungeonPMDO.BuriedRelic2]: {
        synergies: [Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.LIGHT],
        music: DungeonMusic.TIME_GEAR_REMIX,
        regionalSpeciality: Item_1.Item.SWEET_HERB
    },
    [DungeonPMDO.BuriedRelic3]: {
        synergies: [Synergy_1.Synergy.GROUND, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.HUMAN],
        music: DungeonMusic.TIME_GEAR,
        regionalSpeciality: Item_1.Item.RIBBON_SWEET
    },
    [DungeonPMDO.ConcealedRuins]: {
        synergies: [Synergy_1.Synergy.POISON, Synergy_1.Synergy.WILD, Synergy_1.Synergy.GHOST],
        music: DungeonMusic.CONCEALED_RUINS,
        regionalSpeciality: Item_1.Item.BINDING_MOCHI
    },
    [DungeonPMDO.CraggyCoast]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.MONSTER],
        music: DungeonMusic.CRAGGY_COAST,
        regionalSpeciality: Item_1.Item.TEA
    },
    [DungeonPMDO.CrystalCave1]: {
        synergies: [Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.FAIRY],
        music: DungeonMusic.CRYSTAL_CAVE,
        regionalSpeciality: Item_1.Item.WHIPPED_DREAM
    },
    [DungeonPMDO.CrystalCave2]: {
        synergies: [Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.SOUND, Synergy_1.Synergy.LIGHT],
        music: DungeonMusic.STAFF_ROLL,
        regionalSpeciality: Item_1.Item.STAR_SWEET
    },
    [DungeonPMDO.CrystalCrossing]: {
        synergies: [Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.POISON],
        music: DungeonMusic.CRYSTAL_CROSSING,
        regionalSpeciality: Item_1.Item.STRAWBERRY_SWEET
    },
    [DungeonPMDO.DarkCrater]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GROUND],
        music: DungeonMusic.DARK_CRATER,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [DungeonPMDO.DarkHill1]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.DARK, Synergy_1.Synergy.FLYING],
        music: DungeonMusic.DARK_HILL,
        regionalSpeciality: Item_1.Item.TEA
    },
    [DungeonPMDO.DarkHill2]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.DARK, Synergy_1.Synergy.AMORPHOUS],
        music: DungeonMusic.I_SAW_SOMETHING_AGAIN,
        regionalSpeciality: Item_1.Item.CLOVER_SWEET
    },
    [DungeonPMDO.DarkIceMountain]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.ICE, Synergy_1.Synergy.NORMAL],
        music: DungeonMusic.DARK_ICE_MOUNTAIN,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [DungeonPMDO.DarkIceMountainPeak]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.ICE, Synergy_1.Synergy.FLYING],
        music: DungeonMusic.AT_THE_SNOWY_MOUNTAIN,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [DungeonPMDO.DarknightRelic]: {
        synergies: [Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.HUMAN],
        music: DungeonMusic.DARK_WASTELAND,
        regionalSpeciality: Item_1.Item.RIBBON_SWEET
    },
    [DungeonPMDO.DarkWasteland]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.POISON, Synergy_1.Synergy.MONSTER],
        music: DungeonMusic.CHASM_CAVE,
        regionalSpeciality: Item_1.Item.BINDING_MOCHI
    },
    [DungeonPMDO.DeepBoulderQuarry]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FOSSIL],
        music: DungeonMusic.BOULDER_QUARRY,
        regionalSpeciality: Item_1.Item.ROCK_SALT
    },
    [DungeonPMDO.DeepDarkCrater]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.MONSTER],
        music: DungeonMusic.DEEP_DARK_CRATER,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [DungeonPMDO.DeepDuskForest1]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.GOURMET],
        music: DungeonMusic.DEEP_DUSK_FOREST,
        regionalSpeciality: Item_1.Item.TEA
    },
    [DungeonPMDO.DeepDuskForest2]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.LIGHT],
        music: DungeonMusic.GROWING_ANXIETY,
        regionalSpeciality: Item_1.Item.CLOVER_SWEET
    },
    [DungeonPMDO.DeepLimestoneCavern]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.BUG, Synergy_1.Synergy.ROCK],
        music: DungeonMusic.PROTECTED_WORLD_PEACE,
        regionalSpeciality: Item_1.Item.ROCK_SALT
    },
    [DungeonPMDO.DeepSealedRuin]: {
        synergies: [Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.GHOST, Synergy_1.Synergy.MONSTER],
        music: DungeonMusic.SEALED_RUIN_PIT,
        regionalSpeciality: Item_1.Item.LEFTOVERS
    },
    [DungeonPMDO.DesertRegion]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.LIGHT],
        music: DungeonMusic.DUN_HONOO_2,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [DungeonPMDO.DrenchedBluff]: {
        synergies: [Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.BABY],
        music: DungeonMusic.DRENCHED_BLUFF,
        regionalSpeciality: Item_1.Item.LOVE_SWEET
    },
    [DungeonPMDO.DuskForest1]: {
        synergies: [Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK],
        music: DungeonMusic.DUSK_FOREST,
        regionalSpeciality: Item_1.Item.LARGE_LEEK
    },
    [DungeonPMDO.DuskForest2]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FLORA],
        music: DungeonMusic.SINISTER_WOODS,
        regionalSpeciality: Item_1.Item.LARGE_LEEK
    },
    [DungeonPMDO.ElectricMaze]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.GOURMET],
        music: DungeonMusic.STOP_THIEF,
        regionalSpeciality: Item_1.Item.FRUIT_JUICE
    },
    [DungeonPMDO.FarAmpPlains]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.FOSSIL],
        music: DungeonMusic.FAR_AMP_PLAINS,
        regionalSpeciality: Item_1.Item.FRUIT_JUICE
    },
    [DungeonPMDO.FinalMaze2]: {
        synergies: [Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.BUG],
        music: DungeonMusic.FRIEND_AREA_CAVES,
        regionalSpeciality: Item_1.Item.HONEY
    },
    [DungeonPMDO.FoggyForest]: {
        synergies: [Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLORA],
        music: DungeonMusic.FOGGY_FOREST,
        regionalSpeciality: Item_1.Item.WHIPPED_DREAM
    },
    [DungeonPMDO.ForestPath]: {
        synergies: [Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BUG, Synergy_1.Synergy.BABY],
        music: DungeonMusic.SKY_PEAK_FOREST,
        regionalSpeciality: Item_1.Item.HONEY
    },
    [DungeonPMDO.FrostyForest]: {
        synergies: [Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIGHTING],
        music: DungeonMusic.FROSTY_FOREST,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [DungeonPMDO.FutureTemporalSpire]: {
        synergies: [Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.PSYCHIC],
        music: DungeonMusic.BATTLE_WITH_RAYQUAZA,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL
    },
    [DungeonPMDO.FutureTemporalTower]: {
        synergies: [Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.PSYCHIC],
        music: DungeonMusic.TEMPORAL_TOWER,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL
    },
    [DungeonPMDO.GoldenChamber]: {
        synergies: [Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.STEEL, Synergy_1.Synergy.AMORPHOUS],
        music: DungeonMusic.OUTLAW,
        regionalSpeciality: Item_1.Item.POFFIN
    },
    [DungeonPMDO.GrassMaze]: {
        synergies: [Synergy_1.Synergy.GRASS, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.NORMAL],
        music: DungeonMusic.MAKUHITA_DOJO,
        regionalSpeciality: Item_1.Item.MOOMOO_MILK
    },
    [DungeonPMDO.GreatCanyon]: {
        synergies: [Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIRE],
        music: DungeonMusic.GREAT_CANYON,
        regionalSpeciality: Item_1.Item.RAGE_CANDY_BAR
    },
    [DungeonPMDO.HiddenHighland]: {
        synergies: [Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BUG],
        music: DungeonMusic.HIDDEN_HIGHLAND,
        regionalSpeciality: Item_1.Item.HONEY
    },
    [DungeonPMDO.HiddenLand]: {
        synergies: [Synergy_1.Synergy.FLORA, Synergy_1.Synergy.WILD, Synergy_1.Synergy.WATER],
        music: DungeonMusic.HIDDEN_LAND,
        regionalSpeciality: Item_1.Item.RAGE_CANDY_BAR
    },
    [DungeonPMDO.HowlingForest1]: {
        synergies: [Synergy_1.Synergy.SOUND, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.BUG],
        music: DungeonMusic.RANDOM_DUNGEON_2,
        regionalSpeciality: Item_1.Item.BERRY_JUICE
    },
    [DungeonPMDO.HowlingForest2]: {
        synergies: [Synergy_1.Synergy.SOUND, Synergy_1.Synergy.POISON, Synergy_1.Synergy.GOURMET],
        music: DungeonMusic.FRIEND_AREA_FOREST,
        regionalSpeciality: Item_1.Item.BLACK_SLUDGE
    },
    [DungeonPMDO.IceAegisCave]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.DARK],
        music: DungeonMusic.ILLUSION_STONE_CHAMBER,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [DungeonPMDO.IceMaze]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FIGHTING],
        music: DungeonMusic.TOP_MENU_THEME,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [DungeonPMDO.IcicleForest]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.FIGHTING],
        music: DungeonMusic.ICICLE_FOREST,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [DungeonPMDO.JoyousTower]: {
        synergies: [Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.BABY],
        music: DungeonMusic.A_NEW_WORLD,
        regionalSpeciality: Item_1.Item.WHIPPED_DREAM
    },
    [DungeonPMDO.LapisCave]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.FOSSIL],
        music: DungeonMusic.LAPIS_CAVE,
        regionalSpeciality: Item_1.Item.TEA
    },
    [DungeonPMDO.LightningField]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.LIGHT],
        music: DungeonMusic.OH_NO,
        regionalSpeciality: Item_1.Item.FRUIT_JUICE
    },
    [DungeonPMDO.LimestoneCavern]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.BUG, Synergy_1.Synergy.AQUATIC],
        music: DungeonMusic.LIMESTONE_CAVERN,
        regionalSpeciality: Item_1.Item.ROCK_SALT
    },
    [DungeonPMDO.LowerBrineCave]: {
        synergies: [Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.WILD],
        music: DungeonMusic.LOWER_BRINE_CAVE,
        regionalSpeciality: Item_1.Item.POFFIN
    },
    [DungeonPMDO.LushPrairie]: {
        synergies: [Synergy_1.Synergy.GOURMET, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.FLORA],
        music: DungeonMusic.WELCOME_TO_THE_WORLD_OF_POKEMON,
        regionalSpeciality: Item_1.Item.FLOWER_SWEET
    },
    [DungeonPMDO.MagmaCavern2]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.MONSTER],
        music: DungeonMusic.MAGMA_CAVERN,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [DungeonPMDO.MagmaCavern3]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.MONSTER],
        music: DungeonMusic.MAGMA_CAVERN_PIT,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [DungeonPMDO.MeteorCave]: {
        synergies: [Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.HUMAN],
        music: DungeonMusic.RANDOM_DUNGEON_1,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL
    },
    [DungeonPMDO.MiracleSea]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.FAIRY],
        music: DungeonMusic.MIRACLE_SEA,
        regionalSpeciality: Item_1.Item.SMOKED_FILET
    },
    [DungeonPMDO.MoonlitCourtyard]: {
        synergies: [Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.DARK],
        music: DungeonMusic.GOODNIGHT,
        regionalSpeciality: Item_1.Item.LOVE_SWEET
    },
    [DungeonPMDO.MtBlaze]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.WILD],
        music: DungeonMusic.MT_BLAZE,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [DungeonPMDO.MtBristle]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.MONSTER],
        music: DungeonMusic.MT_BRISTLE,
        regionalSpeciality: Item_1.Item.FRUIT_JUICE
    },
    [DungeonPMDO.MtFaraway2]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.DRAGON],
        music: DungeonMusic.FROSTY_GROTTO,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [DungeonPMDO.MtFaraway4]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.SOUND],
        music: DungeonMusic.ESCAPE_THROUGH_THE_SNOW,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [DungeonPMDO.MtFreeze]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.NORMAL],
        music: DungeonMusic.MT_FREEZE,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [DungeonPMDO.MtHorn]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.SOUND],
        music: DungeonMusic.MT_HORN,
        regionalSpeciality: Item_1.Item.RAGE_CANDY_BAR
    },
    [DungeonPMDO.MtSteel1]: {
        synergies: [Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.FIGHTING],
        music: DungeonMusic.MT_STEEL,
        regionalSpeciality: Item_1.Item.RAGE_CANDY_BAR
    },
    [DungeonPMDO.MtSteel2]: {
        synergies: [Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.AMORPHOUS],
        music: DungeonMusic.BOSS_BATTLE,
        regionalSpeciality: Item_1.Item.RAGE_CANDY_BAR
    },
    [DungeonPMDO.MtThunder]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.ROCK, Synergy_1.Synergy.STEEL],
        music: DungeonMusic.MT_THUNDER,
        regionalSpeciality: Item_1.Item.FRUIT_JUICE
    },
    [DungeonPMDO.MtThunderPeak]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.WILD],
        music: DungeonMusic.MT_THUNDER_PEAK,
        regionalSpeciality: Item_1.Item.FRUIT_JUICE
    },
    [DungeonPMDO.MtTravail]: {
        synergies: [Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.FOSSIL],
        music: DungeonMusic.MT_TRAVAIL,
        regionalSpeciality: Item_1.Item.RAGE_CANDY_BAR
    },
    [DungeonPMDO.MurkyCave]: {
        synergies: [Synergy_1.Synergy.POISON, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.HUMAN],
        music: DungeonMusic.MONSTER_HOUSE,
        regionalSpeciality: Item_1.Item.BLACK_SLUDGE
    },
    [DungeonPMDO.MurkyForest]: {
        synergies: [Synergy_1.Synergy.POISON, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.DARK],
        music: DungeonMusic.MURKY_FOREST,
        regionalSpeciality: Item_1.Item.BERRY_JUICE
    },
    [DungeonPMDO.MysteryJungle1]: {
        synergies: [Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.POISON],
        music: DungeonMusic.FRIEND_AREA_STEPPE,
        regionalSpeciality: Item_1.Item.TART_APPLE
    },
    [DungeonPMDO.MysteryJungle2]: {
        synergies: [Synergy_1.Synergy.WILD, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.POISON],
        music: DungeonMusic.BLIZZARD_ISLAND,
        regionalSpeciality: Item_1.Item.SIRUPY_APPLE
    },
    [DungeonPMDO.MystifyingForest]: {
        synergies: [Synergy_1.Synergy.BABY, Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.FLORA],
        music: DungeonMusic.MYSTIFYING_FOREST,
        regionalSpeciality: Item_1.Item.SWEET_HERB
    },
    [DungeonPMDO.NorthernDesert1]: {
        synergies: [Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.LIGHT],
        music: DungeonMusic.NORTHERN_DESERT,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [DungeonPMDO.NorthernDesert2]: {
        synergies: [Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.WILD],
        music: DungeonMusic.NORTHERN_DESERT,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [DungeonPMDO.NorthernRange1]: {
        synergies: [Synergy_1.Synergy.POISON, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.STEEL],
        music: DungeonMusic.FORTUNE_RAVINE,
        regionalSpeciality: Item_1.Item.POFFIN
    },
    [DungeonPMDO.NorthernRange2]: {
        synergies: [Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.STEEL],
        music: DungeonMusic.TEAM_SKULL,
        regionalSpeciality: Item_1.Item.MOOMOO_MILK
    },
    [DungeonPMDO.NorthwindField]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.SOUND],
        music: DungeonMusic.THROUGH_THE_SEA_OF_TIME,
        regionalSpeciality: Item_1.Item.NUTRITIOUS_EGG
    },
    [DungeonPMDO.PitfallValley1]: {
        synergies: [Synergy_1.Synergy.FIELD, Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.BABY],
        music: DungeonMusic.PERSONALITY_TEST,
        regionalSpeciality: Item_1.Item.MOOMOO_MILK
    },
    [DungeonPMDO.PoisonMaze]: {
        synergies: [Synergy_1.Synergy.POISON, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.BUG],
        music: DungeonMusic.RANDOM_DUNGEON_3,
        regionalSpeciality: Item_1.Item.BLACK_SLUDGE
    },
    [DungeonPMDO.PurityForest2]: {
        synergies: [Synergy_1.Synergy.BABY, Synergy_1.Synergy.GOURMET, Synergy_1.Synergy.AMORPHOUS],
        music: DungeonMusic.RUN_AWAY,
        regionalSpeciality: Item_1.Item.SWEET_APPLE
    },
    [DungeonPMDO.PurityForest4]: {
        synergies: [Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.WILD, Synergy_1.Synergy.FAIRY],
        music: DungeonMusic.POKEMON_SQUARE,
        regionalSpeciality: Item_1.Item.SWEET_HERB
    },
    [DungeonPMDO.PurityForest6]: {
        synergies: [Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BABY],
        music: DungeonMusic.SHAYMIN_VILLAGE,
        regionalSpeciality: Item_1.Item.SWEET_APPLE
    },
    [DungeonPMDO.PurityForest7]: {
        synergies: [Synergy_1.Synergy.GRASS, Synergy_1.Synergy.BABY, Synergy_1.Synergy.SOUND],
        music: DungeonMusic.ON_THE_BEACH_AT_DUSK,
        regionalSpeciality: Item_1.Item.SWEET_APPLE
    },
    [DungeonPMDO.QuicksandCave]: {
        synergies: [Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.NORMAL],
        music: DungeonMusic.QUICKSAND_CAVE,
        regionalSpeciality: Item_1.Item.LEEK
    },
    [DungeonPMDO.QuicksandPit]: {
        synergies: [Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.MONSTER],
        music: DungeonMusic.QUICKSAND_PIT,
        regionalSpeciality: Item_1.Item.LEEK
    },
    [DungeonPMDO.QuicksandUnused]: {
        synergies: [Synergy_1.Synergy.GROUND, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.POISON],
        music: DungeonMusic.THERES_TROUBLE,
        regionalSpeciality: Item_1.Item.LARGE_LEEK
    },
    [DungeonPMDO.RescueTeamMaze]: {
        synergies: [Synergy_1.Synergy.FIGHTING, Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.ARTIFICIAL],
        music: DungeonMusic.RESCUE_TEAM_BASE,
        regionalSpeciality: Item_1.Item.NUTRITIOUS_EGG
    },
    [DungeonPMDO.RockAegisCave]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GHOST, Synergy_1.Synergy.AMORPHOUS],
        music: DungeonMusic.FRIEND_AREA_SWAMP,
        regionalSpeciality: Item_1.Item.ROCK_SALT
    },
    [DungeonPMDO.RockMaze]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.STEEL, Synergy_1.Synergy.FIGHTING],
        music: DungeonMusic.DEFY_THE_LEGENDS,
        regionalSpeciality: Item_1.Item.ROCK_SALT
    },
    [DungeonPMDO.RockPathRB]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.FOSSIL],
        music: DungeonMusic.RISING_FEAR,
        regionalSpeciality: Item_1.Item.RIBBON_SWEET
    },
    [DungeonPMDO.RockPathTDS]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.MONSTER],
        music: DungeonMusic.FRIEND_AREA_POND,
        regionalSpeciality: Item_1.Item.RIBBON_SWEET
    },
    [DungeonPMDO.SealedRuin]: {
        synergies: [Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.GHOST],
        music: DungeonMusic.THE_LEGEND_OF_NINETALES,
        regionalSpeciality: Item_1.Item.LEFTOVERS
    },
    [DungeonPMDO.SidePath]: {
        synergies: [Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.STEEL],
        music: DungeonMusic.CAVE_AND_SIDE_PATH,
        regionalSpeciality: Item_1.Item.MOOMOO_MILK
    },
    [DungeonPMDO.SilentChasm]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.WILD],
        music: DungeonMusic.SILENT_CHASM,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [DungeonPMDO.SkyPeak4thPass]: {
        synergies: [Synergy_1.Synergy.GOURMET, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.BABY],
        music: DungeonMusic.SKY_PEAK_COAST,
        regionalSpeciality: Item_1.Item.FLOWER_SWEET
    },
    [DungeonPMDO.SkyPeak7thPass]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FAIRY],
        music: DungeonMusic.SKY_PEAK_CAVE,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [DungeonPMDO.SkyPeakSummitPass]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.STEEL, Synergy_1.Synergy.ROCK],
        music: DungeonMusic.SKY_TOWER_SUMMIT,
        regionalSpeciality: Item_1.Item.STAR_SWEET
    },
    [DungeonPMDO.SkyTower]: {
        synergies: [Synergy_1.Synergy.FLYING, Synergy_1.Synergy.LIGHT, Synergy_1.Synergy.FAIRY],
        music: DungeonMusic.SKY_TOWER,
        regionalSpeciality: Item_1.Item.STAR_SWEET
    },
    [DungeonPMDO.SnowPath]: {
        synergies: [Synergy_1.Synergy.ICE, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.NORMAL],
        music: DungeonMusic.SKY_PEAK_SNOWFIELD,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [DungeonPMDO.SolarCave1]: {
        synergies: [Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.FIRE, Synergy_1.Synergy.SOUND],
        music: DungeonMusic.SKY_PEAK_PRAIRIE,
        regionalSpeciality: Item_1.Item.STRAWBERRY_SWEET
    },
    [DungeonPMDO.SouthernCavern1]: {
        synergies: [Synergy_1.Synergy.STEEL, Synergy_1.Synergy.POISON, Synergy_1.Synergy.ARTIFICIAL],
        music: DungeonMusic.SPRING_CAVE,
        regionalSpeciality: Item_1.Item.CLOVER_SWEET
    },
    [DungeonPMDO.SouthernCavern2]: {
        synergies: [Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.POISON],
        music: DungeonMusic.SPRING_CAVE_DEPTHS,
        regionalSpeciality: Item_1.Item.BERRY_SWEET
    },
    [DungeonPMDO.SouthernJungle]: {
        synergies: [Synergy_1.Synergy.WILD, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.GRASS],
        music: DungeonMusic.SOUTHERN_JUNGLE,
        regionalSpeciality: Item_1.Item.BERRY_JUICE
    },
    [DungeonPMDO.SpacialCliffs]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.ELECTRIC],
        music: DungeonMusic.SPACIAL_CLIFFS,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL
    },
    [DungeonPMDO.SpacialRift1]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.MONSTER],
        music: DungeonMusic.IN_THE_FUTURE,
        regionalSpeciality: Item_1.Item.STAR_SWEET
    },
    [DungeonPMDO.SpacialRift2]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.PSYCHIC],
        music: DungeonMusic.PLANETS_PARALYSIS,
        regionalSpeciality: Item_1.Item.STAR_SWEET
    },
    [DungeonPMDO.SteamCave]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.GOURMET, Synergy_1.Synergy.ELECTRIC],
        music: DungeonMusic.STEAM_CAVE,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [DungeonPMDO.SteelAegisCave]: {
        synergies: [Synergy_1.Synergy.STEEL, Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FIGHTING],
        music: DungeonMusic.AEGIS_CAVE,
        regionalSpeciality: Item_1.Item.POFFIN
    },
    [DungeonPMDO.StormySea1]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.ELECTRIC],
        music: DungeonMusic.STORMY_SEA,
        regionalSpeciality: Item_1.Item.SMOKED_FILET
    },
    [DungeonPMDO.StormySea2]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.SOUND],
        music: DungeonMusic.FRIEND_AREA_OCEANIC,
        regionalSpeciality: Item_1.Item.SMOKED_FILET
    },
    [DungeonPMDO.SurroundedSea]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ICE],
        music: DungeonMusic.SURROUNDED_SEA,
        regionalSpeciality: Item_1.Item.LEFTOVERS
    },
    [DungeonPMDO.TemporalSpire]: {
        synergies: [Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.AMORPHOUS],
        music: DungeonMusic.TEMPORAL_SPIRE,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL
    },
    [DungeonPMDO.TemporalTower]: {
        synergies: [Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.STEEL, Synergy_1.Synergy.ARTIFICIAL],
        music: DungeonMusic.GARDEVOIR_INSIDE_OF_A_DREAM,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL
    },
    [DungeonPMDO.TemporalUnused]: {
        synergies: [Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.FOSSIL, Synergy_1.Synergy.ARTIFICIAL],
        music: DungeonMusic.TEMPORAL_PINNACLE,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL
    },
    [DungeonPMDO.TestDungeon]: {
        synergies: [Synergy_1.Synergy.ARTIFICIAL, Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.PSYCHIC],
        music: DungeonMusic.FRIEND_AREA_LAB,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL
    },
    [DungeonPMDO.TheNightmare]: {
        synergies: [Synergy_1.Synergy.GHOST, Synergy_1.Synergy.DARK, Synergy_1.Synergy.PSYCHIC],
        music: DungeonMusic.THE_POWER_OF_DARKNESS,
        regionalSpeciality: Item_1.Item.BLACK_SLUDGE
    },
    [DungeonPMDO.ThunderwaveCave]: {
        synergies: [Synergy_1.Synergy.ELECTRIC, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.LIGHT],
        music: DungeonMusic.THUNDERWAVE_CAVE,
        regionalSpeciality: Item_1.Item.FRUIT_JUICE
    },
    [DungeonPMDO.TinyMeadow]: {
        synergies: [Synergy_1.Synergy.NORMAL, Synergy_1.Synergy.BABY, Synergy_1.Synergy.AMORPHOUS],
        music: DungeonMusic.FRIEND_AREA_GRASSLANDS,
        regionalSpeciality: Item_1.Item.MOOMOO_MILK
    },
    [DungeonPMDO.TinyWoods]: {
        synergies: [Synergy_1.Synergy.BUG, Synergy_1.Synergy.BABY, Synergy_1.Synergy.NORMAL],
        music: DungeonMusic.TINY_WOODS,
        regionalSpeciality: Item_1.Item.SWEET_APPLE
    },
    [DungeonPMDO.TreeshroudForest1]: {
        synergies: [Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.WATER, Synergy_1.Synergy.BUG],
        music: DungeonMusic.TREESHROUD_FOREST,
        regionalSpeciality: Item_1.Item.TART_APPLE
    },
    [DungeonPMDO.TreeshroudForest2]: {
        synergies: [Synergy_1.Synergy.GRASS, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.BABY],
        music: DungeonMusic.FRIEND_AREA_WILDS,
        regionalSpeciality: Item_1.Item.TART_APPLE
    },
    [DungeonPMDO.UnusedBrineCave]: {
        synergies: [Synergy_1.Synergy.GOURMET, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.DRAGON],
        music: DungeonMusic.IN_THE_NIGHTMARE,
        regionalSpeciality: Item_1.Item.STRAWBERRY_SWEET
    },
    [DungeonPMDO.UnusedSteamCave]: {
        synergies: [Synergy_1.Synergy.FIRE, Synergy_1.Synergy.WATER, Synergy_1.Synergy.ELECTRIC],
        music: DungeonMusic.UPPER_STEAM_CAVE,
        regionalSpeciality: Item_1.Item.CURRY
    },
    [DungeonPMDO.UnusedWaterfallPond]: {
        synergies: [Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.BUG, Synergy_1.Synergy.WILD],
        music: DungeonMusic.DEEP_STAR_CAVE,
        regionalSpeciality: Item_1.Item.CLOVER_SWEET
    },
    [DungeonPMDO.UproarForest]: {
        synergies: [Synergy_1.Synergy.WILD, Synergy_1.Synergy.FIELD, Synergy_1.Synergy.SOUND],
        music: DungeonMusic.TREASURE_TOWN,
        regionalSpeciality: Item_1.Item.RAGE_CANDY_BAR
    },
    [DungeonPMDO.VastIceMountain]: {
        synergies: [Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ICE, Synergy_1.Synergy.ROCK],
        music: DungeonMusic.VAST_ICE_MOUNTAIN,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [DungeonPMDO.VastIceMountainPeak]: {
        synergies: [Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.ICE, Synergy_1.Synergy.FLYING],
        music: DungeonMusic.VAST_ICE_MOUNTAIN_PEAK,
        regionalSpeciality: Item_1.Item.CASTELIACONE
    },
    [DungeonPMDO.WaterfallCave]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.SOUND],
        music: DungeonMusic.MAROWAK_DOJO,
        regionalSpeciality: Item_1.Item.TEA
    },
    [DungeonPMDO.WaterfallPond]: {
        synergies: [Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.SOUND],
        music: DungeonMusic.WATERFALL_CAVE,
        regionalSpeciality: Item_1.Item.TEA
    },
    [DungeonPMDO.WaterMaze]: {
        synergies: [Synergy_1.Synergy.WATER, Synergy_1.Synergy.AQUATIC, Synergy_1.Synergy.GRASS],
        music: DungeonMusic.STAR_CAVE,
        regionalSpeciality: Item_1.Item.TEA
    },
    [DungeonPMDO.WesternCave1]: {
        synergies: [Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.ARTIFICIAL],
        music: DungeonMusic.SKY_PEAK_FINAL_PASS,
        regionalSpeciality: Item_1.Item.RIBBON_SWEET
    },
    [DungeonPMDO.WesternCave2]: {
        synergies: [Synergy_1.Synergy.HUMAN, Synergy_1.Synergy.FLORA, Synergy_1.Synergy.ROCK],
        music: DungeonMusic.JOB_CLEAR,
        regionalSpeciality: Item_1.Item.FLOWER_SWEET
    },
    [DungeonPMDO.WishCave1]: {
        synergies: [Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.GOURMET, Synergy_1.Synergy.DRAGON],
        music: DungeonMusic.LIVING_SPIRIT,
        regionalSpeciality: Item_1.Item.LOVE_SWEET
    },
    [DungeonPMDO.WishCave2]: {
        synergies: [Synergy_1.Synergy.FAIRY, Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.BUG],
        music: DungeonMusic.TEAM_CHARM_THEME,
        regionalSpeciality: Item_1.Item.LOVE_SWEET
    },
    [DungeonPMDO.WorldAbyss2]: {
        synergies: [Synergy_1.Synergy.DARK, Synergy_1.Synergy.GHOST, Synergy_1.Synergy.ELECTRIC],
        music: DungeonMusic.WORLD_CALAMITY,
        regionalSpeciality: Item_1.Item.LEFTOVERS
    },
    [DungeonPMDO.WyvernHill]: {
        synergies: [Synergy_1.Synergy.DRAGON, Synergy_1.Synergy.FLYING, Synergy_1.Synergy.GOURMET],
        music: DungeonMusic.KECLEONS_SHOP,
        regionalSpeciality: Item_1.Item.POFFIN
    },
    [DungeonPMDO.ZeroIsleEast3]: {
        synergies: [Synergy_1.Synergy.AMORPHOUS, Synergy_1.Synergy.PSYCHIC, Synergy_1.Synergy.STEEL],
        music: DungeonMusic.VERSUS_BOSS,
        regionalSpeciality: Item_1.Item.SPINDA_COCKTAIL
    },
    [DungeonPMDO.ZeroIsleEast4]: {
        synergies: [Synergy_1.Synergy.POISON, Synergy_1.Synergy.MONSTER, Synergy_1.Synergy.ROCK],
        music: DungeonMusic.VERSUS_LEGENDARY,
        regionalSpeciality: Item_1.Item.BLACK_SLUDGE
    },
    [DungeonPMDO.ZeroIsleSouth1]: {
        synergies: [Synergy_1.Synergy.GROUND, Synergy_1.Synergy.BUG, Synergy_1.Synergy.GOURMET],
        music: DungeonMusic.WIGGLYTUFFS_GUILD_REMIX,
        regionalSpeciality: Item_1.Item.LARGE_LEEK
    },
    [DungeonPMDO.ZeroIsleSouth2]: {
        synergies: [Synergy_1.Synergy.ROCK, Synergy_1.Synergy.GROUND, Synergy_1.Synergy.FIGHTING],
        music: DungeonMusic.WIGGLYTUFFS_GUILD,
        regionalSpeciality: Item_1.Item.ROCK_SALT
    },
    town: {
        synergies: [],
        music: DungeonMusic.TREASURE_TOWN_STAGE_0,
        regionalSpeciality: Item_1.Item.NUTRITIOUS_EGG
    }
};
//# sourceMappingURL=Dungeon.js.map