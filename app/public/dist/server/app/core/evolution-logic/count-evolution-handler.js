"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountEvolutionHandler = void 0;
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const types_1 = require("../../types");
const Pokemon_1 = require("../../types/enum/Pokemon");
const board_1 = require("../../utils/board");
const logger_1 = require("../../utils/logger");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const evolution_handler_1 = require("./evolution-handler");
class CountEvolutionHandler extends evolution_handler_1.EvolutionHandler {
    constructor(evolutionRule) {
        super(evolutionRule);
        this.numberRequired = evolutionRule.numberRequired;
    }
    canEvolve(pokemon, player) {
        if (!pokemon.hasEvolution)
            return false;
        if (pokemon.name === Pokemon_1.Pkm.BERGMITE &&
            (0, schemas_1.schemaValues)(player.board).find((p) => p.name === Pokemon_1.Pkm.AVALUGG || p.name === Pokemon_1.Pkm.HISUI_AVALUGG)) {
            return false;
        }
        const copies = (0, schemas_1.schemaValues)(player.board).filter((p) => p.index === pokemon.index && !p.items.has(types_1.Item.EVIOLITE));
        return copies.length >= this.numberRequired;
    }
    canEvolveIfGettingOne(pokemon, player) {
        if (!pokemon.hasEvolution)
            return false;
        if (pokemon.name === Pokemon_1.Pkm.BERGMITE &&
            (0, schemas_1.schemaValues)(player.board).find((p) => p.name === Pokemon_1.Pkm.AVALUGG || p.name === Pokemon_1.Pkm.HISUI_AVALUGG)) {
            return false;
        }
        const copies = (0, schemas_1.schemaValues)(player.board).filter((p) => p.index === pokemon.index && !p.items.has(types_1.Item.EVIOLITE));
        return copies.length === this.numberRequired - 1;
    }
    evolve(pokemon, player) {
        const pokemonEvolutionName = this.getEvolution(pokemon, player);
        let coord;
        const itemsComponentsOnBench = [];
        const itemsCompleteOnBench = [];
        const itemsComponentsOnBoard = [];
        const itemsCompleteOnBoard = [];
        const pokemonsBeforeEvolution = [];
        player.board.forEach((pkm, id) => {
            if (pkm.index == pokemon.index &&
                !pkm.items.has(types_1.Item.EVIOLITE) &&
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
                    if (types_1.ItemComponents.includes(el)) {
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
        (0, evolution_handler_1.carryOverPermanentStats)(pokemonEvolved, pokemonsBeforeEvolution);
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
                if (item === types_1.Item.SHINY_CHARM) {
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
            if ((0, schemas_1.schemaValues)(pokemonEvolved.items).some((i) => types_1.ItemComponents.includes(i)) ||
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
        if (pokemonsBeforeEvolution.some(p => p.supercharged)) {
            pokemonEvolved.supercharged = true;
        }
        if (coord) {
            pokemonEvolved.positionX = coord.x;
            pokemonEvolved.positionY = coord.y;
            player.board.set(pokemonEvolved.id, pokemonEvolved);
        }
        else {
            logger_1.logger.error("no coordinate found for new evolution");
        }
        pokemonEvolved.onAcquired(player);
        return pokemonEvolved;
    }
}
exports.CountEvolutionHandler = CountEvolutionHandler;
//# sourceMappingURL=count-evolution-handler.js.map