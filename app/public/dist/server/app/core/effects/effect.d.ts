import type { MapSchema } from "@colyseus/schema";
import type Player from "../../models/colyseus-models/player";
import type { Pokemon } from "../../models/colyseus-models/pokemon";
import type GameRoom from "../../rooms/game-room";
import type GameState from "../../rooms/states/game-state";
import type { IPokemonEntity } from "../../types";
import type { Ability } from "../../types/enum/Ability";
import type { EffectEnum } from "../../types/enum/Effect";
import type { AttackType } from "../../types/enum/Game";
import type { Item } from "../../types/enum/Item";
import type { Passive } from "../../types/enum/Passive";
import type { Board } from "../board";
import type { PokemonEntity } from "../pokemon-entity";
import type Simulation from "../simulation";
type EffectOrigin = EffectEnum | Item | Passive | Ability;
export declare abstract class Effect {
    priority: number;
    origin?: EffectOrigin;
    apply(...args: any[]): void;
    constructor(effect?: (...args: any[]) => void, origin?: EffectOrigin);
}
export declare class OnSpawnEffect extends Effect {
    constructor(effect?: (entity: PokemonEntity, player?: Player, isSpawn?: boolean) => void, origin?: EffectOrigin);
    apply(entity: PokemonEntity, player?: Player, isSpawn?: boolean): void;
}
interface OnDishConsumedEffectArgs {
    pokemon: Pokemon;
    dish: Item;
    player?: Player;
    entity?: PokemonEntity;
}
export declare class OnDishConsumedEffect extends Effect {
    constructor(effect?: (args: OnDishConsumedEffectArgs) => void);
    apply(args: OnDishConsumedEffectArgs): void;
}
export declare class OnItemGainedEffect extends Effect {
    constructor(effect?: (pokemon: PokemonEntity, item: Item) => void);
    apply(pokemon: PokemonEntity, item: Item): void;
}
export declare class OnItemRemovedEffect extends Effect {
    constructor(effect?: (pokemon: PokemonEntity, item: Item) => void);
    apply(pokemon: PokemonEntity, item: Item): void;
}
interface OnStageStartEffectArgs {
    player: Player;
    pokemon?: Pokemon;
    room: GameRoom;
}
export declare class OnStageStartEffect extends Effect {
    constructor(effect?: (args: OnStageStartEffectArgs) => void, origin?: EffectOrigin);
    apply(args: OnStageStartEffectArgs): void;
}
interface OnChangePositionEffectArgs {
    pokemon: Pokemon;
    player: Player;
    state?: GameState;
    room?: GameRoom;
    oldX: number;
    oldY: number;
    newX: number;
    newY: number;
}
export declare class OnChangePositionEffect extends Effect {
    constructor(effect?: (args: OnChangePositionEffectArgs) => void, origin?: EffectOrigin);
    apply(args: OnChangePositionEffectArgs): void;
}
export declare class OnEvolutionEffect extends Effect {
    constructor(effect?: (args: {
        pokemonEvolved: Pokemon;
        player: Player;
    }) => void, origin?: EffectOrigin);
    apply(args: {
        pokemonEvolved: Pokemon;
        player: Player;
    }): void;
}
export declare class OnSpotlightChangeEffect extends Effect {
    constructor(effect?: (args: {
        pokemon: Pokemon;
        player: Player;
        inSpotlight: boolean;
    }) => void, origin?: EffectOrigin);
    apply(args: {
        pokemon: Pokemon;
        player: Player;
        inSpotlight: boolean;
    }): void;
}
interface OnBenchedDuringFightEffectArgs {
    pokemon: Pokemon;
    player: Player;
    simulation: Simulation;
}
export declare class OnBenchedDuringFightEffect extends Effect {
    constructor(effect?: (args: OnBenchedDuringFightEffectArgs) => void, origin?: EffectOrigin);
    apply(args: OnBenchedDuringFightEffectArgs): void;
}
interface OnSimulationStartEffectArgs {
    simulation: Simulation;
    player?: Player;
    team: MapSchema<IPokemonEntity>;
    entity: PokemonEntity;
}
export declare class OnSimulationStartEffect extends Effect {
    constructor(effect?: (args: OnSimulationStartEffectArgs) => void, origin?: EffectOrigin);
    apply(args: OnSimulationStartEffectArgs): void;
}
interface OnItemDroppedEffectArgs {
    pokemon: Pokemon;
    player: Player;
    item: Item;
    room: GameRoom;
}
export declare class OnItemDroppedEffect extends Effect {
    apply(args: OnItemDroppedEffectArgs): boolean;
    constructor(effect?: (args: OnItemDroppedEffectArgs) => boolean, origin?: EffectOrigin);
}
export interface OnKillEffectArgs {
    attacker: PokemonEntity;
    target: PokemonEntity;
    board: Board;
    attackType: AttackType;
}
export declare class OnKillEffect extends Effect {
    apply(args: OnKillEffectArgs): void;
    constructor(effect?: (args: OnKillEffectArgs) => void, origin?: EffectOrigin);
}
export interface OnDeathEffectArgs {
    board: Board;
    pokemon: PokemonEntity;
    attacker: PokemonEntity | null;
}
export declare class OnDeathEffect extends Effect {
    apply(args: OnDeathEffectArgs): void;
    constructor(effect?: (args: OnDeathEffectArgs) => void, origin?: EffectOrigin);
}
export declare class OnResurrectEffect extends Effect {
    apply(args: OnDeathEffectArgs): void;
    constructor(effect?: (args: OnDeathEffectArgs) => void, origin?: EffectOrigin);
}
export declare class PeriodicEffect extends Effect {
    intervalMs: number;
    timer: number;
    count: number;
    constructor(effect: (entity: PokemonEntity, board: Board, ...others: any[]) => void, origin: EffectOrigin, intervalMs: number);
    update(dt: number, entity: PokemonEntity, board: Board): void;
}
interface OnHitEffectArgs {
    attacker: PokemonEntity;
    target: PokemonEntity;
    board: Board;
    totalTakenDamage: number;
    physicalDamage: number;
    specialDamage: number;
    trueDamage: number;
}
export declare class OnHitEffect extends Effect {
    apply(params: OnHitEffectArgs): void;
    constructor(effect?: (params: OnHitEffectArgs) => void, origin?: EffectOrigin);
}
interface OnAttackEffectArgs {
    pokemon: PokemonEntity;
    target: PokemonEntity | null;
    board: Board;
    physicalDamage: number;
    specialDamage: number;
    trueDamage: number;
    totalDamage: number;
    crit: boolean;
    isTripleAttack?: boolean;
    hasAttackKilled?: boolean;
}
export declare class BeforeAttackEffect extends Effect {
    apply(args: OnAttackEffectArgs): void;
    constructor(effect?: (args: OnAttackEffectArgs) => void, origin?: EffectOrigin);
}
export declare class OnAttackEffect extends Effect {
    apply(args: OnAttackEffectArgs): void;
    constructor(effect?: (args: OnAttackEffectArgs) => void, origin?: EffectOrigin);
}
export declare class OnAbilityCastEffect extends Effect {
    apply(pokemon: PokemonEntity, board: Board, target: PokemonEntity | null, crit: boolean): void;
    constructor(effect?: (pokemon: PokemonEntity, board: Board, target: PokemonEntity | null, crit: boolean) => void, origin?: EffectOrigin);
}
export interface OnDamageReceivedEffectArgs {
    pokemon: PokemonEntity;
    attacker: PokemonEntity | null;
    board: Board;
    damage: number;
    damageBeforeReduction: number;
    attackType?: AttackType;
    isRetaliation: boolean;
}
export declare class OnDamageReceivedEffect extends Effect {
    apply(args: OnDamageReceivedEffectArgs): void;
    constructor(effect?: (args: OnDamageReceivedEffectArgs) => void, origin?: EffectOrigin);
}
export interface OnAttackReceivedEffectArgs {
    pokemon: PokemonEntity;
    attacker: PokemonEntity;
    board: Board;
    physicalDamage: number;
    specialDamage: number;
    trueDamage: number;
    totalDamage: number;
    isTripleAttack?: boolean;
    attackType?: AttackType;
    crit: boolean;
}
export declare class OnAttackReceivedEffect extends Effect {
    apply(args: OnAttackReceivedEffectArgs): void;
    constructor(effect?: (args: OnAttackReceivedEffectArgs) => void, origin?: EffectOrigin);
}
export interface OnDamageDealtEffectArgs {
    pokemon: PokemonEntity;
    target: PokemonEntity;
    damage: number;
    attackType?: AttackType;
    isRetaliation: boolean;
}
export declare class OnDamageDealtEffect extends Effect {
    apply(args: OnDamageDealtEffectArgs): void;
    constructor(effect?: (args: OnDamageDealtEffectArgs) => void, origin?: EffectOrigin);
}
export declare class OnMoveEffect extends Effect {
    apply(pokemon: PokemonEntity, board: Board, oldX: number, oldY: number, newX: number, newY: number): void;
    constructor(effect?: (pokemon: PokemonEntity, board: Board, oldX: number, oldY: number, newX: number, newY: number) => void, origin?: EffectOrigin);
}
interface OnShieldDepletedEffectArgs {
    pokemon: PokemonEntity;
    attacker: PokemonEntity | null;
    board: Board;
    damage: number;
}
export declare class OnShieldDepletedEffect extends Effect {
    apply(args: OnShieldDepletedEffectArgs): void;
    constructor(effect?: (args: OnShieldDepletedEffectArgs) => void, origin?: EffectOrigin);
}
export declare class OnGroundDiggingEffect extends Effect {
    apply(args: {
        pokemon: Pokemon;
        player: Player;
    }): void;
    constructor(effect?: (args: {
        pokemon: Pokemon;
        player: Player;
    }) => void, origin?: EffectOrigin);
}
export {};
