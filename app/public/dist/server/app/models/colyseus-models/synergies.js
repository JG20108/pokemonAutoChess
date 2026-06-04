"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSynergies = computeSynergies;
exports.addSynergiesGivenByItems = addSynergiesGivenByItems;
exports.getSynergyStep = getSynergyStep;
exports.getWildChance = getWildChance;
const schema_1 = require("@colyseus/schema");
const config_1 = require("../../config");
const Item_1 = require("../../types/enum/Item");
const Passive_1 = require("../../types/enum/Passive");
const Pokemon_1 = require("../../types/enum/Pokemon");
const SpecialGameRule_1 = require("../../types/enum/SpecialGameRule");
const Synergy_1 = require("../../types/enum/Synergy");
const board_1 = require("../../utils/board");
const schemas_1 = require("../../utils/schemas");
const pve_stages_1 = require("../pve-stages");
class Synergies extends schema_1.MapSchema {
    constructor(synergies) {
        super();
        Object.keys(Synergy_1.Synergy).forEach((key) => {
            var _a;
            this.set(key, (_a = synergies === null || synergies === void 0 ? void 0 : synergies.get(key)) !== null && _a !== void 0 ? _a : 0);
        });
    }
    hasSynergyActive(type) {
        var _a;
        return ((_a = this.get(type)) !== null && _a !== void 0 ? _a : 0) >= config_1.SynergyTriggers[type][0];
    }
    hasSynergyTriggerOrMore(type, level) {
        var _a;
        return ((_a = this.get(type)) !== null && _a !== void 0 ? _a : 0) >= config_1.SynergyTriggers[type][level - 1];
    }
    countActiveSynergies() {
        let count = 0;
        this.forEach((value, synergy) => {
            if (value >= config_1.SynergyTriggers[synergy][0]) {
                count++;
            }
        });
        return count;
    }
    getTopSynergies(amount) {
        const synergiesSortedByLevel = [];
        this.forEach((value, key) => {
            synergiesSortedByLevel.push([key, value]);
        });
        synergiesSortedByLevel.sort(([s1, v1], [s2, v2]) => {
            if (v2 === v1) {
                return (config_1.SynergyTriggers[s2].filter((n) => n <= v2).length -
                    config_1.SynergyTriggers[s1].filter((n) => n <= v1).length);
            }
            return v2 - v1;
        });
        if (amount) {
            return synergiesSortedByLevel.slice(0, amount).map(([s, v]) => s);
        }
        const topSynergyCount = synergiesSortedByLevel[0][1];
        const topSynergies = synergiesSortedByLevel
            .filter(([s, v]) => v >= topSynergyCount)
            .map(([s, v]) => s);
        return topSynergies;
    }
    toMap() {
        const map = new Map();
        this.forEach((value, key) => {
            map.set(key, value);
        });
        return map;
    }
}
exports.default = Synergies;
function computeSynergies(board, bonusSynergies, specialGameRule) {
    var _a;
    const synergies = new Map();
    Object.keys(Synergy_1.Synergy).forEach((key) => {
        var _a;
        synergies.set(key, (_a = bonusSynergies === null || bonusSynergies === void 0 ? void 0 : bonusSynergies.get(key)) !== null && _a !== void 0 ? _a : 0);
    });
    const typesPerFamily = new Map();
    board.forEach((pkm, index) => {
        if (pkm.passive === Passive_1.Passive.PROTEAN2 || pkm.passive === Passive_1.Passive.PROTEAN3) {
            pkm.types.clear();
        }
        addSynergiesGivenByItems(pkm);
        if (pkm.positionY != 0) {
            const family = specialGameRule === SpecialGameRule_1.SpecialGameRule.FAMILY_OUTING
                ? `pkm${index}`
                : Pokemon_1.PkmFamily[pkm.name];
            if (!typesPerFamily.has(family))
                typesPerFamily.set(family, new Set());
            const types = typesPerFamily.get(family);
            pkm.types.forEach((type) => types.add(type));
        }
    });
    typesPerFamily.forEach((types) => {
        types.forEach((type, i) => {
            var _a;
            synergies.set(type, ((_a = synergies.get(type)) !== null && _a !== void 0 ? _a : 0) + 1);
        });
    });
    function applyDragonDoubleTypes() {
        const dragonDoubleTypes = new Map();
        board.forEach((pkm, index) => {
            if (pkm.positionY != 0 &&
                pkm.types.has(Synergy_1.Synergy.DRAGON) &&
                pkm.types.size > 1) {
                const family = specialGameRule === SpecialGameRule_1.SpecialGameRule.FAMILY_OUTING
                    ? `pkm${index}`
                    : Pokemon_1.PkmFamily[pkm.name];
                if (!dragonDoubleTypes.has(family))
                    dragonDoubleTypes.set(family, new Set());
                dragonDoubleTypes.get(family).add((0, schemas_1.schemaValues)(pkm.types)[1]);
            }
        });
        dragonDoubleTypes.forEach((types) => {
            types.forEach((type, i) => {
                var _a;
                synergies.set(type, ((_a = synergies.get(type)) !== null && _a !== void 0 ? _a : 0) + 1);
            });
        });
    }
    if (((_a = synergies.get(Synergy_1.Synergy.DRAGON)) !== null && _a !== void 0 ? _a : 0) >= config_1.SynergyTriggers[Synergy_1.Synergy.DRAGON][0]) {
        applyDragonDoubleTypes();
    }
    board.forEach((pkm) => {
        var _a, _b;
        if (pkm.positionY !== 0 &&
            (pkm.passive === Passive_1.Passive.PROTEAN2 || pkm.passive === Passive_1.Passive.PROTEAN3)) {
            const nbDynamicSynergies = pkm.passive === Passive_1.Passive.PROTEAN3 ? 3 : 2;
            const synergiesSorted = [...synergies.keys()].sort((a, b) => +synergies.get(b) - +synergies.get(a));
            if (synergiesSorted.slice(0, nbDynamicSynergies).includes(Synergy_1.Synergy.DRAGON)) {
                const dragonIndex = synergiesSorted.indexOf(Synergy_1.Synergy.DRAGON);
                if (dragonIndex > 0) {
                    synergiesSorted.splice(dragonIndex, 1);
                    synergiesSorted.unshift(Synergy_1.Synergy.DRAGON);
                }
            }
            let shouldComputeDragonDoubleTypeAgain = false;
            for (let i = 0; i < nbDynamicSynergies; i++) {
                const type = synergiesSorted[i];
                if (type && !pkm.types.has(type) && synergies.get(type) > 0) {
                    pkm.types.add(type);
                    synergies.set(type, ((_a = synergies.get(type)) !== null && _a !== void 0 ? _a : 0) + 1);
                    if (type === Synergy_1.Synergy.DRAGON) {
                        if (synergies.get(Synergy_1.Synergy.DRAGON) ===
                            config_1.SynergyTriggers[Synergy_1.Synergy.DRAGON][0]) {
                            shouldComputeDragonDoubleTypeAgain = true;
                        }
                        else if (synergies.get(Synergy_1.Synergy.DRAGON) >
                            config_1.SynergyTriggers[Synergy_1.Synergy.DRAGON][0]) {
                            const doubledType = synergiesSorted[1];
                            synergies.set(doubledType, ((_b = synergies.get(doubledType)) !== null && _b !== void 0 ? _b : 0) + 1);
                        }
                    }
                }
            }
            if (shouldComputeDragonDoubleTypeAgain) {
                applyDragonDoubleTypes();
            }
            if (pkm.name.startsWith("ARCEUS")) {
                switch ((0, schemas_1.schemaValues)(pkm.types)[0]) {
                    case Synergy_1.Synergy.BUG:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_BUG];
                        break;
                    case Synergy_1.Synergy.DARK:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_DARK];
                        break;
                    case Synergy_1.Synergy.DRAGON:
                    case Synergy_1.Synergy.FOSSIL:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_DRAGON];
                        break;
                    case Synergy_1.Synergy.ELECTRIC:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_ELECTRIC];
                        break;
                    case Synergy_1.Synergy.FIGHTING:
                    case Synergy_1.Synergy.WILD:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_FIGHTING];
                        break;
                    case Synergy_1.Synergy.FIRE:
                    case Synergy_1.Synergy.GOURMET:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_FIRE];
                        break;
                    case Synergy_1.Synergy.FLYING:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_FLYING];
                        break;
                    case Synergy_1.Synergy.GHOST:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_GHOST];
                        break;
                    case Synergy_1.Synergy.GRASS:
                    case Synergy_1.Synergy.FLORA:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_GRASS];
                        break;
                    case Synergy_1.Synergy.GROUND:
                    case Synergy_1.Synergy.FIELD:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_GROUND];
                        break;
                    case Synergy_1.Synergy.ICE:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_ICE];
                        break;
                    case Synergy_1.Synergy.POISON:
                    case Synergy_1.Synergy.MONSTER:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_POISON];
                        break;
                    case Synergy_1.Synergy.PSYCHIC:
                    case Synergy_1.Synergy.SOUND:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_PSYCHIC];
                        break;
                    case Synergy_1.Synergy.ROCK:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_ROCK];
                        break;
                    case Synergy_1.Synergy.STEEL:
                    case Synergy_1.Synergy.ARTIFICIAL:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_STEEL];
                        break;
                    case Synergy_1.Synergy.WATER:
                    case Synergy_1.Synergy.AQUATIC:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_WATER];
                        break;
                    case Synergy_1.Synergy.FAIRY:
                    case Synergy_1.Synergy.AMORPHOUS:
                        pkm.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ARCEUS_FAIRY];
                        break;
                }
            }
        }
    });
    return synergies;
}
function addSynergiesGivenByItems(pkm) {
    pkm.items.forEach((item) => {
        const synergy = Item_1.SynergyGivenByItem[item];
        if (synergy) {
            if (synergy === Synergy_1.Synergy.DRAGON) {
                pkm.types = new schema_1.SetSchema([synergy, ...pkm.types]);
            }
            else {
                pkm.types.add(synergy);
            }
        }
    });
}
function getSynergyStep(synergies, type) {
    return config_1.SynergyTriggers[type].filter((n) => { var _a; return ((_a = synergies.get(type)) !== null && _a !== void 0 ? _a : 0) >= n; })
        .length;
}
function getWildChance(player, stageLevel) {
    const isPVE = stageLevel === 0 || stageLevel in pve_stages_1.PVEStages;
    const wildLevel = getSynergyStep(player.synergies, Synergy_1.Synergy.WILD);
    const baseChance = isPVE || wildLevel > 0 ? 7 : 0;
    const nbWildStars = (0, schemas_1.schemaValues)(player.board)
        .filter((p) => p.types.has(Synergy_1.Synergy.WILD) && (0, board_1.isOnBench)(p) === false)
        .reduce((total, p) => total + p.stars, 0);
    const bonusChance = wildLevel > 0 ? nbWildStars * 0.6 : 0;
    const runAwayBonus = wildLevel >= 2 ? nbWildStars * 5 : 0;
    return (baseChance + bonusChance + runAwayBonus) / 100;
}
//# sourceMappingURL=synergies.js.map