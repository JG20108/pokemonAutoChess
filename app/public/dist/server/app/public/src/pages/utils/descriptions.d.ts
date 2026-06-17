export declare const iconRegExp: RegExp;
export declare function addIconsToDescription(description: string, params?: {
    ap: number;
    luck: number;
    stars: number;
    stages?: number;
    showAbilityTiers?: boolean;
}): string | import("react/jsx-runtime").JSX.Element[];
export declare function addIconsToHtml(htmlString: string, stats?: {
    ap: number;
    luck: number;
    stars: number;
    stages?: number;
}): string;
