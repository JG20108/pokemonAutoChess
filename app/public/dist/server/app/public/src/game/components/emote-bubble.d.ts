import { GameObjects } from "phaser";
export declare class EmoteBubble extends GameObjects.DOMElement {
    dom: HTMLDivElement;
    constructor(scene: Phaser.Scene, emoteAvatar: string, isOpponent: boolean);
}
