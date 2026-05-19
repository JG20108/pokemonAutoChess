export function pixiTexturePacker(options: any): {
    folder: boolean;
    name: string;
    test(tree: any, _p: any, opts: any): boolean;
    transform(tree: any, processor: any, optionOverrides: any): Promise<void>;
};
export function texturePacker(options: any): {
    folder: boolean;
    name: string;
    test(tree: any, _p: any, opts: any): boolean;
    transform(tree: any, processor: any, optionOverrides: any): Promise<void>;
};
