import { EffectEnum } from "../../types/enum/Effect";
import { PokemonEntity } from "../pokemon-entity";
import { OnAbilityCastEffect, OnAttackEffect, OnAttackReceivedEffect, OnDamageDealtEffect, OnDamageReceivedEffect, OnDamageReceivedEffectArgs, OnDeathEffect, OnKillEffect, OnKillEffectArgs, OnSimulationStartEffect, OnSpawnEffect } from "./effect";
export declare class MonsterKillEffect extends OnKillEffect {
    hpBoosted: number;
    count: number;
    synergyLevel: number;
    constructor(effect: EffectEnum);
    apply({ attacker, target }: OnKillEffectArgs): void;
}
export declare class GroundHoleEffect extends OnSpawnEffect {
    constructor(effect: EffectEnum);
}
export declare class FireHitEffect extends OnAttackEffect {
    count: number;
    synergyLevel: number;
    constructor(effect: EffectEnum);
    apply({ pokemon }: {
        pokemon: any;
    }): void;
}
export declare const electricTripleAttackEffect: OnAttackEffect;
export declare class SoundCryEffect extends OnAbilityCastEffect {
    count: number;
    synergyLevel: number;
    constructor(effect?: EffectEnum);
    apply(pokemon: any, board: any, target: any, crit: any): void;
}
export declare const humanHealEffect: OnDamageDealtEffect;
export declare class OnFieldDeathEffect extends OnDeathEffect {
    constructor(effect: EffectEnum);
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
export declare const onFlowerMonDeath: OnDeathEffect;
export declare const overgrowEffect: OnDamageReceivedEffect;
export declare const wildBerserkEffect: OnDamageReceivedEffect;
export declare const normalShieldEffect: OnSimulationStartEffect;
export declare function applyWandEffects(pokemon: PokemonEntity, target: PokemonEntity, attackDamage: number, crit: boolean): {
    takenDamage: number;
    death: boolean;
};
export declare const pounceWandEffect: OnAttackReceivedEffect;
