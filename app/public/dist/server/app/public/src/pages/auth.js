"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Auth;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_i18next_1 = require("react-i18next");
const package_json_1 = __importDefault(require("../../../../package.json"));
const hooks_1 = require("../hooks");
const network_1 = require("../network");
const NetworkStore_1 = require("../stores/NetworkStore");
const login_1 = __importDefault(require("./component/auth/login"));
const discord_button_1 = __importDefault(require("./component/buttons/discord-button"));
const github_button_1 = __importDefault(require("./component/buttons/github-button"));
const policy_button_1 = __importDefault(require("./component/buttons/policy-button"));
const terms_button_1 = __importDefault(require("./component/buttons/terms-button"));
const modal_1 = require("./component/modal/modal");
const servers_list_1 = __importDefault(require("./component/servers/servers-list"));
const wiki_1 = __importDefault(require("./component/wiki/wiki"));
require("./auth.css");
function Auth() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const isSupposedlyMobile = navigator.maxTouchPoints > 0 &&
        window.matchMedia("(orientation: portrait)").matches;
    const [modal, setModal] = react_1.default.useState(null);
    const [twitchCallbackMessage, setTwitchCallbackMessage] = react_1.default.useState(null);
    const [shouldRefreshProfile, setShouldRefreshProfile] = react_1.default.useState(false);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const networkError = (0, hooks_1.useAppSelector)((state) => state.network.error);
    const uid = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    const discordUrl = process.env.DISCORD_SERVER;
    react_1.default.useEffect(() => {
        const url = new URL(window.location.href);
        const twitchVerify = url.searchParams.get("twitchVerify");
        if (!twitchVerify) {
            return;
        }
        if (twitchVerify === "success") {
            setTwitchCallbackMessage({
                kind: "success",
                body: "Your Twitch account has been linked successfully."
            });
            setShouldRefreshProfile(true);
        }
        else {
            setTwitchCallbackMessage({
                kind: "error",
                body: twitchVerify.replace(/\+/g, " ")
            });
        }
        url.searchParams.delete("twitchVerify");
        window.history.replaceState({}, "", url.toString());
    }, []);
    react_1.default.useEffect(() => {
        if (!shouldRefreshProfile || !uid) {
            return;
        }
        (0, network_1.fetchProfile)(true)
            .catch((error) => {
            dispatch((0, NetworkStore_1.setErrorAlertMessage)(error instanceof Error ? error.message : "Unable to refresh profile"));
        })
            .finally(() => {
            setShouldRefreshProfile(false);
        });
    }, [dispatch, shouldRefreshProfile, uid]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "auth-page", children: [isSupposedlyMobile && ((0, jsx_runtime_1.jsx)("p", { className: "mobile-warning", children: t("auth.mobile_warning") })), (0, jsx_runtime_1.jsx)("img", { className: "logo", src: "assets/ui/pokemon_autochess_final.svg" }), (0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h1", { children: t("auth.pokemon_auto_chess") }), (0, jsx_runtime_1.jsx)("div", { className: "disclaimer", children: (0, jsx_runtime_1.jsx)("p", { children: t("auth.nintendo_warning") }) })] }), (0, jsx_runtime_1.jsx)("main", { children: (0, jsx_runtime_1.jsx)(login_1.default, {}) }), (0, jsx_runtime_1.jsxs)("div", { className: "media", children: [(0, jsx_runtime_1.jsx)(discord_button_1.default, { url: discordUrl }), (0, jsx_runtime_1.jsx)(github_button_1.default, {}), (0, jsx_runtime_1.jsx)(policy_button_1.default, {}), (0, jsx_runtime_1.jsx)(terms_button_1.default, {}), (0, jsx_runtime_1.jsxs)("button", { className: "bubbly blue", onClick: () => setModal("wiki"), children: [(0, jsx_runtime_1.jsx)("img", { width: 32, height: 32, src: `assets/ui/wiki.svg` }), t("wiki.title")] }), (0, jsx_runtime_1.jsxs)("button", { className: "bubbly pink", onClick: () => setModal("servers"), children: [(0, jsx_runtime_1.jsx)("img", { width: 32, height: 32, src: `assets/ui/players.svg` }), t("servers_list.title")] }), (0, jsx_runtime_1.jsxs)("span", { children: ["V", package_json_1.default.version] }), (0, jsx_runtime_1.jsxs)("p", { children: [t("auth.made_for_fans"), (0, jsx_runtime_1.jsx)("br", {}), t("auth.non_profit"), " / ", t("auth.open_source"), (0, jsx_runtime_1.jsx)("br", {}), t("auth.copyright")] })] }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { onClose: () => setModal(null), show: modal === "wiki", className: "wiki-modal", header: t("wiki.title"), children: (0, jsx_runtime_1.jsx)(wiki_1.default, { inGame: false }) }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { onClose: () => setModal(null), show: modal === "servers", className: "servers-modal", header: t("servers_list.title"), children: (0, jsx_runtime_1.jsx)(servers_list_1.default, {}) }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { show: networkError != null, onClose: () => {
                    dispatch((0, NetworkStore_1.setErrorAlertMessage)(null));
                }, className: "is-dark basic-modal-body", body: (0, jsx_runtime_1.jsx)("p", { style: { padding: "1em" }, children: networkError }) }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { show: twitchCallbackMessage != null, onClose: () => {
                    setTwitchCallbackMessage(null);
                }, className: "is-dark basic-modal-body", header: (twitchCallbackMessage === null || twitchCallbackMessage === void 0 ? void 0 : twitchCallbackMessage.kind) === "success"
                    ? "Twitch Linked"
                    : "Twitch Verification Error", body: (0, jsx_runtime_1.jsx)("p", { style: { padding: "1em" }, children: twitchCallbackMessage === null || twitchCallbackMessage === void 0 ? void 0 : twitchCallbackMessage.body }) })] }));
}
//# sourceMappingURL=auth.js.map