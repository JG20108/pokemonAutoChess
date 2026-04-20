import { Title } from "../../types";
import { IUserMetadataUnpacked } from "../../types/interfaces/UserMetadata";
export declare const THEMES: readonly ["default", "super", "lilac", "north", "unown", "umbra", "forest", "redsea", "origin"];
export type Theme = (typeof THEMES)[number];
export declare const VIDEO_BG_THEMES: Theme[];
export declare const TITLE_BY_THEME: Partial<Record<Theme, Title>>;
export declare const THEME_BY_TITLE: Partial<Record<Title, Theme>>;
export declare const TITLES_UNLOCKING_THEMES: Title[];
export declare function isThemeUnlocked(theme: Theme, profile: IUserMetadataUnpacked): boolean;
