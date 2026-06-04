import type Player from "../models/colyseus-models/player";
import { type IPokemonEntity } from "../types";
import { AttackType, Team } from "../types/enum/Game";
import type { Board, Cell } from "./board";
import type { PokemonEntity } from "./pokemon-entity";
export default abstract class PokemonState {
    name: string;
    attack(pokemon: PokemonEntity, board: Board, target: PokemonEntity | null, isTripleAttack?: boolean): void;
    handleHeal(pokemon: PokemonEntity, heal: number, caster: PokemonEntity, apBoost: number, crit: boolean): {
        healReceived: number;
        overheal: number;
    };
    addShield(pokemon: IPokemonEntity, shield: number, caster: IPokemonEntity, apBoost: number, crit: boolean): void;
    handleDamage({ target: pokemon, damage: incomingDamage, board, attackType, attacker, shouldTargetGainMana, isRetaliation }: {
        target: PokemonEntity;
        damage: number;
        board: Board;
        attackType: AttackType;
        attacker: PokemonEntity | null;
        shouldTargetGainMana: boolean;
        isRetaliation?: boolean;
    }): {
        death: boolean;
        takenDamage: number;
    };
    triggerDeath(pokemon: PokemonEntity, attacker: PokemonEntity | null, board: Board, attackType: AttackType): void;
    updateCommands(pokemon: PokemonEntity, dt: number): void;
    update(pokemon: PokemonEntity, dt: number, board: Board, player: Player | undefined): void;
    updateEachSecond(pokemon: PokemonEntity, board: Board): void;
    onEnter(pokemon: PokemonEntity): void;
    onExit(pokemon: PokemonEntity): void;
    getTargetsAtRange(pokemon: PokemonEntity, board: Board): PokemonEntity[];
    getNearestTargetAtRange(pokemon: PokemonEntity, board: Board): PokemonEntity | undefined;
    getNearestTargetAtSight(pokemon: PokemonEntity, board: Board): {
        x: number;
        y: number;
        target: PokemonEntity;
    } | null;
    getFarthestTarget(pokemon: PokemonEntity, board: Board, targettableBy?: PokemonEntity): PokemonEntity | undefined;
    getNearestAllies(pokemon: PokemonEntity, board: Board): PokemonEntity[];
    getMostSurroundedCoordinateAvailablePlace(team: Team, board: Board): {
        x: number;
        y: number;
    } | undefined;
    getNearestAvailablePlaceCoordinates(pokemon: PokemonEntity, board: Board, maxRange?: number | undefined): Cell | null;
    getTargetWhenConfused(pokemon: PokemonEntity, board: Board): PokemonEntity | undefined;
}
