import { Command } from "@colyseus/command";
import { type Client } from "colyseus";
import { type IPlayer } from "../../types";
import type CustomLobbyRoom from "../custom-lobby-room";
export declare class OnCreateTournamentCommand extends Command<CustomLobbyRoom, {
    client: Client;
    name: string;
    startDate: string;
}> {
    execute({ client, name, startDate }: {
        client: Client;
        name: string;
        startDate: string;
    }): Promise<void>;
}
export declare class DeleteTournamentCommand extends Command<CustomLobbyRoom, {
    client: Client;
    tournamentId: string;
}> {
    execute({ client, tournamentId }: {
        client: Client;
        tournamentId: string;
    }): void;
}
export declare class ParticipateInTournamentCommand extends Command<CustomLobbyRoom, {
    client: Client;
    tournamentId: string;
    participate: boolean;
}> {
    execute({ client, tournamentId, participate }: {
        client: Client;
        tournamentId: string;
        participate: boolean;
    }): Promise<void>;
}
export declare class NextTournamentStageCommand extends Command<CustomLobbyRoom, {
    tournamentId: string;
}> {
    execute({ tournamentId }: {
        tournamentId: string;
    }): Promise<void | EndTournamentCommand[]>;
}
export declare class CreateTournamentLobbiesCommand extends Command<CustomLobbyRoom, {
    client?: Client;
    tournamentId: string;
}> {
    execute({ tournamentId, client }: {
        tournamentId: string;
        client?: Client;
    }): Promise<void>;
}
export declare class RemakeTournamentLobbyCommand extends Command<CustomLobbyRoom, {
    client?: Client;
    tournamentId: string;
    bracketId: string;
}> {
    execute({ tournamentId, bracketId, client }: {
        tournamentId: string;
        bracketId: string;
        client?: Client;
    }): Promise<void>;
}
export declare class EndTournamentMatchCommand extends Command<CustomLobbyRoom, {
    tournamentId: string;
    bracketId: string;
    players: {
        id: string;
        rank: number;
    }[];
}> {
    execute({ tournamentId, bracketId, players }: {
        tournamentId: string;
        bracketId: string;
        players: IPlayer[];
    }): Promise<void | NextTournamentStageCommand[]>;
}
export declare class EndTournamentCommand extends Command<CustomLobbyRoom, {
    tournamentId: string;
}> {
    execute({ tournamentId }: {
        tournamentId: string;
    }): Promise<void>;
}
