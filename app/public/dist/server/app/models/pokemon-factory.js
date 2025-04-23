"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@colyseus/schema");
const types_1 = require("../types");
const Pokemon_1 = require("../types/enum/Pokemon");
const logger_1 = require("../utils/logger");
const pokemon_1 = require("./colyseus-models/pokemon");
const town_encounters_1 = require("../core/town-encounters");
const pokemon_customs_1 = require("./colyseus-models/pokemon-customs");
class PokemonFactory {
    static makePveBoard(pveStage, shinyEncounter, townEncounter) {
        const pokemons = new schema_1.MapSchema();
        pveStage.board.forEach(([pkm, x, y], index) => {
            var _a;
            const pokemon = PokemonFactory.createPokemonFromName(pkm, {
                emotion: (_a = pveStage.emotion) !== null && _a !== void 0 ? _a : types_1.Emotion.NORMAL,
                shiny: shinyEncounter
            });
            pokemon.positionX = x;
            pokemon.positionY = y;
            if (townEncounter === town_encounters_1.TownEncounters.MAROWAK &&
                pveStage.marowakItems &&
                index in pveStage.marowakItems) {
                pveStage.marowakItems[index].forEach((item) => pokemon.items.add(item));
            }
            pokemons.set(pokemon.id, pokemon);
        });
        return pokemons;
    }
    static getPokemonBaseEvolution(name) {
        switch (name) {
            case Pokemon_1.Pkm.VAPOREON:
            case Pokemon_1.Pkm.JOLTEON:
            case Pokemon_1.Pkm.FLAREON:
            case Pokemon_1.Pkm.ESPEON:
            case Pokemon_1.Pkm.UMBREON:
            case Pokemon_1.Pkm.LEAFEON:
            case Pokemon_1.Pkm.SYLVEON:
            case Pokemon_1.Pkm.GLACEON:
                return Pokemon_1.Pkm.EEVEE;
            case Pokemon_1.Pkm.SHEDINJA:
                return Pokemon_1.Pkm.NINCADA;
            case Pokemon_1.Pkm.WORMADAM_PLANT:
                return Pokemon_1.Pkm.BURMY_PLANT;
            case Pokemon_1.Pkm.WORMADAM_SANDY:
                return Pokemon_1.Pkm.BURMY_SANDY;
            case Pokemon_1.Pkm.WORMADAM_TRASH:
                return Pokemon_1.Pkm.BURMY_TRASH;
            default:
                if (Pokemon_1.PkmFamily[name] == Pokemon_1.Pkm.UNOWN_A) {
                    return name;
                }
                return Pokemon_1.PkmFamily[name];
        }
    }
    static createPokemonFromName(name, custom) {
        var _a, _b, _c, _d;
        let shiny = false;
        let emotion = types_1.Emotion.NORMAL;
        if (custom && "pokemonCustoms" in custom) {
            const pkmWithCustom = (0, pokemon_customs_1.getPkmWithCustom)(Pokemon_1.PkmIndex[name], custom.pokemonCustoms);
            shiny = (_a = pkmWithCustom.shiny) !== null && _a !== void 0 ? _a : false;
            emotion = (_b = pkmWithCustom.emotion) !== null && _b !== void 0 ? _b : types_1.Emotion.NORMAL;
        }
        else if (custom) {
            shiny = (_c = custom.shiny) !== null && _c !== void 0 ? _c : false;
            emotion = (_d = custom.emotion) !== null && _d !== void 0 ? _d : types_1.Emotion.NORMAL;
        }
        if (name in pokemon_1.PokemonClasses) {
            const PokemonClass = pokemon_1.PokemonClasses[name];
            return new PokemonClass(shiny, emotion);
        }
        else {
            logger_1.logger.warn(`No pokemon with name "${name}" found, return MissingNo`);
            return new pokemon_1.Pokemon(shiny, emotion);
        }
    }
}
exports.default = PokemonFactory;
//# sourceMappingURL=pokemon-factory.js.map