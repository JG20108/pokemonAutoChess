import { PkmWithCustom } from "../../../../../types";
import "./booster-card.css";
interface BoosterCardProps {
    pkm: PkmWithCustom;
    shards: number;
    flipped: boolean;
    onFlip: () => void;
}
export declare function BoosterCard({ pkm, shards, flipped, onFlip }: BoosterCardProps): import("react/jsx-runtime").JSX.Element;
export {};
