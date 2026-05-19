import Phaser from "phaser";
export default class WeatherManager {
    scene: Phaser.Scene;
    screen: Phaser.Geom.Rectangle;
    colorFilter: Phaser.GameObjects.Rectangle | undefined;
    particlesEmitters: Phaser.GameObjects.Particles.ParticleEmitter[];
    image: Phaser.GameObjects.Image | undefined;
    tweens: Phaser.Tweens.Tween[];
    fxs: Phaser.Filters.Controller[];
    constructor(scene: Phaser.Scene);
    addRain(): void;
    addSnow(): void;
    addSun(): void;
    addSandstorm(): void;
    addNight(): void;
    addDrought(): void;
    addBloodMoon(): void;
    addWind(): void;
    addSmog(): void;
    addMurky(): void;
    addMist(): void;
    addStorm(): void;
    setTownDaytime(stageLevel: number): void;
    clearWeather(): void;
}
