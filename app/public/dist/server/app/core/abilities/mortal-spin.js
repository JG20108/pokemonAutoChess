"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MortalSpinStrategy = void 0;
const config_1 = require("../../config");
const Game_1 = require("../../types/enum/Game");
const ability_strategy_1 = require("./ability-strategy");
class MortalSpinStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit);
        const damage = (_a = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 160;
        const poisonDuration = (_b = [4000, 4000, 8000, 16000][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 16000;
        const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY, false);
        cells.forEach((cell) => {
            if (cell.value && cell.value.team !== pokemon.team) {
                const abilityTarget = cell.value;
                const enemyTarget = board.getEntityOnCell(abilityTarget.targetX, abilityTarget.targetY);
                if (enemyTarget === pokemon) {
                    abilityTarget.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    abilityTarget.status.triggerPoison(poisonDuration, abilityTarget, pokemon);
                    let newY = -1;
                    if (pokemon.team === Game_1.Team.BLUE_TEAM &&
                        abilityTarget.positionY + 1 < config_1.BOARD_HEIGHT) {
                        newY = abilityTarget.positionY + 1;
                    }
                    else if (abilityTarget.positionY - 1 > 0) {
                        newY = abilityTarget.positionY - 1;
                    }
                    if (newY !== -1 &&
                        board.getEntityOnCell(abilityTarget.positionX, abilityTarget.positionY + 1) === undefined) {
                        abilityTarget.moveTo(abilityTarget.positionX, newY, board, true);
                        abilityTarget.cooldown = 500;
                    }
                }
            }
        });
    }
}
exports.MortalSpinStrategy = MortalSpinStrategy;
//# sourceMappingURL=mortal-spin.js.map