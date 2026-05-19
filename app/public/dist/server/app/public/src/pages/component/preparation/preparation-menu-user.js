"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PreparationMenuUser;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const types_1 = require("../../../../../types");
const hooks_1 = require("../../../hooks");
const network_1 = require("../../../network");
const remove_button_1 = require("../buttons/remove-button");
const elo_badge_1 = require("../profile/elo-badge");
const inline_avatar_1 = require("../profile/inline-avatar");
require("./preparation-menu-user.css");
const preferences_1 = require("../../../preferences");
function PreparationMenuUser(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    const { t } = (0, react_i18next_1.useTranslation)();
    const user = (0, hooks_1.useAppSelector)((state) => state.preparation.user);
    const canKick = props.isOwner || (user && [types_1.Role.MODERATOR, types_1.Role.ADMIN].includes(user.role));
    const removeButton = props.user.isBot ? ((0, jsx_runtime_1.jsx)(remove_button_1.RemoveButton, { onClick: () => (0, network_1.removeBot)(props.user.uid), title: t("remove_bot") })) : canKick && props.user.uid !== (user === null || user === void 0 ? void 0 : user.uid) ? ((0, jsx_runtime_1.jsx)(remove_button_1.RemoveButton, { onClick: () => {
            if (confirm(`Kick ${props.user.name} ?`)) {
                (0, network_1.kick)(props.user.uid);
            }
        }, title: t("kick_user") })) : null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: `my-container player my-box preparation-menu-user ${props.user.ready ? "ready" : "not-ready"}`, children: [(0, jsx_runtime_1.jsx)(elo_badge_1.EloBadge, { elo: (_a = props.user) === null || _a === void 0 ? void 0 : _a.elo }), (0, jsx_runtime_1.jsx)(inline_avatar_1.InlineAvatar, { avatar: (_b = props.user) === null || _b === void 0 ? void 0 : _b.avatar, name: (_c = props.user) === null || _c === void 0 ? void 0 : _c.name, title: (_d = props.user) === null || _d === void 0 ? void 0 : _d.title, role: (_e = props.user) === null || _e === void 0 ? void 0 : _e.role, twitchLogin: ((_f = props.user) === null || _f === void 0 ? void 0 : _f.twitchLogin) || undefined, twitchDisplayName: ((_g = props.user) === null || _g === void 0 ? void 0 : _g.twitchDisplayName) || undefined }), (0, preferences_1.preference)("colorblindMode") && props.user.ready && t("ready"), removeButton] }));
}
//# sourceMappingURL=preparation-menu-user.js.map