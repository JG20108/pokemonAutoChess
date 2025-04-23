"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyEffects = exports.Effects = void 0;
const schema_1 = require("@colyseus/schema");
const Config_1 = require("../types/Config");
const Ability_1 = require("../types/enum/Ability");
const Effect_1 = require("../types/enum/Effect");
const Synergy_1 = require("../types/enum/Synergy");
const board_1 = require("../utils/board");
class Effects extends schema_1.SetSchema {
    update(synergies, board) {
        this.clear();
        Object.values(Synergy_1.Synergy).forEach((synergy) => {
            for (let i = Config_1.SynergyTriggers[synergy].length; i >= 0; i--) {
                const v = Config_1.SynergyTriggers[synergy][i];
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
                    this.add(Effect_1.Effect.GRASSY_TERRAIN);
                }
                if (p.skill === Ability_1.Ability.MISTY_SURGE) {
                    this.add(Effect_1.Effect.MISTY_TERRAIN);
                }
                if (p.skill === Ability_1.Ability.ELECTRIC_SURGE) {
                    this.add(Effect_1.Effect.ELECTRIC_TERRAIN);
                }
                if (p.skill === Ability_1.Ability.PSYCHIC_SURGE) {
                    this.add(Effect_1.Effect.PSYCHIC_TERRAIN);
                }
            }
        });
    }
}
exports.Effects = Effects;
exports.SynergyEffects = {
    [Synergy_1.Synergy.NORMAL]: [
        Effect_1.Effect.STAMINA,
        Effect_1.Effect.STRENGTH,
        Effect_1.Effect.ENDURE,
        Effect_1.Effect.PURE_POWER
    ],
    [Synergy_1.Synergy.GRASS]: [Effect_1.Effect.INGRAIN, Effect_1.Effect.GROWTH, Effect_1.Effect.SPORE],
    [Synergy_1.Synergy.FIRE]: [
        Effect_1.Effect.BLAZE,
        Effect_1.Effect.VICTORY_STAR,
        Effect_1.Effect.DROUGHT,
        Effect_1.Effect.DESOLATE_LAND
    ],
    [Synergy_1.Synergy.WATER]: [Effect_1.Effect.RAIN_DANCE, Effect_1.Effect.DRIZZLE, Effect_1.Effect.PRIMORDIAL_SEA],
    [Synergy_1.Synergy.ELECTRIC]: [
        Effect_1.Effect.RISING_VOLTAGE,
        Effect_1.Effect.OVERDRIVE,
        Effect_1.Effect.POWER_SURGE
    ],
    [Synergy_1.Synergy.FIGHTING]: [
        Effect_1.Effect.GUTS,
        Effect_1.Effect.STURDY,
        Effect_1.Effect.DEFIANT,
        Effect_1.Effect.JUSTIFIED
    ],
    [Synergy_1.Synergy.PSYCHIC]: [Effect_1.Effect.AMNESIA, Effect_1.Effect.LIGHT_SCREEN, Effect_1.Effect.EERIE_SPELL],
    [Synergy_1.Synergy.DARK]: [Effect_1.Effect.HONE_CLAWS, Effect_1.Effect.ASSURANCE, Effect_1.Effect.BEAT_UP],
    [Synergy_1.Synergy.STEEL]: [
        Effect_1.Effect.STEEL_SURGE,
        Effect_1.Effect.STEEL_SPIKE,
        Effect_1.Effect.CORKSCREW_CRASH,
        Effect_1.Effect.MAX_MELTDOWN
    ],
    [Synergy_1.Synergy.GROUND]: [
        Effect_1.Effect.TILLER,
        Effect_1.Effect.DIGGER,
        Effect_1.Effect.DRILLER,
        Effect_1.Effect.DEEP_MINER
    ],
    [Synergy_1.Synergy.POISON]: [Effect_1.Effect.POISONOUS, Effect_1.Effect.VENOMOUS, Effect_1.Effect.TOXIC],
    [Synergy_1.Synergy.DRAGON]: [
        Effect_1.Effect.DRAGON_ENERGY,
        Effect_1.Effect.DRAGON_SCALES,
        Effect_1.Effect.DRAGON_DANCE
    ],
    [Synergy_1.Synergy.FIELD]: [Effect_1.Effect.BULK_UP, Effect_1.Effect.RAGE, Effect_1.Effect.ANGER_POINT],
    [Synergy_1.Synergy.MONSTER]: [
        Effect_1.Effect.PURSUIT,
        Effect_1.Effect.BRUTAL_SWING,
        Effect_1.Effect.POWER_TRIP,
        Effect_1.Effect.MERCILESS
    ],
    [Synergy_1.Synergy.HUMAN]: [Effect_1.Effect.MEDITATE, Effect_1.Effect.FOCUS_ENERGY, Effect_1.Effect.CALM_MIND],
    [Synergy_1.Synergy.AQUATIC]: [Effect_1.Effect.SWIFT_SWIM, Effect_1.Effect.HYDRATION, Effect_1.Effect.WATER_VEIL],
    [Synergy_1.Synergy.BUG]: [
        Effect_1.Effect.COCOON,
        Effect_1.Effect.INFESTATION,
        Effect_1.Effect.HORDE,
        Effect_1.Effect.HEART_OF_THE_SWARM
    ],
    [Synergy_1.Synergy.FLYING]: [
        Effect_1.Effect.TAILWIND,
        Effect_1.Effect.FEATHER_DANCE,
        Effect_1.Effect.MAX_AIRSTREAM,
        Effect_1.Effect.SKYDIVE
    ],
    [Synergy_1.Synergy.FLORA]: [
        Effect_1.Effect.ODD_FLOWER,
        Effect_1.Effect.GLOOM_FLOWER,
        Effect_1.Effect.VILE_FLOWER,
        Effect_1.Effect.SUN_FLOWER
    ],
    [Synergy_1.Synergy.ROCK]: [
        Effect_1.Effect.BATTLE_ARMOR,
        Effect_1.Effect.MOUTAIN_RESISTANCE,
        Effect_1.Effect.DIAMOND_STORM
    ],
    [Synergy_1.Synergy.GHOST]: [
        Effect_1.Effect.CURSE_OF_VULNERABILITY,
        Effect_1.Effect.CURSE_OF_WEAKNESS,
        Effect_1.Effect.CURSE_OF_TORMENT,
        Effect_1.Effect.CURSE_OF_FATE
    ],
    [Synergy_1.Synergy.FAIRY]: [
        Effect_1.Effect.AROMATIC_MIST,
        Effect_1.Effect.FAIRY_WIND,
        Effect_1.Effect.STRANGE_STEAM,
        Effect_1.Effect.MOON_FORCE
    ],
    [Synergy_1.Synergy.ICE]: [
        Effect_1.Effect.CHILLY,
        Effect_1.Effect.FROSTY,
        Effect_1.Effect.FREEZING,
        Effect_1.Effect.SHEER_COLD
    ],
    [Synergy_1.Synergy.FOSSIL]: [
        Effect_1.Effect.ANCIENT_POWER,
        Effect_1.Effect.ELDER_POWER,
        Effect_1.Effect.FORGOTTEN_POWER
    ],
    [Synergy_1.Synergy.SOUND]: [Effect_1.Effect.LARGO, Effect_1.Effect.ALLEGRO, Effect_1.Effect.PRESTO],
    [Synergy_1.Synergy.ARTIFICIAL]: [
        Effect_1.Effect.DUBIOUS_DISC,
        Effect_1.Effect.LINK_CABLE,
        Effect_1.Effect.GOOGLE_SPECS
    ],
    [Synergy_1.Synergy.BABY]: [Effect_1.Effect.HATCHER, Effect_1.Effect.BREEDER, Effect_1.Effect.GOLDEN_EGGS],
    [Synergy_1.Synergy.LIGHT]: [
        Effect_1.Effect.SHINING_RAY,
        Effect_1.Effect.LIGHT_PULSE,
        Effect_1.Effect.ETERNAL_LIGHT,
        Effect_1.Effect.MAX_ILLUMINATION
    ],
    [Synergy_1.Synergy.WILD]: [
        Effect_1.Effect.QUICK_FEET,
        Effect_1.Effect.RUN_AWAY,
        Effect_1.Effect.HUSTLE,
        Effect_1.Effect.BERSERK
    ],
    [Synergy_1.Synergy.AMORPHOUS]: [Effect_1.Effect.FLUID, Effect_1.Effect.SHAPELESS, Effect_1.Effect.ETHEREAL],
    [Synergy_1.Synergy.GOURMET]: [Effect_1.Effect.APPETIZER, Effect_1.Effect.LUNCH_BREAK, Effect_1.Effect.BANQUET]
};
//# sourceMappingURL=effects.js.map