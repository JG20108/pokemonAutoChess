"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackBasedEvolutionRule = exports.ConditionBasedEvolutionRule = exports.HatchEvolutionRule = exports.ItemEvolutionRule = exports.CountEvolutionRule = exports.EvolutionRule = void 0;
exports.carryOverPermanentStats = carryOverPermanentStats;
const config_1 = require("../config");
const pokemon_factory_1 = __importDefault(require("../models/pokemon-factory"));
const Ability_1 = require("../types/enum/Ability");
const Effect_1 = require("../types/enum/Effect");
const Game_1 = require("../types/enum/Game");
const Item_1 = require("../types/enum/Item");
const Passive_1 = require("../types/enum/Passive");
const Pokemon_1 = require("../types/enum/Pokemon");
const array_1 = require("../utils/array");
const board_1 = require("../utils/board");
const logger_1 = require("../utils/logger");
const random_1 = require("../utils/random");
const schemas_1 = require("../utils/schemas");
class EvolutionRule {
    constructor(divergentEvolution) {
        if (divergentEvolution)
            this.divergentEvolution = divergentEvolution;
    }
    getEvolution(pokemon, player, ...additionalArgs) {
        if (this.divergentEvolution) {
            return this.divergentEvolution(pokemon, player, ...additionalArgs);
        }
        return pokemon.evolution;
    }
    tryEvolve(pokemon, player, stageLevel) {
        if (this.canEvolve(pokemon, player, stageLevel)) {
            const pokemonEvolved = this.evolve(pokemon, player, stageLevel);
            if (pokemon.supercharged)
                pokemonEvolved.supercharged = true;
            this.afterEvolve(pokemonEvolved, player, stageLevel);
            return pokemonEvolved;
        }
    }
    afterEvolve(pokemonEvolved, player, stageLevel) {
        player.updateSynergies();
        player.board.forEach((pokemon) => {
            if ((pokemon.passive === Passive_1.Passive.COSMOG ||
                pokemon.passive === Passive_1.Passive.COSMOEM) &&
                pokemonEvolved.passive !== Passive_1.Passive.COSMOG &&
                pokemonEvolved.passive !== Passive_1.Passive.COSMOEM) {
                pokemon.addMaxHP(15);
                pokemon.stacks++;
                pokemon.evolutionRule.tryEvolve(pokemon, player, stageLevel);
            }
        });
        pokemonEvolved.evolutionRule.tryEvolve(pokemonEvolved, player, stageLevel);
    }
}
exports.EvolutionRule = EvolutionRule;
class CountEvolutionRule extends EvolutionRule {
    constructor(numberRequired, divergentEvolution) {
        super(divergentEvolution);
        this.numberRequired = numberRequired;
    }
    canEvolve(pokemon, player, stageLevel) {
        if (!pokemon.hasEvolution)
            return false;
        if (pokemon.name === Pokemon_1.Pkm.BERGMITE &&
            (0, schemas_1.schemaValues)(player.board).find((p) => p.name === Pokemon_1.Pkm.AVALUGG || p.name === Pokemon_1.Pkm.HISUI_AVALUGG)) {
            return false;
        }
        const copies = (0, schemas_1.schemaValues)(player.board).filter((p) => p.index === pokemon.index && !p.items.has(Item_1.Item.EVIOLITE));
        return copies.length >= this.numberRequired;
    }
    canEvolveIfGettingOne(pokemon, player) {
        if (!pokemon.hasEvolution)
            return false;
        if (pokemon.name === Pokemon_1.Pkm.BERGMITE &&
            (0, schemas_1.schemaValues)(player.board).find((p) => p.name === Pokemon_1.Pkm.AVALUGG || p.name === Pokemon_1.Pkm.HISUI_AVALUGG)) {
            return false;
        }
        const copies = (0, schemas_1.schemaValues)(player.board).filter((p) => p.index === pokemon.index && !p.items.has(Item_1.Item.EVIOLITE));
        return copies.length === this.numberRequired - 1;
    }
    evolve(pokemon, player, stageLevel) {
        const pokemonEvolutionName = this.getEvolution(pokemon, player, stageLevel);
        let coord;
        const itemsComponentsOnBench = [];
        const itemsCompleteOnBench = [];
        const itemsComponentsOnBoard = [];
        const itemsCompleteOnBoard = [];
        const pokemonsBeforeEvolution = [];
        player.board.forEach((pkm, id) => {
            if (pkm.index == pokemon.index &&
                !pkm.items.has(Item_1.Item.EVIOLITE) &&
                pokemonsBeforeEvolution.length < this.numberRequired) {
                if (coord) {
                    if (pkm.positionY > coord.y) {
                        coord.x = pkm.positionX;
                        coord.y = pkm.positionY;
                    }
                }
                else {
                    if (pkm.positionX !== -1) {
                        coord = { x: pkm.positionX, y: pkm.positionY };
                    }
                }
                pkm.items.forEach((el) => {
                    if (Item_1.ItemComponents.includes(el)) {
                        if ((0, board_1.isOnBench)(pkm)) {
                            itemsComponentsOnBench.push(el);
                        }
                        else {
                            itemsComponentsOnBoard.push(el);
                        }
                    }
                    else {
                        if ((0, board_1.isOnBench)(pkm)) {
                            itemsCompleteOnBench.push(el);
                        }
                        else {
                            itemsCompleteOnBoard.push(el);
                        }
                    }
                });
                player.board.delete(id);
                pokemonsBeforeEvolution.push(pkm);
            }
        });
        const pokemonEvolved = pokemon_factory_1.default.createPokemonFromName(pokemonEvolutionName, player);
        carryOverPermanentStats(pokemonEvolved, pokemonsBeforeEvolution);
        pokemonEvolved.stacks = pokemon.stacks;
        (0, random_1.shuffleArray)(itemsCompleteOnBench);
        (0, random_1.shuffleArray)(itemsCompleteOnBoard);
        const itemsCompleteToAdd = [
            ...itemsCompleteOnBoard,
            ...itemsCompleteOnBench
        ];
        for (const item of itemsCompleteToAdd) {
            if (pokemonEvolved.items.has(item) || pokemonEvolved.items.size >= 3) {
                player.items.push(item);
            }
            else {
                pokemonEvolved.items.add(item);
                if (item === Item_1.Item.SHINY_CHARM) {
                    pokemonEvolved.shiny = true;
                }
            }
        }
        (0, random_1.shuffleArray)(itemsComponentsOnBench);
        (0, random_1.shuffleArray)(itemsComponentsOnBoard);
        const itemComponentsToAdd = [
            ...itemsComponentsOnBoard,
            ...itemsComponentsOnBench
        ];
        for (const itemComponent of itemComponentsToAdd) {
            if ((0, schemas_1.schemaValues)(pokemonEvolved.items).some((i) => Item_1.ItemComponents.includes(i)) ||
                pokemonEvolved.items.size >= 3) {
                player.items.push(itemComponent);
            }
            else {
                pokemonEvolved.items.add(itemComponent);
            }
        }
        if (pokemonsBeforeEvolution.some((p) => p.dishes.size > 0)) {
            const dishes = pokemonsBeforeEvolution
                .filter((p) => p.dishes.size > 0)
                .flatMap((p) => (0, schemas_1.schemaValues)(p.dishes));
            while (pokemonEvolved.canEat && dishes.length > 0) {
                const dish = dishes.pop();
                if (dish && !pokemonEvolved.dishes.has(dish)) {
                    pokemonEvolved.dishes.add(dish);
                }
            }
        }
        if (coord) {
            pokemonEvolved.positionX = coord.x;
            pokemonEvolved.positionY = coord.y;
            player.board.set(pokemonEvolved.id, pokemonEvolved);
        }
        else {
            logger_1.logger.error("no coordinate found for new evolution");
        }
        if (pokemon.afterEvolve) {
            pokemon.afterEvolve({ pokemonEvolved, pokemonsBeforeEvolution, player });
        }
        pokemonEvolved.onAcquired(player);
        return pokemonEvolved;
    }
}
exports.CountEvolutionRule = CountEvolutionRule;
class ItemEvolutionRule extends EvolutionRule {
    constructor(itemsTriggeringEvolution, divergentEvolution) {
        super(divergentEvolution);
        this.itemsTriggeringEvolution = itemsTriggeringEvolution;
    }
    canEvolve(pokemon, player, stageLevel) {
        if (pokemon.items.has(Item_1.Item.EVIOLITE))
            return false;
        const itemsAndDishes = (0, schemas_1.schemaValues)(pokemon.items).concat((0, schemas_1.schemaValues)(pokemon.dishes));
        const itemEvolution = itemsAndDishes.find((item) => this.itemsTriggeringEvolution.includes(item));
        const pokemonEvolutionName = this.getEvolution(pokemon, player, itemEvolution);
        return itemEvolution != null && pokemonEvolutionName !== pokemon.name;
    }
    evolve(pokemon, player, stageLevel) {
        const itemEvolution = (0, schemas_1.schemaValues)(pokemon.items).find((item) => this.itemsTriggeringEvolution.includes(item));
        const pokemonEvolutionName = this.getEvolution(pokemon, player, itemEvolution);
        const pokemonEvolved = player.transformPokemon(pokemon, pokemonEvolutionName);
        return pokemonEvolved;
    }
}
exports.ItemEvolutionRule = ItemEvolutionRule;
class HatchEvolutionRule extends EvolutionRule {
    constructor(divergentEvolution) {
        super(divergentEvolution);
    }
    getHatchTime(pokemon, player) {
        if (pokemon.name === Pokemon_1.Pkm.EGG) {
            return player.effects.has(Effect_1.EffectEnum.BREEDER) ||
                player.effects.has(Effect_1.EffectEnum.GOLDEN_EGGS)
                ? config_1.EvolutionTime.EGG_HATCH - 1
                : config_1.EvolutionTime.EGG_HATCH;
        }
        return config_1.EvolutionTime.EVOLVE_HATCH;
    }
    updateHatch(pokemon, player, stageLevel) {
        pokemon.stacks++;
        const willHatch = this.canEvolve(pokemon, player, stageLevel);
        if (willHatch) {
            pokemon.action = Game_1.PokemonActionState.HOP;
            setTimeout(() => {
                pokemon.evolutionRule.tryEvolve(pokemon, player, stageLevel);
            }, 2000);
        }
        else if (pokemon.name === Pokemon_1.Pkm.EGG) {
            const hatchTime = this.getHatchTime(pokemon, player);
            if (pokemon.stacks >= hatchTime) {
                pokemon.action = Game_1.PokemonActionState.HOP;
            }
            else if (pokemon.stacks >= hatchTime - 1) {
                pokemon.action = Game_1.PokemonActionState.EMOTE;
            }
            else {
                pokemon.action = Game_1.PokemonActionState.IDLE;
            }
        }
    }
    canEvolve(pokemon, player, stageLevel) {
        if (pokemon.items.has(Item_1.Item.EVIOLITE))
            return false;
        if (!player.board.has(pokemon.id))
            return false;
        pokemon.stacksRequired = this.getHatchTime(pokemon, player);
        return pokemon.stacks >= pokemon.stacksRequired;
    }
    evolve(pokemon, player, stageLevel) {
        pokemon.stacks = 0;
        const pokemonEvolutionName = this.getEvolution(pokemon, player, stageLevel);
        const pokemonEvolved = player.transformPokemon(pokemon, pokemonEvolutionName);
        if (pokemonEvolved != null && pokemon.name === Pokemon_1.Pkm.EGG && pokemon.shiny) {
            player.items.push((0, random_1.pickRandomIn)(config_1.GoldenEggItems));
        }
        return pokemonEvolved;
    }
}
exports.HatchEvolutionRule = HatchEvolutionRule;
class ConditionBasedEvolutionRule extends EvolutionRule {
    constructor(condition, divergentEvolution) {
        super(divergentEvolution);
        this.condition = condition;
    }
    canEvolve(pokemon, player, stageLevel) {
        if (pokemon.items.has(Item_1.Item.EVIOLITE))
            return false;
        if (player.board.has(pokemon.id) === false)
            return false;
        return this.condition(pokemon, player, stageLevel);
    }
    evolve(pokemon, player, stageLevel) {
        const pokemonEvolutionName = this.getEvolution(pokemon, player, stageLevel);
        const pokemonEvolved = player.transformPokemon(pokemon, pokemonEvolutionName);
        return pokemonEvolved;
    }
}
exports.ConditionBasedEvolutionRule = ConditionBasedEvolutionRule;
function carryOverPermanentStats(pokemonEvolved, pokemonsBeforeEvolution) {
    var _a, _b;
    const permanentBuffStats = [
        "hp",
        "maxHP",
        "atk",
        "def",
        "speDef",
        "speed",
        "ap",
        "luck"
    ];
    const pkm = pokemonsBeforeEvolution[0].name;
    const baseData = pokemon_factory_1.default.createPokemonFromName(pkm);
    for (const stat of permanentBuffStats) {
        const sumOfPermaStatsModifier = (0, array_1.sum)(pokemonsBeforeEvolution.map((p) => p[stat] - baseData[stat]));
        const statMapping = {
            hp: Game_1.Stat.HP,
            maxHP: Game_1.Stat.HP,
            atk: Game_1.Stat.ATK,
            def: Game_1.Stat.DEF,
            speDef: Game_1.Stat.SPE_DEF,
            speed: Game_1.Stat.SPEED,
            ap: Game_1.Stat.AP,
            luck: Game_1.Stat.LUCK
        };
        pokemonEvolved.applyStat(statMapping[stat], sumOfPermaStatsModifier);
    }
    const existingTms = pokemonsBeforeEvolution
        .map((p) => p.tm)
        .filter((tm) => tm !== Ability_1.Ability.DEFAULT);
    if (existingTms.length > 0) {
        pokemonEvolved.tm = (0, random_1.pickRandomIn)(existingTms);
        if (pokemonEvolved.tm === Ability_1.Ability.SKILL_SWAP) {
            pokemonEvolved.skill =
                (_b = (_a = pokemonsBeforeEvolution.find((p) => p.tm === Ability_1.Ability.SKILL_SWAP)) === null || _a === void 0 ? void 0 : _a.skill) !== null && _b !== void 0 ? _b : Ability_1.Ability.SKILL_SWAP;
        }
        else {
            pokemonEvolved.skill = pokemonEvolved.tm;
        }
        pokemonEvolved.maxPP = 100;
    }
}
class StackBasedEvolutionRule extends ConditionBasedEvolutionRule {
    constructor(divergentEvolution) {
        super((pokemon) => {
            return pokemon.stacks >= pokemon.stacksRequired;
        }, divergentEvolution);
    }
}
exports.StackBasedEvolutionRule = StackBasedEvolutionRule;
//# sourceMappingURL=evolution-rules.js.map