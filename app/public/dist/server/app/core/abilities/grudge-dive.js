"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrudgeDiveStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const ability_strategy_1 = require("./ability-strategy");
class GrudgeDiveStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [30, 60, 90, 120, 240][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 240;
        const recoil = Math.round(pokemon.maxHP * 0.1);
        const damagePerFallenAlly = (_b = [5, 10, 15, 20, 40][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 40;
        const nbFallenAllies = board.getFallenAlliesCount(pokemon);
        pokemon.broadcastAbility({
            positionX: pokemon.positionX,
            positionY: pokemon.positionY,
            targetX: target.positionX,
            targetY: target.positionY
        });
        target.handleSpecialDamage(damage + nbFallenAllies * damagePerFallenAlly, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        if (!pokemon.items.has(Item_1.Item.PROTECTIVE_PADS)) {
            pokemon.handleSpecialDamage(recoil, board, Game_1.AttackType.PHYSICAL, pokemon, crit);
        }
    }
}
exports.GrudgeDiveStrategy = GrudgeDiveStrategy;
//# sourceMappingURL=grudge-dive.js.map