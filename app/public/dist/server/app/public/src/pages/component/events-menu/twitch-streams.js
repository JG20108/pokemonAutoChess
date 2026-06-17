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
exports.TwitchStreams = TwitchStreams;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const types_1 = require("../../../../../types");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const remove_button_1 = require("../buttons/remove-button");
const modal_1 = require("../modal/modal");
require("./twitch-streams.css");
function formatViewers(count) {
    if (count >= 1000) {
        return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    }
    return String(count);
}
function formatDuration(startedAt) {
    const diffMs = Date.now() - new Date(startedAt).getTime();
    const totalMinutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours > 0) {
        return `${hours}h${String(minutes).padStart(2, "0")}m`;
    }
    return `${minutes}m`;
}
function TwitchStreams() {
    const { t } = (0, react_i18next_1.useTranslation)();
    const user = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const [streams, setStreams] = (0, react_1.useState)([]);
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    const [confirmStream, setConfirmStream] = (0, react_1.useState)(null);
    const [blacklistReason, setBlacklistReason] = (0, react_1.useState)("");
    const [actionError, setActionError] = (0, react_1.useState)(null);
    const [isDeleting, setIsDeleting] = (0, react_1.useState)(false);
    const canModerateStreams = (user === null || user === void 0 ? void 0 : user.role) === types_1.Role.ADMIN || (user === null || user === void 0 ? void 0 : user.role) === types_1.Role.MODERATOR;
    const fetchStreams = (0, react_1.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const response = yield fetch(`/twitch/streams?t=${Math.floor(Date.now() / 300000)}`);
            const data = (yield response.json());
            setStreams((_a = data.streams) !== null && _a !== void 0 ? _a : []);
            setError(data.error);
        }
        catch (_b) {
            setError(t("twitch_streams.unavailable"));
        }
        finally {
            setIsLoading(false);
        }
    }), [t]);
    (0, react_1.useEffect)(() => {
        let isMounted = true;
        fetchStreams().catch(() => undefined);
        const interval = setInterval(() => {
            if (isMounted) {
                fetchStreams().catch(() => undefined);
            }
        }, 1000 * 60 * 2);
        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [fetchStreams]);
    function handleConfirmDelete() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!confirmStream) {
                return;
            }
            setIsDeleting(true);
            setActionError(null);
            try {
                yield (0, network_1.addTwitchBlacklist)(confirmStream.userLogin, blacklistReason.trim() || undefined);
                setConfirmStream(null);
                setBlacklistReason("");
                yield fetchStreams();
            }
            catch (e) {
                setActionError((_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : "Unable to blacklist streamer");
            }
            finally {
                setIsDeleting(false);
            }
        });
    }
    if (isLoading) {
        return (0, jsx_runtime_1.jsx)("p", { className: "subtitle", children: t("loading") });
    }
    if (error && streams.length === 0) {
        return (0, jsx_runtime_1.jsx)("p", { className: "subtitle", children: error });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [actionError && ((0, jsx_runtime_1.jsx)("p", { className: "subtitle twitch-stream-action-error", children: actionError })), (0, jsx_runtime_1.jsx)("div", { className: "twitch-streams", children: streams.map((stream) => ((0, jsx_runtime_1.jsxs)("div", { className: "twitch-stream-card my-box", children: [(0, jsx_runtime_1.jsxs)("a", { className: "twitch-stream-link", href: stream.url, rel: "noreferrer", target: "_blank", children: [(0, jsx_runtime_1.jsx)("img", { alt: stream.title, className: "twitch-stream-thumbnail", loading: "lazy", src: stream.thumbnailUrl }), (0, jsx_runtime_1.jsxs)("div", { className: "twitch-stream-content", children: [(0, jsx_runtime_1.jsx)("h3", { children: stream.userName }), (0, jsx_runtime_1.jsx)("p", { title: stream.title, children: stream.title }), (0, jsx_runtime_1.jsxs)("div", { className: "twitch-stream-meta", children: [(0, jsx_runtime_1.jsx)("span", { className: "twitch-stream-viewers", children: t("twitch_streams.viewers", {
                                                        count: formatViewers(stream.viewerCount)
                                                    }) }), (0, jsx_runtime_1.jsx)("span", { className: "twitch-stream-live-duration", children: t("twitch_streams.live_duration", {
                                                        duration: formatDuration(stream.startedAt)
                                                    }) })] }), stream.tags.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "twitch-stream-tags", children: [stream.tags.slice(0, 3).map((tag) => ((0, jsx_runtime_1.jsx)("span", { className: "twitch-stream-tag", children: tag }, tag))), stream.tags.length > 3 && ((0, jsx_runtime_1.jsxs)("span", { className: "twitch-stream-tag twitch-stream-tag-overflow", children: ["+", stream.tags.length - 3] }))] }))] })] }), canModerateStreams && ((0, jsx_runtime_1.jsx)("div", { className: "twitch-stream-delete-btn", children: (0, jsx_runtime_1.jsx)(remove_button_1.RemoveButton, { title: `Blacklist @${stream.userLogin}`, onClick: () => {
                                    setActionError(null);
                                    setBlacklistReason("");
                                    setConfirmStream(stream);
                                } }) }))] }, stream.id))) }), (0, jsx_runtime_1.jsxs)(modal_1.Modal, { show: Boolean(confirmStream), onClose: () => {
                    if (isDeleting) {
                        return false;
                    }
                    setBlacklistReason("");
                    setConfirmStream(null);
                }, header: "Confirm Twitch blacklist", footer: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", disabled: isDeleting, onClick: () => {
                                setBlacklistReason("");
                                setConfirmStream(null);
                            }, children: "Cancel" }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly red", disabled: isDeleting, onClick: handleConfirmDelete, children: isDeleting ? "Blacklisting..." : "Blacklist" })] }), children: [(0, jsx_runtime_1.jsxs)("p", { children: ["Add ", (0, jsx_runtime_1.jsxs)("strong", { children: ["@", confirmStream === null || confirmStream === void 0 ? void 0 : confirmStream.userLogin] }), " to Twitch blacklist?"] }), (0, jsx_runtime_1.jsxs)("label", { className: "twitch-blacklist-reason-field", children: [(0, jsx_runtime_1.jsx)("span", { children: "Reason" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "twitch-blacklist-reason-input", maxLength: 300, placeholder: "Optional reason", value: blacklistReason, onChange: (e) => setBlacklistReason(e.target.value) })] })] })] }));
}
//# sourceMappingURL=twitch-streams.js.map