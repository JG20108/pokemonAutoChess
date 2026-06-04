"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMoveSpeed = getMoveSpeed;
function getMoveSpeed(pokemon) {
    const speed = pokemon.status.paralysis ? pokemon.speed / 2 : pokemon.speed;
    return 0.5 + speed / 100;
}
//# sourceMappingURL=move-speed.js.map