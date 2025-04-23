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
Object.defineProperty(exports, "__esModule", { value: true });
exports.pastebinService = void 0;
const api_1 = require("pastebin-ts/dist/api");
let pastebin;
function getPastebin() {
    if (pastebin)
        return pastebin;
    pastebin = new api_1.PastebinAPI({
        api_dev_key: 'nqWDsTV4Po3owy1P6JAePCZZBs9n_i33',
        api_user_name: 'JGuillen20108i',
    });
    return pastebin;
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
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`https://pastebin.com/raw/${id}`);
                if (response.ok) {
                    return yield response.text();
                }
                return getPastebin().getPaste(id, raw);
            }
            catch (error) {
                console.error('Failed to get paste:', error);
                return null;
            }
        });
    },
};
//# sourceMappingURL=pastebin.js.map