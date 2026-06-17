"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowForceStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const Pokemon_1 = require("../../types/enum/Pokemon");
const ability_strategy_1 = require("./ability-strategy");
class ShadowForceStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const damage = (_a = [30, 45, 60, 120][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 120;
        pokemon.index = Pokemon_1.PkmIndex[Pokemon_1.Pkm.ORIGIN_GIRATINA];
        pokemon.skill = Ability_1.Ability.SHADOW_CLAW;
        pokemon.toMovingState();
        if (pokemon.player) {
            pokemon.player.pokemonsPlayed.add(Pokemon_1.Pkm.ORIGIN_GIRATINA);
        }
        const opponentTeam = pokemon.team === Game_1.Team.BLUE_TEAM ? Game_1.Team.RED_TEAM : Game_1.Team.BLUE_TEAM;
        const mostSurroundedCoordinate = pokemon.state.getMostSurroundedCoordinateAvailablePlace(opponentTeam, board);
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board, false);
        }
        pokemon.broadcastAbility({
            positionX: pokemon.positionX,
            positionY: pokemon.positionY,
            skill: Ability_1.Ability.SHADOW_FORCE
        });
        const adjacentEnemies = board
            .getAdjacentCells(pokemon.positionX, pokemon.positionY, false)
            .filter((cell) => cell.value && cell.value.team !== pokemon.team)
            .map((cell) => cell.value);
        for (const enemy of adjacentEnemies) {
            if (enemy.status.protect) {
                enemy.status.protect = false;
                enemy.status.protectCooldown = 0;
            }
            if (enemy.status.reflect) {
                enemy.status.reflect = false;
                enemy.status.reflectCooldown = 0;
            }
            if (enemy.status.magicBounce) {
                enemy.status.magicBounce = false;
                enemy.status.magicBounceCooldown = 0;
            }
            enemy.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
        }
    }
}
exports.ShadowForceStrategy = ShadowForceStrategy;
//# sourceMappingURL=shadow-force.js.map