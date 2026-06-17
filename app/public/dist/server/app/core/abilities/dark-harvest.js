"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkHarvestStrategy = void 0;
const Ability_1 = require("../../types/enum/Ability");
const Effect_1 = require("../../types/enum/Effect");
const Game_1 = require("../../types/enum/Game");
const random_1 = require("../../utils/random");
const effect_1 = require("../effects/effect");
const ability_strategy_1 = require("./ability-strategy");
class DarkHarvestEffect extends effect_1.PeriodicEffect {
    constructor(duration, pokemon) {
        super((pokemon) => {
            var _a;
            if (pokemon.status.resurrecting ||
                pokemon.status.freeze ||
                pokemon.status.sleep) {
                return;
            }
            pokemon.broadcastAbility({ skill: Ability_1.Ability.DARK_HARVEST });
            const board = pokemon.simulation.board;
            const crit = pokemon.effects.has(Effect_1.EffectEnum.ABILITY_CRIT)
                ? (0, random_1.chance)(pokemon.critChance / 100, pokemon)
                : false;
            const darkHarvestDamage = (_a = [5, 10, 20, 40][pokemon.stars - 1]) !== null && _a !== void 0 ? _a : 40;
            const healFactor = 0.3;
            board
                .getAdjacentCells(pokemon.positionX, pokemon.positionY)
                .forEach((cell) => {
                if (cell.value && cell.value.team !== pokemon.team) {
                    const { takenDamage } = cell.value.handleSpecialDamage(darkHarvestDamage, board, Game_1.AttackType.SPECIAL, pokemon, crit, true);
                    pokemon.handleHeal(Math.round(takenDamage * healFactor), pokemon, 0, false);
                }
            });
            if (this.duration <= 0) {
                pokemon.effectsSet.delete(this);
                pokemon.effects.delete(Effect_1.EffectEnum.DARK_HARVEST);
            }
            else {
                this.duration -= this.intervalMs;
            }
        }, Effect_1.EffectEnum.DARK_HARVEST, 1000);
        this.timer = 0;
        this.duration = duration + this.intervalMs;
        if (pokemon.effects.has(Effect_1.EffectEnum.DARK_HARVEST)) {
            pokemon.effectsSet.delete(this);
            for (const effect of pokemon.effectsSet) {
                if (effect instanceof DarkHarvestEffect) {
                    effect.duration = Math.max(this.duration, effect.duration);
                    effect.timer = this.timer;
                    break;
                }
            }
        }
        else {
            pokemon.effects.add(Effect_1.EffectEnum.DARK_HARVEST);
        }
    }
}
class DarkHarvestStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit, true);
        const opponentTeam = pokemon.team === Game_1.Team.BLUE_TEAM ? Game_1.Team.RED_TEAM : Game_1.Team.BLUE_TEAM;
        const mostSurroundedCoordinate = pokemon.state.getMostSurroundedCoordinateAvailablePlace(opponentTeam, board);
        const effectDuration = 3000;
        const marginDuration = 200;
        if (mostSurroundedCoordinate) {
            pokemon.moveTo(mostSurroundedCoordinate.x, mostSurroundedCoordinate.y, board, false);
            pokemon.effectsSet.add(new DarkHarvestEffect(effectDuration + marginDuration, pokemon));
            pokemon.status.triggerSilence(effectDuration + marginDuration, pokemon, pokemon);
        }
    }
}
exports.DarkHarvestStrategy = DarkHarvestStrategy;
//# sourceMappingURL=dark-harvest.js.map