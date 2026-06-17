"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FocusPunchStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class FocusPunchStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        pokemon.cooldown = 1000;
        pokemon.broadcastAbility({
            skill: "FOCUS_PUNCH_CHARGE",
            positionX: pokemon.positionX,
            positionY: pokemon.positionY
        });
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            var _a;
            if (target.hp <= 0) {
                pokemon.pp = pokemon.maxPP;
                return;
            }
            let farthestEmptyCell = null;
            let blocked = false;
            (0, board_1.effectInOrientation)(board, pokemon, target, (cell) => {
                if (cell.value && cell.value.id !== target.id) {
                    blocked = true;
                }
                else {
                    farthestEmptyCell = cell;
                }
            });
            pokemon.broadcastAbility({ skill: "FOCUS_PUNCH" });
            if (farthestEmptyCell != null && target.canBeMoved) {
                const targetX = target.positionX;
                const targetY = target.positionY;
                const willEject = !blocked &&
                    !target.status.resurrection &&
                    !target.status.magicBounce &&
                    !target.status.protect;
                if (willEject) {
                    pokemon.broadcastAbility({ skill: "FOCUS_PUNCH_EJECT" });
                    target.cooldown = 9999;
                    target.handleSpecialDamage(9999, board, Game_1.AttackType.TRUE, pokemon, crit);
                }
                else {
                    const { x, y } = farthestEmptyCell;
                    target.moveTo(x, y, board, true);
                    const damageMultiplier = (_a = [5, 5, 5, 10][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 10;
                    const damage = damageMultiplier * pokemon.atk;
                    target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                }
                pokemon.moveTo(targetX, targetY, board, true);
            }
        }, 900));
    }
}
exports.FocusPunchStrategy = FocusPunchStrategy;
//# sourceMappingURL=focus-punch.js.map