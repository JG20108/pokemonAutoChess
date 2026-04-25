interface SpriteGapEntry {
    index: string;
    monsterName: string;
    formName: string;
    displayName: string;
    formPath: string;
    portraitUrl?: string;
    isShiny: boolean;
    hasPortrait: boolean;
    hasSprite: boolean;
    canon: boolean;
}
export interface SpriteGapScannerResult {
    spriteOnly: SpriteGapEntry[];
    stats: {
        totalSpriteCollab: number;
        lastRefresh: number;
        refreshDurationMs: number;
    };
}
export declare function refreshSpriteGapData(): void;
export declare function getCachedSpriteGapData(): SpriteGapScannerResult;
export declare function warmupSpriteGapScanner(): Promise<void>;
export {};
