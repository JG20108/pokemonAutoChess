import { GameObjects } from "phaser";
import { Item } from "../../../../types/enum/Item";
import "./item-detail.css";
export declare function ItemDetailTooltipContent({ item, showItemCombinationsTooltip }: {
    item: Item;
    showItemCombinationsTooltip?: boolean;
}): import("react/jsx-runtime").JSX.Element | null;
export declare function ItemDetailTooltip(): import("react/jsx-runtime").JSX.Element;
export default class ItemDetail extends GameObjects.DOMElement {
    dom: HTMLDivElement;
    constructor(scene: Phaser.Scene, x: number, y: number, name: Item);
}
