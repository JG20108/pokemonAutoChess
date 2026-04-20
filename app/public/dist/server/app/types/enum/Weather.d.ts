import { EffectEnum } from "./Effect";
import { Passive } from "./Passive";
import { Synergy } from "./Synergy";
export declare enum Weather {
    WINDY = "WINDY",
    NIGHT = "NIGHT",
    SANDSTORM = "SANDSTORM",
    ZENITH = "ZENITH",
    RAIN = "RAIN",
    SMOG = "SMOG",
    MISTY = "MISTY",
    DROUGHT = "DROUGHT",
    MURKY = "MURKY",
    BLOODMOON = "BLOODMOON",
    STORM = "STORM",
    SNOW = "SNOW",
    NEUTRAL = "NEUTRAL"
}
export declare const WeatherEffects: ReadonlyMap<Weather, EffectEnum>;
export declare const PassivesAssociatedToWeather: Map<Weather, Passive[]>;
export declare const WeatherAssociatedToSynergy: Map<Synergy, Weather>;
export declare const SynergyAssociatedToWeather: Map<Weather, Synergy>;
