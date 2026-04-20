import React from "react";
import "./modal.css";
interface ModalProps {
    show: boolean;
    onClose?: () => boolean | void;
    className?: string;
    header?: React.ReactElement | string;
    body?: React.ReactElement | string;
    footer?: React.ReactElement;
    children?: React.ReactElement | React.ReactElement[];
    confirmText?: string;
}
export declare function Modal(props: ModalProps): React.ReactPortal | null;
export {};
