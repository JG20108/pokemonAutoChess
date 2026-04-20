"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wanderer = void 0;
const schema_1 = require("@colyseus/schema");
class Wanderer extends schema_1.Schema {
    constructor({ id, pkm, shiny, type, behavior, data }) {
        super();
        this.shiny = false;
        this.data = "";
        this.id = id;
        this.pkm = pkm;
        this.shiny = shiny;
        this.type = type;
        this.behavior = behavior;
        this.data = data !== null && data !== void 0 ? data : "";
    }
}
exports.Wanderer = Wanderer;
__decorate([
    (0, schema_1.type)("string")
], Wanderer.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], Wanderer.prototype, "pkm", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], Wanderer.prototype, "shiny", void 0);
__decorate([
    (0, schema_1.type)("string")
], Wanderer.prototype, "type", void 0);
__decorate([
    (0, schema_1.type)("string")
], Wanderer.prototype, "behavior", void 0);
__decorate([
    (0, schema_1.type)("string")
], Wanderer.prototype, "data", void 0);
//# sourceMappingURL=wanderer.js.map