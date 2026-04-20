import { BoosterCard } from "../../../../../types/Booster";
import "./booster-card.css";
interface BoosterCardProps {
    card: BoosterCard;
    flipped: boolean;
    onFlip: () => void;
}
export declare function BoosterCard({ card, flipped, onFlip }: BoosterCardProps): import("react/jsx-runtime").JSX.Element;
export {};
