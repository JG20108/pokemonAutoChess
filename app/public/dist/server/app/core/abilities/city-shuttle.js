"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityShuttleStrategy = void 0;
const Game_1 = require("../../types/enum/Game");
const distance_1 = require("../../utils/distance");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class CityShuttleStrategy extends ability_strategy_1.AbilityStrategy {
    process(pokemon, board, target, crit) {
        var _a, _b;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [10, 20, 40, 80][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 80;
        const shield = (_b = [20, 40, 80, 160][pokemon.stars - 1]) !== null && _b !== void 0 ? _b : 160;
        const passenger = board.getClosestAlly(pokemon.positionX, pokemon.positionY, pokemon.team, pokemon.id);
        const carriedAllyAttack = passenger ? passenger.atk : 0;
        if (passenger) {
            const availablePlaceNearAlly = board.getClosestAvailablePlace(passenger.positionX, passenger.positionY);
            if (availablePlaceNearAlly) {
                pokemon.moveTo(availablePlaceNearAlly.x, availablePlaceNearAlly.y, board, false);
            }
        }
        pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
            const farthestCoordinate = board.getFarthestTargetCoordinateAvailablePlace(pokemon);
            if (farthestCoordinate) {
                const cells = board.getCellsBetween(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
                const startX = pokemon.positionX;
                const startY = pokemon.positionY;
                const totalDistance = (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, farthestCoordinate.x, farthestCoordinate.y);
                pokemon.moveTo(farthestCoordinate.x, farthestCoordinate.y, board, false);
                if (passenger) {
                    const closestAvailablePlace = board.getClosestAvailablePlace(farthestCoordinate.x, farthestCoordinate.y);
                    if (closestAvailablePlace) {
                        passenger.moveTo(closestAvailablePlace.x, closestAvailablePlace.y, board, false);
                    }
                }
                for (const cell of cells) {
                    const totalDamage = damage + carriedAllyAttack;
                    const distance = (0, distance_1.distanceC)(startX, startY, cell.x, cell.y);
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        var _a;
                        pokemon.broadcastAbility({
                            positionX: cell.x,
                            positionY: cell.y
                        });
                        ((_a = cell.value) === null || _a === void 0 ? void 0 : _a.team) === target.team &&
                            cell.value.handleSpecialDamage(totalDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                    }, (distance / totalDistance) * 300));
                }
            }
            pokemon.addShield(shield, pokemon, 1, crit);
            passenger === null || passenger === void 0 ? void 0 : passenger.addShield(shield, pokemon, 1, crit);
        }, 300));
    }
}
exports.CityShuttleStrategy = CityShuttleStrategy;
//# sourceMappingURL=city-shuttle.js.map