"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationModal = NotificationModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const gadgets_1 = require("../../../../../config/game/gadgets");
const Strings_1 = require("../../../../../types/strings/Strings");
const modal_1 = require("../modal/modal");
require("./notification-modal.css");
const jsx_1 = require("../../utils/jsx");
function NotificationModal({ notifications, onClose }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        setCurrentIndex(0);
    }, [notifications]);
    const currentNotification = notifications.length > 0 ? notifications[currentIndex] : null;
    const handleClose = () => {
        if (!currentNotification)
            return;
        onClose(currentNotification.id);
        if (currentIndex < notifications.length - 1) {
            setCurrentIndex(currentIndex + 1);
            return false;
        }
    };
    const closeAll = () => {
        for (let i = currentIndex; i < notifications.length; i++) {
            onClose(notifications[i].id);
        }
    };
    if (!currentNotification) {
        return null;
    }
    const getNotificationTitle = (notification) => {
        switch (notification.type) {
            case "new_title":
                return t("notification.new_title_title");
            case "new_gadget":
                return t("notification.new_gadget_title");
            case "new_theme":
                return t("notification.new_theme_title");
            case "elo_rank_change":
                return t("notification.elo_rank_change_title");
            case "victory_road_finished":
                return t("notification.victory_road_finished_title");
            case "expedition_completed":
                return t("notification.expedition_completed_title");
            case "tournament_finished":
                if (notification.message === "1") {
                    return t("notification.tournament_win_title");
                }
                else if (+notification.message <= 8) {
                    return t("notification.tournament_finalist_title");
                }
                return t("notification.tournament_finished_title");
            case "level_up":
                return t("notification.level_up_title");
            case "info":
            default:
                return t("notification.info_title");
        }
    };
    const getNotificationMessage = (notification) => {
        switch (notification.type) {
            case "level_up":
                return t("notification.level_up_message", {
                    level: notification.message
                });
            case "new_title":
                return t("notification.new_title_message", {
                    title: t(`title.${notification.message}`),
                    description: t(`title_description.${notification.message}`)
                });
            case "new_gadget":
                return t("notification.new_gadget_message", {
                    gadget: t(`gadget.${notification.message}`),
                    description: t(`gadget.${notification.message}_desc`)
                });
            case "new_theme":
                return t("notification.new_theme_message", {
                    theme: t(`theme.${notification.message}`)
                });
            case "elo_rank_change":
                return t("notification.elo_rank_change_message", {
                    rank: t(`elorank.${notification.message}`)
                });
            case "victory_road_finished":
                return t("notification.victory_road_finished_message", {
                    place: (0, Strings_1.getRankLabel)(Number(notification.message))
                });
            case "expedition_completed": {
                const [expeditionType, rank, points] = notification.message.split("|");
                return t("notification.expedition_completed_message", {
                    expedition: t(`expeditions.${expeditionType}`),
                    rank,
                    points
                });
            }
            case "tournament_finished":
                if (notification.message === "1") {
                    return t("notification.tournament_win_message");
                }
                else if (+notification.message <= 8) {
                    return t("notification.tournament_finalist_message", {
                        place: (0, Strings_1.getRankLabel)(Number(notification.message))
                    });
                }
                return t("notification.tournament_finished_message", {
                    place: (0, Strings_1.getRankLabel)(Number(notification.message))
                });
            case "info":
            default:
                return notification.message;
        }
    };
    const getIllustrationSrc = (notification) => {
        switch (notification.type) {
            case "new_title":
                return `/assets/titles/${notification.message}.svg`;
            case "new_gadget":
                return `/assets/ui/${gadgets_1.GADGETS[notification.message].icon}.svg`;
            case "new_theme":
                return `/assets/ui/palette.svg`;
            case "elo_rank_change":
                return `/assets/ranks/${notification.message}.svg`;
            case "victory_road_finished":
                return `/assets/notifications/victory-road.png`;
            case "expedition_completed": {
                const [expeditionType, rank] = notification.message.split("|");
                return `/assets/notifications/${expeditionType}_${rank}.jpg`;
            }
            case "tournament_finished":
                if (notification.message === "1") {
                    return `/assets/notifications/tournament_win.svg`;
                }
                else if (+notification.message <= 8) {
                    return `/assets/notifications/tournament_finalist.svg`;
                }
                return `/assets/notifications/tournament_finish.svg`;
            case "level_up":
                return "/assets/ui/booster.png";
            case "info":
            default:
                return null;
        }
    };
    const illustration = getIllustrationSrc(currentNotification);
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, { className: (0, jsx_1.cc)("notification-modal", currentNotification.type), show: true, onClose: handleClose, header: getNotificationTitle(currentNotification), body: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [illustration != null && (0, jsx_runtime_1.jsx)("img", { src: illustration, alt: "" }), (0, jsx_runtime_1.jsx)("p", { children: getNotificationMessage(currentNotification) })] }), footer: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { className: "bubbly blue", onClick: handleClose, children: currentIndex < notifications.length - 1
                        ? t("notification.next")
                        : t("notification.close") }), notifications.length > 2 &&
                    currentIndex < notifications.length - 1 && ((0, jsx_runtime_1.jsx)("button", { className: "bubbly red", onClick: closeAll, children: t("notification.dismiss_all") }))] }) }));
}
//# sourceMappingURL=notification-modal.js.map