"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PVEStages = void 0;
const types_1 = require("../types");
const Item_1 = require("../types/enum/Item");
const Pokemon_1 = require("../types/enum/Pokemon");
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
        getRewards(player) {
            const randomComponent = (0, random_1.pickRandomIn)(Item_1.NonSpecialItemComponents);
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
        getRewards(player) {
            const randomComponent = (0, random_1.pickRandomIn)(Item_1.NonSpecialItemComponents.filter((i) => player.randomComponentsGiven.includes(i) === false));
            player.randomComponentsGiven.push(randomComponent);
            return [randomComponent];
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
        getRewards(player) {
            const randomComponent = (0, random_1.pickRandomIn)(Item_1.NonSpecialItemComponents.filter((i) => player.randomComponentsGiven.includes(i) === false));
            player.randomComponentsGiven.push(randomComponent);
            return [randomComponent];
        }
    },
    9: {
        name: "pkm.GYARADOS",
        avatar: Pokemon_1.Pkm.GYARADOS,
        shinyChance: 1 / 40,
        board: [[Pokemon_1.Pkm.GYARADOS, 4, 2]],
        marowakItems: [[Item_1.Item.KINGS_ROCK]],
        getRewards(player) {
            const randomComponents = (0, random_1.pickNRandomIn)(Item_1.ItemComponents, 1);
            return randomComponents;
        }
    },
    14: {
        name: "pkm.MEWTWO",
        avatar: Pokemon_1.Pkm.MEWTWO,
        emotion: types_1.Emotion.DETERMINED,
        shinyChance: 0,
        board: [
            [Pokemon_1.Pkm.MEWTWO, 0, 1],
            [Pokemon_1.Pkm.MEW, 7, 1]
        ],
        marowakItems: [
            [Item_1.Item.METAL_COAT, Item_1.Item.LIGHT_BALL],
            [Item_1.Item.WIDE_LENS, Item_1.Item.MANA_SCARF]
        ],
        getRewards(player) {
            return [(0, random_1.pickRandomIn)(Item_1.NonSpecialItemComponents)];
        }
    },
    19: {
        name: "tower_duo",
        avatar: Pokemon_1.Pkm.LUGIA,
        emotion: types_1.Emotion.DETERMINED,
        shinyChance: 1 / 40,
        board: [
            [Pokemon_1.Pkm.LUGIA, 3, 1],
            [Pokemon_1.Pkm.HO_OH, 5, 1]
        ],
        marowakItems: [[Item_1.Item.COMET_SHARD], [Item_1.Item.SACRED_ASH]],
        getRewards(player) {
            const items = (0, schemas_1.values)(player.board)
                .flatMap((p) => (0, schemas_1.values)(p.items))
                .concat([...player.items]);
            const nbComponents = items.filter((i) => Item_1.ItemComponents.includes(i)).length;
            if (nbComponents % 2 === 1) {
                return [(0, random_1.pickRandomIn)(Item_1.NonSpecialItemComponents)];
            }
            else {
                return [(0, random_1.pickRandomIn)(Item_1.CraftableNonSynergyItems)];
            }
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
        marowakItems: [[Item_1.Item.FLUFFY_TAIL], [Item_1.Item.POKEMONOMICON], [Item_1.Item.AQUA_EGG]],
        getRewardsPropositions(player) {
            const rewards = (0, random_1.pickNRandomIn)(Item_1.CraftableNonSynergyItems, 2);
            rewards.push((0, random_1.pickRandomIn)(Item_1.CraftableItems.filter((o) => !rewards.includes(o))));
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
        marowakItems: [
            [Item_1.Item.ICE_STONE, Item_1.Item.THUNDER_STONE, Item_1.Item.SHELL_BELL],
            [Item_1.Item.FIRE_STONE, Item_1.Item.ICE_STONE, Item_1.Item.SHELL_BELL],
            [Item_1.Item.FIRE_STONE, Item_1.Item.THUNDER_STONE, Item_1.Item.SHELL_BELL]
        ],
        getRewardsPropositions(player) {
            const rewards = (0, random_1.pickNRandomIn)(Item_1.CraftableNonSynergyItems, 2);
            rewards.push((0, random_1.pickRandomIn)(Item_1.CraftableItems.filter((o) => !rewards.includes(o))));
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
        marowakItems: [
            [Item_1.Item.BLUE_ORB, Item_1.Item.AQUA_EGG, Item_1.Item.SOUL_DEW],
            [Item_1.Item.GREEN_ORB, Item_1.Item.STAR_DUST, Item_1.Item.POWER_LENS],
            [Item_1.Item.RED_ORB, Item_1.Item.FLAME_ORB, Item_1.Item.PROTECTIVE_PADS]
        ],
        getRewardsPropositions(player) {
            const rewards = (0, random_1.pickNRandomIn)(Item_1.CraftableNonSynergyItems, 2);
            rewards.push((0, random_1.pickRandomIn)(Item_1.CraftableItems.filter((o) => !rewards.includes(o))));
            return rewards;
        }
    },
    36: {
        name: "legendary_giants",
        avatar: Pokemon_1.Pkm.REGICE,
        emotion: types_1.Emotion.DETERMINED,
        board: [
            [Pokemon_1.Pkm.REGIELEKI, 2, 2],
            [Pokemon_1.Pkm.REGICE, 2, 3],
            [Pokemon_1.Pkm.REGIGIGAS, 3, 3],
            [Pokemon_1.Pkm.REGIROCK, 4, 3],
            [Pokemon_1.Pkm.REGISTEEL, 5, 3],
            [Pokemon_1.Pkm.REGIDRAGO, 5, 2]
        ],
        marowakItems: [
            [Item_1.Item.OLD_AMBER],
            [Item_1.Item.OLD_AMBER],
            [Item_1.Item.OLD_AMBER],
            [Item_1.Item.OLD_AMBER],
            [Item_1.Item.OLD_AMBER],
            [Item_1.Item.OLD_AMBER]
        ],
        getRewardsPropositions(player) {
            const rewards = (0, random_1.pickNRandomIn)(Item_1.CraftableNonSynergyItems, 2);
            rewards.push((0, random_1.pickRandomIn)(Item_1.CraftableItems.filter((o) => !rewards.includes(o))));
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
        marowakItems: [
            [Item_1.Item.DYNAMAX_BAND],
            [Item_1.Item.DYNAMAX_BAND],
            [Item_1.Item.DYNAMAX_BAND],
            [Item_1.Item.DYNAMAX_BAND]
        ],
        getRewardsPropositions(player) {
            return (0, random_1.pickNRandomIn)(Item_1.ShinyItems, 3);
        }
    }
};
//# sourceMappingURL=pve-stages.js.map