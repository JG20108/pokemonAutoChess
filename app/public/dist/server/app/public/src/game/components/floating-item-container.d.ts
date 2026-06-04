import type Phaser from "phaser";
import { GameObjects } from "phaser";
import type { Item } from "../../../../types/enum/Item";
import type GameScene from "../scenes/game-scene";
import ItemDetail from "./item-detail";
import type MinigameManager from "./minigame-manager";
export declare class FloatingItemContainer extends GameObjects.Container {
    scene: GameScene;
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
