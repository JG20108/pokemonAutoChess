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
exports.fetchMetaPokemons = fetchMetaPokemons;
exports.fetchMetaTypes = fetchMetaTypes;
const app_1 = __importDefault(require("firebase/compat/app"));
function fetchMetaPokemons() {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch("/meta/pokemons").then((res) => res.json());
    });
}
function fetchMetaTypes() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const token = yield ((_a = app_1.default.auth().currentUser) === null || _a === void 0 ? void 0 : _a.getIdToken());
        return fetch("/meta/types", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.json());
    });
}
//# sourceMappingURL=pokemons-statistic-v2.js.map