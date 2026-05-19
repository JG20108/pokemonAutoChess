import { Language } from "../../../../../types/enum/Language";
import "./translation-toolbar.css";
export interface TranslationToolbarProps {
    targetLang: Language;
    filterMode: "all" | "missing" | "translated" | "edited";
    search: string;
    translatedCount: number;
    totalCount: number;
    editedCount: number;
    onLangChange: (lang: Language) => void;
    onFilterChange: (mode: "all" | "missing" | "translated" | "edited") => void;
    onSearch: (q: string) => void;
    onCollapseAll: () => void;
    onExpandAll: () => void;
}
export declare function TranslationToolbar({ targetLang, filterMode, search, translatedCount, totalCount, editedCount, onLangChange, onFilterChange, onSearch, onCollapseAll, onExpandAll }: TranslationToolbarProps): import("react/jsx-runtime").JSX.Element;
