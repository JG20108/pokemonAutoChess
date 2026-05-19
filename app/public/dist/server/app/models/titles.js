"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlayerTitlesAfterFight = updatePlayerTitlesAfterFight;
exports.updatePlayerTitlesAfterGame = updatePlayerTitlesAfterGame;
const config_1 = require("../config");
const types_1 = require("../types");
const Effect_1 = require("../types/enum/Effect");
const Pokemon_1 = require("../types/enum/Pokemon");
const array_1 = require("../utils/array");
const schemas_1 = require("../utils/schemas");
function updatePlayerTitlesAfterFight(player, state) {
    const simulation = state.simulations.get(player.simulationId);
    if (!simulation)
        return;
    const effects = simulation === null || simulation === void 0 ? void 0 : simulation.getEffects(player.id);
    if (effects) {
        effects.forEach((effect) => {
            switch (effect) {
                case Effect_1.EffectEnum.PURE_POWER:
                    player.titles.add(types_1.Title.POKEFAN);
                    break;
                case Effect_1.EffectEnum.OVERGROW:
                    player.titles.add(types_1.Title.POKEMON_RANGER);
                    break;
                case Effect_1.EffectEnum.DESOLATE_LAND:
                    player.titles.add(types_1.Title.KINDLER);
                    break;
                case Effect_1.EffectEnum.PRIMORDIAL_SEA:
                    player.titles.add(types_1.Title.FIREFIGHTER);
                    break;
                case Effect_1.EffectEnum.POWER_SURGE:
                    player.titles.add(types_1.Title.ELECTRICIAN);
                    break;
                case Effect_1.EffectEnum.COACHING:
                    player.titles.add(types_1.Title.BLACK_BELT);
                    break;
                case Effect_1.EffectEnum.TRANSCENDENCE:
                    player.titles.add(types_1.Title.TELEKINESIST);
                    break;
                case Effect_1.EffectEnum.BEAT_UP:
                    player.titles.add(types_1.Title.DELINQUENT);
                    break;
                case Effect_1.EffectEnum.MAX_MELTDOWN:
                    player.titles.add(types_1.Title.ENGINEER);
                    break;
                case Effect_1.EffectEnum.DEEP_MINER:
                    player.titles.add(types_1.Title.GEOLOGIST);
                    break;
                case Effect_1.EffectEnum.TOXIC:
                    player.titles.add(types_1.Title.TEAM_ROCKET_GRUNT);
                    break;
                case Effect_1.EffectEnum.DRAGON_DANCE:
                    player.titles.add(types_1.Title.DRAGON_TAMER);
                    break;
                case Effect_1.EffectEnum.ANGER_POINT:
                    player.titles.add(types_1.Title.CAMPER);
                    break;
                case Effect_1.EffectEnum.MERCILESS:
                    player.titles.add(types_1.Title.MYTH_TRAINER);
                    break;
                case Effect_1.EffectEnum.CALM_MIND:
                    player.titles.add(types_1.Title.RIVAL);
                    break;
                case Effect_1.EffectEnum.SURGE_SURFER:
                    player.titles.add(types_1.Title.SURFER);
                    break;
                case Effect_1.EffectEnum.HEART_OF_THE_SWARM:
                    player.titles.add(types_1.Title.BUG_MANIAC);
                    break;
                case Effect_1.EffectEnum.SKYDIVE:
                    player.titles.add(types_1.Title.BIRD_KEEPER);
                    break;
                case Effect_1.EffectEnum.FLOWER_POWER:
                    player.titles.add(types_1.Title.GARDENER);
                    break;
                case Effect_1.EffectEnum.GOOGLE_SPECS:
                    player.titles.add(types_1.Title.ALCHEMIST);
                    break;
                case Effect_1.EffectEnum.BERSERK:
                    player.titles.add(types_1.Title.BERSERKER);
                    break;
                case Effect_1.EffectEnum.ETHEREAL:
                    player.titles.add(types_1.Title.BLOB);
                    break;
                case Effect_1.EffectEnum.BANQUET:
                    player.titles.add(types_1.Title.CHEF);
                    break;
                case Effect_1.EffectEnum.DIAMOND_STORM:
                    player.titles.add(types_1.Title.HIKER);
                    break;
                case Effect_1.EffectEnum.CURSE_OF_FATE:
                    player.titles.add(types_1.Title.HEX_MANIAC);
                    break;
                case Effect_1.EffectEnum.MOON_FORCE:
                    player.titles.add(types_1.Title.CUTE_MANIAC);
                    break;
                case Effect_1.EffectEnum.SHEER_COLD:
                    player.titles.add(types_1.Title.SKIER);
                    break;
                case Effect_1.EffectEnum.FORGOTTEN_POWER:
                    player.titles.add(types_1.Title.MUSEUM_DIRECTOR);
                    break;
                case Effect_1.EffectEnum.PRESTO:
                    player.titles.add(types_1.Title.MUSICIAN);
                    break;
                case Effect_1.EffectEnum.GOLDEN_EGGS:
                    player.titles.add(types_1.Title.BABYSITTER);
                    break;
                case Effect_1.EffectEnum.MAX_ILLUMINATION:
                    player.titles.add(types_1.Title.CHOSEN_ONE);
                    break;
                default:
                    break;
            }
        });
        if (effects.size >= 5) {
            player.titles.add(types_1.Title.HARLEQUIN);
        }
        if (effects.size >= 10) {
            player.titles.add(types_1.Title.TACTICIAN);
        }
        if (effects.size >= 15) {
            player.titles.add(types_1.Title.STRATEGIST);
        }
        let shield = 0;
        let heal = 0;
        const dpsMeter = simulation.getDpsMeter(player.id);
        if (dpsMeter) {
            dpsMeter.forEach((v) => {
                shield += v.shield;
                heal += v.heal;
            });
        }
        if (shield > 1000) {
            player.titles.add(types_1.Title.GARDIAN);
        }
        if (heal > 1000) {
            player.titles.add(types_1.Title.NURSE);
        }
        if (state.stageLevel >= 40) {
            player.titles.add(types_1.Title.ETERNAL);
        }
        const equippedItems = (0, schemas_1.schemaValues)(player.board).flatMap((p) => (0, schemas_1.schemaValues)(p.items));
        if (equippedItems.filter((i) => (0, array_1.isIn)(types_1.Scarves, i)).length >= 5) {
            player.titles.add(types_1.Title.SCOUT);
        }
    }
}
function updatePlayerTitlesAfterGame(player, usr, rank) {
    player.titles.add(types_1.Title.NOVICE);
    if (usr.level >= 10) {
        player.titles.add(types_1.Title.ROOKIE);
    }
    if (usr.level >= 20) {
        player.titles.add(types_1.Title.AMATEUR);
    }
    if (usr.level >= 30) {
        player.titles.add(types_1.Title.VETERAN);
    }
    if (usr.level >= 40) {
        player.titles.add(types_1.Title.BOT_BUILDER);
    }
    if (usr.level >= 50) {
        player.titles.add(types_1.Title.PRO);
    }
    if (usr.level >= 100) {
        player.titles.add(types_1.Title.EXPERT);
    }
    if (usr.level >= 150) {
        player.titles.add(types_1.Title.ELITE);
    }
    if (usr.level >= 200) {
        player.titles.add(types_1.Title.MASTER);
    }
    if (usr.level >= 300) {
        player.titles.add(types_1.Title.GRAND_MASTER);
    }
    if (player.life >= 100 && rank === 1) {
        player.titles.add(types_1.Title.TYRANT);
    }
    if (player.life === 1 && rank === 1) {
        player.titles.add(types_1.Title.SURVIVOR);
    }
    if (player.gameStats.rerollCount > 60) {
        player.titles.add(types_1.Title.GAMBLER);
    }
    else if (player.gameStats.rerollCount < 20 && rank === 1) {
        player.titles.add(types_1.Title.NATURAL);
    }
    if (player.titles.has(types_1.Title.COLLECTOR) === false &&
        Object.values(Pokemon_1.Pkm)
            .filter((p) => Pokemon_1.NonPkm.includes(p) === false)
            .every((pkm) => {
            const baseForm = (0, config_1.getBaseAltForm)(pkm);
            const accepted = baseForm in config_1.PkmAltFormsByPkm
                ? [
                    baseForm,
                    ...config_1.PkmAltFormsByPkm[baseForm]
                ]
                : [baseForm];
            return accepted.some((form) => {
                const pokemonCollectionItem = usr.pokemonCollection.get(Pokemon_1.PkmIndex[form]);
                return pokemonCollectionItem && pokemonCollectionItem.played > 0;
            });
        })) {
        player.titles.add(types_1.Title.COLLECTOR);
    }
    if (usr.elo >= 1100) {
        player.titles.add(types_1.Title.GYM_TRAINER);
    }
    if (usr.elo >= 1200) {
        player.titles.add(types_1.Title.GYM_CHALLENGER);
    }
    if (usr.elo >= 1400) {
        player.titles.add(types_1.Title.GYM_LEADER);
    }
    if (player.gameStats.maxHP >= 1500) {
        player.titles.add(types_1.Title.GIANT);
    }
}
//# sourceMappingURL=titles.js.map