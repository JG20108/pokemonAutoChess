import { Language } from "../../../../../types/enum/Language";
import "./pr-modal.css";
export declare function submitTranslationPR(token: string, lang: Language, langName: string, content: string, onProgress: (msg: string) => void): Promise<string>;
export interface PRModalProps {
    lang: Language;
    langName: string;
    onClose: () => void;
    onSubmit: (token: string) => void;
    progress: string;
    error: string;
    prUrl: string;
    submitting: boolean;
}
export declare function PRModal({ lang, langName, onClose, onSubmit, progress, error, prUrl, submitting }: PRModalProps): import("react/jsx-runtime").JSX.Element;
