import { ILeaderboardBotInfo, ILeaderboardInfo } from "../../../../../types/interfaces/LeaderboardInfo";
export default function LeaderboardItem(props: {
    item: ILeaderboardInfo | ILeaderboardBotInfo;
    isBot: boolean;
    noElo: boolean | undefined;
}): import("react/jsx-runtime").JSX.Element;
