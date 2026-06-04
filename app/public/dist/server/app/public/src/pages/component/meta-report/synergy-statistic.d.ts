import type { Synergy } from "../../../../../types/enum/Synergy";
interface SynergyData {
    name: Synergy;
    count: number;
    average_rank: number;
}
export default function SynergyStatistic(props: {
    synergies: SynergyData[];
    rankingBy: string;
}): import("react/jsx-runtime").JSX.Element;
export {};
