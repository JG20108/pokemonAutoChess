import type { PatchInfo } from "../../../../../config/game/patches";
import "./patch-summary.css";
interface PatchSummaryProps {
    patch: PatchInfo;
    showHeader?: boolean;
}
export declare const PatchSummary: import("react").MemoExoticComponent<({ patch }: PatchSummaryProps) => import("react/jsx-runtime").JSX.Element>;
export {};
