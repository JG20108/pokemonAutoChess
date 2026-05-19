import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
interface Props {
    uiConfig: firebaseui.auth.Config;
    uiCallback?(ui: firebaseui.auth.AuthUI): void;
    firebaseAuth: any;
    className?: string;
}
export declare const StyledFirebaseAuth: ({ uiConfig, firebaseAuth, className, uiCallback }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
