import { Emotion, PkmWithCustom } from "../types";
export declare function getPortraitSrc(index?: string, shiny?: boolean, emotion?: Emotion): string;
export declare function getAvatarSrc(avatar: string): string;
export declare function getAvatarString(index?: string, shiny?: boolean, emotion?: Emotion): string;
export declare function getPokemonCustomFromAvatar(avatar: string): PkmWithCustom;
