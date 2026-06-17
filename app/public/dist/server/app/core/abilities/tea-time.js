"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeaTimeStrategy = void 0;
const Item_1 = require("../../types/enum/Item");
const schemas_1 = require("../../utils/schemas");
const ability_strategy_1 = require("./ability-strategy");
class TeaTimeStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit);
        const heal = (_a = [15, 30, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        board.forEach((x, y, tg) => {
            if (tg && pokemon.team == tg.team) {
                pokemon.broadcastAbility({ positionX: x, positionY: y });
                tg.handleHeal(heal, pokemon, 1, crit);
                const berry = (0, schemas_1.schemaValues)(tg.items).find((item) => Item_1.Berries.includes(item));
                if (berry) {
                    tg.eatBerry(berry);
                }
            }
        });
    }
}
exports.TeaTimeStrategy = TeaTimeStrategy;
//# sourceMappingURL=tea-time.js.map