"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassiveEffects = exports.WaterSpringEffect = void 0;
exports.drumBeat = drumBeat;
exports.stenchJump = stenchJump;
exports.partingShot = partingShot;
exports.transformToIceFace = transformToIceFace;
exports.transformToNoice = transformToNoice;
const config_1 = require("../../config");
const synergies_1 = require("../../config/game/synergies");
const pokemon_1 = require("../../models/colyseus-models/pokemon");
const synergies_2 = require("../../models/colyseus-models/synergies");
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const types_1 = require("../../types");
const Ability_1 = require("../../types/enum/Ability");
const Effect_1 = require("../../types/enum/Effect");
const Emotion_1 = require("../../types/enum/Emotion");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const Pokemon_1 = require("../../types/enum/Pokemon");
const SpecialGameRule_1 = require("../../types/enum/SpecialGameRule");
const Synergy_1 = require("../../types/enum/Synergy");
const Weather_1 = require("../../types/enum/Weather");
const array_1 = require("../../utils/array");
const avatar_1 = require("../../utils/avatar");
const board_1 = require("../../utils/board");
const distance_1 = require("../../utils/distance");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const abilities_1 = require("../abilities/abilities");
const cast_1 = require("../abilities/cast");
const simulation_command_1 = require("../simulation-command");
const unit_score_1 = require("../unit-score");
const effect_1 = require("./effect");
const acceleration_1 = require("./passives/acceleration");
const bergmite_on_back_1 = require("./passives/bergmite-on-back");
const falinks_formation_1 = require("./passives/falinks-formation");
function drumBeat(pokemon, board) {
    var _a, _b;
    const speed = pokemon.status.paralysis ? pokemon.speed / 2 : pokemon.speed;
    pokemon.resetCooldown(1000, speed);
    if (pokemon.pp >= pokemon.maxPP && pokemon.canCast) {
        const target = (_a = pokemon.state.getNearestTargetAtSight(pokemon, board)) === null || _a === void 0 ? void 0 : _a.target;
        if (target) {
            (0, cast_1.castAbility)(abilities_1.AbilityStrategies[pokemon.skill], pokemon, board, target);
        }
        return;
    }
    pokemon.count.attackCount++;
    pokemon.targetY = -1;
    const ppGained = (_b = [2, 3, 5][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 5;
    board
        .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
        .forEach((cell) => {
        if (cell.value &&
            cell.value.team === pokemon.team &&
            cell.value.passive !== Passive_1.Passive.DRUMMER) {
            cell.value.addPP(ppGained, pokemon, 0, false);
        }
    });
    pokemon.getEffects(effect_1.OnAttackEffect).forEach((effect) => {
        effect.apply({
            pokemon,
            target: null,
            board,
            physicalDamage: 0,
            specialDamage: 0,
            trueDamage: 0,
            totalDamage: 0,
            crit: false
        });
    });
}
function stenchJump(pokemon, board, x, y) {
    if (!pokemon.simulation || !board)
        return;
    board
        .getCellsBetween(x, y, pokemon.positionX, pokemon.positionY)
        .forEach((cell) => {
        if (cell.x !== x || cell.y !== y) {
            board.addBoardEffect(cell.x, cell.y, Effect_1.EffectEnum.POISON_GAS, pokemon.simulation);
        }
    });
}
function partingShot(pokemon, target, x, y) {
    target.addAbilityPower(-20, pokemon, 0, false);
    target.addAttack(-0.2 * target.baseAtk, pokemon, 0, false);
    target.effects.add(Effect_1.EffectEnum.PARTING_SHOT);
    pokemon.broadcastAbility({
        skill: "PARTING_SHOT",
        positionX: x,
        positionY: y
    });
}
const SharedVisionEffect = new effect_1.OnAttackEffect(({ pokemon, board }) => {
    board.forEach((x, y, ally) => {
        if (ally &&
            ally.passive === Passive_1.Passive.SHARED_VISION &&
            pokemon.team === ally.team &&
            pokemon.targetEntityId !== ally.id) {
            ally.targetX = pokemon.targetX;
            ally.targetY = pokemon.targetY;
            ally.targetEntityId = pokemon.targetEntityId;
        }
    });
}, Passive_1.Passive.SHARED_VISION);
const DurantBugBuffEffect = new effect_1.OnAttackEffect(({ pokemon, target, board }) => {
    if (target) {
        const bugAllies = board.cells.filter((entity) => entity &&
            entity.team === pokemon.team &&
            entity.types.has(Synergy_1.Synergy.BUG)).length - 1;
        if (bugAllies > 0) {
            target.handleDamage({
                damage: bugAllies,
                board,
                attackType: Game_1.AttackType.TRUE,
                attacker: pokemon,
                shouldTargetGainMana: true
            });
        }
    }
}, Passive_1.Passive.DURANT);
const MiniorKernelOnAttackEffect = new effect_1.OnAttackEffect(({ pokemon, target, board, physicalDamage }) => {
    var _a;
    if (target &&
        (pokemon.name === Pokemon_1.Pkm.MINIOR_KERNEL_BLUE ||
            pokemon.name === Pokemon_1.Pkm.MINIOR_KERNEL_GREEN ||
            pokemon.name === Pokemon_1.Pkm.MINIOR_KERNEL_RED ||
            pokemon.name === Pokemon_1.Pkm.MINIOR_KERNEL_ORANGE)) {
        const cells = board.getAdjacentCells(target.positionX, target.positionY);
        const targets = cells
            .filter((cell) => cell.value && pokemon.team != cell.value.team)
            .map((cell) => cell.value)
            .concat(target);
        const multiplier = (_a = [1, 1, 1, 2][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 2;
        targets.forEach((t) => {
            pokemon.broadcastAbility({
                skill: Ability_1.Ability.SHIELDS_DOWN,
                targetX: t.positionX,
                targetY: t.positionY
            });
            if (pokemon.name === Pokemon_1.Pkm.MINIOR_KERNEL_BLUE) {
                t.handleDamage({
                    damage: Math.ceil(physicalDamage * (1 + pokemon.ap / 100) * multiplier),
                    board,
                    attackType: Game_1.AttackType.SPECIAL,
                    attacker: pokemon,
                    shouldTargetGainMana: false
                });
            }
            if (pokemon.name === Pokemon_1.Pkm.MINIOR_KERNEL_RED) {
                t.handleDamage({
                    damage: Math.ceil(physicalDamage * 1.5 * (1 + pokemon.ap / 100) * multiplier),
                    board,
                    attackType: Game_1.AttackType.PHYSICAL,
                    attacker: pokemon,
                    shouldTargetGainMana: false
                });
            }
            if (pokemon.name === Pokemon_1.Pkm.MINIOR_KERNEL_ORANGE) {
                t.handleDamage({
                    damage: Math.ceil(physicalDamage * 0.5 * (1 + pokemon.ap / 100) * multiplier),
                    board,
                    attackType: Game_1.AttackType.TRUE,
                    attacker: pokemon,
                    shouldTargetGainMana: false
                });
            }
        });
        if (pokemon.name === Pokemon_1.Pkm.MINIOR_KERNEL_GREEN) {
            cells.forEach((v) => {
                if (v.value && v.value.team === pokemon.team) {
                    v.value.handleHeal(physicalDamage * multiplier, pokemon, 1, false);
                }
            });
        }
    }
}, Passive_1.Passive.METEOR);
const KubfuOnKillEffect = new effect_1.OnKillEffect(({ attacker: pokemon, attackType }) => {
    const SPEED_BUFF_PER_KILL = 3;
    const AP_BUFF_PER_KILL = 5;
    const MAX_BUFFS = 10;
    const baseSpeed = 50;
    let nbBuffsSpeed = Math.floor((pokemon.refToBoardPokemon.speed - baseSpeed) / SPEED_BUFF_PER_KILL);
    let nbBuffsAP = Math.floor(pokemon.refToBoardPokemon.ap / AP_BUFF_PER_KILL);
    if (attackType === Game_1.AttackType.PHYSICAL) {
        if (nbBuffsSpeed < MAX_BUFFS) {
            pokemon.addSpeed(SPEED_BUFF_PER_KILL, pokemon, 0, false, true);
            nbBuffsSpeed++;
        }
        if (nbBuffsSpeed >= MAX_BUFFS &&
            pokemon.name === Pokemon_1.Pkm.KUBFU &&
            pokemon.player &&
            pokemon.player.items.includes(Item_1.Item.SCROLL_OF_WATERS) === false) {
            pokemon.player.items.push(Item_1.Item.SCROLL_OF_WATERS);
        }
    }
    else {
        if (nbBuffsAP < MAX_BUFFS) {
            pokemon.addAbilityPower(AP_BUFF_PER_KILL, pokemon, 0, false, true);
            nbBuffsAP++;
        }
        if (nbBuffsAP >= MAX_BUFFS &&
            pokemon.name === Pokemon_1.Pkm.KUBFU &&
            pokemon.player &&
            pokemon.player.items.includes(Item_1.Item.SCROLL_OF_DARKNESS) === false) {
            pokemon.player.items.push(Item_1.Item.SCROLL_OF_DARKNESS);
        }
    }
    pokemon.refToBoardPokemon.stacks = (0, number_1.max)(MAX_BUFFS)(Math.max(nbBuffsAP, nbBuffsSpeed));
    pokemon.stacks = pokemon.refToBoardPokemon.stacks;
}, Passive_1.Passive.KUBFU);
const QwilfishPassiveEffect = new effect_1.OnDamageReceivedEffect(({ pokemon, attacker, attackType, isRetaliation }) => {
    if (attackType === Game_1.AttackType.PHYSICAL &&
        !isRetaliation &&
        attacker &&
        attacker.items.has(Item_1.Item.PROTECTIVE_PADS) === false &&
        (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, attacker.positionX, attacker.positionY) === 1) {
        const damage = 5;
        attacker.handleDamage({
            damage,
            board: pokemon.simulation.board,
            attackType: Game_1.AttackType.TRUE,
            attacker: pokemon,
            shouldTargetGainMana: true
        });
        if ((0, random_1.chance)(0.3, pokemon)) {
            attacker.status.triggerPoison(3000, attacker, pokemon);
        }
    }
}, Passive_1.Passive.QWILFISH);
exports.WaterSpringEffect = new effect_1.OnAbilityCastEffect((pokemon, board) => {
    board.forEach((x, y, pkm) => {
        if ((pkm === null || pkm === void 0 ? void 0 : pkm.passive) === Passive_1.Passive.WATER_SPRING && pkm.team !== pokemon.team) {
            pkm.addPP(5, pkm, 0, false);
            pkm.broadcastAbility({ skill: pkm.skill });
        }
    });
}, Passive_1.Passive.WATER_SPRING);
const MimikuBustedTransformEffect = new effect_1.OnDamageReceivedEffect(({ pokemon }) => {
    if (pokemon.hp / pokemon.maxHP < 0.5) {
        pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.MIMIKYU_BUSTED];
        pokemon.name = Pokemon_1.Pkm.MIMIKYU_BUSTED;
        pokemon.changePassive(Passive_1.Passive.MIMIKYU_BUSTED);
        pokemon.addAttack(8, pokemon, 0, false);
        pokemon.status.triggerProtect(1500);
        if (pokemon.player) {
            pokemon.player.pokemonsPlayed.add(Pokemon_1.Pkm.MIMIKYU_BUSTED);
        }
    }
}, Passive_1.Passive.MIMIKYU);
const DarmanitanZenTransformEffect = new effect_1.OnDamageReceivedEffect(({ pokemon, board }) => {
    if (pokemon.hp < 0.3 * pokemon.maxHP &&
        pokemon.passive === Passive_1.Passive.DARMANITAN) {
        pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.DARMANITAN_ZEN];
        pokemon.name = Pokemon_1.Pkm.DARMANITAN_ZEN;
        pokemon.changePassive(Passive_1.Passive.DARMANITAN_ZEN);
        pokemon.skill = Ability_1.Ability.TRANSE;
        pokemon.pp = 0;
        const destination = board.getTeleportationCell(pokemon.positionX, pokemon.positionY, pokemon.team);
        if (destination)
            pokemon.moveTo(destination.x, destination.y, board, false);
        pokemon.toIdleState();
        pokemon.addAttack(-10, pokemon, 0, false);
        pokemon.addSpeed(-20, pokemon, 0, false);
        pokemon.addDefense(6, pokemon, 0, false);
        pokemon.addSpecialDefense(6, pokemon, 0, false);
        pokemon.range += 4;
        pokemon.effects.add(Effect_1.EffectEnum.SPECIAL_ATTACKS);
        if (pokemon.player) {
            pokemon.player.pokemonsPlayed.add(Pokemon_1.Pkm.DARMANITAN_ZEN);
        }
    }
}, Passive_1.Passive.DARMANITAN);
const GalarianDarmanitanZenTransformEffect = new effect_1.OnDamageReceivedEffect(({ pokemon }) => {
    if (pokemon.hp < 0.3 * pokemon.maxHP &&
        pokemon.passive === Passive_1.Passive.GALARIAN_DARMANITAN) {
        pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.GALARIAN_DARMANITAN_ZEN];
        pokemon.name = Pokemon_1.Pkm.GALARIAN_DARMANITAN_ZEN;
        pokemon.changePassive(Passive_1.Passive.GALARIAN_DARMANITAN_ZEN);
        pokemon.skill = Ability_1.Ability.TRANSE;
        pokemon.pp = 0;
        pokemon.status.tree = true;
        pokemon.status.untargettable = true;
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            pokemon.status.untargettable = false;
        }, 1500));
        pokemon.toIdleState();
        pokemon.addAttack(6, pokemon, 0, false);
        pokemon.addSpeed(-60, pokemon, 0, false);
        if (pokemon.player) {
            pokemon.player.pokemonsPlayed.add(Pokemon_1.Pkm.GALARIAN_DARMANITAN_ZEN);
        }
    }
}, Passive_1.Passive.GALARIAN_DARMANITAN);
const DarmanitanZenOnHitEffect = new effect_1.OnHitEffect(({ attacker, totalTakenDamage }) => {
    attacker.handleHeal(totalTakenDamage, attacker, 0, false);
}, Passive_1.Passive.DARMANITAN_ZEN);
const GalarianDarmanitanBurnEffect = new effect_1.PeriodicEffect((pokemon, board) => {
    if (pokemon.name === Pokemon_1.Pkm.GALARIAN_DARMANITAN_ZEN) {
        pokemon.broadcastAbility({ skill: "GALARIAN_DARMANITAN_ZEN_BURN" });
        const crit = pokemon.effects.has(Effect_1.EffectEnum.ABILITY_CRIT) &&
            (0, random_1.chance)(pokemon.critChance / 100, pokemon);
        pokemon.handleHeal(10, pokemon, 1, crit);
        const damage = 0.25 * pokemon.atk;
        board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
            .forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                cell.value.status.triggerBurn(2000, pokemon, cell.value);
            }
        });
    }
}, Passive_1.Passive.GALARIAN_DARMANITAN_ZEN, 1000);
const PikachuSurferBuffEffect = new effect_1.OnSpawnEffect((pkm) => {
    if (!pkm.player)
        return;
    const aquaticStepReached = (0, synergies_2.getSynergyStep)(pkm.player.synergies, Synergy_1.Synergy.AQUATIC);
    pkm.addShield(50 * aquaticStepReached, pkm, 0, false);
    pkm.addAttack(3 * aquaticStepReached, pkm, 0, false);
}, Passive_1.Passive.PIKACHU_SURFER);
const ToxicSpikesEffect = new effect_1.OnDamageReceivedEffect(({ pokemon, board }) => {
    if (pokemon.passive === Passive_1.Passive.GLIMMORA &&
        pokemon.hp < 0.5 * pokemon.maxHP &&
        pokemon.simulation &&
        board) {
        pokemon.changePassive(Passive_1.Passive.NONE);
        const cells = new Array();
        let startY = 1;
        let endY = 3;
        if (pokemon.team === Game_1.Team.RED_TEAM) {
            startY = -2;
            endY = 0;
        }
        for (let x = -1; x < 2; x++) {
            for (let y = startY; y < endY; y++) {
                if (board.isOnBoard(pokemon.positionX + x, pokemon.positionY + y)) {
                    cells.push({
                        x: pokemon.positionX + x,
                        y: pokemon.positionY + y,
                        value: board.cells[board.columns * (pokemon.positionY + y) +
                            (pokemon.positionX + x)]
                    });
                }
            }
        }
        cells.forEach((cell) => {
            board.addBoardEffect(cell.x, cell.y, Effect_1.EffectEnum.TOXIC_SPIKES, pokemon.simulation);
            pokemon.broadcastAbility({
                skill: "TOXIC_SPIKES",
                targetX: cell.x,
                targetY: cell.y
            });
            if (cell.value && cell.value.team !== pokemon.team) {
                cell.value.handleSpecialDamage(20, board, Game_1.AttackType.SPECIAL, pokemon, false);
            }
        });
    }
}, Passive_1.Passive.GLIMMORA);
const FurCoatEffect = new effect_1.OnStageStartEffect(({ pokemon, player }) => {
    if (!pokemon)
        return;
    if ((0, board_1.isOnBench)(pokemon)) {
        const { speed: initialSpeed, def: initialDef } = new pokemon_1.PokemonClasses[pokemon.name](pokemon.name);
        pokemon.speed = initialSpeed;
        pokemon.def = initialDef;
        if (pokemon.stacks >= pokemon.stacksRequired && player) {
            pokemon.stacks = 0;
            player.items.push(Item_1.Item.SILK_SCARF);
        }
        pokemon.stacks = 0;
    }
    else if (pokemon.stacks < pokemon.stacksRequired) {
        pokemon.speed = (0, number_1.min)(0)(pokemon.speed - 5);
        pokemon.def += 2;
        pokemon.stacks += 1;
    }
}, Passive_1.Passive.FUR_COAT);
const MilceryFlavorEffect = new effect_1.OnStageStartEffect(({ player, pokemon }) => {
    const milcery = pokemon;
    if (!milcery)
        return;
    const surroundingSynergies = new Map();
    Synergy_1.SynergyArray.forEach((synergy) => {
        surroundingSynergies.set(synergy, 0);
    });
    const adjacentAllies = (0, schemas_1.schemaValues)(player.board).filter((p) => (0, board_1.isOnBench)(p) === false &&
        (0, distance_1.distanceC)(milcery.positionX, milcery.positionY, p.positionX, p.positionY) <= 1);
    adjacentAllies.forEach((ally) => {
        ally.types.forEach((synergy) => {
            surroundingSynergies.set(synergy, surroundingSynergies.get(synergy) + 1);
        });
    });
    let maxSynergy = Synergy_1.Synergy.NORMAL;
    surroundingSynergies.forEach((value, key) => {
        if (value > surroundingSynergies.get(maxSynergy)) {
            maxSynergy = key;
        }
    });
    const flavor = Item_1.SynergyFlavors[maxSynergy];
    Item_1.Flavors.forEach((f) => {
        (0, array_1.removeInArray)(player.items, f);
    });
    player.items.push(flavor);
}, Passive_1.Passive.CREAM);
const PachirisuBerryEffect = new effect_1.OnStageStartEffect(({ pokemon, room, player }) => {
    if (!pokemon || !player)
        return;
    room.clock.setTimeout(() => {
        if ((0, random_1.chance)(0.3, pokemon)) {
            room.broadcast(types_1.Transfer.DIG, {
                pokemonId: pokemon.id,
                buriedItem: Item_1.Item.SITRUS_BERRY
            });
            room.clock.setTimeout(() => {
                player.items.push(Item_1.Item.SITRUS_BERRY);
            }, 3000);
        }
    }, 1000);
}, Passive_1.Passive.PACHIRISU);
class ClearWingEffect extends effect_1.PeriodicEffect {
    constructor() {
        super((pokemon) => {
            pokemon.addSpeed(1, pokemon, 0, false);
        }, Passive_1.Passive.CLEAR_WING, 1000);
    }
}
class ZygardeCellsEffect extends effect_1.PeriodicEffect {
    constructor() {
        super((pokemon) => {
            if (!pokemon.player || this.cellsCount >= 95)
                return;
            const fullyDugHolesIndexes = [];
            let cellsSpawned = 0;
            const delay = 1800;
            for (let i = 0; i < 24; i++)
                if (pokemon.player.groundHoles[i] === 5)
                    fullyDugHolesIndexes.push(i);
            for (const index of fullyDugHolesIndexes) {
                if (this.cellsCount < 95) {
                    this.cellsCount++;
                    cellsSpawned++;
                    const x = +index % 8;
                    const y = Math.floor(+index / 8);
                    if (x !== pokemon.positionX || y !== pokemon.positionY) {
                        pokemon.broadcastAbility({
                            targetX: x,
                            targetY: y,
                            skill: "ZYGARDE_CELL"
                        });
                    }
                }
            }
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                if (pokemon.name === Pokemon_1.Pkm.ZYGARDE_100)
                    return;
                pokemon.addMaxHP(cellsSpawned, pokemon, 0, false);
                if (this.cellsCount >= 95) {
                    pokemon.handleHeal(0.2 * pokemon.maxHP, pokemon, 0, false);
                    if (pokemon.index === Pokemon_1.PkmIndex[Pokemon_1.Pkm.ZYGARDE_10]) {
                        pokemon.addDefense(2, pokemon, 0, false);
                        pokemon.addSpecialDefense(2, pokemon, 0, false);
                        pokemon.addMaxHP(5, pokemon, 0, false);
                        pokemon.addSpeed(-12, pokemon, 0, false);
                        pokemon.range = (0, number_1.min)(1)(pokemon.range + 1);
                    }
                    else if (pokemon.index === Pokemon_1.PkmIndex[Pokemon_1.Pkm.ZYGARDE_50]) {
                        pokemon.addAttack(5, pokemon, 0, false);
                        pokemon.addDefense(5, pokemon, 0, false);
                        pokemon.addSpecialDefense(5, pokemon, 0, false);
                        pokemon.addMaxHP(35, pokemon, 0, false);
                        pokemon.addSpeed(-5, pokemon, 0, false);
                        pokemon.range = (0, number_1.min)(1)(pokemon.range - 1);
                    }
                    pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ZYGARDE_100];
                    pokemon.name = Pokemon_1.Pkm.ZYGARDE_100;
                    pokemon.changePassive(Passive_1.Passive.NONE);
                    pokemon.skill = Ability_1.Ability.CORE_ENFORCER;
                    pokemon.effectsSet.delete(this);
                    if (pokemon.player) {
                        pokemon.player.pokemonsPlayed.add(Pokemon_1.Pkm.ZYGARDE_100);
                    }
                }
            }, delay));
        }, Passive_1.Passive.ZYGARDE, 1000);
        this.cellsCount = 0;
    }
}
class SynchroEffect extends effect_1.PeriodicEffect {
    constructor() {
        super((pokemon) => {
            const status = pokemon.status;
            if (status.burn && status.burnOrigin) {
                status.burnOrigin.status.triggerBurn(3000, status.burnOrigin, pokemon);
            }
            if (status.poisonStacks && status.poisonOrigin) {
                status.poisonOrigin.status.triggerPoison(3000, status.poisonOrigin, pokemon);
            }
            if (status.wound && status.woundOrigin) {
                status.woundOrigin.status.triggerWound(3000, status.woundOrigin, pokemon);
            }
            if (status.silence && status.silenceOrigin) {
                status.silenceOrigin.status.triggerSilence(3000, status.silenceOrigin, pokemon);
            }
        }, Passive_1.Passive.SYNCHRO, 3000);
    }
}
const ogerponMaskDropEffect = (mask, from, to) => new effect_1.OnShieldDepletedEffect(({ pokemon }) => {
    if (pokemon.name === from && pokemon.items.has(mask)) {
        pokemon.index = Pokemon_1.PkmIndex[to];
        pokemon.name = to;
        pokemon.removeItem(mask);
        if (pokemon.player) {
            pokemon.player.pokemonsPlayed.add(to);
        }
    }
}, mask);
const PyukumukuExplodeOnDeathEffect = new effect_1.OnDeathEffect(({ pokemon, board }) => {
    pokemon.broadcastAbility({ skill: Ability_1.Ability.EXPLOSION });
    const adjcells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
    const damage = Math.round(0.5 * pokemon.maxHP);
    adjcells.forEach((cell) => {
        if (cell.value && pokemon.team != cell.value.team) {
            cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, false);
        }
    });
}, Passive_1.Passive.PYUKUMUKU);
const comfeyEquipOnSimulationStartEffect = new effect_1.OnSimulationStartEffect(({ simulation, team, entity }) => {
    const alliesWithFreeSlots = (0, schemas_1.schemaValues)(team).filter((p) => p.name !== Pokemon_1.Pkm.COMFEY &&
        p.items.size < 3 &&
        p.refToBoardPokemon.canHoldItems);
    if (alliesWithFreeSlots.length > 0) {
        const minDistance = Math.min(...alliesWithFreeSlots.map((a) => (0, distance_1.distanceC)(a.positionX, a.positionY, entity.positionX, entity.positionY)));
        const nearestAllies = alliesWithFreeSlots.filter((a) => (0, distance_1.distanceC)(a.positionX, a.positionY, entity.positionX, entity.positionY) === minDistance);
        const holder = (0, unit_score_1.getStrongestUnit)(nearestAllies);
        team.delete(entity.id);
        simulation.board.setEntityOnCell(entity.positionX, entity.positionY, undefined);
        if (simulation.blueDpsMeter.has(entity.id)) {
            simulation.blueDpsMeter.delete(entity.id);
        }
        if (simulation.redDpsMeter.has(entity.id)) {
            simulation.redDpsMeter.delete(entity.id);
        }
        holder.addItem(Item_1.Item.COMFEY);
    }
}, Passive_1.Passive.COMFEY);
const commanderPassive = new effect_1.OnSimulationStartEffect(({ simulation, team, entity }) => {
    var _a;
    const dondozo = (_a = simulation.board
        .getAdjacentCells(entity.positionX, entity.positionY)
        .find((cell) => cell.value &&
        cell.value.name === Pokemon_1.Pkm.DONDOZO &&
        cell.value.team === entity.team &&
        cell.value.items.size < 3)) === null || _a === void 0 ? void 0 : _a.value;
    if (dondozo) {
        team.delete(entity.id);
        simulation.board.setEntityOnCell(entity.positionX, entity.positionY, undefined);
        if (simulation.blueDpsMeter.has(entity.id)) {
            simulation.blueDpsMeter.delete(entity.id);
        }
        if (simulation.redDpsMeter.has(entity.id)) {
            simulation.redDpsMeter.delete(entity.id);
        }
        if (entity.name === Pokemon_1.Pkm.TATSUGIRI_CURLY) {
            dondozo.addItem(Item_1.Item.TATSUGIRI_CURLY);
        }
        else if (entity.name === Pokemon_1.Pkm.TATSUGIRI_DROOPY) {
            dondozo.addItem(Item_1.Item.TATSUGIRI_DROOPY);
        }
        else if (entity.name === Pokemon_1.Pkm.TATSUGIRI_STRETCHY) {
            dondozo.addItem(Item_1.Item.TATSUGIRI_STRETCHY);
        }
    }
}, Passive_1.Passive.COMMANDER);
const conversionEffect = new effect_1.OnSimulationStartEffect(({ simulation, player, entity }) => {
    var _a;
    if (!player || entity.isSpawn)
        return;
    const opponent = simulation.bluePlayerId === player.id
        ? simulation.redPlayer
        : simulation.bluePlayer;
    if (!opponent)
        return;
    const synergyCopied = (0, random_1.pickRandomIn)(opponent.synergies.getTopSynergies(1));
    if (entity.types.has(synergyCopied))
        return;
    entity.types.add(synergyCopied);
    const effect = (_a = synergies_1.SynergyEffects[synergyCopied].find((effect) => opponent.effects.has(effect))) !== null && _a !== void 0 ? _a : synergies_1.SynergyEffects[synergyCopied][0];
    simulation.applyEffect(entity, effect);
    if (synergyCopied === Synergy_1.Synergy.BUG) {
        const coord = simulation.getClosestFreeCellToPokemonEntity(entity, entity.team);
        if (coord) {
            const bug = pokemon_factory_1.default.createPokemonFromName(entity.name, player);
            simulation.addPokemon(bug, coord.x, coord.y, entity.team, true);
        }
    }
    if (synergyCopied === Synergy_1.Synergy.DRAGON) {
        const opponentTeam = simulation.getOpponentTeam(player.id);
        const dragonLevel = (0, schemas_1.schemaValues)(opponentTeam).reduce((acc, p) => acc + (p.types.has(Synergy_1.Synergy.DRAGON) ? p.stars : 0), 0);
        if (effect === Effect_1.EffectEnum.DRAGON_SCALES ||
            effect === Effect_1.EffectEnum.DRAGON_DANCE) {
            entity.addShield(dragonLevel * 5, entity, 0, false);
        }
        if (effect === Effect_1.EffectEnum.DRAGON_DANCE) {
            entity.addAbilityPower(dragonLevel, entity, 0, false);
            entity.addSpeed(dragonLevel, entity, 0, false);
        }
    }
    if (synergyCopied === Synergy_1.Synergy.GHOST) {
        entity.addDodgeChance(0.15, entity, 0, false);
    }
    if (synergyCopied === Synergy_1.Synergy.GOURMET && entity.items.size < 3) {
        entity.items.add(Item_1.Item.CHEF_HAT);
    }
    if (synergyCopied === Synergy_1.Synergy.GROUND) {
        player.groundHoles[entity.positionY * config_1.BOARD_WIDTH + entity.positionX] = 5;
    }
    if (synergyCopied === Synergy_1.Synergy.FLORA) {
        const floraLevel = (0, synergies_2.getSynergyStep)(opponent.synergies, Synergy_1.Synergy.FLORA);
        entity.effectsSet.add(new effect_1.OnDeathEffect(({ pokemon }) => {
            let flowerToSpawn = null;
            if (floraLevel === 1)
                flowerToSpawn = Pokemon_1.Pkm.JUMPLUFF;
            else if (floraLevel === 2)
                flowerToSpawn = Pokemon_1.Pkm.VICTREEBEL;
            else if (floraLevel === 3)
                flowerToSpawn = Pokemon_1.Pkm.MEGANIUM;
            else if (floraLevel === 4)
                flowerToSpawn = Pokemon_1.Pkm.VILEPLUME;
            if (flowerToSpawn) {
                const spawnSpot = simulation.board.getFarthestTargetCoordinateAvailablePlace(pokemon, true);
                if (spawnSpot) {
                    const spawnedPokemon = pokemon_factory_1.default.createPokemonFromName(flowerToSpawn, player);
                    const entity = pokemon.simulation.addPokemon(spawnedPokemon, spawnSpot.x, spawnSpot.y, player.team, true);
                    entity.action = Game_1.PokemonActionState.BLOSSOM;
                    entity.cooldown = 1000;
                    player.pokemonsPlayed.add(flowerToSpawn);
                }
            }
        }));
    }
}, Passive_1.Passive.CONVERSION);
const spawnPhioneFromAquaEggOnSimulationStartEffect = new effect_1.OnSimulationStartEffect(({ entity, simulation, player }) => {
    if (entity.items.has(Item_1.Item.AQUA_EGG)) {
        entity.removeItem(Item_1.Item.AQUA_EGG);
        const coord = simulation.getClosestFreeCellToPokemonEntity(entity, entity.team);
        if (coord) {
            const phione = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.PHIONE, player);
            if (player) {
                player.pokemonsPlayed.add(Pokemon_1.Pkm.PHIONE);
            }
            simulation.addPokemon(phione, coord.x, coord.y, entity.team, true);
        }
    }
}, Passive_1.Passive.MANAPHY);
const stonjournerPowerSpotOnSimulationStartEffect = new effect_1.OnSimulationStartEffect(({ entity, simulation }) => {
    simulation.board
        .getAdjacentCells(entity.positionX, entity.positionY)
        .forEach((cell) => {
        if (cell.value && cell.value.team === entity.team) {
            cell.value.addAbilityPower(entity.inSpotlight ? 100 : 50, cell.value, 0, false);
        }
    });
}, Passive_1.Passive.STONJOURNER);
const treeEffect = new effect_1.OnSpawnEffect((entity) => {
    entity.status.tree = true;
    entity.toIdleState();
});
const inanimateObjectEffect = new effect_1.OnSpawnEffect((entity) => {
    entity.status.tree = true;
    entity.status.triggerRuneProtect(30000, entity, entity);
    entity.toIdleState();
}, Passive_1.Passive.INANIMATE);
const skarmorySpikesOnSimulationStartEffect = new effect_1.OnSimulationStartEffect(({ simulation, entity }) => {
    if (!simulation)
        return;
    entity.commands.push(new simulation_command_1.DelayedCommand(() => {
        const board = simulation.board;
        if (!board)
            return;
        const nbSpikes = 10;
        const positions = new Set();
        for (let i = 0; i < nbSpikes; i++) {
            let x, y;
            do {
                x = Math.floor(Math.random() * board.columns);
                y =
                    Math.floor((Math.random() * board.rows) / 2) +
                        (entity.positionY < 3 ? 3 : 0);
            } while (positions.has(`${x},${y}`));
            positions.add(`${x},${y}`);
            board.addBoardEffect(x, y, Effect_1.EffectEnum.SPIKES, simulation);
            entity.broadcastAbility({
                skill: Ability_1.Ability.SPIKES,
                targetX: x,
                targetY: y
            });
        }
    }, 300));
}, Passive_1.Passive.SKARMORY);
class DrySkinPeriodicEffect extends effect_1.PeriodicEffect {
    constructor() {
        super((pokemon, board) => {
            if (pokemon.simulation.weather === Weather_1.Weather.RAIN) {
                pokemon.handleHeal(8, pokemon, 0, false);
            }
            else if (pokemon.simulation.weather === Weather_1.Weather.DROUGHT) {
                pokemon.handleSpecialDamage(8, board, Game_1.AttackType.TRUE, pokemon, false, false);
            }
        }, Passive_1.Passive.DRY_SKIN, 1000);
    }
}
const drySkinOnSpawnEffect = new effect_1.OnSpawnEffect((entity) => {
    if (entity.simulation.weather === Weather_1.Weather.RAIN ||
        entity.simulation.weather === Weather_1.Weather.DROUGHT) {
        entity.effectsSet.add(new DrySkinPeriodicEffect());
    }
    else if (entity.simulation.weather === Weather_1.Weather.SANDSTORM) {
        entity.addDodgeChance(0.25, entity, 0, false);
    }
    else if (entity.simulation.weather === Weather_1.Weather.ZENITH) {
        entity.addAbilityPower(50, entity, 0, false);
    }
}, Passive_1.Passive.DRY_SKIN);
const spiritombWispEffect = new effect_1.OnSimulationStartEffect(({ entity, simulation }) => {
    if (!entity.player)
        return;
    const nbOddKeystones = (0, number_1.max)(3)(entity.player.items.filter((i) => i === Item_1.Item.ODD_KEYSTONE).length);
    if (nbOddKeystones === 0)
        return;
    const shieldAmount = nbOddKeystones * 10;
    const onKOEffect = new effect_1.OnDeathEffect(({ pokemon }) => {
        if (entity.hp <= 0)
            return;
        entity.broadcastAbility({
            skill: "WISP",
            positionX: entity.positionX,
            positionY: entity.positionY,
            targetX: pokemon.positionX,
            targetY: pokemon.positionY
        });
        entity.commands.push(new simulation_command_1.DelayedCommand(() => {
            entity.addShield(shieldAmount, entity, 0, false);
        }, 1000));
    });
    simulation.board.cells.forEach((pkm) => {
        if (pkm && pkm !== entity) {
            pkm.effectsSet.add(onKOEffect);
        }
    });
}, Passive_1.Passive.SPIRITOMB);
const chinglingCountCastsEffect = new effect_1.OnSimulationStartEffect(({ team, entity }) => {
    if (!entity.player)
        return;
    team.forEach((pkm) => {
        pkm.effectsSet.add(new effect_1.OnAbilityCastEffect(() => entity.addStack()));
    });
}, Passive_1.Passive.CHINGLING);
const SudowoodoGainAttackEffect = new effect_1.PeriodicEffect((pokemon) => {
    if (pokemon.status.tree) {
        pokemon.addAttack(pokemon.stars === 1 ? 1 : 2, pokemon, 0, false);
    }
}, Passive_1.Passive.SUDOWOODO, 1000);
const PoipoleOnKillEffect = new effect_1.OnKillEffect(({ attacker, board }) => {
    const familyMembers = board.cells.filter((entity) => entity != null &&
        entity.team === attacker.team &&
        Pokemon_1.PkmFamily[entity.name] === Pokemon_1.PkmFamily[attacker.name]);
    familyMembers.forEach((entity) => {
        if (!attacker.player)
            return;
        entity.addStack();
        if (entity.refToBoardPokemon.stacks % 2 === 0) {
            entity.addAttack(1, entity, 0, false, true);
        }
    });
    if (!attacker.player)
        return;
    if (familyMembers.every((p) => p.isSpawn)) {
        const originalPoipole = (0, schemas_1.schemaValues)(attacker.player.board).find((p) => Pokemon_1.PkmFamily[p.name] === Pokemon_1.Pkm.POIPOLE);
        if (originalPoipole) {
            originalPoipole.stacks++;
            if (originalPoipole.stacks % 2 === 0) {
                originalPoipole.addAttack(1);
            }
        }
    }
}, Passive_1.Passive.POIPOLE);
const addPrimeapeStack = ({ pokemon }) => {
    pokemon.addAttack(1, pokemon, 0, false, true);
    pokemon.addStack();
};
const superchargeTadbulb = (pokemon, board) => {
    if (pokemon.lastSuperchargeTime &&
        Date.now() - pokemon.lastSuperchargeTime < 3000) {
        return;
    }
    pokemon.lastSuperchargeTime = Date.now();
    if (pokemon.status.electricField === false) {
        pokemon.status.electricField = true;
        pokemon.addSpeed(20, pokemon, 0, false);
        pokemon.addShield(30, pokemon, 0, false);
        pokemon.broadcastAbility({ skill: "SUPERCHARGE" });
    }
    board
        .getAdjacentCells(pokemon.positionX, pokemon.positionY)
        .forEach((cell) => {
        if (cell.value && cell.value.team !== pokemon.team) {
            const orientation = board.orientation(pokemon.positionX, pokemon.positionY, cell.value.positionX, cell.value.positionY, pokemon, undefined);
            const destination = board.getKnockBackPlace(cell.value.positionX, cell.value.positionY, orientation);
            if (destination) {
                cell.value.moveTo(destination.x, destination.y, board, true);
                cell.value.cooldown = 500;
            }
            cell.value.handleDamage({
                damage: 10,
                board,
                attackType: Game_1.AttackType.SPECIAL,
                attacker: pokemon,
                isRetaliation: true,
                shouldTargetGainMana: true
            });
        }
    });
};
function transformToIceFace(entity, isBattleStart) {
    entity.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.EISCUE];
    entity.name = Pokemon_1.Pkm.EISCUE;
    entity.changePassive(Passive_1.Passive.EISCUE_ICE_FACE);
    entity.addShield(isBattleStart ? 100 : 50, entity, 0, false);
    if (entity.player) {
        entity.player.pokemonsPlayed.add(Pokemon_1.Pkm.EISCUE);
    }
}
function transformToNoice(entity) {
    entity.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.EISCUE_NOICE];
    entity.name = Pokemon_1.Pkm.EISCUE_NOICE;
    entity.changePassive(Passive_1.Passive.EISCUE_NOICE);
    entity.shield = 0;
}
exports.PassiveEffects = {
    [Passive_1.Passive.DURANT]: [DurantBugBuffEffect],
    [Passive_1.Passive.SHARED_VISION]: [SharedVisionEffect],
    [Passive_1.Passive.METEOR]: [MiniorKernelOnAttackEffect],
    [Passive_1.Passive.KUBFU]: [KubfuOnKillEffect],
    [Passive_1.Passive.QWILFISH]: [QwilfishPassiveEffect],
    [Passive_1.Passive.HISUIAN_QWILFISH]: [
        new effect_1.OnAbilityCastEffect((pokemon) => pokemon.addStack())
    ],
    [Passive_1.Passive.SLOW_START]: [
        new effect_1.OnSpawnEffect((pokemon) => pokemon.addSpeed(-30, pokemon, 0, false)),
        new effect_1.OnAbilityCastEffect((pokemon) => {
            if (pokemon.count.ult === 1) {
                pokemon.addSpeed(30, pokemon, 0, false);
                pokemon.addAttack(10, pokemon, 0, false);
            }
        })
    ],
    [Passive_1.Passive.VIGOROTH]: [
        new effect_1.OnSpawnEffect((pkm) => {
            pkm.status.sleep = false;
            pkm.effects.add(Effect_1.EffectEnum.IMMUNITY_SLEEP);
        })
    ],
    [Passive_1.Passive.COMATOSE]: [
        new effect_1.OnSpawnEffect((pkm) => {
            pkm.status.sleep = true;
            pkm.status.sleepCooldown = 1000;
            pkm.status.burn = false;
            pkm.status.poisonStacks = 0;
            pkm.status.freeze = false;
            pkm.status.paralysis = false;
            pkm.effects.add(Effect_1.EffectEnum.IMMUNITY_BURN);
            pkm.effects.add(Effect_1.EffectEnum.IMMUNITY_POISON);
            pkm.effects.add(Effect_1.EffectEnum.IMMUNITY_FREEZE);
            pkm.effects.add(Effect_1.EffectEnum.IMMUNITY_PARALYSIS);
        })
    ],
    [Passive_1.Passive.MEGA_SABLEYE]: [
        new effect_1.OnSpawnEffect((entity) => entity.status.triggerRuneProtect(60000, entity, entity))
    ],
    [Passive_1.Passive.PIKACHU_SURFER]: [PikachuSurferBuffEffect],
    [Passive_1.Passive.ACCELERATION]: [
        () => new acceleration_1.AccelerationEffect()
    ],
    [Passive_1.Passive.MIMIKYU]: [MimikuBustedTransformEffect],
    [Passive_1.Passive.DARMANITAN]: [DarmanitanZenTransformEffect],
    [Passive_1.Passive.DARMANITAN_ZEN]: [DarmanitanZenOnHitEffect],
    [Passive_1.Passive.GALARIAN_DARMANITAN]: [GalarianDarmanitanZenTransformEffect],
    [Passive_1.Passive.GALARIAN_DARMANITAN_ZEN]: [GalarianDarmanitanBurnEffect, treeEffect],
    [Passive_1.Passive.GLIMMORA]: [ToxicSpikesEffect],
    [Passive_1.Passive.FUR_COAT]: [FurCoatEffect],
    [Passive_1.Passive.CREAM]: [MilceryFlavorEffect],
    [Passive_1.Passive.CLEAR_WING]: [
        () => new ClearWingEffect()
    ],
    [Passive_1.Passive.SYNCHRO]: [
        () => new SynchroEffect()
    ],
    [Passive_1.Passive.ZYGARDE]: [
        () => new ZygardeCellsEffect()
    ],
    [Passive_1.Passive.FALINKS]: [
        () => new falinks_formation_1.FalinksFormationEffect()
    ],
    [Passive_1.Passive.AVALUGG]: [
        () => new bergmite_on_back_1.BergmiteOnBackEffect()
    ],
    [Passive_1.Passive.OGERPON_CORNERSTONE]: [
        ogerponMaskDropEffect(Item_1.Item.CORNERSTONE_MASK, Pokemon_1.Pkm.OGERPON_CORNERSTONE_MASK, Pokemon_1.Pkm.OGERPON_CORNERSTONE)
    ],
    [Passive_1.Passive.OGERPON_HEARTHFLAME]: [
        ogerponMaskDropEffect(Item_1.Item.HEARTHFLAME_MASK, Pokemon_1.Pkm.OGERPON_HEARTHFLAME_MASK, Pokemon_1.Pkm.OGERPON_HEARTHFLAME)
    ],
    [Passive_1.Passive.OGERPON_TEAL]: [
        ogerponMaskDropEffect(Item_1.Item.TEAL_MASK, Pokemon_1.Pkm.OGERPON_TEAL_MASK, Pokemon_1.Pkm.OGERPON_TEAL)
    ],
    [Passive_1.Passive.OGERPON_WELLSPRING]: [
        ogerponMaskDropEffect(Item_1.Item.WELLSPRING_MASK, Pokemon_1.Pkm.OGERPON_WELLSPRING_MASK, Pokemon_1.Pkm.OGERPON_WELLSPRING)
    ],
    [Passive_1.Passive.PACHIRISU]: [PachirisuBerryEffect],
    [Passive_1.Passive.SOUL_HEART]: [
        new effect_1.OnKillEffect(({ attacker }) => {
            attacker.addPP(10, attacker, 0, false);
            attacker.addAbilityPower(10, attacker, 0, false);
        })
    ],
    [Passive_1.Passive.BEAST_BOOST_ATK]: [
        new effect_1.OnKillEffect(({ attacker }) => {
            attacker.addAttack(5, attacker, 0, false);
        })
    ],
    [Passive_1.Passive.BEAST_BOOST_AP]: [
        new effect_1.OnKillEffect(({ attacker }) => {
            attacker.addAbilityPower(10, attacker, 0, false);
        })
    ],
    [Passive_1.Passive.GRIM_NEIGH]: [
        new effect_1.OnKillEffect(({ attacker }) => {
            attacker.addAbilityPower(30, attacker, 0, false);
        })
    ],
    [Passive_1.Passive.CHILLING_NEIGH]: [
        new effect_1.OnKillEffect(({ attacker }) => {
            attacker.addAttack(5, attacker, 0, false);
        })
    ],
    [Passive_1.Passive.GUZZLORD]: [
        new effect_1.OnKillEffect(({ attacker }) => {
            if (attacker.items.has(Item_1.Item.CHEF_HAT)) {
                const isDoubled = attacker.player
                    ? attacker.player.synergies.hasSynergyTriggerOrMore(Synergy_1.Synergy.GOURMET, 2)
                    : false;
                attacker.addAbilityPower(isDoubled ? 10 : 5, attacker, 0, false, true);
                attacker.addMaxHP(isDoubled ? 20 : 10, attacker, 0, false, true);
                attacker.addStack(isDoubled ? 2 : 1);
            }
        })
    ],
    [Passive_1.Passive.STENCH]: [
        new effect_1.OnMoveEffect((pokemon, board, oldX, oldY) => {
            if (pokemon.simulation && board) {
                board.addBoardEffect(oldX, oldY, Effect_1.EffectEnum.POISON_GAS, pokemon.simulation);
            }
        })
    ],
    [Passive_1.Passive.PYUKUMUKU]: [PyukumukuExplodeOnDeathEffect],
    [Passive_1.Passive.BEADS_OF_RUIN]: [
        new effect_1.OnHitEffect(({ attacker, target }) => {
            target.addSpecialDefense(-1, attacker, 0, false);
        })
    ],
    [Passive_1.Passive.EMERGENCY_EXIT]: [
        new effect_1.OnSpawnEffect((pkm) => pkm.addPP(pkm.maxPP, pkm, 0, false))
    ],
    [Passive_1.Passive.COMFEY]: [comfeyEquipOnSimulationStartEffect],
    [Passive_1.Passive.COMMANDER]: [commanderPassive],
    [Passive_1.Passive.CONVERSION]: [conversionEffect],
    [Passive_1.Passive.MANAPHY]: [spawnPhioneFromAquaEggOnSimulationStartEffect],
    [Passive_1.Passive.STONJOURNER]: [
        stonjournerPowerSpotOnSimulationStartEffect,
        treeEffect
    ],
    [Passive_1.Passive.WOBBUFFET]: [treeEffect],
    [Passive_1.Passive.SUDOWOODO]: [treeEffect, SudowoodoGainAttackEffect],
    [Passive_1.Passive.INANIMATE]: [inanimateObjectEffect],
    [Passive_1.Passive.SKARMORY]: [skarmorySpikesOnSimulationStartEffect],
    [Passive_1.Passive.DRY_SKIN]: [drySkinOnSpawnEffect],
    [Passive_1.Passive.SPOT_PANDA]: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.status.confusion = false;
            entity.effects.add(Effect_1.EffectEnum.IMMUNITY_CONFUSION);
        })
    ],
    [Passive_1.Passive.AQUA_VEIL]: [
        new effect_1.OnSpawnEffect((entity) => {
            if (entity.simulation.weather === Weather_1.Weather.RAIN) {
                entity.status.triggerRuneProtect(60000, entity, entity);
            }
        })
    ],
    [Passive_1.Passive.SPECIAL_ATTACK]: [
        new effect_1.OnSpawnEffect((entity) => {
            entity.effects.add(Effect_1.EffectEnum.SPECIAL_ATTACKS);
        })
    ],
    [Passive_1.Passive.GHOLDENGO]: [
        new effect_1.OnSpawnEffect((entity) => {
            if (entity.player &&
                entity.player.money >= entity.player.maxInterest * 10) {
                entity.status.triggerRuneProtect(60000, entity, entity);
            }
        })
    ],
    [Passive_1.Passive.BASCULIN_WHITE]: [
        new effect_1.OnKillEffect(({ attacker }) => {
            const pokemon = attacker.refToBoardPokemon;
            if (pokemon && pokemon instanceof pokemon_1.BasculinWhite) {
                pokemon.stacks = Math.max(pokemon.deathCount, pokemon.killCount);
                attacker.stacks = pokemon.stacks;
                if (pokemon.killCount === pokemon.stacksRequired &&
                    pokemon.deathCount < pokemon.stacksRequired) {
                    attacker.addStack(0);
                }
            }
        }),
        new effect_1.OnDeathEffect(({ pokemon: pokemonEntity }) => {
            const pokemon = pokemonEntity.refToBoardPokemon;
            if (pokemon && pokemon instanceof pokemon_1.BasculinWhite) {
                pokemon.stacks = pokemon.deathCount;
                if (pokemon.deathCount === pokemon.stacksRequired &&
                    pokemon.killCount < pokemon.stacksRequired) {
                    pokemonEntity.addStack(0);
                }
            }
        })
    ],
    [Passive_1.Passive.BASCULIN_RED_BLUE]: [
        new effect_1.OnAbilityCastEffect((pokemon, board) => {
            const basculins = board.cells.filter((p) => p !== undefined &&
                p.team === pokemon.team &&
                p.passive === Passive_1.Passive.BASCULIN_RED_BLUE);
            const basculinWithMostAttack = basculins.sort((a, b) => b.atk - a.atk)[0];
            if (basculinWithMostAttack && pokemon.atk < basculinWithMostAttack.atk) {
                const delta = basculinWithMostAttack.atk - pokemon.atk;
                pokemon.addAttack(delta, pokemon, 0, false);
            }
        })
    ],
    [Passive_1.Passive.SPIRITOMB]: [spiritombWispEffect],
    [Passive_1.Passive.CHINGLING]: [chinglingCountCastsEffect],
    [Passive_1.Passive.RECYCLE]: [
        new effect_1.OnItemDroppedEffect(({ pokemon, item, player }) => {
            if (Item_1.Berries.includes(item)) {
                pokemon.addMaxHP(Item_1.SpecialBerries.includes(item) ? 45 : 15);
                (0, array_1.removeInArray)(player.items, item);
                return false;
            }
            else if (Item_1.ConsumableItems.includes(item)) {
                pokemon.addMaxHP(30);
                player.items.push(Item_1.Item.TRASH);
                (0, array_1.removeInArray)(player.items, item);
                return false;
            }
            return true;
        })
    ],
    [Passive_1.Passive.POIPOLE]: [PoipoleOnKillEffect],
    [Passive_1.Passive.NAGANADEL]: [PoipoleOnKillEffect],
    [Passive_1.Passive.BAD_LUCK]: [
        new effect_1.OnSimulationStartEffect(({ simulation, entity }) => {
            simulation.board.forEach((x, y, pkm) => {
                if (pkm && pkm.team !== entity.team) {
                    pkm.addLuck(-20, pkm, 0, false);
                }
            });
        }, Passive_1.Passive.BAD_LUCK)
    ],
    [Passive_1.Passive.PRIMEAPE]: [
        new effect_1.OnResurrectEffect(addPrimeapeStack, Passive_1.Passive.PRIMEAPE),
        new effect_1.OnDeathEffect(addPrimeapeStack, Passive_1.Passive.PRIMEAPE)
    ],
    [Passive_1.Passive.GEARS]: [
        new effect_1.OnSimulationStartEffect(({ simulation, entity }) => {
            var _a;
            const interval = (_a = [3000, 2000, 1000][entity.stars - 1]) !== null && _a !== void 0 ? _a : 1000;
            simulation.board.forEach((x, y, pkm) => {
                if (pkm && pkm.team === entity.team) {
                    pkm.effectsSet.add(new effect_1.PeriodicEffect((pokemon) => {
                        if (entity.hp > 0) {
                            pokemon.addSpeed(1, pokemon, 0, false);
                        }
                    }, Passive_1.Passive.GEARS, interval));
                }
            });
        }, Passive_1.Passive.GEARS)
    ],
    [Passive_1.Passive.TOXIC_BOOST]: [
        new effect_1.OnSpawnEffect((pkm) => {
            pkm.status.triggerPoison(300000, pkm, pkm);
        }, Passive_1.Passive.TOXIC_BOOST)
    ],
    [Passive_1.Passive.TADBULB]: [
        new effect_1.OnSimulationStartEffect(({ simulation, entity }) => {
            if (entity.status.light) {
                superchargeTadbulb(entity, simulation.board);
            }
        }),
        new effect_1.OnDamageReceivedEffect(({ pokemon, damageBeforeReduction, board, isRetaliation }) => {
            if (damageBeforeReduction >= 50 && !isRetaliation) {
                superchargeTadbulb(pokemon, board);
            }
        })
    ],
    [Passive_1.Passive.PINCURCHIN]: [
        new effect_1.OnDamageReceivedEffect(({ pokemon, attackType, attacker }) => {
            if (attackType === Game_1.AttackType.SPECIAL) {
                pokemon.status.electricField = true;
            }
            if (pokemon.status.electricField &&
                attacker &&
                (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, attacker.positionX, attacker.positionY) <= 1) {
                attacker.status.triggerParalysis(2000, attacker, pokemon);
            }
        })
    ],
    [Passive_1.Passive.STAMINA]: [
        new effect_1.OnDamageReceivedEffect(({ pokemon }) => {
            const shield = 20;
            if (pokemon.count.damageReceivedCount % 10 === 0) {
                pokemon.addShield(shield, pokemon, 1, false);
            }
        })
    ],
    [Passive_1.Passive.FINIZEN]: [
        new effect_1.OnSimulationStartEffect(({ simulation, entity }) => {
            if (entity.name === Pokemon_1.Pkm.PALAFIN_HERO)
                return;
            let nbAlliesKo = 0;
            let nbAllies = 0;
            let transformed = false;
            const transformToHero = () => {
                transformed = true;
                const isFinizenOnBoard = entity.refToBoardPokemon.name === Pokemon_1.Pkm.FINIZEN;
                entity.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.PALAFIN_HERO];
                entity.name = Pokemon_1.Pkm.PALAFIN_HERO;
                entity.addAttack(18, entity, 0, false);
                entity.addSpeed(16, entity, 0, false);
                entity.addDefense(5, entity, 0, false);
                entity.addSpecialDefense(5, entity, 0, false);
                entity.hp = entity.maxHP;
                if (entity.player && !entity.isGhostOpponent && isFinizenOnBoard) {
                    entity.player.pokemonsPlayed.add(Pokemon_1.Pkm.PALAFIN_HERO);
                    entity.player.transformPokemon(entity.refToBoardPokemon, Pokemon_1.Pkm.PALAFIN);
                }
            };
            const transformToHeroOnDeathEffect = new effect_1.OnDeathEffect(() => {
                nbAlliesKo++;
                if (!transformed && (nbAlliesKo >= 5 || nbAlliesKo >= nbAllies)) {
                    transformToHero();
                }
            });
            simulation.board.forEach((x, y, pkm) => {
                if (pkm && pkm.team === entity.team && pkm.id !== entity.id) {
                    nbAllies++;
                    pkm.effectsSet.add(transformToHeroOnDeathEffect);
                }
            });
            if (nbAllies === 0) {
                transformToHero();
            }
        })
    ],
    [Passive_1.Passive.EISCUE_NOICE]: [
        new effect_1.OnSimulationStartEffect(({ entity, simulation }) => {
            if (simulation.weather === Weather_1.Weather.SNOW) {
                transformToIceFace(entity, true);
            }
        }, Passive_1.Passive.EISCUE_NOICE)
    ],
    [Passive_1.Passive.EISCUE_ICE_FACE]: [
        new effect_1.OnShieldDepletedEffect(({ pokemon }) => {
            transformToNoice(pokemon);
        })
    ],
    [Passive_1.Passive.WALL_OF_STONE]: [
        new effect_1.OnSimulationStartEffect(({ simulation, entity }) => {
            simulation.board.forEach((x, y, ally) => {
                if (ally &&
                    ally.team === entity.team &&
                    y === entity.positionY &&
                    ally.types.has(Synergy_1.Synergy.ROCK)) {
                    ally.addShield(50, entity, 0, false);
                    ally.status.triggerLocked(60000, ally);
                    ally.effectsSet.add(new effect_1.OnShieldDepletedEffect(({ pokemon }) => {
                        pokemon.status.lockedCooldown = 0;
                        pokemon.status.updateLocked(0, pokemon);
                    }));
                }
            });
        })
    ],
    [Passive_1.Passive.MELOETTA]: [
        new effect_1.OnChangePositionEffect(({ newY, pokemon, player }) => {
            if (newY === 3 && pokemon.name === Pokemon_1.Pkm.MELOETTA) {
                player.transformPokemon(pokemon, Pokemon_1.Pkm.PIROUETTE_MELOETTA);
            }
            if (newY !== 3 && pokemon.name === Pokemon_1.Pkm.PIROUETTE_MELOETTA) {
                player.transformPokemon(pokemon, Pokemon_1.Pkm.MELOETTA);
            }
        })
    ],
    [Passive_1.Passive.RKS_SYSTEM]: [
        new effect_1.OnChangePositionEffect(({ newY, pokemon, player, state }) => {
            if (newY === 0) {
                const itemsToRemove = (0, schemas_1.schemaValues)(pokemon.items).filter((item) => {
                    return ((0, array_1.isIn)(types_1.RemovableItems, item) ||
                        ((state === null || state === void 0 ? void 0 : state.specialGameRule) === SpecialGameRule_1.SpecialGameRule.SLAMINGO &&
                            item !== Item_1.Item.RARE_CANDY) ||
                        (0, array_1.isIn)(Item_1.SynergyItems, item));
                });
                player.items.push(...itemsToRemove);
                pokemon.removeItems(itemsToRemove, player);
            }
        })
    ],
    [Passive_1.Passive.PRISM]: [
        new effect_1.OnSpotlightChangeEffect(({ pokemon, player, inSpotlight }) => {
            if (pokemon.name === Pokemon_1.Pkm.NECROZMA && inSpotlight) {
                player.transformPokemon(pokemon, Pokemon_1.Pkm.ULTRA_NECROZMA);
            }
            else if (pokemon.name === Pokemon_1.Pkm.ULTRA_NECROZMA && !inSpotlight) {
                player.transformPokemon(pokemon, Pokemon_1.Pkm.NECROZMA);
            }
        })
    ],
    [Passive_1.Passive.BLOSSOM]: [
        new effect_1.OnSpotlightChangeEffect(({ pokemon, player, inSpotlight }) => {
            if (pokemon.name === Pokemon_1.Pkm.CHERRIM && inSpotlight) {
                player.transformPokemon(pokemon, Pokemon_1.Pkm.CHERRIM_SUNLIGHT);
            }
            else if (pokemon.name === Pokemon_1.Pkm.CHERRIM_SUNLIGHT && !inSpotlight) {
                player.transformPokemon(pokemon, Pokemon_1.Pkm.CHERRIM);
            }
        })
    ],
    [Passive_1.Passive.PILLAR]: [
        new effect_1.OnChangePositionEffect(({ player }) => {
            player.updatePillars();
        }),
        new effect_1.OnEvolutionEffect(({ player }) => {
            player.updatePillars();
        })
    ],
    [Passive_1.Passive.VESPIQUEN]: [
        new effect_1.OnChangePositionEffect(({ newY, pokemon }) => {
            if (newY === 1) {
                pokemon.range = 3;
                pokemon.skill = Ability_1.Ability.ATTACK_ORDER;
            }
            else if (newY === 2) {
                pokemon.range = 2;
                pokemon.skill = Ability_1.Ability.HEAL_ORDER;
            }
            else if (newY === 3) {
                pokemon.range = 1;
                pokemon.skill = Ability_1.Ability.DEFEND_ORDER;
            }
        })
    ],
    [Passive_1.Passive.DUNSPARCE]: [
        new effect_1.OnAbilityCastEffect((pokemon, board) => {
            if (!pokemon.player)
                return;
            const dunsparcesAlive = board.cells.filter((entity) => entity != null &&
                entity.team === pokemon.team &&
                Pokemon_1.PkmFamily[entity.name] === Pokemon_1.PkmFamily[pokemon.name]);
            dunsparcesAlive.forEach((entity) => {
                entity.addStack();
            });
            if (dunsparcesAlive.every((p) => p.isSpawn)) {
                const originalDunsparce = (0, schemas_1.schemaValues)(pokemon.player.board).find((p) => p.name === Pokemon_1.Pkm.DUNSPARCE);
                if (originalDunsparce)
                    originalDunsparce.stacks++;
            }
        }),
        new effect_1.OnGroundDiggingEffect(({ pokemon }) => {
            pokemon.stacks += 1;
        })
    ],
    [Passive_1.Passive.ORTHWORM]: [
        new effect_1.OnGroundDiggingEffect(({ pokemon }) => {
            pokemon.addMaxHP(5);
        })
    ],
    [Passive_1.Passive.STOUTLAND_SEARCH]: [
        new effect_1.OnChangePositionEffect(({ newX, newY, pokemon, player, room }) => {
            const index = (newY - 1) * config_1.BOARD_WIDTH + newX;
            if (room && player.buriedItems[index] && player.groundHoles[index] < 5) {
                room.broadcast(types_1.Transfer.SHOW_EMOTE, {
                    id: pokemon.id,
                    emote: (0, avatar_1.getAvatarString)(pokemon.index, pokemon.shiny, Emotion_1.Emotion.JOYOUS)
                });
                room.broadcast(types_1.Transfer.DISPLAY_TEXT, {
                    id: player.id,
                    text: "bark",
                    x: pokemon.positionX,
                    y: pokemon.positionY
                });
            }
        })
    ]
};
//# sourceMappingURL=passives.js.map