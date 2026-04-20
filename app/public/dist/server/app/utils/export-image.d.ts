export interface ExportImageOptions {
    selector: string;
    excludeSelector?: string;
    foregroundColor?: string;
    backgroundColor?: string;
    scale?: number;
    quality?: number;
    filename?: string;
    preferClipboard?: boolean;
}
export declare function exportElementAsImage(options: ExportImageOptions): Promise<void>;
