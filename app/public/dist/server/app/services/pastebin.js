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
exports.pastebinService = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = require("pastebin-ts/dist/api");
let pastebin;
function getPastebin() {
    if (pastebin)
        return pastebin;
    dotenv_1.default.config();
    if (process.env.PASTEBIN_API_DEV_KEY &&
        process.env.PASTEBIN_API_USERNAME &&
        process.env.PASTEBIN_API_DEV_KEY) {
        return (pastebin = new api_1.PastebinAPI({
            api_dev_key: process.env.PASTEBIN_API_DEV_KEY,
            api_user_name: process.env.PASTEBIN_API_USERNAME,
            api_user_password: process.env.PASTEBIN_API_PASSWORD,
        }));
    }
    else {
        throw new Error('Pastebin not configured; set PASTEBIN_API_USERNAME and PASTEBIN_API_DEV_KEY env variables');
    }
}
exports.pastebinService = {
    createPaste(title_1, text_1) {
        return __awaiter(this, arguments, void 0, function* (title, text, format = 'json') {
            return getPastebin().createPaste({
                text,
                title,
                format,
            });
        });
    },
    getPaste(id, raw) {
        return getPastebin().getPaste(id, raw);
    },
};
//# sourceMappingURL=pastebin.js.map