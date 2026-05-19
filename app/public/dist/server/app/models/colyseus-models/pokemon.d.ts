import { Schema, SetSchema } from "@colyseus/schema";
import { ConditionBasedEvolutionRule, CountEvolutionRule, EvolutionRule, HatchEvolutionRule, ItemEvolutionRule, StackBasedEvolutionRule } from "../../core/evolution-rules";
import Simulation from "../../core/simulation";
import GameState from "../../rooms/states/game-state";
import { Emotion, IPokemon, IPokemonEntity } from "../../types";
import { Ability } from "../../types/enum/Ability";
import { DungeonPMDO } from "../../types/enum/Dungeon";
import { EffectEnum } from "../../types/enum/Effect";
import { PokemonActionState, Rarity, Stat } from "../../types/enum/Game";
import { Item } from "../../types/enum/Item";
import { Passive } from "../../types/enum/Passive";
import { Pkm } from "../../types/enum/Pokemon";
import { Synergy } from "../../types/enum/Synergy";
import { Weather } from "../../types/enum/Weather";
import Player from "./player";
export declare class Pokemon extends Schema implements IPokemon {
    id: string;
    name: Pkm;
    types: SetSchema<Synergy>;
    rarity: Rarity;
    index: string;
    evolution: Pkm;
    positionX: number;
    positionY: number;
    speed: number;
    def: number;
    speDef: number;
    atk: number;
    hp: number;
    maxHP: number;
    shield: number;
    critChance: number;
    critPower: number;
    range: number;
    stars: number;
    pp: number;
    maxPP: number;
    ap: number;
    luck: number;
    skill: Ability;
    tm: Ability;
    passive: Passive;
    items: SetSchema<Item>;
    dishes: SetSchema<Item>;
    shiny: boolean;
    emotion: Emotion;
    action: PokemonActionState;
    stacks: number;
    stacksRequired: number;
    supercharged: boolean;
    dodge: number;
    deathCount: number;
    killCount: number;
    evolutions: Pkm[];
    evolutionRule: EvolutionRule;
    additional: boolean;
    regional: boolean;
    canHoldItems: boolean;
    canBeBenched: boolean;
    canBeSold: boolean;
    constructor(name: Pkm, shiny?: boolean, emotion?: Emotion);
    get final(): boolean;
    get canBePlaced(): boolean;
    get canBeCloned(): boolean;
    get canEat(): boolean;
    get hasEvolution(): boolean;
    get doesCountForTeamSize(): boolean;
    onChangePosition(x: number, y: number, player: Player, state?: GameState, doNotRemoveItems?: boolean): void;
    onItemGiven(item: Item, player: Player): void;
    onItemRemoved(item: Item, player: Player): void;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
    afterEvolve(params: {
        pokemonEvolved: Pokemon;
        pokemonsBeforeEvolution: Pokemon[];
        player: Player;
    }): void;
    beforeSimulationStart(params: {
        simulationId: string;
        isGhostBattle: boolean;
        weather: Weather;
        player: Player;
        teamEffects: Set<EffectEnum>;
        opponentEffects: Set<EffectEnum>;
    }): void;
    onSpawn(params: {
        entity: IPokemonEntity;
        simulation: Simulation;
        isSpawn: boolean;
    }): void;
    isInRegion(map: DungeonPMDO | "town", state?: GameState): boolean;
    addItem(item: Item, player: Player): void;
    addItems(items: Item[], player: Player): void;
    removeItem(item: Item, player: Player): void;
    removeItems(items: Item[], player: Player): void;
    applyStat(stat: Stat, value: number): void;
    addPP(value: number): void;
    addCritChance(value: number): void;
    addCritPower(value: number): void;
    addShield(value: number): void;
    addDodgeChance(value: number): void;
    addAbilityPower(value: number): void;
    addLuck(value: number): void;
    addDefense(value: number): void;
    addSpecialDefense(value: number): void;
    addAttack(value: number): void;
    addSpeed(value: number): void;
    addMaxHP(amount: number): void;
}
export declare class Ditto extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Substitute extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    canHoldItems: boolean;
}
export declare class Egg extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    evolutionRule: HatchEvolutionRule;
    canHoldItems: boolean;
}
export declare class Electrike extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Manectric extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class MegaManectric extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Shuppet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Banette extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class MegaBanette extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Riolu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Lucario extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Crabrawler extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class Crabominable extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class Cutiefly extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Ribombee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Nickit extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Thievul extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Swablu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Altaria extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class MegaAltaria extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Scyther extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Scizor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Kleavor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Bounsweet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Steenee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Tsareena extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Buneary extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Lopunny extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class MegaLopunny extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Onix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Steelix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class MegaSteelix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Numel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Camerupt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class MegaCamerupt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Meditite extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Medicham extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Elekid extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Electabuzz extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Electivire extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Gible extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Gabite extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Garchomp extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Roggenrola extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Boldore extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Gigalith extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Beldum extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Metang extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Metagross extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Tympole extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Palpitoad extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Seismitoad extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Bagon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Shelgon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Salamence extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Ralts extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Kirlia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Gardevoir extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Gallade extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Fuecoco extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Crocalor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Skeledirge extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Budew extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Roselia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Roserade extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Slakoth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Vigoroth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
}
export declare class Slaking extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
}
export declare class Honedge extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Doublade extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Aegislash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class AegislashBlade extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Oshawott extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Dewott extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Samurott extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class HisuiSamurott extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO | "town", state?: GameState): boolean;
}
export declare class Larvitar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Pupitar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Tyranitar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class JangmoO extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class HakamoO extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class KommoO extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Gastly extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Haunter extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Gengar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Abra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Kadabra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Alakazam extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Litwick extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Lampent extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Chandelure extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Porygon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Porygon2 extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class PorygonZ extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Sewaddle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Swadloon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Leavanny extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Turtwig extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Grotle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Torterra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Deino extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Zweilous extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Hydreigon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Poliwag extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Poliwhirl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    evolutionRule: CountEvolutionRule;
}
export declare class Politoed extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Poliwrath extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Magby extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Magmar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Magmortar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Solosis extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Duosion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Reuniclus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Shinx extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Luxio extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Luxray extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Cubone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Marowak extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class AlolanMarowak extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Axew extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolutionRule: HatchEvolutionRule;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Fraxure extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolutionRule: HatchEvolutionRule;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Haxorus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Dratini extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Dragonair extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Dragonite extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Goomy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Sligoo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Goodra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class HisuiSliggoo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class HisuiGoodra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Lotad extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Lombre extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Ludicolo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Togepi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Togetic extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Togekiss extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Rhyhorn extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Rhydon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Rhyperior extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Aron extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Lairon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Aggron extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Whismur extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Loudred extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Exploud extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Swinub extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Piloswine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Mamoswine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Snover extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Abomasnow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class MegaAbomasnow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Snorunt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Glalie extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Froslass extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Vanillite extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Vanillish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Vanilluxe extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Trapinch extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Vibrava extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Flygon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Pichu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Pikachu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onItemGiven(item: Item, player: Player): void;
}
export declare class Raichu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class AlolanRaichu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Bulbasaur extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Ivysaur extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Venusaur extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Igglybuff extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Jigglypuff extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Wigglytuff extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Duskull extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Dusclops extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Dusknoir extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Magnemite extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Magneton extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Magnezone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Horsea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Seadra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Kingdra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Flabebe extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Floette extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Florges extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Chikorita extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Bayleef extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Meganium extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Venipede extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Whirlipede extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Scolipede extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Spheal extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Sealeo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Walrein extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class NidoranF extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Nidorina extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Nidoqueen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class NidoranM extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Nidorino extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Nidoking extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Machop extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Machoke extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Machamp extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Piplup extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Prinplup extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Empoleon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Chimchar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Monferno extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Infernape extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Mudkip extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    beforeSimulationStart({ opponentEffects }: {
        opponentEffects: Set<EffectEnum>;
    }): void;
}
export declare class Marshtomp extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    beforeSimulationStart({ opponentEffects }: {
        opponentEffects: Set<EffectEnum>;
    }): void;
}
export declare class Swampert extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    beforeSimulationStart({ opponentEffects }: {
        opponentEffects: Set<EffectEnum>;
    }): void;
}
export declare class Torchic extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Combusken extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Blaziken extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Treecko extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Grovyle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Sceptile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Cyndaquil extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Quilava extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Typhlosion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class HisuianTyphlosion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Slowpoke extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class Slowbro extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Slowking extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class GalarianSlowpoke extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    passive: Passive;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class GalarianSlowbro extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class GalarianSlowking extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Psyduck extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Golduck extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Squirtle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Wartortle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Blastoise extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Bellsprout extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Weepinbell extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Victreebel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Geodude extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Graveler extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Golem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Totodile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Croconaw extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Feraligatr extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Azurill extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Marill extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Azumarill extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Zubat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Golbat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Crobat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Mareep extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Flaffy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Ampharos extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Cleffa extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Clefairy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Clefable extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Caterpie extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Metapod extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Butterfree extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Weedle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Kakuna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Beedrill extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Pidgey extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Pidgeotto extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Pidgeot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Hoppip extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Skiploom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Jumpluff extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Seedot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Nuzleaf extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Shiftry extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Sprigatito extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Floragato extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Meowscarada extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Charmander extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Charmeleon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Charizard extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Magikarp extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    evolutionRule: CountEvolutionRule;
}
export declare class Gyarados extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired(player: Player): void;
}
export declare class PikachuSurfer extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onItemRemoved(item: Item, player: Player): void;
}
export declare class Rattata extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Raticate extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class AlolanRattata extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class AlolanRaticate extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Spearow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Fearow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Meloetta extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onChangePosition(x: number, y: number, player: Player, state: GameState): void;
}
export declare class PirouetteMeloetta extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onChangePosition(x: number, y: number, player: Player, state: GameState): void;
}
export declare class Lugia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class ShadowLugia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Giratina extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class OriginGiratina extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Zapdos extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class GalarianZapdos extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Zeraora extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Stantler extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    originalMap: DungeonPMDO | "town";
    onAcquired(player: Player): void;
}
export declare class Wyrdeer extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Miltank extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Yveltal extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Moltres extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class GalarianMoltres extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class Pinsir extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Articuno extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class GalarianArticuno extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class Dialga extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Palkia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Meltan extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Melmetal extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class Suicune extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Raikou extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Entei extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Regice extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Seviper extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Lunatone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Solrock extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Regirock extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Tauros extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class TaurosCombatBreed extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class TaurosBlazeBreed extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class TaurosAquaBreed extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Heracross extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Zangoose extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Registeel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Regigigas extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Kyogre extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Groudon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Rayquaza extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Eevee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    evolutions: Pkm[];
    evolutionRule: ItemEvolutionRule;
}
export declare class Vaporeon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Jolteon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Flareon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Espeon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Umbreon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Leafeon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Sylveon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Glaceon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Volcanion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Darkrai extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Larvesta extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Volcarona extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Chatot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Farfetchd extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class GalarianFarfetchd extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class Kecleon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Castform extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    beforeSimulationStart({ isGhostBattle, weather, player }: {
        isGhostBattle: boolean;
        weather: Weather;
        player: Player;
    }): void;
}
export declare class CastformSun extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    beforeSimulationStart({ isGhostBattle, weather, player }: {
        isGhostBattle: boolean;
        weather: Weather;
        player: Player;
    }): void;
}
export declare class CastformRain extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    beforeSimulationStart({ isGhostBattle, weather, player }: {
        isGhostBattle: boolean;
        weather: Weather;
        player: Player;
    }): void;
}
export declare class CastformHail extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    beforeSimulationStart({ isGhostBattle, weather, player }: {
        isGhostBattle: boolean;
        weather: Weather;
        player: Player;
    }): void;
}
export declare class Landorus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Thundurus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Tornadus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Enamorus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Keldeo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Terrakion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Virizion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Cobalion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Mawile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Phione extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Manaphy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Rotom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    passive: Passive;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class RotomHeat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    passive: Passive;
    skill: Ability;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class RotomWash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    passive: Passive;
    skill: Ability;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class RotomFrost extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    passive: Passive;
    skill: Ability;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class RotomFan extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    passive: Passive;
    skill: Ability;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class RotomMow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    passive: Passive;
    skill: Ability;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class RotomDrone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    passive: Passive;
    skill: Ability;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class Spiritomb extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Absol extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Delibird extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class IronBundle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Lapras extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Latias extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Latios extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Uxie extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Mesprit extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Azelf extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Mew extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Mewtwo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class ShadowMewtwo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class Marshadow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Kyurem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Reshiram extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Zekrom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Celebi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Victini extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    beforeSimulationStart({ opponentEffects }: {
        opponentEffects: Set<EffectEnum>;
    }): void;
}
export declare class Jirachi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    beforeSimulationStart({ teamEffects }: {
        teamEffects: Set<EffectEnum>;
    }): void;
}
export declare class Arceus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Deoxys extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class DeoxysDefense extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class DeoxysAttack extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class DeoxysSpeed extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class Shaymin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class ShayminSky extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Cresselia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Heatran extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class HooH extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class RoaringMoon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Torkoal extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Heatmor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Cryogonal extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Drampa extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class PrimalGroudon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(player: Player): void;
}
export declare class PrimalKyogre extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(player: Player): void;
}
export declare class MegaRayquaza extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(player: Player): void;
}
export declare class Oddish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Gloom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Vileplume extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Bellossom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Amaura extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Aurorus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Carbink extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Diancie extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Sunkern extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Sunflora extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Mankey extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Primeape extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: StackBasedEvolutionRule;
    stacksRequired: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Annihilape extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired(player: Player): void;
}
export declare class Anorith extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Armaldo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Wynaut extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Wobbuffet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Munna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Musharna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Archen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Archeops extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Gligar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Gliscor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Shieldon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Bastiodon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Mienfoo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Mienshao extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Lileep extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Cradily extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Cranidos extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Rampardos extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Kabuto extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Kabutops extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Omanyte extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Omastar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Clamperl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
}
export declare class Gorebyss extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Huntail extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Relicanth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Tyrunt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Tyrantrum extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Aerodactyl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Genesect extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Hatenna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Hattrem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Hatterene extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Fennekin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Braixen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Delphox extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Regieleki extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Regidrago extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Guzzlord extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Eternatus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Nincada extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Ninjask extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    onAcquired(player: Player): void;
}
export declare class Shedinja extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Happiny extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Chansey extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Blissey extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class TapuKoko extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class TapuLele extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class Xerneas extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class TapuFini extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class TapuBulu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class Stakataka extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Blacephalon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Houndour extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Houndoom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class MegaHoundoom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Cacnea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Cacturne extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Pumpkaboo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Gourgeist extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Natu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Xatu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Noibat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Noivern extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Shellder extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Cloyster extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Buizel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Floatzel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Ponyta extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Rapidash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class GalarianPonyta extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
}
export declare class GalarianRapidash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
}
export declare class Makuhita extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Hariyama extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Sentret extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Furret extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Joltik extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Galvantula extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Paras extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Parasect extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Corphish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Crawdaunt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Meowth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Persian extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class AlolanMeowth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
}
export declare class AlolanPersian extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
}
export declare class Hoothoot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Noctowl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Munchlax extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Snorlax extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Poipole extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: StackBasedEvolutionRule;
    stacksRequired: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Naganadel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(player: Player): void;
}
export declare class Growlithe extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Arcanine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class HisuiGrowlithe extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class HisuiArcanine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Smoochum extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Jynx extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class MimeJr extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class MrMime extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Salandit extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Salazzle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Venonat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Venomoth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Voltorb extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Electrode extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class HisuiVoltorb extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class HisuiElectrode extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Slugma extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Magcargo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Sneasel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Weavile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class HisuiSneasel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Sneasler extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Seel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Dewgong extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Croagunk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Toxicroak extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Chinchou extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Lanturn extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Poochyena extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Mightyena extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Bronzor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Bronzong extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Drifloon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Drifblim extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Shroomish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Breloom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Tentacool extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Tentacruel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Snubull extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Granbull extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class TypeNull extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Silvally extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onChangePosition(x: number, y: number, player: Player, state: GameState): void;
}
export declare class Applin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Dipplin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(): void;
}
export declare class Appletun extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired(): void;
}
export declare class Flapple extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired(): void;
}
export declare class Hydrapple extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired(): void;
}
export declare class Staryu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Starmie extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Vulpix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Ninetales extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class AlolanVulpix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class AlolanNinetales extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Snom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Frosmoth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Wailmer extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Wailord extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Dreepy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Drakloak extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Dragapult extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Snivy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Servine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Serperior extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Starly extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Staravia extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Staraptor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Scorbunny extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Raboot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Cinderace extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class AlolanGeodude extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class AlolanGraveler extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class AlolanGolem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Popplio extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Brionne extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Primarina extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Gothita extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Gothorita extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Gothitelle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Sandshrew extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Sandslash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class AlolanSandshrew extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    regional: boolean;
}
export declare class AlolanSandslash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    regional: boolean;
}
export declare class Nosepass extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Probopass extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Woobat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Swoobat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Pineco extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Forretress extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class UnownA extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownB extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownC extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownD extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownE extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownF extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownG extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownH extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownI extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownJ extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownK extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownL extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownM extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownN extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownO extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownP extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownQ extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownR extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownS extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownT extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownU extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownV extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownW extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownX extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownY extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownZ extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownQuestion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class UnownExclamation extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class Diglett extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Dugtrio extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Wiglett extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Wugtrio extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class AlolanDiglett extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class AlolanDugtrio extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Rowlet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Dartix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Decidueye extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Zorua extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Zoroark extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class HisuiZorua extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class HisuiZoroark extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Grimer extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Muk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class AlolanGrimer extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class AlolanMuk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Ekans extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Arbok extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Carvanha extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Sharpedo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Froakie extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Frogadier extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Greninja extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Chingling extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: StackBasedEvolutionRule;
    stacksRequired: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Chimecho extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Tyrogue extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    evolutions: Pkm[];
    evolutionRule: ItemEvolutionRule;
}
export declare class Hitmontop extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Hitmonlee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Hitmonchan extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Mimikyu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class MimikyuBusted extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Bonsley extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Sudowoodo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Combee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Vespiqueen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Shuckle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Tepig extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Pignite extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Emboar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Wurmple extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
}
export declare class Silcoon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Beautifly extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Cascoon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Dustox extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Tinkatink extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Tinkatuff extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Tinkaton extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Maractus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Plusle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Minun extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Spectrier extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Glastrier extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Kartana extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Dhelmise extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Tropius extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Carnivine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Sableye extends Pokemon {
    types: SetSchema<Synergy>;
    evolutionRule: ItemEvolutionRule;
    evolution: Pkm;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class MegaSableye extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Koffing extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Weezing extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class GalarianWeezing extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Clauncher extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Clawitzer extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Yanma extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Yanmega extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Helioptile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Heliolisk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Exeggcute extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Exeggutor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class AlolanExeggutor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Bidoof extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Bibarel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Spinda extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Baltoy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Claydol extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Purrloin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Liepard extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Pancham extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Pangoro extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Barboach extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Whiscash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Scraggy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Scrafty extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Finneon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Lumineon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Stunky extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Skuntank extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Illumise extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Volbeat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Necrozma extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onChangePosition(x: number, y: number, player: Player, state: GameState): void;
    onItemGiven(item: Item, player: Player): void;
}
export declare class UltraNecrozma extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onChangePosition(x: number, y: number, player: Player, state: GameState): void;
}
export declare class Cherubi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Cherrim extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    onChangePosition(x: number, y: number, player: Player, state: GameState): void;
    onItemGiven(item: Item, player: Player): void;
}
export declare class CherrimSunlight extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    onChangePosition(x: number, y: number, player: Player, state: GameState): void;
}
export declare class Misdreavus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Mismagius extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Doduo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Dodrio extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Kricketot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Kricketune extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Hippopotas extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class Hippodown extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class Ducklett extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Swanna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Wingull extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class Pelipper extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class Murkrow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Honchkrow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Zigzagoon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Linoone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class GalarianZigzagoon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class GalarianLinoone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Obstagoon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Phantump extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Trevenant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Qwilfish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class HisuianQwilfish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: StackBasedEvolutionRule;
    stacksRequired: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class Overqwil extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class Xurkitree extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Nihilego extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Tandemaus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    passive: Passive;
}
export declare class MausholdThree extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    passive: Passive;
}
export declare class MausholdFour extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Morpeko extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class MorpekoHangry extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Minior extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class MiniorKernelBlue extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class MiniorKernelRed extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class MiniorKernelOrange extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class MiniorKernelGreen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Hoopa extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class HoopaUnbound extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Gimmighoul extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    passive: Passive;
}
export declare class Gholdengo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(player: Player): void;
}
export declare class Sobble extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Drizzile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Inteleon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Comfey extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
}
export declare class Lillipup extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Herdier extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Stoutland extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Pheromosa extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Dracovish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Dracozolt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Arctozolt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Arctovish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Bruxish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Corsola extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    regional: boolean;
}
export declare class GalarCorsola extends Pokemon {
    types: SetSchema<Synergy>;
    evolution: Pkm;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Cursola extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Smeargle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onSpawn({ entity }: {
        entity: any;
    }): void;
}
export declare class Toxel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Toxtricity extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Cyclizar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Pawniard extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Bisharp extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Kingambit extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Feebas extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    evolutionRule: CountEvolutionRule;
}
export declare class Milotic extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired(player: Player): void;
}
export declare class Dewpider extends Pokemon {
    types: SetSchema<Synergy>;
    additional: boolean;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Araquanid extends Pokemon {
    types: SetSchema<Synergy>;
    additional: boolean;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Lickitung extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Lickilicky extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Kangaskhan extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Teddiursa extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Ursaring extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Ursaluna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    beforeSimulationStart({ weather, player }: {
        weather: Weather;
        player: Player;
    }): void;
}
export declare class UrsalunaBloodmoon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    beforeSimulationStart({ weather, player }: {
        weather: Weather;
        player: Player;
    }): void;
    onAcquired(player: Player): void;
}
export declare class Aipom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Ambipom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class DeerlingSpring extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    additional: boolean;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class DeerlingSummer extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    additional: boolean;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class DeerlingAutumn extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    additional: boolean;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class DeerlingWinter extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    additional: boolean;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class SawsbuckSpring extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    additional: boolean;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class SawsbuckSummer extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    additional: boolean;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class SawsbuckAutumn extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    additional: boolean;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class SawsbuckWinter extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    additional: boolean;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Patrat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Watchog extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Taillow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Swellow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Spinarak extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Ariados extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Rockruff extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class LycanrocDusk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    beforeSimulationStart({ weather, player }: {
        weather: any;
        player: any;
    }): void;
}
export declare class LycanrocNight extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    beforeSimulationStart({ weather, player }: {
        weather: any;
        player: any;
    }): void;
}
export declare class LycanrocDay extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    beforeSimulationStart({ weather, player }: {
        weather: any;
        player: any;
    }): void;
}
export declare class Druddigon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Cosmog extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    evolutionRule: StackBasedEvolutionRule;
    stacksRequired: number;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Cosmoem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: StackBasedEvolutionRule;
    stacksRequired: number;
    onAcquired(player: Player): void;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Solgaleo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired(player: Player): void;
}
export declare class Lunala extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired(player: Player): void;
}
export declare class Magearna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Impidimp extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Morgrem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Grimmsnarl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Drowzee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Hypno extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Wattrel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class Kilowattrel extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare const burmyDivergentEvolutionRule: (cloakType: Synergy, wormadam: Pkm) => ConditionBasedEvolutionRule;
export declare class BurmyPlant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class BurmySandy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class BurmyTrash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class WormadamPlant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class WormadamSandy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class WormadamTrash extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class Mothim extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Wooper extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Quagsire extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class PaldeaWooper extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class Clodsire extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class Tangela extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Tangrowth extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Phanpy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Donphan extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Spoink extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Grumpig extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Sinistea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Polteageist extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Ferroseed extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Ferrothorn extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Golett extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Golurk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Trubbish extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Garbodor extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Grubbin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Charjabug extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Vikavolt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class ShellosWestSea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class GastrodonWestSea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class ShellosEastSea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class GastrodonEastSea extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Rufflet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Braviary extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Klefki extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Hawlucha extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Stonjourner extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Cramorant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Arrokuda extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Durant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Wishiwashi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    evolutionRule: CountEvolutionRule;
}
export declare class WishiwashiSchool extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired(player: Player): void;
}
export declare class Pawmi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Pawmo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Pawmot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Pyukumuku extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Goldeen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Seaking extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Luvdisc extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Audino extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Petilil extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Lilligant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class HisuianLilligant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Mantyke extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onChangePosition(x: number, y: number, player: Player, state: GameState): void;
}
export declare class Mantine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Remoraid extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onChangePosition(x: number, y: number, player: Player, state: GameState): void;
}
export declare class Octillery extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Sigilyph extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Frigibax extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Arctibax extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Baxcalibur extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Sandile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Krokorok extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Krookodile extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Binacle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Barbaracle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Skarmory extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class OgerponTeal extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired: (player: Player) => void;
    afterSell: (player: Player) => void;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class OgerponTealMask extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    shiny: boolean;
    onAcquired: (player: Player) => void;
    afterSell: (player: Player) => void;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class OgerponWellspring extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired: (player: Player) => void;
    afterSell: (player: Player) => void;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class OgerponWellspringMask extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    shiny: boolean;
    onAcquired: (player: Player) => void;
    afterSell: (player: Player) => void;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class OgerponHearthflame extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired: (player: Player) => void;
    afterSell: (player: Player) => void;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class OgerponHearthflameMask extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    shiny: boolean;
    onAcquired: (player: Player) => void;
    afterSell: (player: Player) => void;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class OgerponCornerstone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired: (player: Player) => void;
    afterSell: (player: Player) => void;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class OgerponCornerstoneMask extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    shiny: boolean;
    onAcquired: (player: Player) => void;
    afterSell: (player: Player) => void;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class IronHands extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Rookidee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Corvisquire extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Corviknight extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Turtonator extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Sandygast extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Palossand extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Skorupi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Drapion extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Darumaka extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Darmanitan extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class DarmanitanZen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class GalarianDarumaka extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class GalarianDarmanitan extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class GalarianDarmanitanZen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    regional: boolean;
    isInRegion(map: DungeonPMDO): boolean;
}
export declare class Krabby extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Kingler extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Zygarde10 extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(player: Player): void;
}
export declare class Zygarde50 extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(player: Player): void;
}
export declare class Zygarde100 extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Sizzlipede extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Centiskorch extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Stufful extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Bewear extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Glimmet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class Glimmora extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class Fletchling extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Fletchinder extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Talonflame extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Vullaby extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Mandibuzz extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Inkay extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Malamar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Timburr extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onChangePosition(x: number, y: number, player: Player, state: GameState): void;
    afterSell(player: any): void;
    afterEvolve(player: any): void;
}
export declare class Gurdurr extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onChangePosition(x: number, y: number, player: Player, state: GameState): void;
    afterSell(player: any): void;
    afterEvolve(player: any): void;
}
export declare class Conkeldurr extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onChangePosition(x: number, y: number, player: Player, state: GameState): void;
    afterSell(player: any): void;
}
export declare class PillarWood extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
    canBeSold: boolean;
}
export declare class PillarIron extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
    canBeSold: boolean;
}
export declare class PillarConcrete extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    canHoldItems: boolean;
    canBeSold: boolean;
}
export declare class Elgyem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Beheeyem extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Litten extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Torracat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Incineroar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Skrelp extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Dragalge extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Cubchoo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Beartic extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Nacli extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Naclstack extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Garganacl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Capsakid extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Scovillain extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Swirlix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Slurpuff extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Gulpin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Swalot extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Fidough extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Dachsbun extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Milcery extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
declare function alcremieOnAcquired(this: IPokemonEntity, player: Player): void;
export declare class AlcremieVanilla extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired: typeof alcremieOnAcquired;
}
export declare class AlcremieRuby extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired: typeof alcremieOnAcquired;
}
export declare class AlcremieMatcha extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired: typeof alcremieOnAcquired;
}
export declare class AlcremieMint extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired: typeof alcremieOnAcquired;
}
export declare class AlcremieLemon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired: typeof alcremieOnAcquired;
}
export declare class AlcremieSalted extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired: typeof alcremieOnAcquired;
}
export declare class AlcremieRubySwirl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired: typeof alcremieOnAcquired;
}
export declare class AlcremieCaramelSwirl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired: typeof alcremieOnAcquired;
}
export declare class AlcremieRainbowSwirl extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired: typeof alcremieOnAcquired;
}
export declare class Pecharunt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Veluza extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Duraludon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Archaludon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Fomantis extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Lurantis extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Charcadet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: ItemEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    afterSell(player: Player): void;
}
export declare class Armarouge extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired: (player: any) => void;
}
export declare class Ceruledge extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired: (player: any) => void;
}
export declare class Tynamo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Eelektrik extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Eelektross extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Pidove extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Tranquill extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Unfezant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state?: GameState): boolean;
}
export declare class Zacian extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    evolutionRule: ItemEvolutionRule;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class ZacianCrowned extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class IronValiant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Grookey extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Thwackey extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Rillaboom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Kubfu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: any;
    stacksRequired: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class UrshifuRapid extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired(player: Player): void;
}
export declare class UrshifuSingle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired(player: Player): void;
}
export declare class ScreamTail extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class IndeedeeFemale extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class IndeedeeMale extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Cottonee extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Whimsicott extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Girafarig extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Farigiraf extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Skitty extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Delcatty extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Glameow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Purugly extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Minccino extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Cinccino extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Espurr extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class MeowsticMale extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class MeowsticFemale extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Okidogi extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Munkidori extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Fezandipiti extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Surskit extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Masquerain extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Gossifleur extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Eldegoss extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Furfrou extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    stacksRequired: number;
}
export declare class Varoom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    passive: Passive;
}
export declare class Revavroom extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    passive: Passive;
}
export declare class Celesteela extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Ledyba extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Ledian extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Emolga extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Drilbur extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Excadrill extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Togedemaru extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Dedenne extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class FalinksBrass extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class FalinksTrooper extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    onAcquired(player: Player): void;
    afterSell(player: Player): void;
}
export declare class Silicobra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Sandaconda extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Dunsparce extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    evolutionRule: ConditionBasedEvolutionRule;
    stacksRequired: number;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Dudunsparse extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Smoliv extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Dolliv extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Arboliva extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Chespin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Quilladin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Chesnaught extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Nymble extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Lokix extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Blipbug extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Dottler extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Orbeetle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Pachirisu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Buzzwole extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Yamask extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Cofagrigus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class GalarianYamask extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Runerigus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    additional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Chewtle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Drednaw extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Greavard extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class Houndstone extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class Clobbopus extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Grapploct extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class ChiYu extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Wimpod extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class Golisopod extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class BasculinRed extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired: (player: Player) => void;
}
export declare class BasculinBlue extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    onAcquired: (player: Player) => void;
}
export declare class BasculinWhite extends Pokemon {
    killCount: number;
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    evolutions: Pkm[];
    evolutionRule: StackBasedEvolutionRule;
    stacksRequired: number;
    onAcquired: (player: Player) => void;
}
export declare class BasculegionMale extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class BasculegionFemale extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Klink extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Klang extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Klinklang extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class FlutterMane extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class WalkingWake extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
    isInRegion(map: DungeonPMDO, state: GameState): boolean;
}
export declare class Orthworm extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class IronThorns extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Tadbulb extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Bellibolt extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Pincurchin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Mudbray extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Mudsdale extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
}
export declare class Skiddo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Gogoat extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Bunnelby extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Diggersby extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Scatterbug extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Spewpa extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolutions: Pkm[];
    evolutionRule: HatchEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Vivillon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonIcySnow extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonPolar extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonTundra extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonContinental extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonGarden extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonElegant extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonModern extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonMarine extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonArchipelago extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonHighPlains extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonSandstorm extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonRiver extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonMonsoon extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonSavanna extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonSun extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonOcean extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonJungle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonFancy extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class VivillonPokeball extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Lechonk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    evolution: Pkm;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class OinkologneMale extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class OinkologneFemale extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Wooloo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    stacksRequired: number;
    additional: boolean;
}
export declare class Dubwool extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    stacksRequired: number;
    additional: boolean;
}
export declare class Yamper extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Boltund extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class GreatTusk extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Finizen extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Palafin extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class PalafinHero extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Mareanie extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Toxapex extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Dondozo extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class TatsugiriCurly extends Pokemon {
    canHoldItems: boolean;
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class TatsugiriDroopy extends Pokemon {
    canHoldItems: boolean;
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class TatsugiriStretchy extends Pokemon {
    canHoldItems: boolean;
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Cetoddle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Cetitan extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    regional: boolean;
}
export declare class Bergmite extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    evolutions: Pkm[];
    evolutionRule: CountEvolutionRule;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Avalugg extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
    passive: Passive;
}
export declare class HisuiAvalugg extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
    additional: boolean;
    regional: boolean;
    isInRegion(map: DungeonPMDO | "town"): boolean;
}
export declare class Karrablast extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Escavalier extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Eiscue extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class EiscueNoice extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Dwebble extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Crustle extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Skwovet extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Greedent extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Quaxly extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Quaxwell extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Quaquaval extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare class Komala extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    passive: Passive;
}
export declare class Tarountula extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    evolution: Pkm;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class Spidops extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
    additional: boolean;
}
export declare class SlitherWing extends Pokemon {
    types: SetSchema<Synergy>;
    rarity: Rarity;
    stars: number;
    hp: number;
    atk: number;
    speed: number;
    def: number;
    speDef: number;
    maxPP: number;
    range: number;
    skill: Ability;
}
export declare const PokemonClasses: Record<Pkm, new (name: Pkm, shiny?: boolean, emotion?: Emotion) => Pokemon>;
export {};
