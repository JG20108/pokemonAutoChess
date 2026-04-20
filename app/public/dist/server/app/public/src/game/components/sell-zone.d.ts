import { GameObjects } from "phaser";
import GameScene from "../scenes/game-scene";
import PokemonSprite from "./pokemon";
export declare class SellZone extends GameObjects.Container {
    scene: GameScene;
    rectangle: Phaser.GameObjects.Rectangle;
    text: Phaser.GameObjects.Text;
    bgColor: number;
    hoveredBgColor: number;
    constructor(scene: GameScene);
    showForPokemon(pkm: PokemonSprite): void;
    hide(): void;
    onDragEnter(): void;
    onDragLeave(): void;
}
