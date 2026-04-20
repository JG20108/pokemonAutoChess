"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStatsSchema = void 0;
const schema_1 = require("@colyseus/schema");
class GameStatsSchema extends schema_1.Schema {
    constructor(...args) {
        super();
        this.maxHP = 0;
        this.maxAttack = 0;
        this.maxDefense = 0;
        this.maxAP = 0;
        this.maxSpecialDefense = 0;
        this.maxSpeed = 0;
        this.maxPhysicalDamage = 0;
        this.maxSpecialDamage = 0;
        this.maxTrueDamage = 0;
        this.maxShield = 0;
        this.maxHeal = 0;
        this.maxWinStreak = 0;
        this.dittosUsed = 0;
        this.rerollCount = 0;
        this.totalMoneyEarned = 0;
        this.totalPlayerDamageDealt = 0;
        Object.assign(this, ...args);
    }
}
exports.GameStatsSchema = GameStatsSchema;
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "maxHP", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "maxAttack", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "maxDefense", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "maxAP", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "maxSpecialDefense", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "maxSpeed", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "maxPhysicalDamage", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "maxSpecialDamage", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "maxTrueDamage", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "maxShield", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "maxHeal", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], GameStatsSchema.prototype, "maxWinStreak", void 0);
__decorate([
    (0, schema_1.type)("uint8")
], GameStatsSchema.prototype, "dittosUsed", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "rerollCount", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "totalMoneyEarned", void 0);
__decorate([
    (0, schema_1.type)("uint16")
], GameStatsSchema.prototype, "totalPlayerDamageDealt", void 0);
//# sourceMappingURL=game-stats.js.map