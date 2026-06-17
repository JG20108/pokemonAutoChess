"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiddenPowerEMStrategy = exports.HiddenPowerQMStrategy = exports.HiddenPowerZStrategy = exports.HiddenPowerYStrategy = exports.HiddenPowerXStrategy = exports.HiddenPowerWStrategy = exports.HiddenPowerVStrategy = exports.HiddenPowerUStrategy = exports.HiddenPowerTStrategy = exports.HiddenPowerSStrategy = exports.HiddenPowerRStrategy = exports.HiddenPowerQStrategy = exports.HiddenPowerPStrategy = exports.HiddenPowerOStrategy = exports.HiddenPowerNStrategy = exports.HiddenPowerMStrategy = exports.HiddenPowerLStrategy = exports.HiddenPowerKStrategy = exports.HiddenPowerJStrategy = exports.HiddenPowerIStrategy = exports.HiddenPowerHStrategy = exports.HiddenPowerGStrategy = exports.HiddenPowerFStrategy = exports.HiddenPowerEStrategy = exports.HiddenPowerDStrategy = exports.HiddenPowerCStrategy = exports.HiddenPowerBStrategy = exports.HiddenPowerAStrategy = exports.HiddenPowerStrategy = void 0;
const schema_1 = require("@colyseus/schema");
const config_1 = require("../../config");
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const precomputed_pokemon_data_1 = require("../../models/precomputed/precomputed-pokemon-data");
const precomputed_types_and_categories_1 = require("../../models/precomputed/precomputed-types-and-categories");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const Pokemon_1 = require("../../types/enum/Pokemon");
const Synergy_1 = require("../../types/enum/Synergy");
const array_1 = require("../../utils/array");
const board_1 = require("../../utils/board");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const eggs_1 = require("../eggs");
const hatch_time_1 = require("../evolution-logic/hatch-time");
const ability_strategy_1 = require("./ability-strategy");
const cast_1 = require("./cast");
const explosion_1 = require("./explosion");
const meditate_1 = require("./meditate");
const thunder_shock_1 = require("./thunder-shock");
class HiddenPowerStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        if (pokemon.player && !pokemon.isSpawn && (0, array_1.isIn)(Pokemon_1.Unowns, pokemon.name)) {
            pokemon.player.unownReminiscences++;
            pokemon.player.board.delete(pokemon.refToBoardPokemon.id);
        }
        pokemon.state.triggerDeath(pokemon, null, board, Game_1.AttackType.TRUE);
    }
}
exports.HiddenPowerStrategy = HiddenPowerStrategy;
class HiddenPowerAStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        const corners = [
            [0, 0],
            [board.columns - 1, 0],
            [0, board.rows - 1],
            [board.columns - 1, board.rows - 1]
        ];
        corners.forEach(([x, y]) => {
            const coord = unown.simulation.getClosestFreeCellTo(x, y, unown.team);
            if (!coord)
                return;
            const abra = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.ABRA, unown.player);
            unown.simulation.addPokemon(abra, coord.x, coord.y, unown.team, true);
        });
    }
}
exports.HiddenPowerAStrategy = HiddenPowerAStrategy;
class HiddenPowerBStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        board.forEach((x, y, enemy) => {
            if (enemy && unown.team != enemy.team) {
                enemy.status.triggerBurn(30000, enemy, unown);
            }
        });
    }
}
exports.HiddenPowerBStrategy = HiddenPowerBStrategy;
class HiddenPowerCStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        board.forEach((x, y, pokemon) => {
            if (pokemon && unown.team === pokemon.team) {
                pokemon.addItem(Item_1.Item.AMULET_COIN);
            }
        });
    }
}
exports.HiddenPowerCStrategy = HiddenPowerCStrategy;
class HiddenPowerDStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        const player = unown.player;
        if (player && !unown.isGhostOpponent) {
            const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
            if (x !== null) {
                const ditto = pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.DITTO, player);
                ditto.positionX = x;
                ditto.positionY = 0;
                player.board.set(ditto.id, ditto);
            }
        }
    }
}
exports.HiddenPowerDStrategy = HiddenPowerDStrategy;
class HiddenPowerEStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        if (!unown.isGhostOpponent && unown.player) {
            const egg = (0, eggs_1.giveRandomEgg)(unown.player, false);
            if (!egg)
                return;
            egg.stacks = (0, hatch_time_1.getHatchTime)(egg, unown.player) - 1;
        }
    }
}
exports.HiddenPowerEStrategy = HiddenPowerEStrategy;
class HiddenPowerFStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        const nbFishes = 2;
        const player = unown.player;
        if (player && !unown.isGhostOpponent && !player.isBot) {
            for (let i = 0; i < nbFishes; i++) {
                const fish = unown.simulation.room.state.shop.pickFish(player, Item_1.Item.SUPER_ROD, unown.simulation.room.state);
                unown.simulation.room.spawnOnBench(player, fish, "fishing");
            }
        }
    }
}
exports.HiddenPowerFStrategy = HiddenPowerFStrategy;
class HiddenPowerGStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        if (unown.player && !unown.isGhostOpponent) {
            unown.player.addMoney(5, true, unown);
        }
    }
}
exports.HiddenPowerGStrategy = HiddenPowerGStrategy;
class HiddenPowerHStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        board.forEach((x, y, pokemon) => {
            if (pokemon && unown.team === pokemon.team) {
                pokemon.handleHeal(pokemon.maxHP - pokemon.hp, unown, 1, crit);
            }
        });
    }
}
exports.HiddenPowerHStrategy = HiddenPowerHStrategy;
class HiddenPowerIStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        if (unown.player && !unown.isGhostOpponent) {
            unown.player.items.push((0, random_1.pickRandomIn)(Item_1.ItemComponents));
        }
    }
}
exports.HiddenPowerIStrategy = HiddenPowerIStrategy;
class HiddenPowerJStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        const numberToSpawn = 2;
        for (let i = 0; i < numberToSpawn; i++) {
            const coord = unown.simulation.getClosestFreeCellToPokemonEntity(unown);
            if (coord) {
                const sharpedo = unown.simulation.addPokemon(pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.SHARPEDO, unown.player), coord.x, coord.y, unown.team, true);
                sharpedo.addItem(Item_1.Item.RAZOR_CLAW);
            }
        }
    }
}
exports.HiddenPowerJStrategy = HiddenPowerJStrategy;
class HiddenPowerKStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        const coord = unown.simulation.getClosestFreeCellToPokemonEntity(unown);
        if (!coord)
            return;
        const hitmonlee = unown.simulation.addPokemon(pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.HITMONLEE, unown.player), coord.x, coord.y, unown.team, true);
        hitmonlee.addItem(Item_1.Item.RED_ORB);
        hitmonlee.pp = hitmonlee.maxPP - 1;
    }
}
exports.HiddenPowerKStrategy = HiddenPowerKStrategy;
class HiddenPowerLStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        board.forEach((x, y, pokemon) => {
            if (pokemon && unown.team !== pokemon.team) {
                pokemon.status.triggerLocked(5000, pokemon);
            }
        });
    }
}
exports.HiddenPowerLStrategy = HiddenPowerLStrategy;
class HiddenPowerMStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        board.forEach((x, y, pokemon) => {
            if (pokemon && unown.team === pokemon.team) {
                pokemon.pp = pokemon.maxPP;
            }
        });
    }
}
exports.HiddenPowerMStrategy = HiddenPowerMStrategy;
class HiddenPowerNStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        board.forEach((x, y, pokemon) => {
            if (pokemon && unown.team === pokemon.team) {
                const target = board.getEntityOnCell(pokemon.targetX, pokemon.targetY);
                if (target) {
                    pokemon.addShield(50, unown, 1, false);
                    (0, cast_1.castAbility)(explosion_1.explosionStrategy, pokemon, board, target, false);
                }
            }
        });
    }
}
exports.HiddenPowerNStrategy = HiddenPowerNStrategy;
class HiddenPowerOStrategy extends HiddenPowerStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        if (pokemon.player) {
            pokemon.player.board.forEach((p) => {
                var _a;
                if (p.canEat) {
                    let randomDish = (0, random_1.pickRandomIn)(Item_1.Dishes.filter((d) => d !== Item_1.Item.HERBA_MYSTICA));
                    if (randomDish === Item_1.Item.SWEETS) {
                        randomDish = (0, random_1.pickRandomIn)(Item_1.Sweets);
                    }
                    else if (randomDish === Item_1.Item.MUSHROOMS) {
                        randomDish =
                            (_a = (0, random_1.randomWeighted)({
                                [Item_1.Item.TINY_MUSHROOM]: 77,
                                [Item_1.Item.BIG_MUSHROOM]: 20,
                                [Item_1.Item.BALM_MUSHROOM]: 3
                            })) !== null && _a !== void 0 ? _a : Item_1.Item.TINY_MUSHROOM;
                    }
                    p.dishes = new schema_1.SetSchema([randomDish]);
                }
            });
        }
    }
}
exports.HiddenPowerOStrategy = HiddenPowerOStrategy;
class HiddenPowerPStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        var _a;
        super.process(unown, board, target, crit);
        const numberToSpawn = 5;
        const bugs = precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[Synergy_1.Synergy.BUG];
        const candidates = [...bugs.pokemons, ...bugs.additionalPokemons].filter((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p).stars === 1);
        const stageLevel = unown.simulation.stageLevel;
        const commonWeight = (0, number_1.min)(0)(2 - stageLevel / 10);
        const uncommonWeight = (0, number_1.min)(0)(2 - stageLevel / 20);
        const rareWeight = 1;
        const epicWeight = stageLevel / 10;
        const ultraWeight = stageLevel / 20;
        const candidatesWeights = {};
        candidates.forEach((p) => {
            const data = (0, precomputed_pokemon_data_1.getPokemonData)(p);
            if (data.rarity === Game_1.Rarity.COMMON) {
                candidatesWeights[p] = commonWeight;
            }
            else if (data.rarity === Game_1.Rarity.UNCOMMON) {
                candidatesWeights[p] = uncommonWeight;
            }
            else if (data.rarity === Game_1.Rarity.RARE) {
                candidatesWeights[p] = rareWeight;
            }
            else if (data.rarity === Game_1.Rarity.EPIC) {
                candidatesWeights[p] = epicWeight;
            }
            else if (data.rarity === Game_1.Rarity.ULTRA) {
                candidatesWeights[p] = ultraWeight;
            }
        });
        for (let i = 0; i < numberToSpawn; i++) {
            const bug = (_a = (0, random_1.randomWeighted)(candidatesWeights)) !== null && _a !== void 0 ? _a : Pokemon_1.Pkm.WEEDLE;
            const coord = unown.simulation.getClosestFreeCellToPokemonEntity(unown);
            if (coord) {
                unown.simulation.addPokemon(pokemon_factory_1.default.createPokemonFromName(bug, unown.player), coord.x, coord.y, unown.team, true);
            }
        }
    }
}
exports.HiddenPowerPStrategy = HiddenPowerPStrategy;
class HiddenPowerQStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        unown.simulation.redTeam.clear();
        unown.simulation.blueTeam.clear();
    }
}
exports.HiddenPowerQStrategy = HiddenPowerQStrategy;
class HiddenPowerRStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        if (unown.player && !unown.isGhostOpponent) {
            unown.player.shopFreeRolls += 6;
        }
    }
}
exports.HiddenPowerRStrategy = HiddenPowerRStrategy;
class HiddenPowerSStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        unown.simulation.triggerTidalWave(unown.team, 2, true);
    }
}
exports.HiddenPowerSStrategy = HiddenPowerSStrategy;
class HiddenPowerTStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        if (unown.player && !unown.isGhostOpponent) {
            const player = unown.player;
            (0, random_1.pickNRandomIn)(Item_1.Berries, 3).forEach((item) => {
                player.items.push(item);
            });
        }
    }
}
exports.HiddenPowerTStrategy = HiddenPowerTStrategy;
class HiddenPowerUStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        const coord = unown.simulation.getClosestFreeCellToPokemonEntity(unown);
        if (!coord)
            return;
        const uxie = unown.simulation.addPokemon(pokemon_factory_1.default.createPokemonFromName(Pokemon_1.Pkm.UXIE, unown.player), coord.x, coord.y, unown.team, true);
        uxie.addItem(Item_1.Item.AQUA_EGG);
        uxie.pp = uxie.maxPP - 1;
    }
}
exports.HiddenPowerUStrategy = HiddenPowerUStrategy;
class HiddenPowerVStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        board.forEach((x, y, enemy) => {
            if (enemy && unown.team !== enemy.team) {
                (0, cast_1.castAbility)(thunder_shock_1.thunderShockStrategy, unown, board, enemy, false);
            }
        });
    }
}
exports.HiddenPowerVStrategy = HiddenPowerVStrategy;
class HiddenPowerWStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        var _a, _b;
        super.process(unown, board, target, crit);
        const player = unown.player;
        if (player && !unown.isGhostOpponent) {
            const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
            if (x !== null) {
                const topSynergy = (0, random_1.pickRandomIn)(player.synergies.getTopSynergies(2));
                const monsOfThatSynergy = precomputed_types_and_categories_1.PRECOMPUTED_POKEMONS_PER_TYPE_AND_CATEGORY[topSynergy];
                const candidates = [
                    ...monsOfThatSynergy.pokemons,
                    ...monsOfThatSynergy.additionalPokemons
                ]
                    .filter((p) => (0, precomputed_pokemon_data_1.getPokemonData)(p).stars === 1)
                    .sort((a, b) => config_1.RarityCost[(0, precomputed_pokemon_data_1.getPokemonData)(b).rarity] -
                    config_1.RarityCost[(0, precomputed_pokemon_data_1.getPokemonData)(a).rarity]);
                const stageLevel = unown.simulation.stageLevel;
                const rareWeight = (0, number_1.clamp)(1.5 - stageLevel / 10, 0, 1);
                const epicWeight = (0, number_1.clamp)(stageLevel < 10 ? stageLevel / 10 : 1.5 - stageLevel / 20, 0, 1);
                const ultraWeight = (0, number_1.min)(0)(-1 + stageLevel / 10);
                const candidatesWeights = {};
                candidates.forEach((p) => {
                    const data = (0, precomputed_pokemon_data_1.getPokemonData)(p);
                    if (data.rarity === Game_1.Rarity.RARE) {
                        candidatesWeights[p] = rareWeight;
                    }
                    else if (data.rarity === Game_1.Rarity.EPIC) {
                        candidatesWeights[p] = epicWeight;
                    }
                    else if (data.rarity === Game_1.Rarity.ULTRA) {
                        candidatesWeights[p] = ultraWeight;
                    }
                });
                const pkm = (_b = (_a = (0, random_1.randomWeighted)(candidatesWeights)) !== null && _a !== void 0 ? _a : monsOfThatSynergy.pokemons[0]) !== null && _b !== void 0 ? _b : Pokemon_1.Pkm.KECLEON;
                const pokemon = pokemon_factory_1.default.createPokemonFromName(pkm, player);
                pokemon.positionX = x;
                pokemon.positionY = 0;
                player.board.set(pokemon.id, pokemon);
                unown.simulation.room.checkEvolutionsAfterPokemonAcquired(player.id);
            }
        }
    }
}
exports.HiddenPowerWStrategy = HiddenPowerWStrategy;
class HiddenPowerXStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        board.forEach((x, y, pokemon) => {
            if (pokemon && unown.team === pokemon.team) {
                pokemon.addItem(Item_1.Item.XRAY_VISION);
            }
        });
    }
}
exports.HiddenPowerXStrategy = HiddenPowerXStrategy;
class HiddenPowerYStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        board.forEach((x, y, ally) => {
            if (ally && unown.team === ally.team) {
                (0, cast_1.castAbility)(meditate_1.meditateStrategy, ally, board, ally, false);
            }
        });
    }
}
exports.HiddenPowerYStrategy = HiddenPowerYStrategy;
class HiddenPowerZStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        board.forEach((x, y, enemy) => {
            if (enemy && unown.team != enemy.team) {
                enemy.status.triggerFreeze(2000, enemy, unown);
            }
        });
    }
}
exports.HiddenPowerZStrategy = HiddenPowerZStrategy;
class HiddenPowerQMStrategy extends HiddenPowerStrategy {
    process(unown, board, target, crit) {
        super.process(unown, board, target, crit);
        const player = unown.player;
        if (player && !unown.isGhostOpponent) {
            const stageLevel = unown.simulation.stageLevel;
            const candidates = (0, config_1.getUnownsPoolPerStage)(stageLevel).filter((u) => u !== Pokemon_1.Pkm.UNOWN_QUESTION);
            const nbUnownsObtained = 4;
            for (let i = 0; i < nbUnownsObtained; i++) {
                const pkm = (0, random_1.pickRandomIn)(candidates);
                const x = (0, board_1.getFirstAvailablePositionInBench)(player.board);
                if (x !== null) {
                    const pokemon = pokemon_factory_1.default.createPokemonFromName(pkm, player);
                    pokemon.positionX = x;
                    pokemon.positionY = 0;
                    player.board.set(pokemon.id, pokemon);
                }
            }
        }
    }
}
exports.HiddenPowerQMStrategy = HiddenPowerQMStrategy;
class HiddenPowerEMStrategy extends HiddenPowerStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        const corners = [
            [0, 0],
            [board.columns - 1, 0],
            [0, board.rows - 1],
            [board.columns - 1, board.rows - 1]
        ];
        const stageLevel = pokemon.simulation.stageLevel;
        const candidates = (0, config_1.getUnownsPoolPerStage)(stageLevel).filter((u) => u !== Pokemon_1.Pkm.UNOWN_EXCLAMATION);
        corners.forEach(([x, y]) => {
            const coord = pokemon.simulation.getClosestFreeCellTo(x, y, pokemon.team);
            if (!coord)
                return;
            const unownName = (0, random_1.pickRandomIn)(candidates);
            const unown = pokemon_factory_1.default.createPokemonFromName(unownName, pokemon.player);
            pokemon.simulation.addPokemon(unown, coord.x, coord.y, pokemon.team, true);
        });
    }
}
exports.HiddenPowerEMStrategy = HiddenPowerEMStrategy;
//# sourceMappingURL=hidden-power.js.map