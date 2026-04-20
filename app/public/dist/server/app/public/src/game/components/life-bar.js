"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phaser_1 = require("phaser");
const number_1 = require("../../../../utils/number");
const depths_1 = require("../depths");
class LifeBar extends phaser_1.GameObjects.Graphics {
    constructor(scene, x, y, maxHP, hp, shield, team, flip) {
        super(scene, { x, y });
        this.maxHp = maxHP;
        this.hp = hp;
        this.shield = shield;
        this.team = team;
        this.flip = flip;
        this.setDepth(depths_1.DEPTH.POKEMON_HP_BAR);
    }
    draw() {
        const barWidth = 70;
        const innerBarWidth = barWidth - 2;
        const lifeBarBgColor = 0x303030;
        const ppBarBgColor = 0x282828;
        const allyLifeColor = 0x76c442;
        const enemyLifeColor = 0xe76e55;
        const shieldColor = 0xe0e0e0;
        const ppColor = 0x209cee;
        const hpPerSegment = 25;
        this.clear();
        this.clearMask();
        this.translateCanvas(-barWidth / 2, 0);
        this.fillStyle(0x000000);
        this.fillRoundedRect(0, 0, barWidth, this.maxPP === undefined ? 8 : 14, 2);
        if (this.hp > 0) {
            const totalLife = Math.max(this.maxHp, this.hp + this.shield);
            const lifePercentage = this.hp / totalLife;
            const shieldPercentage = this.shield / totalLife;
            this.save();
            this.translateCanvas(1, 1);
            this.fillStyle(lifeBarBgColor, 1);
            this.fillRect(0, 0, innerBarWidth, 6);
            const color = this.team === (this.flip ? 1 : 0) ? allyLifeColor : enemyLifeColor;
            this.fillStyle(color, 1);
            this.fillRect(0, 0, lifePercentage * innerBarWidth, 6);
            if (this.shield > 0) {
                this.fillStyle(shieldColor);
                this.fillRect(lifePercentage * innerBarWidth, 0, shieldPercentage * 68, 6);
            }
            const segmentSize = (hpPerSegment / totalLife) * innerBarWidth;
            const numberOfSegments = ((totalLife - 0.1) / hpPerSegment) >> 0;
            this.lineStyle(1, lifeBarBgColor);
            this.beginPath();
            for (let i = 1; i <= numberOfSegments; i++) {
                this.moveTo(i * segmentSize, 0);
                this.lineTo(i * segmentSize, 4);
            }
            this.closePath();
            this.strokePath();
            this.restore();
        }
        if (this.pp !== undefined && this.maxPP !== undefined) {
            const ppPercentage = (0, number_1.max)(1)(this.pp / this.maxPP);
            this.fillStyle(ppBarBgColor, 1);
            this.fillRect(1, 9, innerBarWidth, 3);
            this.fillStyle(ppColor);
            this.fillRect(1, 9, ppPercentage * innerBarWidth, 3);
        }
    }
    setHp(value) {
        this.scene.tweens.add({
            targets: this,
            hp: value,
            duration: 150,
            onUpdate: this.draw.bind(this),
            ease: "Sine.easeOut"
        });
    }
    setShield(value) {
        this.scene.tweens.add({
            targets: this,
            shield: value,
            duration: 150,
            onUpdate: this.draw.bind(this),
            ease: "Sine.easeOut"
        });
    }
    setMaxHp(value) {
        this.maxHp = value;
    }
    setPP(value) {
        this.scene.tweens.add({
            targets: this,
            pp: value,
            duration: 150,
            onUpdate: this.draw.bind(this),
            ease: "Sine.easeOut"
        });
    }
    setMaxPP(value) {
        this.maxPP = value;
        if (this.pp === undefined)
            this.pp = 0;
    }
    setTeam(team, flip) {
        this.team = team;
        this.flip = flip;
    }
}
exports.default = LifeBar;
//# sourceMappingURL=life-bar.js.map