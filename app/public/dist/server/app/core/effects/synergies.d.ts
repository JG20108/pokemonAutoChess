import type { MapSchema } from "@colyseus/schema";
import { type SynergyEffect } from "../../config/game/synergies";
import type Player from "../../models/colyseus-models/player";
import { type IPokemon } from "../../types";
import { EffectEnum } from "../../types/enum/Effect";
import { Synergy } from "../../types/enum/Synergy";
import { type Board } from "../board";
import type { PokemonEntity } from "../pokemon-entity";
import type Simulation from "../simulation";
import { OnAbilityCastEffect, OnAttackEffect, OnAttackReceivedEffect, OnBenchedDuringFightEffect, OnDamageDealtEffect, OnDamageReceivedEffect, type OnDamageReceivedEffectArgs, OnDeathEffect, OnKillEffect, type OnKillEffectArgs, OnSimulationStartEffect, OnSpawnEffect } from "./effect";
export declare class MonsterKillEffect extends OnKillEffect {
    hpBoosted: number;
    count: number;
    synergyLevel: number;
    constructor(effect: SynergyEffect<Synergy.MONSTER>);
    apply({ attacker, target }: OnKillEffectArgs): void;
}
export declare class GroundHoleEffect extends OnSpawnEffect {
    constructor(effect: SynergyEffect<Synergy.GROUND>);
}
export declare class FireHitEffect extends OnAttackEffect {
    count: number;
    synergyLevel: number;
    constructor(effect: SynergyEffect<Synergy.FIRE>);
    apply({ pokemon }: {
        pokemon: any;
    }): void;
}
export declare const electricTripleAttackEffect: OnAttackEffect;
export declare class SoundCryEffect extends OnAbilityCastEffect {
    count: number;
    synergyLevel: number;
    constructor(effect?: SynergyEffect<Synergy.SOUND>);
    apply(pokemon: PokemonEntity, board: Board): void;
}
export declare const humanHealEffect: OnDamageDealtEffect;
export declare class OnFieldDeathEffect extends OnDeathEffect {
    constructor(effect: SynergyEffect<Synergy.FIELD>);
}
export declare class FlyingProtectionEffect extends OnDamageReceivedEffect {
    priority: number;
    static readonly FLY_AWAY_SPEED_BURST = 20;
    static readonly FLY_AWAY_SPEED_BURST_DURATION = 2000;
    flyingProtection: number;
    constructor(effect: EffectEnum);
    apply({ pokemon, board }: OnDamageReceivedEffectArgs): void;
}
export declare class FightingKnockbackEffect extends OnDamageReceivedEffect {
    constructor(effect: EffectEnum);
    apply({ pokemon, board, isRetaliation }: OnDamageReceivedEffectArgs): void;
}
export declare const fightingTrainingEffect: OnBenchedDuringFightEffect;
export declare const onFlowerMonDeath: OnDeathEffect;
export declare const wildBerserkEffect: OnDamageReceivedEffect;
export declare const normalShieldEffect: OnSimulationStartEffect;
export declare function applyWandEffects(pokemon: PokemonEntity, target: PokemonEntity, attackDamage: number, crit: boolean): {
    takenDamage: number;
    death: boolean;
};
export declare const pounceWandEffect: OnAttackReceivedEffect;
export declare const cloneBugs: ({ board, teamIndex, player, effects, simulation }: {
    board: MapSchema<IPokemon, string>;
    teamIndex: number;
    player: Player | undefined;
    effects: Set<EffectEnum>;
    simulation: Simulation;
}) => void;
