#!/usr/bin/env node
declare function executeCommand(command: string, args: string[]): Promise<void>;
declare function promptUser(question: string): Promise<string>;
declare function getAvailablePokemonIndices(): string[];
declare class SpriteSheetProcessor {
    private durations;
    private delays;
    private missing;
    private mapName;
    private pkmIndexes;
    constructor();
    loadDurationsFile(): void;
    loadDelaysFile(): void;
    saveDurationsFile(): void;
    saveDelaysFile(): void;
    private removeBlue;
    private removeRed;
    private zeroPad;
    splitIndex(spriteCollabPath: string, index: string): Promise<void>;
    splitAll(spriteCollabPath: string): Promise<void>;
    saveMissingFiles(): void;
}
declare function minifySheet(id: string): void;
declare function moveFiles(spriteCollabPath: string, pkmIndex: string): void;
declare function updateEmotionsAndCredits(spriteCollabPath: string, indexesToUpdate?: string[]): void;
declare function runTexturePacker(indexToAdd: string): Promise<void>;
declare function runTexturePackerForAll(): Promise<void>;
declare function minifyAllSheets(): void;
declare function moveAllFiles(spriteCollabPath: string): void;
declare function main(): Promise<void>;
export { main, SpriteSheetProcessor, minifySheet, minifyAllSheets, moveFiles, moveAllFiles, updateEmotionsAndCredits, runTexturePacker, runTexturePackerForAll, executeCommand, promptUser, getAvailablePokemonIndices };
