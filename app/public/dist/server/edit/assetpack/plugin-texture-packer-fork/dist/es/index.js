"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pixiTexturePacker = pixiTexturePacker;
exports.texturePacker = texturePacker;
const core_1 = require("@assetpack/core");
const free_tex_packer_core_1 = require("free-tex-packer-core");
const fs_1 = require("fs");
const fs_extra_1 = __importDefault(require("fs-extra"));
const glob_1 = require("glob");
function texturePacker(options) {
    const defaultOptions = {
        tags: Object.assign({ tps: "tps", fix: "fix", jpg: "jpg" }, options === null || options === void 0 ? void 0 : options.tags),
        resolutionOptions: Object.assign({ template: "@%%x", resolutions: { default: 1, low: 0.5 }, fixedResolution: "default", maximumTextureSize: 4096 }, options === null || options === void 0 ? void 0 : options.resolutionOptions),
        texturePacker: Object.assign({ padding: 2, packer: "MaxRectsPacker", packerMethod: "Smart" }, options === null || options === void 0 ? void 0 : options.texturePacker)
    };
    return {
        folder: true,
        name: "texture-packer",
        test(tree, _p, opts) {
            const opt = Object.assign(Object.assign({}, defaultOptions.tags), opts.tags);
            return (0, core_1.hasTag)(tree, "file", opt.tps);
        },
        transform(tree, processor, optionOverrides) {
            return __awaiter(this, void 0, void 0, function* () {
                const tags = Object.assign(Object.assign({}, defaultOptions.tags), optionOverrides.tags);
                const resolutionOptions = Object.assign(Object.assign({}, defaultOptions.resolutionOptions), optionOverrides.resolutionOptions);
                const transformOptions = {
                    tags,
                    resolutionOptions,
                    texturePacker: Object.assign(Object.assign(Object.assign({ textureName: core_1.path.basename(processor.inputToOutput(tree.path)), textureFormat: (0, core_1.hasTag)(tree, "file", tags.jpg) ? "jpg" : "png" }, defaultOptions.texturePacker), {
                        width: resolutionOptions === null || resolutionOptions === void 0 ? void 0 : resolutionOptions.maximumTextureSize,
                        height: resolutionOptions === null || resolutionOptions === void 0 ? void 0 : resolutionOptions.maximumTextureSize
                    }), optionOverrides.texturePacker)
                };
                const largestResolution = Math.max(...Object.values(transformOptions.resolutionOptions.resolutions));
                const resolutionHash = (0, core_1.hasTag)(tree, "path", transformOptions.tags.fix)
                    ? {
                        default: transformOptions.resolutionOptions.resolutions[transformOptions.resolutionOptions.fixedResolution]
                    }
                    : transformOptions.resolutionOptions.resolutions;
                const globPath = `${tree.path}/**/*.{jpg,png,gif}`;
                const files = yield (0, glob_1.glob)(globPath);
                const imagesToPack = files.map((f) => ({
                    path: f,
                    contents: (0, fs_1.readFileSync)(f)
                }));
                if (imagesToPack.length === 0) {
                    return;
                }
                const cacheMap = new Map();
                const front = transformOptions.resolutionOptions.template.split("%%")[0];
                for (const resolution of Object.values(resolutionHash)) {
                    const scale = resolution / largestResolution;
                    const origScale = largestResolution;
                    const template = transformOptions.resolutionOptions.template.replace("%%", resolution.toString());
                    const res = yield (0, free_tex_packer_core_1.packAsync)(imagesToPack, Object.assign(Object.assign({}, transformOptions.texturePacker), { scale }));
                    const out = yield processTPSFiles(res, {
                        inputDir: tree.path,
                        outputDir: processor.inputToOutput(tree.path),
                        template,
                        scale,
                        originalScale: origScale,
                        processor,
                        exporter: transformOptions.texturePacker.exporter
                    });
                    out.forEach((o) => {
                        const oo = o.split(front)[0];
                        if (o.endsWith(".json")) {
                            !cacheMap.get(oo) &&
                                cacheMap.set(oo, {
                                    paths: [],
                                    name: processor.trimOutputPath(`${oo}.json`)
                                });
                            const d = cacheMap.get(oo);
                            d.paths.push(processor.trimOutputPath(o));
                            cacheMap.set(oo, d);
                        }
                        processor.addToTree({
                            tree,
                            outputOptions: {
                                outputPathOverride: o
                            },
                            transformId: "tps",
                            transformData: {
                                prefix: template
                            }
                        });
                    });
                }
                core_1.SavableAssetCache.set(tree.path, {
                    tree,
                    transformData: {
                        type: this.name,
                        prefix: transformOptions.resolutionOptions.template,
                        resolutions: Object.values(resolutionHash),
                        files: [...cacheMap.values()]
                    }
                });
            });
        }
    };
}
function pixiTexturePacker(options) {
    return texturePacker(Object.assign(Object.assign({}, options), { texturePacker: Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.texturePacker), { exporter: "Pixi" }) }));
}
function processTPSFiles(files, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const outputFilePaths = [];
        for (const item of files) {
            const templateName = item.name.replace(/(\.[\w\d_-]+)$/i, `${options.template}$1`);
            const outputDir = options.outputDir;
            fs_extra_1.default.ensureDirSync(outputDir);
            const outputFile = core_1.path.joinSafe(outputDir, templateName);
            if (outputFile.split(".").pop() === "json") {
                const json = JSON.parse(item.buffer.toString("utf8"));
                const normalizedDir = options.inputDir.replace(/\\/g, "/");
                if (options.exporter === "Phaser3") {
                    json.textures[0].frames.forEach((frame, i) => {
                        frame.filename = frame.filename.replace(`${normalizedDir}/`, "");
                    });
                    json.textures[0].image = json.textures[0].image.replace(/(\.[\w\d_-]+)$/i, `${options.template}$1`);
                    json.textures[0].scale *= options.originalScale;
                }
                else {
                    const newFrames = {};
                    for (const i in json.frames) {
                        const frameName = i.replace(`${normalizedDir}/`, "");
                        newFrames[frameName] = json.frames[i];
                    }
                    json.frames = newFrames;
                    json.meta.image = json.meta.image.replace(/(\.[\w\d_-]+)$/i, `${options.template}$1`);
                    json.meta.scale *= options.originalScale;
                }
                options.processor.saveToOutput({
                    tree: undefined,
                    outputOptions: {
                        outputPathOverride: outputFile,
                        outputData: JSON.stringify(json)
                    }
                });
            }
            else {
                options.processor.saveToOutput({
                    tree: undefined,
                    outputOptions: {
                        outputPathOverride: outputFile,
                        outputData: item.buffer
                    }
                });
            }
            outputFilePaths.push(outputFile);
        }
        return outputFilePaths;
    });
}
//# sourceMappingURL=index.js.map