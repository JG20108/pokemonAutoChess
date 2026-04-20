export declare function reverseMap<K, V>(map: Map<K, V>): Map<V, K>;
export declare function mapToObj<K extends string, V>(map: Map<K, V>): Record<K, V>;
export declare function objToMap<K extends string, V>(obj: Record<K, V>): Map<K, V>;
export declare function hasKey<K, V>(map: Map<K, V>, key: any): key is K;
