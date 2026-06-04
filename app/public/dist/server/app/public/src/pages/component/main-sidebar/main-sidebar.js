"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSidebar = MainSidebar;
const jsx_runtime_1 = require("react/jsx-runtime");
const toolkit_1 = require("@reduxjs/toolkit");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_pro_sidebar_1 = require("react-pro-sidebar");
const react_router_1 = require("react-router");
const package_json_1 = __importDefault(require("../../../../../../package.json"));
const gadgets_1 = require("../../../../../config/game/gadgets");
const types_1 = require("../../../../../types");
const hooks_1 = require("../../../hooks");
const preferences_1 = require("../../../preferences");
const LobbyStore_1 = require("../../../stores/LobbyStore");
const fullscreen_1 = require("../../utils/fullscreen");
const jsx_1 = require("../../utils/jsx");
const admin_panel_1 = __importDefault(require("../admin/admin-panel"));
const booster_1 = __importDefault(require("../booster/booster"));
const team_builder_modal_1 = __importDefault(require("../bot-builder/team-builder-modal"));
const pokemon_collection_1 = __importDefault(require("../collection/pokemon-collection"));
const jukebox_1 = __importDefault(require("../jukebox/jukebox"));
const meta_report_1 = __importDefault(require("../meta-report/meta-report"));
const modal_1 = require("../modal/modal");
const moderation_panel_1 = __importDefault(require("../moderation/moderation-panel"));
const game_options_modal_1 = __importDefault(require("../options/game-options-modal"));
const patchnotes_1 = __importDefault(require("../patchnotes/patchnotes"));
const usePatchVersion_1 = require("../patchnotes/usePatchVersion");
const pokeguesser_1 = __importDefault(require("../pokeguesser/pokeguesser"));
const profile_1 = __importDefault(require("../profile/profile"));
const servers_list_1 = __importDefault(require("../servers/servers-list"));
const sprite_tracker_modal_1 = __importDefault(require("../sprite-tracker/sprite-tracker-modal"));
const synergy_wheel_1 = __importDefault(require("../synergy-wheel/synergy-wheel"));
const tier_list_maker_modal_1 = __importDefault(require("../tier-list/tier-list-maker-modal"));
const wiki_1 = __importDefault(require("../wiki/wiki"));
require("./main-sidebar.css");
function MainSidebar(props) {
    var _a, _b;
    const { page, leave, leaveLabel } = props;
    const [collapsed, setCollapsed] = (0, react_1.useState)(true);
    const navigate = (0, react_router_1.useNavigate)();
    const [modal, setModal] = (0, react_1.useState)();
    const [showSurrenderConfirm, setShowSurrenderConfirm] = (0, react_1.useState)(false);
    const changeModal = (0, react_1.useCallback)((nextModal) => setModal(nextModal), []);
    const sidebarRef = (0, react_1.useRef)(null);
    const { t } = (0, react_i18next_1.useTranslation)();
    const profile = (0, hooks_1.useAppSelector)((state) => state.network.profile);
    const profileLevel = (_a = profile === null || profile === void 0 ? void 0 : profile.level) !== null && _a !== void 0 ? _a : 0;
    const [preferences] = (0, preferences_1.usePreferences)();
    const { isNewPatch, updateVersionChecked } = (0, usePatchVersion_1.usePatchVersion)();
    const version = package_json_1.default.version;
    const numberOfBooster = (_b = profile === null || profile === void 0 ? void 0 : profile.booster) !== null && _b !== void 0 ? _b : 0;
    (0, react_1.useEffect)(() => {
        if (!sidebarRef.current) {
            return;
        }
        const ref = sidebarRef.current;
        const extendSidebar = () => setCollapsed(false);
        const collapseSidebar = () => setCollapsed(true);
        ref.addEventListener("mouseenter", extendSidebar);
        ref.addEventListener("mouseleave", collapseSidebar);
        return () => {
            if (ref) {
                ref.removeEventListener("mouseenter", extendSidebar);
                ref.removeEventListener("mouseleave", collapseSidebar);
            }
        };
    }, []);
    (0, react_1.useEffect)(() => {
        const handleKeydown = (e) => {
            if (["INPUT", "TEXTAREA", "SELECT", "OPTION"].includes(e.target.tagName)) {
                return;
            }
            const key = e.key.toUpperCase();
            const keybindings = preferences.keybindings;
            if (key === keybindings.wiki) {
                e.preventDefault();
                setModal((current) => (current === "wiki" ? undefined : "wiki"));
            }
            else if (key === keybindings.meta_report) {
                e.preventDefault();
                setModal((current) => (current === "meta" ? undefined : "meta"));
            }
            else if (key === keybindings.team_planner &&
                profileLevel >= gadgets_1.GADGETS.team_planner.levelRequired) {
                e.preventDefault();
                setModal((current) => current === "team-builder" ? undefined : "team-builder");
            }
        };
        window.addEventListener("keydown", handleKeydown);
        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, [preferences.keybindings, profileLevel]);
    const player = (0, hooks_1.useAppSelector)(hooks_1.selectConnectedPlayer);
    const playersAlive = (0, hooks_1.useAppSelector)((0, toolkit_1.createSelector)([(state) => state.game.players], (players) => players.filter((p) => p.life > 0)));
    function onClickLeave() {
        if (player && player.life > 0 && playersAlive.length > 1) {
            setShowSurrenderConfirm(true);
        }
        else {
            leave();
        }
    }
    return ((0, jsx_runtime_1.jsxs)(react_pro_sidebar_1.Sidebar, { collapsed: collapsed, className: "sidebar", ref: sidebarRef, backgroundColor: "transparent", children: [(0, jsx_runtime_1.jsxs)(react_pro_sidebar_1.Menu, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "sidebar-logo", onClick: () => setCollapsed(!collapsed), children: [(0, jsx_runtime_1.jsx)("img", { src: `assets/ui/colyseus-icon.png` }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Pokemon Auto Chess" }), (0, jsx_runtime_1.jsxs)("small", { children: ["v", version] })] })] }), (0, jsx_runtime_1.jsx)(NavLink, { svg: "meta", onClick: () => window.open("/privacy-policy", "_blank"), children: t("policy") }), (0, jsx_runtime_1.jsx)(NavLink, { svg: "meta", onClick: () => window.open("/terms-of-service", "_blank"), children: t("terms_of_service") }), (0, jsx_runtime_1.jsx)(NavLink, { location: "news", svg: "newspaper", handleClick: (newModal) => {
                            changeModal(newModal);
                            if (isNewPatch) {
                                updateVersionChecked();
                            }
                        }, shimmer: isNewPatch, children: t("patch_notes") }), page === "main_lobby" && ((0, jsx_runtime_1.jsx)(NavLink, { location: "profile", svg: "profile", handleClick: changeModal, children: t("profile.title") })), page === "main_lobby" && profileLevel >= gadgets_1.GADGETS.bag.levelRequired && ((0, jsx_runtime_1.jsx)(NavLink, { location: "collection", svg: "collection", className: "blue", handleClick: changeModal, children: t("collection.title") })), (page === "main_lobby" || page === "preparation") &&
                        profileLevel >= gadgets_1.GADGETS.bag.levelRequired && ((0, jsx_runtime_1.jsx)(NavLink, { location: "booster", svg: "booster", className: "blue", handleClick: changeModal, shimmer: numberOfBooster > 0, children: t("boosters") })), (0, jsx_runtime_1.jsx)(NavLink, { location: "wiki", svg: "wiki", className: "green", handleClick: changeModal, children: t("wiki.title") }), (0, jsx_runtime_1.jsx)(NavLink, { svg: "meta", className: "green", location: "meta", handleClick: changeModal, children: t("meta") }), profileLevel >= gadgets_1.GADGETS.team_planner.levelRequired && ((0, jsx_runtime_1.jsx)(NavLink, { svg: "team-builder", location: "team-builder", handleClick: changeModal, children: t("team_builder") })), page !== "game" &&
                        ((!gadgets_1.GADGETS.pokeguesser.disabled &&
                            profileLevel >= gadgets_1.GADGETS.pokeguesser.levelRequired) ||
                            (profile === null || profile === void 0 ? void 0 : profile.role) === types_1.Role.ADMIN) && ((0, jsx_runtime_1.jsx)(NavLink, { svg: "pokeguesser", location: "pokeguesser", handleClick: changeModal, children: t("gadget.pokeguesser") })), ((!gadgets_1.GADGETS.synergy_wheel.disabled &&
                        profileLevel >= gadgets_1.GADGETS.synergy_wheel.levelRequired) ||
                        (profile === null || profile === void 0 ? void 0 : profile.role) === types_1.Role.ADMIN) && ((0, jsx_runtime_1.jsx)(NavLink, { svg: "synergy-wheel", location: "synergy-wheel", handleClick: changeModal, children: t("gadget.synergy_wheel") })), page !== "game" &&
                        ((!gadgets_1.GADGETS.bot_builder.disabled &&
                            profileLevel >= gadgets_1.GADGETS.bot_builder.levelRequired) ||
                            (profile === null || profile === void 0 ? void 0 : profile.role) === types_1.Role.ADMIN) && ((0, jsx_runtime_1.jsx)(NavLink, { svg: "bot", onClick: () => navigate("/bot-builder"), children: t("bot_builder") })), page !== "game" &&
                        ((!gadgets_1.GADGETS.gameboy.disabled &&
                            profileLevel >= gadgets_1.GADGETS.gameboy.levelRequired) ||
                            (profile === null || profile === void 0 ? void 0 : profile.role) === types_1.Role.ADMIN) && ((0, jsx_runtime_1.jsx)(NavLink, { svg: "gameboy", onClick: () => navigate("/gameboy"), children: t("gadget.gameboy") })), ((!gadgets_1.GADGETS.tier_list_maker.disabled &&
                        profileLevel >= gadgets_1.GADGETS.tier_list_maker.levelRequired) ||
                        (profile === null || profile === void 0 ? void 0 : profile.role) === types_1.Role.ADMIN) && ((0, jsx_runtime_1.jsx)(NavLink, { svg: "tier-list", location: "tier-list", handleClick: changeModal, children: t("gadget.tier_list_maker") })), ((!gadgets_1.GADGETS.sprite_tracker.disabled &&
                        profileLevel >= gadgets_1.GADGETS.sprite_tracker.levelRequired) ||
                        (profile === null || profile === void 0 ? void 0 : profile.role) === types_1.Role.ADMIN) && ((0, jsx_runtime_1.jsx)(NavLink, { svg: "pokemon-sprite", location: "sprite-tracker", handleClick: changeModal, children: t("gadget.sprite_tracker") })), page !== "game" &&
                        ((profile === null || profile === void 0 ? void 0 : profile.role) === types_1.Role.MODERATOR ||
                            (profile === null || profile === void 0 ? void 0 : profile.role) === types_1.Role.ADMIN) && ((0, jsx_runtime_1.jsx)(NavLink, { svg: "hammer", location: "moderation", handleClick: changeModal, children: "Moderation" })), page !== "game" && (profile === null || profile === void 0 ? void 0 : profile.role) === types_1.Role.ADMIN && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(NavLink, { svg: "admin", location: "admin", handleClick: changeModal, children: t("admin_panel.title") }), (0, jsx_runtime_1.jsx)(NavLink, { svg: "pokemon-sprite", onClick: () => navigate("/sprite-viewer"), children: "Sprite Viewer" }), (0, jsx_runtime_1.jsx)(NavLink, { svg: "map", onClick: () => navigate("/map-viewer"), children: "Map Viewer" })] })), page === "game" && profileLevel >= gadgets_1.GADGETS.jukebox.levelRequired && ((0, jsx_runtime_1.jsx)(NavLink, { svg: "compact-disc", location: "jukebox", handleClick: changeModal, children: t("gadget.jukebox") })), (0, jsx_runtime_1.jsx)(NavLink, { svg: "options", location: "options", handleClick: changeModal, children: t("options.title") }), page === "game" && document.fullscreenEnabled && ((0, jsx_runtime_1.jsx)(NavLink, { svg: "fullscreen", onClick: fullscreen_1.toggleFullScreen, children: t("toggle_fullscreen") })), (0, jsx_runtime_1.jsx)("div", { className: "spacer" }), page !== "game" && ((0, jsx_runtime_1.jsx)(NavLink, { svg: "players", className: "community-servers", location: "servers", handleClick: changeModal, children: t("servers_list.title") })), page !== "game" && ((0, jsx_runtime_1.jsx)(NavLink, { svg: "discord", className: "discord", onClick: () => window.open(process.env.DISCORD_SERVER, "_blank"), children: "Discord" })), (0, jsx_runtime_1.jsx)(NavLink, { svg: "exit-door", className: "red logout", onClick: onClickLeave, children: leaveLabel })] }), (0, jsx_runtime_1.jsx)(Modals, { modal: modal, setModal: setModal, page: page }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { show: showSurrenderConfirm, header: t("game-surrender-modal-title"), body: t("game-surrender-modal-body"), onClose: () => setShowSurrenderConfirm(false), footer: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly green", onClick: leave, children: t("yes") }), (0, jsx_runtime_1.jsx)("button", { className: "bubbly red", onClick: () => {
                                setShowSurrenderConfirm(false);
                            }, children: t("no") })] }) })] }));
}
function NavLink(props) {
    const { children, location, handleClick, shimmer = false, svg, png, icon, className = "default", onClick } = props;
    return ((0, jsx_runtime_1.jsx)(react_pro_sidebar_1.MenuItem, { className: (0, jsx_1.cc)("menu-item", className, shimmer ? "shimmer" : ""), onClick: (e) => {
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
            if (location) {
                handleClick === null || handleClick === void 0 ? void 0 : handleClick(location);
            }
        }, icon: (0, jsx_runtime_1.jsxs)("div", { className: "icon", children: [shimmer && ((0, jsx_runtime_1.jsx)("span", { className: "notification", children: (0, jsx_runtime_1.jsx)("img", { width: 10, height: 10, src: "assets/ui/pokeball.svg" }) })), svg ? ((0, jsx_runtime_1.jsx)("img", { width: 32, height: 32, src: `assets/ui/${svg}.svg` })) : png ? ((0, jsx_runtime_1.jsx)("img", { height: 32, src: `assets/ui/${png}.png` })) : (icon)] }), children: children }));
}
function Modals({ modal, setModal, page }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const searchedUser = (0, hooks_1.useAppSelector)((state) => state.lobby.searchedUser);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const closeModal = (0, react_1.useCallback)(() => setModal(undefined), [setModal]);
    (0, react_1.useEffect)(() => {
        if (searchedUser && modal !== "profile") {
            setModal("profile");
        }
    }, [modal, searchedUser, setModal]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(modal_1.Modal, { onClose: closeModal, show: modal === "news", header: t("patch_notes"), className: "patchnotes", children: (0, jsx_runtime_1.jsx)(patchnotes_1.default, {}) }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { onClose: () => {
                    closeModal();
                    console.log("Resetting searched user on close modal profile");
                    dispatch((0, LobbyStore_1.setSearchedUser)(undefined));
                }, show: modal === "profile", header: t("profile.title"), children: (0, jsx_runtime_1.jsx)(profile_1.default, {}) }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { onClose: closeModal, show: modal === "collection", header: t("collection.title"), className: "anchor-top", children: (0, jsx_runtime_1.jsx)(pokemon_collection_1.default, {}) }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { onClose: closeModal, show: modal === "booster", className: "custom-bg boosters-modal", children: (0, jsx_runtime_1.jsx)(booster_1.default, {}) }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { onClose: closeModal, show: modal === "wiki", className: "wiki-modal", header: t("wiki.title"), children: (0, jsx_runtime_1.jsx)(wiki_1.default, { inGame: page === "game" }) }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { show: modal === "meta", header: t("meta"), onClose: closeModal, children: (0, jsx_runtime_1.jsx)(meta_report_1.default, {}) }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { onClose: closeModal, show: modal === "servers", className: "servers-modal", header: t("servers_list.title"), children: (0, jsx_runtime_1.jsx)(servers_list_1.default, {}) }), (0, jsx_runtime_1.jsx)(team_builder_modal_1.default, { show: modal === "team-builder", handleClose: closeModal }), (0, jsx_runtime_1.jsx)(tier_list_maker_modal_1.default, { show: modal === "tier-list", handleClose: closeModal }), (0, jsx_runtime_1.jsx)(sprite_tracker_modal_1.default, { show: modal === "sprite-tracker", handleClose: closeModal }), (0, jsx_runtime_1.jsx)(game_options_modal_1.default, { show: modal === "options", page: page, hideModal: closeModal }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { onClose: closeModal, show: modal === "moderation", header: "Moderation", children: (0, jsx_runtime_1.jsx)(moderation_panel_1.default, {}) }), (0, jsx_runtime_1.jsx)(modal_1.Modal, { onClose: closeModal, show: modal === "admin", header: "Admin", children: (0, jsx_runtime_1.jsx)(admin_panel_1.default, {}) }), (0, jsx_runtime_1.jsx)(jukebox_1.default, { show: modal === "jukebox", handleClose: closeModal }), (0, jsx_runtime_1.jsx)(pokeguesser_1.default, { show: modal === "pokeguesser", handleClose: closeModal }), (0, jsx_runtime_1.jsx)(synergy_wheel_1.default, { show: modal === "synergy-wheel", handleClose: closeModal })] }));
}
//# sourceMappingURL=main-sidebar.js.map