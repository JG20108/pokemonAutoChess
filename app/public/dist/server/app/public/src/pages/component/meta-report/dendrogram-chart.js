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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DendrogramChart = DendrogramChart;
const jsx_runtime_1 = require("react/jsx-runtime");
const d3 = __importStar(require("d3"));
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const Pokemon_1 = require("../../../../../types/enum/Pokemon");
const dendrogram_1 = require("../../../models/dendrogram");
const synergy_icon_1 = __importDefault(require("../icons/synergy-icon"));
const pokemon_portrait_1 = __importDefault(require("../pokemon-portrait"));
require("./dendrogram-chart.css");
function DendrogramChart() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [dendrogram, setDendrogram] = (0, react_1.useState)(null);
    const [hoveredCluster, setHoveredCluster] = (0, react_1.useState)(null);
    const [selectedCluster, setSelectedCluster] = (0, react_1.useState)(null);
    const [hoveredBranch, setHoveredBranch] = (0, react_1.useState)(null);
    const svgRef = (0, react_1.useRef)(null);
    const containerRef = (0, react_1.useRef)(null);
    const [dimensions, setDimensions] = (0, react_1.useState)({ width: 1000, height: 600 });
    const zoomRef = (0, react_1.useRef)(null);
    const gRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        (0, dendrogram_1.fetchDendrogram)().then((res) => {
            setLoading(false);
            setDendrogram(res);
        });
    }, []);
    (0, react_1.useEffect)(() => {
        if (!containerRef.current)
            return;
        const resizeObserver = new ResizeObserver(() => {
            var _a;
            const rect = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            if (rect) {
                setDimensions({
                    width: Math.max(rect.width - 300, 600),
                    height: Math.max(rect.height - 40, 500)
                });
            }
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);
    const getSynergyColor = (0, react_1.useCallback)((synergy) => {
        if (!synergy)
            return "#4a9eff";
        const upperSynergy = synergy.toUpperCase();
        return config_1.SYNERGY_COLORS[upperSynergy] || "#4a9eff";
    }, []);
    const getDominantSynergy = (0, react_1.useCallback)((synergies) => {
        var _a;
        if (!synergies || Object.keys(synergies).length === 0)
            return undefined;
        const sorted = Object.entries(synergies).sort((a, b) => b[1] - a[1]);
        return (_a = sorted[0]) === null || _a === void 0 ? void 0 : _a[0];
    }, []);
    (0, react_1.useEffect)(() => {
        if (!dendrogram || !svgRef.current)
            return;
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();
        const margin = { top: 50, right: 30, bottom: 100, left: 70 };
        const width = dimensions.width - margin.left - margin.right;
        const height = dimensions.height - margin.top - margin.bottom;
        const mainG = svg.append("g").attr("class", "main-group");
        const g = mainG
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
        gRef.current = g;
        const zoom = d3
            .zoom()
            .scaleExtent([0.3, 5])
            .on("zoom", (event) => {
            mainG.attr("transform", event.transform);
        });
        svg.call(zoom);
        zoomRef.current = zoom;
        const allX = dendrogram.icoord.flat();
        const allY = dendrogram.dcoord.flat();
        const xMin = Math.min(...allX);
        const xMax = Math.max(...allX);
        const yMin = 0;
        const yMax = Math.max(...allY);
        const xScale = d3.scaleLinear().domain([xMin, xMax]).range([0, width]);
        const yScale = d3.scaleLinear().domain([yMin, yMax]).range([height, 0]);
        const branchProfileMap = new Map();
        if (dendrogram.branch_profiles && dendrogram.branch_profiles.length > 0) {
            dendrogram.branch_profiles.forEach((profile) => {
                branchProfileMap.set(profile.branch_index, profile);
            });
        }
        const leafXPositions = [];
        dendrogram.icoord.forEach((xCoords, i) => {
            const yCoords = dendrogram.dcoord[i];
            if (yCoords[0] === 0)
                leafXPositions.push(xCoords[0]);
            if (yCoords[3] === 0)
                leafXPositions.push(xCoords[3]);
        });
        const uniqueLeafX = [...new Set(leafXPositions)].sort((a, b) => a - b);
        const leafXToProfile = new Map();
        uniqueLeafX.forEach((leafX, idx) => {
            if (dendrogram.cluster_profiles[idx]) {
                leafXToProfile.set(leafX, dendrogram.cluster_profiles[idx]);
            }
        });
        g.append("g")
            .attr("class", "grid")
            .selectAll("line.horizontal")
            .data(yScale.ticks(10))
            .enter()
            .append("line")
            .attr("class", "horizontal")
            .attr("x1", 0)
            .attr("x2", width)
            .attr("y1", (d) => yScale(d))
            .attr("y2", (d) => yScale(d))
            .attr("stroke", "#333")
            .attr("stroke-opacity", 0.3)
            .attr("stroke-dasharray", "2,2");
        const branchesGroup = g.append("g").attr("class", "branches");
        const iconsGroup = g.append("g").attr("class", "branch-icons");
        dendrogram.icoord.forEach((xCoords, i) => {
            const yCoords = dendrogram.dcoord[i];
            const branchProfile = branchProfileMap.get(i);
            const dominantSynergy = branchProfile === null || branchProfile === void 0 ? void 0 : branchProfile.synergy;
            const color = getSynergyColor(dominantSynergy);
            const pathData = `
        M ${xScale(xCoords[0])} ${yScale(yCoords[0])}
        L ${xScale(xCoords[1])} ${yScale(yCoords[1])}
        L ${xScale(xCoords[2])} ${yScale(yCoords[2])}
        L ${xScale(xCoords[3])} ${yScale(yCoords[3])}
      `;
            branchesGroup
                .append("path")
                .attr("d", pathData)
                .attr("fill", "none")
                .attr("stroke", color)
                .attr("stroke-width", 2)
                .attr("opacity", 0.85)
                .attr("class", "branch")
                .attr("data-index", i)
                .attr("data-synergy", dominantSynergy || "")
                .style("cursor", "pointer")
                .on("mouseover", function () {
                d3.select(this).attr("stroke-width", 4).attr("opacity", 1);
                if (branchProfile)
                    setHoveredBranch(branchProfile);
            })
                .on("mouseout", function () {
                d3.select(this).attr("stroke-width", 2).attr("opacity", 0.85);
                setHoveredBranch(null);
            });
        });
        dendrogram.icoord.forEach((xCoords, i) => {
            const yCoords = dendrogram.dcoord[i];
            const branchProfile = branchProfileMap.get(i);
            const dominantSynergy = branchProfile === null || branchProfile === void 0 ? void 0 : branchProfile.synergy;
            const color = getSynergyColor(dominantSynergy);
            const mergeX = (xCoords[1] + xCoords[2]) / 2;
            const mergeY = yCoords[1];
            const normalizedHeight = mergeY / yMax;
            const iconSize = 10 + normalizedHeight * 30;
            const hoverScale = 1.3;
            if (dominantSynergy) {
                iconsGroup
                    .append("image")
                    .attr("href", `assets/types/${dominantSynergy.toUpperCase()}.svg`)
                    .attr("x", xScale(mergeX) - iconSize / 2)
                    .attr("y", yScale(mergeY) - iconSize / 2)
                    .attr("width", iconSize)
                    .attr("height", iconSize)
                    .style("cursor", "pointer")
                    .on("mouseover", function () {
                    d3.select(this)
                        .attr("width", iconSize * hoverScale)
                        .attr("height", iconSize * hoverScale)
                        .attr("x", xScale(mergeX) - (iconSize * hoverScale) / 2)
                        .attr("y", yScale(mergeY) - (iconSize * hoverScale) / 2);
                    if (branchProfile)
                        setHoveredBranch(branchProfile);
                })
                    .on("mouseout", function () {
                    d3.select(this)
                        .attr("width", iconSize)
                        .attr("height", iconSize)
                        .attr("x", xScale(mergeX) - iconSize / 2)
                        .attr("y", yScale(mergeY) - iconSize / 2);
                    setHoveredBranch(null);
                });
            }
            else {
                iconsGroup
                    .append("circle")
                    .attr("cx", xScale(mergeX))
                    .attr("cy", yScale(mergeY))
                    .attr("r", 5)
                    .attr("fill", color)
                    .attr("stroke", "#222")
                    .attr("stroke-width", 1.5)
                    .style("cursor", "pointer")
                    .on("mouseover", function () {
                    d3.select(this).attr("r", 8).attr("stroke-width", 2);
                    if (branchProfile)
                        setHoveredBranch(branchProfile);
                })
                    .on("mouseout", function () {
                    d3.select(this).attr("r", 5).attr("stroke-width", 1.5);
                    setHoveredBranch(null);
                });
            }
        });
        const leafLabelsGroup = g.append("g").attr("class", "leaf-labels");
        uniqueLeafX.forEach((leafX, idx) => {
            const profile = leafXToProfile.get(leafX);
            const synergy = getDominantSynergy(profile === null || profile === void 0 ? void 0 : profile.synergies);
            const color = getSynergyColor(synergy);
            const leafIconSize = 14;
            const leafHoverScale = 1.4;
            if (synergy) {
                leafLabelsGroup
                    .append("image")
                    .attr("href", `assets/types/${synergy.toUpperCase()}.svg`)
                    .attr("x", xScale(leafX) - leafIconSize / 2)
                    .attr("y", height + 8 - leafIconSize / 2)
                    .attr("width", leafIconSize)
                    .attr("height", leafIconSize)
                    .style("cursor", "pointer")
                    .on("mouseover", function () {
                    d3.select(this)
                        .attr("width", leafIconSize * leafHoverScale)
                        .attr("height", leafIconSize * leafHoverScale)
                        .attr("x", xScale(leafX) - (leafIconSize * leafHoverScale) / 2)
                        .attr("y", height + 8 - (leafIconSize * leafHoverScale) / 2);
                    if (profile)
                        setHoveredCluster(profile);
                })
                    .on("mouseout", function () {
                    d3.select(this)
                        .attr("width", leafIconSize)
                        .attr("height", leafIconSize)
                        .attr("x", xScale(leafX) - leafIconSize / 2)
                        .attr("y", height + 8 - leafIconSize / 2);
                    setHoveredCluster(null);
                })
                    .on("click", function () {
                    if (profile)
                        setSelectedCluster(profile);
                });
            }
            else {
                leafLabelsGroup
                    .append("circle")
                    .attr("cx", xScale(leafX))
                    .attr("cy", height + 8)
                    .attr("r", 6)
                    .attr("fill", color)
                    .attr("stroke", "#222")
                    .attr("stroke-width", 1.5)
                    .style("cursor", "pointer")
                    .on("mouseover", function () {
                    d3.select(this).attr("r", 9).attr("stroke-width", 2);
                    if (profile)
                        setHoveredCluster(profile);
                })
                    .on("mouseout", function () {
                    d3.select(this).attr("r", 6).attr("stroke-width", 1.5);
                    setHoveredCluster(null);
                })
                    .on("click", function () {
                    if (profile)
                        setSelectedCluster(profile);
                });
            }
        });
    }, [dendrogram, dimensions, getSynergyColor, getDominantSynergy]);
    const displayedCluster = hoveredCluster || selectedCluster;
    return ((0, jsx_runtime_1.jsx)("div", { className: "dendrogram-container", ref: containerRef, children: loading ? ((0, jsx_runtime_1.jsx)("div", { className: "dendrogram-loading", children: t("dendrogram.loading") })) : !dendrogram ? ((0, jsx_runtime_1.jsx)("div", { className: "dendrogram-no-data", children: t("dendrogram.no_data") })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "dendrogram-chart-wrapper", children: (0, jsx_runtime_1.jsx)("svg", { ref: svgRef, width: dimensions.width, height: dimensions.height }) }), (0, jsx_runtime_1.jsxs)("div", { className: "dendrogram-info-panel", children: [(0, jsx_runtime_1.jsx)("h3", { children: t("dendrogram.title") }), (0, jsx_runtime_1.jsx)("p", { className: "dendrogram-info-text", children: t("dendrogram.description") }), (0, jsx_runtime_1.jsxs)("div", { className: "dendrogram-stats", children: [(0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("dendrogram.total_clusters"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: dendrogram.n_clusters })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("dendrogram.total_matches"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: dendrogram.n_samples })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("dendrogram.linkage_method"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: dendrogram.linkage_method })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("dendrogram.branches"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: dendrogram.icoord.length })] })] }), hoveredBranch && ((0, jsx_runtime_1.jsxs)("div", { className: "branch-detail-panel", children: [(0, jsx_runtime_1.jsxs)("h4", { children: [t("dendrogram.branch"), " #", hoveredBranch.branch_index + 1] }), (0, jsx_runtime_1.jsxs)("div", { className: "branch-stats", children: [(0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("dendrogram.branch_total_matches"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: hoveredBranch.total_size })] }), (0, jsx_runtime_1.jsxs)("div", { className: "stat-item", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("dendrogram.branch_contains_clusters"), ":"] }), (0, jsx_runtime_1.jsx)("span", { children: hoveredBranch.leaf_cluster_ids.length })] })] }), hoveredBranch.synergy && ((0, jsx_runtime_1.jsx)("div", { className: "synergies-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "synergy-item-display", children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: hoveredBranch.synergy.toUpperCase(), size: "32px" }), (0, jsx_runtime_1.jsx)("span", { children: t(`synergy.${hoveredBranch.synergy.toUpperCase()}`) })] }) })), hoveredBranch.top_pokemons &&
                                    hoveredBranch.top_pokemons.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "pokemon-grid", children: hoveredBranch.top_pokemons.map((pokemon, idx) => ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-container-item", children: [(0, jsx_runtime_1.jsx)("div", { className: "pokemon-portrait-wrapper", children: (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: Pokemon_1.PkmIndex[pokemon.name] }) }), (0, jsx_runtime_1.jsx)("div", { className: "pokemon-frequency", children: pokemon.count })] }, idx))) }))] })), displayedCluster && ((0, jsx_runtime_1.jsxs)("div", { className: "cluster-detail-panel", children: [(0, jsx_runtime_1.jsxs)("h4", { children: [hoveredCluster
                                            ? t("dendrogram.hovered_cluster")
                                            : t("dendrogram.selected_cluster"), " ", t("dendrogram.cluster"), " #", displayedCluster.cluster_id] }), (0, jsx_runtime_1.jsxs)("div", { className: "cluster-size", children: [(0, jsx_runtime_1.jsxs)("label", { children: [t("dendrogram.cluster_size"), ":"] }), (0, jsx_runtime_1.jsxs)("span", { children: [displayedCluster.size, " ", t("dendrogram.matches")] })] }), displayedCluster.synergies &&
                                    Object.keys(displayedCluster.synergies).length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "synergies-container", children: Object.entries(displayedCluster.synergies)
                                        .sort((a, b) => b[1] - a[1])
                                        .slice(0, 3)
                                        .map(([type, level]) => ((0, jsx_runtime_1.jsxs)("div", { className: "synergy-item-display", children: [(0, jsx_runtime_1.jsx)(synergy_icon_1.default, { type: type.toUpperCase(), size: "32px" }), (0, jsx_runtime_1.jsx)("span", { children: level })] }, type))) })), displayedCluster.top_pokemons &&
                                    displayedCluster.top_pokemons.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "pokemon-grid", children: displayedCluster.top_pokemons
                                        .slice(0, 10)
                                        .map((pokemon, idx) => ((0, jsx_runtime_1.jsxs)("div", { className: "pokemon-container-item", children: [(0, jsx_runtime_1.jsx)("div", { className: "pokemon-portrait-wrapper", children: (0, jsx_runtime_1.jsx)(pokemon_portrait_1.default, { portrait: Pokemon_1.PkmIndex[pokemon.name] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "pokemon-frequency", children: [(pokemon.frequency * 100).toFixed(0), "%"] })] }, idx))) }))] }))] })] })) }));
}
//# sourceMappingURL=dendrogram-chart.js.map