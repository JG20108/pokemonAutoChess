'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var core = require('@assetpack/core');
var freeTexPackerCore = require('free-tex-packer-core');
var fs = require('fs');
var fs$1 = require('fs-extra');
var { glob } = require('glob');
function texturePacker(options) {
    const defaultOptions = {
        tags: Object.assign({ tps: 'tps', fix: 'fix', jpg: 'jpg' }, options === null || options === void 0 ? void 0 : options.tags),
        resolutionOptions: Object.assign({ template: '@%%x', resolutions: { default: 1, low: 0.5 }, fixedResolution: 'default', maximumTextureSize: 4096 }, options === null || options === void 0 ? void 0 : options.resolutionOptions),
        texturePacker: Object.assign({ padding: 2, packer: 'MaxRectsPacker', packerMethod: 'Smart' }, options === null || options === void 0 ? void 0 : options.texturePacker)
    };
    return {
        folder: true,
        name: 'texture-packer',
        test(tree, _p, opts) {
            const opt = Object.assign(Object.assign({}, defaultOptions.tags), opts.tags);
            return core.hasTag(tree, 'file', opt.tps);
        },
        transform(tree, processor, optionOverrides) {
            return __awaiter(this, void 0, void 0, function* () {
                const tags = Object.assign(Object.assign({}, defaultOptions.tags), optionOverrides.tags);
                const resolutionOptions = Object.assign(Object.assign({}, defaultOptions.resolutionOptions), optionOverrides.resolutionOptions);
                const transformOptions = {
                    tags,
                    resolutionOptions,
                    texturePacker: Object.assign(Object.assign(Object.assign({ textureName: core.path.basename(processor.inputToOutput(tree.path)), textureFormat: (core.hasTag(tree, 'file', tags.jpg) ? 'jpg' : 'png') }, defaultOptions.texturePacker), {
                        width: resolutionOptions === null || resolutionOptions === void 0 ? void 0 : resolutionOptions.maximumTextureSize,
                        height: resolutionOptions === null || resolutionOptions === void 0 ? void 0 : resolutionOptions.maximumTextureSize,
                    }), optionOverrides.texturePacker),
                };
                const largestResolution = Math.max(...Object.values(transformOptions.resolutionOptions.resolutions));
                const resolutionHash = core.hasTag(tree, 'path', transformOptions.tags.fix)
                    ? {
                        default: transformOptions.resolutionOptions.resolutions[transformOptions.resolutionOptions.fixedResolution]
                    }
                    : transformOptions.resolutionOptions.resolutions;
                const globPath = `${tree.path}/**/*.{jpg,png,gif}`;
                const files = yield glob(globPath);
                const imagesToPack = files.map((f) => ({ path: f, contents: fs.readFileSync(f) }));
                if (imagesToPack.length === 0) {
                    return;
                }
                const cacheMap = new Map();
                const front = transformOptions.resolutionOptions.template.split('%%')[0];
                for (const resolution of Object.values(resolutionHash)) {
                    const scale = resolution / largestResolution;
                    const origScale = largestResolution;
                    const template = transformOptions.resolutionOptions.template.replace('%%', resolution.toString());
                    const res = yield freeTexPackerCore.packAsync(imagesToPack, Object.assign(Object.assign({}, transformOptions.texturePacker), { scale }));
                    const out = yield processTPSFiles(res, {
                        inputDir: tree.path,
                        outputDir: processor.inputToOutput(tree.path),
                        template,
                        scale,
                        originalScale: origScale,
                        processor,
                    });
                    out.forEach((o) => {
                        const oo = o.split(front)[0];
                        if (o.endsWith('.json')) {
                            !cacheMap.get(oo) && cacheMap.set(oo, { paths: [], name: processor.trimOutputPath(`${oo}.json`) });
                            const d = cacheMap.get(oo);
                            d.paths.push(processor.trimOutputPath(o));
                            cacheMap.set(oo, d);
                        }
                        processor.addToTree({
                            tree,
                            outputOptions: {
                                outputPathOverride: o,
                            },
                            transformId: 'tps',
                            transformData: {
                                prefix: template,
                            }
                        });
                    });
                }
                core.SavableAssetCache.set(tree.path, {
                    tree,
                    transformData: {
                        type: this.name,
                        prefix: transformOptions.resolutionOptions.template,
                        resolutions: Object.values(resolutionHash),
                        files: [...cacheMap.values()],
                    }
                });
            });
        },
    };
}
function pixiTexturePacker(options) {
    return texturePacker(Object.assign(Object.assign({}, options), { texturePacker: Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.texturePacker), { exporter: 'Pixi' }) }));
}
function processTPSFiles(files, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const outputFilePaths = [];
        for (const item of files) {
            const templateName = item.name.replace(/(\.[\w\d_-]+)$/i, `${options.template}$1`);
            const outputDir = options.outputDir;
            fs$1.ensureDirSync(outputDir);
            const outputFile = core.path.joinSafe(outputDir, templateName);
            if (outputFile.split('.').pop() === 'json') {
                const json = JSON.parse(item.buffer.toString('utf8'));
                const newFrames = {};
                for (const i in json.frames) {
                    const normalizedDir = options.inputDir.replace(/\\/g, '/');
                    const frameName = i.replace(`${normalizedDir}/`, '');
                    newFrames[frameName] = json.frames[i];
                }
                json.frames = newFrames;
                json.meta.image = json.meta.image.replace(/(\.[\w\d_-]+)$/i, `${options.template}$1`);
                json.meta.scale *= options.originalScale;
                options.processor.saveToOutput({
                    tree: undefined,
                    outputOptions: {
                        outputPathOverride: outputFile,
                        outputData: JSON.stringify(json),
                    }
                });
            }
            else {
                options.processor.saveToOutput({
                    tree: undefined,
                    outputOptions: {
                        outputPathOverride: outputFile,
                        outputData: item.buffer,
                    }
                });
            }
            outputFilePaths.push(outputFile);
        }
        return outputFilePaths;
    });
}
exports.pixiTexturePacker = pixiTexturePacker;
exports.texturePacker = texturePacker;
//# sourceMappingURL=index.js.map