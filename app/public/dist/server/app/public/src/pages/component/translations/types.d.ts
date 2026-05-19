export type TranslationLeaf = string;
export type TranslationNode = {
    [key: string]: TranslationValue;
};
export type TranslationValue = TranslationLeaf | TranslationNode;
export type TranslationMap = {
    [key: string]: TranslationValue;
};
export declare function getNestedValue(obj: TranslationMap, path: string): string;
export declare function applyEditsToObject(base: TranslationMap, edits: Record<string, string>): TranslationMap;
