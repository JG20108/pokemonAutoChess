import type { Synergy } from "../../../../../types/enum/Synergy";
export default function SynergyComponent(props: {
    type: Synergy;
    value: number;
    index: number;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}): import("react/jsx-runtime").JSX.Element;
