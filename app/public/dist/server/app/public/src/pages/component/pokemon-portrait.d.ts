import React from "react";
import { Emotion } from "../../../../types";
export interface PortraitOptions {
    index: string;
    shiny?: boolean;
    emotion?: Emotion;
}
type Props = ({
    avatar: string;
} | {
    portrait: string | PortraitOptions;
}) & React.ImgHTMLAttributes<HTMLImageElement>;
export default function PokemonPortrait(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
