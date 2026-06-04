"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Effects = void 0;
const schema_1 = require("@colyseus/schema");
const config_1 = require("../config");
const synergies_1 = require("../config/game/synergies");
const Ability_1 = require("../types/enum/Ability");
const Effect_1 = require("../types/enum/Effect");
const Pokemon_1 = require("../types/enum/Pokemon");
const Synergy_1 = require("../types/enum/Synergy");
const board_1 = require("../utils/board");
const schemas_1 = require("../utils/schemas");
class Effects extends schema_1.SetSchema {
    update(synergies, board) {
        this.clear();
        Synergy_1.SynergyArray.forEach((synergy) => {
            for (let i = config_1.SynergyTriggers[synergy].length; i >= 0; i--) {
                const v = config_1.SynergyTriggers[synergy][i];
                const s = synergies.get(synergy);
                if (s && s >= v) {
                    this.add(synergies_1.SynergyEffects[synergy][i]);
                    break;
                }
            }
        });
        board.forEach((p) => {
            if (!(0, board_1.isOnBench)(p)) {
                if (p.skill === Ability_1.Ability.GRASSY_SURGE) {
                    this.add(Effect_1.EffectEnum.GRASSY_TERRAIN);
                }
                if (p.skill === Ability_1.Ability.MISTY_SURGE) {
                    this.add(Effect_1.EffectEnum.MISTY_TERRAIN);
                }
                if (p.skill === Ability_1.Ability.ELECTRIC_SURGE) {
                    this.add(Effect_1.EffectEnum.ELECTRIC_TERRAIN);
                }
                if (p.skill === Ability_1.Ability.PSYCHIC_SURGE) {
                    this.add(Effect_1.EffectEnum.PSYCHIC_TERRAIN);
                }
            }
            if (p.name === Pokemon_1.Pkm.FALINKS_BRASS) {
                const nbTroopers = (0, schemas_1.schemaValues)(board).filter((p) => p.name === Pokemon_1.Pkm.FALINKS_TROOPER).length;
                if (nbTroopers < 6)
                    this.add(Effect_1.EffectEnum.FALINKS_BRASS);
                else
                    this.delete(Effect_1.EffectEnum.FALINKS_BRASS);
            }
        });
    }
}
exports.Effects = Effects;
//# sourceMappingURL=effects.js.map