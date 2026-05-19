export declare const GADGETS_NAMES: readonly ["trainer_card", "bag", "team_planner", "jukebox", "certificate", "palette", "synergy_wheel", "gameboy", "pokeguesser", "bot_builder", "tier_list_maker", "sprite_tracker"];
export type GadgetName = (typeof GADGETS_NAMES)[number];
export type Gadget = {
    name: GadgetName;
    icon: string;
    levelRequired: number;
    disabled?: boolean;
};
export declare const GADGETS: Record<GadgetName, Gadget>;
export declare const GADGETS_UNLOCKED_BY_LEVEL: Record<number, Gadget>;
