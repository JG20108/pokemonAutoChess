import type Phaser from "phaser";
import { GameObjects } from "phaser";
import type { Emotion, IPokemon, IPokemonEntity } from "../../../../../types";
import { Pkm } from "../../../../../types/enum/Pokemon";
import "./game-pokemon-detail.css";
export declare function GamePokemonDetail(props: {
    pokemon: Pkm | IPokemon | IPokemonEntity | null | undefined;
    origin: "shop" | "proposition" | "team" | "planner" | "battle" | "wiki" | "patchnotes" | "after";
    shiny?: boolean;
    emotion?: Emotion;
    isAlly?: boolean;
}): import("react/jsx-runtime").JSX.Element | null;
export declare class GamePokemonDetailDOMWrapper extends GameObjects.DOMElement {
    dom: HTMLDivElement;
    private root;
    private pokemon;
    private shiny?;
    private emotion?;
    private origin;
    isAlly: boolean;
    constructor(scene: Phaser.Scene, x: number, y: number, pokemon: Pkm | IPokemon | IPokemonEntity, origin: "shop" | "team" | "planner" | "battle" | "wiki", isAlly?: boolean, shiny?: boolean, emotion?: Emotion);
    private render;
    updatePokemon(pokemon: Pkm | IPokemon | IPokemonEntity, shiny?: boolean, emotion?: Emotion): void;
    destroy(): void;
}
export declare function GamePokemonDetailTooltip(props: {
    origin: "wiki" | "patchnotes" | "after" | "planner";
    isOpen?: boolean;
}): import("react/jsx-runtime").JSX.Element;
