"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = getWeather;
const config_1 = require("../config");
const Item_1 = require("../types/enum/Item");
const Passive_1 = require("../types/enum/Passive");
const Synergy_1 = require("../types/enum/Synergy");
const Weather_1 = require("../types/enum/Weather");
const map_1 = require("./map");
const schemas_1 = require("./schemas");
function getWeather(bluePlayer, redPlayer, redPlayerBoard, isGhostBattle = false) {
    var _a;
    function getDominantWeather(count, weathers = [...count.keys()]) {
        const sortedCount = weathers
            .map((w) => { var _a; return [w, (_a = count.get(w)) !== null && _a !== void 0 ? _a : 0]; })
            .sort((a, b) => b[1] - a[1]);
        if (sortedCount.length === 0)
            return null;
        if (sortedCount.length === 1)
            return sortedCount[0][0];
        if (sortedCount.length >= 2 && sortedCount[0][1] === sortedCount[1][1])
            return null;
        return sortedCount[0][0];
    }
    const boardWeatherScore = new Map();
    for (const player of [bluePlayer, redPlayer]) {
        if (player === null)
            continue;
        player.items.forEach((item) => {
            var _a;
            if ((0, map_1.hasKey)(Item_1.WeatherByWeatherRocks, item)) {
                const weatherBoosted = Item_1.WeatherByWeatherRocks.get(item);
                boardWeatherScore.set(weatherBoosted, ((_a = boardWeatherScore.get(weatherBoosted)) !== null && _a !== void 0 ? _a : 0) + 3);
            }
        });
    }
    for (const board of [bluePlayer.board, redPlayerBoard]) {
        const playerWeatherScore = new Map();
        board.forEach((pkm) => {
            var _a, _b;
            if (pkm.positionY != 0) {
                if (pkm.passive) {
                    const weather = [...Weather_1.PassivesAssociatedToWeather.keys()].find((key) => Weather_1.PassivesAssociatedToWeather.get(key).includes(pkm.passive));
                    if (weather) {
                        boardWeatherScore.set(weather, ((_a = boardWeatherScore.get(weather)) !== null && _a !== void 0 ? _a : 0) + 100);
                        playerWeatherScore.set(weather, ((_b = playerWeatherScore.get(weather)) !== null && _b !== void 0 ? _b : 0) + 100);
                    }
                }
                pkm.types.forEach((type) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    if (Weather_1.WeatherAssociatedToSynergy.has(type)) {
                        const weather = Weather_1.WeatherAssociatedToSynergy.get(type);
                        boardWeatherScore.set(weather, ((_a = boardWeatherScore.get(weather)) !== null && _a !== void 0 ? _a : 0) + 1);
                        if (pkm.passive === Passive_1.Passive.SAND_STREAM &&
                            weather === Weather_1.Weather.SANDSTORM) {
                            boardWeatherScore.set(Weather_1.Weather.SANDSTORM, ((_b = boardWeatherScore.get(Weather_1.Weather.SANDSTORM)) !== null && _b !== void 0 ? _b : 0) + 2);
                            playerWeatherScore.set(Weather_1.Weather.SANDSTORM, ((_c = playerWeatherScore.get(Weather_1.Weather.SANDSTORM)) !== null && _c !== void 0 ? _c : 0) + 2);
                        }
                        if (pkm.passive === Passive_1.Passive.DRIZZLE && weather === Weather_1.Weather.RAIN) {
                            boardWeatherScore.set(Weather_1.Weather.RAIN, ((_d = boardWeatherScore.get(Weather_1.Weather.RAIN)) !== null && _d !== void 0 ? _d : 0) + 2);
                            playerWeatherScore.set(Weather_1.Weather.RAIN, ((_e = playerWeatherScore.get(Weather_1.Weather.RAIN)) !== null && _e !== void 0 ? _e : 0) + 2);
                        }
                        if (pkm.passive === Passive_1.Passive.WIND_POWER &&
                            weather === Weather_1.Weather.STORM) {
                            boardWeatherScore.set(Weather_1.Weather.STORM, ((_f = boardWeatherScore.get(Weather_1.Weather.STORM)) !== null && _f !== void 0 ? _f : 0) + 2);
                            playerWeatherScore.set(Weather_1.Weather.STORM, ((_g = playerWeatherScore.get(Weather_1.Weather.STORM)) !== null && _g !== void 0 ? _g : 0) + 2);
                        }
                        if (pkm.passive !== Passive_1.Passive.CASTFORM) {
                            playerWeatherScore.set(weather, ((_h = playerWeatherScore.get(weather)) !== null && _h !== void 0 ? _h : 0) + 1);
                        }
                    }
                });
            }
        });
        board.forEach((pkm) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            if (pkm.positionY != 0) {
                if (pkm.passive === Passive_1.Passive.CASTFORM &&
                    !(isGhostBattle && board === redPlayerBoard)) {
                    const dominant = getDominantWeather(playerWeatherScore, [
                        Weather_1.Weather.DROUGHT,
                        Weather_1.Weather.ZENITH,
                        Weather_1.Weather.RAIN,
                        Weather_1.Weather.SNOW
                    ]);
                    if (dominant) {
                        boardWeatherScore.set(dominant, ((_a = boardWeatherScore.get(dominant)) !== null && _a !== void 0 ? _a : 0) + 100);
                    }
                }
                if (pkm.passive === Passive_1.Passive.TORNADUS) {
                    const dominant = (_b = getDominantWeather(playerWeatherScore, [
                        Weather_1.Weather.WINDY,
                        Weather_1.Weather.SNOW
                    ])) !== null && _b !== void 0 ? _b : Weather_1.Weather.WINDY;
                    boardWeatherScore.set(dominant, ((_c = boardWeatherScore.get(dominant)) !== null && _c !== void 0 ? _c : 0) + 100);
                }
                if (pkm.passive === Passive_1.Passive.THUNDURUS) {
                    const dominant = (_d = getDominantWeather(playerWeatherScore, [
                        Weather_1.Weather.WINDY,
                        Weather_1.Weather.STORM
                    ])) !== null && _d !== void 0 ? _d : Weather_1.Weather.STORM;
                    boardWeatherScore.set(dominant, ((_e = boardWeatherScore.get(dominant)) !== null && _e !== void 0 ? _e : 0) + 100);
                }
                if (pkm.passive === Passive_1.Passive.LANDORUS) {
                    const dominant = (_f = getDominantWeather(playerWeatherScore, [
                        Weather_1.Weather.WINDY,
                        Weather_1.Weather.SANDSTORM
                    ])) !== null && _f !== void 0 ? _f : Weather_1.Weather.SANDSTORM;
                    boardWeatherScore.set(dominant, ((_g = boardWeatherScore.get(dominant)) !== null && _g !== void 0 ? _g : 0) + 100);
                }
                if (pkm.passive === Passive_1.Passive.ENAMORUS) {
                    const dominant = (_h = getDominantWeather(playerWeatherScore, [
                        Weather_1.Weather.WINDY,
                        Weather_1.Weather.MISTY
                    ])) !== null && _h !== void 0 ? _h : Weather_1.Weather.MISTY;
                    boardWeatherScore.set(dominant, ((_j = boardWeatherScore.get(dominant)) !== null && _j !== void 0 ? _j : 0) + 100);
                }
                if (pkm.passive === Passive_1.Passive.RAIN_OR_STORM) {
                    const dominant = (_k = getDominantWeather(playerWeatherScore, [
                        Weather_1.Weather.RAIN,
                        Weather_1.Weather.STORM
                    ])) !== null && _k !== void 0 ? _k : Weather_1.Weather.RAIN;
                    boardWeatherScore.set(dominant, ((_l = boardWeatherScore.get(dominant)) !== null && _l !== void 0 ? _l : 0) + 100);
                }
                if (pkm.passive === Passive_1.Passive.DROUGHT_OR_SANDSTORM) {
                    const dominant = (_m = getDominantWeather(playerWeatherScore, [
                        Weather_1.Weather.DROUGHT,
                        Weather_1.Weather.SANDSTORM
                    ])) !== null && _m !== void 0 ? _m : Weather_1.Weather.DROUGHT;
                    boardWeatherScore.set(dominant, ((_o = boardWeatherScore.get(dominant)) !== null && _o !== void 0 ? _o : 0) + 100);
                }
                if (pkm.passive === Passive_1.Passive.DROUGHT_OR_ZENITH) {
                    const nbLight = (0, schemas_1.values)(board).filter((p) => p.types.has(Synergy_1.Synergy.LIGHT));
                    const nbFire = (0, schemas_1.values)(board).filter((p) => p.types.has(Synergy_1.Synergy.FIRE));
                    const dominant = nbLight >= nbFire ? Weather_1.Weather.ZENITH : Weather_1.Weather.DROUGHT;
                    boardWeatherScore.set(dominant, ((_p = boardWeatherScore.get(dominant)) !== null && _p !== void 0 ? _p : 0) + 100);
                }
            }
        });
    }
    const dominantWeather = getDominantWeather(boardWeatherScore);
    if (dominantWeather &&
        ((_a = boardWeatherScore.get(dominantWeather)) !== null && _a !== void 0 ? _a : 0) >=
            config_1.WeatherThreshold[dominantWeather]) {
        return dominantWeather;
    }
    return Weather_1.Weather.NEUTRAL;
}
//# sourceMappingURL=weather.js.map