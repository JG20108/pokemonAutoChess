import "./main-sidebar.css";
export type Page = "main_lobby" | "preparation" | "game";
interface MainSidebarProps {
    page: Page;
    leave: () => void;
    leaveLabel: string;
}
export declare function MainSidebar(props: MainSidebarProps): import("react/jsx-runtime").JSX.Element;
export type Modals = "announcement" | "booster" | "moderation" | "admin" | "collection" | "jukebox" | "keybinds" | "meta" | "news" | "options" | "pokeguesser" | "profile" | "servers" | "sprite-tracker" | "synergy-wheel" | "team-builder" | "tier-list" | "wiki";
export {};
