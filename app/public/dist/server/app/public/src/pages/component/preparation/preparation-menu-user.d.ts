import { IGameUser } from "../../../../../models/colyseus-models/game-user";
import "./preparation-menu-user.css";
export default function PreparationMenuUser(props: {
    key: string;
    user: IGameUser;
    isOwner: boolean;
    ownerId: string;
}): import("react/jsx-runtime").JSX.Element;
