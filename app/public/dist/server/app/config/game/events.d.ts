import { type GameEvent } from "../../types/events";
export declare const VICTORY_ROAD_MAX_EVENT_POINTS = 500;
export declare const VictoryRoadPointsPerRank: number[];
export declare const TOURNAMENT_REGISTRATION_TIME: number;
export declare const TOURNAMENT_CLEANUP_DELAY: number;
export declare function getGameEventResetDate(): Date;
export declare function getCurrentGameEvent(): GameEvent;
