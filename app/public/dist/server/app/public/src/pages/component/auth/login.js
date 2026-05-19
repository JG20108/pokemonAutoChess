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
exports.default = Login;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = __importDefault(require("firebase/compat/app"));
require("firebase/compat/auth");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_1 = require("react-router");
const config_1 = require("../../../../../config");
const function_1 = require("../../../../../utils/function");
const lobby_logic_1 = require("../../../game/lobby-logic");
const hooks_1 = require("../../../hooks");
const NetworkStore_1 = require("../../../stores/NetworkStore");
const styled_firebase_auth_1 = require("./styled-firebase-auth");
require("firebaseui/dist/firebaseui.css");
require("./login.css");
function Login() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const navigate = (0, react_router_1.useNavigate)();
    const uid = (0, hooks_1.useAppSelector)((state) => state.network.uid);
    const displayName = (0, hooks_1.useAppSelector)((state) => state.network.displayName);
    const email = (0, hooks_1.useAppSelector)((state) => state.network.email);
    const [prejoining, setPrejoining] = (0, react_1.useState)(false);
    const [loggingOut, setLoggingOut] = (0, react_1.useState)(false);
    const preJoinLobby = (0, function_1.throttle)(function prejoin() {
        return __awaiter(this, void 0, void 0, function* () {
            setPrejoining(true);
            return (0, lobby_logic_1.joinLobbyRoom)(dispatch, navigate)
                .then(() => navigate("/lobby"))
                .catch(() => setPrejoining(false));
        });
    }, 1000);
    const uiConfig = {
        signInFlow: "popup",
        signInSuccessUrl: window.location.href + "lobby",
        signInOptions: [
            app_1.default.auth.GoogleAuthProvider.PROVIDER_ID,
            {
                provider: app_1.default.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: true
            },
            app_1.default.auth.TwitterAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => true
        }
    };
    if (!app_1.default.apps.length) {
        app_1.default.initializeApp(config_1.FIREBASE_CONFIG);
    }
    (0, react_1.useEffect)(() => {
        app_1.default.auth().onAuthStateChanged((u) => {
            if (u) {
                dispatch((0, NetworkStore_1.logIn)(u));
            }
        });
    });
    if (!uid) {
        return ((0, jsx_runtime_1.jsx)("div", { id: "play-panel", children: (0, jsx_runtime_1.jsx)(styled_firebase_auth_1.StyledFirebaseAuth, { uiConfig: uiConfig, firebaseAuth: app_1.default.auth() }) }));
    }
    else {
        return ((0, jsx_runtime_1.jsxs)("div", { id: "play-panel", children: [(0, jsx_runtime_1.jsxs)("p", { children: [t("auth.authenticated_as"), ":", " ", (0, jsx_runtime_1.jsx)("span", { title: `${displayName}${email ? ` (${email})` : ""}`, children: t("auth.hover_to_reveal") })] }), (0, jsx_runtime_1.jsxs)("ul", { className: "actions", children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("button", { className: "bubbly green", onClick: preJoinLobby, disabled: prejoining, children: prejoining ? t("auth.connecting") : t("auth.join_lobby") }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("button", { className: "bubbly red", disabled: prejoining || loggingOut, onClick: () => __awaiter(this, void 0, void 0, function* () {
                                    setLoggingOut(true);
                                    try {
                                        yield app_1.default.auth().signOut();
                                        dispatch((0, NetworkStore_1.logOut)());
                                    }
                                    finally {
                                        setLoggingOut(false);
                                    }
                                }), children: loggingOut ? t("auth.signing_out") : t("auth.sign_out") }) })] })] }));
    }
}
//# sourceMappingURL=login.js.map