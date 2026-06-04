export type Node = {
    x: number;
    y: number;
    g: number;
    h: number;
    f: number;
    parent?: Node;
};
export declare const getHeuristic: (a: Node, b: Node) => number;
export declare const getNeighbors: (node: Node, grid: number[][]) => Node[];
export declare const findPath: (pokemonCoordinates: {
    x: number;
    y: number;
}[], start: [number, number], goal: [number, number]) => [number, number][];
