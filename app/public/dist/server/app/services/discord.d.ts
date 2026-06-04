import type { IUserMetadataMongo } from "../types/interfaces/UserMetadata";
import type { IBot } from "../types/models/bot-v2";
export declare const discordService: {
    announceBan(user: IUserMetadataMongo, bannedUser: IUserMetadataMongo, reason: string): void;
    announceUnban(user: IUserMetadataMongo, unbannedUser: IUserMetadataMongo, reason: string): void;
    announceBotCreation(bot: IBot): void;
    announceBotApproval(botData: IBot, approver: IUserMetadataMongo): void;
};
