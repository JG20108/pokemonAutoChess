export type Keybindings = {
    sell: string;
    buy_xp: string;
    refresh: string;
    lock: string;
    switch: string;
    emote: string;
};
export interface IPreferencesState {
    musicVolume: number;
    sfxVolume: number;
    playInBackground: boolean;
    showDpsMeter: boolean;
    showDetailsOnHover: boolean;
    showDamageNumbers: boolean;
    showEvolutions: boolean;
    filterAvailableAddsAndRegionals: boolean;
    disableAnimatedTilemap: boolean;
    keybindings: Keybindings;
    renderer: number;
    antialiasing: boolean;
}
type Subscription = (newPreferences: IPreferencesState) => void;
export declare function subscribeToPreferences(fn: Subscription, runInitially?: boolean): () => void;
export declare function unsubscribeToPreferences(fn: Subscription): void;
export declare function preference<T extends keyof IPreferencesState>(key: T): IPreferencesState[T];
export declare function savePreferences(modified: Partial<IPreferencesState> | ((old: IPreferencesState) => Partial<IPreferencesState>)): void;
export declare function usePreferences(): [IPreferencesState, typeof savePreferences];
export declare function usePreference<T extends keyof IPreferencesState>(key: T): [
    IPreferencesState[T],
    (set: IPreferencesState[T] | ((old: IPreferencesState[T]) => IPreferencesState[T])) => void
];
export {};
