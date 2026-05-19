import Phaser, { GameObjects } from "phaser";
import { Team } from "../../../../types/enum/Game";
export default class LifeBar extends GameObjects.Graphics {
    maxHp: number;
    hp: number;
    shield: number;
    pp?: number;
    maxPP?: number;
    team: Team;
    flip: boolean;
    constructor(scene: Phaser.Scene, x: number, y: number, maxHP: number, hp: number, shield: number, team: Team, flip: boolean);
    draw(): void;
    setHp(value: number): void;
    setShield(value: number): void;
    setMaxHp(value: number): void;
    setPP(value: number): void;
    setMaxPP(value: number): void;
    setTeam(team: number, flip: boolean): void;
}
