"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemEffects = exports.FishingRodEffect = exports.DojoTicketOnItemDroppedEffect = exports.RunningShoesOnMoveEffect = exports.GreenOrbEffect = exports.MachRibbonEffect = exports.SoulDewEffect = exports.loadedDiceOnAttackEffect = exports.blueOrbOnAttackEffect = void 0;
const config_1 = require("../../config");
const synergies_1 = require("../../models/colyseus-models/synergies");
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const pve_stages_1 = require("../../models/pve-stages");
const types_1 = require("../../types");
const Ability_1 = require("../../types/enum/Ability");
const Dungeon_1 = require("../../types/enum/Dungeon");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const Pokemon_1 = require("../../types/enum/Pokemon");
const Synergy_1 = require("../../types/enum/Synergy");
const Wanderer_1 = require("../../types/enum/Wanderer");
const array_1 = require("../../utils/array");
const board_1 = require("../../utils/board");
const distance_1 = require("../../utils/distance");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const abilities_1 = require("../abilities/abilities");
const dishes_1 = require("../dishes");
const evolution_rules_1 = require("../evolution-rules");
const flower_pots_1 = require("../flower-pots");
const pokemon_entity_1 = require("../pokemon-entity");
const simulation_command_1 = require("../simulation-command");
const effect_1 = require("./effect");
exports.blueOrbOnAttackEffect = new effect_1.OnAttackEffect(({ pokemon, target, board }) => {
    pokemon.count.staticHolderCount++;
    if (pokemon.count.staticHolderCount >= 3) {
        pokemon.count.staticHolderCount = 0;
        const nbBounces = 2;
        const closestEnemies = board.getClosestEnemies(pokemon.positionX, pokemon.positionY, pokemon.team === Game_1.Team.BLUE_TEAM ? Game_1.Team.RED_TEAM : Game_1.Team.BLUE_TEAM);
        let previousTg = pokemon;
        let secondaryTargetHit = target;
        for (let i = 0; i < nbBounces; i++) {
            secondaryTargetHit = closestEnemies[i];
            if (secondaryTargetHit) {
                pokemon.broadcastAbility({
                    skill: "LINK_CABLE_link",
                    positionX: previousTg.positionX,
                    positionY: previousTg.positionY,
                    targetX: secondaryTargetHit.positionX,
                    targetY: secondaryTargetHit.positionY
                });
                secondaryTargetHit.handleSpecialDamage(10, board, Game_1.AttackType.SPECIAL, pokemon, false, false);
                secondaryTargetHit.addPP(-15, pokemon, 0, false);
                secondaryTargetHit.count.manaBurnCount++;
                previousTg = secondaryTargetHit;
            }
            else {
                break;
            }
        }
    }
});
exports.loadedDiceOnAttackEffect = new effect_1.OnAttackEffect(({ pokemon, target, board, totalDamage, physicalDamage, specialDamage, trueDamage }) => {
    if (totalDamage > 0 && target && (0, random_1.chance)(0.5, pokemon)) {
        const cells = board.getAdjacentCells(target.positionX, target.positionY);
        const candidateTargets = cells
            .filter((cell) => cell.value && pokemon.team != cell.value.team)
            .map((cell) => cell.value);
        candidateTargets.sort((a, b) => a.hp - b.hp);
        const nbBounces = 1;
        const secondHitPhysicalDamage = Math.round(physicalDamage * 0.75);
        const secondHitSpecialDamage = Math.round(specialDamage * 0.75);
        const secondHitTrueDamage = Math.round(trueDamage * 0.75);
        for (let i = 0; i < nbBounces; i++) {
            const secondHitTarget = candidateTargets.shift();
            if (!secondHitTarget)
                break;
            let totalTakenDamage = 0;
            if (physicalDamage > 0) {
                const { takenDamage } = secondHitTarget.handleDamage({
                    damage: secondHitPhysicalDamage,
                    board,
                    attackType: Game_1.AttackType.PHYSICAL,
                    attacker: pokemon,
                    shouldTargetGainMana: true
                });
                totalTakenDamage += takenDamage;
            }
            if (secondHitSpecialDamage > 0) {
                const { takenDamage } = secondHitTarget.handleDamage({
                    damage: secondHitSpecialDamage,
                    board,
                    attackType: Game_1.AttackType.SPECIAL,
                    attacker: pokemon,
                    shouldTargetGainMana: true
                });
                totalTakenDamage += takenDamage;
                if (secondHitTarget.items.has(Item_1.Item.POWER_LENS) &&
                    !pokemon.items.has(Item_1.Item.PROTECTIVE_PADS)) {
                    const speDef = secondHitTarget.status.armorReduction
                        ? Math.round(secondHitTarget.speDef / 2)
                        : secondHitTarget.speDef;
                    const damageAfterReduction = secondHitSpecialDamage / (1 + config_1.ARMOR_FACTOR * speDef);
                    const damageBlocked = (0, number_1.min)(0)(secondHitSpecialDamage - damageAfterReduction);
                    pokemon.broadcastAbility({ skill: "POWER_LENS" });
                    pokemon.handleDamage({
                        damage: Math.round(damageBlocked),
                        board,
                        attackType: Game_1.AttackType.SPECIAL,
                        attacker: secondHitTarget,
                        shouldTargetGainMana: true,
                        isRetaliation: true
                    });
                }
            }
            if (secondHitTrueDamage > 0) {
                const { takenDamage } = secondHitTarget.handleDamage({
                    damage: secondHitTrueDamage,
                    board,
                    attackType: Game_1.AttackType.TRUE,
                    attacker: pokemon,
                    shouldTargetGainMana: true
                });
                totalTakenDamage += takenDamage;
            }
            pokemon.onHit({
                target: secondHitTarget,
                board,
                totalTakenDamage,
                physicalDamage: secondHitPhysicalDamage,
                specialDamage: secondHitSpecialDamage,
                trueDamage: secondHitTrueDamage
            });
            pokemon.broadcastAbility({
                skill: "LOADED_DICE",
                positionX: target.positionX,
                positionY: target.positionY,
                targetX: secondHitTarget.positionX,
                targetY: secondHitTarget.positionY
            });
        }
    }
});
class SoulDewEffect extends effect_1.PeriodicEffect {
    constructor() {
        super((pokemon) => {
            pokemon.addAbilityPower(5, pokemon, 0, false);
            pokemon.addPP(5, pokemon, 0, false);
            pokemon.count.soulDewCount++;
        }, Item_1.Item.SOUL_DEW, 1000);
    }
}
exports.SoulDewEffect = SoulDewEffect;
class MachRibbonEffect extends effect_1.PeriodicEffect {
    constructor() {
        super((pokemon) => {
            pokemon.addSpeed(20, pokemon, 0, false);
            pokemon.count.machRibbonCount++;
            if (pokemon.count.machRibbonCount >= 10 && pokemon.player) {
                pokemon.player.titles.add(types_1.Title.TOP_GUN);
            }
        }, Item_1.Item.MACH_RIBBON, 3000);
    }
}
exports.MachRibbonEffect = MachRibbonEffect;
class GreenOrbEffect extends effect_1.PeriodicEffect {
    constructor() {
        super((pokemon, board) => {
            const adjacentCells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, true);
            for (const cell of adjacentCells) {
                if (cell.value && cell.value.team === pokemon.team) {
                    const { overheal } = cell.value.handleHeal(0.05 * cell.value.maxHP, pokemon, 0, false);
                    if (overheal > 0) {
                        cell.value.addPP(0.3 * overheal, pokemon, 0, false);
                    }
                }
            }
            pokemon.broadcastAbility({ skill: "GREEN_ORB" });
        }, Item_1.Item.GREEN_ORB, 2000);
    }
}
exports.GreenOrbEffect = GreenOrbEffect;
class RunningShoesOnMoveEffect extends effect_1.OnMoveEffect {
    constructor() {
        super((pkm) => {
            pkm.addSpeed(5, pkm, 0, false);
            this.stacks += 1;
        });
        this.stacks = 0;
    }
}
exports.RunningShoesOnMoveEffect = RunningShoesOnMoveEffect;
const smokeBallEffect = new effect_1.OnDamageReceivedEffect(({ pokemon, board }) => {
    if (pokemon.hp > 0 && pokemon.hp < 0.4 * pokemon.maxHP) {
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.status.triggerParalysis(4000, cell.value, pokemon);
                cell.value.status.triggerBlinded(4000, cell.value);
            }
        });
        pokemon.broadcastAbility({ skill: "SMOKE_BALL" });
        pokemon.removeItem(Item_1.Item.SMOKE_BALL);
        pokemon.addShield(50, pokemon, 0, false);
        pokemon.flyAway(board, false, false);
    }
});
const ogerponMaskEffect = new effect_1.OnItemDroppedEffect(({ pokemon, player, item }) => {
    if (pokemon.passive === Passive_1.Passive.OGERPON_TEAL ||
        pokemon.passive === Passive_1.Passive.OGERPON_WELLSPRING ||
        pokemon.passive === Passive_1.Passive.OGERPON_HEARTHFLAME ||
        pokemon.passive === Passive_1.Passive.OGERPON_CORNERSTONE) {
        const currentMask = (0, schemas_1.schemaValues)(pokemon.items).find((i) => Item_1.OgerponMasks.includes(i));
        if (currentMask) {
            pokemon.items.delete(currentMask);
        }
        else if (pokemon.items.size >= 3) {
            return false;
        }
        if (item === Item_1.Item.TEAL_MASK) {
            pokemon.items.add(Item_1.Item.TEAL_MASK);
            player.transformPokemon(pokemon, Pokemon_1.Pkm.OGERPON_TEAL_MASK);
        }
        else if (item === Item_1.Item.WELLSPRING_MASK) {
            pokemon.items.add(Item_1.Item.WELLSPRING_MASK);
            player.transformPokemon(pokemon, Pokemon_1.Pkm.OGERPON_WELLSPRING_MASK);
        }
        else if (item === Item_1.Item.HEARTHFLAME_MASK) {
            pokemon.items.add(Item_1.Item.HEARTHFLAME_MASK);
            player.transformPokemon(pokemon, Pokemon_1.Pkm.OGERPON_HEARTHFLAME_MASK);
        }
        else if (item === Item_1.Item.CORNERSTONE_MASK) {
            pokemon.items.add(Item_1.Item.CORNERSTONE_MASK);
            player.transformPokemon(pokemon, Pokemon_1.Pkm.OGERPON_CORNERSTONE_MASK);
        }
        return true;
    }
    return false;
});
class DojoTicketOnItemDroppedEffect extends effect_1.OnItemDroppedEffect {
    constructor(ticketLevel) {
        super(({ pokemon, player, room, item }) => {
            var _a;
            if (Pokemon_1.NonPkm.includes(pokemon.name))
                return false;
            const substitute = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.SUBSTITUTE, player);
            pokemon.items.forEach((item) => substitute.items.add(item));
            pokemon.removeItems((0, schemas_1.schemaValues)(pokemon.items), player);
            const pokemonLeaving = player.getPokemonAt(pokemon.positionX, pokemon.positionY) || pokemon;
            substitute.id = pokemonLeaving.id;
            substitute.evolution = pokemonLeaving.name;
            substitute.evolutionRule = new evolution_rules_1.ConditionBasedEvolutionRule(() => false);
            substitute.positionX = pokemonLeaving.positionX;
            substitute.positionY = pokemonLeaving.positionY;
            player.board.delete(pokemonLeaving.id);
            player.board.set(substitute.id, substitute);
            player.pokemonsTrainingInDojo.push({
                pokemon: pokemonLeaving,
                ticketLevel,
                returnStage: room.state.stageLevel + ((_a = [3, 4, 5][ticketLevel - 1]) !== null && _a !== void 0 ? _a : 5)
            });
            (0, array_1.removeInArray)(player.items, item);
            return false;
        });
    }
}
exports.DojoTicketOnItemDroppedEffect = DojoTicketOnItemDroppedEffect;
const chefCookEffect = new effect_1.OnStageStartEffect(({ pokemon, player, room }) => {
    var _a;
    if (!pokemon)
        return;
    const chef = pokemon;
    const gourmetLevel = (0, synergies_1.getSynergyStep)(player.synergies, Synergy_1.Synergy.GOURMET);
    const nbDishes = (_a = [0, 1, 2, 2][gourmetLevel]) !== null && _a !== void 0 ? _a : 2;
    let dish = dishes_1.DishByPkm[chef.name];
    if (chef.items.has(Item_1.Item.COOKING_POT)) {
        dish = Item_1.Item.HEARTY_STEW;
    }
    else if (chef.name.startsWith("ARCEUS") ||
        chef.name === Pokemon_1.Pkm.KECLEON ||
        chef.items.has(Item_1.Item.GOURMET_MEMORY)) {
        dish = Item_1.Item.SANDWICH;
    }
    if (chef.passive === Passive_1.Passive.GLUTTON) {
        chef.addMaxHP(30);
        if (chef.maxHP > 750) {
            player.titles.add(types_1.Title.GLUTTON);
        }
    }
    if (dish && nbDishes > 0) {
        let dishes = Array.from({ length: nbDishes }, () => dish);
        if (dish === Item_1.Item.BERRIES) {
            dishes = (0, random_1.pickNRandomIn)(Item_1.NonSpecialBerries.filter((i) => pokemon.items.has(i) === false), nbDishes);
        }
        if (dish === Item_1.Item.MUSHROOMS) {
            dishes = Array.from({ length: nbDishes }, () => {
                var _a;
                return (_a = (0, random_1.randomWeighted)({
                    [Item_1.Item.TINY_MUSHROOM]: 77,
                    [Item_1.Item.BIG_MUSHROOM]: 20,
                    [Item_1.Item.BALM_MUSHROOM]: 3
                })) !== null && _a !== void 0 ? _a : Item_1.Item.TINY_MUSHROOM;
            });
        }
        if (dish === Item_1.Item.SWEETS) {
            dishes = (0, random_1.pickNRandomIn)(Item_1.Sweets, nbDishes);
        }
        room.clock.setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
            room.broadcast(types_1.Transfer.COOK, {
                pokemonId: chef.id,
                dishes
            });
            room.clock.setTimeout(() => {
                dishes.forEach((dish, i) => {
                    var _a;
                    if (pokemon.name === Pokemon_1.Pkm.SKWOVET || pokemon.name === Pokemon_1.Pkm.GREEDENT) {
                        if (pokemon.items.size < 3) {
                            pokemon.addItem(dish, player);
                        }
                        else {
                            player.items.push(dish);
                        }
                    }
                    else if ((0, array_1.isIn)(Item_1.DishesGoingToInventory, dish)) {
                        player.items.push(dish);
                    }
                    else {
                        let candidates = (0, schemas_1.schemaValues)(player.board).filter((p) => p.canEat &&
                            !p.dishes.has(dish) &&
                            (0, board_1.isOnBench)(chef) === (0, board_1.isOnBench)(p) &&
                            (0, distance_1.distanceC)(chef.positionX, chef.positionY, p.positionX, p.positionY) === 1);
                        if (dish === Item_1.Item.HERBA_MYSTICA) {
                            candidates = candidates.filter((p) => Item_1.HerbaMysticas.every((herba) => p.dishes.has(herba) === false));
                        }
                        candidates.sort((a, b) => (0, pokemon_entity_1.getUnitScore)(b) - (0, pokemon_entity_1.getUnitScore)(a));
                        const pokemon = (_a = candidates[0]) !== null && _a !== void 0 ? _a : chef;
                        if (!pokemon.canEat)
                            return;
                        if (dish === Item_1.Item.HERBA_MYSTICA) {
                            const flavors = [];
                            if (pokemon.types.has(Synergy_1.Synergy.FAIRY))
                                flavors.push(Item_1.Item.HERBA_MYSTICA_SWEET);
                            if (pokemon.types.has(Synergy_1.Synergy.PSYCHIC))
                                flavors.push(Item_1.Item.HERBA_MYSTICA_SPICY);
                            if (pokemon.types.has(Synergy_1.Synergy.ELECTRIC))
                                flavors.push(Item_1.Item.HERBA_MYSTICA_SOUR);
                            if (pokemon.types.has(Synergy_1.Synergy.GRASS))
                                flavors.push(Item_1.Item.HERBA_MYSTICA_BITTER);
                            if (flavors.length === 0)
                                flavors.push(Item_1.Item.HERBA_MYSTICA_SALTY);
                            dish = (0, random_1.pickRandomIn)(flavors);
                        }
                        pokemon.dishes.add(dish);
                        pokemon.action = Game_1.PokemonActionState.EAT;
                    }
                });
            }, 2000);
        }), 1000);
    }
});
class FishingRodEffect extends effect_1.OnStageStartEffect {
    constructor(rod) {
        super(({ player, room }) => {
            const isAfterPVE = room.state.stageLevel - 1 in pve_stages_1.PVEStages;
            if (rod &&
                (0, board_1.getFreeSpaceOnBench)(player.board) > 0 &&
                !isAfterPVE &&
                room.state.stageLevel > 3 &&
                !player.isBot) {
                const fish = room.state.shop.pickFish(player, rod, room.state);
                room.spawnOnBench(player, fish, "fishing");
            }
        });
    }
}
exports.FishingRodEffect = FishingRodEffect;
function dropComfey({ pokemon, board }) {
    const nearestAvailableCoordinate = pokemon.state.getNearestAvailablePlaceCoordinates(pokemon, board, 2);
    if (nearestAvailableCoordinate) {
        pokemon.removeItem(Item_1.Item.COMFEY);
        pokemon.simulation.addPokemon(pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.COMFEY, pokemon.player), nearestAvailableCoordinate.x, nearestAvailableCoordinate.y, pokemon.team, false);
    }
}
exports.ItemEffects = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object.fromEntries(Item_1.SynergyStones.map((stone) => [
    stone,
    [
        new effect_1.OnItemDroppedEffect(({ pokemon, item }) => !pokemon.types.has(Item_1.SynergyGivenByItem[item]))
    ]
]))), Object.fromEntries(Item_1.TMs.map((tm) => [
    tm,
    [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, item }) => {
            const ability = Item_1.AbilityPerTM[item];
            if (!ability || pokemon.types.has(Synergy_1.Synergy.HUMAN) === false)
                return false;
            pokemon.tm = ability;
            pokemon.skill = ability;
            pokemon.maxPP = 100;
            (0, array_1.removeInArray)(player.items, item);
            return false;
        })
    ]
]))), { [Item_1.Item.RUSTED_SWORD]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.addAttack(pokemon.baseAtk * 0.5, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addAttack(-pokemon.baseAtk * 0.5, pokemon, 0, false);
        }),
        new effect_1.OnDeathEffect(({ pokemon, board }) => {
            pokemon.items.delete(Item_1.Item.RUSTED_SWORD);
            const alliesSortByLowestAtk = board.cells.filter((p) => p &&
                p.team === pokemon.team &&
                p.id !== pokemon.id &&
                p.items.size < 3).sort((a, b) => a.atk - b.atk);
            const swordReceiver = alliesSortByLowestAtk[0];
            if (swordReceiver) {
                swordReceiver.addItem(Item_1.Item.RUSTED_SWORD);
            }
        })
    ], [Item_1.Item.SOUL_DEW]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.effectsSet.add(new SoulDewEffect());
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            for (const effect of pokemon.effectsSet) {
                if (effect instanceof SoulDewEffect) {
                    pokemon.addAbilityPower(-5 * effect.count, pokemon, 0, false);
                    pokemon.effectsSet.delete(effect);
                    pokemon.count.soulDewCount = 0;
                    break;
                }
            }
        })
    ], [Item_1.Item.PUNCHING_GLOVE]: [
        new effect_1.OnHitEffect(({ attacker, target, board }) => {
            target.handleDamage({
                damage: Math.round(0.08 * target.maxHP),
                board,
                attackType: Game_1.AttackType.PHYSICAL,
                attacker,
                shouldTargetGainMana: true
            });
        })
    ], [Item_1.Item.SHELL_BELL]: [
        new effect_1.OnDamageDealtEffect(({ pokemon, damage, target }) => {
            if (target.id === pokemon.id)
                return;
            pokemon.handleHeal(Math.ceil(0.33 * damage), pokemon, 0, false);
        })
    ], [Item_1.Item.BLACK_BELT]: [
        new effect_1.OnAttackEffect(({ pokemon, totalDamage, crit }) => {
            if (crit) {
                pokemon.addShield(Math.ceil(0.33 * totalDamage), pokemon, 0, false);
            }
        })
    ], [Item_1.Item.MAX_REVIVE]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.status.addResurrection(pokemon);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.status.resurrection = false;
        })
    ], [Item_1.Item.AIR_BALLOON]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.addDodgeChance(0.1, pokemon, 0, false);
            pokemon.effects.add(Effect_1.EffectEnum.IMMUNITY_BOARD_EFFECTS);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addDodgeChance(-0.1, pokemon, 0, false);
            pokemon.effects.delete(Effect_1.EffectEnum.IMMUNITY_BOARD_EFFECTS);
        })
    ], [Item_1.Item.FLAME_ORB]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.effects.add(Effect_1.EffectEnum.IMMUNITY_FREEZE);
            pokemon.addAttack(pokemon.baseAtk, pokemon, 0, false);
            pokemon.status.triggerBurn(300000, pokemon, pokemon);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addAttack(-pokemon.baseAtk, pokemon, 0, false);
            pokemon.status.burnCooldown = 0;
        })
    ], [Item_1.Item.HEAVY_DUTY_BOOTS]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.effects.add(Effect_1.EffectEnum.IMMUNITY_LOCKED);
        })
    ], [Item_1.Item.XRAY_VISION]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.effects.add(Effect_1.EffectEnum.IMMUNITY_SLEEP);
        })
    ], [Item_1.Item.POKERUS_VIAL]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.status.triggerPokerus(pokemon);
        })
    ], [Item_1.Item.SAFETY_GOGGLES]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.status.triggerRuneProtect(60000, pokemon, pokemon);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.status.runeProtectCooldown = 0;
        })
    ], [Item_1.Item.KINGS_ROCK]: [
        new effect_1.OnSimulationStartEffect(({ entity }) => {
            entity.addShield(0.2 * entity.maxHP, entity, 0, false);
        })
    ], [Item_1.Item.DYNAMAX_BAND]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.addMaxHP(2 * pokemon.baseHP, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addMaxHP(-2 * pokemon.baseHP, pokemon, 0, false);
        })
    ], [Item_1.Item.GOLD_BOTTLE_CAP]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            var _a, _b;
            pokemon.addCritPower((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.money) !== null && _b !== void 0 ? _b : 0, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            var _a, _b;
            pokemon.addCritPower(-((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.money) !== null && _b !== void 0 ? _b : 0), pokemon, 0, false);
        }),
        new effect_1.OnKillEffect(({ attacker, target, board }) => {
            if (attacker.player) {
                const isLastEnemy = target.team !== attacker.team &&
                    board.cells.some((p) => p &&
                        p.team !== attacker.team &&
                        (p.hp > 0 || p.status.resurrecting)) === false;
                attacker.count.bottleCapCount++;
                const moneyGained = isLastEnemy ? attacker.count.bottleCapCount + 1 : 1;
                attacker.player.addMoney(moneyGained, true, attacker);
                attacker.count.moneyCount += moneyGained;
                if (isLastEnemy && attacker.count.bottleCapCount >= 10) {
                    attacker.player.titles.add(types_1.Title.LUCKY);
                }
            }
        })
    ], [Item_1.Item.REPEAT_BALL]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            var _a, _b;
            const repeatBallValue = Math.floor((((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.gameStats.rerollCount) !== null && _b !== void 0 ? _b : 0) +
                pokemon.simulation.stageLevel) /
                2);
            pokemon.addShield(repeatBallValue * 2, pokemon, 0, false);
            pokemon.addSpeed(repeatBallValue, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            var _a, _b;
            const repeatBallValue = Math.floor((((_b = (_a = pokemon.player) === null || _a === void 0 ? void 0 : _a.gameStats.rerollCount) !== null && _b !== void 0 ? _b : 0) +
                pokemon.simulation.stageLevel) /
                2);
            pokemon.addShield(-repeatBallValue * 2, pokemon, 0, false);
            pokemon.addSpeed(-repeatBallValue, pokemon, 0, false);
        })
    ], [Item_1.Item.SACRED_ASH]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.status.addResurrection(pokemon);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.status.resurrection = false;
        })
    ], [Item_1.Item.UPGRADE]: [
        new effect_1.OnAttackEffect(({ pokemon, target, board }) => {
            pokemon.addSpeed(5, pokemon, 0, false);
            pokemon.count.upgradeCount++;
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.addSpeed(-5 * pokemon.count.upgradeCount, pokemon, 0, false);
            pokemon.count.upgradeCount = 0;
        })
    ], [Item_1.Item.MUSCLE_BAND]: [
        new effect_1.OnDamageReceivedEffect(({ pokemon, damage }) => {
            if (pokemon.count.muscleBandCount < 20 && damage > 0) {
                pokemon.count.muscleBandCount++;
                if (pokemon.count.muscleBandCount % 2 === 0) {
                    pokemon.addAttack(1, pokemon, 0, false);
                    pokemon.addDefense(2, pokemon, 0, false);
                    pokemon.addSpeed(5, pokemon, 0, false);
                }
            }
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            const stacks = Math.floor(pokemon.count.muscleBandCount / 2);
            pokemon.addAttack(-stacks, pokemon, 0, false);
            pokemon.addDefense(-2 * stacks, pokemon, 0, false);
            pokemon.addSpeed(-5 * stacks, pokemon, 0, false);
            pokemon.count.muscleBandCount = 0;
        })
    ], [Item_1.Item.MACH_RIBBON]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.effectsSet.add(new MachRibbonEffect());
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            for (const effect of pokemon.effectsSet) {
                if (effect instanceof MachRibbonEffect) {
                    pokemon.addSpeed(-15 * effect.count, pokemon, 0, false);
                    pokemon.effectsSet.delete(effect);
                    pokemon.count.machRibbonCount = 0;
                    break;
                }
            }
        })
    ], [Item_1.Item.GREEN_ORB]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.effectsSet.add(new GreenOrbEffect());
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            for (const effect of pokemon.effectsSet) {
                if (effect instanceof GreenOrbEffect) {
                    pokemon.effectsSet.delete(effect);
                    break;
                }
            }
        })
    ], [Item_1.Item.DEEP_SEA_TOOTH]: [
        new effect_1.OnAttackEffect(({ pokemon, target, board, hasAttackKilled }) => {
            pokemon.addPP(5, pokemon, 0, false);
            if (hasAttackKilled) {
                pokemon.addPP(15, pokemon, 0, false);
            }
        })
    ], [Item_1.Item.AMULET_COIN]: [
        new effect_1.OnKillEffect(({ attacker }) => {
            if (attacker.player) {
                attacker.player.addMoney(1, true, attacker);
                attacker.count.moneyCount += 1;
                attacker.count.amuletCoinCount += 1;
            }
        })
    ], [Item_1.Item.SMOKE_BALL]: [smokeBallEffect], [Item_1.Item.COMFEY]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            const comfey = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.COMFEY);
            pokemon.addMaxHP(comfey.maxHP, pokemon, 0, false);
            pokemon.addAttack(comfey.atk, pokemon, 0, false);
            pokemon.addDefense(comfey.def, pokemon, 0, false);
            pokemon.addSpecialDefense(comfey.speDef, pokemon, 0, false);
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            const comfey = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.COMFEY);
            pokemon.addMaxHP(-comfey.maxHP, pokemon, 0, false);
            pokemon.addAttack(-comfey.atk, pokemon, 0, false);
            pokemon.addDefense(-comfey.def, pokemon, 0, false);
            pokemon.addSpecialDefense(-comfey.speDef, pokemon, 0, false);
        }),
        new effect_1.OnAbilityCastEffect((pokemon, board, target, crit) => {
            if (pokemon.items.has(Item_1.Item.COMFEY) === false)
                return;
            abilities_1.AbilityStrategies[Ability_1.Ability.FLORAL_HEALING].process(pokemon, board, target, crit, true);
        }, Item_1.Item.COMFEY),
        new effect_1.OnResurrectEffect(dropComfey, Item_1.Item.COMFEY),
        new effect_1.OnDeathEffect(dropComfey, Item_1.Item.COMFEY)
    ], [Item_1.Item.ELECTIRIZER]: [
        new effect_1.OnAttackEffect(({ pokemon, target, board }) => {
            if (target && pokemon.count.attackCount % 3 === 0) {
                target.status.triggerParalysis(2000, target, pokemon);
            }
        })
    ], [Item_1.Item.TERRAIN_EXTENDER]: [
        new effect_1.OnSimulationStartEffect(({ entity }) => {
            const terrainTypes = [
                Synergy_1.Synergy.ELECTRIC,
                Synergy_1.Synergy.GRASS,
                Synergy_1.Synergy.PSYCHIC,
                Synergy_1.Synergy.FAIRY
            ];
            const fieldEffect = (0, schemas_1.schemaValues)(entity.types).find((type) => terrainTypes.includes(type));
            switch (fieldEffect) {
                case Synergy_1.Synergy.ELECTRIC:
                    entity.status.addElectricField(entity);
                    break;
                case Synergy_1.Synergy.GRASS:
                    entity.status.addGrassField(entity);
                    break;
                case Synergy_1.Synergy.PSYCHIC:
                    entity.status.addPsychicField(entity);
                    break;
                case Synergy_1.Synergy.FAIRY:
                    entity.status.addFairyField(entity);
                    break;
            }
        }),
        new effect_1.OnAbilityCastEffect((pokemon, board) => {
            board.cells.forEach((ally) => {
                if (ally && ally.team === pokemon.team && ally.id !== pokemon.id) {
                    if (pokemon.status.electricField &&
                        !ally.status.electricField &&
                        ally.types.has(Synergy_1.Synergy.ELECTRIC)) {
                        ally.status.addElectricField(ally);
                    }
                    if (pokemon.status.grassField &&
                        !ally.status.grassField &&
                        ally.types.has(Synergy_1.Synergy.GRASS)) {
                        ally.status.addGrassField(ally);
                    }
                    if (pokemon.status.psychicField &&
                        !ally.status.psychicField &&
                        ally.types.has(Synergy_1.Synergy.PSYCHIC)) {
                        ally.status.addPsychicField(ally);
                    }
                    if (pokemon.status.fairyField &&
                        !ally.status.fairyField &&
                        ally.types.has(Synergy_1.Synergy.FAIRY)) {
                        ally.status.addFairyField(ally);
                    }
                }
            });
        })
    ], [Item_1.Item.RUNNING_SHOES]: [
        () => new RunningShoesOnMoveEffect(),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            var _a, _b;
            const stacks = (_b = (_a = Object.values(pokemon.effectsSet).find((effect) => effect instanceof RunningShoesOnMoveEffect)) === null || _a === void 0 ? void 0 : _a.stacks) !== null && _b !== void 0 ? _b : 0;
            pokemon.addSpeed(-5 * stacks, pokemon, 0, false);
        })
    ], [Item_1.Item.REAPER_CLOTH]: [
        new effect_1.OnItemGainedEffect((pokemon) => {
            pokemon.effects.add(Effect_1.EffectEnum.ABILITY_CRIT);
            if (abilities_1.AbilityStrategies[pokemon.skill].canCritByDefault) {
                pokemon.addCritPower(50, pokemon, 0, false);
            }
        }),
        new effect_1.OnItemRemovedEffect((pokemon) => {
            pokemon.effects.delete(Effect_1.EffectEnum.ABILITY_CRIT);
            if (abilities_1.AbilityStrategies[pokemon.skill].canCritByDefault) {
                pokemon.addCritPower(-50, pokemon, 0, false);
            }
        })
    ], [Item_1.Item.BLUE_ORB]: [exports.blueOrbOnAttackEffect], [Item_1.Item.LOADED_DICE]: [exports.loadedDiceOnAttackEffect], [Item_1.Item.STICKY_BARB]: [
        new effect_1.OnAttackReceivedEffect(({ pokemon, attacker }) => {
            if (attacker &&
                attacker.items.has(Item_1.Item.PROTECTIVE_PADS) === false &&
                (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, attacker.positionX, attacker.positionY) === 1) {
                const damage = Math.round(3 + 0.15 * pokemon.def);
                attacker.handleDamage({
                    damage,
                    board: pokemon.simulation.board,
                    attackType: Game_1.AttackType.TRUE,
                    attacker: pokemon,
                    shouldTargetGainMana: true
                });
                attacker.status.triggerWound(3000, attacker, pokemon);
            }
        })
    ], [Item_1.Item.AQUA_EGG]: [
        new effect_1.OnAbilityCastEffect((pokemon) => {
            const ppRegained = (0, number_1.max)(pokemon.maxPP - 10)(Math.round(0.2 * pokemon.maxPP + 2 * pokemon.count.ult));
            pokemon.addPP(ppRegained, pokemon, 0, false);
        })
    ], [Item_1.Item.SCOPE_LENS]: [
        new effect_1.OnAttackEffect(({ pokemon, target, crit }) => {
            if (crit && target) {
                const ppStolen = (0, number_1.max)(target.pp)(10);
                pokemon.addPP(ppStolen, pokemon, 0, false);
                target.addPP(-ppStolen, pokemon, 0, false);
                target.count.manaBurnCount++;
            }
        })
    ], [Item_1.Item.RAZOR_FANG]: [
        new effect_1.BeforeAttackEffect(({ target, crit }) => {
            if (crit && target) {
                target.status.triggerArmorReduction(2000, target);
            }
        })
    ], [Item_1.Item.STAR_DUST]: [
        new effect_1.OnAbilityCastEffect((pokemon) => {
            pokemon.addShield(Math.round(0.5 * pokemon.maxPP), pokemon, 0, false);
            pokemon.count.starDustCount++;
        })
    ], [Item_1.Item.LEPPA_BERRY]: [
        new effect_1.OnAbilityCastEffect((pokemon) => {
            pokemon.eatBerry(Item_1.Item.LEPPA_BERRY);
        })
    ], [Item_1.Item.BABIRI_BERRY]: [
        new effect_1.OnAttackReceivedEffect(({ pokemon, crit }) => {
            if (crit) {
                pokemon.eatBerry(Item_1.Item.BABIRI_BERRY);
            }
        })
    ], [Item_1.Item.MAX_ELIXIR]: [
        new effect_1.OnAbilityCastEffect((pokemon) => {
            if (pokemon.count.ult === 1) {
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                    pokemon.addPP(pokemon.maxPP, pokemon, 0, false);
                    pokemon.removeItem(Item_1.Item.MAX_ELIXIR, false);
                }, 1000));
            }
        })
    ], [Item_1.Item.ABSORB_BULB]: [
        new effect_1.OnDamageReceivedEffect(({ pokemon, board }) => {
            if (pokemon.hp < 0.5 * pokemon.maxHP) {
                const damage = pokemon.physicalDamageReduced + pokemon.specialDamageReduced;
                pokemon.broadcastAbility({ skill: Ability_1.Ability.EXPLOSION });
                board
                    .getAdjacentCells(pokemon.positionX, pokemon.positionY)
                    .forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, false, false);
                    }
                });
                pokemon.removeItem(Item_1.Item.ABSORB_BULB);
            }
        })
    ], [Item_1.Item.METEORITE]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player }) => {
            if ((pokemon === null || pokemon === void 0 ? void 0 : pokemon.passive) === Passive_1.Passive.ALIEN_DNA) {
                if (pokemon.name === Pokemon_1.Pkm.DEOXYS) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.DEOXYS_ATTACK);
                }
                else if (pokemon.name === Pokemon_1.Pkm.DEOXYS_ATTACK) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.DEOXYS_DEFENSE);
                }
                else if (pokemon.name === Pokemon_1.Pkm.DEOXYS_DEFENSE) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.DEOXYS_SPEED);
                }
                else if (pokemon.name === Pokemon_1.Pkm.DEOXYS_SPEED) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.DEOXYS);
                }
            }
            return false;
        })
    ], [Item_1.Item.ROTOM_CATALOG]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player }) => {
            if ((pokemon === null || pokemon === void 0 ? void 0 : pokemon.passive) === Passive_1.Passive.ROTOM) {
                if (pokemon.name === Pokemon_1.Pkm.ROTOM) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.ROTOM_HEAT);
                }
                else if (pokemon.name === Pokemon_1.Pkm.ROTOM_HEAT) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.ROTOM_WASH);
                }
                else if (pokemon.name === Pokemon_1.Pkm.ROTOM_WASH) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.ROTOM_FROST);
                }
                else if (pokemon.name === Pokemon_1.Pkm.ROTOM_FROST) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.ROTOM_FAN);
                }
                else if (pokemon.name === Pokemon_1.Pkm.ROTOM_FAN) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.ROTOM_MOW);
                }
                else if (pokemon.name === Pokemon_1.Pkm.ROTOM_MOW) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.ROTOM_DRONE);
                }
                else if (pokemon.name === Pokemon_1.Pkm.ROTOM_DRONE) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.ROTOM);
                }
            }
            return false;
        })
    ], [Item_1.Item.ZYGARDE_CUBE]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player }) => {
            if ((pokemon === null || pokemon === void 0 ? void 0 : pokemon.passive) === Passive_1.Passive.ZYGARDE) {
                if (pokemon.name === Pokemon_1.Pkm.ZYGARDE_10) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.ZYGARDE_50);
                }
                else if (pokemon.name === Pokemon_1.Pkm.ZYGARDE_50) {
                    player.transformPokemon(pokemon, Pokemon_1.Pkm.ZYGARDE_10);
                }
            }
            return false;
        })
    ], [Item_1.Item.TEAL_MASK]: [ogerponMaskEffect], [Item_1.Item.WELLSPRING_MASK]: [ogerponMaskEffect], [Item_1.Item.CORNERSTONE_MASK]: [ogerponMaskEffect], [Item_1.Item.HEARTHFLAME_MASK]: [ogerponMaskEffect], [Item_1.Item.FIRE_SHARD]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, item }) => {
            if (pokemon.types.has(Synergy_1.Synergy.FIRE) && player.life > 3) {
                pokemon.atk += 3;
                pokemon.speed += 3;
                player.life = (0, number_1.min)(1)(player.life - 3);
                (0, array_1.removeInArray)(player.items, item);
            }
            return false;
        })
    ], [Item_1.Item.CELL_BATTERY]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, item }) => {
            if (pokemon.types.has(Synergy_1.Synergy.ELECTRIC) && !pokemon.supercharged) {
                pokemon.supercharged = true;
                (0, array_1.removeInArray)(player.items, item);
            }
            return false;
        })
    ], [Item_1.Item.RECYCLE_TICKET]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, item }) => {
            let consummed = false;
            pokemon.items.forEach((heldItem) => {
                const recipe = Item_1.ItemRecipe[heldItem];
                if (recipe) {
                    player.items.push(...recipe);
                    pokemon.removeItem(heldItem, player);
                    consummed = true;
                }
                if (Item_1.Scarves.includes(heldItem)) {
                    (0, array_1.removeInArray)(player.scarvesItems, heldItem);
                }
            });
            if (consummed) {
                (0, array_1.removeInArray)(player.items, item);
            }
            return false;
        })
    ], [Item_1.Item.EXCHANGE_TICKET]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, item, room }) => {
            return false;
        })
    ], [Item_1.Item.CHEF_HAT]: [
        chefCookEffect,
        new effect_1.OnItemDroppedEffect(({ pokemon }) => {
            const canEquip = pokemon.types.has(Synergy_1.Synergy.GOURMET);
            return canEquip;
        })
    ], [Item_1.Item.EVIOLITE]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, item }) => {
            const canEquip = pokemon.hasEvolution;
            return canEquip;
        })
    ], [Item_1.Item.PICNIC_SET]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, item }) => {
            if (pokemon.canEat) {
                let nbSandwiches = 0;
                (0, schemas_1.schemaValues)(player.board).forEach((pkm) => {
                    if (pkm.canEat &&
                        pokemon &&
                        (0, distance_1.distanceC)(pkm.positionX, pkm.positionY, pokemon.positionX, pokemon.positionY) <= 1) {
                        pkm.dishes.add(Item_1.Item.SANDWICH);
                        pkm.action = Game_1.PokemonActionState.EAT;
                        nbSandwiches++;
                    }
                });
                (0, array_1.removeInArray)(player.items, item);
                if (nbSandwiches >= 9) {
                    player.titles.add(types_1.Title.PICNICKER);
                }
            }
            return false;
        })
    ], [Item_1.Item.LAPRAS_PASSPORT]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, item, room }) => {
            const previousMap = player.map;
            const chosenSynergies = (0, schemas_1.schemaValues)(pokemon.types);
            const maps = Object.values(Dungeon_1.DungeonPMDO).filter((map) => map !== previousMap);
            let nbMaxInCommon = 0, candidateMaps = [];
            maps.forEach((map) => {
                const synergies = config_1.RegionDetails[map].synergies;
                const inCommon = synergies.filter((s) => chosenSynergies.includes(s));
                if (inCommon.length > nbMaxInCommon) {
                    nbMaxInCommon = inCommon.length;
                    candidateMaps = [map];
                }
                else if (inCommon.length === nbMaxInCommon) {
                    candidateMaps.push(map);
                }
            });
            const newMap = (0, random_1.pickRandomIn)(candidateMaps);
            room.broadcast(types_1.Transfer.PRELOAD_MAPS, [newMap]);
            player.spawnWanderingPokemon({
                pkm: Pokemon_1.Pkm.LAPRAS,
                type: Wanderer_1.WandererType.DIALOG,
                behavior: Wanderer_1.WandererBehavior.SPECTATE,
                data: newMap
            });
            setTimeout(() => {
                player.map = newMap;
                player.regions.push(newMap);
                player.updateRegionalPool(room.state, true, previousMap);
            }, 10000);
            (0, array_1.removeInArray)(player.items, item);
            return false;
        })
    ] }), Object.fromEntries(Item_1.Flavors.map((flavor) => [
    flavor,
    [
        new effect_1.OnItemDroppedEffect(({ pokemon }) => pokemon.skill === Ability_1.Ability.DECORATE)
    ]
]))), { [Item_1.Item.MALICIOUS_ARMOR]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, room, item }) => {
            return pokemon.passive === Passive_1.Passive.CHARCADET;
        })
    ], [Item_1.Item.AUSPICIOUS_ARMOR]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, room, item }) => {
            return pokemon.passive === Passive_1.Passive.CHARCADET;
        })
    ], [Item_1.Item.SCROLL_OF_DARKNESS]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, room, item }) => {
            return pokemon.passive === Passive_1.Passive.KUBFU;
        })
    ], [Item_1.Item.SCROLL_OF_WATERS]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, room, item }) => {
            return pokemon.passive === Passive_1.Passive.KUBFU;
        })
    ], [Item_1.Item.RARE_CANDY]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, room, item }) => {
            var _a;
            const evolution = (_a = pokemon.evolutionRule) === null || _a === void 0 ? void 0 : _a.getEvolution(pokemon, player);
            if (!evolution ||
                evolution === Pokemon_1.Pkm.DEFAULT ||
                pokemon.items.has(Item_1.Item.EVIOLITE) ||
                pokemon.items.size >= 3) {
                return false;
            }
            const pokemonEvolved = player.transformPokemon(pokemon, evolution);
            pokemon.afterEvolve({
                pokemonEvolved,
                pokemonsBeforeEvolution: [pokemon],
                player
            });
            pokemonEvolved.items.add(item);
            (0, array_1.removeInArray)(player.items, item);
            if (pokemonEvolved.items.has(Item_1.Item.SHINY_CHARM)) {
                pokemonEvolved.shiny = true;
            }
            room.checkEvolutionsAfterItemAcquired(player.id, pokemon);
            player.updateSynergies();
            return false;
        })
    ], [Item_1.Item.OLD_ROD]: [new FishingRodEffect(Item_1.Item.OLD_ROD)], [Item_1.Item.GOOD_ROD]: [new FishingRodEffect(Item_1.Item.GOOD_ROD)], [Item_1.Item.SUPER_ROD]: [new FishingRodEffect(Item_1.Item.SUPER_ROD)], [Item_1.Item.RICH_MULCH]: [
        new effect_1.OnItemDroppedEffect(() => {
            return false;
        })
    ], [Item_1.Item.AMAZE_MULCH]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, player, item }) => {
            if (flower_pots_1.FlowerPotMons.includes(pokemon.name)) {
                pokemon.addMaxHP(50);
                pokemon.ap += 30;
                (0, array_1.removeInArray)(player.items, item);
            }
            return false;
        })
    ], [Item_1.Item.BRONZE_DOJO_TICKET]: [new DojoTicketOnItemDroppedEffect(1)], [Item_1.Item.SILVER_DOJO_TICKET]: [new DojoTicketOnItemDroppedEffect(2)], [Item_1.Item.GOLD_DOJO_TICKET]: [new DojoTicketOnItemDroppedEffect(3)] }), Object.fromEntries(Item_1.MemoryDiscs.map((memory) => [
    memory,
    [
        new effect_1.OnItemDroppedEffect(({ pokemon }) => Pokemon_1.PkmFamily[pokemon.name] === Pokemon_1.Pkm.TYPE_NULL)
    ]
]))), { [Item_1.Item.SPELL_TAG]: [
        new effect_1.OnDeathEffect(({ attacker }) => {
            attacker === null || attacker === void 0 ? void 0 : attacker.status.triggerCurse(10000, attacker);
        })
    ], [Item_1.Item.EXPLOSIVE_BAND]: [
        new effect_1.OnShieldDepletedEffect(({ pokemon, board }) => {
            var _a, _b;
            if (!pokemon.items.has(Item_1.Item.EXPLOSIVE_BAND)) {
                return;
            }
            const adjacentCells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
            const dps = pokemon.team === Game_1.Team.BLUE_TEAM
                ? pokemon.simulation.blueDpsMeter
                : pokemon.simulation.redDpsMeter;
            const shieldGained = (_b = (_a = dps.get(pokemon.id)) === null || _a === void 0 ? void 0 : _a.shield) !== null && _b !== void 0 ? _b : 0;
            const explosionDamage = Math.round(0.5 * shieldGained);
            pokemon.broadcastAbility({ skill: "EXPLOSION" });
            pokemon.removeItem(Item_1.Item.EXPLOSIVE_BAND);
            adjacentCells.forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    cell.value.handleSpecialDamage(explosionDamage, board, Game_1.AttackType.SPECIAL, pokemon, false, false);
                }
            });
        })
    ], [Item_1.Item.EFFICIENT_BANDANNA]: [
        new effect_1.OnSimulationStartEffect(({ entity, simulation }) => {
            ;
            [-1, 0, 1].forEach((offset) => {
                const ally = simulation.board.getEntityOnCell(entity.positionX + offset, entity.positionY);
                if (ally) {
                    ally.maxPP = Math.round(0.85 * ally.maxPP);
                }
            });
        }, Item_1.Item.EFFICIENT_BANDANNA)
    ], [Item_1.Item.LUCKY_RIBBON]: [
        new effect_1.OnSimulationStartEffect(({ entity }) => {
            entity.addDodgeChance(0.15, entity, 0, false);
        })
    ] });
//# sourceMappingURL=items.js.map