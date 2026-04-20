import GameContainer from "../game/game-container";
import GameScene from "../game/scenes/game-scene";
export declare function getGameScene(): GameScene | undefined;
export declare function getGameContainer(): GameContainer;
export declare function cyclePlayers(amt: number): void;
export declare function playerClick(id: string): void;
export default function Game(): import("react/jsx-runtime").JSX.Element;
