"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockpileStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class StockpileStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        if (pokemon.count.ult % 4 === 0) {
            const damage = Math.ceil(((_a = [0.5, 0.5, 0.5, 1.0][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 1.0) * pokemon.maxHP);
            target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            const corner = board.getTeleportationCell(pokemon.positionX, pokemon.positionY, pokemon.team);
            if (corner) {
                pokemon.broadcastAbility({
                    skill: Ability_1.Ability.STOCKPILE,
                    targetX: corner.x,
                    targetY: corner.y
                });
                pokemon.moveTo(corner.x, corner.y, board, false);
            }
            pokemon.maxHP = pokemon.baseHP;
            pokemon.hp = Math.min(pokemon.hp, pokemon.maxHP);
            pokemon.addSpeed(30, pokemon, 0, false);
        }
        else {
            pokemon.addMaxHP((_b = [30, 40, 50, 100][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 100, pokemon, 1, crit);
            pokemon.addSpeed(-10, pokemon, 0, false);
        }
    }
}
exports.StockpileStrategy = StockpileStrategy;
//# sourceMappingURL=stockpile.js.map