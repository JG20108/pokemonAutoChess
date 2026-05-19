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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const client_1 = require("react-dom/client");
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const i18n_1 = __importDefault(require("./i18n"));
const after_game_1 = __importDefault(require("./pages/after-game"));
const auth_1 = __importDefault(require("./pages/auth"));
const bot_builder_1 = __importDefault(require("./pages/component/bot-builder/bot-builder"));
const bot_manager_panel_1 = require("./pages/component/bot-builder/bot-manager-panel");
const map_viewer_1 = __importDefault(require("./pages/component/debug/map-viewer"));
const game_1 = __importDefault(require("./pages/game"));
const gameboy_1 = require("./pages/gameboy");
const lobby_1 = __importDefault(require("./pages/lobby"));
const preparation_1 = __importDefault(require("./pages/preparation"));
const sprite_viewer_1 = require("./pages/sprite-viewer");
const translations_1 = __importDefault(require("./pages/translations"));
const index_1 = __importDefault(require("./stores/index"));
require("./style/index.css");
require("./theme");
if (window.top && window !== window.top) {
    window.top.location.replace(window.location.href);
}
if (window.opener) {
    window.opener.location.replace(window.location.href);
}
const container = document.getElementById("root");
const root = (0, client_1.createRoot)(container);
i18n_1.default.on("initialized", () => {
    root.render((0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: index_1.default, children: (0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: "loading", children: (0, jsx_runtime_1.jsx)(react_router_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(auth_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/auth", element: (0, jsx_runtime_1.jsx)(auth_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/lobby", element: (0, jsx_runtime_1.jsx)(lobby_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/preparation", element: (0, jsx_runtime_1.jsx)(preparation_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/game", element: (0, jsx_runtime_1.jsx)(game_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/after", element: (0, jsx_runtime_1.jsx)(after_game_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/bot-builder", element: (0, jsx_runtime_1.jsx)(bot_builder_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/bot-admin", element: (0, jsx_runtime_1.jsx)(bot_manager_panel_1.BotManagerPanel, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/sprite-viewer", element: (0, jsx_runtime_1.jsx)(sprite_viewer_1.SpriteDebug, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/map-viewer", element: (0, jsx_runtime_1.jsx)(map_viewer_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/gameboy", element: (0, jsx_runtime_1.jsx)(gameboy_1.Gameboy, {}) }), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/translations", element: (0, jsx_runtime_1.jsx)(translations_1.default, {}) })] }) }) }) }) }));
});
if (navigator.serviceWorker) {
    navigator.serviceWorker.register("sw.js");
}
//# sourceMappingURL=index.js.map