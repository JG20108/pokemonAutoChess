"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonAnimations = exports.DEFAULT_POKEMON_ANIMATION_CONFIG = void 0;
const Animation_1 = require("../../../../types/Animation");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
exports.DEFAULT_POKEMON_ANIMATION_CONFIG = {
    idle: Animation_1.AnimationType.Idle,
    walk: Animation_1.AnimationType.Walk,
    attack: Animation_1.AnimationType.Attack,
    ability: Animation_1.AnimationType.Shoot,
    emote: Animation_1.AnimationType.Shoot,
    hop: Animation_1.AnimationType.Hop,
    hurt: Animation_1.AnimationType.Hurt,
    sleep: Animation_1.AnimationType.Sleep,
    eat: Animation_1.AnimationType.Eat,
    shinyUnavailable: false,
    noShadow: false,
    attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
    hitSprite: [
        Animation_1.HitSprite.NORMAL_HIT,
        Animation_1.HitSprite.NORMAL_HIT2,
        Animation_1.HitSprite.NORMAL_HIT3,
        Animation_1.HitSprite.NORMAL_HIT4
    ],
    animationsOriented: {}
};
exports.PokemonAnimations = {
    [Pokemon_1.Pkm.DEFAULT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Attack
    },
    [Pokemon_1.Pkm.EGG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.LostBalance,
        emote: Animation_1.AnimationType.LostBalance
    },
    [Pokemon_1.Pkm.DITTO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Hop,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.BULBASAUR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.IVYSAUR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.VENUSAUR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.CHARMANDER]: {
        attack: Animation_1.AnimationType.Kick,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.CHARMELEON]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.CHARIZARD]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.SQUIRTLE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.WARTORTLE]: {
        attack: Animation_1.AnimationType.Ricochet,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.BLASTOISE]: {
        attack: Animation_1.AnimationType.Ricochet,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.GEODUDE]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.GRAVELER]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.GOLEM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.AZURILL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Appeal,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.MARILL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.AZUMARILL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.ZUBAT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge,
        eat: Animation_1.AnimationType.Sleep,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.GOLBAT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Hover,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.CROBAT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.MAREEP]: {
        attack: Animation_1.AnimationType.Emit,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.FLAFFY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.AMPHAROS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.CLEFFA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Dance,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.CLEFAIRY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Dance,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.CLEFABLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Dance,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.IGGLYBUFF]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Sing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.SOUND_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.WIGGLYTUFF]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.SOUND_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.JIGGLYPUFF]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.DeepBreath,
        attackSprite: Animation_1.AttackSprite.SOUND_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.CATERPIE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.METAPOD]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.BUTTERFREE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.WEEDLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.KAKUNA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.BEEDRILL]: {
        attack: Animation_1.AnimationType.Jab,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.PIDGEY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.PIDGEOTTO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.PIDGEOT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.HOPPIP]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.SKIPLOOM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.JUMPLUFF]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.SEEDOT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.NUZLEAF]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.SHIFTRY]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.STARLY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.STARAVIA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.STARAPTOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.CHIKORITA]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.BAYLEEF]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.MEGANIUM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shake,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.CYNDAQUIL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.QUILAVA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.TYPHLOSION]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.TOTODILE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.HitGround,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.CROCONAW]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.FERALIGATR]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.TREECKO]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.GROVYLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.SCEPTILE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.TORCHIC]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.COMBUSKEN]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.BLAZIKEN]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Kick,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.MUDKIP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.MARSHTOMP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.SWAMPERT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.TURTWIG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rumble,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.GROTLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rumble,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.TORTERRA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rumble,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.CHIMCHAR]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.MONFERNO]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.INFERNAPE]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.PIPLUP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.PRINPLUP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.EMPOLEON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.NIDORANF]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.NIDORINA]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.NIDOQUEEN]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.NIDORANM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE
    },
    [Pokemon_1.Pkm.NIDORINO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE
    },
    [Pokemon_1.Pkm.NIDOKING]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE
    },
    [Pokemon_1.Pkm.PICHU]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.PIKACHU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.RAICHU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.MACHOP]: {
        attack: Animation_1.AnimationType.Kick,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.MACHOKE]: {
        attack: Animation_1.AnimationType.Kick,
        ability: Animation_1.AnimationType.Punch,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.MACHAMP]: {
        attack: Animation_1.AnimationType.Kick,
        ability: Animation_1.AnimationType.Punch,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.HORSEA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.SEADRA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.KINGDRA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.TRAPINCH]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.VIBRAVA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.FLYGON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.SPHEAL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.SEALEO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.WALREIN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.ARON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.LAIRON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.AGGRON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DigOut,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.MAGNEMITE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.MAGNETON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.MAGNEZONE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.RHYHORN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Stomp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.RHYDON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Stomp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.RHYPERIOR]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Rumble,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.TOGEPI]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Dance,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.TOGETIC]: {
        attack: Animation_1.AnimationType.Hover,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.TOGEKISS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.DUSKULL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.DUSCLOPS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.DUSKNOIR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.LOTAD]: {
        attack: Animation_1.AnimationType.Shake,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.LOMBRE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.LUDICOLO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.SHINX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.LUXIO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.LUXRAY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.POLIWAG]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Appeal,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.POLIWHIRL]: {
        attack: Animation_1.AnimationType.RearUp,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.POLITOED]: {
        attack: Animation_1.AnimationType.RearUp,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.ABRA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.KADABRA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.ALAKAZAM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.GASTLY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Lick,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.HAUNTER]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Lick,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.GENGAR]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Special2,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.DRATINI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.DRAGONAIR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.DRAGONITE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.LARVITAR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.PUPITAR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.TYRANITAR]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.SLAKOTH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Appeal,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.VIGOROTH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.SLAKING]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.RALTS]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Pull,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.KIRLIA]: {
        attack: Animation_1.AnimationType.Twirl,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.GARDEVOIR]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.GALLADE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.BAGON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Bite,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.SHELGON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.SALAMENCE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.BELDUM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.METANG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.MultiScratch,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.METAGROSS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Ricochet,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.GIBLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.GABITE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.GARCHOMP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.ELEKID]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.ELECTABUZZ]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.ELECTIVIRE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.MAGBY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.MAGMAR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.MAGMORTAR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.MUNCHLAX]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.SNORLAX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Stomp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.GROWLITHE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rumble,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.ARCANINE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rumble,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.HISUI_GROWLITHE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE
    },
    [Pokemon_1.Pkm.HISUI_ARCANINE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.QuickStrike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE
    },
    [Pokemon_1.Pkm.ONIX]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.STEELIX]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.SCYTHER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Slice,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SCIZOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.MultiScratch,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.KLEAVOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.RIOLU]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.FIGHTING_RANGE
    },
    [Pokemon_1.Pkm.LUCARIO]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.FIGHTING_RANGE
    },
    [Pokemon_1.Pkm.MAGIKARP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.RATTATA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.TailWhip,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_RATTATA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.TailWhip,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.RATICATE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_RATICATE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.TailWhip,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.SPEAROW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.FEAROW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.GYARADOS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.LUGIA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.SHADOW_LUGIA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.GIRATINA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.ZAPDOS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Emit,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.MOLTRES]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.ARTICUNO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.GALARIAN_ZAPDOS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.GALARIAN_MOLTRES]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.GALARIAN_ARTICUNO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.DIALGA]: {
        attack: Animation_1.AnimationType.Scratch,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE
    },
    [Pokemon_1.Pkm.PALKIA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.SUICUNE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.RAIKOU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.QuickStrike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.ENTEI]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.REGICE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.REGIROCK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.REGISTEEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.KYOGRE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.GROUDON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.RAYQUAZA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.REGIGIGAS]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Rumble,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.EEVEE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.VAPOREON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.JOLTEON]: {
        attack: Animation_1.AnimationType.Shock,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.FLAREON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.ESPEON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UMBREON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.LEAFEON]: {
        attack: Animation_1.AnimationType.QuickStrike,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.SYLVEON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.MEDITITE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.MEDICHAM]: {
        attack: Animation_1.AnimationType.Charge,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.NUMEL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.CAMERUPT]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.DARKRAI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DARK_RANGE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.LITWICK]: {
        attack: Animation_1.AnimationType.Sink,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.LAMPENT]: {
        attack: Animation_1.AnimationType.Emit,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.CHANDELURE]: {
        attack: Animation_1.AnimationType.Emit,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.SLOWPOKE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.SLOWBRO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.SLOWKING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.BELLSPROUT]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.WEEPINBELL]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.VICTREEBEL]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.SWINUB]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shake,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE
    },
    [Pokemon_1.Pkm.PILOSWINE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE
    },
    [Pokemon_1.Pkm.MAMOSWINE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE
    },
    [Pokemon_1.Pkm.SNORUNT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.GLALIE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Bite,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.FROSLASS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.SNOVER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.ABOMASNOW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.VANILLITE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.VANILLISH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.VANILLUXE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.GLACEON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.LARVESTA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.VOLCARONA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.LANDORUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.THUNDURUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.TORNADUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.ENAMORUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.KELDEO]: {
        attack: Animation_1.AnimationType.Swing,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.TERRAKION]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.VIRIZION]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.COBALION]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE
    },
    [Pokemon_1.Pkm.MANAPHY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.ROTOM]: {
        attack: Animation_1.AnimationType.Emit,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.ROTOM_HEAT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.ROTOM_WASH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.ROTOM_FROST]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.ROTOM_FAN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.ROTOM_MOW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.ROTOM_DRONE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.SPIRITOMB]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Withdraw,
        attackSprite: Animation_1.AttackSprite.DARK_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.ABSOL]: {
        attack: Animation_1.AnimationType.QuickStrike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.LAPRAS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.LATIAS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.LATIOS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.MESPRIT]: {
        attack: Animation_1.AnimationType.Hover,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.AZELF]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.UXIE]: {
        attack: Animation_1.AnimationType.Hover,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.MEWTWO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Punch,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.SHADOW_MEWTWO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Punch,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.KYUREM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.RESHIRAM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.ZEKROM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.CELEBI]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.VICTINI]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.JIRACHI]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.ARCEUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_BUG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_DARK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_DRAGON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_ELECTRIC]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_FIGHTING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_FIRE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_FLYING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_GHOST]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_GRASS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_GROUND]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_ICE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_POISON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_PSYCHIC]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_ROCK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_STEEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_WATER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCEUS_FAIRY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.SHAYMIN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.CRESSELIA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.HEATRAN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.HO_OH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Jab,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.AERODACTYL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.PRIMAL_KYOGRE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.PRIMAL_GROUDON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.MEOWTH]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.DeepBreath,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.PERSIAN]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.ALOLAN_MEOWTH]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.DeepBreath,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_PERSIAN]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.DEINO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_RANGE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.ZWEILOUS]: {
        attack: Animation_1.AnimationType.Jab,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_RANGE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.HYDREIGON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_RANGE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.SANDILE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.KROKOROK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.KROOKODILE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.SOLOSIS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.DUOSION]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.REUNICLUS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.MEGA_RAYQUAZA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.ODDISH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.GLOOM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.VILEPLUME]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.BELLOSSOM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.AMAURA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.AURORUS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.ANORITH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Scratch,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.ARMALDO]: {
        attack: Animation_1.AnimationType.Scratch,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.ARCHEN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.ARCHEOPS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.SHIELDON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.BASTIODON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.LILEEP]: {
        attack: Animation_1.AnimationType.SpAttack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.CRADILY]: {
        attack: Animation_1.AnimationType.SpAttack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.CRANIDOS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.RAMPARDOS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.KABUTO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.KABUTOPS]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.OMANYTE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.OMASTAR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.TYRUNT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Bite,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.TYRANTRUM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.BUDEW]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.ROSELIA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.ROSERADE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.BUNEARY]: {
        attack: Animation_1.AnimationType.QuickStrike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.LOPUNNY]: {
        attack: Animation_1.AnimationType.QuickStrike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.AXEW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.FRAXURE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.HAXORUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.VENIPEDE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.TumbleBack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.WHIRLIPEDE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.SCOLIPEDE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.PORYGON]: {
        attack: Animation_1.AnimationType.RearUp,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_RANGE
    },
    [Pokemon_1.Pkm.PORYGON_2]: {
        attack: Animation_1.AnimationType.RearUp,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_RANGE
    },
    [Pokemon_1.Pkm.PORYGON_Z]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_RANGE
    },
    [Pokemon_1.Pkm.ELECTRIKE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.MANECTRIC]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.SHUPPET]: {
        attack: Animation_1.AnimationType.SpAttack,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.BANETTE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.HONEDGE]: {
        attack: Animation_1.AnimationType.Slice,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.DOUBLADE]: {
        attack: Animation_1.AnimationType.Slice,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.AEGISLASH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT,
        animationsOriented: { [Animation_1.AnimationType.Special0]: true }
    },
    [Pokemon_1.Pkm.AEGISLASH_BLADE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT,
        animationsOriented: { [Animation_1.AnimationType.Special0]: true }
    },
    [Pokemon_1.Pkm.CUBONE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.MAROWAK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_MAROWAK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Punch,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.WHISMUR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Appeal,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.SOUND_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.LOUDRED]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Appeal,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.SOUND_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.EXPLOUD]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.SOUND_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.TYMPOLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.PALPITOAD]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.SEISMITOAD]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.SEWADDLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.SWADLOON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.LEAVANNY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.FLABEBE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLOETTE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLORGES]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLABEBE_BLUE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLOETTE_BLUE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLORGES_BLUE]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLABEBE_ORANGE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLOETTE_ORANGE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLORGES_ORANGE]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLABEBE_YELLOW]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLOETTE_YELLOW]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLORGES_YELLOW]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLABEBE_WHITE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLOETTE_WHITE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.FLORGES_WHITE]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.JANGMO_O]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.HAKAMO_O]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.KOMMO_O]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.MELOETTA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.PIROUETTE_MELOETTA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.SWABLU]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.ALTARIA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.CASTFORM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.CASTFORM_SUN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.CASTFORM_RAIN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.CASTFORM_HAIL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.CORPHISH]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.CRAWDAUNT]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.JOLTIK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.GALVANTULA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.GENESECT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_RANGE
    },
    [Pokemon_1.Pkm.RELICANTH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.HATENNA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.HATTREM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.HATTERENE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE
    },
    [Pokemon_1.Pkm.FENNEKIN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.BRAIXEN]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.DELPHOX]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.MAKUHITA]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.HARIYAMA]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.REGIELEKI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Attack,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.REGIDRAGO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE
    },
    [Pokemon_1.Pkm.GUZZLORD]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.ETERNATUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.PONYTA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Walk,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.RAPIDASH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Walk,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.GALARIAN_PONYTA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Walk,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.GALARIAN_RAPIDASH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Walk,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.NINCADA]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.NINJASK]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.SHEDINJA]: {
        attack: Animation_1.AnimationType.Scratch,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.NOIBAT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE
    },
    [Pokemon_1.Pkm.NOIVERN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE
    },
    [Pokemon_1.Pkm.PUMPKABOO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.GOURGEIST]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.CACNEA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.CACTURNE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.TAUROS]: {
        attack: Animation_1.AnimationType.Stomp,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.TAUROS_COMBAT_BREED]: {
        attack: Animation_1.AnimationType.Stomp,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.TAUROS_BLAZE_BREED]: {
        attack: Animation_1.AnimationType.Stomp,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.TAUROS_AQUA_BREED]: {
        attack: Animation_1.AnimationType.Stomp,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.HAPPINY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shake,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.CHANSEY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.BLISSEY]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.TAPU_KOKO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.TAPU_LELE]: {
        attack: Animation_1.AnimationType.Hop,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.STAKATAKA]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Sleep,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.BLACEPHALON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.HOUNDOUR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.HOUNDOOM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.CLAMPERL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.HUNTAIL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.GOREBYSS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE
    },
    [Pokemon_1.Pkm.SMOOCHUM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE
    },
    [Pokemon_1.Pkm.JYNX]: {
        attack: Animation_1.AnimationType.Slap,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE
    },
    [Pokemon_1.Pkm.SALANDIT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.POISON_RANGE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.SALAZZLE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_RANGE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.VENONAT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.VENOMOTH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.FlapAround,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.VOLTORB]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.ELECTRODE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.HISUI_VOLTORB]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.HISUI_ELECTRODE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.SLUGMA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.MAGCARGO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.SNEASEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.WEAVILE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.CROAGUNK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.TOXICROAK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.CHINCHOU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.LANTURN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.POOCHYENA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.MIGHTYENA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.BRONZOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.BRONZONG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.DRIFLOON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.DRIFBLIM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.SHROOMISH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.BRELOOM]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.TENTACOOL]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.TENTACRUEL]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.SNUBULL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.GRANBULL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.SEVIPER]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.VULPIX]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.NINETALES]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.DeepBreath,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_VULPIX]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_NINETALES]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.BUIZEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.FLOATZEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.MAWILE]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.KECLEON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.CARBINK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.DIANCIE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.CHATOT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Appeal,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.GOOMY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.SLIGOO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.GOODRA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.HISUI_SLIGGOO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE
    },
    [Pokemon_1.Pkm.HISUI_GOODRA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE
    },
    [Pokemon_1.Pkm.MEW]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.BOUNSWEET]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.STEENEE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.TSAREENA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Kick,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.VOLCANION]: {
        attack: Animation_1.AnimationType.Charge,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.APPLIN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge
    },
    [Pokemon_1.Pkm.APPLETUN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE
    },
    [Pokemon_1.Pkm.FLAPPLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE
    },
    [Pokemon_1.Pkm.DIPPLIN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE
    },
    [Pokemon_1.Pkm.HYDRAPPLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE
    },
    [Pokemon_1.Pkm.OSHAWOTT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.DEWOTT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.SAMUROTT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.HISUI_SAMUROTT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE
    },
    [Pokemon_1.Pkm.SNOM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.FROSMOTH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.WAILMER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.WAILORD]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hurt,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.DREEPY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.DRAKLOAK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.DRAGAPULT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.SNIVY]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Appeal,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.SERVINE]: {
        attack: Animation_1.AnimationType.Slice,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.SERPERIOR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.SCORBUNNY]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Kick,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.RABOOT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Kick,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.CINDERACE]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Kick,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.POPPLIO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.BRIONNE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.PRIMARINA]: {
        attack: Animation_1.AnimationType.Charge,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.GOTHITA]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.GOTHORITA]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.GOTHITELLE]: {
        attack: Animation_1.AnimationType.Appeal,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.SANDSHREW]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.LostBalance,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.SANDSLASH]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.DeepBreath,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_SANDSHREW]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE
    },
    [Pokemon_1.Pkm.ALOLAN_SANDSLASH]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE
    },
    [Pokemon_1.Pkm.FARFETCH_D]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Attack,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.GALARIAN_FARFETCH_D]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.UNOWN_A]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_B]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_C]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_D]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_E]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_F]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_G]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_H]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_I]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_J]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_K]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_L]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_M]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_N]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_O]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_P]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_Q]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_R]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_S]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_T]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_U]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_V]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_W]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_X]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_Y]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_Z]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_QUESTION]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.UNOWN_EXCLAMATION]: {
        attack: Animation_1.AnimationType.Rotate,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.TAPU_FINI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.TAPU_BULU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.DIGLETT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DigIn,
        emote: Animation_1.AnimationType.Special0,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.DUGTRIO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DigIn,
        emote: Animation_1.AnimationType.Special0,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_DIGLETT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DigIn,
        emote: Animation_1.AnimationType.Special0,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_DUGTRIO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Walk,
        emote: Animation_1.AnimationType.Hop,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.ROWLET]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.DARTIX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.DECIDUEYE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.ZORUA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.ZOROARK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.HISUI_ZORUA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.HISUI_ZOROARK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.FROAKIE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.FROGADIER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.GRENINJA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Attack,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.TYROGUE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.HITMONLEE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Kick,
        emote: Animation_1.AnimationType.Withdraw,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE
    },
    [Pokemon_1.Pkm.HITMONCHAN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Uppercut,
        emote: Animation_1.AnimationType.Punch,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE
    },
    [Pokemon_1.Pkm.HITMONTOP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE
    },
    [Pokemon_1.Pkm.MIMIKYU]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.MIMIKYU_BUSTED]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.GRIMER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.MUK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_GRIMER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_MUK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.CARVANHA]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.SHARPEDO]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.PINECO]: {
        attack: Animation_1.AnimationType.Ricochet,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.FORRETRESS]: {
        attack: Animation_1.AnimationType.Ricochet,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.SEEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.DEWGONG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_GEODUDE]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_GRAVELER]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_GOLEM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.EKANS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.ARBOK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.MIME_JR]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.MR_MIME]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.ORIGIN_GIRATINA]: {
        attack: Animation_1.AnimationType.Scratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.MELTAN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE
    },
    [Pokemon_1.Pkm.MELMETAL]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Punch,
        emote: Animation_1.AnimationType.Charge
    },
    [Pokemon_1.Pkm.HOOPA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Hop,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.HOOPA_UNBOUND]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Cringe,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.SILVALLY]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_FIGHTING]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_FLYING]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_POISON]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_GROUND]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_ROCK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_BUG]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_GHOST]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_STEEL]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_FIRE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_WATER]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_GRASS]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_ELECTRIC]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_PSYCHIC]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_ICE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_DRAGON]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_DARK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.SILVALLY_FAIRY]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.TYPE_NULL]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.ZERAORA]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.XERNEAS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.YVELTAL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.MARSHADOW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.HOOTHOOT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.NOCTOWL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.BONSLEY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.SUDOWOODO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Slam,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.PHIONE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.COMBEE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.VESPIQUEN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.SHUCKLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.TEPIG]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.PIGNITE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.EMBOAR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.WYNAUT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.WOBBUFFET]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.LUNATONE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_RANGE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.SOLROCK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.POLIWRATH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.SHAYMIN_SKY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.WURMPLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.SILCOON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.BEAUTIFLY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.CASCOON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.DUSTOX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.TINKATINK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Strike,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.TINKATUFF]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Strike,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.TINKATON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Cringe,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.PARAS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.PARASECT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.MILTANK]: {
        attack: Animation_1.AnimationType.Stomp,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.MANKEY]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.PRIMEAPE]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Strike,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.ANNIHILAPE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.SUNKERN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.SUNFLORA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.MARACTUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.PLUSLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.MINUN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.PINSIR]: {
        attack: Animation_1.AnimationType.Slice,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Slice,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.NATU]: {
        attack: Animation_1.AnimationType.Jab,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Hover,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.XATU]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.GLIGAR]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.MultiStrike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.GLISCOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.SHELLDER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.CLOYSTER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.SENTRET]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.FURRET]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.SPECTRIER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.GLASTRIER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.TORKOAL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.DELIBIRD]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.IRON_BUNDLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.KARTANA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.CHINGLING]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.CHIMECHO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.ALOLAN_RAICHU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE
    },
    [Pokemon_1.Pkm.DHELMISE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.KOFFING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Gas,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.WEEZING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Gas,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.GALARIAN_WEEZING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Gas,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.STARYU]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.STARMIE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.NOSEPASS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.PROBOPASS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.WOOBAT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Hover,
        attackSprite: Animation_1.AttackSprite.SOUND_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.SWOOBAT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Hover,
        attackSprite: Animation_1.AttackSprite.SOUND_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.CLAUNCHER]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Appeal,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.CLAWITZER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.YANMA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.YANMEGA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.QuickStrike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.HELIOPTILE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.HELIOLISK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.BIDOOF]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.BIBAREL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.SPINDA]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.BALTOY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE
    },
    [Pokemon_1.Pkm.CLAYDOL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE
    },
    [Pokemon_1.Pkm.HERACROSS]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Slam,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.PURRLOIN]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.LIEPARD]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.BARBOACH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Dance,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.WHISCASH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Dance,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.SCRAGGY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE
    },
    [Pokemon_1.Pkm.SCRAFTY]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE
    },
    [Pokemon_1.Pkm.FINNEON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.LUMINEON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.STUNKY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.SKUNTANK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.ILLUMISE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.VOLBEAT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Appeal,
        emote: Animation_1.AnimationType.Appeal,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.NECROZMA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.ULTRA_NECROZMA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.CHERUBI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.CHERRIM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.CHERRIM_SUNLIGHT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Dance,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.MISDREAVUS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.MISMAGIUS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.DODUO]: {
        attack: Animation_1.AnimationType.Jab,
        ability: Animation_1.AnimationType.MultiStrike,
        emote: Animation_1.AnimationType.MultiStrike,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE
    },
    [Pokemon_1.Pkm.DODRIO]: {
        attack: Animation_1.AnimationType.Jab,
        ability: Animation_1.AnimationType.MultiStrike,
        emote: Animation_1.AnimationType.MultiStrike,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE
    },
    [Pokemon_1.Pkm.XURKITREE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.TANDEMAUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.MAUSHOLD_THREE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.MAUSHOLD_FOUR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.KRICKETOT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.KRICKETUNE]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.HIPPOPOTAS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.HIPPODOWN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.WINGULL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.PELIPPER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.NIHILEGO]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_RANGE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.SOBBLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.DRIZZILE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.INTELEON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Strike,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.TROPIUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.EXEGGCUTE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE
    },
    [Pokemon_1.Pkm.EXEGGUTOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Dance,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE
    },
    [Pokemon_1.Pkm.ALOLAN_EXEGGUTOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Dance,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE
    },
    [Pokemon_1.Pkm.COMFEY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Hop,
        attackSprite: Animation_1.AttackSprite.FLORA_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.CARNIVINE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.QWILFISH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.HISUIAN_QWILFISH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.OVERQWIL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.HISUIAN_TYPHLOSION]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE
    },
    [Pokemon_1.Pkm.LILLIPUP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.HERDIER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.STOUTLAND]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.ZIGZAGOON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.LINOONE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.GALARIAN_ZIGZAGOON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.GALARIAN_LINOONE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.OBSTAGOON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Double,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.PHEROMOSA]: {
        attack: Animation_1.AnimationType.Kick,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE
    },
    [Pokemon_1.Pkm.SABLEYE]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.MEGA_SABLEYE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE
    },
    [Pokemon_1.Pkm.DRACOVISH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Hop,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.CORSOLA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shake,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.GALAR_CORSOLA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.CURSOLA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.GIMMIGHOUL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.GHOLDENGO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge
    },
    [Pokemon_1.Pkm.PHANTUMP]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.TREVENANT]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.SMEARGLE]: {
        attack: Animation_1.AnimationType.SpAttack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose
    },
    [Pokemon_1.Pkm.TOXEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.TOXTRICITY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.BRUXISH]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.SUBSTITUTE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.CYCLIZAR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.PAWNIARD]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Appeal,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.BISHARP]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.KINGAMBIT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.MINIOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.MINIOR_KERNEL_RED]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.MINIOR_KERNEL_BLUE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.MINIOR_KERNEL_ORANGE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.MINIOR_KERNEL_GREEN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.FEEBAS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.MILOTIC]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.MORPEKO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.MORPEKO_HANGRY]: {
        attack: Animation_1.AnimationType.Walk,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Special0,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.KANGASKHAN]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.TEDDIURSA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.MultiScratch,
        emote: Animation_1.AnimationType.Appeal,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.URSARING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.MultiStrike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.URSALUNA]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.URSALUNA_BLOODMOON]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.AIPOM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Dance,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE
    },
    [Pokemon_1.Pkm.AMBIPOM]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE
    },
    [Pokemon_1.Pkm.DEERLING_SPRING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.DEERLING_SUMMER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.DEERLING_AUTUMN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.DEERLING_WINTER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.SAWSBUCK_SPRING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.SAWSBUCK_SUMMER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.SAWSBUCK_AUTUMN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.SAWSBUCK_WINTER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.LICKITUNG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Lick,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.LICKILICKY]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Withdraw,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.PATRAT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.WATCHOG]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.SPINARAK]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_RANGE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.ARIADOS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_RANGE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.DEWPIDER]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.ARAQUANID]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.ROCKRUFF]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.DeepBreath,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.LYCANROC_DAY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.LYCANROC_DUSK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.LYCANROC_NIGHT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.QuickStrike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.DRUDDIGON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.COSMOG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.COSMOEM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.SOLGALEO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Attack,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE
    },
    [Pokemon_1.Pkm.LUNALA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.MAGEARNA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.IMPIDIMP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.MORGREM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.GRIMMSNARL]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE
    },
    [Pokemon_1.Pkm.DEOXYS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Emit,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.DEOXYS_DEFENSE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Withdraw,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.DEOXYS_ATTACK]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.DEOXYS_SPEED]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.CRABRAWLER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.CRABOMINABLE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.CUTIEFLY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.RIBOMBEE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.ZANGOOSE]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.NICKIT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.THIEVUL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.DROWZEE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.HYPNO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.WATTREL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.FlapAround,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.KILOWATTREL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.FlapAround,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.STANTLER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.WYRDEER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.BURMY_PLANT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Attack,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.BURMY_SANDY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Attack,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.BURMY_TRASH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Attack,
        attackSprite: Animation_1.AttackSprite.POISON_RANGE
    },
    [Pokemon_1.Pkm.WORMADAM_PLANT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE
    },
    [Pokemon_1.Pkm.WORMADAM_SANDY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE
    },
    [Pokemon_1.Pkm.WORMADAM_TRASH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.POISON_RANGE
    },
    [Pokemon_1.Pkm.MOTHIM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Hover,
        attackSprite: Animation_1.AttackSprite.POISON_RANGE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.WOOPER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.QUAGSIRE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.PALDEA_WOOPER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.CLODSIRE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.FUECOCO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.CROCALOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.SKELEDIRGE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE
    },
    [Pokemon_1.Pkm.TANGELA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.TANGROWTH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Emit,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.PSYDUCK]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.GOLDUCK]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.PHANPY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.TumbleBack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.DONPHAN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        animationsOriented: { [Animation_1.AnimationType.Special0]: true }
    },
    [Pokemon_1.Pkm.SPOINK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.GRUMPIG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.SINISTEA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.POLTEAGEIST]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hop,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.FERROSEED]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.DeepBreath,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE
    },
    [Pokemon_1.Pkm.FERROTHORN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Special0,
        emote: Animation_1.AnimationType.Special0,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE
    },
    [Pokemon_1.Pkm.GOLETT]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Tumble,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.GOLURK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.TRUBBISH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.GARBODOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.GRUBBIN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.CHARJABUG]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.VIKAVOLT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.SHELLOS_WEST_SEA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.GASTRODON_WEST_SEA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.SHELLOS_EAST_SEA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.GASTRODON_EAST_SEA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.MUNNA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.MUSHARNA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.KLEFKI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Attack,
        attackSprite: Animation_1.AttackSprite.STEEL_RANGE
    },
    [Pokemon_1.Pkm.RUFFLET]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.BRAVIARY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.HEATMOR]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.HAWLUCHA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Cringe,
        emote: Animation_1.AnimationType.Kick,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.MIENFOO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.MIENSHAO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.STONJOURNER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shake,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.HISUI_SNEASEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.MultiScratch,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.SNEASLER]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.POIPOLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.NAGANADEL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.CRAMORANT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.ARROKUDA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.WISHIWASHI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.WISHIWASHI_SCHOOL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.PAWMI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.PAWMO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.PAWMOT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.PYUKUMUKU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rumble,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.GOLDEEN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.SEAKING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.LUVDISC]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.AUDINO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Pose,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.SOUND_RANGE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.PETILIL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.LILIGANT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.DeepBreath,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.HISUIAN_LILLIGANT]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.MANTYKE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Strike,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.MANTINE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Strike,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.REMORAID]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WILD_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.OCTILLERY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.SIGILYPH]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.FRIGIBAX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.ARCTIBAX]: {
        attack: Animation_1.AnimationType.Scratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.BAXCALIBUR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE
    },
    [Pokemon_1.Pkm.BINACLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.BARBARACLE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.SKARMORY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.DURANT]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.OGERPON_TEAL]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.OGERPON_TEAL_MASK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.OGERPON_WELLSPRING]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.OGERPON_WELLSPRING_MASK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.OGERPON_HEARTHFLAME]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.OGERPON_HEARTHFLAME_MASK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.OGERPON_CORNERSTONE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.OGERPON_CORNERSTONE_MASK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.IRON_HANDS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Hop,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.ROOKIDEE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.CORVISQUIRE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.CORVIKNIGHT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.MURKROW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.HONCHKROW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.SANDYGAST]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.PALOSSAND]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.TURTONATOR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rumble,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.SKORUPI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Jab,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.DRAPION]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Jab,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.DARUMAKA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Dance,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.DARMANITAN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.QuickStrike,
        emote: Animation_1.AnimationType.Rumble,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.DARMANITAN_ZEN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE
    },
    [Pokemon_1.Pkm.GALARIAN_DARUMAKA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.GALARIAN_DARMANITAN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.GALARIAN_DARMANITAN_ZEN]: {
        attack: Animation_1.AnimationType.Idle,
        ability: Animation_1.AnimationType.Idle,
        emote: Animation_1.AnimationType.Idle,
        hop: Animation_1.AnimationType.Idle,
        walk: Animation_1.AnimationType.Idle,
        sleep: Animation_1.AnimationType.Idle,
        eat: Animation_1.AnimationType.Idle,
        shinyUnavailable: true,
        noShadow: true,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        animationsOriented: {
            [Animation_1.AnimationType.Idle]: false,
            [Animation_1.AnimationType.Hurt]: false
        }
    },
    [Pokemon_1.Pkm.KRABBY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Slam,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.KINGLER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.WATER_HIT
    },
    [Pokemon_1.Pkm.ZYGARDE_10]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp
    },
    [Pokemon_1.Pkm.ZYGARDE_50]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DRAGON_GREEN_RANGE
    },
    [Pokemon_1.Pkm.ZYGARDE_100]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Emit,
        attackSprite: Animation_1.AttackSprite.DRAGON_GREEN_RANGE
    },
    [Pokemon_1.Pkm.SIZZLIPEDE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.CENTISKORCH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.STUFFUL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.BEWEAR]: {
        attack: Animation_1.AnimationType.Slap,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.GLIMMET]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.GLIMMORA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.FLETCHLING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.FLETCHINDER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.TALONFLAME]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.VULLABY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.MANDIBUZZ]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.INKAY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.MALAMAR]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.TIMBURR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.GURDURR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Punch,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.CONKELDURR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.PILLAR_WOOD]: {
        attack: Animation_1.AnimationType.Idle,
        ability: Animation_1.AnimationType.Idle,
        emote: Animation_1.AnimationType.Idle,
        hop: Animation_1.AnimationType.Idle,
        shinyUnavailable: true,
        noShadow: true
    },
    [Pokemon_1.Pkm.PILLAR_IRON]: {
        attack: Animation_1.AnimationType.Idle,
        ability: Animation_1.AnimationType.Idle,
        emote: Animation_1.AnimationType.Idle,
        hop: Animation_1.AnimationType.Idle,
        shinyUnavailable: true,
        noShadow: true
    },
    [Pokemon_1.Pkm.PILLAR_CONCRETE]: {
        attack: Animation_1.AnimationType.Idle,
        ability: Animation_1.AnimationType.Idle,
        emote: Animation_1.AnimationType.Idle,
        hop: Animation_1.AnimationType.Idle,
        shinyUnavailable: true,
        noShadow: true
    },
    [Pokemon_1.Pkm.ELGYEM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.DeepBreath,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.BEHEEYEM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.LITTEN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.MultiScratch,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.TORRACAT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.MultiScratch,
        emote: Animation_1.AnimationType.Emit,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.INCINEROAR]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Ricochet,
        emote: Animation_1.AnimationType.Pose,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.DRACOZOLT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.ARCTOZOLT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Stomp,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.ARCTOVISH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Twirl,
        hop: Animation_1.AnimationType.Twirl,
        hurt: Animation_1.AnimationType.Idle,
        sleep: Animation_1.AnimationType.Idle,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.CRYOGONAL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ICE_RANGE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.DRAMPA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.DRAGON_RANGE
    },
    [Pokemon_1.Pkm.SKRELP]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_RANGE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.DRAGALGE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_RANGE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.CUBCHOO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.BEARTIC]: {
        attack: Animation_1.AnimationType.MultiStrike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        hitSprite: Animation_1.HitSprite.ICE_HIT
    },
    [Pokemon_1.Pkm.NACLI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Attack,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.NACLSTACK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rotate,
        emote: Animation_1.AnimationType.Attack,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.GARGANACL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.CAPSAKID]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Dance,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.SCOVILLAIN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Dance,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.SWIRLIX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.SLURPUFF]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.GULPIN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.SWALOT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.FIDOUGH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.DACHSBUN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.TailWhip,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.MILCERY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.ALCREMIE_VANILLA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.ALCREMIE_RUBY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rotate,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.ALCREMIE_MATCHA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rotate,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.ALCREMIE_MINT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rotate,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.ALCREMIE_LEMON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rotate,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.ALCREMIE_SALTED]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rotate,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.ALCREMIE_RUBY_SWIRL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rotate,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.ALCREMIE_CARAMEL_SWIRL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rotate,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.ALCREMIE_RAINBOW_SWIRL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Rotate,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.FAIRY_RANGE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.PECHARUNT]: {
        attack: Animation_1.AnimationType.Charge,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Twirl,
        hop: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.POISON_RANGE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.VELUZA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.DURALUDON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.STEEL_RANGE
    },
    [Pokemon_1.Pkm.ARCHALUDON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.STEEL_RANGE
    },
    [Pokemon_1.Pkm.SPRIGATITO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Appeal,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.FLORAGATO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.MEOWSCARADA]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.FOMANTIS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.LURANTIS]: {
        attack: Animation_1.AnimationType.MultiScratch,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.ROARING_MOON]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.RearUp,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.CHARCADET]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.ARMAROUGE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.CERULEDGE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIRE_MELEE,
        hitSprite: Animation_1.HitSprite.FIRE_HIT
    },
    [Pokemon_1.Pkm.TYNAMO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.EELEKTRIK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.EELEKTROSS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.PIDOVE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.TRANQUILL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.UNFEZANT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.ZACIAN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE
    },
    [Pokemon_1.Pkm.ZACIAN_CROWNED]: {
        attack: Animation_1.AnimationType.Scratch,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.IRON_VALIANT]: {
        attack: Animation_1.AnimationType.Slice,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE
    },
    [Pokemon_1.Pkm.PANCHAM]: {
        attack: Animation_1.AnimationType.Punch,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.PANGORO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.GROOKEY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Strike,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.THWACKEY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Sing,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.RILLABOOM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Sing,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.KUBFU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE
    },
    [Pokemon_1.Pkm.URSHIFU_RAPID]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.URSHIFU_SINGLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DARK_MELEE
    },
    [Pokemon_1.Pkm.SCREAM_TAIL]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Withdraw,
        attackSprite: Animation_1.AttackSprite.FAIRY_MELEE,
        hitSprite: Animation_1.HitSprite.SOUND_HIT
    },
    [Pokemon_1.Pkm.INDEEDEE_MALE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.INDEEDEE_FEMALE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_RANGE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.COTTONEE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.WHIMSICOTT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.GIRAFARIG]: {
        attack: Animation_1.AnimationType.Stomp,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Bite,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.FARIGIRAF]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.SKITTY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Appeal,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.DELCATTY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Appeal,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT
    },
    [Pokemon_1.Pkm.GLAMEOW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.PURUGLY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.MINCCINO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Appeal
    },
    [Pokemon_1.Pkm.CINCCINO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Dance
    },
    [Pokemon_1.Pkm.PIKACHU_SURFER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot
    },
    [Pokemon_1.Pkm.ESPURR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.MEOWSTIC_MALE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.MEOWSTIC_FEMALE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.OKIDOGI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        shinyUnavailable: true,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.MUNKIDORI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.FEZANDIPITI]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.FlapAround,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.POISON_HIT
    },
    [Pokemon_1.Pkm.SURSKIT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.WATER_RANGE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.MASQUERAIN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Hover,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.GOSSIFLEUR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Twirl,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE
    },
    [Pokemon_1.Pkm.ELDEGOSS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE
    },
    [Pokemon_1.Pkm.FURFROU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.TailWhip,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.VAROOM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE
    },
    [Pokemon_1.Pkm.REVAVROOM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE
    },
    [Pokemon_1.Pkm.CELESTEELA]: {
        attack: Animation_1.AnimationType.Slam,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.LEDYBA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.LEDIAN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Strike,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.EMOLGA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.DeepBreath,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_RANGE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.TAILLOW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.SWELLOW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FLYING_MELEE,
        hitSprite: Animation_1.HitSprite.FLYING_HIT
    },
    [Pokemon_1.Pkm.DRILBUR]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.MultiScratch,
        emote: Animation_1.AnimationType.Emit,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.EXCADRILL]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.ROGGENROLA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.BOLDORE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.GIGALITH]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ROCK_RANGE,
        hitSprite: Animation_1.HitSprite.ROCK_HIT
    },
    [Pokemon_1.Pkm.TOGEDEMARU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.FALINKS_BRASS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.FALINKS_TROOPER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.DEDENNE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Rotate,
        attackSprite: Animation_1.AttackSprite.STEEL_MELEE,
        hitSprite: Animation_1.HitSprite.FAIRY_HIT,
        hurt: Animation_1.AnimationType.Charge,
        eat: Animation_1.AnimationType.Sleep
    },
    [Pokemon_1.Pkm.SILICOBRA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.SANDACONDA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.DUNSPARCE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.DeepBreath,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.DUDUNSPARCE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hitSprite: Animation_1.HitSprite.GROUND_HIT
    },
    [Pokemon_1.Pkm.SMOLIV]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Shake,
        emote: Animation_1.AnimationType.Shake,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.DOLLIV]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.ARBOLIVA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GRASS_RANGE,
        hitSprite: Animation_1.HitSprite.GRASS_HIT
    },
    [Pokemon_1.Pkm.CHESPIN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.QUILLADIN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.CHESNAUGHT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rumble,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.NYMBLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.LOKIX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.DARK_HIT
    },
    [Pokemon_1.Pkm.BLIPBUG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.DOTTLER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shake,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.ORBEETLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        hitSprite: Animation_1.HitSprite.PSYCHIC_HIT
    },
    [Pokemon_1.Pkm.PACHIRISU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Appeal,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE,
        hitSprite: Animation_1.HitSprite.ELECTRIC_HIT
    },
    [Pokemon_1.Pkm.BUZZWOLE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Swell,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE,
        hitSprite: Animation_1.HitSprite.FIGHTING_HIT
    },
    [Pokemon_1.Pkm.YAMASK]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.COFAGRIGUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.GALARIAN_YAMASK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.RUNERIGUS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE,
        hitSprite: Animation_1.HitSprite.GHOST_HIT
    },
    [Pokemon_1.Pkm.CHEWTLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.DREDNAW]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Bite,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.GREAVARD]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE
    },
    [Pokemon_1.Pkm.HOUNDSTONE]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_MELEE
    },
    [Pokemon_1.Pkm.CLOBBOPUS]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.MultiStrike,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE
    },
    [Pokemon_1.Pkm.GRAPPLOCT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE
    },
    [Pokemon_1.Pkm.CHI_YU]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FIRE_RANGE
    },
    [Pokemon_1.Pkm.WIMPOD]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE
    },
    [Pokemon_1.Pkm.GOLISOPOD]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE
    },
    [Pokemon_1.Pkm.BASCULIN_RED]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.BASCULIN_BLUE]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.BASCULIN_WHITE]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.BASCULEGION_MALE]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.BASCULEGION_FEMALE]: {
        attack: Animation_1.AnimationType.Bite,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.KLINK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_RANGE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.KLANG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_RANGE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.KLINKLANG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.STEEL_RANGE,
        hitSprite: Animation_1.HitSprite.STEEL_HIT
    },
    [Pokemon_1.Pkm.GALARIAN_SLOWPOKE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE
    },
    [Pokemon_1.Pkm.GALARIAN_SLOWBRO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.PSYCHIC_MELEE
    },
    [Pokemon_1.Pkm.GALARIAN_SLOWKING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.POISON_RANGE
    },
    [Pokemon_1.Pkm.WIGLETT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.WUGTRIO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.FLUTTER_MANE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GHOST_RANGE
    },
    [Pokemon_1.Pkm.WALKING_WAKE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.DRAGON_MELEE,
        hitSprite: Animation_1.HitSprite.WILD_HIT
    },
    [Pokemon_1.Pkm.ORTHWORM]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE,
        hurt: Animation_1.AnimationType.Charge
    },
    [Pokemon_1.Pkm.IRON_THORNS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE
    },
    [Pokemon_1.Pkm.TADBULB]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Hover,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE
    },
    [Pokemon_1.Pkm.BELLIBOLT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE
    },
    [Pokemon_1.Pkm.PINCURCHIN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shock,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE
    },
    [Pokemon_1.Pkm.MUDBRAY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE
    },
    [Pokemon_1.Pkm.MUDSDALE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE
    },
    [Pokemon_1.Pkm.SKIDDO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE
    },
    [Pokemon_1.Pkm.GOGOAT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.GRASS_MELEE
    },
    [Pokemon_1.Pkm.BUNNELBY]: {
        attack: Animation_1.AnimationType.QuickStrike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.DIGGERSBY]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.SCATTERBUG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.SPEWPA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.VIVILLON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_ICY_SNOW]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_POLAR]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_TUNDRA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_CONTINENTAL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_GARDEN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_ELEGANT]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_MODERN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_MARINE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_ARCHIPELAGO]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_HIGH_PLAINS]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_SANDSTORM]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_RIVER]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_MONSOON]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_SAVANNA]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_SUN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_OCEAN]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_JUNGLE]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_FANCY]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.VIVILLON_POKE_BALL]: {
        attack: Animation_1.AnimationType.Shoot,
        ability: Animation_1.AnimationType.FlapAround,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE
    },
    [Pokemon_1.Pkm.LECHONK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.OINKOLOGNE_MALE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.WOOLOO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.DUBWOOL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.YAMPER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE
    },
    [Pokemon_1.Pkm.BOLTUND]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shock,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ELECTRIC_MELEE
    },
    [Pokemon_1.Pkm.GREAT_TUSK]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.GROUND_MELEE
    },
    [Pokemon_1.Pkm.FINIZEN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.PALAFIN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Twirl,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.PALAFIN_HERO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.SpAttack,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.MAREANIE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE
    },
    [Pokemon_1.Pkm.TOXAPEX]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.POISON_MELEE,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.DUCKLETT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.SWANNA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.FLYING_RANGE
    },
    [Pokemon_1.Pkm.DONDOZO]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.RearUp,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.TATSUGIRI_CURLY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.TATSUGIRI_DROOPY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.TATSUGIRI_STRETCHY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.SpAttack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.WATER_MELEE
    },
    [Pokemon_1.Pkm.CETODDLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Emit,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE
    },
    [Pokemon_1.Pkm.CETITAN]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Emit,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE
    },
    [Pokemon_1.Pkm.BERGMITE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Rumble,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE
    },
    [Pokemon_1.Pkm.AVALUGG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Emit,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.HISUI_AVALUGG]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Emit,
        attackSprite: Animation_1.AttackSprite.ROCK_MELEE,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.KARRABLAST]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.ESCAVALIER]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Jab,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE
    },
    [Pokemon_1.Pkm.EISCUE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE
    },
    [Pokemon_1.Pkm.EISCUE_NOICE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.ICE_MELEE
    },
    [Pokemon_1.Pkm.DWEBBLE]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Pose,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE
    },
    [Pokemon_1.Pkm.CRUSTLE]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.SKWOVET]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        eat: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.GREEDENT]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Emit,
        emote: Animation_1.AnimationType.Shoot,
        eat: Animation_1.AnimationType.Charge,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE,
        shinyUnavailable: true
    },
    [Pokemon_1.Pkm.QUAXLY]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Appeal,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE
    },
    [Pokemon_1.Pkm.QUAXWELL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Kick,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE
    },
    [Pokemon_1.Pkm.QUAQUAVAL]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.FIGHTING_MELEE
    },
    [Pokemon_1.Pkm.KOMALA]: {
        attack: Animation_1.AnimationType.Strike,
        ability: Animation_1.AnimationType.Charge,
        emote: Animation_1.AnimationType.Sleep,
        attackSprite: Animation_1.AttackSprite.NORMAL_MELEE
    },
    [Pokemon_1.Pkm.TAROUNTULA]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Attack,
        emote: Animation_1.AnimationType.Attack,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.SPIDOPS]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Shoot,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_RANGE,
        hitSprite: Animation_1.HitSprite.BUG_HIT
    },
    [Pokemon_1.Pkm.SLITHER_WING]: {
        attack: Animation_1.AnimationType.Attack,
        ability: Animation_1.AnimationType.Swing,
        emote: Animation_1.AnimationType.Shoot,
        attackSprite: Animation_1.AttackSprite.BUG_MELEE
    }
};
//# sourceMappingURL=pokemon-animations.js.map