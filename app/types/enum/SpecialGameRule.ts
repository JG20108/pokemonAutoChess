export enum SpecialGameRule {
  EVERYONE_IS_HERE = "EVERYONE_IS_HERE",
  UNIQUE_STARTER = "UNIQUE_STARTER",
  OMELETTE_COOK = "OMELETTE_COOK",
  DITTO_PARTY = "DITTO_PARTY",
  GOTTA_CATCH_EM_ALL = "GOTTA_CATCH_EM_ALL",
  TECHNOLOGIC = "TECHNOLOGIC",
  CROWDED = "CROWDED",
  FREE_MARKET = "FREE_MARKET",
  SHINY_HUNTER = "SHINY_HUNTER",
  DO_IT_ALL_YOURSELF = "DO_IT_ALL_YOURSELF",
  FIRST_PARTNER = "FIRST_PARTNER",
  SLAMINGO = "SLAMINGO",
  BLOOD_MONEY = "BLOOD_MONEY",
  TOWN_FESTIVAL = "TOWN_FESTIVAL",
  HIGH_ROLLER = "HIGH_ROLLER",
  REGIONAL_SPECIALTIES = "REGIONAL_SPECIALTIES",
  GO_BIG_OR_GO_HOME = "GO_BIG_OR_GO_HOME",
  FAMILY_OUTING = "FAMILY_OUTING",
  UNOWN_SPELL = "UNOWN_SPELL",
  CHOSEN_ONES = "CHOSEN_ONES",
  PSEUDO_JOURNEY = "PSEUDO_JOURNEY",
  MONOTYPE = "MONOTYPE",
  CHOSEN_ONE = "CHOSEN_ONE",
  DUAL_TYPE_SPECIALIST = "DUAL_TYPE_SPECIALIST",
  GYM_BADGE = "GYM_BADGE"
}

export const SpecialGameRuleDescription: Record<SpecialGameRule, string> = {
  [SpecialGameRule.EVERYONE_IS_HERE]:
    "All the additional picks are available immediately",
  [SpecialGameRule.UNIQUE_STARTER]: "Get a random Unique at stage 1",
  [SpecialGameRule.OMELETTE_COOK]:
    "Get a Pokémon Egg after stage 1, 2 and 3",
  [SpecialGameRule.DITTO_PARTY]:
    "Start with 5 Ditto on your bench. Ditto cannot be found in the shop and cannot be sold.",
  [SpecialGameRule.GOTTA_CATCH_EM_ALL]:
    "Some Pokémon can be caught before each PvE round",
  [SpecialGameRule.TECHNOLOGIC]: "Choose between 3 tools at stage 2 and 4",
  [SpecialGameRule.CROWDED]: "+3 units max on board",
  [SpecialGameRule.FREE_MARKET]: "Pokémon are bought and sold for 0 GOLD",
  [SpecialGameRule.SHINY_HUNTER]:
    "Wild PvE encounters at stage 1, 9 and 14 are shiny",
  [SpecialGameRule.DO_IT_ALL_YOURSELF]:
    "Start with a copy of your avatar. Lower rarity avatars get additional max HP and starting gold.",
  [SpecialGameRule.FIRST_PARTNER]:
    "Choose your starter Pokémon. You get a copy of this unit every stage up to stage 10.",
  [SpecialGameRule.SLAMINGO]:
    "All items are dropped when a Pokémon is put on the bench. Starts with 4 random components.",
  [SpecialGameRule.BLOOD_MONEY]:
    "Every KO gives 1 GOLD (excluding clones and spawns). No extra income from interests.",
  [SpecialGameRule.TOWN_FESTIVAL]:
    "You always get an encounter in town and all the carousel items are free.",
  [SpecialGameRule.HIGH_ROLLER]:
    "Shops have a chance to contain Hatch at stages 0-10, Unique at stages 10-20 and Legendary after stage 20.",
  [SpecialGameRule.REGIONAL_SPECIALTIES]:
    "Your current region types count towards your synergies. After changing region, your team tastes a local dish.",
  [SpecialGameRule.GO_BIG_OR_GO_HOME]:
    "Units gain 5 max HP and grow in size at every stage.",
  [SpecialGameRule.FAMILY_OUTING]:
    "Pokémon from the same family all count towards synergy levels.",
  [SpecialGameRule.UNOWN_SPELL]:
    "Unowns are spectating your fights and are casting spells on both teams each round.",
  [SpecialGameRule.CHOSEN_ONES]:
    "The add picks you choose evolve immediately and gain bonus stats.",
  [SpecialGameRule.PSEUDO_JOURNEY]:
    "Choose a base-form pseudo-legendary at stage 1. You receive a free copy on your bench every stage up to stage 10.",
  [SpecialGameRule.MONOTYPE]:
    "Choose one synergy type at stage 1. Only Pokémon sharing that synergy can be placed on the board.",
  [SpecialGameRule.CHOSEN_ONE]:
    "At stage 1, pick any Unique Pokémon from the full pool. It starts on your bench and cannot be sold.",
  [SpecialGameRule.DUAL_TYPE_SPECIALIST]:
    "Choose TWO synergy types at stage 1. Only Pokémon sharing at least one of your chosen synergies can be placed on the board.",
  [SpecialGameRule.GYM_BADGE]:
    "Choose one synergy at stage 1. Each time that synergy reaches a new threshold (up to 3), you earn a free Rare Candy. Dropping below a threshold removes one Candy the same way other synergy items are taken back."
}
