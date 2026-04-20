#!/usr/bin/env node
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpriteSheetProcessor = void 0;
exports.main = main;
exports.minifySheet = minifySheet;
exports.minifyAllSheets = minifyAllSheets;
exports.moveFiles = moveFiles;
exports.moveAllFiles = moveAllFiles;
exports.updateEmotionsAndCredits = updateEmotionsAndCredits;
exports.runTexturePacker = runTexturePacker;
exports.runTexturePackerForAll = runTexturePackerForAll;
exports.executeCommand = executeCommand;
exports.promptUser = promptUser;
exports.getAvailablePokemonIndices = getAvailablePokemonIndices;
const child_process_1 = require("child_process");
const fast_xml_parser_1 = require("fast-xml-parser");
const fs_1 = __importDefault(require("fs"));
const fs_extra_1 = __importStar(require("fs-extra"));
const graceful_fs_1 = __importDefault(require("graceful-fs"));
const jimp_1 = require("jimp");
const readline_1 = require("readline");
const pokemon_animations_1 = require("../app/public/src/game/components/pokemon-animations");
const types_1 = require("../app/types");
const Animation_1 = require("../app/types/Animation");
const Game_1 = require("../app/types/enum/Game");
const Pokemon_1 = require("../app/types/enum/Pokemon");
const logger_1 = require("../app/utils/logger");
const map_1 = require("../app/utils/map");
const path_1 = require("../app/utils/path");
graceful_fs_1.default.gracefulify(fs_1.default);
function toDurationArray(duration) {
    return Array.isArray(duration) ? duration : [duration];
}
function formatPokemonName(index) {
    var _a;
    let shiny = false;
    if (index.endsWith("-0001") && index.length === 14) {
        shiny = true;
        index = index.slice(0, -5);
        if (index.endsWith("-0000")) {
            index = index.slice(0, -5);
        }
    }
    return `#${index} ${(_a = Pokemon_1.PkmByIndex[index]) !== null && _a !== void 0 ? _a : "UNKNOWN"}${shiny ? " (Shiny)" : ""}`;
}
function executeCommand(command, args) {
    return new Promise((resolve, reject) => {
        logger_1.logger.info(`Executing: ${command} ${args.join(" ")}`);
        const child = (0, child_process_1.spawn)(command, args, {
            stdio: "inherit"
        });
        child.on("close", (code) => {
            if (code === 0) {
                resolve();
            }
            else {
                reject(new Error(`Command failed with exit code ${code}`));
            }
        });
        child.on("error", (error) => {
            reject(error);
        });
    });
}
function promptUser(question) {
    const rl = (0, readline_1.createInterface)({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}
function getAvailablePokemonIndices() {
    try {
        const splitDir = "./split";
        if (!fs_1.default.existsSync(splitDir)) {
            return [];
        }
        return fs_1.default
            .readdirSync(splitDir, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name)
            .sort();
    }
    catch (error) {
        logger_1.logger.warn("Could not read split directory:", error);
        return [];
    }
}
class SpriteSheetProcessor {
    constructor() {
        this.durations = {};
        this.delays = {};
        this.missing = "";
        this.mapName = new Map();
        this.pkmIndexes = ["0000"];
        this.mapName.set("0000", "missingno");
        Object.values(Pokemon_1.Pkm).forEach((pkm) => {
            const index = Pokemon_1.PkmIndex[pkm];
            if (!this.pkmIndexes.includes(index)) {
                this.pkmIndexes.push(index);
                this.mapName.set(index, pkm);
            }
        });
    }
    loadDurationsFile() {
        try {
            const rawdata = fs_1.default.readFileSync("../app/public/src/assets/pokemons/durations.json", "utf8");
            Object.assign(this.durations, JSON.parse(rawdata));
            logger_1.logger.debug(`Loaded durations file, ${Object.keys(this.durations).length} durations already computed`);
        }
        catch (error) {
            logger_1.logger.warn("Could not load durations file, starting fresh");
        }
    }
    loadDelaysFile() {
        try {
            const rawdata = fs_1.default.readFileSync("../app/types/delays.json", "utf8");
            Object.assign(this.delays, JSON.parse(rawdata));
            logger_1.logger.debug(`Loaded delays file, ${Object.keys(this.delays).length} delays already computed`);
        }
        catch (error) {
            logger_1.logger.warn("Could not load delays file, starting fresh");
        }
    }
    saveDurationsFile() {
        const fileA = fs_1.default.createWriteStream("./sheets/durations.json");
        fileA.on("error", function (err) {
            logger_1.logger.error(err);
        });
        fileA.write(JSON.stringify(this.durations));
        fileA.end();
        logger_1.logger.debug(`Saved durations file, ${Object.keys(this.durations).length} durations entries`);
    }
    saveDelaysFile() {
        const fileA = fs_1.default.createWriteStream("./sheets/delays.json");
        fileA.on("error", function (err) {
            logger_1.logger.error(err);
        });
        fileA.write(JSON.stringify(this.delays));
        fileA.end();
        logger_1.logger.debug(`Saved delays file, ${Object.keys(this.delays).length} delays entries`);
    }
    removeBlue(cropImg) {
        cropImg.scan(0, 0, cropImg.bitmap.width, cropImg.bitmap.height, (x, y, idx) => {
            if (cropImg.bitmap.data[idx] === 0 &&
                cropImg.bitmap.data[idx + 1] === 0 &&
                cropImg.bitmap.data[idx + 2] !== 0) {
                cropImg.bitmap.data[idx] = 0;
                cropImg.bitmap.data[idx + 1] = 0;
                cropImg.bitmap.data[idx + 2] = 0;
                cropImg.bitmap.data[idx + 3] = 0;
            }
        });
    }
    removeRed(cropImg) {
        cropImg.scan(0, 0, cropImg.bitmap.width, cropImg.bitmap.height, (x, y, idx) => {
            if (cropImg.bitmap.data[idx] !== 0 &&
                cropImg.bitmap.data[idx + 1] === 0 &&
                cropImg.bitmap.data[idx + 2] === 0) {
                cropImg.bitmap.data[idx] = 0;
                cropImg.bitmap.data[idx + 1] = 0;
                cropImg.bitmap.data[idx + 2] = 0;
                cropImg.bitmap.data[idx + 3] = 0;
            }
        });
    }
    zeroPad(num) {
        return ("0000" + num).slice(-4);
    }
    splitIndex(spriteCollabPath, index) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const pathIndex = index.replaceAll("-", "/");
            const split = pathIndex.split("/");
            const shinyPad = split.length === 1
                ? `${pathIndex}/0000/0001`
                : split.length === 2
                    ? `${pathIndex}/0001`
                    : pathIndex.split("/").with(2, "0001").join("/");
            const conf = (_a = pokemon_animations_1.PokemonAnimations[this.mapName.get(index)]) !== null && _a !== void 0 ? _a : pokemon_animations_1.DEFAULT_POKEMON_ANIMATION_CONFIG;
            const allPads = [pathIndex];
            if (!conf.shinyUnavailable)
                allPads.push(shinyPad);
            for (let j = 0; j < allPads.length; j++) {
                const pad = allPads[j];
                try {
                    const shiny = pathIndex == pad ? Game_1.PokemonTint.NORMAL : Game_1.PokemonTint.SHINY;
                    const xmlFile = fs_1.default.readFileSync((0, path_1.expandHomeDir)(`${spriteCollabPath}/sprite/${pad}/AnimData.xml`));
                    const parser = new fast_xml_parser_1.XMLParser();
                    const xmlData = parser.parse(xmlFile);
                    let attackMetadata = xmlData.AnimData.Anims.Anim.find((m) => m.Name === conf.attack);
                    if (attackMetadata) {
                        if (attackMetadata.CopyOf) {
                            attackMetadata =
                                (_b = xmlData.AnimData.Anims.Anim.find((m) => m.Name === (attackMetadata === null || attackMetadata === void 0 ? void 0 : attackMetadata.CopyOf))) !== null && _b !== void 0 ? _b : attackMetadata;
                        }
                        if (!((_c = attackMetadata === null || attackMetadata === void 0 ? void 0 : attackMetadata.Durations) === null || _c === void 0 ? void 0 : _c.Duration)) {
                            logger_1.logger.error("no duration found for attack metadata", attackMetadata);
                        }
                        else {
                            const attackDurations = toDurationArray(attackMetadata.Durations.Duration);
                            this.delays[index] = {
                                d: attackDurations
                                    .slice(0, attackMetadata.HitFrame)
                                    .reduce((prev, curr) => prev + curr, 0),
                                t: attackDurations.reduce((prev, curr) => prev + curr, 0)
                            };
                        }
                    }
                    for (let k = 0; k < Object.values(Game_1.SpriteType).length; k++) {
                        const anim = Object.values(Game_1.SpriteType)[k];
                        const actions = new Set([
                            Animation_1.AnimationType.Idle,
                            Animation_1.AnimationType.Walk
                        ]);
                        if (!conf) {
                            logger_1.logger.warn(`Animation config not found for ${formatPokemonName(index)}`);
                            continue;
                        }
                        actions.add((_d = conf.sleep) !== null && _d !== void 0 ? _d : Animation_1.AnimationType.Sleep);
                        actions.add((_e = conf.eat) !== null && _e !== void 0 ? _e : Animation_1.AnimationType.Eat);
                        actions.add((_f = conf.hop) !== null && _f !== void 0 ? _f : Animation_1.AnimationType.Hop);
                        actions.add((_g = conf.hurt) !== null && _g !== void 0 ? _g : Animation_1.AnimationType.Hurt);
                        actions.add((_h = conf.attack) !== null && _h !== void 0 ? _h : Animation_1.AnimationType.Attack);
                        actions.add((_j = conf.ability) !== null && _j !== void 0 ? _j : Animation_1.AnimationType.SpAttack);
                        actions.add((_k = conf.emote) !== null && _k !== void 0 ? _k : Animation_1.AnimationType.Pose);
                        for (const action of actions) {
                            let metadata = xmlData.AnimData.Anims.Anim.find((m) => m.Name === action);
                            const imgPath = (0, path_1.expandHomeDir)(`${spriteCollabPath}/sprite/${pad}/${(metadata === null || metadata === void 0 ? void 0 : metadata.CopyOf) || action}-${anim}.png`);
                            try {
                                const img = yield jimp_1.Jimp.read(imgPath);
                                if (metadata === null || metadata === void 0 ? void 0 : metadata.CopyOf) {
                                    metadata = xmlData.AnimData.Anims.Anim.find((m) => m.Name === (metadata === null || metadata === void 0 ? void 0 : metadata.CopyOf));
                                }
                                if (!((_l = metadata === null || metadata === void 0 ? void 0 : metadata.Durations) === null || _l === void 0 ? void 0 : _l.Duration)) {
                                    logger_1.logger.error("no duration found for metadata", metadata);
                                }
                                else {
                                    this.durations[`${index}/${shiny}/${action}/${anim}`] =
                                        toDurationArray(metadata.Durations.Duration);
                                    const frameHeight = metadata === null || metadata === void 0 ? void 0 : metadata.FrameHeight;
                                    const frameWidth = metadata === null || metadata === void 0 ? void 0 : metadata.FrameWidth;
                                    if (frameWidth && frameHeight) {
                                        const width = img.width / frameWidth;
                                        const height = img.height / frameHeight;
                                        for (let x = 0; x < width; x++) {
                                            for (let y = 0; y < height; y++) {
                                                const cropImg = img.clone();
                                                if (anim === Game_1.SpriteType.SHADOW) {
                                                    const shadow = Number(xmlData.AnimData.ShadowSize);
                                                    if (shadow === 0) {
                                                        this.removeRed(cropImg);
                                                        this.removeBlue(cropImg);
                                                    }
                                                    else if (shadow === 1) {
                                                        this.removeBlue(cropImg);
                                                    }
                                                    cropImg.scan(0, 0, cropImg.bitmap.width, cropImg.bitmap.height, (x, y, idx) => {
                                                        if (cropImg.bitmap.data[idx + 3] !== 0) {
                                                            cropImg.bitmap.data[idx] = 0;
                                                            cropImg.bitmap.data[idx + 1] = 0;
                                                            cropImg.bitmap.data[idx + 2] = 0;
                                                        }
                                                    });
                                                }
                                                cropImg.crop({
                                                    x: x * frameWidth,
                                                    y: y * frameHeight,
                                                    w: frameWidth,
                                                    h: frameHeight
                                                });
                                                yield (0, fs_extra_1.ensureDir)(`split/${index}/${shiny}/${action}/${anim}/${y}`);
                                                yield cropImg.write(`split/${index}/${shiny}/${action}/${anim}/${y}/${this.zeroPad(x)}.png`);
                                            }
                                        }
                                    }
                                }
                            }
                            catch (error) {
                                logger_1.logger.error(`Error parsing animation ${imgPath}`, error);
                                logger_1.logger.warn(`Action '${action}' is missing for ${formatPokemonName(index)}`);
                            }
                            logger_1.logger.debug(`split ${formatPokemonName(index)}: ${shiny}/${anim}/${action}`);
                        }
                    }
                }
                catch (error) {
                    logger_1.logger.warn(`Pokemon ${formatPokemonName(index)} not found at path: ${spriteCollabPath}/sprite/${pad}/AnimData.xml`, error);
                    this.missing += `${this.mapName.get(index)},${pad}/AnimData.xml\n`;
                }
            }
        });
    }
    splitAll(spriteCollabPath) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.pkmIndexes.length; i++) {
                const index = this.pkmIndexes[i];
                logger_1.logger.debug(`${i}/${this.pkmIndexes.length - 1} (${((i * 100) / (this.pkmIndexes.length - 1)).toFixed(2)}%) ${formatPokemonName(index)}`);
                yield this.splitIndex(spriteCollabPath, index);
            }
        });
    }
    saveMissingFiles() {
        const fileB = fs_1.default.createWriteStream("sheets/missing.txt");
        fileB.on("error", function (err) {
            logger_1.logger.error(err);
        });
        fileB.write(this.missing);
        fileB.end();
    }
}
exports.SpriteSheetProcessor = SpriteSheetProcessor;
function minifySheet(id) {
    try {
        logger_1.logger.debug(`Minifying sheet for ${formatPokemonName(id)}...`);
        const buffer = fs_1.default.readFileSync(`sheets/${id}.json`);
        const json = JSON.parse(buffer.toString());
        delete json.meta;
        fs_1.default.writeFileSync(`sheets/${id}.json`, JSON.stringify(json, null, 0));
    }
    catch (error) {
        logger_1.logger.error("error minifying sheet id#", id, error);
    }
}
function moveFiles(spriteCollabPath, pkmIndex) {
    const creditsName = fs_1.default.readFileSync((0, path_1.expandHomeDir)(`${spriteCollabPath}/credit_names.txt`));
    fs_1.default.writeFileSync("sheets/credit_names.txt", creditsName);
    fs_extra_1.default.copySync(`sheets/durations.json`, `../app/public/src/assets/pokemons/durations.json`, {
        overwrite: true
    });
    fs_extra_1.default.copySync(`sheets/delays.json`, `../app/types/delays.json`, {
        overwrite: true
    });
    moveSheet(pkmIndex);
    movePortrait(spriteCollabPath, pkmIndex);
    logger_1.logger.debug(`Sprites and portraits have been moved to assets folder for ${formatPokemonName(pkmIndex)}.`);
}
function moveSheet(pkmIndex) {
    try {
        fs_extra_1.default.copySync(`sheets/${pkmIndex}.json`, `../app/public/src/assets/pokemons/${pkmIndex}.json`, {
            overwrite: true
        });
        fs_extra_1.default.copySync(`sheets/${pkmIndex}.png`, `../app/public/src/assets/pokemons/${pkmIndex}.png`, {
            overwrite: true
        });
    }
    catch (err) {
        logger_1.logger.warn(`Sheet not found for ${pkmIndex}`);
    }
}
function movePortrait(spriteCollabPath, pkmIndex) {
    const portraitPath = pkmIndex.replace(/(\d+)\-/g, "$1/");
    try {
        fs_extra_1.default.copySync((0, path_1.expandHomeDir)(`${spriteCollabPath}/portrait/${portraitPath}`), `../app/public/src/assets/portraits/${portraitPath}`, {
            overwrite: true
        });
    }
    catch (err) {
        logger_1.logger.warn(`Portrait not found for ${pkmIndex}`);
    }
}
function updateEmotionsAndCredits(spriteCollabPath, indexesToUpdate = Object.values(Pokemon_1.PkmIndex).flatMap((indexToAdd) => {
    const shinyPad = indexToAdd.length === 4 ? "-0000-0001" : "-0001";
    return [indexToAdd, `${indexToAdd}${shinyPad}`];
})) {
    var _a;
    let tracker = {};
    try {
        const filePath = (0, path_1.expandHomeDir)(`${spriteCollabPath}/tracker.json`);
        const content = fs_1.default.readFileSync(filePath, "utf8");
        tracker = JSON.parse(content);
    }
    catch (err) {
        logger_1.logger.error(`Failed to read or parse tracker.json at ${spriteCollabPath}:`, err);
        throw err;
    }
    let emotionsPerIndex = new Map();
    let creditsData = new Map();
    try {
        const prevEmotionsData = fs_1.default.readFileSync("../app/models/precomputed/emotions-per-pokemon-index.json", "utf8");
        emotionsPerIndex = (0, map_1.objToMap)(JSON.parse(prevEmotionsData));
        const prevCreditsData = fs_1.default.readFileSync("../app/models/precomputed/credits.json", "utf8");
        creditsData = (0, map_1.objToMap)(JSON.parse(prevCreditsData));
    }
    catch (err) {
        logger_1.logger.warn(`No existing emotions-per-pokemon-index.json found, will create a new one.`);
    }
    const emotions = Object.values(types_1.Emotion);
    for (const pkmIndex of indexesToUpdate) {
        const pathIndex = pkmIndex.split("-");
        let metadata = tracker[pathIndex[0]];
        for (let i = 1; i < pathIndex.length; i++) {
            metadata = (_a = metadata === null || metadata === void 0 ? void 0 : metadata.subgroups) === null || _a === void 0 ? void 0 : _a[pathIndex[i]];
        }
        if (metadata) {
            const emotionsAvailable = emotions.map((emotion) => { var _a; return emotion in ((_a = metadata === null || metadata === void 0 ? void 0 : metadata.portrait_files) !== null && _a !== void 0 ? _a : {}) ? 1 : 0; });
            emotionsPerIndex.set(pkmIndex, emotionsAvailable);
            logger_1.logger.log(`${emotionsAvailable.filter((available) => available === 1).length} portraits found for ${formatPokemonName(pkmIndex)}`);
            creditsData.set(pkmIndex, {
                portrait_credit: metadata.portrait_credit,
                sprite_credit: metadata.sprite_credit
            });
        }
        else if (Pokemon_1.NON_PMD_PKM_INDEXES.includes(pkmIndex) === false) {
            logger_1.logger.warn(`No tracker information for ${pkmIndex}`);
        }
    }
    fs_1.default.writeFileSync("../app/models/precomputed/emotions-per-pokemon-index.json", JSON.stringify((0, map_1.mapToObj)(emotionsPerIndex)));
    logger_1.logger.log("Updated emotions-per-pokemon-index.json");
    fs_1.default.writeFileSync("../app/models/precomputed/credits.json", JSON.stringify((0, map_1.mapToObj)(creditsData)));
    logger_1.logger.log("Updated credits.json");
}
function runTexturePacker(indexToAdd) {
    return __awaiter(this, void 0, void 0, function* () {
        const command = process.platform === "win32" ? "TexturePacker.exe" : "TexturePacker";
        const args = [
            "--pack-mode",
            "Good",
            "--sheet",
            `sheets/${indexToAdd}.png`,
            "--data",
            `sheets/${indexToAdd}.json`,
            "--texture-format",
            "png8",
            "--format",
            "phaser",
            "--trim-sprite-names",
            `./split/${indexToAdd}`
        ];
        try {
            yield executeCommand(command, args);
            logger_1.logger.info(`TexturePacker completed successfully for ${formatPokemonName(indexToAdd)}`);
        }
        catch (error) {
            logger_1.logger.error(`TexturePacker failed for ${formatPokemonName(indexToAdd)}:`, error);
            throw error;
        }
    });
}
function runTexturePackerForAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const availableIndices = getAvailablePokemonIndices();
        if (availableIndices.length === 0) {
            logger_1.logger.warn("No Pokemon found in split directory");
            return;
        }
        logger_1.logger.info(`Found ${availableIndices.length} Pokemon to process with TexturePacker`);
        for (let i = 0; i < availableIndices.length; i++) {
            const index = availableIndices[i];
            logger_1.logger.info(`Processing ${i + 1}/${availableIndices.length}: ${formatPokemonName(index)}`);
            yield runTexturePacker(index);
        }
    });
}
function minifyAllSheets() {
    try {
        const sheetsDir = "./sheets";
        if (!fs_1.default.existsSync(sheetsDir)) {
            logger_1.logger.warn("Sheets directory not found");
            return;
        }
        const jsonFiles = fs_1.default
            .readdirSync(sheetsDir)
            .filter((file) => file.endsWith(".json") &&
            file !== "durations.json" &&
            file !== "delays.json")
            .map((file) => file.replace(".json", ""));
        logger_1.logger.info(`Found ${jsonFiles.length} sheets to minify`);
        for (const id of jsonFiles) {
            minifySheet(id);
        }
        logger_1.logger.info("All sheets minified successfully");
    }
    catch (error) {
        logger_1.logger.error("Error minifying all sheets:", error);
        throw error;
    }
}
function moveAllFiles(spriteCollabPath) {
    const creditsName = fs_1.default.readFileSync((0, path_1.expandHomeDir)(`${spriteCollabPath}/credit_names.txt`));
    fs_1.default.writeFileSync("sheets/credit_names.txt", creditsName);
    fs_extra_1.default.copySync(`sheets/durations.json`, `../app/public/src/assets/pokemons/durations.json`, {
        overwrite: true
    });
    fs_extra_1.default.copySync(`sheets/delays.json`, `../app/types/delays.json`, {
        overwrite: true
    });
    Object.values(Pokemon_1.PkmIndex).forEach((index) => {
        moveSheet(index);
        movePortrait(spriteCollabPath, index);
    });
    logger_1.logger.debug(`All sheets and portraits moved for ${Object.values(Pokemon_1.PkmIndex).length} Pokemon.`);
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            logger_1.logger.info("Pokemon Auto Chess sprite processor");
            logger_1.logger.info("=".repeat(50));
            const spriteCollabPath = yield promptUser("Enter SpriteCollab repo local folder path: ");
            const indexToAdd = yield promptUser("Enter index of pokemon to add (leave empty to process all): ");
            if (!spriteCollabPath) {
                logger_1.logger.error("SpriteCollab path is required");
                process.exit(1);
            }
            if (!fs_1.default.existsSync((0, path_1.expandHomeDir)(spriteCollabPath))) {
                logger_1.logger.error(`SpriteCollab path does not exist: ${spriteCollabPath}`);
                process.exit(1);
            }
            yield (0, fs_extra_1.ensureDir)("sheets");
            yield (0, fs_extra_1.ensureDir)("split");
            if (indexToAdd.trim()) {
                logger_1.logger.info(`Processing single Pokemon: ${formatPokemonName(indexToAdd)}`);
                logger_1.logger.info(`Using SpriteCollab path: ${spriteCollabPath}`);
                logger_1.logger.info("Step 1/5: Splitting sprites...");
                const splitter = new SpriteSheetProcessor();
                splitter.loadDelaysFile();
                splitter.loadDurationsFile();
                yield splitter.splitIndex(spriteCollabPath, indexToAdd);
                splitter.saveDurationsFile();
                splitter.saveDelaysFile();
                logger_1.logger.info("Step 2/5: Running TexturePacker...");
                yield runTexturePacker(indexToAdd);
                logger_1.logger.info("Step 3/5: Minifying sheets...");
                minifySheet(indexToAdd);
                logger_1.logger.info("Step 4/5: Moving files to assets...");
                moveFiles(spriteCollabPath, indexToAdd);
                logger_1.logger.info("Step 5/5: Updating emotions available and credits...");
                const shinyPad = indexToAdd.length === 4 ? "-0000-0001" : "-0001";
                updateEmotionsAndCredits(spriteCollabPath, [
                    indexToAdd,
                    `${indexToAdd}${shinyPad}`
                ]);
                logger_1.logger.info(`✅ Process completed successfully! ${formatPokemonName(indexToAdd)} has been added to the game assets.`);
            }
            else {
                logger_1.logger.info("Processing ALL Pokemon");
                logger_1.logger.info(`Using SpriteCollab path: ${spriteCollabPath}`);
                logger_1.logger.info("Step 1/5: Splitting all sprites...");
                const splitter = new SpriteSheetProcessor();
                splitter.loadDelaysFile();
                splitter.loadDurationsFile();
                yield splitter.splitAll(spriteCollabPath);
                splitter.saveDurationsFile();
                splitter.saveDelaysFile();
                splitter.saveMissingFiles();
                logger_1.logger.info("Step 2/5: Running TexturePacker for all Pokemon...");
                yield runTexturePackerForAll();
                logger_1.logger.info("Step 3/5: Minifying all sheets...");
                minifyAllSheets();
                logger_1.logger.info("Step 4/5: Moving all files to assets...");
                moveAllFiles(spriteCollabPath);
                logger_1.logger.info("Step 5/5: Updating emotions and credits for all Pokemon...");
                updateEmotionsAndCredits(spriteCollabPath);
                logger_1.logger.info("✅ Process completed successfully! All Pokemon have been processed and added to the game assets.");
            }
        }
        catch (error) {
            logger_1.logger.error("❌ Process failed:", error);
            process.exit(1);
        }
    });
}
if (require.main === module) {
    main();
}
//# sourceMappingURL=add-pokemon.js.map