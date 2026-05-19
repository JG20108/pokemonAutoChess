import { ArraySchema, CollectionSchema, MapSchema, SetSchema } from "@colyseus/schema";
export declare function schemaKeys(schema: MapSchema): string[];
export declare function schemaValues<T>(schema: MapSchema<T> | SetSchema<T> | CollectionSchema<T> | ArraySchema<T>): T[];
export declare function schemaEntries<V, K extends string>(schema: MapSchema<V, K>): [K, V][];
export declare function resetArraySchema<T>(schema: ArraySchema<T>, newArray: T[] | ArraySchema<T>): void;
export declare function convertSchemaToRawObject(schema: any): any;
