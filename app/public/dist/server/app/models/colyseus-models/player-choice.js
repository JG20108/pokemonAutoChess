"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerChoice = void 0;
const schema_1 = require("@colyseus/schema");
class PlayerChoice extends schema_1.Schema {
    constructor(args) {
        super();
        this.items = [];
        this.pokemons = [];
        this.synergies = [];
        this.id = crypto.randomUUID();
        this.type = args.type;
        if (args.items)
            this.items = args.items;
        if (args.pokemons)
            this.pokemons = args.pokemons;
        if (args.synergies)
            this.synergies = args.synergies;
    }
}
exports.PlayerChoice = PlayerChoice;
__decorate([
    (0, schema_1.type)("string")
], PlayerChoice.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], PlayerChoice.prototype, "type", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], PlayerChoice.prototype, "items", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], PlayerChoice.prototype, "pokemons", void 0);
__decorate([
    (0, schema_1.type)(["string"])
], PlayerChoice.prototype, "synergies", void 0);
//# sourceMappingURL=player-choice.js.map