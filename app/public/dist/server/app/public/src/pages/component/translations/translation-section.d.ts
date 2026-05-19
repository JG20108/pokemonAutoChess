import React from "react";
import type { TranslationNode } from "./types";
import "./translation-section.css";
export interface TranslationSectionProps {
    path: string;
    label: string;
    enObj: TranslationNode;
    collapsedSections: Set<string>;
    toggleSection: (path: string) => void;
    edits: Record<string, string>;
    getTargetValue: (path: string) => string;
    onEdit: (path: string, value: string) => void;
    onRevert: (path: string) => void;
    depth: number;
    translatedCount: number;
    missingCount: number;
    totalCount: number;
}
export declare const TranslationSection: React.NamedExoticComponent<TranslationSectionProps>;
