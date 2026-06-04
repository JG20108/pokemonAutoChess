import type React from "react";
import type { Pokemon } from "../../../../../models/colyseus-models/pokemon";
import { type PokemonCustoms } from "../../../../../models/colyseus-models/pokemon-customs";
import { type Pkm } from "../../../../../types/enum/Pokemon";
import "./game-pokemon-portrait.css";
export declare function getCachedPortrait(index: string, customs?: PokemonCustoms): string;
export default function GamePokemonPortrait(props: {
    index: number;
    origin: "wiki" | "shop" | "proposition" | "team" | "planner" | "battle";
    pokemon: Pokemon | Pkm | undefined;
    click?: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    inPlanner?: boolean;
}): import("react/jsx-runtime").JSX.Element;
