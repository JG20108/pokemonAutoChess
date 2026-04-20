"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyEffects = exports.Effects = void 0;
const schema_1 = require("@colyseus/schema");
const config_1 = require("../config");
const Ability_1 = require("../types/enum/Ability");
const Effect_1 = require("../types/enum/Effect");
const Pokemon_1 = require("../types/enum/Pokemon");
const Synergy_1 = require("../types/enum/Synergy");
const board_1 = require("../utils/board");
const schemas_1 = require("../utils/schemas");
class Effects extends schema_1.SetSchema {
    update(synergies, board) {
        this.clear();
        Synergy_1.SynergyArray.forEach((synergy) => {
            for (let i = config_1.SynergyTriggers[synergy].length; i >= 0; i--) {
                const v = config_1.SynergyTriggers[synergy][i];
                const s = synergies.get(synergy);
                if (s && s >= v) {
                    this.add(exports.SynergyEffects[synergy][i]);
                    break;
                }
            }
        });
        board.forEach((p) => {
            if (!(0, board_1.isOnBench)(p)) {
                if (p.skill === Ability_1.Ability.GRASSY_SURGE) {
                    this.add(Effect_1.EffectEnum.GRASSY_TERRAIN);
                }
                if (p.skill === Ability_1.Ability.MISTY_SURGE) {
                    this.add(Effect_1.EffectEnum.MISTY_TERRAIN);
                }
                if (p.skill === Ability_1.Ability.ELECTRIC_SURGE) {
                    this.add(Effect_1.EffectEnum.ELECTRIC_TERRAIN);
                }
                if (p.skill === Ability_1.Ability.PSYCHIC_SURGE) {
                    this.add(Effect_1.EffectEnum.PSYCHIC_TERRAIN);
                }
            }
            if (p.name === Pokemon_1.Pkm.FALINKS_BRASS) {
                const nbTroopers = (0, schemas_1.values)(board).filter((p) => p.name === Pokemon_1.Pkm.FALINKS_TROOPER).length;
                if (nbTroopers < 6)
                    this.add(Effect_1.EffectEnum.FALINKS_BRASS);
                else
                    this.delete(Effect_1.EffectEnum.FALINKS_BRASS);
            }
        });
    }
}
exports.Effects = Effects;
exports.SynergyEffects = {
    [Synergy_1.Synergy.NORMAL]: [
        Effect_1.EffectEnum.STAMINA,
        Effect_1.EffectEnum.STRENGTH,
        Effect_1.EffectEnum.ENDURE,
        Effect_1.EffectEnum.PURE_POWER
    ],
    [Synergy_1.Synergy.GRASS]: [
        Effect_1.EffectEnum.INGRAIN,
        Effect_1.EffectEnum.GROWTH,
        Effect_1.EffectEnum.SPORE,
        Effect_1.EffectEnum.OVERGROW
    ],
    [Synergy_1.Synergy.FIRE]: [
        Effect_1.EffectEnum.FLAME_BODY,
        Effect_1.EffectEnum.WILDFIRE,
        Effect_1.EffectEnum.BLAZE,
        Effect_1.EffectEnum.DESOLATE_LAND
    ],
    [Synergy_1.Synergy.WATER]: [
        Effect_1.EffectEnum.RAIN_DANCE,
        Effect_1.EffectEnum.DRIZZLE,
        Effect_1.EffectEnum.PRIMORDIAL_SEA
    ],
    [Synergy_1.Synergy.ELECTRIC]: [
        Effect_1.EffectEnum.RISING_VOLTAGE,
        Effect_1.EffectEnum.POWER_SURGE,
        Effect_1.EffectEnum.SUPERCHARGED
    ],
    [Synergy_1.Synergy.FIGHTING]: [
        Effect_1.EffectEnum.GUTS,
        Effect_1.EffectEnum.STURDY,
        Effect_1.EffectEnum.DEFIANT,
        Effect_1.EffectEnum.JUSTIFIED
    ],
    [Synergy_1.Synergy.PSYCHIC]: [
        Effect_1.EffectEnum.PRECOGNITION,
        Effect_1.EffectEnum.AURA,
        Effect_1.EffectEnum.TRANSCENDENCE
    ],
    [Synergy_1.Synergy.DARK]: [
        Effect_1.EffectEnum.HONE_CLAWS,
        Effect_1.EffectEnum.ASSURANCE,
        Effect_1.EffectEnum.BEAT_UP
    ],
    [Synergy_1.Synergy.STEEL]: [
        Effect_1.EffectEnum.STEEL_SURGE,
        Effect_1.EffectEnum.STEEL_SPIKE,
        Effect_1.EffectEnum.CORKSCREW_CRASH,
        Effect_1.EffectEnum.MAX_MELTDOWN
    ],
    [Synergy_1.Synergy.GROUND]: [
        Effect_1.EffectEnum.TILLER,
        Effect_1.EffectEnum.DIGGER,
        Effect_1.EffectEnum.DRILLER,
        Effect_1.EffectEnum.DEEP_MINER
    ],
    [Synergy_1.Synergy.POISON]: [
        Effect_1.EffectEnum.POISONOUS,
        Effect_1.EffectEnum.VENOMOUS,
        Effect_1.EffectEnum.TOXIC
    ],
    [Synergy_1.Synergy.DRAGON]: [
        Effect_1.EffectEnum.DRAGON_ENERGY,
        Effect_1.EffectEnum.DRAGON_SCALES,
        Effect_1.EffectEnum.DRAGON_DANCE
    ],
    [Synergy_1.Synergy.FIELD]: [
        Effect_1.EffectEnum.BULK_UP,
        Effect_1.EffectEnum.RAGE,
        Effect_1.EffectEnum.ANGER_POINT
    ],
    [Synergy_1.Synergy.MONSTER]: [
        Effect_1.EffectEnum.PURSUIT,
        Effect_1.EffectEnum.BRUTAL_SWING,
        Effect_1.EffectEnum.POWER_TRIP,
        Effect_1.EffectEnum.MERCILESS
    ],
    [Synergy_1.Synergy.HUMAN]: [
        Effect_1.EffectEnum.MEDITATE,
        Effect_1.EffectEnum.FOCUS_ENERGY,
        Effect_1.EffectEnum.CALM_MIND
    ],
    [Synergy_1.Synergy.AQUATIC]: [
        Effect_1.EffectEnum.SWIFT_SWIM,
        Effect_1.EffectEnum.HYDRATION,
        Effect_1.EffectEnum.WATER_VEIL,
        Effect_1.EffectEnum.SURGE_SURFER
    ],
    [Synergy_1.Synergy.BUG]: [
        Effect_1.EffectEnum.COCOON,
        Effect_1.EffectEnum.INFESTATION,
        Effect_1.EffectEnum.HORDE,
        Effect_1.EffectEnum.HEART_OF_THE_SWARM
    ],
    [Synergy_1.Synergy.FLYING]: [
        Effect_1.EffectEnum.TAILWIND,
        Effect_1.EffectEnum.FEATHER_DANCE,
        Effect_1.EffectEnum.MAX_AIRSTREAM,
        Effect_1.EffectEnum.SKYDIVE
    ],
    [Synergy_1.Synergy.FLORA]: [
        Effect_1.EffectEnum.COTTONWEED,
        Effect_1.EffectEnum.FLYCATCHER,
        Effect_1.EffectEnum.FRAGRANT,
        Effect_1.EffectEnum.FLOWER_POWER
    ],
    [Synergy_1.Synergy.ROCK]: [
        Effect_1.EffectEnum.BATTLE_ARMOR,
        Effect_1.EffectEnum.MOUTAIN_RESISTANCE,
        Effect_1.EffectEnum.DIAMOND_STORM
    ],
    [Synergy_1.Synergy.GHOST]: [
        Effect_1.EffectEnum.CURSE_OF_VULNERABILITY,
        Effect_1.EffectEnum.CURSE_OF_WEAKNESS,
        Effect_1.EffectEnum.CURSE_OF_TORMENT,
        Effect_1.EffectEnum.CURSE_OF_FATE
    ],
    [Synergy_1.Synergy.FAIRY]: [
        Effect_1.EffectEnum.AROMATIC_MIST,
        Effect_1.EffectEnum.FAIRY_WIND,
        Effect_1.EffectEnum.STRANGE_STEAM,
        Effect_1.EffectEnum.MOON_FORCE
    ],
    [Synergy_1.Synergy.ICE]: [
        Effect_1.EffectEnum.CHILLY,
        Effect_1.EffectEnum.FROSTY,
        Effect_1.EffectEnum.FREEZING,
        Effect_1.EffectEnum.SHEER_COLD
    ],
    [Synergy_1.Synergy.FOSSIL]: [
        Effect_1.EffectEnum.ANCIENT_POWER,
        Effect_1.EffectEnum.ELDER_POWER,
        Effect_1.EffectEnum.FORGOTTEN_POWER
    ],
    [Synergy_1.Synergy.SOUND]: [Effect_1.EffectEnum.LARGO, Effect_1.EffectEnum.ALLEGRO, Effect_1.EffectEnum.PRESTO],
    [Synergy_1.Synergy.ARTIFICIAL]: [
        Effect_1.EffectEnum.DUBIOUS_DISC,
        Effect_1.EffectEnum.LINK_CABLE,
        Effect_1.EffectEnum.GOOGLE_SPECS
    ],
    [Synergy_1.Synergy.BABY]: [
        Effect_1.EffectEnum.HATCHER,
        Effect_1.EffectEnum.BREEDER,
        Effect_1.EffectEnum.GOLDEN_EGGS
    ],
    [Synergy_1.Synergy.LIGHT]: [
        Effect_1.EffectEnum.SHINING_RAY,
        Effect_1.EffectEnum.LIGHT_PULSE,
        Effect_1.EffectEnum.ETERNAL_LIGHT,
        Effect_1.EffectEnum.MAX_ILLUMINATION
    ],
    [Synergy_1.Synergy.WILD]: [
        Effect_1.EffectEnum.QUICK_FEET,
        Effect_1.EffectEnum.RUN_AWAY,
        Effect_1.EffectEnum.HUSTLE,
        Effect_1.EffectEnum.BERSERK
    ],
    [Synergy_1.Synergy.AMORPHOUS]: [
        Effect_1.EffectEnum.FLUID,
        Effect_1.EffectEnum.SHAPELESS,
        Effect_1.EffectEnum.ETHEREAL
    ],
    [Synergy_1.Synergy.GOURMET]: [
        Effect_1.EffectEnum.APPETIZER,
        Effect_1.EffectEnum.LUNCH_BREAK,
        Effect_1.EffectEnum.BANQUET
    ]
};
//# sourceMappingURL=effects.js.map