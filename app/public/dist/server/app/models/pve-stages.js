"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PVEStages = void 0;
const types_1 = require("../types");
const Game_1 = require("../types/enum/Game");
const Item_1 = require("../types/enum/Item");
const Pokemon_1 = require("../types/enum/Pokemon");
const Synergy_1 = require("../types/enum/Synergy");
const random_1 = require("../utils/random");
const schemas_1 = require("../utils/schemas");
exports.PVEStages = {
    1: {
        name: "pkm.MAGIKARP",
        avatar: Pokemon_1.Pkm.MAGIKARP,
        board: [
            [Pokemon_1.Pkm.MAGIKARP, 3, 1],
            [Pokemon_1.Pkm.MAGIKARP, 5, 1]
        ],
        shinyChance: 1 / 40,
        rewards: Item_1.ItemComponentsNoFossilOrScarf,
        getRewards(player) {
            const randomComponent = (0, random_1.pickRandomIn)(Item_1.ItemComponentsNoFossilOrScarf);
            player.randomComponentsGiven.push(randomComponent);
            return [randomComponent];
        }
    },
    2: {
        name: "pkm.RATTATA",
        avatar: Pokemon_1.Pkm.RATTATA,
        board: [
            [Pokemon_1.Pkm.RATTATA, 3, 1],
            [Pokemon_1.Pkm.RATTATA, 5, 1]
        ],
        rewards: Item_1.ItemComponentsNoFossilOrScarf,
        getRewardsPropositions(player) {
            return (0, random_1.pickNRandomIn)(Item_1.ItemComponentsNoFossilOrScarf.filter((i) => player.randomComponentsGiven.includes(i) === false), 3);
        }
    },
    3: {
        name: "pkm.SPEAROW",
        avatar: Pokemon_1.Pkm.SPEAROW,
        board: [
            [Pokemon_1.Pkm.SPEAROW, 3, 1],
            [Pokemon_1.Pkm.SPEAROW, 5, 1],
            [Pokemon_1.Pkm.SPEAROW, 4, 2]
        ],
        rewards: Item_1.ItemComponentsNoFossilOrScarf,
        getRewards(player) {
            const randomComponent = (0, random_1.pickRandomIn)(Item_1.ItemComponentsNoFossilOrScarf.filter((i) => player.randomComponentsGiven.includes(i) === false));
            player.randomComponentsGiven.push(randomComponent);
            return [randomComponent];
        }
    },
    9: {
        name: "pkm.GYARADOS",
        avatar: Pokemon_1.Pkm.GYARADOS,
        board: [[Pokemon_1.Pkm.GYARADOS, 4, 2]],
        marowakItems: [[Item_1.Item.KINGS_ROCK]],
        shinyChance: 1 / 50,
        rewards: [...Item_1.ItemComponentsNoFossilOrScarf, Item_1.Item.RED_SCALE],
        getRewards(_player, shinyEncounter) {
            if (shinyEncounter)
                return [Item_1.Item.RED_SCALE];
            else
                return (0, random_1.pickNRandomIn)(Item_1.ItemComponentsNoFossilOrScarf, 1);
        }
    },
    14: {
        name: "pkm.MEWTWO",
        avatar: Pokemon_1.Pkm.MEWTWO,
        emotion: types_1.Emotion.DETERMINED,
        board: [
            [Pokemon_1.Pkm.MEWTWO, 0, 1],
            [Pokemon_1.Pkm.MEW, 7, 1]
        ],
        marowakItems: [[Item_1.Item.METAL_COAT], [Item_1.Item.DEEP_SEA_TOOTH]],
        shinyChance: 1 / 100,
        rewards: Item_1.ItemComponentsNoFossilOrScarf,
        getRewards(player) {
            const rewards = [];
            if ((0, schemas_1.values)(player.board).some((p) => p.name === Pokemon_1.Pkm.CHARCADET) ||
                player.pokemonsTrainingInDojo.some((p) => p.pokemon.name === Pokemon_1.Pkm.CHARCADET)) {
                const psyLevel = player.synergies.get(Synergy_1.Synergy.PSYCHIC) || 0;
                const ghostLevel = player.synergies.get(Synergy_1.Synergy.GHOST) || 0;
                const armorReceived = psyLevel > ghostLevel
                    ? Item_1.Item.AUSPICIOUS_ARMOR
                    : psyLevel < ghostLevel
                        ? Item_1.Item.MALICIOUS_ARMOR
                        : (0, random_1.chance)(1 / 2)
                            ? Item_1.Item.AUSPICIOUS_ARMOR
                            : Item_1.Item.MALICIOUS_ARMOR;
                rewards.push(armorReceived);
            }
            return rewards;
        },
        getRewardsPropositions(_player, shinyEncounter) {
            if (shinyEncounter) {
                return (0, random_1.pickNRandomIn)(Item_1.ShinyItems.filter((o) => o !== Item_1.Item.RED_SCALE), 3);
            }
            else {
                return (0, random_1.pickNRandomIn)([...Item_1.ItemComponentsNoFossilOrScarf, Item_1.Item.FOSSIL_STONE], 3);
            }
        }
    },
    19: {
        name: "tower_duo",
        avatar: Pokemon_1.Pkm.LUGIA,
        emotion: types_1.Emotion.DETERMINED,
        board: [
            [Pokemon_1.Pkm.LUGIA, 3, 1],
            [Pokemon_1.Pkm.HO_OH, 5, 1]
        ],
        statBoosts: {
            [Game_1.Stat.HP]: 50,
            [Game_1.Stat.DEF]: 5,
            [Game_1.Stat.SPE_DEF]: 5
        },
        marowakItems: [[Item_1.Item.COMET_SHARD], [Item_1.Item.SACRED_ASH]],
        rewards: Item_1.ItemComponentsNoFossilOrScarf,
        getRewards(player) {
            const componentsWeights = Item_1.ItemComponentsNoFossilOrScarf.reduce((o, i) => {
                return Object.assign(Object.assign({}, o), { [i]: player.randomComponentsGiven.includes(i) ? 1 : 2 });
            }, {});
            const randomComponentsGiven = [];
            for (let i = 0; i < 2; i++) {
                randomComponentsGiven.push((0, random_1.randomWeighted)(componentsWeights));
            }
            player.randomComponentsGiven.push(...randomComponentsGiven);
            return randomComponentsGiven;
        }
    },
    24: {
        name: "legendary_birds",
        avatar: Pokemon_1.Pkm.ZAPDOS,
        board: [
            [Pokemon_1.Pkm.ZAPDOS, 2, 2],
            [Pokemon_1.Pkm.MOLTRES, 4, 2],
            [Pokemon_1.Pkm.ARTICUNO, 6, 2]
        ],
        statBoosts: {
            [Game_1.Stat.HP]: 100,
            [Game_1.Stat.DEF]: 10,
            [Game_1.Stat.SPE_DEF]: 10,
            [Game_1.Stat.AP]: 50
        },
        marowakItems: [
            [Item_1.Item.XRAY_VISION, Item_1.Item.BLUE_ORB],
            [Item_1.Item.SOUL_DEW, Item_1.Item.POKEMONOMICON],
            [Item_1.Item.AQUA_EGG, Item_1.Item.STAR_DUST]
        ],
        rewards: Item_1.CraftableItemsNoScarves,
        getRewards(player) {
            for (const p of (0, schemas_1.values)(player.board)) {
                if (p.name === Pokemon_1.Pkm.ZACIAN) {
                    return [Item_1.Item.RUSTED_SWORD];
                }
            }
            return [];
        },
        getRewardsPropositions(player) {
            const rewards = (0, random_1.pickNRandomIn)(Item_1.CraftableNoStonesOrScarves, 2);
            rewards.push((0, random_1.pickRandomIn)(Item_1.CraftableItemsNoScarves.filter((o) => !rewards.includes(o))));
            return rewards;
        }
    },
    28: {
        name: "legendary_beasts",
        avatar: Pokemon_1.Pkm.SUICUNE,
        emotion: types_1.Emotion.DETERMINED,
        board: [
            [Pokemon_1.Pkm.ENTEI, 2, 2],
            [Pokemon_1.Pkm.RAIKOU, 4, 2],
            [Pokemon_1.Pkm.SUICUNE, 6, 2]
        ],
        statBoosts: {
            [Game_1.Stat.HP]: 100,
            [Game_1.Stat.DEF]: 10,
            [Game_1.Stat.SPE_DEF]: 10,
            [Game_1.Stat.ATK]: 10,
            [Game_1.Stat.SPEED]: 10,
            [Game_1.Stat.PP]: 80,
            [Game_1.Stat.AP]: 50
        },
        marowakItems: [
            [Item_1.Item.ASSAULT_VEST, Item_1.Item.ROCKY_HELMET],
            [Item_1.Item.XRAY_VISION, Item_1.Item.PUNCHING_GLOVE],
            [Item_1.Item.DEEP_SEA_TOOTH, Item_1.Item.CHOICE_SPECS]
        ],
        rewards: Item_1.CraftableItemsNoScarves,
        getRewardsPropositions(player) {
            const rewards = (0, random_1.pickNRandomIn)(Item_1.CraftableNoStonesOrScarves, 2);
            rewards.push((0, random_1.pickRandomIn)(Item_1.CraftableItemsNoScarves.filter((o) => !rewards.includes(o))));
            return rewards;
        }
    },
    32: {
        name: "super_ancients",
        avatar: Pokemon_1.Pkm.RAYQUAZA,
        emotion: types_1.Emotion.DETERMINED,
        board: [
            [Pokemon_1.Pkm.PRIMAL_KYOGRE, 2, 2],
            [Pokemon_1.Pkm.MEGA_RAYQUAZA, 4, 2],
            [Pokemon_1.Pkm.PRIMAL_GROUDON, 6, 2]
        ],
        statBoosts: {
            [Game_1.Stat.HP]: 200,
            [Game_1.Stat.DEF]: 15,
            [Game_1.Stat.SPE_DEF]: 15,
            [Game_1.Stat.ATK]: 10
        },
        marowakItems: [
            [Item_1.Item.BLUE_ORB, Item_1.Item.AQUA_EGG, Item_1.Item.SOUL_DEW],
            [Item_1.Item.GREEN_ORB, Item_1.Item.STAR_DUST, Item_1.Item.POWER_LENS],
            [Item_1.Item.RED_ORB, Item_1.Item.FLAME_ORB, Item_1.Item.PROTECTIVE_PADS]
        ],
        rewards: Item_1.CraftableItemsNoScarves,
        getRewardsPropositions(player) {
            const rewards = (0, random_1.pickNRandomIn)(Item_1.CraftableNoStonesOrScarves, 2);
            rewards.push((0, random_1.pickRandomIn)(Item_1.CraftableItemsNoScarves.filter((o) => !rewards.includes(o))));
            return rewards;
        }
    },
    36: {
        name: "legendary_giants",
        avatar: Pokemon_1.Pkm.REGICE,
        emotion: types_1.Emotion.DETERMINED,
        board: [
            [Pokemon_1.Pkm.REGIELEKI, 1, 3],
            [Pokemon_1.Pkm.REGICE, 2, 3],
            [Pokemon_1.Pkm.REGIGIGAS, 3, 3],
            [Pokemon_1.Pkm.REGIROCK, 4, 3],
            [Pokemon_1.Pkm.REGISTEEL, 5, 3],
            [Pokemon_1.Pkm.REGIDRAGO, 6, 3]
        ],
        statBoosts: {
            [Game_1.Stat.HP]: 50
        },
        marowakItems: [
            [],
            [Item_1.Item.ABILITY_SHIELD, Item_1.Item.GRACIDEA_FLOWER, Item_1.Item.GREEN_ORB],
            [Item_1.Item.DYNAMAX_BAND],
            [Item_1.Item.ABILITY_SHIELD, Item_1.Item.GRACIDEA_FLOWER, Item_1.Item.GREEN_ORB],
            [Item_1.Item.ABILITY_SHIELD, Item_1.Item.GRACIDEA_FLOWER, Item_1.Item.GREEN_ORB],
            []
        ],
        rewards: Item_1.CraftableItemsNoScarves,
        getRewardsPropositions(player) {
            const rewards = (0, random_1.pickNRandomIn)(Item_1.CraftableNoStonesOrScarves, 2);
            rewards.push((0, random_1.pickRandomIn)(Item_1.CraftableItemsNoScarves.filter((o) => !rewards.includes(o))));
            return rewards;
        }
    },
    40: {
        name: "pkm.ARCEUS",
        avatar: Pokemon_1.Pkm.ARCEUS,
        emotion: types_1.Emotion.INSPIRED,
        board: [
            [Pokemon_1.Pkm.DIALGA, 2, 3],
            [Pokemon_1.Pkm.GIRATINA, 4, 3],
            [Pokemon_1.Pkm.PALKIA, 6, 3],
            [Pokemon_1.Pkm.ARCEUS, 4, 1]
        ],
        statBoosts: {
            [Game_1.Stat.HP]: 200,
            [Game_1.Stat.DEF]: 15,
            [Game_1.Stat.SPE_DEF]: 15,
            [Game_1.Stat.ATK]: 10,
            [Game_1.Stat.AP]: 50
        },
        marowakItems: [
            [Item_1.Item.DYNAMAX_BAND],
            [Item_1.Item.DYNAMAX_BAND],
            [Item_1.Item.DYNAMAX_BAND],
            [Item_1.Item.DYNAMAX_BAND]
        ],
        rewards: [Item_1.Item.RARE_CANDY, Item_1.Item.SACRED_ASH, Item_1.Item.GOLD_BOW],
        getRewards(player) {
            return [Item_1.Item.RARE_CANDY, Item_1.Item.SACRED_ASH, Item_1.Item.GOLD_BOW];
        }
    }
};
//# sourceMappingURL=pve-stages.js.map