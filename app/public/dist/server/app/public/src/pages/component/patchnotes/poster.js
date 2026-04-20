"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poster = Poster;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./poster.css");
function Poster({ version, onClick, isDetailed }) {
    const [imageSrc, setImageSrc] = (0, react_1.useState)(`/assets/posters/${version}.png`);
    const [isHdLoaded, setIsHdLoaded] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (isDetailed && !isHdLoaded) {
            setTimeout(() => {
                const hdImage = new Image();
                const hdImageSrc = `/assets/posters/hd/${version}.png`;
                hdImage.src = hdImageSrc;
                hdImage.onload = () => {
                    setImageSrc(hdImageSrc);
                    setIsHdLoaded(true);
                };
                hdImage.onerror = () => {
                    console.warn(`HD version of poster ${version} not found, keeping original`);
                };
            }, 400);
        }
    }, [isDetailed, version, isHdLoaded]);
    return ((0, jsx_runtime_1.jsx)("div", { className: `poster ${isDetailed ? "poster-detailed" : ""}`, onClick: onClick, style: {
            viewTransitionName: `poster-${version.replace(/\./g, "-")}`
        }, children: (0, jsx_runtime_1.jsx)("img", { src: imageSrc, alt: `Patch ${version} poster`, loading: "lazy" }) }));
}
//# sourceMappingURL=poster.js.map