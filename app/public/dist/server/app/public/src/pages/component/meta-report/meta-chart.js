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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaChart = MetaChart;
const jsx_runtime_1 = require("react/jsx-runtime");
const d3 = __importStar(require("d3"));
const react_1 = __importStar(require("react"));
const config_1 = require("../../../../../config");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const avatar_1 = require("../../../../../utils/avatar");
const team_comp_1 = require("./team-comp");
require("./meta-chart.css");
const ALPHA_FILL = "4D";
function MetaChart(props) {
    const svgRef = (0, react_1.useRef)(null);
    const containerRef = (0, react_1.useRef)(null);
    const [transform, setTransform] = react_1.default.useState(null);
    const [hoveredCluster, setHoveredCluster] = react_1.default.useState();
    const [dimensions, setDimensions] = react_1.default.useState({
        width: 700,
        height: 700
    });
    const margin = 20;
    const width = dimensions.width;
    const height = dimensions.height;
    react_1.default.useEffect(() => {
        if (!containerRef.current)
            return;
        const resizeObserver = new ResizeObserver(() => {
            var _a;
            const rect = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            if (rect) {
                setDimensions({
                    width: Math.max(rect.width, 300),
                    height: Math.max(rect.height, 300)
                });
            }
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);
    const x = d3
        .scaleLinear()
        .domain([
        Math.min(...props.meta.map((m) => m.x)),
        Math.max(...props.meta.map((m) => m.x))
    ])
        .nice()
        .range([margin, width - margin]);
    const y = d3
        .scaleLinear()
        .domain([
        Math.min(...props.meta.map((m) => m.y)),
        Math.max(...props.meta.map((m) => m.y))
    ])
        .nice()
        .range([height - margin, margin]);
    (0, react_1.useEffect)(() => {
        if (!svgRef.current)
            return;
        const zoom = d3.zoom().on("zoom", (event) => {
            setTransform(event.transform);
        });
        d3.select(svgRef.current).call(zoom);
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { ref: containerRef, style: { width: "100%", height: "100%" }, children: (0, jsx_runtime_1.jsx)("svg", { ref: svgRef, width: width, height: height, style: {
                width: "100%",
                height: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                cursor: "grab"
            }, preserveAspectRatio: "xMidYMid meet", children: (0, jsx_runtime_1.jsx)("g", { transform: transform
                    ? `translate(${transform.x},${transform.y}) scale(${transform.k})`
                    : "", children: props.meta
                    .sort((a, b) => b.count - a.count)
                    .map((d, i) => {
                    var _a, _b, _c;
                    if (d.hull && d.hull.length > 0) {
                        const synergies = d.synergies ? Object.keys(d.synergies) : [];
                        const sortedSynergies = synergies.sort((a, b) => {
                            return (0, team_comp_1.rankType)(a, b, d.synergies || {});
                        });
                        const synergy = ((_a = sortedSynergies[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || undefined;
                        const hullPoints = d.hull
                            .map((point) => `${x(point[0])},${y(point[1])}`)
                            .join(" ");
                        const fillColor = synergy && config_1.SYNERGY_COLORS[synergy]
                            ? `${config_1.SYNERGY_COLORS[synergy]}${ALPHA_FILL}`
                            : "rgba(100, 150, 255, 0.3)";
                        const strokeColor = (_b = config_1.SYNERGY_COLORS[synergy]) !== null && _b !== void 0 ? _b : "rgb(100, 150, 255)";
                        const isSelected = props.selectedCluster === d.cluster_id;
                        const isHovered = hoveredCluster === d.cluster_id;
                        return ((0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("polygon", { points: hullPoints, fill: fillColor, stroke: strokeColor, strokeWidth: "2", className: `hull-polygon ${isHovered ? "hovered" : ""} ${isSelected ? "selected" : ""}`, style: { cursor: "pointer" }, onClick: () => {
                                        props.setSelectedComposition(d.cluster_id);
                                    }, onMouseEnter: () => {
                                        setHoveredCluster(d.cluster_id);
                                        props.setHoveredCluster(d);
                                    }, onMouseLeave: () => {
                                        setHoveredCluster(undefined);
                                        if (props.selectedCluster !== d.cluster_id) {
                                            props.setHoveredCluster(undefined);
                                        }
                                    } }), ((_c = d.mean_team) === null || _c === void 0 ? void 0 : _c.pokemons) &&
                                    (() => {
                                        const pokemonEntries = Object.entries(d.mean_team.pokemons);
                                        const top3Pokemon = pokemonEntries
                                            .sort((a, b) => { var _a, _b, _c, _d; return ((_b = (_a = b[1]) === null || _a === void 0 ? void 0 : _a.frequency) !== null && _b !== void 0 ? _b : 0) - ((_d = (_c = a[1]) === null || _c === void 0 ? void 0 : _c.frequency) !== null && _d !== void 0 ? _d : 0); })
                                            .slice(0, 3);
                                        const baseSize = 40;
                                        const pokemonRadius = baseSize / 2;
                                        const containerRadius = baseSize / 2;
                                        return ((0, jsx_runtime_1.jsxs)("g", { transform: `translate(${x(d.x)}, ${y(d.y)}) scale(${transform ? 1 / transform.k : 1})`, children: [(0, jsx_runtime_1.jsx)("defs", { children: top3Pokemon.map((_, idx) => ((0, jsx_runtime_1.jsx)("clipPath", { id: `clip-pokemon-${d.cluster_id}-${idx}`, children: (0, jsx_runtime_1.jsx)("circle", { cx: 0, cy: 0, r: pokemonRadius }) }, `clip-${d.cluster_id}-${idx}`))) }), top3Pokemon.map((entry, idx) => {
                                                    const angle = (idx * 120 - 90) * (Math.PI / 180);
                                                    const px = containerRadius * Math.cos(angle);
                                                    const py = containerRadius * Math.sin(angle);
                                                    const pokemonName = entry[0];
                                                    return ((0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("circle", { cx: px, cy: py, r: pokemonRadius, fill: "white", style: { pointerEvents: "none" } }), (0, jsx_runtime_1.jsx)("g", { transform: `translate(${px}, ${py})`, children: (0, jsx_runtime_1.jsx)("image", { x: -pokemonRadius, y: -pokemonRadius, width: pokemonRadius * 2, height: pokemonRadius * 2, xlinkHref: (0, avatar_1.getPortraitSrc)(Pokemon_1.PkmIndex[pokemonName]), clipPath: `url(#clip-pokemon-${d.cluster_id}-${idx})`, className: "pokemon-portrait", style: { pointerEvents: "none" } }) })] }, `poke-${d.cluster_id}-${idx}`));
                                                })] }));
                                    })()] }, `hull-${d.cluster_id}`));
                    }
                    return null;
                }) }) }) }));
}
//# sourceMappingURL=meta-chart.js.map