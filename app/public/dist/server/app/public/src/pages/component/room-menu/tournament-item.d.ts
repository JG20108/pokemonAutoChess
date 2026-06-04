import type { TournamentPlayerSchema, TournamentSchema } from "../../../../../models/colyseus-models/tournament";
import "./tournament-item.css";
export default function TournamentItem(props: {
    tournament: TournamentSchema;
}): import("react/jsx-runtime").JSX.Element;
export declare function TournamentPlayer(props: {
    playerId: string;
    player: TournamentPlayerSchema;
    rank: number;
    showScore: boolean;
}): import("react/jsx-runtime").JSX.Element;
