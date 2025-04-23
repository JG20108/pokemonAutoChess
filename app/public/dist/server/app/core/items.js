"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoulDewEffect = exports.ItemEffects = exports.ItemStats = void 0;
exports.getWonderboxItems = getWonderboxItems;
const Item_1 = require("../types/enum/Item");
const effect_1 = require("./effect");
const random_1 = require("../utils/random");
const number_1 = require("../utils/number");
const Config_1 = require("../types/Config");
const Pokemon_1 = require("../types/enum/Pokemon");
const pokemon_factory_1 = __importDefault(require("../models/pokemon-factory"));
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
    [Item_1.Item.MAX_ELIXIR]: { [Game_1.Stat.AP]: -25 },
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
exports.ItemEffects = {
    [Item_1.Item.SOUL_DEW]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.effectsSet.add(new SoulDewEffect());
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            for (const effect of pokemon.effectsSet) {
                if (effect instanceof SoulDewEffect) {
                    pokemon.addAbilityPower(-10 * effect.count, pokemon, 0, false);
                    pokemon.effectsSet.delete(effect);
                    pokemon.count.soulDewCount = 0;
                    break;
                }
            }
        })
    ],
    [Item_1.Item.WIDE_LENS]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.range += 2;
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.range = (0, number_1.min)(1)(pokemon.range - 2);
        })
    ],
    [Item_1.Item.MAX_REVIVE]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.status.addResurrection(pokemon);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.status.resurection = false;
        })
    ],
    [Item_1.Item.SWIFT_WING]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.addDodgeChance(0.1, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addDodgeChance(-0.1, pokemon, 0, false);
        })
    ],
    [Item_1.Item.FLAME_ORB]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.addAttack(pokemon.baseAtk, pokemon, 0, false);
            pokemon.status.triggerBurn(60000, pokemon, pokemon);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addAttack(-pokemon.baseAtk, pokemon, 0, false);
            pokemon.status.burnCooldown = 0;
        })
    ],
    [Item_1.Item.TOXIC_ORB]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.addAttack(pokemon.baseAtk, pokemon, 0, false);
            pokemon.status.triggerPoison(60000, pokemon, pokemon);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addAttack(-pokemon.baseAtk, pokemon, 0, false);
            pokemon.status.poisonCooldown = 0;
        })
    ],
    [Item_1.Item.POKERUS_VIAL]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.status.triggerPokerus(pokemon);
        })
    ],
    [Item_1.Item.FLUFFY_TAIL]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.status.triggerRuneProtect(60000);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.status.runeProtectCooldown = 0;
        })
    ],
    [Item_1.Item.KINGS_ROCK]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.addShield(0.3 * pokemon.baseHP, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addShield(-0.3 * pokemon.baseHP, pokemon, 0, false);
        })
    ],
    [Item_1.Item.DYNAMAX_BAND]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.addMaxHP(2 * pokemon.baseHP, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addMaxHP(-2 * pokemon.baseHP, pokemon, 0, false);
        })
    ],
    [Item_1.Item.GOLD_BOTTLE_CAP]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            var _a, _b, _c, _d;
            pokemon.addCritChance((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.money) !== null && _b !== void 0 ? _b : 0, pokemon, 0, false);
            pokemon.addCritPower((_d = (_c = pokemon.player) === null || _c === void 0 ? void 0 : _c.money) !== null && _d !== void 0 ? _d : 0, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            var _a, _b, _c, _d;
            pokemon.addCritChance(-((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.money) !== null && _b !== void 0 ? _b : 0), pokemon, 0, false);
            pokemon.addCritPower(-((_d = (_c = pokemon.player) === null || _c === void 0 ? void 0 : _c.money) !== null && _d !== void 0 ? _d : 0), pokemon, 0, false);
        }),
        new effect_1.OnKillEffect((pokemon, target, board) => {
            if (pokemon.player) {
                const isLastEnemy = board.cells.some((p) => p &&
                    p.team !== pokemon.team &&
                    (p.life > 0 || p.status.resurecting)) === false;
                pokemon.count.bottleCapCount++;
                const moneyGained = isLastEnemy ? pokemon.count.bottleCapCount + 1 : 1;
                pokemon.player.addMoney(moneyGained, true, pokemon);
                pokemon.count.moneyCount += moneyGained;
            }
        })
    ],
    [Item_1.Item.REPEAT_BALL]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            var _a, _b, _c, _d;
            pokemon.addShield(Math.floor((((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.rerollCount) !== null && _b !== void 0 ? _b : 0) + pokemon.simulation.stageLevel) /
                2) * 2, pokemon, 0, false);
            pokemon.addSpeed(Math.floor((((_d = (_c = pokemon.player) === null || _c === void 0 ? void 0 : _c.rerollCount) !== null && _d !== void 0 ? _d : 0) + pokemon.simulation.stageLevel) /
                2), pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            var _a, _b;
            pokemon.addAbilityPower(-Math.floor((((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.rerollCount) !== null && _b !== void 0 ? _b : 0) + pokemon.simulation.stageLevel) /
                2), pokemon, 0, false);
        })
    ],
    [Item_1.Item.SACRED_ASH]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.status.addResurrection(pokemon);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.status.resurection = false;
        })
    ],
    [Item_1.Item.UPGRADE]: [
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addSpeed(-5 * pokemon.count.upgradeCount, pokemon, 0, false);
            pokemon.count.upgradeCount = 0;
        })
    ],
    [Item_1.Item.DEFENSIVE_RIBBON]: [
        new effect_1.OnItemRemovedEffect((pokemon) => {
            const stacks = Math.floor(pokemon.count.defensiveRibbonCount / 2);
            pokemon.addAttack(-stacks, pokemon, 0, false);
            pokemon.addDefense(-2 * stacks, pokemon, 0, false);
            pokemon.addSpeed(-5 * stacks, pokemon, 0, false);
            pokemon.count.defensiveRibbonCount = 0;
        })
    ],
    [Item_1.Item.AMULET_COIN]: [
        new effect_1.OnKillEffect((pokemon) => {
            if (pokemon.player) {
                pokemon.player.addMoney(1, true, pokemon);
                pokemon.count.moneyCount += 1;
                pokemon.count.amuletCoinCount += 1;
            }
        })
    ],
    [Item_1.Item.COMFEY]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            const comfey = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.COMFEY);
            pokemon.addAbilityPower(comfey.ap, pokemon, 0, false);
            pokemon.addAttack(comfey.atk, pokemon, 0, false);
            pokemon.addSpeed(comfey.speed - Config_1.DEFAULT_SPEED, pokemon, 0, false);
            pokemon.addMaxHP(comfey.hp, pokemon, 0, false);
            pokemon.addDefense(comfey.def, pokemon, 0, false);
            pokemon.addSpecialDefense(comfey.speDef, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            const comfey = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.COMFEY);
            pokemon.addAbilityPower(-comfey.ap, pokemon, 0, false);
            pokemon.addAttack(-comfey.atk, pokemon, 0, false);
            pokemon.addSpeed(-(comfey.speed - Config_1.DEFAULT_SPEED), pokemon, 0, false);
            pokemon.addMaxHP(-comfey.hp, pokemon, 0, false);
            pokemon.addDefense(-comfey.def, pokemon, 0, false);
            pokemon.addSpecialDefense(-comfey.speDef, pokemon, 0, false);
        })
    ],
    [Item_1.Item.MAGMARIZER]: [
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addAttack(-pokemon.count.magmarizerCount, pokemon, 0, false);
            pokemon.count.magmarizerCount = 0;
        })
    ]
};
class SoulDewEffect extends effect_1.PeriodicEffect {
    constructor() {
        super((pokemon) => {
            pokemon.addAbilityPower(10, pokemon, 0, false);
            pokemon.count.soulDewCount++;
        }, Item_1.Item.SOUL_DEW, 1000);
    }
}
exports.SoulDewEffect = SoulDewEffect;
//# sourceMappingURL=items.js.map