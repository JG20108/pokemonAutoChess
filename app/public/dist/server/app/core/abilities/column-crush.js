"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnCrushStrategy = void 0;
const pokemon_factory_1 = __importDefault(require("../../models/pokemon-factory"));
const Ability_1 = require("../../types/enum/Ability");
const Game_1 = require("../../types/enum/Game");
const Pokemon_1 = require("../../types/enum/Pokemon");
const array_1 = require("../../utils/array");
const distance_1 = require("../../utils/distance");
const simulation_command_1 = require("../simulation-command");
const ability_strategy_1 = require("./ability-strategy");
class ColumnCrushStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        var _a;
        super.process(pokemon, board, target, crit, true);
        const pillar = board.cells.find((e) => e && e.team === pokemon.team && (0, array_1.isIn)(Pokemon_1.Pillars, e.name));
        if (pillar) {
            const pillarX = pillar.positionX;
            const pillarY = pillar.positionY;
            const remainingHp = pillar.hp;
            const pillarType = pillar.name;
            pillar.shield = 0;
            pillar.handleSpecialDamage(9999, board, Game_1.AttackType.TRUE, null, false);
            pokemon.moveTo(pillarX, pillarY, board, false);
            pokemon.resetCooldown(800);
            pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                var _a;
                const damage = ((_a = [50, 100, 150, 300][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 300) + remainingHp;
                let enemyHit;
                const targetCoordinate = pokemon.state.getNearestTargetAtSight(pokemon, board);
                if (targetCoordinate) {
                    enemyHit = targetCoordinate.target;
                }
                if (!enemyHit) {
                    enemyHit = board.cells.find((entity) => entity && entity.team !== pokemon.team);
                }
                if (enemyHit) {
                    pokemon.setTarget(enemyHit);
                    const landingX = enemyHit.positionX;
                    const landingY = enemyHit.positionY;
                    const travelTime = (0, distance_1.distanceE)(pillarX, pillarY, enemyHit.positionX, enemyHit.positionY) * 160;
                    pokemon.broadcastAbility({
                        positionX: pillar.positionX,
                        positionY: pillar.positionY,
                        targetX: enemyHit.positionX,
                        targetY: enemyHit.positionY,
                        orientation: [
                            Pokemon_1.Pkm.PILLAR_WOOD,
                            Pokemon_1.Pkm.PILLAR_IRON,
                            Pokemon_1.Pkm.PILLAR_CONCRETE
                        ].indexOf(pillarType)
                    });
                    pokemon.commands.push(new simulation_command_1.DelayedCommand(() => {
                        pokemon.broadcastAbility({
                            skill: Ability_1.Ability.ROCK_SMASH,
                            positionX: landingX,
                            positionY: landingY,
                            targetX: landingX,
                            targetY: landingY
                        });
                        if (enemyHit && enemyHit.hp > 0) {
                            enemyHit.handleSpecialDamage(damage, board, Game_1.AttackType.SPECIAL, pokemon, crit);
                        }
                    }, travelTime));
                }
            }, 500));
        }
        else {
            const coord = pokemon.simulation.getClosestFreeCellToPokemonEntity(pokemon);
            if (!coord)
                return;
            const pillarType = (_a = Pokemon_1.Pillars[pokemon.stars - 1]) !== null && _a !== void 0 ? _a : Pokemon_1.Pkm.PILLAR_CONCRETE;
            const pillar = pokemon_factory_1.default.createPokemonFromName(pillarType, pokemon.player);
            pokemon.simulation.addPokemon(pillar, coord.x, coord.y, pokemon.team, true);
        }
    }
}
exports.ColumnCrushStrategy = ColumnCrushStrategy;
//# sourceMappingURL=column-crush.js.map