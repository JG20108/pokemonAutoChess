import { type FishingRod, Item } from "../../types/enum/Item";
import { type Effect, OnAttackEffect, OnItemDroppedEffect, OnMoveEffect, OnStageStartEffect, PeriodicEffect } from "./effect";
export declare const blueOrbOnAttackEffect: OnAttackEffect;
export declare const loadedDiceOnAttackEffect: OnAttackEffect;
export declare class SoulDewEffect extends PeriodicEffect {
    constructor();
}
export declare class MachRibbonEffect extends PeriodicEffect {
    constructor();
}
export declare class GreenOrbEffect extends PeriodicEffect {
    constructor();
}
export declare class RunningShoesOnMoveEffect extends OnMoveEffect {
    stacks: number;
    constructor();
}
export declare class DojoTicketOnItemDroppedEffect extends OnItemDroppedEffect {
    constructor(ticketLevel: number);
}
export declare class FishingRodEffect extends OnStageStartEffect {
    constructor(rod: FishingRod);
}
export declare const ItemEffects: {
    [i in Item]?: (Effect | (() => Effect))[];
};
