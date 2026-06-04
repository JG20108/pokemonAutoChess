import type Phaser from "phaser";
import type { Wanderer } from "../../../../models/colyseus-models/wanderer";
import type GameScene from "../scenes/game-scene";
import PokemonSprite from "./pokemon";
export default class WanderersManager {
    scene: GameScene;
    constructor(scene: GameScene);
    addWanderer(wanderer: Wanderer): void;
    addWanderingUnown(wanderer: Wanderer): void;
    addSpectatingUnown(wanderer: Wanderer): void;
    addCatchableWanderer(wanderer: Wanderer): void;
    addOutlawWanderer(wanderer: Wanderer): void;
    addDialogWanderer(wanderer: Wanderer): void;
    addWandererPokemonSprite({ wanderer, onClick, existingSprite, speed }: {
        wanderer: Wanderer;
        existingSprite?: PokemonSprite;
        speed?: number;
        onClick?: (wanderer: Wanderer, pokemon: PokemonSprite, pointer: Phaser.Input.Pointer) => boolean;
    }): PokemonSprite;
    displayShardGain(coordinates: number[], index: string, shiny: boolean): void;
}
