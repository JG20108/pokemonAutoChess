"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackSpriteScale = exports.HitSprite = exports.AttackSprite = exports.AnimationOriented = exports.AnimationType = void 0;
var AnimationType;
(function (AnimationType) {
    AnimationType["Idle"] = "Idle";
    AnimationType["Walk"] = "Walk";
    AnimationType["Sleep"] = "Sleep";
    AnimationType["Hurt"] = "Hurt";
    AnimationType["Attack"] = "Attack";
    AnimationType["Charge"] = "Charge";
    AnimationType["Shoot"] = "Shoot";
    AnimationType["Strike"] = "Strike";
    AnimationType["Chop"] = "Chop";
    AnimationType["Scratch"] = "Scratch";
    AnimationType["Punch"] = "Punch";
    AnimationType["Slap"] = "Slap";
    AnimationType["Slice"] = "Slice";
    AnimationType["MultiScratch"] = "MultiScratch";
    AnimationType["MultiStrike"] = "MultiStrike";
    AnimationType["Uppercut"] = "Uppercut";
    AnimationType["Ricochet"] = "Ricochet";
    AnimationType["Bite"] = "Bite";
    AnimationType["Shake"] = "Shake";
    AnimationType["Jab"] = "Jab";
    AnimationType["Kick"] = "Kick";
    AnimationType["Lick"] = "Lick";
    AnimationType["Slam"] = "Slam";
    AnimationType["Stomp"] = "Stomp";
    AnimationType["Appeal"] = "Appeal";
    AnimationType["Dance"] = "Dance";
    AnimationType["Twirl"] = "Twirl";
    AnimationType["TailWhip"] = "TailWhip";
    AnimationType["Sing"] = "Sing";
    AnimationType["Sound"] = "Sound";
    AnimationType["Rumble"] = "Rumble";
    AnimationType["FlapAround"] = "FlapAround";
    AnimationType["Gas"] = "Gas";
    AnimationType["Shock"] = "Shock";
    AnimationType["Emit"] = "Emit";
    AnimationType["SpAttack"] = "SpAttack";
    AnimationType["Withdraw"] = "Withdraw";
    AnimationType["RearUp"] = "RearUp";
    AnimationType["Swell"] = "Swell";
    AnimationType["Swing"] = "Swing";
    AnimationType["Double"] = "Double";
    AnimationType["Rotate"] = "Rotate";
    AnimationType["Hop"] = "Hop";
    AnimationType["Hover"] = "Hover";
    AnimationType["QuickStrike"] = "QuickStrike";
    AnimationType["EventSleep"] = "EventSleep";
    AnimationType["Wake"] = "Wake";
    AnimationType["Eat"] = "Eat";
    AnimationType["Tumble"] = "Tumble";
    AnimationType["Pose"] = "Pose";
    AnimationType["Pull"] = "Pull";
    AnimationType["Pain"] = "Pain";
    AnimationType["Float"] = "Float";
    AnimationType["DeepBreath"] = "DeepBreath";
    AnimationType["Nod"] = "Nod";
    AnimationType["Sit"] = "Sit";
    AnimationType["LookUp"] = "LookUp";
    AnimationType["Sink"] = "Sink";
    AnimationType["Trip"] = "Trip";
    AnimationType["Laying"] = "Laying";
    AnimationType["LeapForth"] = "LeapForth";
    AnimationType["Head"] = "Head";
    AnimationType["Cringe"] = "Cringe";
    AnimationType["LostBalance"] = "LostBalance";
    AnimationType["TumbleBack"] = "TumbleBack";
    AnimationType["HitGround"] = "HitGround";
    AnimationType["Faint"] = "Faint";
    AnimationType["Fainted"] = "Fainted";
    AnimationType["StandingUp"] = "StandingUp";
    AnimationType["DigIn"] = "DigIn";
    AnimationType["DigOut"] = "DigOut";
    AnimationType["Wiggle"] = "Wiggle";
    AnimationType["Yawn"] = "Yawn";
    AnimationType["RaiseArms"] = "RaiseArms";
    AnimationType["CarefulWalk"] = "CarefulWalk";
    AnimationType["Injured"] = "Injured";
    AnimationType["Jump"] = "Jump";
    AnimationType["Roar"] = "Roar";
    AnimationType["Wave"] = "Wave";
    AnimationType["Cry"] = "Cry";
    AnimationType["Bow"] = "Bow";
    AnimationType["Special0"] = "Special0";
    AnimationType["Special1"] = "Special1";
    AnimationType["Special2"] = "Special2";
    AnimationType["Special3"] = "Special3";
    AnimationType["Special4"] = "Special4";
    AnimationType["Special5"] = "Special5";
    AnimationType["Special6"] = "Special6";
    AnimationType["Special7"] = "Special7";
    AnimationType["Special8"] = "Special8";
    AnimationType["Special9"] = "Special9";
    AnimationType["Special10"] = "Special10";
    AnimationType["Special11"] = "Special11";
    AnimationType["Special12"] = "Special12";
    AnimationType["Special13"] = "Special13";
    AnimationType["Special14"] = "Special14";
    AnimationType["Special15"] = "Special15";
    AnimationType["Special16"] = "Special16";
    AnimationType["Special17"] = "Special17";
    AnimationType["Special18"] = "Special18";
    AnimationType["Special19"] = "Special19";
    AnimationType["Special20"] = "Special20";
    AnimationType["Special21"] = "Special21";
    AnimationType["Special22"] = "Special22";
    AnimationType["Special23"] = "Special23";
    AnimationType["Special24"] = "Special24";
    AnimationType["Special25"] = "Special25";
    AnimationType["Special26"] = "Special26";
    AnimationType["Special27"] = "Special27";
    AnimationType["Special28"] = "Special28";
    AnimationType["Special29"] = "Special29";
    AnimationType["Special30"] = "Special30";
    AnimationType["Special31"] = "Special31";
})(AnimationType || (exports.AnimationType = AnimationType = {}));
exports.AnimationOriented = {
    [AnimationType.Idle]: true,
    [AnimationType.Walk]: true,
    [AnimationType.Sleep]: false,
    [AnimationType.Hurt]: true,
    [AnimationType.Attack]: true,
    [AnimationType.Charge]: true,
    [AnimationType.Shoot]: true,
    [AnimationType.Strike]: true,
    [AnimationType.Chop]: true,
    [AnimationType.Scratch]: true,
    [AnimationType.Punch]: true,
    [AnimationType.Slap]: true,
    [AnimationType.Slice]: true,
    [AnimationType.MultiScratch]: true,
    [AnimationType.MultiStrike]: true,
    [AnimationType.Uppercut]: true,
    [AnimationType.Ricochet]: true,
    [AnimationType.Bite]: true,
    [AnimationType.Shake]: true,
    [AnimationType.Jab]: true,
    [AnimationType.Kick]: true,
    [AnimationType.Lick]: true,
    [AnimationType.Slam]: true,
    [AnimationType.Stomp]: true,
    [AnimationType.Appeal]: true,
    [AnimationType.Dance]: true,
    [AnimationType.Twirl]: true,
    [AnimationType.TailWhip]: false,
    [AnimationType.Sing]: false,
    [AnimationType.Sound]: false,
    [AnimationType.Rumble]: true,
    [AnimationType.FlapAround]: true,
    [AnimationType.Gas]: true,
    [AnimationType.Shock]: true,
    [AnimationType.Emit]: true,
    [AnimationType.SpAttack]: true,
    [AnimationType.Withdraw]: true,
    [AnimationType.RearUp]: true,
    [AnimationType.Swell]: true,
    [AnimationType.Swing]: true,
    [AnimationType.Double]: true,
    [AnimationType.Rotate]: true,
    [AnimationType.Hop]: true,
    [AnimationType.Hover]: true,
    [AnimationType.QuickStrike]: true,
    [AnimationType.EventSleep]: false,
    [AnimationType.Wake]: false,
    [AnimationType.Eat]: false,
    [AnimationType.Tumble]: false,
    [AnimationType.Pose]: false,
    [AnimationType.Pull]: false,
    [AnimationType.Pain]: false,
    [AnimationType.Float]: false,
    [AnimationType.DeepBreath]: false,
    [AnimationType.Nod]: true,
    [AnimationType.Sit]: false,
    [AnimationType.LookUp]: false,
    [AnimationType.Sink]: false,
    [AnimationType.Trip]: false,
    [AnimationType.Laying]: false,
    [AnimationType.LeapForth]: false,
    [AnimationType.Head]: false,
    [AnimationType.Cringe]: false,
    [AnimationType.LostBalance]: false,
    [AnimationType.TumbleBack]: false,
    [AnimationType.HitGround]: false,
    [AnimationType.Faint]: false,
    [AnimationType.Fainted]: false,
    [AnimationType.StandingUp]: false,
    [AnimationType.DigIn]: false,
    [AnimationType.DigOut]: false,
    [AnimationType.Wiggle]: false,
    [AnimationType.Yawn]: false,
    [AnimationType.RaiseArms]: false,
    [AnimationType.CarefulWalk]: false,
    [AnimationType.Injured]: false,
    [AnimationType.Jump]: false,
    [AnimationType.Roar]: false,
    [AnimationType.Wave]: false,
    [AnimationType.Cry]: false,
    [AnimationType.Bow]: false,
    [AnimationType.Special0]: false,
    [AnimationType.Special1]: false,
    [AnimationType.Special2]: false,
    [AnimationType.Special3]: false,
    [AnimationType.Special4]: false,
    [AnimationType.Special5]: false,
    [AnimationType.Special6]: false,
    [AnimationType.Special7]: false,
    [AnimationType.Special8]: false,
    [AnimationType.Special9]: false,
    [AnimationType.Special10]: false,
    [AnimationType.Special11]: false,
    [AnimationType.Special12]: false,
    [AnimationType.Special13]: false,
    [AnimationType.Special14]: false,
    [AnimationType.Special15]: false,
    [AnimationType.Special16]: false,
    [AnimationType.Special17]: false,
    [AnimationType.Special18]: false,
    [AnimationType.Special19]: false,
    [AnimationType.Special20]: false,
    [AnimationType.Special21]: false,
    [AnimationType.Special22]: false,
    [AnimationType.Special23]: false,
    [AnimationType.Special24]: false,
    [AnimationType.Special25]: false,
    [AnimationType.Special26]: false,
    [AnimationType.Special27]: false,
    [AnimationType.Special28]: false,
    [AnimationType.Special29]: false,
    [AnimationType.Special30]: false,
    [AnimationType.Special31]: false
};
var AttackSprite;
(function (AttackSprite) {
    AttackSprite["BUG_MELEE"] = "BUG/melee";
    AttackSprite["BUG_RANGE"] = "BUG/range";
    AttackSprite["DARK_MELEE"] = "DARK/melee";
    AttackSprite["DARK_RANGE"] = "DARK/range";
    AttackSprite["DRAGON_MELEE"] = "DRAGON/melee";
    AttackSprite["DRAGON_RANGE"] = "DRAGON/range";
    AttackSprite["DRAGON_GREEN_RANGE"] = "DRAGON_GREEN/range";
    AttackSprite["ELECTRIC_MELEE"] = "ELECTRIC/melee";
    AttackSprite["ELECTRIC_RANGE"] = "ELECTRIC/range";
    AttackSprite["FAIRY_MELEE"] = "FAIRY/melee";
    AttackSprite["FAIRY_RANGE"] = "FAIRY/range";
    AttackSprite["FIGHTING_MELEE"] = "FIGHTING/melee";
    AttackSprite["FIGHTING_RANGE"] = "FIGHTING/range";
    AttackSprite["FIRE_MELEE"] = "FIRE/melee";
    AttackSprite["FIRE_RANGE"] = "FIRE/range";
    AttackSprite["FLORA_RANGE"] = "FLORA/range";
    AttackSprite["FLYING_MELEE"] = "FLYING/melee";
    AttackSprite["FLYING_RANGE"] = "FLYING/range";
    AttackSprite["GHOST_MELEE"] = "GHOST/melee";
    AttackSprite["GHOST_RANGE"] = "GHOST/range";
    AttackSprite["GRASS_MELEE"] = "GRASS/melee";
    AttackSprite["GRASS_RANGE"] = "GRASS/range";
    AttackSprite["GROUND_MELEE"] = "GROUND/melee";
    AttackSprite["ICE_MELEE"] = "ICE/melee";
    AttackSprite["ICE_RANGE"] = "ICE/range";
    AttackSprite["NORMAL_MELEE"] = "NORMAL/melee";
    AttackSprite["POISON_MELEE"] = "POISON/melee";
    AttackSprite["POISON_RANGE"] = "POISON/range";
    AttackSprite["PSYCHIC_MELEE"] = "PSYCHIC/melee";
    AttackSprite["PSYCHIC_RANGE"] = "PSYCHIC/range";
    AttackSprite["WATER_MELEE"] = "WATER/melee";
    AttackSprite["WATER_RANGE"] = "WATER/range";
    AttackSprite["ROCK_MELEE"] = "ROCK/melee";
    AttackSprite["ROCK_RANGE"] = "ROCK/range";
    AttackSprite["SOUND_RANGE"] = "SOUND/range";
    AttackSprite["STEEL_MELEE"] = "STEEL/melee";
    AttackSprite["STEEL_RANGE"] = "STEEL/range";
    AttackSprite["WILD_MELEE"] = "WILD/melee";
})(AttackSprite || (exports.AttackSprite = AttackSprite = {}));
var HitSprite;
(function (HitSprite) {
    HitSprite["NORMAL_HIT"] = "NORMAL/hit";
    HitSprite["NORMAL_HIT2"] = "NORMAL/hit2";
    HitSprite["NORMAL_HIT3"] = "NORMAL/hit3";
    HitSprite["NORMAL_HIT4"] = "NORMAL/hit4";
    HitSprite["ICE_HIT"] = "ICE/hit";
    HitSprite["GRASS_HIT"] = "GRASS/hit";
    HitSprite["DARK_HIT"] = "DARK/hit";
    HitSprite["FAIRY_HIT"] = "FAIRY/hit";
    HitSprite["WATER_HIT"] = "WATER/hit";
    HitSprite["FIRE_HIT"] = "FIRE/hit";
    HitSprite["GROUND_HIT"] = "GROUND/hit";
    HitSprite["ROCK_HIT"] = "ROCK/hit";
    HitSprite["SOUND_HIT"] = "SOUND/hit";
    HitSprite["ELECTRIC_HIT"] = "ELECTRIC/hit";
    HitSprite["STEEL_HIT"] = "STEEL/hit";
    HitSprite["FIGHTING_HIT"] = "FIGHTING/hit";
    HitSprite["FLYING_HIT"] = "FLYING/hit";
    HitSprite["BUG_HIT"] = "BUG/hit";
    HitSprite["POISON_HIT"] = "POISON/hit";
    HitSprite["WILD_HIT"] = "WILD/hit";
    HitSprite["GHOST_HIT"] = "GHOST/hit";
    HitSprite["PSYCHIC_HIT"] = "PSYCHIC/hit";
})(HitSprite || (exports.HitSprite = HitSprite = {}));
exports.AttackSpriteScale = {
    "BUG/melee": [1.5, 1.5],
    "BUG/range": [2, 2],
    "BUG/hit": [2, 2],
    "DARK/melee": [1.5, 1.5],
    "DARK/range": [1.5, 1.5],
    "DARK/hit": [2, 2],
    "DRAGON/melee": [1, 1],
    "DRAGON/range": [2, 2],
    "DRAGON_GREEN/range": [2, 2],
    "ELECTRIC/melee": [1, 1],
    "ELECTRIC/range": [2, 2],
    "ELECTRIC/hit": [2, 2],
    "FAIRY/melee": [2, 2],
    "FAIRY/range": [2, 2],
    "FAIRY/hit": [2, 2],
    "FIGHTING/melee": [2, 2],
    "FIGHTING/range": [2, 2],
    "FIGHTING/hit": [1, 1],
    "FIRE/melee": [1.5, 1.5],
    "FIRE/range": [2, 2],
    "FIRE/hit": [1.5, 1.5],
    "FLORA/range": [1.5, 1.5],
    "FLYING/melee": [1, 1],
    "FLYING/range": [1.5, 1.5],
    "FLYING/hit": [1, 1],
    "GHOST/melee": [1, 1],
    "GHOST/range": [1.5, 1.5],
    "GHOST/hit": [1, 1],
    "GRASS/melee": [1, 1],
    "GRASS/range": [3, 3],
    "GRASS/hit": [1, 1],
    "GROUND/melee": [1, 1],
    "GROUND/hit": [1, 1],
    "ICE/melee": [1, 1],
    "ICE/range": [1.5, 1.5],
    "ICE/hit": [2, 2],
    "NORMAL/melee": [1, 1],
    "NORMAL/hit": [2, 2],
    "NORMAL/hit2": [2, 2],
    "NORMAL/hit3": [2, 2],
    "NORMAL/hit4": [2, 2],
    "POISON/melee": [2, 2],
    "POISON/range": [1.5, 1.5],
    "POISON/hit": [1.5, 1.5],
    "PSYCHIC/melee": [1.5, 1.5],
    "PSYCHIC/range": [2, 2],
    "PSYCHIC/hit": [1.5, 1.5],
    "ROCK/melee": [1.5, 1.5],
    "ROCK/range": [2, 2],
    "ROCK/hit": [1, 1],
    "STEEL/melee": [1.5, 1.5],
    "STEEL/range": [2, 2],
    "STEEL/hit": [1, 1],
    "SOUND/range": [2, 2],
    "SOUND/hit": [1, 1],
    "WATER/melee": [1.5, 1.5],
    "WATER/range": [3, 3],
    "WATER/hit": [3, 3],
    "WILD/melee": [2, 2],
    "WILD/hit": [1, 1]
};
//# sourceMappingURL=Animation.js.map