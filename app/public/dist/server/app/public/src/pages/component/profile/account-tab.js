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
exports.AccountTab = AccountTab;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const config_1 = require("../../../../../config");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const NetworkStore_1 = require("../../../stores/NetworkStore");
function AccountTab() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const promptDeleteAccount = () => {
        const confirmation = prompt(t("profile.account.delete_account_confirmation"));
        if (confirmation === t("profile.account.delete_account_passphrase")) {
            (0, network_1.deleteAccount)();
        }
        else if (confirmation != null) {
            alert(t("profile.account.delete_account_confirmation_failed"));
        }
    };
    return user ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(ChangeNameForm, {}), (0, jsx_runtime_1.jsx)(TwitchLinkSection, {}), (0, jsx_runtime_1.jsx)("h3", { children: t("profile.account.user_id") }), (0, jsx_runtime_1.jsxs)("p", { children: [t("profile.account.user_id_hint1"), " ", (0, jsx_runtime_1.jsx)("span", { style: { color: "red" }, children: user.uid })] }), (0, jsx_runtime_1.jsx)("p", { children: t("profile.account.user_id_hint2") }), (0, jsx_runtime_1.jsx)("h3", { children: t("profile.account.delete_account") }), (0, jsx_runtime_1.jsx)("p", { children: t("profile.account.delete_account_hint") }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly red", onClick: () => promptDeleteAccount(), children: t("profile.account.delete_account") })] })) : null;
}
function TwitchLinkSection() {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const [loadingAction, setLoadingAction] = (0, react_1.useState)(null);
    function handleConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            setLoadingAction("connect");
            try {
                const payload = yield (0, network_1.startTwitchVerification)();
                window.location.assign(payload.authorizeUrl);
            }
            catch (error) {
                dispatch((0, NetworkStore_1.setErrorAlertMessage)(error instanceof Error
                    ? error.message
                    : "Unable to start Twitch verification"));
                setLoadingAction(null);
            }
        });
    }
    function handleUnlink() {
        return __awaiter(this, void 0, void 0, function* () {
            const confirmed = window.confirm("Are you sure you want to unlink your Twitch account?");
            if (!confirmed) {
                return;
            }
            setLoadingAction("unlink");
            try {
                yield (0, network_1.unlinkTwitchVerification)();
                yield (0, network_1.fetchProfile)(true);
            }
            catch (error) {
                dispatch((0, NetworkStore_1.setErrorAlertMessage)(error instanceof Error
                    ? error.message
                    : "Unable to unlink Twitch account"));
            }
            finally {
                setLoadingAction(null);
            }
        });
    }
    if (!user) {
        return null;
    }
    const verifiedAt = user.twitchVerifiedAt
        ? new Date(user.twitchVerifiedAt).toLocaleString()
        : null;
    const twitchProfileUrl = user.twitchLogin
        ? `https://www.twitch.tv/${user.twitchLogin}`
        : null;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Twitch" }), user.twitchUserId && user.twitchLogin ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["Linked as", " ", (0, jsx_runtime_1.jsx)("strong", { children: user.twitchDisplayName || user.twitchLogin }), " (@", user.twitchLogin, ")"] }), verifiedAt && (0, jsx_runtime_1.jsxs)("p", { children: ["Verified on ", verifiedAt] }), twitchProfileUrl && ((0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)("a", { href: twitchProfileUrl, target: "_blank", rel: "noreferrer", children: "Open Twitch profile" }) })), (0, jsx_runtime_1.jsx)("button", { className: "bubbly red", disabled: loadingAction != null, onClick: () => handleUnlink(), children: loadingAction === "unlink" ? "Unlinking..." : "Unlink Twitch" })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Link your Twitch account to verify streamer identity and connect your PAC profile to your Twitch login." }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", disabled: loadingAction != null, onClick: () => handleConnect(), children: loadingAction === "connect" ? "Connecting..." : "Connect Twitch" })] }))] }));
}
function ChangeNameForm() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const dispatch = (0, hooks_1.useAppDispatch)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const isAnonymous = false;
    function tryChangeName(newName) {
        newName = newName.replace(/[\u3164\u200B-\u200D\u2060\uFEFF]/g, "");
        if (config_1.USERNAME_REGEXP.test(newName)) {
            dispatch((0, NetworkStore_1.changeName)(newName));
        }
        else {
            dispatch((0, NetworkStore_1.setErrorAlertMessage)(t("profile.account.invalid_username")));
        }
    }
    if (user && isAnonymous) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "my-container", children: (0, jsx_runtime_1.jsx)("p", { children: t("profile.account.anonymous_users_name_hint") }) }));
    }
    return user ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: t("profile.account.change_name") }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: "0.5em" }, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: user.displayName, onChange: (e) => {
                            setInputValue(e.target.value);
                        } }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: () => tryChangeName(inputValue), children: t("change") })] }), (0, jsx_runtime_1.jsx)("p", { className: "disclaimer", children: t("profile.account.username_disclaimer") })] })) : null;
}
//# sourceMappingURL=account-tab.js.map