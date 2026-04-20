import { GameObjects } from "phaser";
import ReactDOM from "react-dom/client";
import { Emotion } from "../../../../types";
import { Ability } from "../../../../types/enum/Ability";
import { Rarity } from "../../../../types/enum/Game";
import { Passive } from "../../../../types/enum/Passive";
import { Pkm } from "../../../../types/enum/Pokemon";
import { Synergy } from "../../../../types/enum/Synergy";
import { Item } from "../../../../types/enum/Item";
export default class PokemonDetail extends GameObjects.DOMElement {
    dom: HTMLDivElement;
    hp: HTMLSpanElement;
    atk: HTMLSpanElement;
    def: HTMLSpanElement;
    speDef: HTMLSpanElement;
    range: HTMLSpanElement;
    speed: HTMLSpanElement;
    luck: HTMLSpanElement;
    critChance: HTMLSpanElement;
    critPower: HTMLSpanElement;
    ap: HTMLSpanElement;
    abilityDescription: HTMLDivElement | null;
    passiveDescription: HTMLDivElement | null;
    pp: HTMLSpanElement;
    abilityRoot: ReactDOM.Root | null;
    passiveDescriptionRoot: ReactDOM.Root | null;
    constructor(scene: Phaser.Scene, x: number, y: number, name: Pkm, rarity: Rarity, hp: number, atk: number, def: number, speDef: number, range: number, speed: number, critChance: number, critPower: number, ap: number, pp: number, luck: number | undefined, types: Set<Synergy>, skill: Ability, passive: Passive, emotion: Emotion, shiny: boolean, index: string, stars: number, stages: number, evolution: Pkm, items: Item[], inBattle: boolean);
    updateValue(el: HTMLElement, previousValue: number, value: number): void;
    updateAbilityDescription({ skill, stars, stages, ap, luck }: {
        skill: Ability;
        stars: number;
        stages: number;
        ap: number;
        luck: number;
    }): void;
    updatePassiveDescription({ passive, stars, ap, luck }: {
        passive: Passive;
        stars: number;
        ap: number;
        luck: number;
    }): void;
}
