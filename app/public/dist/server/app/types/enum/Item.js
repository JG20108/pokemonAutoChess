"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnholdableItems = exports.Mulches = exports.Sweets = exports.SynergyFlavors = exports.Flavors = exports.HerbaMysticas = exports.ItemsSoldAtTown = exports.DishesGoingToInventory = exports.Mushrooms = exports.Dishes = exports.AbilityPerTM = exports.TMs = exports.TMsGold = exports.TMsSilver = exports.TMsBronze = exports.OgerponMasks = exports.Wands = exports.CraftableNoStonesOrScarves = exports.SynergyGivenByGem = exports.SynergyGivenByItem = exports.SynergyItems = exports.SynergyItemsNoSpecial = exports.ToolsBuried = exports.SynergyGemsBuried = exports.SynergyGems = exports.SynergyStones = exports.CraftableItemsNoScarves = exports.CraftableItems = exports.WeatherByWeatherRocks = exports.WeatherRocksByWeather = exports.WeatherRocks = exports.ShinyItems = exports.ArtificialItems = exports.Tools = exports.Berries = exports.SpecialBerries = exports.NonSpecialBerries = exports.Scarves = exports.ItemRecipe = exports.ItemComponents = exports.ItemComponentsNoScarf = exports.ItemComponentsNoFossilOrScarf = exports.FishingRods = exports.SpecialItems = exports.TownItems = exports.DojoTickets = exports.MissionOrders = exports.MemoryDiscsBySynergy = exports.MemoryDiscs = exports.Item = void 0;
exports.RemovableItems = exports.ConsumableItems = void 0;
const map_1 = require("../../utils/map");
const Ability_1 = require("./Ability");
const Synergy_1 = require("./Synergy");
const Weather_1 = require("./Weather");
var Item;
(function (Item) {
    Item["FOSSIL_STONE"] = "FOSSIL_STONE";
    Item["TWISTED_SPOON"] = "TWISTED_SPOON";
    Item["MYSTIC_WATER"] = "MYSTIC_WATER";
    Item["MAGNET"] = "MAGNET";
    Item["BLACK_GLASSES"] = "BLACK_GLASSES";
    Item["MIRACLE_SEED"] = "MIRACLE_SEED";
    Item["NEVER_MELT_ICE"] = "NEVER_MELT_ICE";
    Item["CHARCOAL"] = "CHARCOAL";
    Item["HEART_SCALE"] = "HEART_SCALE";
    Item["OLD_AMBER"] = "OLD_AMBER";
    Item["DAWN_STONE"] = "DAWN_STONE";
    Item["WATER_STONE"] = "WATER_STONE";
    Item["THUNDER_STONE"] = "THUNDER_STONE";
    Item["FIRE_STONE"] = "FIRE_STONE";
    Item["MOON_STONE"] = "MOON_STONE";
    Item["DUSK_STONE"] = "DUSK_STONE";
    Item["LEAF_STONE"] = "LEAF_STONE";
    Item["ICE_STONE"] = "ICE_STONE";
    Item["CHOICE_SPECS"] = "CHOICE_SPECS";
    Item["SOUL_DEW"] = "SOUL_DEW";
    Item["UPGRADE"] = "UPGRADE";
    Item["REAPER_CLOTH"] = "REAPER_CLOTH";
    Item["POKEMONOMICON"] = "POKEMONOMICON";
    Item["ABILITY_SHIELD"] = "ABILITY_SHIELD";
    Item["POWER_LENS"] = "POWER_LENS";
    Item["SHELL_BELL"] = "SHELL_BELL";
    Item["HEAVY_DUTY_BOOTS"] = "HEAVY_DUTY_BOOTS";
    Item["AQUA_EGG"] = "AQUA_EGG";
    Item["BLUE_ORB"] = "BLUE_ORB";
    Item["SCOPE_LENS"] = "SCOPE_LENS";
    Item["STAR_DUST"] = "STAR_DUST";
    Item["GREEN_ORB"] = "GREEN_ORB";
    Item["DEEP_SEA_TOOTH"] = "DEEP_SEA_TOOTH";
    Item["SMOKE_BALL"] = "SMOKE_BALL";
    Item["XRAY_VISION"] = "XRAY_VISION";
    Item["RAZOR_FANG"] = "RAZOR_FANG";
    Item["PROTECTIVE_PADS"] = "PROTECTIVE_PADS";
    Item["LOADED_DICE"] = "LOADED_DICE";
    Item["PUNCHING_GLOVE"] = "PUNCHING_GLOVE";
    Item["MUSCLE_BAND"] = "MUSCLE_BAND";
    Item["WONDER_BOX"] = "WONDER_BOX";
    Item["STICKY_BARB"] = "STICKY_BARB";
    Item["WIDE_LENS"] = "WIDE_LENS";
    Item["RAZOR_CLAW"] = "RAZOR_CLAW";
    Item["SAFETY_GOGGLES"] = "SAFETY_GOGGLES";
    Item["KINGS_ROCK"] = "KINGS_ROCK";
    Item["SHINY_CHARM"] = "SHINY_CHARM";
    Item["GRACIDEA_FLOWER"] = "GRACIDEA_FLOWER";
    Item["FLAME_ORB"] = "FLAME_ORB";
    Item["ASSAULT_VEST"] = "ASSAULT_VEST";
    Item["AMULET_COIN"] = "AMULET_COIN";
    Item["POKE_DOLL"] = "POKE_DOLL";
    Item["RED_ORB"] = "RED_ORB";
    Item["MAX_REVIVE"] = "MAX_REVIVE";
    Item["ROCKY_HELMET"] = "ROCKY_HELMET";
    Item["AGUAV_BERRY"] = "AGUAV_BERRY";
    Item["APICOT_BERRY"] = "APICOT_BERRY";
    Item["ASPEAR_BERRY"] = "ASPEAR_BERRY";
    Item["BABIRI_BERRY"] = "BABIRI_BERRY";
    Item["CHERI_BERRY"] = "CHERI_BERRY";
    Item["CHESTO_BERRY"] = "CHESTO_BERRY";
    Item["GANLON_BERRY"] = "GANLON_BERRY";
    Item["JABOCA_BERRY"] = "JABOCA_BERRY";
    Item["LANSAT_BERRY"] = "LANSAT_BERRY";
    Item["LEPPA_BERRY"] = "LEPPA_BERRY";
    Item["LIECHI_BERRY"] = "LIECHI_BERRY";
    Item["LUM_BERRY"] = "LUM_BERRY";
    Item["ORAN_BERRY"] = "ORAN_BERRY";
    Item["PECHA_BERRY"] = "PECHA_BERRY";
    Item["PERSIM_BERRY"] = "PERSIM_BERRY";
    Item["PETAYA_BERRY"] = "PETAYA_BERRY";
    Item["RAWST_BERRY"] = "RAWST_BERRY";
    Item["ROWAP_BERRY"] = "ROWAP_BERRY";
    Item["SALAC_BERRY"] = "SALAC_BERRY";
    Item["SITRUS_BERRY"] = "SITRUS_BERRY";
    Item["GOLDEN_RAZZ_BERRY"] = "GOLDEN_RAZZ_BERRY";
    Item["GOLDEN_NANAB_BERRY"] = "GOLDEN_NANAB_BERRY";
    Item["GOLDEN_PINAP_BERRY"] = "GOLDEN_PINAP_BERRY";
    Item["COMFEY"] = "COMFEY";
    Item["ELECTIRIZER"] = "ELECTIRIZER";
    Item["MAGMARIZER"] = "MAGMARIZER";
    Item["MACHO_BRACE"] = "MACHO_BRACE";
    Item["LIGHT_BALL"] = "LIGHT_BALL";
    Item["DRAGON_SCALE"] = "DRAGON_SCALE";
    Item["METRONOME"] = "METRONOME";
    Item["EXPLORER_KIT"] = "EXPLORER_KIT";
    Item["METAL_COAT"] = "METAL_COAT";
    Item["AIR_BALLOON"] = "AIR_BALLOON";
    Item["PROTECTOR"] = "PROTECTOR";
    Item["INCENSE"] = "INCENSE";
    Item["EXP_SHARE"] = "EXP_SHARE";
    Item["TERRAIN_EXTENDER"] = "TERRAIN_EXTENDER";
    Item["POKERUS_VIAL"] = "POKERUS_VIAL";
    Item["SPELL_TAG"] = "SPELL_TAG";
    Item["SHED_SHELL"] = "SHED_SHELL";
    Item["BERSERK_GENE"] = "BERSERK_GENE";
    Item["SURFBOARD"] = "SURFBOARD";
    Item["COOKING_POT"] = "COOKING_POT";
    Item["RUNNING_SHOES"] = "RUNNING_SHOES";
    Item["MAX_ELIXIR"] = "MAX_ELIXIR";
    Item["METEORITE"] = "METEORITE";
    Item["ROTOM_CATALOG"] = "ROTOM_CATALOG";
    Item["TRASH"] = "TRASH";
    Item["DYNAMAX_BAND"] = "DYNAMAX_BAND";
    Item["SHINY_STONE"] = "SHINY_STONE";
    Item["OLD_ROD"] = "OLD_ROD";
    Item["GOOD_ROD"] = "GOOD_ROD";
    Item["SUPER_ROD"] = "SUPER_ROD";
    Item["RARE_CANDY"] = "RARE_CANDY";
    Item["EVIOLITE"] = "EVIOLITE";
    Item["RED_SCALE"] = "RED_SCALE";
    Item["WHITE_FLUTE"] = "WHITE_FLUTE";
    Item["GOLD_BOTTLE_CAP"] = "GOLD_BOTTLE_CAP";
    Item["ABSORB_BULB"] = "ABSORB_BULB";
    Item["SACRED_ASH"] = "SACRED_ASH";
    Item["COMET_SHARD"] = "COMET_SHARD";
    Item["REPEAT_BALL"] = "REPEAT_BALL";
    Item["GOLD_BOW"] = "GOLD_BOW";
    Item["DAMP_ROCK"] = "DAMP_ROCK";
    Item["ICY_ROCK"] = "ICY_ROCK";
    Item["HEAT_ROCK"] = "HEAT_ROCK";
    Item["SMOOTH_ROCK"] = "SMOOTH_ROCK";
    Item["BLACK_AUGURITE"] = "BLACK_AUGURITE";
    Item["FLOAT_STONE"] = "FLOAT_STONE";
    Item["MIST_STONE"] = "MIST_STONE";
    Item["ELECTRIC_QUARTZ"] = "ELECTRIC_QUARTZ";
    Item["BLOOD_STONE"] = "BLOOD_STONE";
    Item["SMELLY_CLAY"] = "SMELLY_CLAY";
    Item["ODD_KEYSTONE"] = "ODD_KEYSTONE";
    Item["SUN_STONE"] = "SUN_STONE";
    Item["NORMAL_GEM"] = "NORMAL_GEM";
    Item["GRASS_GEM"] = "GRASS_GEM";
    Item["FIRE_GEM"] = "FIRE_GEM";
    Item["WATER_GEM"] = "WATER_GEM";
    Item["ELECTRIC_GEM"] = "ELECTRIC_GEM";
    Item["FIGHTING_GEM"] = "FIGHTING_GEM";
    Item["PSYCHIC_GEM"] = "PSYCHIC_GEM";
    Item["DARK_GEM"] = "DARK_GEM";
    Item["STEEL_GEM"] = "STEEL_GEM";
    Item["GROUND_GEM"] = "GROUND_GEM";
    Item["POISON_GEM"] = "POISON_GEM";
    Item["DRAGON_GEM"] = "DRAGON_GEM";
    Item["FIELD_GEM"] = "FIELD_GEM";
    Item["MONSTER_GEM"] = "MONSTER_GEM";
    Item["HUMAN_GEM"] = "HUMAN_GEM";
    Item["AQUATIC_GEM"] = "AQUATIC_GEM";
    Item["BUG_GEM"] = "BUG_GEM";
    Item["FLYING_GEM"] = "FLYING_GEM";
    Item["FLORA_GEM"] = "FLORA_GEM";
    Item["ROCK_GEM"] = "ROCK_GEM";
    Item["GHOST_GEM"] = "GHOST_GEM";
    Item["FAIRY_GEM"] = "FAIRY_GEM";
    Item["ICE_GEM"] = "ICE_GEM";
    Item["FOSSIL_GEM"] = "FOSSIL_GEM";
    Item["SOUND_GEM"] = "SOUND_GEM";
    Item["ARTIFICIAL_GEM"] = "ARTIFICIAL_GEM";
    Item["LIGHT_GEM"] = "LIGHT_GEM";
    Item["WILD_GEM"] = "WILD_GEM";
    Item["AMORPHOUS_GEM"] = "AMORPHOUS_GEM";
    Item["GOURMET_GEM"] = "GOURMET_GEM";
    Item["FIRE_SHARD"] = "FIRE_SHARD";
    Item["TEAL_MASK"] = "TEAL_MASK";
    Item["WELLSPRING_MASK"] = "WELLSPRING_MASK";
    Item["CORNERSTONE_MASK"] = "CORNERSTONE_MASK";
    Item["HEARTHFLAME_MASK"] = "HEARTHFLAME_MASK";
    Item["ZYGARDE_CUBE"] = "ZYGARDE_CUBE";
    Item["TM_RAGE"] = "TM_RAGE";
    Item["TM_RETURN"] = "TM_RETURN";
    Item["TM_COUNTER"] = "TM_COUNTER";
    Item["TM_DISABLE"] = "TM_DISABLE";
    Item["TM_BULK_UP"] = "TM_BULK_UP";
    Item["TM_CHARGE"] = "TM_CHARGE";
    Item["TM_REFLECT"] = "TM_REFLECT";
    Item["TM_PAYDAY"] = "TM_PAYDAY";
    Item["TM_FOCUS_PUNCH"] = "TM_FOCUS_PUNCH";
    Item["TM_HYPER_BEAM"] = "TM_HYPER_BEAM";
    Item["TM_PROTECT"] = "TM_PROTECT";
    Item["TM_SKILL_SWAP"] = "TM_SKILL_SWAP";
    Item["CHEF_HAT"] = "CHEF_HAT";
    Item["PICNIC_SET"] = "PICNIC_SET";
    Item["SANDWICH"] = "SANDWICH";
    Item["HEARTY_STEW"] = "HEARTY_STEW";
    Item["RAGE_CANDY_BAR"] = "RAGE_CANDY_BAR";
    Item["TEA"] = "TEA";
    Item["CURRY"] = "CURRY";
    Item["CASTELIACONE"] = "CASTELIACONE";
    Item["WHIPPED_DREAM"] = "WHIPPED_DREAM";
    Item["BERRY_JUICE"] = "BERRY_JUICE";
    Item["NANAB_BERRY"] = "NANAB_BERRY";
    Item["OLIVE_OIL"] = "OLIVE_OIL";
    Item["TART_APPLE"] = "TART_APPLE";
    Item["SWEET_APPLE"] = "SWEET_APPLE";
    Item["SIRUPY_APPLE"] = "SIRUPY_APPLE";
    Item["HERBA_MYSTICA"] = "HERBA_MYSTICA";
    Item["HERBA_MYSTICA_SWEET"] = "HERBA_MYSTICA_SWEET";
    Item["HERBA_MYSTICA_SPICY"] = "HERBA_MYSTICA_SPICY";
    Item["HERBA_MYSTICA_SOUR"] = "HERBA_MYSTICA_SOUR";
    Item["HERBA_MYSTICA_BITTER"] = "HERBA_MYSTICA_BITTER";
    Item["HERBA_MYSTICA_SALTY"] = "HERBA_MYSTICA_SALTY";
    Item["MOOMOO_MILK"] = "MOOMOO_MILK";
    Item["HONEY"] = "HONEY";
    Item["MUSHROOMS"] = "MUSHROOMS";
    Item["TINY_MUSHROOM"] = "TINY_MUSHROOM";
    Item["BIG_MUSHROOM"] = "BIG_MUSHROOM";
    Item["BALM_MUSHROOM"] = "BALM_MUSHROOM";
    Item["RICE"] = "RICE";
    Item["POFFIN"] = "POFFIN";
    Item["ROCK_SALT"] = "ROCK_SALT";
    Item["NUTRITIOUS_EGG"] = "NUTRITIOUS_EGG";
    Item["LEFTOVERS"] = "LEFTOVERS";
    Item["BLACK_SLUDGE"] = "BLACK_SLUDGE";
    Item["FRUIT_JUICE"] = "FRUIT_JUICE";
    Item["LEEK"] = "LEEK";
    Item["LARGE_LEEK"] = "LARGE_LEEK";
    Item["SMOKED_FILET"] = "SMOKED_FILET";
    Item["SPINDA_COCKTAIL"] = "SPINDA_COCKTAIL";
    Item["BINDING_MOCHI"] = "BINDING_MOCHI";
    Item["STRAWBERRY_SWEET"] = "STRAWBERRY_SWEET";
    Item["LOVE_SWEET"] = "LOVE_SWEET";
    Item["BERRY_SWEET"] = "BERRY_SWEET";
    Item["CLOVER_SWEET"] = "CLOVER_SWEET";
    Item["FLOWER_SWEET"] = "FLOWER_SWEET";
    Item["STAR_SWEET"] = "STAR_SWEET";
    Item["RIBBON_SWEET"] = "RIBBON_SWEET";
    Item["SWEETS"] = "SWEETS";
    Item["VANILLA_FLAVOR"] = "VANILLA_FLAVOR";
    Item["RUBY_FLAVOR"] = "RUBY_FLAVOR";
    Item["MATCHA_FLAVOR"] = "MATCHA_FLAVOR";
    Item["MINT_FLAVOR"] = "MINT_FLAVOR";
    Item["LEMON_FLAVOR"] = "LEMON_FLAVOR";
    Item["SALTED_FLAVOR"] = "SALTED_FLAVOR";
    Item["RUBY_SWIRL_FLAVOR"] = "RUBY_SWIRL_FLAVOR";
    Item["CARAMEL_SWIRL_FLAVOR"] = "CARAMEL_SWIRL_FLAVOR";
    Item["RAINBOW_SWIRL_FLAVOR"] = "RAINBOW_SWIRL_FLAVOR";
    Item["EGG_FOR_SELL"] = "EGG_FOR_SELL";
    Item["COIN"] = "COIN";
    Item["NUGGET"] = "NUGGET";
    Item["BIG_NUGGET"] = "BIG_NUGGET";
    Item["GIMMIGHOUL_COIN"] = "GIMMIGHOUL_COIN";
    Item["EXCHANGE_TICKET"] = "EXCHANGE_TICKET";
    Item["RECYCLE_TICKET"] = "RECYCLE_TICKET";
    Item["TREASURE_BOX"] = "TREASURE_BOX";
    Item["AUSPICIOUS_ARMOR"] = "AUSPICIOUS_ARMOR";
    Item["MALICIOUS_ARMOR"] = "MALICIOUS_ARMOR";
    Item["RUSTED_SWORD"] = "RUSTED_SWORD";
    Item["SCROLL_OF_WATERS"] = "SCROLL_OF_WATERS";
    Item["SCROLL_OF_DARKNESS"] = "SCROLL_OF_DARKNESS";
    Item["MYSTERY_BOX"] = "MYSTERY_BOX";
    Item["RICH_MULCH"] = "RICH_MULCH";
    Item["AMAZE_MULCH"] = "AMAZE_MULCH";
    Item["BRONZE_DOJO_TICKET"] = "BRONZE_DOJO_TICKET";
    Item["SILVER_DOJO_TICKET"] = "SILVER_DOJO_TICKET";
    Item["GOLD_DOJO_TICKET"] = "GOLD_DOJO_TICKET";
    Item["WANTED_NOTICE"] = "WANTED_NOTICE";
    Item["MEMORY_DISCS"] = "MEMORY_DISCS";
    Item["FIRE_MEMORY"] = "FIRE_MEMORY";
    Item["FOSSIL_MEMORY"] = "FOSSIL_MEMORY";
    Item["PSYCHIC_MEMORY"] = "PSYCHIC_MEMORY";
    Item["WATER_MEMORY"] = "WATER_MEMORY";
    Item["ELECTRIC_MEMORY"] = "ELECTRIC_MEMORY";
    Item["FAIRY_MEMORY"] = "FAIRY_MEMORY";
    Item["DARK_MEMORY"] = "DARK_MEMORY";
    Item["GRASS_MEMORY"] = "GRASS_MEMORY";
    Item["ICE_MEMORY"] = "ICE_MEMORY";
    Item["FIGHTING_MEMORY"] = "FIGHTING_MEMORY";
    Item["POISON_MEMORY"] = "POISON_MEMORY";
    Item["SOUND_MEMORY"] = "SOUND_MEMORY";
    Item["STEEL_MEMORY"] = "STEEL_MEMORY";
    Item["FLYING_MEMORY"] = "FLYING_MEMORY";
    Item["ROCK_MEMORY"] = "ROCK_MEMORY";
    Item["GROUND_MEMORY"] = "GROUND_MEMORY";
    Item["FIELD_MEMORY"] = "FIELD_MEMORY";
    Item["GHOST_MEMORY"] = "GHOST_MEMORY";
    Item["LIGHT_MEMORY"] = "LIGHT_MEMORY";
    Item["NORMAL_MEMORY"] = "NORMAL_MEMORY";
    Item["BUG_MEMORY"] = "BUG_MEMORY";
    Item["GOURMET_MEMORY"] = "GOURMET_MEMORY";
    Item["MONSTER_MEMORY"] = "MONSTER_MEMORY";
    Item["AQUATIC_MEMORY"] = "AQUATIC_MEMORY";
    Item["DRAGON_MEMORY"] = "DRAGON_MEMORY";
    Item["FLORA_MEMORY"] = "FLORA_MEMORY";
    Item["MISSION_ORDER_PINK"] = "MISSION_ORDER_PINK";
    Item["MISSION_ORDER_RED"] = "MISSION_ORDER_RED";
    Item["MISSION_ORDER_BLUE"] = "MISSION_ORDER_BLUE";
    Item["MISSION_ORDER_GREEN"] = "MISSION_ORDER_GREEN";
    Item["MISSION_ORDER_GOLD"] = "MISSION_ORDER_GOLD";
    Item["LEADERS_CREST"] = "LEADERS_CREST";
    Item["LAPRAS_PASSPORT"] = "LAPRAS_PASSPORT";
    Item["CELL_BATTERY"] = "CELL_BATTERY";
    Item["SILK_SCARF"] = "SILK_SCARF";
    Item["FRIEND_BOW"] = "FRIEND_BOW";
    Item["BLACK_BELT"] = "BLACK_BELT";
    Item["MACH_RIBBON"] = "MACH_RIBBON";
    Item["EXPLOSIVE_BAND"] = "EXPLOSIVE_BAND";
    Item["TWIST_BAND"] = "TWIST_BAND";
    Item["BIG_EATER_BELT"] = "BIG_EATER_BELT";
    Item["LUCKY_RIBBON"] = "LUCKY_RIBBON";
    Item["COVER_BAND"] = "COVER_BAND";
    Item["EFFICIENT_BANDANNA"] = "EFFICIENT_BANDANNA";
    Item["NULLIFY_BANDANNA"] = "NULLIFY_BANDANNA";
    Item["TATSUGIRI_CURLY"] = "TATSUGIRI_CURLY";
    Item["TATSUGIRI_DROOPY"] = "TATSUGIRI_DROOPY";
    Item["TATSUGIRI_STRETCHY"] = "TATSUGIRI_STRETCHY";
    Item["CONFUSE_WAND"] = "CONFUSE_WAND";
    Item["PETRIFY_WAND"] = "PETRIFY_WAND";
    Item["SLOW_WAND"] = "SLOW_WAND";
    Item["SLUMBER_WAND"] = "SLUMBER_WAND";
    Item["BLAST_WAND"] = "BLAST_WAND";
    Item["HP_SWAP_WAND"] = "HP_SWAP_WAND";
    Item["SPIRIT_WAND"] = "SPIRIT_WAND";
    Item["LONG_WAND"] = "LONG_WAND";
    Item["GUIDING_WAND"] = "GUIDING_WAND";
    Item["SURROUND_WAND"] = "SURROUND_WAND";
    Item["POUNCE_WAND"] = "POUNCE_WAND";
    Item["TWO_EDGED_WAND"] = "TWO_EDGED_WAND";
    Item["WARP_WAND"] = "WARP_WAND";
    Item["SWITCHER_WAND"] = "SWITCHER_WAND";
    Item["WHIRLWIND_WAND"] = "WHIRLWIND_WAND";
    Item["TUNNEL_WAND"] = "TUNNEL_WAND";
})(Item || (exports.Item = Item = {}));
exports.MemoryDiscs = [
    Item.FIRE_MEMORY,
    Item.FOSSIL_MEMORY,
    Item.PSYCHIC_MEMORY,
    Item.WATER_MEMORY,
    Item.ELECTRIC_MEMORY,
    Item.FAIRY_MEMORY,
    Item.DARK_MEMORY,
    Item.GRASS_MEMORY,
    Item.ICE_MEMORY,
    Item.FIGHTING_MEMORY,
    Item.POISON_MEMORY,
    Item.SOUND_MEMORY,
    Item.STEEL_MEMORY,
    Item.FLYING_MEMORY,
    Item.ROCK_MEMORY,
    Item.GROUND_MEMORY,
    Item.FIELD_MEMORY,
    Item.GHOST_MEMORY,
    Item.LIGHT_MEMORY,
    Item.NORMAL_MEMORY,
    Item.BUG_MEMORY,
    Item.GOURMET_MEMORY,
    Item.MONSTER_MEMORY,
    Item.AQUATIC_MEMORY,
    Item.DRAGON_MEMORY,
    Item.FLORA_MEMORY
];
exports.MemoryDiscsBySynergy = {
    [Synergy_1.Synergy.FIRE]: Item.FIRE_MEMORY,
    [Synergy_1.Synergy.FOSSIL]: Item.FOSSIL_MEMORY,
    [Synergy_1.Synergy.PSYCHIC]: Item.PSYCHIC_MEMORY,
    [Synergy_1.Synergy.WATER]: Item.WATER_MEMORY,
    [Synergy_1.Synergy.ELECTRIC]: Item.ELECTRIC_MEMORY,
    [Synergy_1.Synergy.FAIRY]: Item.FAIRY_MEMORY,
    [Synergy_1.Synergy.DARK]: Item.DARK_MEMORY,
    [Synergy_1.Synergy.GRASS]: Item.GRASS_MEMORY,
    [Synergy_1.Synergy.ICE]: Item.ICE_MEMORY,
    [Synergy_1.Synergy.FIGHTING]: Item.FIGHTING_MEMORY,
    [Synergy_1.Synergy.POISON]: Item.POISON_MEMORY,
    [Synergy_1.Synergy.SOUND]: Item.SOUND_MEMORY,
    [Synergy_1.Synergy.STEEL]: Item.STEEL_MEMORY,
    [Synergy_1.Synergy.FLYING]: Item.FLYING_MEMORY,
    [Synergy_1.Synergy.ROCK]: Item.ROCK_MEMORY,
    [Synergy_1.Synergy.GROUND]: Item.GROUND_MEMORY,
    [Synergy_1.Synergy.FIELD]: Item.FIELD_MEMORY,
    [Synergy_1.Synergy.GHOST]: Item.GHOST_MEMORY,
    [Synergy_1.Synergy.LIGHT]: Item.LIGHT_MEMORY,
    [Synergy_1.Synergy.NORMAL]: Item.NORMAL_MEMORY,
    [Synergy_1.Synergy.BUG]: Item.BUG_MEMORY,
    [Synergy_1.Synergy.GOURMET]: Item.GOURMET_MEMORY,
    [Synergy_1.Synergy.MONSTER]: Item.MONSTER_MEMORY,
    [Synergy_1.Synergy.AQUATIC]: Item.AQUATIC_MEMORY,
    [Synergy_1.Synergy.DRAGON]: Item.DRAGON_MEMORY,
    [Synergy_1.Synergy.FLORA]: Item.FLORA_MEMORY
};
exports.MissionOrders = [
    Item.MISSION_ORDER_PINK,
    Item.MISSION_ORDER_RED,
    Item.MISSION_ORDER_BLUE,
    Item.MISSION_ORDER_GREEN,
    Item.MISSION_ORDER_GOLD
];
exports.DojoTickets = [
    Item.BRONZE_DOJO_TICKET,
    Item.SILVER_DOJO_TICKET,
    Item.GOLD_DOJO_TICKET
];
exports.TownItems = [
    Item.TREASURE_BOX,
    Item.AMULET_COIN,
    Item.GIMMIGHOUL_COIN,
    Item.EXCHANGE_TICKET,
    Item.RECYCLE_TICKET,
    ...exports.DojoTickets,
    ...exports.MissionOrders,
    Item.EGG_FOR_SELL,
    Item.PICNIC_SET,
    Item.WANTED_NOTICE,
    Item.LEADERS_CREST,
    Item.LAPRAS_PASSPORT
];
exports.SpecialItems = [
    ...exports.TownItems,
    Item.COIN,
    Item.NUGGET,
    Item.BIG_NUGGET,
    Item.TRASH,
    Item.FIRE_SHARD,
    Item.CELL_BATTERY,
    Item.OLD_ROD,
    Item.GOOD_ROD,
    Item.SUPER_ROD,
    Item.CHEF_HAT,
    Item.VANILLA_FLAVOR,
    Item.RUBY_FLAVOR,
    Item.MATCHA_FLAVOR,
    Item.MINT_FLAVOR,
    Item.LEMON_FLAVOR,
    Item.SALTED_FLAVOR,
    Item.RUBY_SWIRL_FLAVOR,
    Item.CARAMEL_SWIRL_FLAVOR,
    Item.RAINBOW_SWIRL_FLAVOR,
    Item.RICH_MULCH,
    Item.AMAZE_MULCH,
    Item.ROTOM_CATALOG,
    Item.TEAL_MASK,
    Item.WELLSPRING_MASK,
    Item.CORNERSTONE_MASK,
    Item.HEARTHFLAME_MASK,
    Item.ZYGARDE_CUBE,
    Item.METEORITE,
    Item.AUSPICIOUS_ARMOR,
    Item.MALICIOUS_ARMOR,
    Item.MYSTERY_BOX,
    Item.RUSTED_SWORD,
    Item.SCROLL_OF_WATERS,
    Item.SCROLL_OF_DARKNESS,
    Item.MEMORY_DISCS,
    ...exports.MemoryDiscs,
    Item.COMFEY,
    Item.TATSUGIRI_CURLY,
    Item.TATSUGIRI_DROOPY,
    Item.TATSUGIRI_STRETCHY
];
exports.FishingRods = [
    Item.SUPER_ROD,
    Item.GOOD_ROD,
    Item.OLD_ROD
];
exports.ItemComponentsNoFossilOrScarf = [
    Item.MIRACLE_SEED,
    Item.MYSTIC_WATER,
    Item.HEART_SCALE,
    Item.NEVER_MELT_ICE,
    Item.CHARCOAL,
    Item.MAGNET,
    Item.BLACK_GLASSES,
    Item.TWISTED_SPOON
];
exports.ItemComponentsNoScarf = [
    ...exports.ItemComponentsNoFossilOrScarf,
    Item.FOSSIL_STONE
];
exports.ItemComponents = [
    ...exports.ItemComponentsNoFossilOrScarf,
    Item.FOSSIL_STONE,
    Item.SILK_SCARF
];
exports.ItemRecipe = {
    [Item.OLD_AMBER]: [Item.FOSSIL_STONE, Item.FOSSIL_STONE],
    [Item.DAWN_STONE]: [Item.FOSSIL_STONE, Item.TWISTED_SPOON],
    [Item.WATER_STONE]: [Item.FOSSIL_STONE, Item.MYSTIC_WATER],
    [Item.THUNDER_STONE]: [Item.FOSSIL_STONE, Item.MAGNET],
    [Item.FIRE_STONE]: [Item.FOSSIL_STONE, Item.CHARCOAL],
    [Item.MOON_STONE]: [Item.FOSSIL_STONE, Item.HEART_SCALE],
    [Item.DUSK_STONE]: [Item.FOSSIL_STONE, Item.BLACK_GLASSES],
    [Item.LEAF_STONE]: [Item.FOSSIL_STONE, Item.MIRACLE_SEED],
    [Item.ICE_STONE]: [Item.FOSSIL_STONE, Item.NEVER_MELT_ICE],
    [Item.CHOICE_SPECS]: [Item.TWISTED_SPOON, Item.TWISTED_SPOON],
    [Item.SOUL_DEW]: [Item.TWISTED_SPOON, Item.MYSTIC_WATER],
    [Item.UPGRADE]: [Item.TWISTED_SPOON, Item.MAGNET],
    [Item.REAPER_CLOTH]: [Item.TWISTED_SPOON, Item.BLACK_GLASSES],
    [Item.ABILITY_SHIELD]: [Item.TWISTED_SPOON, Item.MIRACLE_SEED],
    [Item.POWER_LENS]: [Item.TWISTED_SPOON, Item.NEVER_MELT_ICE],
    [Item.POKEMONOMICON]: [Item.TWISTED_SPOON, Item.CHARCOAL],
    [Item.HEAVY_DUTY_BOOTS]: [Item.TWISTED_SPOON, Item.HEART_SCALE],
    [Item.AQUA_EGG]: [Item.MYSTIC_WATER, Item.MYSTIC_WATER],
    [Item.BLUE_ORB]: [Item.MYSTIC_WATER, Item.MAGNET],
    [Item.SCOPE_LENS]: [Item.MYSTIC_WATER, Item.BLACK_GLASSES],
    [Item.STAR_DUST]: [Item.MYSTIC_WATER, Item.NEVER_MELT_ICE],
    [Item.GREEN_ORB]: [Item.MYSTIC_WATER, Item.MIRACLE_SEED],
    [Item.DEEP_SEA_TOOTH]: [Item.MYSTIC_WATER, Item.CHARCOAL],
    [Item.SHINY_CHARM]: [Item.MYSTIC_WATER, Item.HEART_SCALE],
    [Item.XRAY_VISION]: [Item.MAGNET, Item.MAGNET],
    [Item.RAZOR_FANG]: [Item.MAGNET, Item.BLACK_GLASSES],
    [Item.GRACIDEA_FLOWER]: [Item.MAGNET, Item.MIRACLE_SEED],
    [Item.LOADED_DICE]: [Item.MAGNET, Item.NEVER_MELT_ICE],
    [Item.PUNCHING_GLOVE]: [Item.MAGNET, Item.CHARCOAL],
    [Item.MUSCLE_BAND]: [Item.MAGNET, Item.HEART_SCALE],
    [Item.WONDER_BOX]: [Item.BLACK_GLASSES, Item.BLACK_GLASSES],
    [Item.SMOKE_BALL]: [Item.BLACK_GLASSES, Item.MIRACLE_SEED],
    [Item.WIDE_LENS]: [Item.BLACK_GLASSES, Item.NEVER_MELT_ICE],
    [Item.RAZOR_CLAW]: [Item.BLACK_GLASSES, Item.CHARCOAL],
    [Item.SAFETY_GOGGLES]: [Item.BLACK_GLASSES, Item.HEART_SCALE],
    [Item.KINGS_ROCK]: [Item.MIRACLE_SEED, Item.MIRACLE_SEED],
    [Item.STICKY_BARB]: [Item.MIRACLE_SEED, Item.HEART_SCALE],
    [Item.PROTECTIVE_PADS]: [Item.MIRACLE_SEED, Item.CHARCOAL],
    [Item.MAX_REVIVE]: [Item.MIRACLE_SEED, Item.NEVER_MELT_ICE],
    [Item.ASSAULT_VEST]: [Item.NEVER_MELT_ICE, Item.NEVER_MELT_ICE],
    [Item.SHELL_BELL]: [Item.NEVER_MELT_ICE, Item.CHARCOAL],
    [Item.POKE_DOLL]: [Item.NEVER_MELT_ICE, Item.HEART_SCALE],
    [Item.RED_ORB]: [Item.CHARCOAL, Item.CHARCOAL],
    [Item.FLAME_ORB]: [Item.CHARCOAL, Item.HEART_SCALE],
    [Item.ROCKY_HELMET]: [Item.HEART_SCALE, Item.HEART_SCALE],
    [Item.FRIEND_BOW]: [Item.SILK_SCARF, Item.FOSSIL_STONE],
    [Item.BLACK_BELT]: [Item.SILK_SCARF, Item.BLACK_GLASSES],
    [Item.MACH_RIBBON]: [Item.SILK_SCARF, Item.MAGNET],
    [Item.EXPLOSIVE_BAND]: [Item.SILK_SCARF, Item.CHARCOAL],
    [Item.TWIST_BAND]: [Item.SILK_SCARF, Item.NEVER_MELT_ICE],
    [Item.LUCKY_RIBBON]: [Item.SILK_SCARF, Item.TWISTED_SPOON],
    [Item.BIG_EATER_BELT]: [Item.SILK_SCARF, Item.MIRACLE_SEED],
    [Item.COVER_BAND]: [Item.SILK_SCARF, Item.HEART_SCALE],
    [Item.EFFICIENT_BANDANNA]: [Item.SILK_SCARF, Item.MYSTIC_WATER],
    [Item.NULLIFY_BANDANNA]: [Item.SILK_SCARF, Item.SILK_SCARF]
};
exports.Scarves = Object.keys(exports.ItemRecipe).filter((itemKey) => { var _a; return (_a = exports.ItemRecipe[itemKey]) === null || _a === void 0 ? void 0 : _a.includes(Item.SILK_SCARF); });
exports.NonSpecialBerries = [
    Item.AGUAV_BERRY,
    Item.APICOT_BERRY,
    Item.ASPEAR_BERRY,
    Item.BABIRI_BERRY,
    Item.CHERI_BERRY,
    Item.CHESTO_BERRY,
    Item.GANLON_BERRY,
    Item.JABOCA_BERRY,
    Item.LANSAT_BERRY,
    Item.LEPPA_BERRY,
    Item.LIECHI_BERRY,
    Item.LUM_BERRY,
    Item.ORAN_BERRY,
    Item.PECHA_BERRY,
    Item.PERSIM_BERRY,
    Item.PETAYA_BERRY,
    Item.RAWST_BERRY,
    Item.ROWAP_BERRY,
    Item.SALAC_BERRY,
    Item.SITRUS_BERRY
];
exports.SpecialBerries = [
    Item.NANAB_BERRY,
    Item.GOLDEN_RAZZ_BERRY,
    Item.GOLDEN_NANAB_BERRY,
    Item.GOLDEN_PINAP_BERRY
];
exports.Berries = [...exports.NonSpecialBerries, ...exports.SpecialBerries];
exports.Tools = [
    Item.LIGHT_BALL,
    Item.PROTECTOR,
    Item.DRAGON_SCALE,
    Item.METAL_COAT,
    Item.AIR_BALLOON,
    Item.MACHO_BRACE,
    Item.METRONOME,
    Item.EXPLORER_KIT,
    Item.SPELL_TAG,
    Item.SHED_SHELL,
    Item.BERSERK_GENE,
    Item.SURFBOARD,
    Item.COOKING_POT,
    Item.RUNNING_SHOES,
    Item.INCENSE,
    Item.ELECTIRIZER,
    Item.MAGMARIZER,
    Item.POKERUS_VIAL,
    Item.MAX_ELIXIR,
    Item.EXP_SHARE,
    Item.TERRAIN_EXTENDER
];
exports.ArtificialItems = [
    Item.METAL_COAT,
    Item.MACHO_BRACE,
    Item.SPELL_TAG,
    Item.SHED_SHELL,
    Item.MAGMARIZER,
    Item.ELECTIRIZER,
    Item.POKERUS_VIAL,
    Item.COOKING_POT,
    Item.MAX_ELIXIR,
    Item.EXP_SHARE,
    Item.TERRAIN_EXTENDER
];
exports.ShinyItems = [
    Item.DYNAMAX_BAND,
    Item.SHINY_STONE,
    Item.RARE_CANDY,
    Item.EVIOLITE,
    Item.WHITE_FLUTE,
    Item.GOLD_BOTTLE_CAP,
    Item.ABSORB_BULB,
    Item.SACRED_ASH,
    Item.COMET_SHARD,
    Item.REPEAT_BALL,
    Item.GOLD_BOW,
    Item.RED_SCALE
];
exports.WeatherRocks = [
    Item.SUN_STONE,
    Item.HEAT_ROCK,
    Item.DAMP_ROCK,
    Item.ICY_ROCK,
    Item.SMOOTH_ROCK,
    Item.BLACK_AUGURITE,
    Item.FLOAT_STONE,
    Item.ELECTRIC_QUARTZ,
    Item.MIST_STONE,
    Item.BLOOD_STONE,
    Item.SMELLY_CLAY,
    Item.ODD_KEYSTONE
];
exports.WeatherRocksByWeather = new Map([
    [Weather_1.Weather.DROUGHT, Item.HEAT_ROCK],
    [Weather_1.Weather.ZENITH, Item.SUN_STONE],
    [Weather_1.Weather.RAIN, Item.DAMP_ROCK],
    [Weather_1.Weather.SANDSTORM, Item.SMOOTH_ROCK],
    [Weather_1.Weather.SNOW, Item.ICY_ROCK],
    [Weather_1.Weather.STORM, Item.ELECTRIC_QUARTZ],
    [Weather_1.Weather.MISTY, Item.MIST_STONE],
    [Weather_1.Weather.WINDY, Item.FLOAT_STONE],
    [Weather_1.Weather.SMOG, Item.SMELLY_CLAY],
    [Weather_1.Weather.MURKY, Item.ODD_KEYSTONE],
    [Weather_1.Weather.NIGHT, Item.BLACK_AUGURITE],
    [Weather_1.Weather.BLOODMOON, Item.BLOOD_STONE],
    [Weather_1.Weather.NEUTRAL, null]
]);
exports.WeatherByWeatherRocks = (0, map_1.reverseMap)(exports.WeatherRocksByWeather);
exports.CraftableItems = Object.keys(exports.ItemRecipe);
exports.CraftableItemsNoScarves = exports.CraftableItems.filter((item) => !exports.Scarves.includes(item));
exports.SynergyStones = [
    Item.OLD_AMBER,
    Item.DAWN_STONE,
    Item.WATER_STONE,
    Item.THUNDER_STONE,
    Item.FIRE_STONE,
    Item.MOON_STONE,
    Item.DUSK_STONE,
    Item.LEAF_STONE,
    Item.ICE_STONE
];
exports.SynergyGems = [
    Item.NORMAL_GEM,
    Item.GRASS_GEM,
    Item.FIRE_GEM,
    Item.WATER_GEM,
    Item.ELECTRIC_GEM,
    Item.FIGHTING_GEM,
    Item.PSYCHIC_GEM,
    Item.DARK_GEM,
    Item.STEEL_GEM,
    Item.GROUND_GEM,
    Item.POISON_GEM,
    Item.DRAGON_GEM,
    Item.FIELD_GEM,
    Item.MONSTER_GEM,
    Item.HUMAN_GEM,
    Item.AQUATIC_GEM,
    Item.BUG_GEM,
    Item.FLYING_GEM,
    Item.FLORA_GEM,
    Item.ROCK_GEM,
    Item.GHOST_GEM,
    Item.FAIRY_GEM,
    Item.ICE_GEM,
    Item.FOSSIL_GEM,
    Item.SOUND_GEM,
    Item.ARTIFICIAL_GEM,
    Item.LIGHT_GEM,
    Item.WILD_GEM,
    Item.AMORPHOUS_GEM,
    Item.GOURMET_GEM
];
exports.SynergyGemsBuried = [
    Item.FIRE_GEM,
    Item.ROCK_GEM,
    Item.NORMAL_GEM,
    Item.BUG_GEM,
    Item.FLYING_GEM,
    Item.ICE_GEM,
    Item.WATER_GEM,
    Item.STEEL_GEM,
    Item.DRAGON_GEM,
    Item.POISON_GEM,
    Item.GHOST_GEM
];
exports.ToolsBuried = [
    Item.PROTECTOR,
    Item.METAL_COAT,
    Item.EXPLORER_KIT,
    Item.SPELL_TAG,
    Item.SHED_SHELL,
    Item.INCENSE,
    Item.ELECTIRIZER,
    Item.MAGMARIZER,
    Item.MAX_ELIXIR,
    Item.EXP_SHARE,
    Item.DRAGON_SCALE
];
exports.SynergyItemsNoSpecial = [
    Item.OLD_AMBER,
    Item.DAWN_STONE,
    Item.WATER_STONE,
    Item.THUNDER_STONE,
    Item.FIRE_STONE,
    Item.MOON_STONE,
    Item.DUSK_STONE,
    Item.LEAF_STONE,
    Item.ICE_STONE,
    Item.MACHO_BRACE,
    Item.LIGHT_BALL,
    Item.DRAGON_SCALE,
    Item.POKERUS_VIAL,
    Item.METRONOME,
    Item.METAL_COAT,
    Item.AIR_BALLOON,
    Item.PROTECTOR,
    Item.ELECTIRIZER,
    Item.MAGMARIZER,
    Item.EXPLORER_KIT,
    Item.SPELL_TAG,
    Item.SHINY_STONE,
    Item.SHED_SHELL,
    Item.COOKING_POT,
    Item.RUNNING_SHOES,
    Item.BERSERK_GENE,
    Item.SURFBOARD,
    Item.INCENSE,
    Item.FRIEND_BOW
];
exports.SynergyItems = [
    ...exports.SynergyItemsNoSpecial,
    ...exports.MemoryDiscs
];
exports.SynergyGivenByItem = {
    [Item.OLD_AMBER]: Synergy_1.Synergy.FOSSIL,
    [Item.DAWN_STONE]: Synergy_1.Synergy.PSYCHIC,
    [Item.WATER_STONE]: Synergy_1.Synergy.WATER,
    [Item.THUNDER_STONE]: Synergy_1.Synergy.ELECTRIC,
    [Item.FIRE_STONE]: Synergy_1.Synergy.FIRE,
    [Item.MOON_STONE]: Synergy_1.Synergy.FAIRY,
    [Item.DUSK_STONE]: Synergy_1.Synergy.DARK,
    [Item.LEAF_STONE]: Synergy_1.Synergy.GRASS,
    [Item.ICE_STONE]: Synergy_1.Synergy.ICE,
    [Item.MACHO_BRACE]: Synergy_1.Synergy.FIGHTING,
    [Item.LIGHT_BALL]: Synergy_1.Synergy.LIGHT,
    [Item.DRAGON_SCALE]: Synergy_1.Synergy.DRAGON,
    [Item.POKERUS_VIAL]: Synergy_1.Synergy.POISON,
    [Item.METRONOME]: Synergy_1.Synergy.SOUND,
    [Item.METAL_COAT]: Synergy_1.Synergy.STEEL,
    [Item.ELECTIRIZER]: Synergy_1.Synergy.ELECTRIC,
    [Item.MAGMARIZER]: Synergy_1.Synergy.FIRE,
    [Item.AIR_BALLOON]: Synergy_1.Synergy.FLYING,
    [Item.PROTECTOR]: Synergy_1.Synergy.ROCK,
    [Item.EXPLORER_KIT]: Synergy_1.Synergy.GROUND,
    [Item.SPELL_TAG]: Synergy_1.Synergy.GHOST,
    [Item.SHINY_STONE]: Synergy_1.Synergy.LIGHT,
    [Item.FRIEND_BOW]: Synergy_1.Synergy.NORMAL,
    [Item.SHED_SHELL]: Synergy_1.Synergy.BUG,
    [Item.COOKING_POT]: Synergy_1.Synergy.GOURMET,
    [Item.INCENSE]: Synergy_1.Synergy.FLORA,
    [Item.RUNNING_SHOES]: Synergy_1.Synergy.FIELD,
    [Item.BERSERK_GENE]: Synergy_1.Synergy.MONSTER,
    [Item.SURFBOARD]: Synergy_1.Synergy.AQUATIC,
    [Item.FIRE_MEMORY]: Synergy_1.Synergy.FIRE,
    [Item.FOSSIL_MEMORY]: Synergy_1.Synergy.FOSSIL,
    [Item.PSYCHIC_MEMORY]: Synergy_1.Synergy.PSYCHIC,
    [Item.WATER_MEMORY]: Synergy_1.Synergy.WATER,
    [Item.ELECTRIC_MEMORY]: Synergy_1.Synergy.ELECTRIC,
    [Item.FAIRY_MEMORY]: Synergy_1.Synergy.FAIRY,
    [Item.DARK_MEMORY]: Synergy_1.Synergy.DARK,
    [Item.GRASS_MEMORY]: Synergy_1.Synergy.GRASS,
    [Item.ICE_MEMORY]: Synergy_1.Synergy.ICE,
    [Item.FIGHTING_MEMORY]: Synergy_1.Synergy.FIGHTING,
    [Item.POISON_MEMORY]: Synergy_1.Synergy.POISON,
    [Item.SOUND_MEMORY]: Synergy_1.Synergy.SOUND,
    [Item.STEEL_MEMORY]: Synergy_1.Synergy.STEEL,
    [Item.FLYING_MEMORY]: Synergy_1.Synergy.FLYING,
    [Item.ROCK_MEMORY]: Synergy_1.Synergy.ROCK,
    [Item.GROUND_MEMORY]: Synergy_1.Synergy.GROUND,
    [Item.FIELD_MEMORY]: Synergy_1.Synergy.FIELD,
    [Item.GHOST_MEMORY]: Synergy_1.Synergy.GHOST,
    [Item.LIGHT_MEMORY]: Synergy_1.Synergy.LIGHT,
    [Item.NORMAL_MEMORY]: Synergy_1.Synergy.NORMAL,
    [Item.BUG_MEMORY]: Synergy_1.Synergy.BUG,
    [Item.GOURMET_MEMORY]: Synergy_1.Synergy.GOURMET,
    [Item.MONSTER_MEMORY]: Synergy_1.Synergy.MONSTER,
    [Item.AQUATIC_MEMORY]: Synergy_1.Synergy.AQUATIC,
    [Item.DRAGON_MEMORY]: Synergy_1.Synergy.DRAGON,
    [Item.FLORA_MEMORY]: Synergy_1.Synergy.FLORA
};
exports.SynergyGivenByGem = {
    [Item.NORMAL_GEM]: Synergy_1.Synergy.NORMAL,
    [Item.GRASS_GEM]: Synergy_1.Synergy.GRASS,
    [Item.FIRE_GEM]: Synergy_1.Synergy.FIRE,
    [Item.WATER_GEM]: Synergy_1.Synergy.WATER,
    [Item.ELECTRIC_GEM]: Synergy_1.Synergy.ELECTRIC,
    [Item.FIGHTING_GEM]: Synergy_1.Synergy.FIGHTING,
    [Item.PSYCHIC_GEM]: Synergy_1.Synergy.PSYCHIC,
    [Item.DARK_GEM]: Synergy_1.Synergy.DARK,
    [Item.STEEL_GEM]: Synergy_1.Synergy.STEEL,
    [Item.GROUND_GEM]: Synergy_1.Synergy.GROUND,
    [Item.POISON_GEM]: Synergy_1.Synergy.POISON,
    [Item.DRAGON_GEM]: Synergy_1.Synergy.DRAGON,
    [Item.FIELD_GEM]: Synergy_1.Synergy.FIELD,
    [Item.MONSTER_GEM]: Synergy_1.Synergy.MONSTER,
    [Item.HUMAN_GEM]: Synergy_1.Synergy.HUMAN,
    [Item.AQUATIC_GEM]: Synergy_1.Synergy.AQUATIC,
    [Item.BUG_GEM]: Synergy_1.Synergy.BUG,
    [Item.FLYING_GEM]: Synergy_1.Synergy.FLYING,
    [Item.FLORA_GEM]: Synergy_1.Synergy.FLORA,
    [Item.ROCK_GEM]: Synergy_1.Synergy.ROCK,
    [Item.GHOST_GEM]: Synergy_1.Synergy.GHOST,
    [Item.FAIRY_GEM]: Synergy_1.Synergy.FAIRY,
    [Item.ICE_GEM]: Synergy_1.Synergy.ICE,
    [Item.FOSSIL_GEM]: Synergy_1.Synergy.FOSSIL,
    [Item.SOUND_GEM]: Synergy_1.Synergy.SOUND,
    [Item.ARTIFICIAL_GEM]: Synergy_1.Synergy.ARTIFICIAL,
    [Item.LIGHT_GEM]: Synergy_1.Synergy.LIGHT,
    [Item.WILD_GEM]: Synergy_1.Synergy.WILD,
    [Item.AMORPHOUS_GEM]: Synergy_1.Synergy.AMORPHOUS,
    [Item.GOURMET_GEM]: Synergy_1.Synergy.GOURMET
};
exports.CraftableNoStonesOrScarves = exports.CraftableItemsNoScarves.filter((item) => exports.SynergyGivenByItem.hasOwnProperty(item) === false);
exports.Wands = [
    Item.BLAST_WAND,
    Item.HP_SWAP_WAND,
    Item.SPIRIT_WAND,
    Item.LONG_WAND,
    Item.CONFUSE_WAND,
    Item.PETRIFY_WAND,
    Item.SLOW_WAND,
    Item.SLUMBER_WAND,
    Item.GUIDING_WAND,
    Item.SURROUND_WAND,
    Item.POUNCE_WAND,
    Item.TWO_EDGED_WAND,
    Item.WARP_WAND,
    Item.SWITCHER_WAND,
    Item.WHIRLWIND_WAND,
    Item.TUNNEL_WAND
];
exports.OgerponMasks = [
    Item.TEAL_MASK,
    Item.WELLSPRING_MASK,
    Item.CORNERSTONE_MASK,
    Item.HEARTHFLAME_MASK
];
exports.TMsBronze = [
    Item.TM_RAGE,
    Item.TM_RETURN,
    Item.TM_COUNTER,
    Item.TM_DISABLE
];
exports.TMsSilver = [
    Item.TM_BULK_UP,
    Item.TM_CHARGE,
    Item.TM_REFLECT,
    Item.TM_PAYDAY
];
exports.TMsGold = [
    Item.TM_FOCUS_PUNCH,
    Item.TM_HYPER_BEAM,
    Item.TM_PROTECT,
    Item.TM_SKILL_SWAP
];
exports.TMs = [...exports.TMsBronze, ...exports.TMsSilver, ...exports.TMsGold];
exports.AbilityPerTM = {
    [Item.TM_RAGE]: Ability_1.Ability.RAGE,
    [Item.TM_RETURN]: Ability_1.Ability.RETURN,
    [Item.TM_COUNTER]: Ability_1.Ability.COUNTER,
    [Item.TM_DISABLE]: Ability_1.Ability.DISABLE,
    [Item.TM_BULK_UP]: Ability_1.Ability.BULK_UP,
    [Item.TM_CHARGE]: Ability_1.Ability.CHARGE,
    [Item.TM_REFLECT]: Ability_1.Ability.REFLECT,
    [Item.TM_PAYDAY]: Ability_1.Ability.PAYDAY,
    [Item.TM_FOCUS_PUNCH]: Ability_1.Ability.FOCUS_PUNCH,
    [Item.TM_HYPER_BEAM]: Ability_1.Ability.HYPER_BEAM,
    [Item.TM_PROTECT]: Ability_1.Ability.PROTECT,
    [Item.TM_SKILL_SWAP]: Ability_1.Ability.SKILL_SWAP
};
exports.Dishes = [
    Item.OLIVE_OIL,
    Item.RAGE_CANDY_BAR,
    Item.ROCK_SALT,
    Item.TEA,
    Item.CURRY,
    Item.POFFIN,
    Item.CASTELIACONE,
    Item.WHIPPED_DREAM,
    Item.TART_APPLE,
    Item.SWEET_APPLE,
    Item.SIRUPY_APPLE,
    Item.LEFTOVERS,
    Item.HERBA_MYSTICA,
    Item.HERBA_MYSTICA_SWEET,
    Item.HERBA_MYSTICA_SPICY,
    Item.HERBA_MYSTICA_SOUR,
    Item.HERBA_MYSTICA_BITTER,
    Item.HERBA_MYSTICA_SALTY,
    Item.HONEY,
    Item.BLACK_SLUDGE,
    Item.FRUIT_JUICE,
    Item.NUTRITIOUS_EGG,
    Item.LEEK,
    Item.LARGE_LEEK,
    Item.MOOMOO_MILK,
    Item.SMOKED_FILET,
    Item.SPINDA_COCKTAIL,
    Item.BERRY_JUICE,
    Item.BINDING_MOCHI,
    Item.STRAWBERRY_SWEET,
    Item.LOVE_SWEET,
    Item.BERRY_SWEET,
    Item.CLOVER_SWEET,
    Item.FLOWER_SWEET,
    Item.STAR_SWEET,
    Item.RIBBON_SWEET,
    Item.SWEETS,
    Item.SANDWICH,
    Item.HEARTY_STEW,
    Item.MUSHROOMS,
    Item.TINY_MUSHROOM,
    Item.BIG_MUSHROOM,
    Item.BALM_MUSHROOM,
    Item.RICE
];
exports.Mushrooms = [
    Item.TINY_MUSHROOM,
    Item.BIG_MUSHROOM,
    Item.BALM_MUSHROOM
];
exports.DishesGoingToInventory = [
    Item.TART_APPLE,
    Item.SWEET_APPLE,
    Item.SIRUPY_APPLE,
    Item.TINY_MUSHROOM,
    Item.BIG_MUSHROOM,
    Item.BALM_MUSHROOM,
    Item.NANAB_BERRY
];
exports.ItemsSoldAtTown = [...exports.Mushrooms];
exports.HerbaMysticas = [
    Item.HERBA_MYSTICA,
    Item.HERBA_MYSTICA_SWEET,
    Item.HERBA_MYSTICA_SPICY,
    Item.HERBA_MYSTICA_SOUR,
    Item.HERBA_MYSTICA_BITTER,
    Item.HERBA_MYSTICA_SALTY
];
exports.Flavors = [
    Item.VANILLA_FLAVOR,
    Item.RUBY_FLAVOR,
    Item.MATCHA_FLAVOR,
    Item.MINT_FLAVOR,
    Item.LEMON_FLAVOR,
    Item.SALTED_FLAVOR,
    Item.RUBY_SWIRL_FLAVOR,
    Item.CARAMEL_SWIRL_FLAVOR,
    Item.RAINBOW_SWIRL_FLAVOR
];
exports.SynergyFlavors = {
    [Synergy_1.Synergy.NORMAL]: Item.VANILLA_FLAVOR,
    [Synergy_1.Synergy.GRASS]: Item.MATCHA_FLAVOR,
    [Synergy_1.Synergy.FIRE]: Item.RUBY_SWIRL_FLAVOR,
    [Synergy_1.Synergy.WATER]: Item.MINT_FLAVOR,
    [Synergy_1.Synergy.ELECTRIC]: Item.LEMON_FLAVOR,
    [Synergy_1.Synergy.FIGHTING]: Item.RUBY_FLAVOR,
    [Synergy_1.Synergy.PSYCHIC]: Item.RAINBOW_SWIRL_FLAVOR,
    [Synergy_1.Synergy.DARK]: Item.CARAMEL_SWIRL_FLAVOR,
    [Synergy_1.Synergy.STEEL]: Item.RUBY_FLAVOR,
    [Synergy_1.Synergy.GROUND]: Item.SALTED_FLAVOR,
    [Synergy_1.Synergy.POISON]: Item.MATCHA_FLAVOR,
    [Synergy_1.Synergy.DRAGON]: Item.CARAMEL_SWIRL_FLAVOR,
    [Synergy_1.Synergy.FIELD]: Item.RUBY_SWIRL_FLAVOR,
    [Synergy_1.Synergy.MONSTER]: Item.CARAMEL_SWIRL_FLAVOR,
    [Synergy_1.Synergy.HUMAN]: Item.RUBY_FLAVOR,
    [Synergy_1.Synergy.AQUATIC]: Item.MINT_FLAVOR,
    [Synergy_1.Synergy.BUG]: Item.LEMON_FLAVOR,
    [Synergy_1.Synergy.FLYING]: Item.VANILLA_FLAVOR,
    [Synergy_1.Synergy.FLORA]: Item.MATCHA_FLAVOR,
    [Synergy_1.Synergy.ROCK]: Item.SALTED_FLAVOR,
    [Synergy_1.Synergy.GHOST]: Item.MATCHA_FLAVOR,
    [Synergy_1.Synergy.FAIRY]: Item.LEMON_FLAVOR,
    [Synergy_1.Synergy.ICE]: Item.MINT_FLAVOR,
    [Synergy_1.Synergy.FOSSIL]: Item.SALTED_FLAVOR,
    [Synergy_1.Synergy.SOUND]: Item.LEMON_FLAVOR,
    [Synergy_1.Synergy.ARTIFICIAL]: Item.VANILLA_FLAVOR,
    [Synergy_1.Synergy.LIGHT]: Item.RAINBOW_SWIRL_FLAVOR,
    [Synergy_1.Synergy.WILD]: Item.RUBY_SWIRL_FLAVOR,
    [Synergy_1.Synergy.BABY]: Item.RAINBOW_SWIRL_FLAVOR,
    [Synergy_1.Synergy.AMORPHOUS]: Item.RAINBOW_SWIRL_FLAVOR,
    [Synergy_1.Synergy.GOURMET]: Item.VANILLA_FLAVOR
};
exports.Sweets = [
    Item.STRAWBERRY_SWEET,
    Item.LOVE_SWEET,
    Item.FLOWER_SWEET,
    Item.CLOVER_SWEET,
    Item.BERRY_SWEET,
    Item.CLOVER_SWEET,
    Item.FLOWER_SWEET,
    Item.STAR_SWEET,
    Item.RIBBON_SWEET
];
exports.Mulches = [Item.RICH_MULCH, Item.AMAZE_MULCH];
exports.UnholdableItems = [
    ...exports.WeatherRocks,
    ...exports.FishingRods,
    ...exports.Wands,
    ...exports.TMs,
    ...exports.Flavors,
    ...exports.Dishes,
    ...exports.SynergyGems,
    ...exports.Mulches,
    ...exports.MissionOrders,
    Item.METEORITE,
    Item.ROTOM_CATALOG,
    Item.MYSTERY_BOX,
    Item.TREASURE_BOX,
    Item.ZYGARDE_CUBE,
    Item.SCROLL_OF_DARKNESS,
    Item.SCROLL_OF_WATERS,
    Item.AUSPICIOUS_ARMOR,
    Item.MALICIOUS_ARMOR,
    Item.FIRE_SHARD,
    Item.CELL_BATTERY,
    Item.GIMMIGHOUL_COIN,
    Item.EGG_FOR_SELL,
    Item.EXCHANGE_TICKET,
    Item.COIN,
    Item.NUGGET,
    Item.BIG_NUGGET,
    Item.WANTED_NOTICE,
    Item.LEADERS_CREST,
    Item.LAPRAS_PASSPORT,
    Item.RED_SCALE
];
exports.ConsumableItems = [
    ...exports.TMs,
    ...exports.Dishes,
    ...exports.Mulches,
    ...exports.Flavors,
    ...exports.Sweets,
    ...exports.DojoTickets,
    ...exports.Berries,
    Item.EXCHANGE_TICKET,
    Item.RECYCLE_TICKET,
    Item.PICNIC_SET,
    Item.FIRE_SHARD,
    Item.CELL_BATTERY,
    Item.SCROLL_OF_DARKNESS,
    Item.SCROLL_OF_WATERS,
    Item.AUSPICIOUS_ARMOR,
    Item.MALICIOUS_ARMOR
];
exports.RemovableItems = [
    Item.CHEF_HAT,
    Item.TRASH,
    ...exports.Tools,
    ...exports.Scarves,
    ...exports.MemoryDiscs
];
//# sourceMappingURL=Item.js.map