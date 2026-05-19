export type Keybindings = {
    sell: string;
    buy_xp: string;
    refresh: string;
    lock: string;
    camera_lock: string;
    switch: string;
    emote: string;
    prev_player: string;
    next_player: string;
    board_return: string;
    wiki: string;
    team_planner: string;
    meta_report: string;
};
export interface IPreferencesState {
    musicVolume: number;
    sfxVolume: number;
    playInBackground: boolean;
    showDpsMeter: boolean;
    dpsMeterPosition: {
        x: number;
        y: number;
    };
    synergiesPosition: {
        x: number;
        y: number;
    };
    expeditionsPosition: {
        x: number;
        y: number;
    };
    showDetailsOnHover: boolean;
    showDamageNumbers: boolean;
    showEvolutions: boolean;
    showAltForms: boolean;
    showRegularPool: boolean;
    showAdditionalPool: boolean;
    showRegionalPool: boolean;
    showSpecialPool: boolean;
    filterAvailableAddsAndRegionals: boolean;
    disableAnimatedTilemap: boolean;
    disableCameraShake: boolean;
    cameraLocked: boolean;
    keybindings: Keybindings;
    renderer: number;
    antialiasing: boolean;
    colorblindMode: boolean;
    theme: string;
}
export type PreferenceKey = keyof IPreferencesState;
type Subscription = (newPreferences: IPreferencesState) => void;
export declare function subscribeToPreferences(fn: Subscription, runInitially?: boolean): () => void;
export declare function subscribeToPreference<T extends keyof IPreferencesState>(key: T, fn: (newValue: IPreferencesState[T]) => void, runInitially?: boolean): () => void;
export declare function unsubscribeToPreferences(fn: Subscription): void;
export declare function preference<T extends keyof IPreferencesState>(key: T): IPreferencesState[T];
export declare function savePreferences(modified: Partial<IPreferencesState> | ((old: IPreferencesState) => Partial<IPreferencesState>)): void;
export declare function usePreferences(): [IPreferencesState, typeof savePreferences];
export declare function usePreference<T extends keyof IPreferencesState>(key: T): [
    IPreferencesState[T],
    (set: IPreferencesState[T] | ((old: IPreferencesState[T]) => IPreferencesState[T])) => void
];
export {};
