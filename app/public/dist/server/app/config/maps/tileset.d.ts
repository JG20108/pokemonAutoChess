export declare const MaskCoordinate: {
    [key in Mask]: {
        x: number;
        y: number;
    };
};
export declare enum Mask {
    X = "X",
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    AB = "AB",
    AC = "AC",
    AD = "AD",
    BC = "BC",
    BD = "BD",
    CD = "CD",
    ABC = "ABC",
    ABD = "ABD",
    ACD = "ACD",
    BCD = "BCD",
    ABCD = "ABCD",
    A1B = "A1B",
    B2C = "B2C",
    C3D = "C3D",
    AD4 = "AD4",
    A1BC = "A1BC",
    AB2C = "AB2C",
    B2CD = "B2CD",
    BC3D = "BC3D",
    AC3D = "AC3D",
    ACD4 = "ACD4",
    A1BD = "A1BD",
    ABD4 = "ABD4",
    A1B2C = "A1B2C",
    B2C3D = "B2C3D",
    AC3D4 = "AC3D4",
    A1BD4 = "A1BD4",
    A1BCD = "A1BCD",
    AB2CD = "AB2CD",
    ABC3D = "ABC3D",
    ABCD4 = "ABCD4",
    A1B2CD = "A1B2CD",
    AB2C3D = "AB2C3D",
    ABC3D4 = "ABC3D4",
    A1BCD4 = "A1BCD4",
    A1B2C3D = "A1B2C3D",
    AB2C3D4 = "AB2C3D4",
    A1BC3D4 = "A1BC3D4",
    A1B2CD4 = "A1B2CD4",
    A1BC3D = "A1BC3D",
    AB2CD4 = "AB2CD4",
    A1B2C3D4 = "A1B2C3D4"
}
export declare enum TerrainType {
    WALL = 0,
    WATER = 1,
    GROUND = 2
}
export declare const IdTable: {
    [key: number]: Mask;
};
export type TilesetExchangeFile = {
    tileset_0: DtefTileset | undefined;
    tileset_1: DtefTileset | undefined;
    tileset_2: DtefTileset | undefined;
};
export type DtefTileset = {
    static: StaticFrame;
    animation: AnimatedFrame[];
};
export type StaticFrame = {
    firstgid: number;
    name: string;
    maskDefinition: MaskDefinition;
};
export type MaskDefinition = {
    [TerrainType.GROUND]: Mask[];
    [TerrainType.WALL]: Mask[];
    [TerrainType.WATER]: Mask[];
};
export type AnimatedFrame = {
    frameDuration: number;
    numberOfFrames: number;
    name: string;
    maskDefinition: MaskDefinition;
    firstgid: number;
};
export declare const DTEF_WIDTH = 144;
export declare const DTEF_HEIGHT = 192;
export declare const DTEF_TILESET_WIDTH = 6;
export declare const DTEF_TILESET_HEIGHT = 8;
export declare const DTEF_TILESET_TILE_WIDTH = 24;
