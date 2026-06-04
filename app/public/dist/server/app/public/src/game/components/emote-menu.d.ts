import { GameObjects } from "phaser";
import type { IPlayer } from "../../../../types";
import { type Emotion } from "../../../../types/enum/Emotion";
import type GameScene from "../scenes/game-scene";
import "./emote-menu.css";
export declare function EmoteMenuComponent(props: {
    player: IPlayer;
    index: string;
    shiny: boolean;
    sendEmote: (emotion: Emotion) => void;
}): import("react/jsx-runtime").JSX.Element;
export default class EmoteMenu extends GameObjects.DOMElement {
    dom: HTMLDivElement;
    constructor(scene: GameScene, avatarIndex: string, shiny: boolean, sendEmote: (emotion: Emotion) => void);
}
