import { Orientation } from "../types/enum/Game";
export declare const OrientationVector: Record<Orientation, [number, number]>;
export declare const OrientationAngle: Record<Orientation, number>;
export declare const OrientationArray: Orientation[];
export declare function getOrientation(x1: number, y1: number, x2: number, y2: number): Orientation;
