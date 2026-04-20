import "./checkbox.css";
interface CheckboxProps {
    checked: boolean;
    onToggle?: (value: boolean) => void;
    label: string;
    isDark?: boolean;
    disabled?: boolean;
    title?: string;
}
export declare function Checkbox({ checked, onToggle, label, isDark, disabled, title }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
export {};
