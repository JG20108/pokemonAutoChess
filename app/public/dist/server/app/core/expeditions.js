"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerExpeditions = getPlayerExpeditions;
exports.getExpeditionTier = getExpeditionTier;
exports.getExpeditionLabel = getExpeditionLabel;
exports.getExpeditionData = getExpeditionData;
const i18next_1 = require("i18next");
const config_1 = require("../config");
const precomputed_pokemons_1 = require("../models/precomputed/precomputed-pokemons");
const types_1 = require("../types");
const Dungeon_1 = require("../types/enum/Dungeon");
const Expedition_1 = require("../types/enum/Expedition");
const Game_1 = require("../types/enum/Game");
const number_1 = require("../utils/number");
function getPlayerExpeditions(user) {
    const hash = user.uid.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) +
        user.eventPoints;
    const expeditionsTypes = Object.values(Expedition_1.ExpeditionType);
    const expeditions = [...expeditionsTypes, ...expeditionsTypes]
        .slice(hash % expeditionsTypes.length, (hash % expeditionsTypes.length) + 3)
        .map((type, i) => ({
        rank: getExpeditionTier(user.eventPoints - i),
        type,
        hash
    }));
    return expeditions;
}
function getExpeditionTier(level) {
    if (level < 3) {
        return Expedition_1.ExpeditionRank.E;
    }
    else if (level < 6) {
        return Expedition_1.ExpeditionRank.D;
    }
    else if (level < 10) {
        return Expedition_1.ExpeditionRank.C;
    }
    else if (level < 15) {
        return Expedition_1.ExpeditionRank.B;
    }
    else if (level < 20) {
        return Expedition_1.ExpeditionRank.A;
    }
    else {
        return Expedition_1.ExpeditionRank.S;
    }
}
function getExpeditionLabel(expedition) {
    if (expedition.type === Expedition_1.ExpeditionType.BATTLE) {
        const data = getExpeditionData(expedition);
        if (data.stat === "maxWinStreak") {
            return (0, i18next_1.t)(`expeditions.BATTLE_WIN_STREAK_DESCRIPTION`, data);
        }
        else {
            const gameStatLabelMapping = {
                maxHP: "HP",
                maxAttack: "ATK",
                maxDefense: "DEF",
                maxAP: "AP",
                maxSpecialDefense: "SPE_DEF",
                maxSpeed: "SPEED",
                maxPhysicalDamage: (0, i18next_1.t)(`game_stats.physical_damage_dealt`),
                maxSpecialDamage: (0, i18next_1.t)(`game_stats.special_damage_dealt`),
                maxTrueDamage: (0, i18next_1.t)(`game_stats.true_damage_dealt`),
                maxShield: (0, i18next_1.t)(`game_stats.shield_given`),
                maxHeal: (0, i18next_1.t)(`game_stats.hp_healed`),
                maxWinStreak: (0, i18next_1.t)(`streak`)
            };
            return (0, i18next_1.t)(`expeditions.BATTLE_DESCRIPTION`, Object.assign(Object.assign({}, data), { gameStat: gameStatLabelMapping[data.stat] || data.stat }));
        }
    }
    if (expedition.type === Expedition_1.ExpeditionType.EXPLORATION) {
        const data = getExpeditionData(expedition);
        return (0, i18next_1.t)(`expeditions.EXPLORATION_DESCRIPTION`, Object.assign(Object.assign({}, data), { regionSynergies: config_1.RegionDetails[data.region].synergies.join(" ") }));
    }
    return (0, i18next_1.t)(`expeditions.${expedition.type}_DESCRIPTION`, getExpeditionData(expedition));
}
function getExpeditionData(expedition) {
    const rankIndex = ["E", "D", "C", "B", "A", "S"].indexOf(expedition.rank);
    switch (expedition.type) {
        case Expedition_1.ExpeditionType.RESCUE: {
            const rarity = [
                Game_1.Rarity.COMMON,
                Game_1.Rarity.COMMON,
                Game_1.Rarity.UNCOMMON,
                Game_1.Rarity.RARE,
                Game_1.Rarity.EPIC,
                Game_1.Rarity.LEGENDARY
            ][rankIndex];
            const pokemonsOfCategory = precomputed_pokemons_1.precomputedPokemons
                .filter((p) => p.stars === (expedition.rank === "E" ? 2 : 3) && p.rarity === rarity)
                .filter((p, index, arr) => arr.findIndex((p2) => (0, config_1.getBaseAltForm)(p2.name) === (0, config_1.getBaseAltForm)(p.name)) === index);
            const pokemonToRescue = pokemonsOfCategory[expedition.hash % pokemonsOfCategory.length].name;
            return { pokemon: pokemonToRescue };
        }
        case Expedition_1.ExpeditionType.EXPLORATION: {
            const regions = Object.values(Dungeon_1.DungeonPMDO);
            const region = regions[expedition.hash % regions.length];
            const regionSynergies = config_1.RegionDetails[region].synergies;
            const synergy = regionSynergies[expedition.hash % regionSynergies.length];
            const synergyTriggers = config_1.SynergyTriggers[synergy];
            const level = synergyTriggers[(0, number_1.max)(synergyTriggers.length - 1)(rankIndex)];
            return {
                region,
                synergy,
                level
            };
        }
        case Expedition_1.ExpeditionType.BATTLE: {
            const stat = Expedition_1.BattleMissionStats[expedition.hash % Expedition_1.BattleMissionStats.length];
            const AMOUNTS_BY_RANK = {
                E: {
                    maxAttack: 50,
                    maxDefense: 50,
                    maxSpecialDefense: 50,
                    maxSpeed: 150,
                    maxHP: 400,
                    maxAP: 200,
                    maxPhysicalDamage: 500,
                    maxSpecialDamage: 500,
                    maxTrueDamage: 250,
                    maxShield: 250,
                    maxHeal: 250,
                    maxWinStreak: 5
                },
                D: {
                    maxAttack: 60,
                    maxDefense: 60,
                    maxSpecialDefense: 60,
                    maxSpeed: 180,
                    maxHP: 500,
                    maxAP: 250,
                    maxPhysicalDamage: 600,
                    maxSpecialDamage: 600,
                    maxTrueDamage: 300,
                    maxShield: 300,
                    maxHeal: 300,
                    maxWinStreak: 6
                },
                C: {
                    maxAttack: 80,
                    maxDefense: 80,
                    maxSpecialDefense: 80,
                    maxSpeed: 210,
                    maxHP: 750,
                    maxAP: 300,
                    maxPhysicalDamage: 750,
                    maxSpecialDamage: 750,
                    maxTrueDamage: 400,
                    maxShield: 400,
                    maxHeal: 400,
                    maxWinStreak: 7
                },
                B: {
                    maxAttack: 100,
                    maxDefense: 100,
                    maxSpecialDefense: 100,
                    maxSpeed: 240,
                    maxHP: 1000,
                    maxAP: 350,
                    maxPhysicalDamage: 1000,
                    maxSpecialDamage: 1000,
                    maxTrueDamage: 500,
                    maxShield: 500,
                    maxHeal: 500,
                    maxWinStreak: 8
                },
                A: {
                    maxAttack: 150,
                    maxDefense: 150,
                    maxSpecialDefense: 150,
                    maxSpeed: 270,
                    maxHP: 1250,
                    maxAP: 400,
                    maxPhysicalDamage: 1500,
                    maxSpecialDamage: 1500,
                    maxTrueDamage: 750,
                    maxShield: 750,
                    maxHeal: 750,
                    maxWinStreak: 9
                },
                S: {
                    maxAttack: 200,
                    maxDefense: 200,
                    maxSpecialDefense: 200,
                    maxSpeed: 300,
                    maxHP: 1500,
                    maxAP: 450,
                    maxPhysicalDamage: 2000,
                    maxSpecialDamage: 2000,
                    maxTrueDamage: 1000,
                    maxShield: 1000,
                    maxHeal: 1000,
                    maxWinStreak: 10
                }
            };
            const amount = AMOUNTS_BY_RANK[expedition.rank][stat];
            return {
                stat,
                amount
            };
        }
        case Expedition_1.ExpeditionType.DELIVERY: {
            const itemTypePerRank = {
                [Expedition_1.ExpeditionRank.E]: types_1.CraftableItemsNoScarves,
                [Expedition_1.ExpeditionRank.D]: types_1.CraftableItemsNoScarves,
                [Expedition_1.ExpeditionRank.C]: types_1.SynergyItemsNoSpecial,
                [Expedition_1.ExpeditionRank.B]: [
                    types_1.Item.AMULET_COIN,
                    types_1.Item.GIMMIGHOUL_COIN,
                    types_1.Item.LEADERS_CREST,
                    types_1.Item.DRAGON_GEM,
                    types_1.Item.SUN_STONE
                ],
                [Expedition_1.ExpeditionRank.A]: types_1.SynergyStones,
                [Expedition_1.ExpeditionRank.S]: types_1.ShinyItems
            };
            const quantityPerRank = {
                [Expedition_1.ExpeditionRank.E]: 1,
                [Expedition_1.ExpeditionRank.D]: 2,
                [Expedition_1.ExpeditionRank.C]: 1,
                [Expedition_1.ExpeditionRank.B]: 1,
                [Expedition_1.ExpeditionRank.A]: 2,
                [Expedition_1.ExpeditionRank.S]: 1
            };
            const items = itemTypePerRank[expedition.rank];
            const item = items[expedition.hash % items.length];
            const quantity = quantityPerRank[expedition.rank];
            return {
                item,
                quantity
            };
        }
        default:
            throw new Error(`Unhandled expedition type: ${expedition.type}`);
    }
}
//# sourceMappingURL=expeditions.js.map