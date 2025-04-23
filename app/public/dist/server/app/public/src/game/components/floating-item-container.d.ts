import { GameObjects } from "phaser";
import { Item } from "../../../../types/enum/Item";
import ItemDetail from "./item-detail";
import MinigameManager from "./minigame-manager";
export declare class FloatingItemContainer extends GameObjects.Container {
    manager: MinigameManager;
    name: Item;
    circle: GameObjects.Ellipse;
    sprite: GameObjects.Image;
    id: string;
    detail: ItemDetail | undefined;
    mouseoutTimeout: NodeJS.Timeout | null;
    constructor(manager: MinigameManager, id: string, x: number, y: number, item: Item);
    onGrab(playerId: any): void;
    openDetail(): void;
    closeDetail(): void;
    onPointerOver(pointer: any): void;
    onPointerOut(): void;
    onPointerDown(pointer: Phaser.Input.Pointer, event: Phaser.Types.Input.EventData): void;
}
