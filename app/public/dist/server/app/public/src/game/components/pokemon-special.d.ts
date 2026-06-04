import type { Emotion } from "../../../../types";
import { Orientation, PokemonActionState } from "../../../../types/enum/Game";
import type { Pkm } from "../../../../types/enum/Pokemon";
import type GameScene from "../scenes/game-scene";
import { GameDialog } from "./game-dialog";
import PokemonSprite from "./pokemon";
export default class PokemonSpecial extends PokemonSprite {
    detail: GameDialog | null;
    scene: GameScene;
    dialog?: string;
    dialogTitle?: string;
    constructor({ scene, x, y, name, orientation, animation, dialog, dialogTitle, emotion, shiny }: {
        scene: GameScene;
        x: number;
        y: number;
        name: Pkm;
        orientation?: Orientation;
        animation?: PokemonActionState;
        dialog?: string;
        dialogTitle?: string;
        emotion?: Emotion;
        shiny?: boolean;
    });
    onPointerDown(pointer: any, event: any): void;
    openDetail(): void;
}
