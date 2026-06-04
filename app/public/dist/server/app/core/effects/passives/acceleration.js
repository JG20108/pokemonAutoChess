"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccelerationEffect = void 0;
const Passive_1 = require("../../../types/enum/Passive");
const effect_1 = require("../effect");
class AccelerationEffect extends effect_1.OnMoveEffect {
    constructor() {
        super((pkm) => {
            pkm.addSpeed(15, pkm, 0, false);
            this.accelerationStacks += 1;
        }, Passive_1.Passive.ACCELERATION);
        this.accelerationStacks = 0;
    }
}
exports.AccelerationEffect = AccelerationEffect;
//# sourceMappingURL=acceleration.js.map