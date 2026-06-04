"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FalinksFormationEffect = void 0;
const types_1 = require("../../../types");
const Passive_1 = require("../../../types/enum/Passive");
const Pokemon_1 = require("../../../types/enum/Pokemon");
const schemas_1 = require("../../../utils/schemas");
const effect_1 = require("../effect");
class FalinksFormationEffect extends effect_1.OnSpawnEffect {
    constructor() {
        super((pkm) => {
            if (!pkm.player)
                return;
            const troopers = (0, schemas_1.schemaValues)(pkm.player.board).filter((p) => p.name === Pokemon_1.Pkm.FALINKS_TROOPER && p.positionY === 0 && p.id !== pkm.id);
            this.stacks = troopers.length;
            if (this.stacks > 0) {
                pkm.addAttack(this.stacks * 1, pkm, 0, false);
                pkm.addDefense(this.stacks * 1, pkm, 0, false);
                pkm.addShield(this.stacks * 30, pkm, 0, false);
            }
            if (this.stacks >= 8 && pkm.player) {
                pkm.player.titles.add(types_1.Title.LEGIONNAIRE);
            }
        }, Passive_1.Passive.FALINKS);
        this.stacks = 0;
    }
}
exports.FalinksFormationEffect = FalinksFormationEffect;
//# sourceMappingURL=falinks-formation.js.map