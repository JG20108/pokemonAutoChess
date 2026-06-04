import type Phaser from "phaser";
import type PokemonSprite from "../public/src/game/components/pokemon";
import type { DebugScene } from "../public/src/game/scenes/debug-scene";
import type GameScene from "../public/src/game/scenes/game-scene";
import type { Ability } from "./enum/Ability";
import type { Orientation } from "./enum/Game";
export declare enum AnimationType {
    Idle = "Idle",
    Walk = "Walk",
    Sleep = "Sleep",
    Hurt = "Hurt",
    Attack = "Attack",
    Charge = "Charge",
    Shoot = "Shoot",
    Strike = "Strike",
    Chop = "Chop",
    Scratch = "Scratch",
    Punch = "Punch",
    Slap = "Slap",
    Slice = "Slice",
    MultiScratch = "MultiScratch",
    MultiStrike = "MultiStrike",
    Uppercut = "Uppercut",
    Ricochet = "Ricochet",
    Bite = "Bite",
    Shake = "Shake",
    Jab = "Jab",
    Kick = "Kick",
    Lick = "Lick",
    Slam = "Slam",
    Stomp = "Stomp",
    Appeal = "Appeal",
    Dance = "Dance",
    Twirl = "Twirl",
    TailWhip = "TailWhip",
    Sing = "Sing",
    Sound = "Sound",
    Rumble = "Rumble",
    FlapAround = "FlapAround",
    Gas = "Gas",
    Shock = "Shock",
    Emit = "Emit",
    SpAttack = "SpAttack",
    Withdraw = "Withdraw",
    RearUp = "RearUp",
    Swell = "Swell",
    Swing = "Swing",
    Double = "Double",
    Rotate = "Rotate",
    Hop = "Hop",
    Hover = "Hover",
    QuickStrike = "QuickStrike",
    EventSleep = "EventSleep",
    Wake = "Wake",
    Eat = "Eat",
    Tumble = "Tumble",
    Pose = "Pose",
    Pull = "Pull",
    Pain = "Pain",
    Float = "Float",
    DeepBreath = "DeepBreath",
    Nod = "Nod",
    Sit = "Sit",
    LookUp = "LookUp",
    Sink = "Sink",
    Trip = "Trip",
    Laying = "Laying",
    LeapForth = "LeapForth",
    Head = "Head",
    Cringe = "Cringe",
    LostBalance = "LostBalance",
    TumbleBack = "TumbleBack",
    HitGround = "HitGround",
    Faint = "Faint",
    Fainted = "Fainted",
    StandingUp = "StandingUp",
    DigIn = "DigIn",
    DigOut = "DigOut",
    Wiggle = "Wiggle",
    Yawn = "Yawn",
    RaiseArms = "RaiseArms",
    CarefulWalk = "CarefulWalk",
    Injured = "Injured",
    Jump = "Jump",
    Roar = "Roar",
    Wave = "Wave",
    Cry = "Cry",
    Bow = "Bow",
    Special0 = "Special0",
    Special1 = "Special1",
    Special2 = "Special2",
    Special3 = "Special3",
    Special4 = "Special4",
    Special5 = "Special5",
    Special6 = "Special6",
    Special7 = "Special7",
    Special8 = "Special8",
    Special9 = "Special9",
    Special10 = "Special10",
    Special11 = "Special11",
    Special12 = "Special12",
    Special13 = "Special13",
    Special14 = "Special14",
    Special15 = "Special15",
    Special16 = "Special16",
    Special17 = "Special17",
    Special18 = "Special18",
    Special19 = "Special19",
    Special20 = "Special20",
    Special21 = "Special21",
    Special22 = "Special22",
    Special23 = "Special23",
    Special24 = "Special24",
    Special25 = "Special25",
    Special26 = "Special26",
    Special27 = "Special27",
    Special28 = "Special28",
    Special29 = "Special29",
    Special30 = "Special30",
    Special31 = "Special31"
}
export declare const AnimationOriented: {
    [key in AnimationType]: boolean;
};
export type PokemonAnimationConfig = {
    idle?: AnimationType;
    walk?: AnimationType;
    attack?: AnimationType;
    ability?: AnimationType;
    emote?: AnimationType;
    hop?: AnimationType;
    hurt?: AnimationType;
    sleep?: AnimationType;
    eat?: AnimationType;
    shinyUnavailable?: boolean;
    noShadow?: boolean;
    attackSprite?: AttackSprite;
    hitSprite?: HitSprite | HitSprite[];
    animationsOriented?: {
        [anim in AnimationType]?: boolean;
    };
};
export declare enum AttackSprite {
    BUG_MELEE = "BUG/melee",
    BUG_RANGE = "BUG/range",
    DARK_MELEE = "DARK/melee",
    DARK_RANGE = "DARK/range",
    DRAGON_MELEE = "DRAGON/melee",
    DRAGON_RANGE = "DRAGON/range",
    DRAGON_GREEN_RANGE = "DRAGON_GREEN/range",
    ELECTRIC_MELEE = "ELECTRIC/melee",
    ELECTRIC_RANGE = "ELECTRIC/range",
    FAIRY_MELEE = "FAIRY/melee",
    FAIRY_RANGE = "FAIRY/range",
    FIGHTING_MELEE = "FIGHTING/melee",
    FIGHTING_RANGE = "FIGHTING/range",
    FIRE_MELEE = "FIRE/melee",
    FIRE_RANGE = "FIRE/range",
    FLORA_RANGE = "FLORA/range",
    FLYING_MELEE = "FLYING/melee",
    FLYING_RANGE = "FLYING/range",
    GHOST_MELEE = "GHOST/melee",
    GHOST_RANGE = "GHOST/range",
    GRASS_MELEE = "GRASS/melee",
    GRASS_RANGE = "GRASS/range",
    GROUND_MELEE = "GROUND/melee",
    ICE_MELEE = "ICE/melee",
    ICE_RANGE = "ICE/range",
    NORMAL_MELEE = "NORMAL/melee",
    POISON_MELEE = "POISON/melee",
    POISON_RANGE = "POISON/range",
    PSYCHIC_MELEE = "PSYCHIC/melee",
    PSYCHIC_RANGE = "PSYCHIC/range",
    WATER_MELEE = "WATER/melee",
    WATER_RANGE = "WATER/range",
    ROCK_MELEE = "ROCK/melee",
    ROCK_RANGE = "ROCK/range",
    SOUND_RANGE = "SOUND/range",
    STEEL_MELEE = "STEEL/melee",
    STEEL_RANGE = "STEEL/range",
    WILD_MELEE = "WILD/melee"
}
export declare enum HitSprite {
    NORMAL_HIT = "NORMAL/hit",
    NORMAL_HIT2 = "NORMAL/hit2",
    NORMAL_HIT3 = "NORMAL/hit3",
    NORMAL_HIT4 = "NORMAL/hit4",
    ICE_HIT = "ICE/hit",
    GRASS_HIT = "GRASS/hit",
    DARK_HIT = "DARK/hit",
    FAIRY_HIT = "FAIRY/hit",
    WATER_HIT = "WATER/hit",
    FIRE_HIT = "FIRE/hit",
    GROUND_HIT = "GROUND/hit",
    ROCK_HIT = "ROCK/hit",
    SOUND_HIT = "SOUND/hit",
    ELECTRIC_HIT = "ELECTRIC/hit",
    STEEL_HIT = "STEEL/hit",
    FIGHTING_HIT = "FIGHTING/hit",
    FLYING_HIT = "FLYING/hit",
    BUG_HIT = "BUG/hit",
    POISON_HIT = "POISON/hit",
    WILD_HIT = "WILD/hit",
    GHOST_HIT = "GHOST/hit",
    PSYCHIC_HIT = "PSYCHIC/hit"
}
export declare const AttackSpriteScale: {
    [sprite in AttackSprite | HitSprite]: [number, number];
};
export interface AbilityAnimationOptions {
    textureKey?: string;
    frame?: string;
    ability?: Ability | string;
    position?: number[];
    positionOffset?: [number, number];
    scale?: number | [number, number];
    oriented?: boolean;
    rotation?: number;
    angle?: number;
    origin?: [number, number];
    depth?: number;
    tint?: number;
    tintFill?: number;
    alpha?: number;
    destroyOnComplete?: boolean;
    animOptions?: Omit<Phaser.Types.Animations.PlayAnimationConfig, "key">;
    delay?: number;
    flipX?: boolean;
    flipY?: boolean;
}
export type AbilityAnimationArgs = {
    scene: GameScene | DebugScene;
    pokemonsOnBoard: PokemonSprite[];
    ability: Ability | string;
    orientation: Orientation;
    positionX: number;
    positionY: number;
    targetX: number;
    targetY: number;
    flip: boolean;
    delay?: number;
    ap: number;
};
export type AbilityAnimation = (args: AbilityAnimationArgs) => any;
export type AbilityAnimationMaker<O = AbilityAnimationOptions> = (options: Readonly<AbilityAnimationOptions & O>) => AbilityAnimation;
