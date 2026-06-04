import { type PokemonAnimationConfig } from "../../../../types/Animation";
import { Pkm } from "../../../../types/enum/Pokemon";
export declare const DEFAULT_POKEMON_ANIMATION_CONFIG: Required<PokemonAnimationConfig>;
export declare const PokemonAnimations: {
    [key in Pkm]: PokemonAnimationConfig;
};
