"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BergmiteOnBackEffect = void 0;
const Passive_1 = require("../../../types/enum/Passive");
const Pokemon_1 = require("../../../types/enum/Pokemon");
const schemas_1 = require("../../../utils/schemas");
const effect_1 = require("../effect");
class BergmiteOnBackEffect extends effect_1.OnSpawnEffect {
    constructor() {
        super((pkm) => {
            if (!pkm.player)
                return;
            const bergmites = (0, schemas_1.schemaValues)(pkm.player.board).filter((p) => p.name === Pokemon_1.Pkm.BERGMITE && p.positionY === 0 && p.id !== pkm.id);
            this.stacks = bergmites.length;
        }, Passive_1.Passive.AVALUGG);
        this.stacks = 0;
    }
}
exports.BergmiteOnBackEffect = BergmiteOnBackEffect;
//# sourceMappingURL=bergmite-on-back.js.map