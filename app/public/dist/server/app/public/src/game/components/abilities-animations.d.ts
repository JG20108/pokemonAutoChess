import { GameObjects } from "phaser";
import { type AbilityAnimation, type AbilityAnimationArgs, type AbilityAnimationOptions, type HitSprite } from "../../../../types/Animation";
import { Ability } from "../../../../types/enum/Ability";
import { Stat } from "../../../../types/enum/Game";
import type { DebugScene } from "../scenes/debug-scene";
import type GameScene from "../scenes/game-scene";
import PokemonSprite from "./pokemon";
export declare function displayHit(scene: GameScene | DebugScene, hitSpriteTypes: HitSprite | HitSprite[], x: number, y: number, flip: boolean): null | undefined;
export declare function hiddenPowerAnimation(args: AbilityAnimationArgs): void;
export declare function addAbilitySprite(scene: GameScene | DebugScene, ability: Ability | string, ap: number, position: number[], options?: AbilityAnimationOptions): GameObjects.Sprite | null;
export declare const AbilitiesAnimations: {
    [animKey: string]: AbilityAnimation | AbilityAnimation[];
};
export declare function displayAbility(args: AbilityAnimationArgs): void;
export declare function clearAbilityAnimations(scene: GameScene | DebugScene): void;
export declare function displayBoost(pokemonSprite: PokemonSprite, stat: Stat, dX?: number, dY?: number, debug?: boolean): void;
