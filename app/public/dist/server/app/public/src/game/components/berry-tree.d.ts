import { GameObjects } from "phaser";
import Player from "../../../../models/colyseus-models/player";
import type GameScene from "../scenes/game-scene";
import BoardManager from "./board-manager";
import ItemDetail from "./item-detail";
export declare class BerryTree extends GameObjects.Container {
    scene: GameScene;
    manager: BoardManager;
    index: number;
    sprite: GameObjects.Sprite;
    detail: ItemDetail | undefined;
    mouseoutTimeout: NodeJS.Timeout | null;
    player: Player;
    constructor(manager: BoardManager, x: number, y: number, i: number);
    openDetail(): void;
    closeDetail(): void;
    onPointerOver(pointer: Phaser.Input.Pointer): void;
    onPointerOut(): void;
    onPointerDown(pointer: Phaser.Input.Pointer, event: Phaser.Types.Input.EventData): void;
}
