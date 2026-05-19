import React from "react";
import "./translation-row.css";
export interface TranslationRowProps {
    path: string;
    leafKey: string;
    enValue: string;
    targetValue: string;
    isEdited: boolean;
    onEdit: (path: string, value: string) => void;
    onRevert: (path: string) => void;
}
export declare const TranslationRow: React.NamedExoticComponent<TranslationRowProps>;
