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
exports.StyledFirebaseAuth = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const auth_1 = require("firebase/auth");
const firebaseui = __importStar(require("firebaseui"));
require("firebaseui/dist/firebaseui.css");
const react_1 = require("react");
const StyledFirebaseAuth = ({ uiConfig, firebaseAuth, className, uiCallback }) => {
    const [userSignedIn, setUserSignedIn] = (0, react_1.useState)(false);
    const elementRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const firebaseUiWidget = firebaseui.auth.AuthUI.getInstance() ||
            new firebaseui.auth.AuthUI(firebaseAuth);
        if (uiConfig.signInFlow === "popup")
            firebaseUiWidget.reset();
        const unregisterAuthObserver = (0, auth_1.onAuthStateChanged)(firebaseAuth, (user) => {
            if (!user && userSignedIn)
                firebaseUiWidget.reset();
            setUserSignedIn(!!user);
        });
        if (uiCallback)
            uiCallback(firebaseUiWidget);
        firebaseUiWidget.start(elementRef.current, uiConfig);
        return () => {
            unregisterAuthObserver();
            firebaseUiWidget.reset();
        };
    }, [firebaseui, uiConfig]);
    return (0, jsx_runtime_1.jsx)("div", { className: className, ref: elementRef });
};
exports.StyledFirebaseAuth = StyledFirebaseAuth;
//# sourceMappingURL=styled-firebase-auth.js.map