"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmorCannonStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const distance_1 = require("../../utils/distance");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class ArmorCannonStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b, _c;
        super.process(pokemon, board, target, crit, true);
        const mainDamage = (_a = [15, 30, 50, 100][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 100;
        const secondaryDamage = (_b = [15, 30, 50, 100][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 100;
        const finalDamage = (_c = [6, 12, 25, 50][pokemon.stars - 1]) !== null && _c !== void 0 ? _c : 50;
        const numberOfTargets = 2;
        pokemon.broadcastAbility({
            positionX: pokemon.positionX,
            positionY: pokemon.positionY,
            targetX: target.positionX,
            targetY: target.positionY
        });
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            target.handleSpecialDamage(mainDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
            const possibleTargets = new Array();
            board.forEach((x, y, entity) => {
                if (entity && entity.team !== pokemon.team && entity !== target) {
                    possibleTargets.push(entity);
                }
            });
            possibleTargets.sort((a, b) => (0, distance_1.distanceM)(a.positionX, a.positionY, pokemon.positionX, pokemon.positionY) -
                (0, distance_1.distanceM)(b.positionX, b.positionY, pokemon.positionX, pokemon.positionY));
            const targets = possibleTargets.slice(0, numberOfTargets);
            targets.forEach((tg) => {
                pokemon.broadcastAbility({
                    positionX: target.positionX,
                    positionY: target.positionY,
                    targetX: tg.positionX,
                    targetY: tg.positionY,
                    delay: 1
                });
                pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                    tg.handleSpecialDamage(secondaryDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    pokemon.broadcastAbility({
                        positionX: tg.positionX,
                        positionY: tg.positionY,
                        targetX: target.positionX,
                        targetY: target.positionY,
                        delay: 2
                    });
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        target.handleSpecialDamage(finalDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }, 300));
                }, 300));
            });
        }, 300));
    }
}
exports.ArmorCannonStrategy = ArmorCannonStrategy;
//# sourceMappingURL=armor-cannon.js.map