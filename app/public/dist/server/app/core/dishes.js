"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishEffects = exports.DishByPkm = void 0;
const config_1 = require("../config");
const types_1 = require("../types");
const Effect_1 = require("../types/enum/Effect");
const Item_1 = require("../types/enum/Item");
const Pokemon_1 = require("../types/enum/Pokemon");
const Synergy_1 = require("../types/enum/Synergy");
const random_1 = require("../utils/random");
const schemas_1 = require("../utils/schemas");
const abilities_1 = require("./abilities/abilities");
const effect_1 = require("./effects/effect");
exports.DishByPkm = {
    [Pokemon_1.Pkm.LICKITUNG]: Item_1.Item.RAGE_CANDY_BAR,
    [Pokemon_1.Pkm.LICKILICKY]: Item_1.Item.RAGE_CANDY_BAR,
    [Pokemon_1.Pkm.SINISTEA]: Item_1.Item.TEA,
    [Pokemon_1.Pkm.POLTEAGEIST]: Item_1.Item.TEA,
    [Pokemon_1.Pkm.CAPSAKID]: Item_1.Item.CURRY,
    [Pokemon_1.Pkm.SCOVILLAIN]: Item_1.Item.CURRY,
    [Pokemon_1.Pkm.VANILLITE]: Item_1.Item.CASTELIACONE,
    [Pokemon_1.Pkm.VANILLISH]: Item_1.Item.CASTELIACONE,
    [Pokemon_1.Pkm.VANILLUXE]: Item_1.Item.CASTELIACONE,
    [Pokemon_1.Pkm.SWIRLIX]: Item_1.Item.WHIPPED_DREAM,
    [Pokemon_1.Pkm.SLURPUFF]: Item_1.Item.WHIPPED_DREAM,
    [Pokemon_1.Pkm.APPLIN]: Item_1.Item.TART_APPLE,
    [Pokemon_1.Pkm.FLAPPLE]: Item_1.Item.TART_APPLE,
    [Pokemon_1.Pkm.APPLETUN]: Item_1.Item.SWEET_APPLE,
    [Pokemon_1.Pkm.DIPPLIN]: Item_1.Item.SIRUPY_APPLE,
    [Pokemon_1.Pkm.HYDRAPPLE]: Item_1.Item.SIRUPY_APPLE,
    [Pokemon_1.Pkm.CHERUBI]: Item_1.Item.HERBA_MYSTICA,
    [Pokemon_1.Pkm.CHERRIM]: Item_1.Item.HERBA_MYSTICA,
    [Pokemon_1.Pkm.CHERRIM_SUNLIGHT]: Item_1.Item.HERBA_MYSTICA,
    [Pokemon_1.Pkm.TROPIUS]: Item_1.Item.NANAB_BERRY,
    [Pokemon_1.Pkm.SHUCKLE]: Item_1.Item.BERRY_JUICE,
    [Pokemon_1.Pkm.COMBEE]: Item_1.Item.HONEY,
    [Pokemon_1.Pkm.VESPIQUEEN]: Item_1.Item.HONEY,
    [Pokemon_1.Pkm.CHANSEY]: Item_1.Item.NUTRITIOUS_EGG,
    [Pokemon_1.Pkm.BLISSEY]: Item_1.Item.NUTRITIOUS_EGG,
    [Pokemon_1.Pkm.NACLI]: Item_1.Item.ROCK_SALT,
    [Pokemon_1.Pkm.NACLSTACK]: Item_1.Item.ROCK_SALT,
    [Pokemon_1.Pkm.GARGANACL]: Item_1.Item.ROCK_SALT,
    [Pokemon_1.Pkm.FIDOUGH]: Item_1.Item.POFFIN,
    [Pokemon_1.Pkm.DACHSBUN]: Item_1.Item.POFFIN,
    [Pokemon_1.Pkm.MUNCHLAX]: Item_1.Item.LEFTOVERS,
    [Pokemon_1.Pkm.SNORLAX]: Item_1.Item.LEFTOVERS,
    [Pokemon_1.Pkm.MILTANK]: Item_1.Item.MOOMOO_MILK,
    [Pokemon_1.Pkm.GULPIN]: Item_1.Item.BLACK_SLUDGE,
    [Pokemon_1.Pkm.SWALOT]: Item_1.Item.BLACK_SLUDGE,
    [Pokemon_1.Pkm.BOUNSWEET]: Item_1.Item.FRUIT_JUICE,
    [Pokemon_1.Pkm.STEENEE]: Item_1.Item.FRUIT_JUICE,
    [Pokemon_1.Pkm.TSAREENA]: Item_1.Item.FRUIT_JUICE,
    [Pokemon_1.Pkm.FARFETCH_D]: Item_1.Item.LEEK,
    [Pokemon_1.Pkm.GALARIAN_FARFETCH_D]: Item_1.Item.LARGE_LEEK,
    [Pokemon_1.Pkm.SPINDA]: Item_1.Item.SPINDA_COCKTAIL,
    [Pokemon_1.Pkm.MILCERY]: Item_1.Item.SWEETS,
    [Pokemon_1.Pkm.ALCREMIE_VANILLA]: Item_1.Item.SWEETS,
    [Pokemon_1.Pkm.ALCREMIE_RUBY]: Item_1.Item.SWEETS,
    [Pokemon_1.Pkm.ALCREMIE_MATCHA]: Item_1.Item.SWEETS,
    [Pokemon_1.Pkm.ALCREMIE_MINT]: Item_1.Item.SWEETS,
    [Pokemon_1.Pkm.ALCREMIE_LEMON]: Item_1.Item.SWEETS,
    [Pokemon_1.Pkm.ALCREMIE_SALTED]: Item_1.Item.SWEETS,
    [Pokemon_1.Pkm.ALCREMIE_RUBY_SWIRL]: Item_1.Item.SWEETS,
    [Pokemon_1.Pkm.ALCREMIE_CARAMEL_SWIRL]: Item_1.Item.SWEETS,
    [Pokemon_1.Pkm.ALCREMIE_RAINBOW_SWIRL]: Item_1.Item.SWEETS,
    [Pokemon_1.Pkm.PECHARUNT]: Item_1.Item.BINDING_MOCHI,
    [Pokemon_1.Pkm.VELUZA]: Item_1.Item.SMOKED_FILET,
    [Pokemon_1.Pkm.SMOLIV]: Item_1.Item.OLIVE_OIL,
    [Pokemon_1.Pkm.DOLLIV]: Item_1.Item.OLIVE_OIL,
    [Pokemon_1.Pkm.ARBOLIVA]: Item_1.Item.OLIVE_OIL,
    [Pokemon_1.Pkm.DEERLING_SUMMER]: Item_1.Item.TEA,
    [Pokemon_1.Pkm.SAWSBUCK_SUMMER]: Item_1.Item.TEA,
    [Pokemon_1.Pkm.LECHONK]: Item_1.Item.MUSHROOMS,
    [Pokemon_1.Pkm.OINKOLOGNE_MALE]: Item_1.Item.MUSHROOMS,
    [Pokemon_1.Pkm.DONDOZO]: Item_1.Item.RICE,
    [Pokemon_1.Pkm.TATSUGIRI_CURLY]: null,
    [Pokemon_1.Pkm.TATSUGIRI_DROOPY]: null,
    [Pokemon_1.Pkm.TATSUGIRI_STRETCHY]: null,
    [Pokemon_1.Pkm.GUZZLORD]: null,
    [Pokemon_1.Pkm.SKWOVET]: Item_1.Item.BERRIES,
    [Pokemon_1.Pkm.GREEDENT]: Item_1.Item.BERRIES
};
exports.DishEffects = {
    BERRY_JUICE: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.addShield(100, entity, 0, false);
            entity.effects.add(Effect_1.EffectEnum.BERRY_JUICE);
        })
    ],
    BIG_MUSHROOM: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.addMaxHP(0.3 * entity.baseHP, entity, 0, false);
        })
    ],
    BALM_MUSHROOM: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.status.triggerRuneProtect(30000, entity, entity);
            entity.addSpeed(30, entity, 0, false);
            entity.effects.add(Effect_1.EffectEnum.BALM_MUSHROOM);
            entity.effectsSet.add(new effect_1.PeriodicEffect((entity) => {
                entity.handleHeal(0.1 * entity.maxHP, entity, 0, false);
            }, Item_1.Item.BALM_MUSHROOM, 1000));
        })
    ],
    BERRIES: [],
    BINDING_MOCHI: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.effects.add(Effect_1.EffectEnum.BINDING_MOCHI);
        }),
        new effect_1.OnHitEffect(({ attacker, target }) => {
            if (attacker.effects.has(Effect_1.EffectEnum.BINDING_MOCHI)) {
                target.status.triggerPossessed(5000, target, attacker);
                attacker.effects.delete(Effect_1.EffectEnum.BINDING_MOCHI);
            }
        })
    ],
    BLACK_SLUDGE: [
        new effect_1.OnSpawnEffect((entity) => {
            if (entity.types.has(Synergy_1.Synergy.POISON)) {
                entity.effectsSet.add(new effect_1.PeriodicEffect((entity) => {
                    entity.handleHeal(0.05 * entity.maxHP, entity, 0, false);
                }, Item_1.Item.BLACK_SLUDGE, 2000));
            }
            else {
                entity.status.triggerPoison(30000, entity, entity);
            }
        })
    ],
    CASTELIACONE: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.effects.add(Effect_1.EffectEnum.CASTELIACONE);
        }),
        new effect_1.OnHitEffect(({ attacker, target }) => {
            if (attacker.effects.has(Effect_1.EffectEnum.CASTELIACONE)) {
                target.status.triggerFreeze(5000, target, attacker);
                attacker.effects.delete(Effect_1.EffectEnum.CASTELIACONE);
            }
        })
    ],
    CURRY: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.status.triggerRage(4000, entity);
        })
    ],
    FRUIT_JUICE: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.addSpeed(50, entity, 0, false);
        })
    ],
    HEARTY_STEW: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.addMaxHP(0.3 * entity.baseHP, entity, 0, false);
            if (entity.items.has(Item_1.Item.COOKING_POT)) {
                entity.status.triggerBurn(5000, entity, entity);
            }
        })
    ],
    HERBA_MYSTICA: [],
    HERBA_MYSTICA_SWEET: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.status.addFairyField(entity);
        })
    ],
    HERBA_MYSTICA_SPICY: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.status.addPsychicField(entity);
        })
    ],
    HERBA_MYSTICA_SOUR: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.status.addElectricField(entity);
        })
    ],
    HERBA_MYSTICA_BITTER: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.status.addGrassField(entity);
        })
    ],
    HERBA_MYSTICA_SALTY: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.status.triggerRuneProtect(config_1.FIGHTING_PHASE_DURATION, entity, entity);
        })
    ],
    HONEY: [],
    LARGE_LEEK: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.effects.add(Effect_1.EffectEnum.ABILITY_CRIT);
            entity.addCritPower(100, entity, 0, false);
            if (abilities_1.AbilityStrategies[entity.skill].canCritByDefault) {
                entity.addCritPower(50, entity, 0, false);
            }
        })
    ],
    LEEK: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.effects.add(Effect_1.EffectEnum.ABILITY_CRIT);
            entity.addCritChance(50, entity, 0, false);
            if (abilities_1.AbilityStrategies[entity.skill].canCritByDefault) {
                entity.addCritPower(50, entity, 0, false);
            }
        })
    ],
    LEFTOVERS: [],
    MOOMOO_MILK: [
        new effect_1.OnDishConsumedEffect(({ entity }) => {
            entity === null || entity === void 0 ? void 0 : entity.addMaxHP(15, entity, 0, false, true);
        })
    ],
    MUSHROOMS: [],
    NUTRITIOUS_EGG: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.addAttack(0.5 * entity.baseAtk, entity, 0, false);
            entity.addDefense(0.5 * entity.baseDef, entity, 0, false);
            entity.addSpecialDefense(0.5 * entity.baseSpeDef, entity, 0, false);
        })
    ],
    OLIVE_OIL: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.addDodgeChance(0.2, entity, 0, false);
        })
    ],
    POFFIN: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.addShield(100, entity, 0, false);
            if (entity.player &&
                entity.items.has(Item_1.Item.GOLDEN_NANAB_BERRY) &&
                entity.items.has(Item_1.Item.GOLDEN_PINAP_BERRY) &&
                entity.items.has(Item_1.Item.GOLDEN_RAZZ_BERRY)) {
                entity.player.titles.add(types_1.Title.POFFIN_MASTER);
            }
            (0, schemas_1.schemaValues)(entity.items)
                .filter((item) => Item_1.Berries.includes(item))
                .forEach((item) => {
                entity.eatBerry(item, undefined, true, 0, false);
            });
        })
    ],
    RAGE_CANDY_BAR: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.addAttack(10, entity, 0, false);
        })
    ],
    ROCK_SALT: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.status.triggerRuneProtect(10000, entity, entity);
            entity.addShield(0.15 * entity.maxHP, entity, 0, false);
        })
    ],
    SANDWICH: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.types.forEach((type) => {
                switch (type) {
                    case Synergy_1.Synergy.GRASS:
                    case Synergy_1.Synergy.MONSTER:
                    case Synergy_1.Synergy.GOURMET:
                    case Synergy_1.Synergy.BUG:
                    case Synergy_1.Synergy.AMORPHOUS:
                        entity.addMaxHP(20, entity, 0, false);
                        break;
                    case Synergy_1.Synergy.NORMAL:
                    case Synergy_1.Synergy.ARTIFICIAL:
                    case Synergy_1.Synergy.DRAGON:
                    case Synergy_1.Synergy.BABY:
                        entity.addShield(30, entity, 0, false);
                        break;
                    case Synergy_1.Synergy.FIRE:
                    case Synergy_1.Synergy.STEEL:
                    case Synergy_1.Synergy.FOSSIL:
                        entity.addAttack(5, entity, 0, false);
                        break;
                    case Synergy_1.Synergy.FLYING:
                    case Synergy_1.Synergy.GHOST:
                        entity.addDodgeChance(0.05, entity, 0, false);
                        break;
                    case Synergy_1.Synergy.ELECTRIC:
                    case Synergy_1.Synergy.FIELD:
                    case Synergy_1.Synergy.WILD:
                        entity.addSpeed(10, entity, 0, false);
                        break;
                    case Synergy_1.Synergy.ICE:
                    case Synergy_1.Synergy.AQUATIC:
                    case Synergy_1.Synergy.FLORA:
                        entity.addSpecialDefense(5, entity, 0, false);
                        break;
                    case Synergy_1.Synergy.GROUND:
                    case Synergy_1.Synergy.FIGHTING:
                    case Synergy_1.Synergy.ROCK:
                        entity.addDefense(5, entity, 0, false);
                        break;
                    case Synergy_1.Synergy.PSYCHIC:
                    case Synergy_1.Synergy.HUMAN:
                    case Synergy_1.Synergy.LIGHT:
                        entity.addAbilityPower(20, entity, 0, false);
                        break;
                    case Synergy_1.Synergy.FAIRY:
                    case Synergy_1.Synergy.DARK:
                        entity.addCritChance(5, entity, 0, false);
                        entity.addCritPower(10, entity, 0, false);
                        break;
                    case Synergy_1.Synergy.WATER:
                    case Synergy_1.Synergy.SOUND:
                        entity.addPP(20, entity, 0, false);
                        break;
                }
            });
        })
    ],
    SMOKED_FILET: [
        new effect_1.OnDishConsumedEffect(({ pokemon, entity, player }) => {
            if (entity) {
                entity.addMaxHP(-5, entity, 0, false, true);
                entity.addAttack(5, entity, 0, false, true);
                entity.addAbilityPower(10, entity, 0, false, true);
            }
        })
    ],
    SPINDA_COCKTAIL: [
        new effect_1.OnSpawnEffect((entity) => {
            if ((0, random_1.chance)(0.8, entity)) {
                entity.addAttack(10, entity, 0, false);
            }
            if ((0, random_1.chance)(0.8, entity)) {
                entity.addSpeed(50, entity, 0, false);
            }
            if ((0, random_1.chance)(0.8, entity)) {
                entity.addAbilityPower(50, entity, 0, false);
            }
            if ((0, random_1.chance)(0.8, entity)) {
                entity.addShield(100, entity, 0, false);
            }
            if (!(0, random_1.chance)(0.8, entity)) {
                entity.status.triggerConfusion(5000, entity, entity);
            }
            else if (!(0, random_1.chance)(0.8, entity)) {
                entity.status.triggerBlinded(5000, entity);
            }
            else if (!(0, random_1.chance)(0.8, entity)) {
                entity.status.triggerSleep(5000, entity);
            }
        })
    ],
    SIRUPY_APPLE: [
        new effect_1.OnHitEffect(({ attacker, target }) => {
            if ((0, random_1.chance)(0.3, attacker)) {
                target.status.triggerParalysis(3000, target, attacker);
            }
        })
    ],
    SWEET_APPLE: [
        new effect_1.OnHitEffect(({ attacker, target }) => {
            target.addSpecialDefense(-2, attacker, 0, false);
        })
    ],
    TART_APPLE: [
        new effect_1.OnHitEffect(({ attacker, target }) => {
            target.addDefense(-2, attacker, 0, false);
        })
    ],
    TEA: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.addPP(80, entity, 0, false);
        })
    ],
    TINY_MUSHROOM: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.addMaxHP(-0.3 * entity.baseHP, entity, 0, false);
            entity.addSpeed(30, entity, 0, false);
        })
    ],
    WHIPPED_DREAM: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.effects.add(Effect_1.EffectEnum.WHIPPED_DREAM);
        }),
        new effect_1.OnHitEffect(({ attacker, target }) => {
            if (attacker.effects.has(Effect_1.EffectEnum.WHIPPED_DREAM)) {
                target.status.triggerCharm(5000, target, attacker);
                attacker.effects.delete(Effect_1.EffectEnum.WHIPPED_DREAM);
            }
        })
    ],
    SWEETS: [],
    STRAWBERRY_SWEET: [
        new effect_1.OnDishConsumedEffect(({ pokemon, entity, player }) => {
            entity === null || entity === void 0 ? void 0 : entity.addAttack(3, entity, 0, false, true);
        })
    ],
    LOVE_SWEET: [
        new effect_1.OnDishConsumedEffect(({ pokemon, entity, player }) => {
            entity === null || entity === void 0 ? void 0 : entity.addDefense(3, entity, 0, false, true);
        })
    ],
    BERRY_SWEET: [
        new effect_1.OnDishConsumedEffect(({ pokemon, entity, player }) => {
            entity === null || entity === void 0 ? void 0 : entity.addMaxHP(15, entity, 0, false, true);
        })
    ],
    CLOVER_SWEET: [
        new effect_1.OnDishConsumedEffect(({ pokemon, entity, player }) => {
            entity === null || entity === void 0 ? void 0 : entity.addLuck(10, entity, 0, false, true);
        })
    ],
    FLOWER_SWEET: [
        new effect_1.OnDishConsumedEffect(({ pokemon, entity, player }) => {
            entity === null || entity === void 0 ? void 0 : entity.addSpeed(5, entity, 0, false, true);
        })
    ],
    STAR_SWEET: [
        new effect_1.OnDishConsumedEffect(({ pokemon, entity, player }) => {
            entity === null || entity === void 0 ? void 0 : entity.addAbilityPower(10, entity, 0, false, true);
        })
    ],
    RIBBON_SWEET: [
        new effect_1.OnDishConsumedEffect(({ pokemon, entity, player }) => {
            entity === null || entity === void 0 ? void 0 : entity.addSpecialDefense(3, entity, 0, false, true);
        })
    ],
    RICE: [
        new effect_1.OnDishConsumedEffect(({ pokemon, entity, player }) => {
            entity === null || entity === void 0 ? void 0 : entity.addShield(50, entity, 0, false);
            const tatsugiriOnBoard = (0, schemas_1.schemaValues)(player.board).find((e) => e && (0, config_1.getBaseAltForm)(e.name) === Pokemon_1.Pkm.TATSUGIRI_CURLY);
            if ((tatsugiriOnBoard === null || tatsugiriOnBoard === void 0 ? void 0 : tatsugiriOnBoard.name) === Pokemon_1.Pkm.TATSUGIRI_CURLY) {
                entity === null || entity === void 0 ? void 0 : entity.addAttack(8, entity, 0, false);
            }
            else if ((tatsugiriOnBoard === null || tatsugiriOnBoard === void 0 ? void 0 : tatsugiriOnBoard.name) === Pokemon_1.Pkm.TATSUGIRI_DROOPY) {
                entity === null || entity === void 0 ? void 0 : entity.addDefense(8, entity, 0, false);
            }
            else if ((tatsugiriOnBoard === null || tatsugiriOnBoard === void 0 ? void 0 : tatsugiriOnBoard.name) === Pokemon_1.Pkm.TATSUGIRI_STRETCHY) {
                entity === null || entity === void 0 ? void 0 : entity.addSpeed(25, entity, 0, false);
            }
        })
    ]
};
//# sourceMappingURL=dishes.js.map