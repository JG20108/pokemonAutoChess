"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynergyAssociatedToWeather = exports.WeatherAssociatedToSynergy = exports.PassivesAssociatedToWeather = exports.WeatherEffects = exports.Weather = void 0;
const map_1 = require("../../utils/map");
const Effect_1 = require("./Effect");
const Passive_1 = require("./Passive");
const Synergy_1 = require("./Synergy");
var Weather;
(function (Weather) {
    Weather["WINDY"] = "WINDY";
    Weather["NIGHT"] = "NIGHT";
    Weather["SANDSTORM"] = "SANDSTORM";
    Weather["ZENITH"] = "ZENITH";
    Weather["RAIN"] = "RAIN";
    Weather["SMOG"] = "SMOG";
    Weather["MISTY"] = "MISTY";
    Weather["DROUGHT"] = "DROUGHT";
    Weather["MURKY"] = "MURKY";
    Weather["BLOODMOON"] = "BLOODMOON";
    Weather["STORM"] = "STORM";
    Weather["SNOW"] = "SNOW";
    Weather["NEUTRAL"] = "NEUTRAL";
})(Weather || (exports.Weather = Weather = {}));
exports.WeatherEffects = new Map([
    [Weather.WINDY, Effect_1.EffectEnum.WINDY],
    [Weather.SNOW, Effect_1.EffectEnum.SNOW],
    [Weather.SMOG, Effect_1.EffectEnum.SMOG],
    [Weather.NIGHT, Effect_1.EffectEnum.NIGHT],
    [Weather.MISTY, Effect_1.EffectEnum.MISTY],
    [Weather.MURKY, Effect_1.EffectEnum.MURKY],
    [Weather.DROUGHT, Effect_1.EffectEnum.DROUGHT],
    [Weather.RAIN, Effect_1.EffectEnum.RAIN],
    [Weather.ZENITH, Effect_1.EffectEnum.ZENITH],
    [Weather.SANDSTORM, Effect_1.EffectEnum.SANDSTORM],
    [Weather.BLOODMOON, Effect_1.EffectEnum.BLOODMOON],
    [Weather.STORM, Effect_1.EffectEnum.STORM]
]);
exports.PassivesAssociatedToWeather = new Map([
    [Weather.RAIN, [Passive_1.Passive.RAIN]],
    [Weather.DROUGHT, [Passive_1.Passive.DROUGHT]],
    [Weather.ZENITH, [Passive_1.Passive.ZENITH]],
    [Weather.SANDSTORM, [Passive_1.Passive.SANDSTORM]],
    [Weather.MISTY, [Passive_1.Passive.MISTY]],
    [Weather.SNOW, [Passive_1.Passive.SNOW]],
    [Weather.STORM, [Passive_1.Passive.STORM]],
    [Weather.NIGHT, [Passive_1.Passive.NIGHT]],
    [Weather.WINDY, [Passive_1.Passive.WINDY]],
    [Weather.NEUTRAL, [Passive_1.Passive.AIRLOCK]]
]);
exports.WeatherAssociatedToSynergy = new Map([
    [Synergy_1.Synergy.GRASS, Weather.ZENITH],
    [Synergy_1.Synergy.FIRE, Weather.DROUGHT],
    [Synergy_1.Synergy.WATER, Weather.RAIN],
    [Synergy_1.Synergy.GROUND, Weather.SANDSTORM],
    [Synergy_1.Synergy.FAIRY, Weather.MISTY],
    [Synergy_1.Synergy.ICE, Weather.SNOW],
    [Synergy_1.Synergy.ELECTRIC, Weather.STORM],
    [Synergy_1.Synergy.DARK, Weather.NIGHT],
    [Synergy_1.Synergy.FLYING, Weather.WINDY],
    [Synergy_1.Synergy.WILD, Weather.BLOODMOON],
    [Synergy_1.Synergy.POISON, Weather.SMOG],
    [Synergy_1.Synergy.GHOST, Weather.MURKY],
    [Synergy_1.Synergy.NORMAL, Weather.NEUTRAL]
]);
exports.SynergyAssociatedToWeather = (0, map_1.reverseMap)(exports.WeatherAssociatedToSynergy);
//# sourceMappingURL=Weather.js.map