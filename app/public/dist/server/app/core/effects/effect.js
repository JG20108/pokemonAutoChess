"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnShieldDepletedEffect = exports.OnMoveEffect = exports.OnDamageDealtEffect = exports.OnAttackReceivedEffect = exports.OnDamageReceivedEffect = exports.OnAbilityCastEffect = exports.OnAttackEffect = exports.BeforeAttackEffect = exports.OnHitEffect = exports.PeriodicEffect = exports.OnResurrectEffect = exports.OnDeathEffect = exports.OnKillEffect = exports.OnItemDroppedEffect = exports.OnSimulationStartEffect = exports.OnBenchedDuringFightEffect = exports.OnStageStartEffect = exports.OnItemRemovedEffect = exports.OnItemGainedEffect = exports.OnDishConsumedEffect = exports.OnSpawnEffect = exports.Effect = void 0;
class Effect {
    apply(...args) { }
    constructor(effect, origin) {
        this.priority = 0;
        if (effect) {
            this.apply = effect;
        }
        this.origin = origin;
    }
}
exports.Effect = Effect;
class OnSpawnEffect extends Effect {
    constructor(effect, origin) {
        super(effect, origin);
    }
    apply(entity, player, isSpawn) { }
}
exports.OnSpawnEffect = OnSpawnEffect;
class OnDishConsumedEffect extends Effect {
    constructor(effect) {
        super(effect);
    }
    apply(args) { }
}
exports.OnDishConsumedEffect = OnDishConsumedEffect;
class OnItemGainedEffect extends Effect {
    constructor(effect) {
        super(effect);
    }
    apply(pokemon, item) { }
}
exports.OnItemGainedEffect = OnItemGainedEffect;
class OnItemRemovedEffect extends Effect {
    constructor(effect) {
        super(effect);
    }
    apply(pokemon, item) { }
}
exports.OnItemRemovedEffect = OnItemRemovedEffect;
class OnStageStartEffect extends Effect {
    constructor(effect, origin) {
        super(effect, origin);
    }
    apply(args) { }
}
exports.OnStageStartEffect = OnStageStartEffect;
class OnBenchedDuringFightEffect extends Effect {
    constructor(effect, origin) {
        super(effect, origin);
    }
    apply(args) { }
}
exports.OnBenchedDuringFightEffect = OnBenchedDuringFightEffect;
class OnSimulationStartEffect extends Effect {
    constructor(effect, origin) {
        super(effect, origin);
    }
    apply(args) { }
}
exports.OnSimulationStartEffect = OnSimulationStartEffect;
class OnItemDroppedEffect extends Effect {
    apply(args) {
        return true;
    }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnItemDroppedEffect = OnItemDroppedEffect;
class OnKillEffect extends Effect {
    apply(args) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnKillEffect = OnKillEffect;
class OnDeathEffect extends Effect {
    apply(args) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnDeathEffect = OnDeathEffect;
class OnResurrectEffect extends Effect {
    apply(args) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnResurrectEffect = OnResurrectEffect;
class PeriodicEffect extends Effect {
    constructor(effect, origin, intervalMs) {
        super(effect, origin);
        this.intervalMs = intervalMs;
        this.timer = intervalMs;
        this.count = 0;
    }
    update(dt, entity, board) {
        this.timer -= dt;
        if (this.timer <= 0) {
            this.count++;
            this.apply(entity, board);
            this.timer = this.intervalMs;
        }
    }
}
exports.PeriodicEffect = PeriodicEffect;
class OnHitEffect extends Effect {
    apply(params) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnHitEffect = OnHitEffect;
class BeforeAttackEffect extends Effect {
    apply(args) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.BeforeAttackEffect = BeforeAttackEffect;
class OnAttackEffect extends Effect {
    apply(args) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnAttackEffect = OnAttackEffect;
class OnAbilityCastEffect extends Effect {
    apply(pokemon, board, target, crit) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnAbilityCastEffect = OnAbilityCastEffect;
class OnDamageReceivedEffect extends Effect {
    apply(args) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnDamageReceivedEffect = OnDamageReceivedEffect;
class OnAttackReceivedEffect extends Effect {
    apply(args) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnAttackReceivedEffect = OnAttackReceivedEffect;
class OnDamageDealtEffect extends Effect {
    apply(args) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnDamageDealtEffect = OnDamageDealtEffect;
class OnMoveEffect extends Effect {
    apply(pokemon, board, oldX, oldY, newX, newY) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnMoveEffect = OnMoveEffect;
class OnShieldDepletedEffect extends Effect {
    apply(args) { }
    constructor(effect, origin) {
        super(effect, origin);
    }
}
exports.OnShieldDepletedEffect = OnShieldDepletedEffect;
//# sourceMappingURL=effect.js.map