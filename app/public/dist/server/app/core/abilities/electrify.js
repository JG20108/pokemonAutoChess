"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectrifyStrategy = void 0;
const Item_1 = require("../../types/enum/Item");
const Synergy_1 = require("../../types/enum/Synergy");
const schemas_1 = require("../../utils/schemas");
const unit_score_1 = require("../unit-score");
const ability_strategy_1 = require("./ability-strategy");
class ElectrifyStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const nonElectricAllies = board.cells.filter((entity) => entity &&
            entity.team === pokemon.team &&
            entity.id !== pokemon.id &&
            entity.types.has(Synergy_1.Synergy.ELECTRIC) === false &&
            entity.status.electricField !== true);
        const strongestAlly = (0, unit_score_1.getStrongestUnit)(nonElectricAllies);
        const buffedUnit = strongestAlly !== null && strongestAlly !== void 0 ? strongestAlly : pokemon;
        const shield = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        buffedUnit.status.addElectricField(buffedUnit);
        buffedUnit.addShield(shield, pokemon, 1, crit);
        if (buffedUnit.types.has(Synergy_1.Synergy.ELECTRIC) === false) {
            buffedUnit.types.add(Synergy_1.Synergy.ELECTRIC);
            pokemon.simulation.applySynergyEffects(buffedUnit, Synergy_1.Synergy.ELECTRIC);
            if (pokemon.player) {
                const nbCellBatteries = (0, schemas_1.schemaValues)(pokemon.player.items).filter((item) => item === Item_1.Item.CELL_BATTERY).length;
                if (nbCellBatteries > 0) {
                    buffedUnit.addSpeed(2 * nbCellBatteries, pokemon, 0, false);
                }
            }
        }
    }
}
exports.ElectrifyStrategy = ElectrifyStrategy;
//# sourceMappingURL=electrify.js.map