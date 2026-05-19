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
        yield removePokemonFromGame("MEGA_LUCARIO", "0448-0001", "LUCARIO", "0448");
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
                        p.name = pokemonIndexToReplace;
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
//# sourceMappingURL=remove-mega-lucario.js.map