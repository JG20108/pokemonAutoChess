import type { Ability } from "../../../../../types/enum/Ability";
import "./ability-tooltip.css";
export declare function AbilityTooltip(props: {
    ability: Ability;
    stats?: {
        stars: number;
        stages: number;
        ap: number;
        luck: number;
        showAbilityTiers?: boolean;
    };
}): import("react/jsx-runtime").JSX.Element;
