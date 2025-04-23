import { Orientation, PokemonActionState } from "../../../../types/enum/Game";
import { Pkm } from "../../../../types/enum/Pokemon";
import GameScene from "../scenes/game-scene";
import PokemonSprite from "./pokemon";
import { GameDialog } from "./game-dialog";
export default class PokemonSpecial extends PokemonSprite {
    detail: GameDialog | null;
    scene: GameScene;
    dialog?: string;
    dialogTitle?: string;
    constructor({ scene, x, y, name, orientation, animation, dialog, dialogTitle, shiny }: {
        scene: GameScene;
        x: number;
        y: number;
        name: Pkm;
        orientation?: Orientation;
        animation?: PokemonActionState;
        dialog?: string;
        dialogTitle?: string;
        shiny?: boolean;
    });
    onPointerDown(pointer: any, event: any): void;
    openDetail(): void;
    updateTooltipPosition(): void;
}
