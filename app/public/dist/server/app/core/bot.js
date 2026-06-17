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
const config_1 = require("../config");
const bot_v2_1 = require("../models/mongo-models/bot-v2");
const pokemon_factory_1 = __importDefault(require("../models/pokemon-factory"));
const types_1 = require("../types");
const Game_1 = require("../types/enum/Game");
const Passive_1 = require("../types/enum/Passive");
const Synergy_1 = require("../types/enum/Synergy");
const logger_1 = require("../utils/logger");
const random_1 = require("../utils/random");
const effect_1 = require("./effects/effect");
const passives_1 = require("./effects/passives");
class Bot {
    constructor(player) {
        this.player = player;
        this.step = 0;
        this.progress = 0;
        this.initialize();
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield bot_v2_1.BotV2.findOne({ id: this.player.id }, ["steps"]);
                if (data) {
                    this.scenario = data;
                    this.player.fairyWands.push((0, random_1.pickRandomIn)(config_1.FAIRY_WANDS_BY_SYNERGY_LEVEL[0]), (0, random_1.pickRandomIn)(config_1.FAIRY_WANDS_BY_SYNERGY_LEVEL[1]), (0, random_1.pickRandomIn)(config_1.FAIRY_WANDS_BY_SYNERGY_LEVEL[2]), (0, random_1.pickRandomIn)(config_1.FAIRY_WANDS_BY_SYNERGY_LEVEL[3]));
                    this.updatePlayerTeam();
                }
            }
            catch (error) {
                logger_1.logger.error(error);
            }
        });
    }
    updateProgress() {
        this.progress += 1;
        if (this.scenario &&
            this.scenario.steps[this.step + 1] &&
            this.progress >= this.scenario.steps[this.step + 1].roundsRequired) {
            this.step += 1;
            this.progress -= this.scenario.steps[this.step].roundsRequired;
            this.updatePlayerTeam();
            this.updateFlowerPots();
        }
    }
    updatePlayerTeam() {
        var _a, _b;
        this.player.board.forEach((pokemon, key) => {
            this.player.board.delete(key);
        });
        if (this.scenario) {
            const stepTeam = this.scenario.steps[this.step];
            for (let i = 0; i < stepTeam.board.length; i++) {
                const potentialEmotion = stepTeam.board[i].emotion;
                const emotion = potentialEmotion ? potentialEmotion : types_1.Emotion.NORMAL;
                const pkm = pokemon_factory_1.default.createPokemonFromName(stepTeam.board[i].name, {
                    emotion,
                    shiny: !!stepTeam.board[i].shiny
                });
                pkm.positionX = stepTeam.board[i].x;
                pkm.positionY = stepTeam.board[i].y;
                if (pkm.passive !== Passive_1.Passive.NONE) {
                    const hasLight = ((_a = this.player.synergies.get(Synergy_1.Synergy.LIGHT)) !== null && _a !== void 0 ? _a : 0) >=
                        config_1.SynergyTriggers[Synergy_1.Synergy.LIGHT][0];
                    const inSpotlight = hasLight &&
                        ((pkm.positionX === this.player.lightX &&
                            pkm.positionY === this.player.lightY) ||
                            pkm.items.has(types_1.Item.SHINY_STONE));
                    (_b = passives_1.PassiveEffects[pkm.passive]) === null || _b === void 0 ? void 0 : _b.forEach((effect) => {
                        if (effect instanceof effect_1.OnChangePositionEffect) {
                            effect.apply({
                                pokemon: pkm,
                                player: this.player,
                                oldX: pkm.positionX,
                                oldY: pkm.positionY,
                                newX: pkm.positionX,
                                newY: pkm.positionY
                            });
                        }
                        if (effect instanceof effect_1.OnSpotlightChangeEffect) {
                            effect.apply({
                                pokemon: pkm,
                                player: this.player,
                                inSpotlight
                            });
                        }
                    });
                }
                if (stepTeam.board[i].items) {
                    stepTeam.board[i].items.forEach((item) => {
                        if (types_1.TMs.includes(item)) {
                            const ability = types_1.AbilityPerTM[item];
                            if (!ability || pkm.types.has(Synergy_1.Synergy.HUMAN) === false)
                                return false;
                            pkm.tm = ability;
                            pkm.skill = ability;
                            pkm.maxPP = 100;
                        }
                        else if (!pkm.items.has(item)) {
                            pkm.items.add(item);
                        }
                    });
                }
                this.player.board.set(pkm.id, pkm);
            }
            this.player.updateSynergies();
        }
    }
    updateFlowerPots() {
        if (this.step % 3 === 0 && this.step >= 6 && this.step < 30) {
            const mulchIndex = Math.floor(this.step / 3) - 2;
            const potIndex = mulchIndex % 4;
            const flowerPot = this.player.flowerPots[potIndex];
            if (flowerPot && flowerPot.evolution) {
                const potEvolution = pokemon_factory_1.default.createPokemonFromName(flowerPot.evolution, this.player);
                potEvolution.action = Game_1.PokemonActionState.SLEEP;
                this.player.flowerPots[potIndex] = potEvolution;
            }
        }
    }
}
exports.default = Bot;
//# sourceMappingURL=bot.js.map