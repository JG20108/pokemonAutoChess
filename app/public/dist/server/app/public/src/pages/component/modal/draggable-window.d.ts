import type React from "react";
import { type ReactNode } from "react";
import "./draggable-window.css";
interface DraggableWindowProps {
    title: string;
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    defaultMinimized?: boolean;
    initialPosition?: {
        x: number;
        y: number;
    };
    minimizeButtonTitle?: string;
    maximizeButtonTitle?: string;
    onToggleMinimize?: (minimized: boolean) => void;
    onMove?: (position: {
        x: number;
        y: number;
    }) => void;
}
export default function DraggableWindow({ title, children, className, style, defaultMinimized, initialPosition, minimizeButtonTitle, maximizeButtonTitle, onToggleMinimize, onMove }: DraggableWindowProps): import("react/jsx-runtime").JSX.Element;
export {};
