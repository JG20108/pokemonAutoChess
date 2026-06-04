import type { DungeonPMDO } from "./Dungeon";
import type { Item } from "./Item";
import type { Pkm } from "./Pokemon";
import type { Synergy } from "./Synergy";
export declare enum ExpeditionRank {
    E = "E",
    D = "D",
    C = "C",
    B = "B",
    A = "A",
    S = "S"
}
export declare enum ExpeditionType {
    RESCUE = "RESCUE",
    EXPLORATION = "EXPLORATION",
    BATTLE = "BATTLE",
    DELIVERY = "DELIVERY"
}
export type Expedition = {
    rank: ExpeditionRank;
    type: ExpeditionType;
    hash: number;
};
export declare enum ExpeditionQuest {
    APPLE = "APPLE",
    BIG_NUGGET = "BIG_NUGGET",
    MAX_SPEED = "MAX_SPEED",
    MAX_DEFENSE = "MAX_DEFENSE",
    OVERQWIL = "OVERQWIL",
    RELIC_1 = "RELIC_1",
    RELIC_2 = "RELIC_2",
    RELIC_3 = "RELIC_3",
    PLAY_ONE_CLASSIC = "PLAY_ONE_CLASSIC",
    PLAY_ONE_SCRIBBLE = "PLAY_ONE_SCRIBBLE",
    WIN_RANKED = "WIN_RANKED",
    SPAMMER = "SPAMMER",
    FEED_THE_BEAST = "FEED_THE_BEAST",
    SELL_UNIQUE = "SELL_UNIQUE",
    HOARDER = "HOARDER"
}
export type ExpeditionData = RescueMissionData | ExplorationMissionData | BattleMissionData | DeliveryMissionData;
export type RescueMissionData = {
    pokemon: Pkm;
};
export type ExplorationMissionData = {
    region: DungeonPMDO;
    synergy: Synergy;
    level: number;
};
export type BattleMissionData = {
    stat: BattleMissionStat;
    amount: number;
};
export type DeliveryMissionData = {
    item: Item;
    quantity: number;
};
export declare const BattleMissionStats: ("maxHP" | "maxAttack" | "maxDefense" | "maxAP" | "maxSpecialDefense" | "maxSpeed" | "maxPhysicalDamage" | "maxSpecialDamage" | "maxTrueDamage" | "maxShield" | "maxHeal" | "maxWinStreak")[];
export type BattleMissionStat = (typeof BattleMissionStats)[number];
