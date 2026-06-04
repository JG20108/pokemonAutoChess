import type React from "react";
import "./game-tooltip-bar.css";
type BarType = "HP_ALLY" | "HP_ENEMY" | "PP" | "XP";
interface GameTooltipBarProps {
    value: number | undefined;
    maxValue: number;
    extraValue?: number;
    type: BarType;
    graduationStep?: number;
}
export declare const GameTooltipBar: React.FC<GameTooltipBarProps>;
export default GameTooltipBar;
