import { GameObjects } from "phaser";
import { type PortraitOptions } from "../../pages/component/pokemon-portrait";
export declare class GameDialog extends GameObjects.DOMElement {
    dom: HTMLDivElement;
    constructor({ scene, dialog, dialogTitle, portrait, extraClass }: {
        scene: Phaser.Scene;
        dialog: string;
        dialogTitle?: string;
        portrait?: PortraitOptions;
        extraClass?: string;
    });
}
