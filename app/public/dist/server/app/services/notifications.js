"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationsService = void 0;
const colyseus_1 = require("colyseus");
const types_1 = require("../types");
const logger_1 = require("../utils/logger");
class NotificationsService {
    constructor() {
        this.notifications = new Map();
    }
    addNotification(userId, type, message, client) {
        const notification = {
            id: `${userId}-${Date.now()}-${Math.random()}`,
            userId,
            type,
            message,
            timestamp: Date.now()
        };
        colyseus_1.matchMaker.presence.publish("notification-added", notification);
        client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.NOTIFICATIONS, [notification]);
    }
    onNotificationAdded(notification) {
        if (!this.notifications.has(notification.userId)) {
            this.notifications.set(notification.userId, []);
        }
        this.notifications.get(notification.userId).push(notification);
    }
    getNotifications(userId) {
        return this.notifications.get(userId) || [];
    }
    clearNotifications(userId) {
        this.notifications.delete(userId);
    }
    clearNotification(userId, notificationId) {
        const userNotifications = this.notifications.get(userId);
        if (userNotifications) {
            const filtered = userNotifications.filter((n) => n.id !== notificationId);
            if (filtered.length > 0) {
                this.notifications.set(userId, filtered);
            }
            else {
                this.notifications.delete(userId);
            }
        }
    }
    getNotificationCount(userId) {
        var _a;
        return ((_a = this.notifications.get(userId)) === null || _a === void 0 ? void 0 : _a.length) || 0;
    }
    cleanupOldNotifications() {
        const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
        let cleanedCount = 0;
        this.notifications.forEach((userNotifications, userId) => {
            const filtered = userNotifications.filter((n) => n.timestamp > oneDayAgo);
            if (filtered.length === 0) {
                this.notifications.delete(userId);
                cleanedCount++;
            }
            else if (filtered.length !== userNotifications.length) {
                this.notifications.set(userId, filtered);
                cleanedCount++;
            }
        });
        if (cleanedCount > 0) {
            logger_1.logger.info(`Cleaned up old notifications for ${cleanedCount} users`);
        }
    }
}
exports.notificationsService = new NotificationsService();
//# sourceMappingURL=notifications.js.map