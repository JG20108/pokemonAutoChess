"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PokemonPortrait;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const avatar_1 = require("../../../../utils/avatar");
const jsx_1 = require("../utils/jsx");
function PokemonPortrait(props) {
    let src;
    if ("avatar" in props) {
        src = (0, avatar_1.getAvatarSrc)(props.avatar);
    }
    else {
        src =
            typeof props.portrait === "object"
                ? (0, avatar_1.getPortraitSrc)(props.portrait.index, props.portrait.shiny, props.portrait.emotion)
                : (0, avatar_1.getPortraitSrc)(props.portrait);
    }
    const { className } = props, rest = __rest(props, ["className"]);
    const [imgSrc, setImgSrc] = (0, react_1.useState)(src);
    (0, react_1.useEffect)(() => {
        setImgSrc(src);
    }, [src]);
    const handleError = () => {
        const missingPortrait = "/assets/ui/missing-portrait.png";
        if (imgSrc !== missingPortrait) {
            setImgSrc(missingPortrait);
        }
    };
    return ((0, jsx_runtime_1.jsx)("img", Object.assign({ src: imgSrc, loading: "lazy", className: (0, jsx_1.cc)("pokemon-portrait", className || ""), onError: handleError }, rest)));
}
//# sourceMappingURL=pokemon-portrait.js.map