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
exports.default = AnonymousButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const auth_1 = require("firebase/auth");
const react_i18next_1 = require("react-i18next");
const Starters_1 = require("../../../../../types/enum/Starters");
const name_generation_1 = require("../../../../../utils/name-generation");
const random_1 = require("../../../../../utils/random");
function AnonymousButton() {
    const { t } = (0, react_i18next_1.useTranslation)();
    function signIn() {
        return __awaiter(this, void 0, void 0, function* () {
            const auth = (0, auth_1.getAuth)();
            try {
                yield (0, auth_1.signInAnonymously)(auth);
                if (auth.currentUser) {
                    const starterPokemon = (0, random_1.pickRandomIn)(Starters_1.Starters);
                    const randomName = (0, name_generation_1.generateRandomName)(starterPokemon);
                    yield (0, auth_1.updateProfile)(auth.currentUser, { displayName: randomName });
                    window.location.href = window.location.href + "lobby";
                }
            }
            catch (error) {
                alert(error);
            }
        });
    }
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("button", { className: "firebaseui-idp-button anonymous", style: { display: "flex", alignItems: "center" }, onClick: signIn, children: [(0, jsx_runtime_1.jsx)("img", { style: { width: "30px" }, src: "assets/ui/unown.svg" }), (0, jsx_runtime_1.jsx)("span", { style: { color: "#464646", paddingLeft: "5px" }, className: "firebaseui-idp-text", children: t("join_as_guest") })] }) }) }));
}
//# sourceMappingURL=anonymous-button.js.map