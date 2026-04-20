"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
exports.formatDuration = formatDuration;
const i18n_1 = __importDefault(require("../../i18n"));
function formatDate(date, params = {}) {
    if (typeof date === "number")
        date = new Date(date);
    try {
        return new Intl.DateTimeFormat(i18n_1.default.language, Object.assign({ dateStyle: "short", timeStyle: "short" }, params)).format(date);
    }
    catch (err) {
        return "Invalid Date";
    }
}
function formatDuration(seconds) {
    const days = Math.floor(seconds / 86400);
    seconds -= days * 86400;
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    if (Intl && Intl.DurationFormat) {
        return new Intl.DurationFormat(i18n_1.default.language, { style: "long" }).format({
            days,
            hours,
            minutes,
            seconds
        });
    }
    return `${days > 0 ? days + " days" : ""}${hours > 0 ? hours + " hours" : ""}${minutes > 0 ? minutes + " min" : ""}${seconds > 0 ? seconds + " s" : ""}`.trim();
}
//# sourceMappingURL=date.js.map