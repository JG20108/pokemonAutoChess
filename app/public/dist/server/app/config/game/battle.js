"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherThreshold = exports.BASE_PROJECTILE_SPEED = exports.DEFAULT_CRIT_POWER = exports.DEFAULT_CRIT_CHANCE = exports.DEFAULT_SPEED = exports.ARMOR_FACTOR = exports.ON_ATTACK_MANA = void 0;
const Weather_1 = require("../../types/enum/Weather");
exports.ON_ATTACK_MANA = 5;
exports.ARMOR_FACTOR = 0.05;
exports.DEFAULT_SPEED = 50;
exports.DEFAULT_CRIT_CHANCE = 10;
exports.DEFAULT_CRIT_POWER = 2;
exports.BASE_PROJECTILE_SPEED = 3;
exports.WeatherThreshold = {
    [Weather_1.Weather.MISTY]: 8,
    [Weather_1.Weather.NEUTRAL]: 8,
    [Weather_1.Weather.NIGHT]: 8,
    [Weather_1.Weather.BLOODMOON]: 8,
    [Weather_1.Weather.RAIN]: 8,
    [Weather_1.Weather.SANDSTORM]: 8,
    [Weather_1.Weather.SNOW]: 8,
    [Weather_1.Weather.STORM]: 8,
    [Weather_1.Weather.ZENITH]: 8,
    [Weather_1.Weather.DROUGHT]: 8,
    [Weather_1.Weather.WINDY]: 8,
    [Weather_1.Weather.SMOG]: 8,
    [Weather_1.Weather.MURKY]: 8
};
//# sourceMappingURL=battle.js.map