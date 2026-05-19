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
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
const bot_v2_1 = require("../../app/models/mongo-models/bot-v2");
const detailled_statistic_v2_1 = __importDefault(require("../../app/models/mongo-models/detailled-statistic-v2"));
const meta_1 = __importDefault(require("../../app/models/mongo-models/meta"));
const logger_1 = require("../../app/utils/logger");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        yield removePokemonFromGame("SILVALLY_FIRE", "0773-0009", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_FOSSIL", "0773-0015", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_PSYCHIC", "0773-0013", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_WATER", "0773-0010", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_ELECTRIC", "0773-0012", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_FAIRY", "0773-0017", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_DARK", "0773-0016", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_GRASS", "0773-0011", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_ICE", "0773-0014", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_FIGHTING", "0773-0001", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_LIGHT", "0773-0006", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_POISON", "0773-0003", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_SOUND", "0773", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_STEEL", "0773-0008", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_FLYING", "0773-0002", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_ROCK", "0773-0005", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_GROUND", "0773-0004", "SILVALLY", "0773");
        yield removePokemonFromGame("SILVALLY_GHOST", "0773-0007", "SILVALLY", "0773");
    });
}
function removePokemonFromGame(pokemonNameToRemove, pokemonIndexToRemove, pokemonNameToReplace, pokemonIndexToReplace) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.logger.info("connect to db ...");
            const db = yield (0, mongoose_1.connect)(process.env.MONGO_URI);
            console.log(`Replacing ${pokemonNameToRemove} by ${pokemonNameToReplace} in bots`);
            const bots = yield bot_v2_1.BotV2.find().exec();
            for (let i = 0; i < bots.length; i++) {
                let modified = false;
                const bot = bots[i];
                bot.steps.forEach((step) => {
                    step.board.forEach((p) => {
                        if (p.name === pokemonNameToRemove) {
                            p.name = pokemonNameToReplace;
                            modified = true;
                        }
                    });
                });
                if (modified) {
                    console.log(`Bot ${bot.name} has been modified to replace ${pokemonNameToRemove} by ${pokemonNameToReplace}`);
                    bot.markModified("steps");
                    yield bot.save();
                }
            }
            console.log(`Replacing ${pokemonNameToRemove} by ${pokemonNameToReplace} in game detailled statistics`);
            const stats = yield detailled_statistic_v2_1.default.find({}, ["pokemons"]);
            for (let i = 0; i < stats.length; i++) {
                const record = stats[i];
                let modified = false;
                record.pokemons.forEach((p) => {
                    if (p.name === pokemonNameToRemove) {
                        p.name = pokemonNameToReplace;
                        p.avatar = p.avatar.replace(pokemonIndexToRemove, pokemonIndexToReplace);
                        record.markModified("pokemons");
                        modified = true;
                    }
                });
                if (modified) {
                    console.log(`DetailedStatistic has been modified to replace ${pokemonNameToRemove} by ${pokemonNameToReplace}`);
                    yield record.save();
                }
            }
            console.log(`Removing ${pokemonNameToRemove} from meta report`);
            const meta = yield meta_1.default.find({}, ["pokemons", "teams"]);
            for (let i = 0; i < meta.length; i++) {
                const metarecord = meta[i];
                let modified = false;
                if (pokemonNameToRemove in metarecord.pokemons) {
                    metarecord.pokemons[pokemonNameToReplace] =
                        metarecord.pokemons[pokemonNameToRemove];
                    delete metarecord.pokemons[pokemonNameToRemove];
                    metarecord.markModified("pokemons");
                    modified = true;
                }
                metarecord.teams.forEach((team) => {
                    if (pokemonNameToRemove in team.pokemons) {
                        team.pokemons[pokemonNameToReplace] =
                            team.pokemons[pokemonNameToRemove];
                        delete team.pokemons[pokemonNameToRemove];
                        metarecord.markModified("teams");
                        modified = true;
                    }
                });
                if (modified) {
                    console.log(`Meta report has been modified to replace ${pokemonNameToRemove} by ${pokemonIndexToReplace}`);
                    yield metarecord.save();
                }
            }
            yield db.disconnect();
        }
        catch (e) {
            logger_1.logger.error("Error:", e);
        }
    });
}
main();
//# sourceMappingURL=merge-silvally.js.map