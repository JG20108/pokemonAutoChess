"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkCableStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const board_1 = require("../board");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class LinkCableStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        const farthestTarget = pokemon.state.getFarthestTarget(pokemon, board);
        const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
        if (farthestCoordinate && farthestTarget) {
            pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board, false);
            pokemon.setTarget(farthestTarget);
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            var _a, _b;
            if (pokemon.hp <= 0)
                return;
            const partner = board.find((x, y, entity) => entity.skill === Ability_1.Ability.LINK_CABLE &&
                entity.id !== pokemon.id &&
                entity.team === pokemon.team);
            if (partner) {
                const damage = (_a = [40, 40, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
                const targetsHit = new Set();
                (0, board_1.effectInLine)(board, pokemon, partner, (cell) => {
                    if (cell.value != null && cell.value.team !== pokemon.team) {
                        targetsHit.add(cell.value);
                    }
                });
                board
                    .getAdjacentCells(pokemon.positionX, pokemon.positionY)
                    .forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        targetsHit.add(cell.value);
                    }
                });
                board
                    .getAdjacentCells(partner.positionX, partner.positionY)
                    .forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        targetsHit.add(cell.value);
                    }
                });
                targetsHit.forEach((target) => {
                    target.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                });
                pokemon.broadcastAbility({
                    skill: "LINK_CABLE_link",
                    targetX: partner.positionX,
                    targetY: partner.positionY
                });
                pokemon.broadcastAbility({
                    skill: "LINK_CABLE_discharge",
                    positionX: pokemon.positionX,
                    positionY: pokemon.positionY
                });
                pokemon.broadcastAbility({
                    skill: "LINK_CABLE_discharge",
                    positionX: partner.positionX,
                    positionY: partner.positionY,
                    delay: 200
                });
            }
            else {
                const damage = (_b = [20, 20, 20, 40][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 40;
                const cells = board.getAdjacentCells(pokemon.positionX, pokemon.positionY);
                cells.forEach((cell) => {
                    if (cell.value && cell.value.team !== pokemon.team) {
                        cell.value.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }
                });
                pokemon.broadcastAbility({ skill: "LINK_CABLE_discharge" });
            }
        }, 300));
    }
}
exports.LinkCableStrategy = LinkCableStrategy;
//# sourceMappingURL=link-cable.js.map