import Board from "./board";
import { PokemonEntity } from "./pokemon-entity";
import { Item } from "../types/enum/Item";
import { Effect as EffectEnum } from "../types/enum/Effect";
import PokemonState from "./pokemon-state";
import { Passive } from "../types/enum/Passive";
import { Ability } from "../types/enum/Ability";
type EffectOrigin = EffectEnum | Item | Passive | Ability;
export declare abstract class Effect {
    origin?: EffectOrigin;
    apply(entity: PokemonEntity, ...others: any[]): void;
    constructor(effect?: (entity: PokemonEntity, ...others: any[]) => void, origin?: EffectOrigin);
}
export declare class OnSpawnEffect extends Effect {
}
export declare class OnItemGainedEffect extends Effect {
}
export declare class OnItemRemovedEffect extends Effect {
}
export declare class OnKillEffect extends Effect {
    apply(entity: PokemonEntity, target: PokemonEntity, board: Board): void;
    constructor(effect?: (entity: PokemonEntity, target: PokemonEntity, board: Board) => void, origin?: EffectOrigin);
}
export declare class PeriodicEffect extends Effect {
    intervalMs: number;
    timer: number;
    count: number;
    constructor(effect: (entity: PokemonEntity, ...others: any[]) => void, origin: EffectOrigin, intervalMs: number);
    update(dt: number, entity: PokemonEntity): void;
}
export declare class OnHitEffect extends Effect {
    apply(entity: PokemonEntity, target: PokemonEntity, board: Board): void;
    constructor(effect?: (entity: PokemonEntity, target: PokemonEntity, board: Board) => void, origin?: EffectOrigin);
}
export declare class OnAttackEffect extends Effect {
    apply(entity: PokemonEntity, target: PokemonEntity, board: Board): void;
    constructor(effect?: (entity: PokemonEntity, target: PokemonEntity, board: Board) => void, origin?: EffectOrigin);
}
export declare class OnAbilityCastEffect extends Effect {
    apply(pokemon: PokemonEntity, state: PokemonState, board: Board, target: PokemonEntity, crit: boolean): void;
    constructor(effect?: (pokemon: PokemonEntity, state: PokemonState, board: Board, target: PokemonEntity, crit: boolean) => void, origin?: EffectOrigin);
}
export declare class MonsterKillEffect extends OnKillEffect {
    hpBoosted: number;
    count: number;
    synergyLevel: number;
    constructor(effect: EffectEnum);
    apply(pokemon: any, target: any, board: any): void;
}
export declare class GrowGroundEffect extends PeriodicEffect {
    synergyLevel: number;
    constructor(effect: EffectEnum);
}
export declare class ClearWingEffect extends PeriodicEffect {
    constructor();
}
export declare class SynchroEffect extends PeriodicEffect {
    constructor();
}
export declare class DrySkinEffect extends PeriodicEffect {
    constructor();
}
export declare class DarkHarvestEffect extends PeriodicEffect {
    duration: number;
    constructor(duration: number, pokemon: PokemonEntity);
}
export declare class FireHitEffect extends OnAttackEffect {
    count: number;
    synergyLevel: number;
    constructor(effect: EffectEnum);
    apply(pokemon: any, target: any, board: any): void;
}
export declare class SoundCryEffect extends OnAbilityCastEffect {
    count: number;
    synergyLevel: number;
    constructor(effect?: EffectEnum);
    apply(pokemon: any, state: any, board: any, target: any, crit: any): void;
}
export declare class WaterSpringEffect extends OnAbilityCastEffect {
    apply(pokemon: any): void;
}
export {};
