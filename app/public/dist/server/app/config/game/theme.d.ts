import { Title } from "../../types";
import type { IUserMetadataUnpacked } from "../../types/interfaces/UserMetadata";
export declare const THEMES: readonly ["default", "super", "lilac", "rainbow", "unown", "origin", "umbra", "autumn", "redsea", "zengarden", "deerling"];
export type Theme = (typeof THEMES)[number];
export declare const VIDEO_BG_THEMES: Theme[];
export declare const TITLE_BY_THEME: {
    unown: Title.ARCHEOLOGIST;
    rainbow: Title.HARLEQUIN;
    autumn: Title.POKEMON_RANGER;
    umbra: Title.DELINQUENT;
    redsea: Title.FISHERMAN;
    origin: Title.MUSEUM_DIRECTOR;
    zengarden: Title.NATURAL;
    deerling: Title.AMATEUR;
};
export declare const THEME_BY_TITLE: Record<Title.AMATEUR | Title.DELINQUENT | Title.MUSEUM_DIRECTOR | Title.POKEMON_RANGER | Title.HARLEQUIN | Title.NATURAL | Title.ARCHEOLOGIST | Title.FISHERMAN, "autumn" | "rainbow" | "umbra" | "unown" | "zengarden" | "redsea" | "deerling" | "origin">;
export declare const TITLES_UNLOCKING_THEMES: (Title.AMATEUR | Title.DELINQUENT | Title.MUSEUM_DIRECTOR | Title.POKEMON_RANGER | Title.HARLEQUIN | Title.NATURAL | Title.ARCHEOLOGIST | Title.FISHERMAN)[];
export type TitleUnlockingTheme = (typeof TITLES_UNLOCKING_THEMES)[number];
export declare function isThemeUnlocked(theme: Theme, profile: IUserMetadataUnpacked): boolean;
