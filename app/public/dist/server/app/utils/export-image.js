"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportElementAsImage = exportElementAsImage;
function convertSvgsToPng(element) {
    return __awaiter(this, void 0, void 0, function* () {
        const svgImages = element.querySelectorAll('img[src$=".svg"]');
        const conversionPromises = Array.from(svgImages).map((img) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const computedStyle = window.getComputedStyle(img);
                const width = parseInt(computedStyle.width) || img.offsetWidth || 48;
                const height = parseInt(computedStyle.height) || img.offsetHeight || 48;
                const response = yield fetch(img.src);
                if (!response.ok)
                    throw new Error("Failed to fetch SVG");
                const svgText = yield response.text();
                const svgBlob = new Blob([svgText], { type: "image/svg+xml" });
                const svgUrl = URL.createObjectURL(svgBlob);
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                if (!ctx)
                    return;
                const scale = 2;
                canvas.width = width * scale;
                canvas.height = height * scale;
                const svgImg = new Image();
                yield new Promise((resolve, reject) => {
                    svgImg.onload = () => {
                        ctx.drawImage(svgImg, 0, 0, canvas.width, canvas.height);
                        resolve();
                    };
                    svgImg.onerror = () => reject(new Error("Failed to load SVG"));
                    svgImg.src = svgUrl;
                });
                const newImg = document.createElement("img");
                newImg.src = canvas.toDataURL("image/png");
                newImg.style.width = `${width}px`;
                newImg.style.height = `${height}px`;
                newImg.className = img.className;
                newImg.alt = img.alt;
                Array.from(img.attributes).forEach((attr) => {
                    if (!["src", "width", "height"].includes(attr.name)) {
                        newImg.setAttribute(attr.name, attr.value);
                    }
                });
                (_a = img.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(newImg, img);
                URL.revokeObjectURL(svgUrl);
            }
            catch (error) {
                console.warn("Failed to convert SVG to PNG:", img.src, error);
                if (!img.width && !img.height) {
                    img.style.width = "48px";
                    img.style.height = "48px";
                }
            }
        }));
        yield Promise.allSettled(conversionPromises);
    });
}
function exportElementAsImage(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { selector, excludeSelector, foregroundColor = "#ffffff", backgroundColor = "#1a1a1a", scale = 2, quality = 0.95, filename = "export", preferClipboard = true } = options;
        const targetElement = document.querySelector(selector);
        if (!targetElement) {
            throw new Error(`Element with selector "${selector}" not found`);
        }
        try {
            const clonedElement = targetElement.cloneNode(true);
            if (excludeSelector) {
                const excludedElements = clonedElement.querySelectorAll(excludeSelector);
                excludedElements.forEach((el) => el.remove());
            }
            yield convertSvgsToPng(clonedElement);
            const tempContainer = document.createElement("div");
            tempContainer.style.position = "absolute";
            tempContainer.style.left = "-9999px";
            tempContainer.style.top = "-9999px";
            tempContainer.style.background = backgroundColor;
            tempContainer.style.padding = "20px";
            tempContainer.style.color = foregroundColor;
            tempContainer.appendChild(clonedElement);
            document.body.appendChild(tempContainer);
            const html2canvas = (yield Promise.resolve().then(() => __importStar(require("html2canvas")))).default;
            const canvas = yield html2canvas(clonedElement, {
                backgroundColor,
                scale,
                useCORS: true,
                allowTaint: true
            });
            yield new Promise((resolve) => {
                canvas.toBlob((blob) => __awaiter(this, void 0, void 0, function* () {
                    if (blob) {
                        if (preferClipboard) {
                            try {
                                yield navigator.clipboard.write([
                                    new ClipboardItem({ "image/png": blob })
                                ]);
                                alert("Image copied to clipboard!");
                            }
                            catch (err) {
                                console.error("Clipboard write failed:", err);
                                downloadBlob(blob, filename);
                            }
                            resolve();
                        }
                        else {
                            downloadBlob(blob, filename);
                        }
                    }
                }), "image/png", quality);
            });
            document.body.removeChild(tempContainer);
        }
        catch (error) {
            console.error("Error capturing element:", error);
            throw new Error("Failed to capture element as image");
        }
    });
}
function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename.replace(/[^a-z0-9]/gi, "_")}.png`;
    a.click();
    URL.revokeObjectURL(url);
}
//# sourceMappingURL=export-image.js.map