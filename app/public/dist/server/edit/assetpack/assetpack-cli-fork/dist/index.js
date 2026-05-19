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
const chalk_1 = __importDefault(require("chalk"));
const commander_1 = require("commander");
const find_up_1 = require("find-up");
const path_1 = __importDefault(require("path"));
const url_1 = require("url");
const module_1 = require("module");
const require = (0, module_1.createRequire)(import.meta.url);
const program = new commander_1.Command();
program.description("Our New CLI");
program.version("0.2.0");
program.option("-c, --config <path>", "config file to use");
program.option("-w, --watch", "watch for changes");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield program.parseAsync();
        const options = program.opts();
        const configPath = options.config
            ? path_1.default.resolve(process.cwd(), options.config)
            : yield (0, find_up_1.findUp)(".assetpack.js", { cwd: process.cwd() });
        if (!configPath) {
            logEvent({
                message: "No config file found",
                level: "error"
            });
            process.exit(1);
        }
        let config;
        let AssetPack;
        try {
            config = require(configPath);
            if (config.default)
                config = config.default;
            AssetPack = require("@assetpack/core").AssetPack;
        }
        catch (error) {
            if (error.code === "ERR_REQUIRE_ESM") {
                const esmLoader = dynamicImportLoader();
                const urlForConfig = (0, url_1.pathToFileURL)(configPath);
                config = (yield esmLoader(urlForConfig)).default;
                AssetPack = (yield esmLoader("@assetpack/core")).AssetPack;
            }
            else {
                logEvent({
                    message: error.message,
                    level: "error"
                });
                process.exit(1);
            }
        }
        if (!config) {
            logEvent({
                message: "Config file found, but could not be read",
                level: "error"
            });
            process.exit(1);
        }
        const assetpack = new AssetPack(config);
        if (options.watch) {
            yield assetpack.watch();
        }
        else {
            yield assetpack.run();
        }
    });
}
function logEvent(event) {
    switch (event.level) {
        case "verbose":
        case "info":
            console.log(`${chalk_1.default.blue.bold("›")} Info: ${chalk_1.default.blue.bold(event.message)}`);
            break;
        case "warn":
            console.log(`${chalk_1.default.yellow.bold("›")} Warn: ${chalk_1.default.yellow.bold(event.message)}`);
            break;
        case "error":
            console.log(`${chalk_1.default.red.bold("›")} Error: ${chalk_1.default.red.bold(event.message)}`);
            process.exit(1);
            break;
        default:
            throw new Error(`Unknown log level ${event.level}`);
    }
}
function dynamicImportLoader() {
    let importESM;
    try {
        importESM = new Function("id", "return import(id);");
    }
    catch (e) {
        importESM = null;
    }
    return importESM;
}
main();
//# sourceMappingURL=index.js.map