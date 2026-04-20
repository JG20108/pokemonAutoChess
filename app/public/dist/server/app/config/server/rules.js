"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERNAME_REGEXP = exports.MIN_USER_NAME_LENGTH = exports.MAX_USER_NAME_LENGTH = void 0;
exports.MAX_USER_NAME_LENGTH = 24;
exports.MIN_USER_NAME_LENGTH = 3;
exports.USERNAME_REGEXP = new RegExp(`^[\\p{L}0-9._-]{${exports.MIN_USER_NAME_LENGTH},${exports.MAX_USER_NAME_LENGTH}}$`, "u");
//# sourceMappingURL=rules.js.map