import { type RefObject } from "react";
interface Position {
    x: number;
    y: number;
}
interface UseDraggableOptions {
    initialPosition?: Position;
    containerRef?: RefObject<HTMLElement>;
    margin?: number;
}
interface UseDraggableReturn {
    position: Position;
    isDragging: boolean;
    handlePointerDown: (e: React.PointerEvent, ignoreSelector?: string) => void;
    containerRef: RefObject<HTMLDivElement | null>;
}
export declare function useDraggable(options?: UseDraggableOptions): UseDraggableReturn;
export {};
