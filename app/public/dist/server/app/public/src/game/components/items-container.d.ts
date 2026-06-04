import type { ArraySchema, SetSchema } from "@colyseus/schema";
import { GameObjects } from "phaser";
import type Player from "../../../../models/colyseus-models/player";
import { type Item } from "../../../../types/enum/Item";
import type GameScene from "../scenes/game-scene";
export default class ItemsContainer extends GameObjects.Container {
    scene: GameScene;
    pokemonId: string | null;
    playerId: string;
    items: Item[];
    constructor(scene: GameScene, inventory: SetSchema<Item> | ArraySchema<Item>, x: number, y: number, pokemonId: string | null, playerId: string);
    render(inventory: SetSchema<Item> | ArraySchema<Item>): void;
    getOrderPriority(item: Item): number;
    closeTooltips(): void;
    setPlayer(player: Player): void;
    updateCount(item: Item, count: number): void;
}
