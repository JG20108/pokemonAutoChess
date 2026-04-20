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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const mongoose_1 = require("mongoose");
function countInactiveUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.default.config();
        try {
            firebase_admin_1.default.initializeApp({
                credential: firebase_admin_1.default.credential.cert({
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
                })
            });
            yield (0, mongoose_1.connect)(process.env.MONGO_URI);
            const twoYearsAgo = new Date();
            twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 1);
            let inactiveCount = 0;
            let totalProcessed = 0;
            let nextPageToken;
            do {
                const listUsersResult = yield firebase_admin_1.default.auth().listUsers(1000, nextPageToken);
                for (const userRecord of listUsersResult.users) {
                    const lastSignIn = userRecord.metadata.lastSignInTime;
                    if (!lastSignIn || new Date(lastSignIn) < twoYearsAgo) {
                        inactiveCount++;
                    }
                    totalProcessed++;
                }
                console.log(`Processed: ${totalProcessed} | Inactive: ${inactiveCount}`);
                nextPageToken = listUsersResult.pageToken;
            } while (nextPageToken);
            console.log(`Users inactive for 2+ years: ${inactiveCount}`);
            process.exit(0);
        }
        catch (error) {
            console.error("Error:", error);
            process.exit(1);
        }
    });
}
countInactiveUsers();
//# sourceMappingURL=count-inactive-users.js.map