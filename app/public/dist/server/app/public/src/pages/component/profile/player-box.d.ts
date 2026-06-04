import type { IGameRecord } from "../../../../../models/colyseus-models/game-record";
import type { IUserMetadataClient, IUserMetadataUnpacked } from "../../../../../types/interfaces/UserMetadata";
export default function PlayerBox(props: {
    user: IUserMetadataClient | IUserMetadataUnpacked;
    history?: IGameRecord[];
}): import("react/jsx-runtime").JSX.Element;
