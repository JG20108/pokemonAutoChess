export declare function keys<T extends object>(obj: T): (keyof T)[];
export declare function values<T extends object>(obj: T): T[keyof T][];
export declare function entries<T extends object, K extends keyof T>(obj: T): [K, T[K]][];
export declare function invertKeysValues<T extends Record<string, string>>(obj: T): Record<T[keyof T], keyof T>;
