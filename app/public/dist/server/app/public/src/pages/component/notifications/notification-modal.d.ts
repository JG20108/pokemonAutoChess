import type { INotification } from "../../../../../types/notifications";
import "./notification-modal.css";
interface NotificationModalProps {
    notifications: INotification[];
    onClose: (notificationId: string) => void;
}
export declare function NotificationModal({ notifications, onClose }: NotificationModalProps): import("react/jsx-runtime").JSX.Element | null;
export {};
