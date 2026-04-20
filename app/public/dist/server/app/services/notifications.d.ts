import { INotification, NotificationType } from "../types/notifications";
declare class NotificationsService {
    private notifications;
    constructor();
    addNotification(userId: string, type: NotificationType, message: string): void;
    onNotificationAdded(notification: INotification): void;
    getNotifications(userId: string): INotification[];
    clearNotifications(userId: string): void;
    clearNotification(userId: string, notificationId: string): void;
    getNotificationCount(userId: string): number;
    cleanupOldNotifications(): void;
}
export declare const notificationsService: NotificationsService;
export {};
