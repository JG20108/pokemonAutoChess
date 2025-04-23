import { GameObjects } from "phaser";
export declare class GameDialog extends GameObjects.DOMElement {
    dom: HTMLDivElement;
    constructor(scene: Phaser.Scene, dialog: string, dialogTitle?: string, extraClass?: string);
}
