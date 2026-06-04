import type { ILeaderboardBotInfo, ILeaderboardInfo } from "../../../../../types/interfaces/LeaderboardInfo";
export default function Leaderboard(props: {
    isBot: boolean;
    infos: ILeaderboardInfo[] | ILeaderboardBotInfo[];
    noElo: boolean | undefined;
}): import("react/jsx-runtime").JSX.Element;
