"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagnetPullStrategy = void 0;
const Wanderer_1 = require("../../types/enum/Wanderer");
const ability_strategy_1 = require("./ability-strategy");
class MagnetPullStrategy extends ability_strategy_1.AbilityStrategy {
    constructor() {
        super(...arguments);
        this.requiresTarget = false;
    }
    process(pokemon, board, target, crit) {
        super.process(pokemon, board, target, crit);
        if (pokemon.player) {
            const randomSteelPkm = pokemon.simulation.room.state.shop.magnetPull(pokemon, pokemon.player);
            pokemon.player.spawnWanderingPokemon({
                pkm: randomSteelPkm,
                behavior: Wanderer_1.WandererBehavior.SPECTATE,
                type: Wanderer_1.WandererType.CATCHABLE
            });
        }
    }
}
exports.MagnetPullStrategy = MagnetPullStrategy;
//# sourceMappingURL=magnet-pull.js.map