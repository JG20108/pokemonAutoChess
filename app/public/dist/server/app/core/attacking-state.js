"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttackTimings = getAttackTimings;
const config_1 = require("../config");
const delays_json_1 = __importDefault(require("../types/delays.json"));
const Effect_1 = require("../types/enum/Effect");
const Game_1 = require("../types/enum/Game");
const distance_1 = require("../utils/distance");
const number_1 = require("../utils/number");
const abilities_1 = require("./abilities/abilities");
const pokemon_state_1 = __importDefault(require("./pokemon-state"));
const simulation_command_1 = require("./simulation-command");
class AttackingState extends pokemon_state_1.default {
    constructor() {
        super(...arguments);
        this.name = "attacking";
    }
    update(pokemon, dt, board, player) {
        super.update(pokemon, dt, board, player);
        if (pokemon.cooldown <= 0) {
            const speed = pokemon.status.paralysis ? pokemon.speed / 2 : pokemon.speed;
            pokemon.resetCooldown(1000, speed);
            let target = board.getEntityOnCell(pokemon.targetX, pokemon.targetY);
            const previousTarget = pokemon.simulation.blueTeam.get(pokemon.targetEntityId) ||
                pokemon.simulation.redTeam.get(pokemon.targetEntityId);
            if (pokemon.effects.has(Effect_1.EffectEnum.MERCILESS)) {
                const candidates = this.getTargetsAtRange(pokemon, board);
                let minLife = Infinity;
                for (const candidate of candidates) {
                    if (candidate.hp + candidate.shield < minLife) {
                        minLife = candidate.hp + candidate.shield;
                        target = candidate;
                    }
                }
            }
            else if (pokemon.status.confusion) {
                target = this.getTargetWhenConfused(pokemon, board);
            }
            else if (!target || target.id !== pokemon.targetEntityId) {
                if (previousTarget &&
                    previousTarget.isTargettableBy(pokemon) &&
                    (0, distance_1.distanceC)(pokemon.positionX, pokemon.positionY, previousTarget === null || previousTarget === void 0 ? void 0 : previousTarget.positionX, previousTarget === null || previousTarget === void 0 ? void 0 : previousTarget.positionY) <= pokemon.range) {
                    target = previousTarget;
                }
                else {
                    target = this.getNearestTargetAtRange(pokemon, board);
                }
            }
            else if (previousTarget &&
                previousTarget.isTargettableBy(pokemon) === false) {
                target = this.getNearestTargetAtRange(pokemon, board);
            }
            if (!target || pokemon.status.charm) {
                const targetAtSight = this.getNearestTargetAtSight(pokemon, board);
                if (targetAtSight) {
                    pokemon.toMovingState();
                }
            }
            else {
                pokemon.targetX = target.positionX;
                pokemon.targetY = target.positionY;
                pokemon.targetEntityId = target.id;
                pokemon.orientation = board.orientation(pokemon.positionX, pokemon.positionY, pokemon.targetX, pokemon.targetY, pokemon, target);
                if (pokemon.pp >= pokemon.maxPP && pokemon.canCast) {
                    (0, abilities_1.castAbility)(pokemon.skill, pokemon, board, target);
                }
                else {
                    pokemon.count.attackCount++;
                    const { delayBeforeShoot, travelTime } = getAttackTimings(pokemon);
                    pokemon.commands.push(new simulation_command_1.AttackCommand(delayBeforeShoot + travelTime, pokemon, target, board));
                }
            }
        }
        else {
            pokemon.cooldown = Math.max(0, pokemon.cooldown - dt);
        }
    }
    onEnter(pokemon) {
        super.onEnter(pokemon);
        pokemon.action = Game_1.PokemonActionState.ATTACK;
        pokemon.cooldown = 0;
    }
    onExit(pokemon) {
        super.onExit(pokemon);
        pokemon.setTarget(null);
    }
}
exports.default = AttackingState;
function getAttackTimings(pokemon) {
    var _a, _b;
    const speed = pokemon.status.paralysis ? pokemon.speed / 2 : pokemon.speed;
    const attackDuration = 1000 / (0.4 + speed * 0.007);
    const d = ((_a = delays_json_1.default[pokemon.index]) === null || _a === void 0 ? void 0 : _a.d) || 18;
    const t = ((_b = delays_json_1.default[pokemon.index]) === null || _b === void 0 ? void 0 : _b.t) || 36;
    const delayBeforeShoot = (0, number_1.max)(attackDuration / 2)((attackDuration * d) / t);
    const distance = (0, distance_1.distanceC)(pokemon.targetX, pokemon.targetY, pokemon.positionX, pokemon.positionY);
    const travelTime = (distance * 1000) / (config_1.BASE_PROJECTILE_SPEED * (1 + speed / 100));
    return { delayBeforeShoot, travelTime, attackDuration };
}
//# sourceMappingURL=attacking-state.js.map