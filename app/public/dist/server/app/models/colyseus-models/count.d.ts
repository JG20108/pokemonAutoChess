import { Schema } from "@colyseus/schema";
import type { ICount } from "../../types";
export default class Count extends Schema implements ICount {
    crit: number;
    ult: number;
    fieldCount: number;
    fairyCritCount: number;
    attackCount: number;
    fightingBlockCount: number;
    dodgeCount: number;
    starDustCount: number;
    tripleAttackCount: number;
    staticHolderCount: number;
    muscleBandCount: number;
    machRibbonCount: number;
    spellBlockedCount: number;
    manaBurnCount: number;
    moneyCount: number;
    amuletCoinCount: number;
    bottleCapCount: number;
    upgradeCount: number;
    soulDewCount: number;
    soundCryCount: number;
    damageReceivedCount: number;
}
