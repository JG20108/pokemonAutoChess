import type { ITierList } from "../../../../../types/interfaces/TierList";
import "./tier-list.css";
export default function TierList(props: {
    tierList: ITierList;
    onUpdate: (tierList: ITierList) => void;
}): import("react/jsx-runtime").JSX.Element;
